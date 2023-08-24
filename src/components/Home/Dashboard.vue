<template>
    <div class="m-05em dashboard">
        <div class="pl-2em h-40">
            <div class="pb-2em">
                <img alt="Vue logo" src="@/assets/profile.png" width="40" />
                <h3>{{ balance.full_name }}</h3>
            </div>
            <div class="balance">
                <p>Available balance</p>
                <h1>฿ <b>{{ balance.balance }}</b></h1>
            </div>
        </div>
    </div>

</template>
  
<script>
import Cookies from 'js-cookie'
import Api from '@/services/endpoint/tenant.service'
export default {
    name: 'DashboardPage',
    data() {
      return {
        balance: {},
      };
    },
    mounted(){
        this.fetchData();
    },
    methods:{
        async fetchData(){
            let queryString = "?user_id=" + parseInt(Cookies.get('balanceUserId'));
            let res = await Api.Home.getBalance(queryString);
            this.balance = res.data
        }
    }


}
</script>

<style>
    .dashboard{
        background-color: #bdf0da;
        padding: 10px;
        border-radius: 20px 20px;
    }
</style>
  