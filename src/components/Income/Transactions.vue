<template>
    <div class="m-05em border-radius">
        <div class="row">
            <div class="col-10 pl-4">
                <h1>Income</h1>
            </div>
            <div class="col-2">
                <v-btn
                    :to="'income'"
                    :icon="`mdi-chevron-left-circle`"
                    height="40"
                    variant="text"
                    width="40"
                ></v-btn>
            </div>
        </div>
        <TransactionList></TransactionList>
    </div>

</template>
  
<script>
import TransactionList from './TransactionList.vue';
export default {
    name: 'DashboardPage',
    components: {
        TransactionList
    },

}
</script>

<style>
    .income-transaction{
        background-color: #bdf0da;
        padding: 10px;
        border-radius: 20px;
    }
    .v-btn__overlay{
        background-color: unset !important;
    }
</style>
  