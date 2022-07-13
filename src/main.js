import {createApp} from 'vue';
import BootstrapVue3 from 'bootstrap-vue-3';
import App from './App.vue';
// import {router} from './router.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

import VueApexCharts from "vue3-apexcharts";


import names from './assets/names.json';

const app = createApp(App);
app.use(BootstrapVue3);
app.use(VueApexCharts);
app.config.globalProperties.$names = {
	names,
	years: (start = 1900, end = 2021) => [...Array(end + 1 - start).keys()].map((index) => index + start),
	random: () => names[Math.floor(Math.random() * names.length)],
	top: (year, length = 9999) => Object.keys(names).map((name) => ({name, number: names[name][year] || 0})).sort((a, b) => b.number - a.number).slice(0, length),
};
app.config.performance = true;
// app.use(router);
app.mount('#app');
