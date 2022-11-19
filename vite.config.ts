import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  // The path on GitHub Pages. Using just the path, rather than the whole
  // URL, in case the base URL changes.
  base: '/group-namer/',
  plugins: [svelte()],
})
