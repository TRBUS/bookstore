module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://111.229.37.167/',
        // 允许跨域
        changOrigin: true
      }
    }
  },
  productionSourceMap: process.env.NODE_ENV === 'production'
}
