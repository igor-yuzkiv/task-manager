import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'

//eslint-disable-next-line
//@ts-ignore
import {fileURLToPath, URL} from 'node:url'

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/js/main.ts'],
            /**
             * https://laravel.com/docs/10.x/vite#blade-refreshing-on-save
             */
            refresh: true,
        })
    ],
    define : {'process.env': {}},
    resolve: {
        alias     : {
            '@': fileURLToPath(new URL('./resources/js', import.meta.url))
        },
        extensions: [
            '.js',
            '.json',
            '.jsx',
            '.mjs',
            '.ts',
            '.tsx',
            '.vue',
        ],
    },
})
