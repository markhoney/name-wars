<template>
	<b-card no-body header="Card with flush list group">
		<template #header>
			<h2>Some interesting names</h2>
			<p>Click any name to enter it into the graph above.</p>
		</template>
		<b-list-group flush>
			<b-list-group-item v-for="name in Object.keys(names)" :key="name" @click="emit(name)" :title="names[name]" role="button">
				{{name}}
			</b-list-group-item>
		</b-list-group>
		<template #footer>
			<p>(Hover over a name to see why it might have become popular)</p>
		</template>
	</b-card>
</template>

<script>
	export default {
		data() {
			return {
				names: {
					Aaliyah: 'Music (1994)',
					Arya: 'TV - Game of Thrones (2011)',
					Daniel: 'Music - Daniel by Elton John (1973)',
					Harper: 'Author - Go Set a Watchman (2015)',
					Jason: 'Movie - Jason and the Argonauts (1963)',
					Juno: 'Movie - Juno (2007)',
					Leonidas: 'Movie - 300 (2006)',
					Luke: 'Movie - Star Wars (1977)',
					Marshall: 'Music - Eminem (1999)',
				},
			};
		},
		methods: {
			emit(name) {
				this.$emit('input', name);
			},
		},
	};
</script>
