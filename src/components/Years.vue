<script>
	export default {
		props: {
			start: {
				type: Number,
				default: 1900,
				required: true,
			},
			end: {
				type: Number,
				default: 2021,
				required: true,
			},
			modelValue: {
				type: Number,
				default: 2021,
				required: true,
			},
		},
		computed: {
			years() {
				return [...Array(this.end + 1 - this.start).keys()].map((index) => index + this.start);
			}
		},
	};
</script>

<template>
	<b-form-select :modelValue="modelValue" :options="years" @input="$emit('update:modelValue', $event)"></b-form-select>
</template>
