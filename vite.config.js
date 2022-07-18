import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import generateSitemap from 'vite-plugin-pages-sitemap';
console.log(generateSitemap);

export default defineConfig({
	plugins: [
		vue(),
		Pages({
			// onRoutesGenerated: (routes) => generateSitemap({routes}),
		}),
	],
	build: {
		outDir: 'docs',
		rollupOptions: {
			output: {
				entryFileNames: `assets/[name].js`,
				chunkFileNames: `assets/[name].js`,
				assetFileNames: `assets/[name].[ext]`
			},
		},
	},
});
