/** @type {import('vite').UserConfig} */
export default {
    root: 'src',
    build: {
        lib: {
            entry: 'lib/public-api.ts',
            name: 'ClientLibrary',
            fileName: 'client-library'
        },
        outDir: '../wwwroot'
    }
}