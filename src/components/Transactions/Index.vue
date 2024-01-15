<template>
    <div class="m-05em">
        <div class="row pl-2">
            <div class="col-10">
                <h1>Transactions</h1>
            </div>
            <div class="col-2">
                <v-btn
                    :to="'/'"
                    :icon="`mdi-chevron-left-circle`"
                    height="40"
                    variant="text"
                    width="40"
                ></v-btn>
            </div>

        </div>
        <Transactions></Transactions>

    </div>
    
</template>
  
<script>
    import Transactions from '../Home/TransactionList.vue';
    export default {
        name: 'DashboardPage',
        components:{
            Transactions
        }
        
    }
</script>

<style>
    .dashboard{
        background-color: #bdf0da;
        padding: 10px;
        border-radius: 20px;
    }
    .v-btn__overlay{
        background-color: unset !important;
    }
</style>
  