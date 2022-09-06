const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // 设置代理
  lintOnSave: false,
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://testapi.xuexiluxian.cn'
      }
    }
  },
  
})
