// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    define: {
        global: {},
        'process.env': {},
    },
    resolve: {
        alias: {
            'process': 'process/browser',
            'buffer': 'buffer',
            '@delta-storage/sdk': '@delta-storage/sdk/dist/index.js'
        }
    },
    optimizeDeps: {
        esbuildOptions: {
            define: {
                global: 'globalThis'
            }
        }
    }
});