<template>
    <div class="m-05em pl-3 mr-3 expense">
        <div class="row">
            <div class="col-10">
                <h1>Expense</h1>
            </div>
            <div class="col-2">
                <v-btn
                    :to="'expenseTransaction'"
                    :icon="`mdi-chevron-right-circle`"
                    height="40"
                    variant="text"
                    width="40"
                ></v-btn>
            </div>
        </div>
        <ExpenseType></ExpenseType>
        <div class="p-2">
            <div class="row">
                <div class="col-6 pr-0">
                    <input
                        type="number"
                        class="form-control m-1"
                        v-model="keyAmount"
                        id="txtBox"
                        placeholder="Press any button"
                    />
                </div>
                <div class="col-6">
                    <input type="text" v-model="memo" class="form-control m-1" placeholder="Enter MEMO">
                </div>
            </div>

            <Keyboard class="m-1" @pressed="keyAmount = $event" :selfValue="keyAmount"></Keyboard>
            <button class="btn btn-primary w-100" @click="saveExpense">SAVE</button>
        </div>
        <div class="row">
            <TransactionList ref="transactionList"></TransactionList>
        </div>
        
    </div>
</template>

<script>
import Keyboard from './Keyboard.vue'
import ExpenseType from './ExpenseType.vue'
import TransactionList from './TransactionList.vue'
import Api from '@/services/endpoint/tenant.service'
import Cookies from 'js-cookie'
export default {
    name: 'ExpensePage',
    components: {
        Keyboard,
        ExpenseType,
        TransactionList
    },
    data() {
      return {
       amount: null,
       keyAmount:'',
       expenseType: '',
       memo: ''
      }
    },
    methods:{
        async saveExpense(){
            this.amount = this.keyAmount

            if(this.expenseCategoryId == null || this.expenseCategoryId == ''){
                alert('PLEASE SELECT INCOME TYPE')
            }else{
                let param = {
                    memo : this.memo,
                    expense_category_id : this.expenseCategoryId,
                    amount : this.amount,
                    user_id: parseInt(Cookies.get('balanceUserId'))
                }
                await Api.Expense.add(param);
            }
            this.$refs.transactionList.fetchData()
        }
    }

}
</script>

<style>
    .m-05em{
        margin: 0.5em;
    }
    .expense{
        background-color: #f0bdbd;
        padding: 10px;
        border-radius: 20px;
    }
    .border-radius{
        border-radius: 20px;
    }
</style>