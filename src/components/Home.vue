<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
      <!-- Your main content goes here -->
      <DashboardVue></DashboardVue>
      <TransactionsPage></TransactionsPage>
      <!-- Bottom Navigation -->
      <v-bottom-navigation v-model="activeLink">
        <v-btn v-for="(item, index) in links" :key="index" @click="activeLink = item.link">
          <v-icon :style="item.style">{{ item.icon }}</v-icon>
        </v-btn>
      </v-bottom-navigation>
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
      activeLink: 'home',
      links: [
        { icon: 'mdi-home', link: 'home' },
        { icon: 'mdi-cash-plus', link: 'income', style: 'font-size:30px' },
        { icon: 'mdi-cash-minus', link: 'expense', style: 'font-size:30px' },
        { icon: 'mdi-cog', link: 'settings' },
      ],
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