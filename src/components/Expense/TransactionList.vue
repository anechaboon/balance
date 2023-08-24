<template>
    <div class="border-radius">
        <div class="m-05em">
            Today
        </div>
        <div class="transactions">
            <div class="row pb-3" v-for="item in expenseList" :key="item.id">
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
                    <b>- ฿ {{ item.amount }}</b>
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
        expenseList: [],
      };
    },
    mounted(){
        this.fetchData();
    },
    methods:{
        async fetchData(){
            let queryString = '?sort=desc';
            let res = await Api.Expense.getExpense(queryString);
            this.expenseList = res.data
        }
    }
    

}
</script>

<style>
    .m-05em{
        margin: 0.5em;
    }
    .border-radius{
        border-radius: 20px;
    }
</style>
  