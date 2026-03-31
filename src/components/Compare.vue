<template>
	<b-col sm="12" lg="9">
		<vue-apex-charts type="line" :series="series" :options="chartOptions" :key="series.length" />
	</b-col>
	<b-col sm="6" lg="3">
		<compare-names v-model:first="first" v-model:last="last" v-model:nameList="nameList" />
	</b-col>
</template>

<script>
	// import NameFacts from "./NameFacts.vue";
	import CompareNames from './CompareNames.vue';
	import VueApexCharts from "vue3-apexcharts";
	export default {
		components: {CompareNames, VueApexCharts},
		data() {
			return {
				first: this.$names.first,
				last: this.$names.last,
				nameList: [],
			};
		},
		computed: {
			years() {
				return this.$names.years(this.first, this.last);
			},
			chartOptions() {
				return {
					colors: this.$names.colours,
					xaxis: {
						type: 'numeric',
						categories: this.years,
					},
				};
			},
			series() {
				return this.nameList.map((name, index) => ({
					name,
					data: this.$names.names[name] ? this.years.map((year) => (this.$names.names[name][year]?.M || 0) + (this.$names.names[name][year]?.F || 0)) : [],
				}));
			},
		},
		methods: {
			sum(year) {
				return (year.M || 0) + (year.F || 0);
			},
		},
	};
</script>
