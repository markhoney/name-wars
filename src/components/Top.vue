<script>
	import Years from './Years.vue';
	export default {
		components: {Years},
		data() {
			return {
				year: 2021,
				top: 10,
				name: '',
			};
		},
		computed: {
			names() {
				return this.$names.top(this.year, this.top);
			},
		},
	};
</script>

<template>
	<b-card>
		<template #header>
			<h2>Top {{top}} names for {{year}}</h2>
		</template>
		<b-card-text>
			<ol v-if="names">
				<li v-for="name in names" :key="name.name">{{name.name}} ({{name.number}})</li>
			</ol>
		</b-card-text>
		<template #footer>
			<b-form-group label="Number of Results" label-for="top">
				<b-form-select id="top" v-model="top" :options="[10, 25, 50, 100]"></b-form-select>
			</b-form-group>
			<b-form-group label="Year" label-for="year">
				<years id="year" v-model="year" :start="1900" :end="2021" />
			</b-form-group>
		</template>
	</b-card>
</template>
