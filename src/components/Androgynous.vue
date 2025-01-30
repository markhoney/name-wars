<template>
	<b-col sm="12" lg="9">
		<vue-apex-charts type="line" :series="series" :options="chartOptions" />
	</b-col>
	<b-col sm="6" lg="3">
		<b-card>
			<template #header v-if="title">
				<h2>{{title}}</h2>
			</template>
			<b-card-text :class="{dFlex: horizontal}">
				<b-form-group label="Name" label-for="name">
					<b-form-select id="name" v-model="name" :options="names" />
				</b-form-group>
				<b-form-group label="First Year" label-for="first">
					<years id="first" v-model="first" />
				</b-form-group>
				<b-form-group label="Last Year" label-for="last">
					<years id="last" v-model="last" />
				</b-form-group>
				<b-form-group label="Chart Type" label-for="type">
					<b-form-select id="type" v-model="type" :options="['Bar', 'Bar Stacked', 'Line']" />
				</b-form-group>
			</b-card-text>
		</b-card>
	</b-col>
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
			title: {
				type: String,
				default: '',
			},
			horizontal: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				first: 1900,
				last: 2024,
				name: '',
				type: 'bar',
			};
		},
		computed: {
			years() {
				return this.$names.years(this.first, this.last);
			},
			names() {
				return this.$names.androgynous;
			},
			chartOptions() {
				return {
					chart: {
						stacked: true,
					},
					zoom: {
						type: 'x',
						enabled: true,
						autoScaleYaxis: true
					},
					colors: this.$names.colours,
					xaxis: {
						type: 'numeric',
						categories: this.years,
					},
				};
			},
			series() {
				return !this.name ? [] : [
					{
						name: 'Male',
						data: this.years.map((year) => this.$names.names[this.name][year]?.M || 0),
					},
					{
						name: 'Female',
						data: this.years.map((year) => this.$names.names[this.name][year]?.F || 0),
					},
				];
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
