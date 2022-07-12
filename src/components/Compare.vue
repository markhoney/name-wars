<template>
	<names v-model="first" />
	<names v-model="second" />
	<LineChart :chartData="chartData" />
</template>

<script>
	import Names from './Names.vue';
	import {Chart, registerables} from 'chart.js';
	Chart.register(...registerables);
	import {LineChart} from 'vue-chart-3';

	export default {
		components: {Names, LineChart},
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
		data() {
			return {
				first: '',
				second: '',
			};
		},
		computed: {
			years() {
				return this.$names.years(this.start, this.end);
			},
			chartData() {
				return {
					labels: this.years,
					datasets: [this.first, this.second].map((name) => ({
						label: name,
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
