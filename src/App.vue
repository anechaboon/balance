<template>
  <v-app>
    <!-- Content -->
    <v-content>
      <router-view></router-view>
    </v-content>

    <!-- Bottom Navigation -->
    <v-bottom-navigation v-model="activeLink">
      <v-btn
        v-for="(item, index) in links"
        @click="activeLink = item.link"
        :key="index"
        :to="item.path"
      >
        <v-icon :style="item.style">{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      activeLink: "home",
      links: [
        {
          icon: "mdi-home",
          link: "home",
          path: "/",
        },
        {
          icon: "mdi-cash-plus",
          link: "income",
          path: "/income",
          style: "font-size:30px",
        },
        {
          icon: "mdi-cash-minus",
          link: "expense",
          path: "/expense",
          style: "font-size:30px",
        },
        { icon: "mdi-cog", link: "settings", path: "/settings" },
      ],
    };
  },
  methods:{
  },
  mounted(){

    // let balanceUserId = Cookies.get('balanceUserId');
    // balanceUserId = typeof balanceUserId;
    // if(balanceUserId === 'undefined'){
    //   Cookies.set('balanceUserId', null)
    //   window.location.href = '/login'; //relative to domain
    // } 


  }
};
</script>
<style>
</style>
