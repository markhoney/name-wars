<template>
	<vue-apex-charts type="bar" :series="series" :options="chartOptions" />
</template>

<script>
	import VueApexCharts from "vue3-apexcharts";
	export default {
		components: {VueApexCharts},
		data() {
			return {
				first: 1901,
				last: 2024,
			};
		},
		computed: {
			years() {
				return this.$names.years(this.first, this.last);
			},
			series() {
				return [{
					name: 'New names',
					data: this.years.map((year) => ({x: year, y: this.$names.new[year].length, z: this.$names.new[year]})),
				}];
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
						title: {text: 'Number of new names'},
					},
					dataLabels: {
						enabled: false,
					},
					tooltip: {
						z: {
							title: '',
							formatter(value) {
								return value.join('<br />');
							},
						},
					},
				};
			},
		},
	};
</script>
