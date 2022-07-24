<script>
	import Top from '../components/Top.vue';
	import Totals from '../components/Totals.vue';
	import Spikes from '../components/Spikes.vue';
	export default {
		components: {Top, Totals, Spikes},
	};
</script>

<template>
	<b-col cols="12" class="mb-5">
		<h2>Charts</h2>
		<p>Here are some charts showing the most popular names in New Zealand, and names that have seen sharp increases or decreases in usage.</p>
	</b-col>
	<b-col sm="6" lg="4">
		<top />
	</b-col>
	<b-col sm="6" lg="4">
		<totals />
	</b-col>
	<b-col sm="6" lg="4">
		<spikes />
	</b-col>
</template>
