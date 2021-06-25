module.exports = {
  lintOnSave: false, //禁用eslint
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/css/variables.scss";`
      },
      
    }
  }
};
