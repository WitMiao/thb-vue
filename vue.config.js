module.exports = {
  //禁用eslint
  lintOnSave: false,

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/css/variables.scss";`
      },
      
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
};
