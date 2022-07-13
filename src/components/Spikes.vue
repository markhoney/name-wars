<template>
	<b-list-group>
		<b-list-group-item v-for="spike in largest" :key="spike.name + spike.year" :variant="spike.diff > 0 ? 'success' : 'danger'" class="d-flex justify-content-between align-items-center">
			{{spike.name}} ({{spike.year}}) <b-badge :variant="spike.diff > 0 ? 'success' : 'danger'" pill>{{spike.diff}}</b-badge>
		</b-list-group-item>
	</b-list-group>
</template>

<script>
	export default {
		data() {
			return {
				start: 1900,
				end: 2021,
				average: 1,
			};
		},
		computed: {
			years() {
				return this.$names.years(this.start, this.end);
			},
			spikes() {
				return Object.entries(this.$names.names).reduce((names, [name, years]) => {
					names[name] = this.years.slice(this.average).reduce((allyears, year) => {
						const yearrange = this.$names.years(year - this.average + 1, year).reverse();
						let diff = 0;
						for (const year of yearrange) diff += (years[year] || 0) - (years[year - 1] || 0);
						allyears[year] = diff;
						return allyears;
					}, {});
					return names;
				}, {});
			},
			largest() {
				return Object.entries(this.spikes).map(([name, years]) => Object.entries(years).map(([year, diff]) => ({name, year, diff}))).flat().sort((a, b) => Math.abs(b.diff) - Math.abs(a.diff)).slice(0, 50);
			}
		},
	};
</script>

<style>

</style>
