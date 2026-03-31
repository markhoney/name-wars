<script>
	import Years from './Years.vue';
	export default {
		components: {Years},
		data() {
			return {
				year: this.$names.last,
			};
		},
		computed: {
			names() {
				return this.$names.new[this.year];
			},
		},
	};
</script>

<template>
	<b-card no-body>
		<template #header>
			<h2>New names in <years v-model="year" :start="this.$names.first + 1" :end="this.$names.last" /></h2>
		</template>
		<b-list-group flush v-if="names" style="max-height: 80vh; overflow: scroll">
			<b-list-group-item v-for="name in names" :key="name" class="d-flex justify-content-between align-items-center">
				<a :href="`/name/${name}`">{{name}}</a>
			</b-list-group-item>
		</b-list-group>
		<template #footer>
			<b-row>
				<b-col>
					<b-form-group label="Year" label-for="year">
						<years id="year" v-model="year" :start="this.$names.first + 1" :end="this.$names.last" />
					</b-form-group>
				</b-col>
			</b-row>
		</template>
	</b-card>
</template>
