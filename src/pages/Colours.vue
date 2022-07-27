<template>
	<div v-for="colour in $names.colours" :key="colour">
		<div class="colour-box" :style="{backgroundColor: colour}">{{colour}}</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
