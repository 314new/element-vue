const path = require("path");
const resolve = dir => path.join(__dirname, dir);
const IS_PROD = ["production"].includes(process.env.NODE_ENV);

module.exports = {
    chainWebpack: config => {
        // 添加别名
        config.resolve.alias
            .set("@", resolve("src"))
            .set("@static", resolve("src/static"))
            .set("@assets", resolve("src/assets"))
            .set("@scss", resolve("src/assets/scss"))
            .set("@store", resolve("src/store"))
            .set("@layouts", resolve("src/layouts"))
            .set("@components", resolve("src/components"))
            .set("@views", resolve("src/views"))
            .set("@router", resolve("src/router"));
    },
    css: {
        extract: IS_PROD,
        sourceMap: false,
        loaderOptions: {
            scss: {
                additionalData: `
                @import "~@scss/variables.scss";
                @import "~@scss/mixins.scss";
                @import "~@scss/function.scss";
                `
            }
        }
    },
    devServer: {
        host: '127.0.0.1',
        inline: true,
        open: true
    }
}