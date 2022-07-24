<template>
	<b-container>
		<b-row>
			<b-col cols="12">
				<warning />
				<h2>Name popularity</h2>
				<p>Looking for a name for your baby, but you're concerned that it might be going out of fashion? Want to know whether your name is still being given to babies? Want to see if your name is more popular than your friends'? The graph below will show you the popularity of one or more baby names over time. Just type one or more names in the box below, and a graph will appear showing you how many babies were given that name each year.</p>
			</b-col>
			<compare />
		</b-row>
	</b-container>
</template>

<script>
	import Warning from '../components/Warning.vue';
	import Compare from '../components/Compare.vue';
	export default {
		components: {Warning, Compare},
	};
</script>
