<template>
    <div class="m-05em pl-3 mr-3">
        <div class="row">
            <div class="col-10">
                <h1>Transactions</h1>
            </div>
            <div class="col-2">
                <v-btn
                    :to="'allTransaction'"
                    :icon="`mdi-chevron-right-circle`"
                    height="40"
                    variant="text"
                    width="40"
                ></v-btn>
            </div>
        </div>
        <div class="row">
            <div class="m-05em">
                Today
            </div>
            <div class="transactions">
                <TransactionList></TransactionList>
            </div>
        </div>
    </div>
  </template>
  
<script>
import TransactionList from './TransactionList.vue';
export default {
    name: 'TransactionsPage',
    components: {
        TransactionList
    }
    
}
</script>
  
  <style>
    .custom-button-style {
        border-radius: 20px;
    }
  </style>