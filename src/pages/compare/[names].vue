<template>
	<b-row>
		<b-col cols="12">
			<b-card>
				<template #header>
					<h2>Chart options</h2>
				</template>
				<b-card-text class="d-flex justify-content-evenly">
					<b-form-group label="Names to compare" label-for="names">
						<!--<names id="names" v-model="nameList" :names="names" placeholder="e.g. Luke Leia" />-->
						<b-form-input v-model="nameText" type="text" />
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
		<b-col cols="12">
			<h3>Popularity</h3>
			<vue-apex-charts type="line" :series="series" :options="chartOptions" :key="series.length" />
		</b-col>
		<b-col sm="12" md="6" lg="4" v-for="name in nameList" :key="name">
			<name-facts :value="name"></name-facts>
		</b-col>
	</b-row>
</template>

<script>
	// Add first seen year, total babies named, most popular year, overall ranking as absolute number, rise/drop in last year.
	// Add graph of ranking per year, or add to existing graph (maybe inverted as percentage of total babies named or position).
	// import Names from '../../components/NamesText.vue';
	import Years from '../../components/Years.vue';
	import NameFacts from "../../components/NameFacts.vue";
	import VueApexCharts from "vue3-apexcharts";
	export default {
		components: {Years, NameFacts, VueApexCharts},
		props: {
			names: {
				type: String,
				default: '',
			},
		},
		data() {
			return {
				first: 1900,
				last: 2021,
				nameText: '',
				// nameList: [],
			};
		},
		computed: {
			years() {
				return this.$names.years();
			},
			data() {
				return this.names.map((name) => this.years.map((year) => this.$names.total(this.$names.names[name][year])));
			},
			/* nameList() {
				return this.$names.valid(this.names.split(','));
			}, */
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
				return this.nameList.map((name) => ({
					name,
					data: this.years.map((year) => this.$names.total(this.$names.names[name][year])),
				}));
			},
			nameList() {
				return this.$names.valid(this.nameText.split(/[, ]+/));
			}
		},
		watch: {
			nameList() {
				this.$router.push(`/compare/${this.nameList.map((name) => name.toLowerCase()).join(',')}`);
			},
		},
		created() {
			this.nameText = this.names.split(',').join(' ');
		},
	};
</script>
