<template>
  <v-app>
    <div class="flex-container">
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
    </div>
  </v-app>
</template>

<script>
import '@vuepic/vue-datepicker/dist/main.css'
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
        {
          icon: "mdi-format-list-checks",
          link: "checkList",
          path: "/checkList",
          style: "font-size:30px",
        },
        { icon: "mdi-cog", link: "settings", path: "/settings" },
      ],
    };
  },
}
</script>


<style>
/* numpad */
.vuertual-numeric-keyboard {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
}
.vuertual-numeric-keyboard .btn {
  font-weight: bold;
}
.btn-keyboard {
  background-color: #80b6ff !important;
  color: #ffffff !important;
}
.btn-calculator {
  height: 2em;
}
/* numpad */

.m-05em{
  margin: 0.5em;
}
.border-radius{
  border-radius: 8px;
}
.pink{
  background-color: #f0bdbd;
}
.green{
  background-color: #bdf0da;
}
.flex-container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* ให้ความสูงเต็มหน้าจอ */
}
.img-profile{
  border-radius: 50%;
  height: 2.5em;
  width: 2em;
}
v-content {
  flex: 1; /* ให้ v-content ขยายตามพื้นที่ที่เหลือ */
}
</style>
