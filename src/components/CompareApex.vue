<template>
	<b-container>
		<b-row>
			<b-col sm="4">
				<!--<names v-model="second" />-->
				<names v-model="names" />
				<years v-model="start" />
				<years v-model="end" />
			</b-col>
			<b-col sm="8">
				<vue-apex-charts type="line" :series="series" :options="chartOptions" />
			</b-col>
		</b-row>
		</b-container>
</template>

<script>
	import Names from './NamesText.vue';
	import Years from './Years.vue';
	import VueApexCharts from "vue3-apexcharts";
	export default {
		components: {Names, Years, VueApexCharts},
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
			chartOptions() {
				return {
					xaxis: {
						categories: this.years,
					},
				};
			},
			series() {
				return this.names.map((name, index) => ({
					// label: name,
					// backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
					// backgroundColor: this.colours[index],
					name,
					data: this.$names.names[name] ? this.years.map((year) => this.$names.names[name][year] || 0) : [],
				}));
			},
		},
	};
</script>
