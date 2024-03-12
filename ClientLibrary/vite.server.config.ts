import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    lib: {
      entry: 'server/blazor.ts',
      name: 'ClientLibrary',
      fileName: (format, filename) => {
        if (format === 'es') return 'ClientLibrary.lib.module.js';
        else return 'server.js';
      },
      formats: ['es'],
    },
    outDir: '../wwwroot',
  },
});
