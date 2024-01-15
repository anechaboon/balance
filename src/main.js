/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import numeral from 'numeral'
import { createStore } from "vuex";

import checkListModule from "./store/modules/checkList"; // Import โมดูล checkList ที่คุณสร้าง
import Select2 from 'vue3-select2-component';

import '@vuepic/vue-datepicker/dist/main.css'

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const store = createStore({
  modules: {
    checkList: checkListModule, // เพิ่มโมดูล checkList ใน store
    // สามารถเพิ่มโมดูลอื่น ๆ ที่คุณต้องการด้วย
  },
});

const app = createApp(App)

app.config.globalProperties.$filters = {
    formatNumber: function (value) {
        return numeral(value).format("0,0");
    },
};
  
registerPlugins(app)
app.component(Select2)
app.component(Bar)
app.use(store);
app.mount('#app')
