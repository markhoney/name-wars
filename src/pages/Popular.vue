<template>
	<b-col cols="12" class="mb-5">
		<h2>Polular Names</h2>
		<p>Below is a graph showing how many times the most popular name was used in each year.</p>
	</b-col>
	<b-col cols="12">
		<b-card>
			<template #header>
				<h2>Chart options</h2>
			</template>
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
	<b-col cols="12">
		<vue-apex-charts type="bar" :series="series" :options="chartOptions" />
	</b-col>
</template>

<script>
	import Years from '../components/Years.vue';
	import VueApexCharts from "vue3-apexcharts";
	export default {
		components: {Years, VueApexCharts},
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
			};
		},
		computed: {
			years() {
				return this.$names.years(this.first, this.last);
			},
			popular() {
				return this.years.map((year) => {
					const popular = {year, name: '', number: 0};
					for (const name of Object.keys(this.$names.names)) {
						for (const sex of ['M', 'F']) {
							if ((this.$names.names[name][year]?.[sex] || 0) > popular.number) {
								popular.name = name;
								popular.number = this.$names.names[name][year][sex];
							}
						}
					}
					return popular;
				});
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
						title: {text: 'Most popular name'},
					},
				};
			},
			series() {
				if (!this.popular) return [];
				return [{
					name: 'Most popular',
					data: this.years.map((year) => {
						const name = this.popular.find((popular) => year === popular.year);
						return name.number;
						// return {x: name.name, y: name.number};
					}),
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
