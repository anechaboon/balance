<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
      <!-- Your main content goes here -->
      <DashboardVue></DashboardVue>
      <TransactionsPage></TransactionsPage>
  </v-app>
</template>

<script>
import DashboardVue from './Dashboard.vue';
import TransactionsPage from './Transactions.vue';
export default {
  components:{
    TransactionsPage,
    DashboardVue
  },
  data() {
    return {
    };
  },
};
</script>

<style>
  .m-05em{
    margin: 0.5em;
  }
  .m-1em{
    margin: 1em;
  }
  .pl-2em {
    padding-left: 2em;
  }
  .pb-2em {
    padding-bottom: 2em;
  }
  .h-40 {
    height: 40%;
  }
</style>