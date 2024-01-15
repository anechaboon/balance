import axios from 'axios';

let url = 'http://127.0.0.1:7000'
class Income {
    async getIncome(queryString = '') {
        return await axios.get(url + '/api/v1/service/income' + queryString);
    }
    async add(param) {
        return await axios.post(url + '/api/v1/service/income', param);
    }
}

class Expense {
    async getExpense(queryString = '') {
        return await axios.get(url + '/api/v1/service/expense' + queryString);
    }
    async add(param) {
        return await axios.post(url + '/api/v1/service/expense', param);
    }
}

class IncomeCategories {
    async getIncomeCategories() {
        return await axios.get(url + '/api/v1/service/incomeCategories');
    }
}

class ExpenseCategories {
    async getExpenseCategories() {
        return await axios.get(url + '/api/v1/service/expenseCategories');
    }
}

class Wallet {
    async getWallets() {
        return await axios.get(url + '/api/v1/service/wallet');
    }
    async getWalletById(id) {
        return await axios.get(url + `/api/v1/service/wallet/${id}`);
    }
}

class Home {
    async getBalance(queryString = '') {
        return await axios.get(url + '/api/v1/service/home/getBalance' + queryString);
    }
    async getIncomeAndExpense(queryString) {
        return await axios.get(url + '/api/v1/service/home/getIncomeAndExpense' + queryString);
    }
    async Report(param){
        return await axios.post(url + '/api/v1/service/home/report', param)
    }
}

class CheckList {
    async get(queryString = '') {
        return await axios.get(url + '/api/v1/service/check-list' + queryString);
    }
    async add(param) {
        return await axios.post(url + '/api/v1/service/check-list', param);
    }
    async buy(param) {
        return await axios.post(url + '/api/v1/service/check-list/buy', param);
    }
}

class Authorization {
    async login(param) {
        return await axios.post(url + '/api/v1/service/login', param);
    }
    async register(param) {
        return await axios.post(url + '/api/v1/service/register', param);
    }
    
}

export default {
    Income: new Income(),
    Expense: new Expense(),
    IncomeCategories: new IncomeCategories(),
    ExpenseCategories: new ExpenseCategories(),
    Wallet: new Wallet(),
    Home: new Home(),
    CheckList: new CheckList(),
    Authorization: new Authorization(),

};
