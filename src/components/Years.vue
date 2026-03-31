<script>
	export default {
		props: {
			start: {
				type: Number,
				default: null,
			},
			end: {
				type: Number,
				default: null,
			},
			modelValue: {
				type: Number,
				default: null,
				required: true,
			},
		},
		computed: {
			years() {
				return this.$names.years(this.start ?? this.$names.first, this.end ?? this.$names.last);
			}
		},
	};
</script>

<template>
	<b-form-select :modelValue="modelValue" :options="years" @input="$emit('update:modelValue', $event)"></b-form-select>
</template>
