import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    root: 'src',
    plugins: [dts()],
    build: {
        lib: {
            entry: 'lib/public-api.ts',
            name: 'ClientLibrary',
            fileName: (format, filename) => {
                if (format === 'umd') return 'client-library.js';
                else return 'cl.js';
            },
            formats: ['umd']

        },
        outDir: '../wwwroot'
    }
})