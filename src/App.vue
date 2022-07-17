<script>
	import Top from './components/Top.vue';
	import New from './components/NewChart.vue';
	import Compare from './components/Compare.vue';
	import Spikes from './components/Spikes.vue';
	import Androgynous from './components/Androgynous.vue';
	export default {
		components: {Top, New, Compare, Spikes, Androgynous},
	};
</script>

<template>
	<h2>Welcome to the NZ Baby Names page</h2>
	<p class="my-5">This page uses <a href="https://catalogue.data.govt.nz/dataset/baby-name-popularity-over-time" target="_blank">baby name data</a> from the New Zealand Department of Internal Affairs to show some interesting facts about the popularity of names over time. The website was originally created to see if the names Luke or Leia became popular after the 1977 release of Star Wars (type the names into the Compare Names box below to find out!).</p>
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
			<b-col cols="12" class="m-5">
				<h2>New Names</h2>
				<p>Below is a graph of how many new names were seen in the list of baby names for the first time in a given year and a list of new names that were first used in each year.</p>
			</b-col>
			<new />
			<b-col cols="12" class="m-5">
				<h2>Charts</h2>
				<p>Here are some charts showing the most popular names in New Zealand, and names that have seen sharp increases or decreases in usage.</p>
			</b-col>
			<b-col sm="6" lg="4">
				<top />
			</b-col>
			<b-col sm="6" lg="4">
				<spikes />
			</b-col>
			<b-col cols="12" class="m-5">
				<h2>Androgynous Names</h2>
				<p>Some names can be used for a boy or a girl. Check out which names are considered androgynous, and find out how popular they have been for boys and girls over time.</p>
			</b-col>
			<androgynous />
		</b-row>
	</b-container>
	<!--<router-view></router-view>-->
</template>
