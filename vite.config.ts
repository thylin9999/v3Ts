import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        proxy: {
            "/api":
                {
                    target: 'https://c.m.163.com',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
        }
    },
    // 别名设置
    resolve: {
        alias: {
            '@': '/src',
            '@api': '/src/api',
            '@assets': '/src/assets',
            '@components': '/src/components',
            '@router': '/src/router',
            '@store': '/src/store',
            '@views': '/src/views',
            '@utils': '/src/utils',
            '@style': '/src/style',
        }
    }
})
