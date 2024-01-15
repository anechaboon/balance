<template>
    <div class="m-05em">
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
            <TransactionList></TransactionList>
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