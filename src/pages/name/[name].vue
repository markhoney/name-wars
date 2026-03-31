<template>
	<h2 class="text-center">{{properName}}</h2>
	<b-row>
		<b-col cols="12">
			<p>Since {{$names.first}}, {{properName}} was first used as a baby name in {{seen.first}}, and was last used in {{seen.last}}.</p>
			<p>{{number.total.toLocaleString()}} babies have been named {{properName}} since {{$names.first}}. The highest number of babies named {{properName}} was a total of {{number.highest.number.toLocaleString()}} in {{number.highest.year}}.</p>
			<p>{{properName}} is the {{$names.ordinal(ranking.overall)}} most popular name overall in New Zealand, and the {{$names.ordinal(ranking.last)}} most popular last year. This was {{ranking.direction}} from the previous year of {{ranking.change}} places.</p>
			<h3>Popularity</h3>
			<vue-apex-charts type="line" :series="series" :options="chartOptions" />
		</b-col>
	</b-row>
</template>

<script>
	// Add first seen year, total babies named, most popular year, overall ranking as absolute number, rise/drop in last year.
	// Add graph of ranking per year, or add to existing graph (maybe inverted as percentage of total babies named or position).
	import Years from '../../components/Years.vue';
	import VueApexCharts from "vue3-apexcharts";
	export default {
		components: {Years, VueApexCharts},
		data() {
			return {
				first: this.$names.first,
				last: this.$names.last,
			};
		},
		computed: {
			years() {
				return this.$names.years(this.first, this.last);
			},
			data() {
				const nameData = this.$names.names[this.properName];
				if (!nameData) return [];
				// return this.years.map((year) => (nameData[year]?.M || 0) + (nameData[year]?.F || 0));
				return this.years.map((year) => ({x: year, y: (nameData[year]?.M || 0) + (nameData[year]?.F || 0)}));
			},
			properName() {
				const name = this.$route.params.name;
				return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
			},
			seen() {
				const nameData = this.$names.names[this.properName];
				if (!nameData) return { first: null, last: null };
				const keys = Object.keys(nameData).map(Number).sort((a, b) => a - b);
				return {
					first: keys[0],
					last: keys[keys.length - 1],
				};
			},
			number() {
				if (!this.data.length) return {
					highest: {year: null, number: 0},
					total: 0,
					first: {year: null, number: 0},
					last: {year: null, number: 0},
					previous: {year: null, number: 0},
					direction: 'no change',
				};
				const highest = this.data.reduce((highest, year) => (year.y > highest.y ? year : highest), {x: 0, y: 0});
				const number = {
					total: this.data.reduce((total, year) => total + year.y, 0),
					highest: {
						year: highest.x,
						number: highest.y,
					},
					first: {
						year: this.data[0].x,
						number: this.data[0].y,
					},
					last: {
						year: this.data[this.data.length - 1].x,
						number: this.data[this.data.length - 1].y,
					},
					previous: {
						year: this.data[this.data.length - 2]?.x,
						number: this.data[this.data.length - 2]?.y ?? 0,
					},
				};
				if (number.last.number > number.previous.number) {
					number.direction = 'a rise';
				} else if (number.last.number < number.previous.number) {
					number.direction = 'a fall';
				} else {
					number.direction = 'no change';
				}
				return number;
			},
			ranking() {
				const ranking = {
					overall: this.$names.overall.findIndex((name) => name.name === this.properName) + 1,
					last: this.$names.top(this.last).findIndex((name) => name.name === this.properName) + 1,
					previous: this.$names.top(this.last - 1).findIndex((name) => name.name === this.properName) + 1,
				};
				ranking.change = Math.abs(ranking.last - ranking.previous);
				if (ranking.last > ranking.previous) {
					ranking.direction = 'a rise';
				} else if (ranking.last < ranking.previous) {
					ranking.direction = 'a fall';
				} else {
					ranking.direction = 'no change';
				}
				return ranking;
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
				return [{
					// name: this.properName,
					name: 'Popularity',
					data: this.data,
				}];
			},
		},
	};
</script>
