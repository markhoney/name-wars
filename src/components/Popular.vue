<template>
	<b-row>
		<b-col cols="12">
			<vue-apex-charts type="bar" :series="series" :options="chartOptions" />
		</b-col>
		<b-col cols="12">
			<b-card>
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
	</b-row>
</template>

<script>
	import Years from './Years.vue';
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
				last: 2024,
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
					colors: [this.$names.randomColour],
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
