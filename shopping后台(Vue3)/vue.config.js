const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const { defineConfig } = require('@vue/cli-service');
const IconsResolver = require('unplugin-icons/resolver');
const Icons = require('unplugin-icons/webpack');
const path = require('path');
const pathSrc = path.resolve(__dirname, 'src', 'global');
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  //前端解决跨域
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://shoppingapi.net:3333',
        // pathRewrite: {
        //   '^/api': '/'
        // },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        imports: ['vue'],
        eslintrc: {
          enabled: true
        },
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            //解决不了 必须这样引入<i-ep-edit></i-ep-edit>
            prefix: 'icon',
            enabledCollections: ['ep']
          })
        ],
        dts: path.resolve(pathSrc, 'auto-imports.d.ts')
      }),
      Components({
        resolvers: [
          IconsResolver({
            enabledCollections: ['ep']
          }),
          ElementPlusResolver()
        ],
        dts: path.resolve(pathSrc, 'components.d.ts')
      }),

      Icons({
        compiler: 'vue3',
        // 自动安装
        autoInstall: true
      })
    ]
  }
});
