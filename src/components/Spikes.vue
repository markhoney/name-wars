<template>
	<b-card>
		<template #header>
			<h2>{{top}} largest spikes</h2>
		</template>
		<b-card-text>
			<b-form-group label="Average over years" label-for="average">
				<b-form-select id="average" v-model="average" :options="[1, 2, 3, 4, 5]"></b-form-select>
			</b-form-group>
			<b-form-group label="First Year" label-for="first">
				<years id="first" v-model="first" />
			</b-form-group>
			<b-form-group label="Last Year" label-for="last">
				<years id="last" v-model="last" />
			</b-form-group>
			<b-form-group label="Number of results" label-for="top">
				<b-form-select id="top" v-model="top" :options="[10, 25, 50, 100]"></b-form-select>
			</b-form-group>
			<b-list-group>
				<b-list-group-item v-for="spike in largest" :key="spike.name + spike.year" :variant="spike.diff > 0 ? 'success' : 'danger'" class="d-flex justify-content-between align-items-center">
					{{spike.name}} ({{spike.year}}) <b-badge :variant="spike.diff > 0 ? 'success' : 'danger'" pill>{{spike.diff}}</b-badge>
				</b-list-group-item>
			</b-list-group>
		</b-card-text>
	</b-card>
</template>

<script>
	import Years from './Years.vue';
	export default {
		components: {Years},
		data() {
			return {
				first: 1900,
				last: 2021,
				average: 1,
				top: 10,
			};
		},
		computed: {
			years() {
				return this.$names.years(this.first, this.last);
			},
			spikes() {
				return Object.entries(this.$names.names).reduce((names, [name, years]) => {
					names[name] = this.years.slice(this.average).reduce((allyears, year) => {
						const yearrange = this.$names.years(year - this.average + 1, year).reverse();
						let diff = 0;
						for (const year of yearrange) diff += (years[year] || 0) - (years[year - 1] || 0);
						allyears[year] = Math.floor(diff / this.average);
						return allyears;
					}, {});
					return names;
				}, {});
			},
			largest() {
				return Object.entries(this.spikes).map(([name, years]) => Object.entries(years).map(([year, diff]) => ({name, year, diff}))).flat().sort((a, b) => Math.abs(b.diff) - Math.abs(a.diff)).slice(0, this.top);
			}
		},
	};
</script>

<style>

</style>
