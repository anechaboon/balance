<!-- eslint-disable vue/no-deprecated-filter -->
<template>
    <placeholder-content is-load="true" v-if="onload" />
    <div class="m-05em dashboard d-flex" v-else>
        <div class="col-1">
            <v-btn
                :icon="`mdi-chevron-left-circle`"
                variant="text"
                width="40"
                :class="'mt-5 btm'"
                @click="preWallet()"
                :disabled="indexId==0"
            ></v-btn>
        </div>
        <div class="col-10 h-40 mx-1 px-3" :style="'width:80%'">
            <div class="pb-2em row">
                <div class="col-2">
                    <img class="img-profile" alt="Vue logo" :src="imageUrl" />
                </div>
                <div class="col-10 mt-2">
                    <p>{{ name }}</p>
                </div>
            </div>
            <div class="balance">
                <p class="mb-1">Wallet | {{ wallet.title }}</p>
                <h1>฿ <b>{{ $filters.formatNumber(wallet.balance) }}</b></h1>
            </div>
        </div>
        <div class="col-1">
            <v-btn
                :to="'dashboard'"
                :icon="`mdi-chart-bar`"
                width="40"
                variant="text"
            ></v-btn>
            <v-btn
                :icon="`mdi-chevron-right-circle`"
                width="40"
                variant="text"
                :class="'btm'"
                @click="nextWallet()"
                :disabled="indexId==walletListId.length-1"
            ></v-btn>
        </div>
    </div>
</template>
  
<script>
import Api from '@/services/endpoint/tenant.service'
import PlaceholderContent from "@/plugins/PlaceholderContent";

export default {
    name: 'DashboardPage',
    components:{
        PlaceholderContent
    },
    data() {
      return {
        onload: true,
        imageUrl: localStorage.getItem('image_url'),
        name: localStorage.getItem('name'),
        walletId: parseInt(localStorage.getItem('walletId')),
        indexId: 0,
        wallet: {},
        walletListId: [],
      };
    },
    mounted(){
        this.fetchData();
    },
    methods:{
        async fetchData(){
            this.getBalance()
            this.getWallets()
        },
        async getBalance(){
            let queryString = "?user_id=" + parseInt(localStorage.getItem(`balanceUserId`)) + "&wallet_id=" + this.walletId ;
            let res = await Api.Home.getBalance(queryString);
            if(res.status == 200){
                this.wallet = res.data
                this.onload = false
            }
        },
        async getWallets(){
            let res = await Api.Wallet.getWallets();
            if(res.status == 200){
                this.walletList = res.data
                let walletListId = []
                res.data.forEach(function(value) {
                    walletListId.push(value.id)
                });
                this.walletListId = walletListId
                let self = this
                this.indexId = this.walletListId.findIndex((id) => id == self.walletId)
            }
        },
        async preWallet(){
            this.indexId -= 1
            this.walletId = this.walletListId[this.indexId]
            this.getBalance()
        },
        async nextWallet(){
            this.indexId += 1
            this.walletId = this.walletListId[this.indexId]
            this.getBalance()
        }
    },
    filters: {
        format_number: function (value) {
            console.log(`log:formatNumber-value`,value);
        },
    },
}
</script>

<style>
    .dashboard{
        background-color: #bdf0da;
        padding: 10px;
        border-radius: 20px 20px;
    }
    .btm {
        display: inline-block;
        height: 100% !important;
        vertical-align: bottom;
    }
</style>
  