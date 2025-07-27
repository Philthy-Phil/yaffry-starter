import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import tsconfigPaths from 'vite-tsconfig-paths';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        experimentalDecorators: true
      }
    }
  },
  root: './',
  plugins: [
    tsconfigPaths(),
    {
      name: 'yaffry-template-hmr',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.component.template.html')) {
          server.ws.send({
            type: 'full-reload',
            path: '*'
          });
        }
      }
    }
  ],
  optimizeDeps: {
    include: ['@philthy-phil/yaffry'],
    force: true
  },
  build: {
    outDir: '../dist-example',
    emptyOutDir: true,
    commonjsOptions: {
      include: [/yaffry/]
    },
    rollupOptions: {
      external: [],
    }
  },
  resolve: {
    alias: {
      '/src': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
