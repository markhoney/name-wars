<template>
	<b-col sm="12" lg="9">
		<vue-apex-charts type="line" :series="series" :options="chartOptions" :key="series.length" />
	</b-col>
	<b-col sm="6" lg="3">
		<b-card>
			<template #header>
				<h2>Compare names</h2>
			</template>
			<b-card-text>
				<b-form-group label="Names to compare" label-for="names">
					<names id="names" v-model="nameList" :names="names" placeholder="e.g. Luke Leia" />
				</b-form-group>
				<b-form-group label="First Year" label-for="first">
					<years id="first" v-model="first" />
				</b-form-group>
				<b-form-group label="Last Year" label-for="last">
					<years id="last" v-model="last" />
				</b-form-group>
			</b-card-text>
		</b-card>
	</b-col>
</template>

<script>
	import Names from './NamesText.vue';
	import Years from './Years.vue';
	import VueApexCharts from "vue3-apexcharts";
	export default {
		components: {Names, Years, VueApexCharts},
		props: {
			value: {
				type: String,
				default: '',
			},
		},
		data() {
			return {
				first: 1900,
				last: 2021,
				nameList: [],
				names: 'Luke Leia',
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
		watch: {
			value(value) {
				this.names = value;
			},
		},
	};
</script>
