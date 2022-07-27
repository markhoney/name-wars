<template>
	<b-row>
		<b-col cols="12" class="mt-5">
			<h2>Unique Names</h2>
			<p>Below is a graph of how many different names were used in each year.</p>
			<unique />
		</b-col>
		<b-col cols="12" class="mb-5">
			<h2>New Names</h2>
			<p>Below is a graph of how many new names were seen in the list of baby names for the first time in a given year.</p>
			<new-chart />
		</b-col>
		<b-col cols="12" class="mt-5">
			<h2>New Name List</h2>
			<p>The following is a list of all names that were first seen in a given year.</p>
			<new v-model="year" />
		</b-col>
	</b-row>
</template>

<script>
	import NewChart from '../components/NewChart.vue';
	import New from '../components/New.vue';
	import Years from '../components/Years.vue';
	import Unique from '../components/Unique.vue';
	import VueApexCharts from "vue3-apexcharts";
	export default {
		components: {New, NewChart, Years, Unique, VueApexCharts},
	};
</script>
