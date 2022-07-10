const {createApp} = Vue;
// import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
// import {BootstrapVue} from 'https://unpkg.com/bootstrap-vue/dist/bootstrap-vue.esm.js';
// import vueChart3 from 'https://unpkg.com/vue-chart-3/dist/index.js';

createApp({
	data() {
		return {
			dataset: null,
			start: 1900,
			end: new Date().getFullYear(),
			names: ['Mark', 'Karen'],
		};
	},
	computed: {
		years() {
			return [...Array(this.end - this.start).keys()].map((e) => e + this.start);
		},
		data() {
			if (!this.dataset) return {};
			return {
				labels: this.years,
				xaxis: {
					categories: this.years,
				},
				datasets: this.names.map((name) => ({
					name,
					data: this.dataset[name] ? this.years.map((year) => this.dataset[name][year] || 0) : [],
				})),
			};
		},
	},
	mounted() {
		fetch('/names.json', {
			headers: {'Content-type': 'application/json'},
		}).then((res) => res.json()).then((response) => {
			this.dataset = response;
		}).catch( (error) => {
			this.dataset = {};
		});
	},
}).mount('#app');
