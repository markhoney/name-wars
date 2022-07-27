<template>
	<b-row>
		<b-col cols="12">
			<h3>Popularity</h3>
			<vue-apex-charts type="line" :series="series" :options="chartOptions" />
		</b-col>
		<b-col sm="12" md="6" lg="4" v-for="name in names" :key="name">
			<name-facts :value="name"></name-facts>
		</b-col>
	</b-row>
</template>

<script>
	// Add first seen year, total babies named, most popular year, overall ranking as absolute number, rise/drop in last year.
	// Add graph of ranking per year, or add to existing graph (maybe inverted as percentage of total babies named or position).
	import NameFacts from "../../components/NameFacts.vue";
	import VueApexCharts from "vue3-apexcharts";
	export default {
		components: {NameFacts, VueApexCharts},
		props: {
			pathnames: {
				type: String,
				default: '',
			},
		},
		computed: {
			years() {
				return this.$names.years();
			},
			data() {
				return this.names.map((name) => this.years.map((year) => this.$names.total(this.$names.names[name][year])));
			},
			names() {
				return this.$names.valid(this.pathnames.split(','));
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
				return this.names.map((name) => ({
					name,
					data: this.years.map((year) => this.$names.total(this.$names.names[name][year])),
				}));
			},
		},
	};
</script>
