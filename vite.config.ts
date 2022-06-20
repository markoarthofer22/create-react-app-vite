import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import tsconfigPaths from 'vite-tsconfig-paths';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        {
            ...legacy({
                targets: ['defaults', 'not IE 11'],
            }),
            apply: 'build',
            // apply this only on production
        },
        tsconfigPaths(),
    ],
    publicDir: '/public_custom',
    css: {
        devSourcemap: true,
        modules: {
            localsConvention: 'dashesOnly',
            hashPrefix: 'marko',
            generateScopedName: (name, filename, css) => `file-${name}`,
        },
    },
    server: {
        port: 9999,
    },
    build: {
        outDir: 'build',
        assetsDir: 'static',
    },
});
