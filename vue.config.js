const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: true,

  lintOnSave: false,

    // 设置代理
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://testapi.xuexiluxian.cn'
      }
    }
  },
}
