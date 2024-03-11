import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',
    assetsInclude: ['assets/**/*'],
    build: {
        lib: {
            entry: 'lib/public-api.ts',
            name: 'ClientLibrary',
            fileName: (format, filename) => {
                if (format === 'umd') return 'client-library.js';
                else return 'cl.js';
            },
            formats: ['umd'],

        },
        outDir: '../wwwroot'
    }
})