<template>
  <v-app>
    <!-- Content -->
    <v-content>
      <router-view></router-view>
    </v-content>

    <!-- Bottom Navigation -->
    <v-bottom-navigation v-model="activeLink">
      {{ activeLink }}

      <v-btn
        v-for="(item, index) in links"
        :key="index"
        @click="selectTab(item.link)"
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
    selectTab(link){
      console.log(`log:link`,link);
      this.activeLink = link

    }
  }
};
</script>
<style>
</style>
