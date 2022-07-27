<template>
	<b-card>
		<template #header>
			<h2 class="text-center">{{name}}</h2>
		</template>
		<b-card-text>
			<p>{{name}} was first used as a baby name in <strong>{{seen.first}}</strong>, and was last used in <strong>{{seen.last}}</strong>.</p>
			<p><strong>{{number.total.toLocaleString()}}</strong> babies have been named {{name}} since 1900. The highest number of babies named {{name}} in a year was a total of <strong>{{number.highest.number.toLocaleString()}}</strong>, in <strong>{{number.highest.year}}</strong>.</p>
			<p>{{name}} is the <strong>{{$names.ordinal(ranking.overall)}}</strong> most popular name overall since 1900 in New Zealand, and the <strong>{{$names.ordinal(ranking.last)}}</strong> most popular last year. This was {{ranking.direction}} from the previous year of <strong>{{ranking.change}}</strong> places.</p>
		</b-card-text>
	</b-card>
</template>

<script>
	export default {
		props: {
			value: {
				type: String,
				default: '',
			},
		},
		computed: {
			years() {
				return this.$names.years();
			},
			data() {
				return this.years.map((year) => ({year, total: this.$names.total(this.$names.names[this.name][year])}));
			},
			name() {
				if (!this.value) return '';
				return this.$names.case(this.value);
			},
			seen() {
				return {
					first: Object.keys(this.$names.names[this.name])[0],
					last: Object.keys(this.$names.names[this.name])[Object.keys(this.$names.names[this.name]).length - 1],
				};
			},
			number() {
				const highest = this.data.reduce((highest, year) => (year.total > highest.total ? year : highest), {year: 0, total: 0});
				const number = {
					total: this.data.reduce((total, year) => total + year.total, 0),
					highest: {
						year: highest.year,
						number: highest.total,
					},
					first: {
						year: this.data[0].year,
						number: this.data[0].total,
					},
					last: {
						year: this.data[this.data.length - 1].year,
						number: this.data[this.data.length - 1].total,
					},
				};
				if (number.last > number.previous) {
					number.direction = 'a rise';
				} else if (number.last < number.previous) {
					number.direction = 'a fall';
				} else {
					number.direction = 'no change';
				}
				return number;
			},
			ranking() {
				const last = this.years[this.years.length - 1];
				const ranking = {
					overall: this.$names.overall.findIndex((name) => name.name === this.name) + 1,
					last: this.$names.top(last).findIndex((name) => name.name === this.name) + 1,
					previous: this.$names.top(last - 1).findIndex((name) => name.name === this.name) + 1,
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
					// name: this.name,
					name: 'Popularity',
					data: this.data,
				}];
			},
		},
	};
</script>
