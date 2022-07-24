<template>
	<warning />
	<h2>Welcome to the NZ Baby Names site</h2>
	<p class="mb-5">This site uses <a href="https://catalogue.data.govt.nz/dataset/baby-name-popularity-over-time" target="_blank">baby name data</a> from the New Zealand Department of Internal Affairs to show some interesting facts about the popularity of names over time. The website was originally created to see if the names Luke or Leia became popular after the 1977 release of Star Wars (type the names into the Compare Names box below to find out!).</p>
</template>

<script>
	import Warning from '../components/Warning.vue';
	export default {
		components: {Warning},
	};
</script>
