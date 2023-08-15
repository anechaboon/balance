import axios from 'axios';


class Income {
    async getIncome(queryString) {
        return await axios.get('http://127.0.0.1:8000/api/v1/service/income' + queryString);
    }
    async add(param) {
        return await axios.post('http://127.0.0.1:8000/api/v1/service/income', param);
    }
}

class IncomeCategories {
    async getIncomeCategories() {
        return await axios.get('http://127.0.0.1:8000/api/v1/service/incomeCategories');
    }
}

class Home {
    async getIncomeAndExpense() {
        return await axios.get('http://127.0.0.1:8000/api/v1/service/home/getIncomeAndExpense');
    }
}

class Authorization {
    async login(param) {
        return await axios.post('http://127.0.0.1:8000/api/v1/service/login', param);
    }
}

export default {
    Income: new Income(),
    IncomeCategories: new IncomeCategories(),
    Home: new Home(),
    Authorization: new Authorization()
};
