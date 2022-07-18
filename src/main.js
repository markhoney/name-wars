import {createApp} from 'vue';
// import {ViteSSG} from 'vite-ssg';
import BootstrapVue3 from 'bootstrap-vue-3';
import App from './App.vue';
import router from './router.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

import VueApexCharts from "vue3-apexcharts";

import names from './assets/names.json';

const years = (start = 1900, end = 2021) => [...Array(end + 1 - start).keys()].map((index) => index + start);

// import newnames from './assets/newnames.json';

const app = createApp(App);
// const app = ViteSSG(App, {routes: router.routes});
app.use(BootstrapVue3);
app.use(VueApexCharts);
app.config.globalProperties.$names = {
	names,
	new: years().reduce((years, year) => {
		years[year] = [];
		for (const name of Object.keys(names)) {
			if (parseInt(Object.keys(names[name])[0]) === year) {
				years[year].push(name);
			}
		}
		return years;
	}, {}),
	androgynous: Object.keys(names).filter((name) => Object.values(names[name]).find((year) => year.M) && Object.values(names[name]).find((year) => year.F)),
	years,
	random: () => names[Math.floor(Math.random() * names.length)],
	top: (year, length = 9999) => Object.keys(names).map((name) => ({name, number: (names[name][year]?.M || 0) + (names[name][year]?.F || 0)})).sort((a, b) => b.number - a.number).slice(0, length),
};
app.config.performance = true;
app.use(router);
app.mount('body');
// app.mount('#app');
