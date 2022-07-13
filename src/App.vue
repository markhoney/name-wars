<script setup>
	import Top from './components/Top.vue';
	import Compare from './components/CompareApex.vue';
	import Spikes from './components/Spikes.vue';
</script>

<template>
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
