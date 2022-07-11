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
				// required: true,
			},
		},
		computed: {
			nameArray() {
				if (!this.year) return Object.keys(this.names);
				return Object.keys(this.names).filter((name) => this.names[name][this.year]);
			},
		},
	};
</script>

<template>
	<b-form-select :modelValue="modelValue" :options="nameArray" @input="$emit('update:modelValue', $event)"></b-form-select>
</template>
