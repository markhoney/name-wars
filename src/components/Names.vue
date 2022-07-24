<template>
	<b-form-select :modelValue="modelValue" :options="names" @input="$emit('update:modelValue', $event)"></b-form-select>
</template>

<script>
	export default {
		props: {
			year: {
				type: Number,
				// default: 2021,
				// required: false,
			},
			modelValue: {
				type: String,
				default: '',
				required: true,
			},
		},
		computed: {
			names() {
				if (!this.year) return Object.keys(this.$names.names);
				return Object.keys(this.$names.names).filter((name) => this.$names.names[name][this.year]);
			},
		},
	};
</script>
