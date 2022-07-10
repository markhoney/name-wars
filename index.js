// const {createApp} = Vue;
// import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
// import {BootstrapVue} from 'https://unpkg.com/bootstrap-vue/dist/bootstrap-vue.esm.js';
// import vueChart3 from 'https://unpkg.com/vue-chart-3/dist/index.js';

// Chart.register(Chart.registerables);

var vm = new Vue({
// createApp({
	el: '#app',
	// components: {BarChart},
	components: {BarChart: VueChartJs.Bar, LineChart: VueChartJs.Line},
	data() {
		return {
			names: null,
			start: 1900,
			end: 2021,
			year: 2021,
			top: 10,
			compare: ['Mark', 'Karen'],
		};
	},
	computed: {
		years() {
			return [...Array(this.end + 1 - this.start).keys()].map((e) => e + this.start);
		},
		topx() {
			return Object.keys(this.names).map((name) => ({name, number: this.names[name][this.year] || 0})).sort((a, b) => b.number - a.number).slice(0, this.top);
		},
		chartData() {
			if (!this.names) return {};
			return {
				labels: this.years,
				/* xaxis: {
					categories: this.years,
				}, */
				datasets: this.compare.map((name) => ({
					label: name,
					// name,
					backgroundColor: '#f87979',
					data: this.names[name] ? this.years.map((year) => this.names[name][year] || 0) : [],
				})),
			};
		},
	},
	mounted() {
		fetch('/names.json', {
			headers: {'Content-type': 'application/json'},
		}).then((res) => res.json()).then((response) => {
			this.names = response;
		}).catch( (error) => {
			this.names = {};
		});
	},
}); // .mount('#app');
