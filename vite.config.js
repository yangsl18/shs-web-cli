import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "localhost",
    // https: false,//是否启用 http 2
    // cors: true,//为开发服务器配置 CORS , 默认启用并允许任何源
    open: true,//服务启动时自动在浏览器中打开应用
    port: "3000",
    // strictPort: false, //设为true时端口被占用则直接退出，不会尝试下一个可用端口
    // force: true,//是否强制依赖预构建
    // hmr: false,//禁用或配置 HMR 连接
    // 传递给 chockidar 的文件系统监视器选项
    // watch: {
    //  ignored:["!**/node_modules/your-package-name/**"]
    // },
    // // 反向代理配置
    proxy: { 
     '/api': {
        target: "http://120.24.245.233:8825/",
        changeOrigin: true,
        rewrite: (path) => {
          console.log(path)
          path.replace(/^\/api/, '')
        }
      }
    }  
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }, 
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    })
  ]
})
