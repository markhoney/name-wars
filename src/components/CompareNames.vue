<template>
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
</template>

<script>
	import Names from './NamesText.vue';
	import Years from './Years.vue';
	export default {
		components: {Names, Years},
		emits: ['update:first', 'update:last', 'update:nameList'],
		data() {
			return {
				first: this.$names.first,
				last: this.$names.last,
				nameList: [],
				names: 'Luke Leia',
			};
		},
		computed: {
			years() {
				return this.$names.years(this.first, this.last);
			},
		},
		watch: {
			first(value) { this.$emit('update:first', value); },
			last(value) { this.$emit('update:last', value); },
			nameList(value) { this.$emit('update:nameList', value); },
			value(value) {
				this.names = value;
			},
		},
	};
</script>
