module.exports = {
    //禁用eslint
    lintOnSave: false,
    devServer: {
        port:8686,
        proxy: {
            "/api": {
                target: "http://localhost:2333",
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
