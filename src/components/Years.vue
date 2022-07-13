<script>
	export default {
		props: {
			start: {
				type: Number,
				default: 1900,
			},
			end: {
				type: Number,
				default: 2021,
			},
			modelValue: {
				type: Number,
				default: 2021,
				required: true,
			},
		},
		computed: {
			years() {
				return this.$names.years(this.start, this.end);
			}
		},
	};
</script>

<template>
	<b-form-select :modelValue="modelValue" :options="years" @input="$emit('update:modelValue', $event)"></b-form-select>
</template>
