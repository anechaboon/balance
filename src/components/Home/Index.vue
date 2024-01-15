<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
      <!-- Your main content goes here -->
      <Main></Main>
      <Transactions></Transactions>
  </v-app>
</template>

<script>
import Main from './Main.vue';
import Transactions from './Transactions.vue';
export default {
  components:{
    Transactions,
    Main
  },
  data() {
    return {
    };
  },
};
</script>

<style>
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