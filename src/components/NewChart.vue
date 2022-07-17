<template>
	<b-col sm="12" lg="9">
		<vue-apex-charts type="bar" :series="series" :options="chartOptions" />
	</b-col>
	<b-col sm="6" lg="3">
		<b-card>
			<template #header>
				<h2>New names</h2>
			</template>
			<b-card-text>
				<b-form-group label="First Year" label-for="first">
					<years id="first" v-model="first" />
				</b-form-group>
				<b-form-group label="Last Year" label-for="last">
					<years id="last" v-model="last" />
				</b-form-group>
			</b-card-text>
		</b-card>
	</b-col>
	<b-col sm="6" lg="4">
		<new v-model="year" />
	</b-col>
</template>

<script>
	import New from './New.vue';
	import Years from './Years.vue';
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
						categories: this.years,
					},
				};
			},
			series() {
				return [{
					name: 'New names',
					data: this.years.map((year) => this.$names.new[year].length),
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
