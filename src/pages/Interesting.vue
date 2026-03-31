<template>
	<b-row>
		<b-col cols="12" class="mb-5">
			<h2>Interesting Names</h2>
			<p>Here are some interesting names and their statistics.</p>
		</b-col>
		<b-col cols="12">
			<interesting />
		</b-col>
	</b-row>
</template>

<script>
	import Interesting from "../components/Interesting.vue";
	export default {
		components: {Interesting},
		props: {
			value: {
				type: String,
				default: '',
			},
		},
	};
</script>
