<template>
    <div class="border-radius mb-5">
        <div class="m-05em">
            Today
        </div>
        <div class="transactions">
            <div class="d-flex p-2 my-1 border-radius" v-for="item in allTransactionList" :key="item.id" :class="[item.expense_category_id ? 'pink' : 'green']">
                <div class="col-2">
                    <img alt="Vue logo" class="img-profile" :src="[item.user.image_url ? item.user.image_url : '/src/assets/profile.png'] " :title="item.user.full_name" />
                </div>
                <div class="col-7">
                    <div>
                        <b>{{ item.type_name }} {{ item.memo }}</b>
                    </div>
                    <div>
                        {{ item.created_date }}
                    </div>
                </div>
                <div class="col-3">
                    <b v-if="item.expense_category_id">- ฿ {{ $filters.formatNumber(item.amount) }}</b>
                    <b v-else>+ ฿ {{ $filters.formatNumber(item.amount) }}</b>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import Api from '@/services/endpoint/tenant.service'
import moment from "moment";
export default {
    name: 'DashboardPage',
    data() {
        return {
            date: [],
            allTransactionList: []
        };
    },
    mounted(){
        this.allTransaction();
    },
    methods:{
        async allTransaction(){
            const startDate = new Date();
            const endDate = new Date(new Date().setDate(startDate.getDate() + 1));
            
            this.date = [startDate, endDate];
            
            
            let startDateFormated = moment(this.date[0]).format('YYYY-MM-DD 00:00:00');
            let endDateFormated = moment(this.date[1]).format('YYYY-MM-DD 00:00:00');
            
            let queryString = `?startDate=${startDateFormated}&endDate=${endDateFormated}`
            
            let res = await Api.Home.getIncomeAndExpense(queryString);
            this.allTransactionList = res.data
        }
    },
    
    

}
</script>
  