module.exports = {
    //禁用eslint
    lintOnSave: false,
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:80",
                pathRewrite: {"^/api": ""}
            }
        }
    },
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
