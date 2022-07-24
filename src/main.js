import {createApp} from 'vue';
// import {ViteSSG} from 'vite-ssg';
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import VueApexCharts from "vue3-apexcharts";

import BabyNames from './plugins/babynames';
import router from './router';

import App from './App.vue';

const app = createApp(App);
// const app = ViteSSG(App, {routes: router.routes});
app.use(BootstrapVue3);
app.use(VueApexCharts);
app.use(BabyNames);
app.config.performance = true;
app.use(router);
app.mount('body');
// app.mount('#app');
