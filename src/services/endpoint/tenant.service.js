import axios from 'axios';


class Income {
    async getIncome(queryString = '') {
        return await axios.get('http://127.0.0.1:8000/api/v1/service/income' + queryString);
    }
    async add(param) {
        return await axios.post('http://127.0.0.1:8000/api/v1/service/income', param);
    }
}

class Expense {
    async getExpense(queryString = '') {
        return await axios.get('http://127.0.0.1:8000/api/v1/service/expense' + queryString);
    }
    async add(param) {
        return await axios.post('http://127.0.0.1:8000/api/v1/service/expense', param);
    }
}

class IncomeCategories {
    async getIncomeCategories() {
        return await axios.get('http://127.0.0.1:8000/api/v1/service/incomeCategories');
    }
}

class ExpenseCategories {
    async getExpenseCategories() {
        return await axios.get('http://127.0.0.1:8000/api/v1/service/expenseCategories');
    }
}


class Home {
    async getBalance(queryString = '') {
        return await axios.get('http://127.0.0.1:8000/api/v1/service/home/getBalance' + queryString);
    }
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
    Expense: new Expense(),
    IncomeCategories: new IncomeCategories(),
    ExpenseCategories: new ExpenseCategories(),
    Home: new Home(),
    Authorization: new Authorization()
};
