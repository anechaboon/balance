import axios from 'axios';
import AccessToken from '@/services/auth-tenant';
import $ from 'jquery';

var CryptoJS = require("crypto-js");

const ACCESS_TOKEN = AccessToken();

const host = window.location.host;
const parts = host.split('.');

let tenantUrl = window.location.protocol + "//" + parts[0] + '.' + process.env.TENANT_API_ROOT;

let config = {
    headers: {
        Authorization: 'Bearer ' + ACCESS_TOKEN.token,
        TimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }
};

const signature = (queryString = "") => {
    const jsx = require("js-extension-ling");
    const params = jsx.queryStringToObject(queryString);

    const key = process.env.V2_APP_KEY;
    const partner_app_secret = process.env.V2_APP_SECRET;
    const timestamp = new Date().getTime();
    let query = Object.entries(params).reduce((a, [k, v]) => (v ? (a[k] = v, a) : a), {});
    query = {
        ...query, ...{
            key, timestamp
        }
    };
    let baseString = `secret=${partner_app_secret}`;
    for (const key of Object.keys(query).sort()) {
        if ((typeof query[key] === "object" || typeof query[key] === 'function') && (query[key] !== null)) {
            let dataValue = Object.values(query[key]);
            query[key] = [];
            dataValue.map(function(value){
                query[key].push(value);
                baseString += `${key}[]=${value}`
            });
        } else if (Array.isArray(query[key])) {
            for (const value of query[key]) {
                baseString += `${key}[]=${value}`
            }
        } else {
            baseString += `${key}=${query[key]}`
        }
    }

    const hmac = CryptoJS.HmacSHA256(baseString, partner_app_secret);
    const signature = hmac.toString(CryptoJS.digest);

    query = { ...query, signature };

    return '?' + $.param(query);
}

class Signature {
    create(query){
        return signature(query);
    }
}

class Authorization {
    async checkLogged() {
        return await axios.get(tenantUrl + '/v1/auth/check', config);
    }
}

class Income {
    async getIncome() {
        return await axios.get(tenantUrl + '/v1/service/income', config);
    }
}

export default {
    Authorization: new Authorization(),
    Signature: new Signature(),
    AUTH: {
        URL: tenantUrl,
        TOKEN: ACCESS_TOKEN.token
    },
    Income: new Income(),
};
