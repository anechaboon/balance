<template>
    <div class="m-05em mx-2">
        <div class="p-2 border-radius pink">
            <div class="row">
                <div class="col-2">
                    <v-btn
                        :icon="`mdi-chevron-left-circle`"
                        height="40"
                        variant="text"
                        width="40"
                        @click="preWallet()"
                        :disabled="indexId==0"
                    ></v-btn>
                </div>
                <div class="col-8 text-center">
                    <h1>{{ wallet.title }}</h1>
                </div>
                <div class="col-2">
                    <v-btn
                        :icon="`mdi-chevron-right-circle`"
                        height="40"
                        variant="text"
                        width="40"
                        @click="nextWallet()"
                        :disabled="indexId==walletListId.length-1"
                    ></v-btn>
                </div>
            </div>
            <ExpenseType></ExpenseType>
            <div class="p-2">
                <div class="row">
                    <div class="col-6 pr-0">
                        <input
                            type="text"
                            class="form-control m-1"
                            v-model="keyAmount"
                            id="txtBox"
                            placeholder="Press any button"
                            readonly
                        />
                    </div>
                    <div class="col-6">
                        <input type="text" v-model="memo" class="form-control m-1" placeholder="Enter MEMO">
                    </div>
                </div>

                <Keyboard class="m-1" @pressed="keyAmount = $event" :selfValue="keyAmount"></Keyboard>

                <ladda
                    text="Save"
                    :loading="loading"
                    :btn-class="'btn btn-primary w-100'"
                    @click="saveExpense()"
                />
            </div>
        </div>
        <div class="row bg-white">
            <TransactionList ref="transactionList"></TransactionList>
        </div>
    </div>
</template>

<script>
import Keyboard from './Keyboard.vue'
import ExpenseType from './ExpenseType.vue'
import TransactionList from './TransactionList.vue'
import Api from '@/services/endpoint/tenant.service'
import Ladda from '@/plugins/Ladda.vue';

export default {
    name: 'ExpensePage',
    components: {
        Keyboard,
        ExpenseType,
        TransactionList,
        Ladda
    },
    data() {
      return {
        amount: null,
        keyAmount:'',
        expenseType: '',
        memo: '',
        loading: false,
        walletId: parseInt(localStorage.getItem('walletId')),
        indexId: 0,
        wallet: {},
        walletListId: [],
      }
    },
    mounted(){
        this.getWallets()
    },
    methods:{
        async saveExpense(){
            this.loading = true;
            this.amount = this.keyAmount.replaceAll(",","");

            if(this.expenseCategoryId == null || this.expenseCategoryId == ''){
                alert('PLEASE SELECT INCOME TYPE')
            }else{
                if(this.amount > 0 && this.amount != ''){
                    let param = {
                        memo : this.memo,
                        expense_category_id : this.expenseCategoryId,
                        amount : parseFloat(this.amount),
                        user_id: parseInt(localStorage.getItem(`balanceUserId`)),
                        wallet_id: this.walletId
                    }
                    await Api.Expense.add(param);
                    this.keyAmount = ''
                    this.memo = ''
                    this.loading = false;
                }
            }
            this.$refs.transactionList.fetchData()
        },
        async getWallets(){
            let res = await Api.Wallet.getWallets();
            if(res.status == 200){
                this.walletList = res.data
                let walletListId = []
                if(!isNaN(this.walletId)){
                    this.wallet = res.data.find(obj => obj.id == this.walletId)
                }else{
                    this.wallet = res.data[0]
                    this.walletId = this.wallet.id
                }
                res.data.forEach(function(value) {
                    walletListId.push({
                        id: value.id,
                        title: value.title
                    })
                });
                this.walletListId = walletListId
                let self = this
                this.indexId = this.walletListId.findIndex((val) => val.id == self.walletId)
                
            }
        },
        async preWallet(){
            this.indexId -= 1
            this.wallet = this.walletListId[this.indexId]
        },
        async nextWallet(){
            this.indexId += 1
            this.wallet = this.walletListId[this.indexId]
        }
    }

}
</script>