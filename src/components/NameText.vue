<template>
	<input type="text" :modelValue="modelValue" @input="$emit('update:modelValue', $event.target.value.trim())">
</template>

<script>
	export default {
		props: {
			modelValue: {
				type: String,
				default: '',
				required: true,
			},
		},
	};
</script>
