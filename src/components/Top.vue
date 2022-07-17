<script>
	import Years from './Years.vue';
	export default {
		components: {Years},
		data() {
			return {
				year: 2021,
				top: 10,
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
	<b-card no-body>
		<template #header>
			<h2>Top {{top}} names for {{year}}</h2>
		</template>
		<b-list-group flush v-if="names">
			<b-list-group-item v-for="(name, index) in names" :key="name.name" class="d-flex justify-content-between align-items-center">
				{{index + 1}}. {{name.name}}
				<b-badge pill>{{name.number}}</b-badge>
			</b-list-group-item>
		</b-list-group>
		<template #footer>
			<b-row>
				<b-col sm="6">
					<b-form-group label="Year" label-for="year">
						<years id="year" v-model="year" :start="1900" :end="2021" />
					</b-form-group>
				</b-col>
				<b-col sm="6">
					<b-form-group label="Number of Results" label-for="top">
						<b-form-select id="top" v-model="top" :options="[10, 25, 50, 100]"></b-form-select>
					</b-form-group>
				</b-col>
			</b-row>
		</template>
	</b-card>
</template>
