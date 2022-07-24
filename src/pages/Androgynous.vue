<template>
	<b-col cols="12" class="mb-5">
		<h2>Androgynous Names</h2>
		<p>Some names can be used for a boy or a girl. Check out which names are considered androgynous, and find out how popular they have been for boys and girls over time.</p>
	</b-col>
	<b-col cols="12">
		<b-card>
			<template #header>
				<h4>Chart options</h4>
			</template>
			<b-card-text class="d-flex justify-content-evenly">
				<b-form-group label="Name" label-for="name">
					<b-form-select id="name" v-model="name" :options="names" />
				</b-form-group>
				<b-form-group label="First Year" label-for="first">
					<years id="first" v-model="first" />
				</b-form-group>
				<b-form-group label="Last Year" label-for="last">
					<years id="last" v-model="last" />
				</b-form-group>
				<b-form-group label="Stacked" label-for="stacked">
					<b-form-checkbox id="stacked" size="lg" v-model="stacked" switch />
				</b-form-group>
			</b-card-text>
		</b-card>
	<b-col cols="12">
		<vue-apex-charts type="bar" :series="series" :options="chartOptions" />
	</b-col>
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
				first: 1900,
				last: 2021,
				name: 'Alex',
				stacked: true,
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
						stacked: this.stacked,
					},
					/* zoom: {
						type: 'x',
						enabled: true,
						autoScaleYaxis: true
					}, */
					colors: ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080'],
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
