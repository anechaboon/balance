<template>
    <div class="border-radius mb-5">
        <div class="row">
            <div class="col">
                <div class="text-start">Today</div>
            </div>
            <div class="col">
                <div class="text-end">
                    <v-btn :to="'report-expense'" :class="'shadow-none'" >
                        <v-icon>mdi-chart-bar</v-icon>
                    </v-btn>
                </div>
            </div>
        </div>

        <div class="transactions">
            <div class="d-flex pink p-2 my-1 border-radius" v-for="item in expenseList" :key="item.id">
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
                    <b>- ฿ {{ $filters.formatNumber(item.amount) }}</b>
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