<template>
	<names v-model="names" />
	<years v-model="start" />
	<years v-model="end" />
	<!--<names v-model="second" />-->
	<LineChart :chartData="chartData" />
</template>

<script>
	import Names from './NamesText.vue';
	import Years from './Years.vue';
	import {Chart, registerables} from 'chart.js';
	Chart.register(...registerables);
	import {LineChart} from 'vue-chart-3';

	export default {
		components: {Names, Years, LineChart},
		data() {
			return {
				first: '',
				second: '',
				start: 1900,
				end: 2021,
				names: [],
				colours: ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080'],
			};
		},
		computed: {
			years() {
				return this.$names.years(this.start, this.end);
			},
			chartData() {
				return {
					labels: this.years,
					// datasets: [...new Set([this.first, this.second]).filter(Boolean).map((name) => ({
					datasets: this.names.map((name, index) => ({
						label: name,
						// backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
						backgroundColor: this.colours[index],
						data: this.$names.names[name] ? this.years.map((year) => this.$names.names[name][year] || 0) : [],
					})),
				};
			},
		},
	};

	/* import {ref, computed, defineComponent, getCurrentInstance} from 'vue';
	export default defineComponent({
		name: 'Compare',
		components: {
			LineChart,
			Names,
		},
		props: {
			start: {
				type: Number,
				default: 1900,
			},
			end: {
				type: Number,
				default: 2021,
			},
		},
		setup(props) {
			const $names = getCurrentInstance().appContext.config.globalProperties.$names;
			const first = ref('');
			const second = ref('');
			// const years = computed(() => $names.years(props.start, props.end));
			const chartData = computed(() => ({
				labels: $names.years(props.start, props.end),
				datasets: [first, second].map((name) => ({
					label: name,
					// data: $names.names[name] ? $names.years(props.start, props.end).map((year) => $names.names[name][year] || 0) : [],
				})),
			}));
			// const {lineChartProps, lineChartRef} = useLineChart({chartData});
			return {first, second, chartData};
		},
	}); */
</script>
