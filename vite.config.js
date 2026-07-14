import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
	root: 'svelte',
	plugins: [svelte()],
	build: {
		outDir: '../dist',
		emptyOutDir: true
	}
});
