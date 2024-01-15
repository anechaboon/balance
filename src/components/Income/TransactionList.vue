<template>
    <div class="border-radius mb-5">
        <div class="m-05em">
            Today
        </div>
        <div class="transactions">
            <div class="d-flex green p-2 my-1 border-radius" v-for="item in incomeList" :key="item.id">
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
                    <b>+ ฿ {{ $filters.formatNumber(item.amount) }}</b>
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
        incomeList: [],
      };
    },
    mounted(){
        this.fetchData();
    },
    methods:{
        async fetchData(){
            let queryString = '?sort=desc';
            let res = await Api.Income.getIncome(queryString);
            this.incomeList = res.data
        }
    }
    

}
</script>
  