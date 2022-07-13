<script setup>
	import Top from './components/Top.vue';
	import Compare from './components/CompareApex.vue';
	import Spikes from './components/Spikes.vue';
</script>

<template>
	<h2>Welcome to the NZ Baby Names page</h2>
	<p class="my-5">This page uses <a href="https://catalogue.data.govt.nz/dataset/baby-name-popularity-over-time" target="_blank">baby name data</a> from the New Zealand Department of Internal Affairs to show some interesting facts about the popularity of names over time. The website was originally created to see if the names Luke or Leia became popular after the 1977 release of Star Wars (type the names into the Compare Names box below to find out!).</p>
	<b-alert variant="warning" show dismissible class="m-5">
		This data set does not include names on any given year where fewer than 10 babies were given that name. For those years, the total will show in this data as 0.
	</b-alert>
	<b-container class="my-5">
		<compare />
		<b-row>
			<b-col sm="6">
				<top />
			</b-col>
			<b-col sm="6">
				<spikes />
			</b-col>
		</b-row>
	</b-container>
	<!--<router-view></router-view>-->
</template>
