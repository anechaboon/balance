<template>
    <div class="border-radius">
        <div class="m-05em">
            Today
        </div>
        <div class="transactions">
            <div class="row pt-1 my-1" v-for="item in allTransactionList" :key="item.id" :class="[item.expense_category_id ? 'pink' : 'green']">
                <div class="col-2">
                    <img alt="Vue logo" src="@/assets/profile.png" width="40" />
                </div>
                <div class="col-7">
                    <div>
                        <b>{{ item.type_name }} - {{ item.memo }}</b>
                    </div>
                    <div>
                        {{ item.created_date }}
                    </div>
                </div>
                <div class="col-3">
                    <b v-if="item.expense_category_id">- ฿ {{ item.amount }}</b>
                    <b v-else>+ ฿ {{ item.amount }}</b>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import Api from '@/services/endpoint/tenant.service'
export default {
    name: 'DashboardPage',
    data() {
        return {
            allTransactionList: []
        };
    },
    mounted(){
        this.allTransaction();
    },
    methods:{
        async allTransaction(){
            let res = await Api.Home.getIncomeAndExpense();
            this.allTransactionList = res.data
        }
    },
    
    

}
</script>

<style>
    .m-05em{
        margin: 0.5em;
    }
    .border-radius{
        border-radius: 20px;
    }
    .pink{
        background-color: #f0bdbd;
    }
    .green{
        background-color: #bdf0da;
    }
</style>
  