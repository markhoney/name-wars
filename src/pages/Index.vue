<template>
	<h2>Welcome to the NZ Baby Names page</h2>
	<p class="mb-5">This page uses <a href="https://catalogue.data.govt.nz/dataset/baby-name-popularity-over-time" target="_blank">baby name data</a> from the New Zealand Department of Internal Affairs to show some interesting facts about the popularity of names over time. The website was originally created to see if the names Luke or Leia became popular after the 1977 release of Star Wars (type the names into the Compare Names box below to find out!).</p>
	<b-alert variant="warning" show dismissible class="m-5">
		For privacy/anonymity reasons, this data set does not include names on any given year where fewer than 10 babies were given that name. For those years, the total will show in this data set as a zero.
	</b-alert>
	<b-container class="my-5">
		<b-row>
			<b-col cols="12" class="m-5">
				<h2>Compare Names</h2>
				<p>The graph below will show you the popularity of one or more baby names over time</p>
			</b-col>
			<compare />
		</b-row>
	</b-container>
</template>

<script>
	import Top from '../components/Top.vue';
	import New from '../components/NewChart.vue';
	import Compare from '../components/Compare.vue';
	import Spikes from '../components/Spikes.vue';
	import Androgynous from '../components/Androgynous.vue';
	export default {
		components: {Top, New, Compare, Spikes, Androgynous},
	};
</script>
