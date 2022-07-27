<template>
	<vue-apex-charts type="bar" :series="series" :options="chartOptions" />
</template>

<script>
	import VueApexCharts from "vue3-apexcharts";
	export default {
		components: {VueApexCharts},
		computed: {
			years() {
				return this.$names.years();
			},
			chartOptions() {
				return {
					colors: [this.$names.randomColour],
					xaxis: {
						type: 'numeric',
						categories: this.years,
						title: {text: 'Year'},
					},
					yaxis: {
						title: {text: 'Number of names'},
					},
					dataLabels: {
						enabled: false,
					},
				};
			},
			series() {
				return [{
					name: 'Unique names',
					data: this.years.map((year) => Object.values(this.$names.names).filter((name) => name[year]).length),
				}];
			},
		},
	};
</script>
