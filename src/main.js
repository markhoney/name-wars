import {createApp} from 'vue';
import BootstrapVue3 from 'bootstrap-vue-3';
import App from './App.vue';
// import {router} from './router.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

import names from './assets/names.json';

const start = 1900;
const end = 2021;

const app = createApp(App);
app.use(BootstrapVue3);
app.config.globalProperties.years = [...Array(end + 1 - start).keys()].map((index) => index + start);
app.config.globalProperties.names = names;
app.config.performance = true;
// app.use(router);
app.mount('#app');
