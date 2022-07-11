<script>
	import Years from './Years.vue';
	import Names from './Names.vue';
	export default {
		components: {
			Years,
			Names,
		},
		data() {
			return {
				year: 2021,
				top: 10,
				name: '',
			};
		},
		computed: {
			topx() {
				return Object.keys(this.names).map((name) => ({name, number: this.names[name][this.year] || 0})).sort((a, b) => b.number - a.number).slice(0, this.top);
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
				<li v-for="name in topx" :key="name.name">{{name.name}} ({{name.number}})</li>
			</ol>
		</b-card-text>
		<template #footer>
			<years v-model="year" :start="1900" :end="2021" />
			<names v-model="name" />
		</template>
	</b-card>
</template>
