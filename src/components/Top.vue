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
			Top {{top}}
		</template>
		<b-card-text>
			<ol v-if="names">
				<li v-for="name in names" :key="name.name">{{name.name}} ({{name.number}})</li>
			</ol>
		</b-card-text>
		<template #footer>
			<years v-model="year" :start="1900" :end="2021" />
		</template>
	</b-card>
</template>
