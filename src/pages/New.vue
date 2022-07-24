<template>
	<b-col cols="12" class="mb-5">
		<h2>New Names</h2>
		<p>Below is a graph of how many new names were seen in the list of baby names for the first time in a given year.</p>
	</b-col>
	<b-col cols="12">
		<vue-apex-charts type="bar" :series="series" :options="chartOptions" />
	</b-col>
	<b-col cols="12">
		<b-card>
			<!--<template #header>
				<h2>Chart options</h2>
			</template>-->
			<b-card-text class="d-flex justify-content-evenly">
				<b-form-group label="First Year" label-for="first">
					<years id="first" v-model="first" />
				</b-form-group>
				<b-form-group label="Last Year" label-for="last">
					<years id="last" v-model="last" />
				</b-form-group>
			</b-card-text>
		</b-card>
	</b-col>
	<b-col cols="12" class="mt-5">
		<h2>New Name List</h2>
		<p>The following is a list of all names that were first seen in a given year.</p>
		<new v-model="year" />
	</b-col>
	<b-col cols="12" class="mt-5">
		<h2>Unique Names</h2>
		<p>Below is a graph of how many unique names were used in each year.</p>
		<vue-apex-charts type="bar" :series="secondSeries" :options="secondChartOptions" />
	</b-col>
</template>

<script>
	import New from '../components/New.vue';
	import Years from '../components/Years.vue';
	import VueApexCharts from "vue3-apexcharts";
	export default {
		components: {New, Years, VueApexCharts},
		props: {
			value: {
				type: String,
				default: '',
			},
		},
		data() {
			return {
				first: 1901,
				last: 2021,
				year: 2021,
			};
		},
		computed: {
			years() {
				return this.$names.years(this.first, this.last);
			},
			chartOptions() {
				return {
					colors: ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080'],
					xaxis: {
						type: 'numeric',
						categories: this.years,
						title: {text: 'Year'},
					},
					yaxis: {
						title: {text: 'Number of new names'},
					},
				};
			},
			series() {
				return [{
					name: 'New names',
					data: this.years.map((year) => this.$names.new[year].length),
				}];
			},
			secondChartOptions() {
				return {
					colors: ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080'],
					xaxis: {
						type: 'numeric',
						categories: this.years,
						title: {text: 'Year'},
					},
					yaxis: {
						title: {text: 'Number of names'},
					},
				};
			},
			secondSeries() {
				return [{
					name: 'Unique names',
					data: this.years.map((year) => Object.values(this.$names.names).filter((name) => name[year]).length),
				}];
			},
		},
		methods: {
			sum(year) {
				return (year.M || 0) + (year.F || 0);
			},
		},
		watch: {
			value(value) {
				this.names = value;
			},
		},
	};
</script>
