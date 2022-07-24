<template>
	<b-card no-body>
		<template #header>
			<h2>Top {{top}} names of all time</h2>
		</template>
		<b-list-group flush v-if="names">
			<b-list-group-item v-for="(name, index) in names" :key="name.name" class="d-flex justify-content-between align-items-center">
				{{index + 1}}. {{name.name}}
				<b-badge pill>{{name.number}}</b-badge>
			</b-list-group-item>
		</b-list-group>
		<template #footer>
			<b-form-group label="Number of Results" label-for="top">
				<b-form-select id="top" v-model="top" :options="[10, 25, 50, 100]"></b-form-select>
			</b-form-group>
		</template>
	</b-card>
</template>

<script>
	export default {
		data() {
			return {
				top: 10,
			};
		},
		computed: {
			names() {
				return this.$names.overall(this.top);
			},
		},
	};
</script>
