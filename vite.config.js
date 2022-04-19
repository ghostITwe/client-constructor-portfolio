import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import alias from '@rollup/plugin-alias'

const aliases = alias({
    entries: [
        { find: '$', replacement: '/src' },
        { find: '$assets', replacement: '/src/assets' },
        { find: '$pages', replacement: '/src/pages' },
        { find: '$lib', replacement: '/src/lib' },
    ]
});

export default defineConfig({
    plugins: [
        svelte(),
        aliases
    ]
})
