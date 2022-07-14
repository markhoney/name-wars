<script>
	export default {
		props: {
			modelValue: {
				type: Array,
				default: [],
			},
			validate: {
				type: Boolean,
				default: true,
			},
			names: {
				type: String,
				default: '',
			}
		},
		methods: {
			onInput(value) {
				let names = value.split(/[, ]+/);
				names = names.map((name) => name.trim());
				names = names.map((name) => name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase());
				names = names.filter(Boolean);
				names = [...new Set(names)];
				if (this.validate) names = names.filter((name) => Object.keys(this.$names.names).includes(name));
				names = Object.values(names);
				this.$emit('update:modelValue', names);
				// this.$emit('input', names);
			},
		},
		watch: {
			names(names) {
				this.onInput(names);
			},
		},
	};
</script>

<template>
	<b-form-input :value="names" type="text" @input="onInput" @change="onInput" />
</template>
