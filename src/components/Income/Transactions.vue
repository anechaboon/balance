<template>
    <div class="m-05em income-transaction">
        <div class="row">
            <div class="col-10">
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
    .m-05em{
        margin: 0.5em;
    }
    .income-transaction{
        background-color: #bdf0da;
        padding: 10px;
        border-radius: 20px;
    }
    .border-radius{
        border-radius: 20px;
    }
    .v-btn__overlay{
        background-color: unset !important;
    }
</style>
  