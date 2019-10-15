const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
function resolve (dir) {
  return path.join(__dirname, dir)
}

const environment = process.env.NODE_ENV
module.exports = {
  devServer: {
    // port: 8888, // 端口号
    // open: environment === 'development',
    // https: false,
  },
  outputDir: 'dist',
  assetsDir: "assets",
  // publicPath:"/m",
  // eslint
  lintOnSave: false,
  // lintOnSave: environment !== 'production',
  chainWebpack: config => {
    config
      .module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          options.transformAssetUrls = {
            audio: 'src',
          }
          return options;
        });
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      });
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('utils', resolve('src/views'))
  }
}
