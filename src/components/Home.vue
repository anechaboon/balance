<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
    <v-main>
      <!-- Your main content goes here -->

      <!-- Bottom Navigation -->
      <v-bottom-navigation v-model="activeLink">
        <v-btn v-for="(item, index) in links" :key="index" @click="activeLink = item.link">
          <v-icon>{{ item.icon }}</v-icon>
          {{ item.text }}
        </v-btn>
      </v-bottom-navigation>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      activeLink: 'home',
      links: [
        { text: 'Home', icon: 'mdi-home', link: 'home' },
        { text: 'Favorites', icon: 'mdi-heart', link: 'favorites' },
        { text: 'Settings', icon: 'mdi-cog', link: 'settings' },
      ],
    };
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
