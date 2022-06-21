/* eslint-disable */
console.log("vue.config.js", process.env.NODE_ENV);
const CompressionWebpackPlugin = require("compression-webpack-plugin");
let IS_PROD = process.env.NODE_ENV === "production";
module.exports = {
    productionSourceMap: false,
    publicPath: process.env.NODE_ENV === "production" ? "/dist/" : "/test/",
    pluginOptions: {
        compression: {
            gzip: {
                filename: "[file].gz[query]",
                algorithm: "gzip",
                include: /\.(js|css|html|svg|json)(\?.*)?$/i,
                minRatio: 0.8,
            },
        },
    },
    configureWebpack: (config) => {
        if (IS_PROD) {
            // 启用 gzip 压缩插件
            config.plugins.push(
                new CompressionWebpackPlugin({
                    test: /\.js$|\.html$|\.css$/u,
                    threshold: 4096, // 超过 4kb 压缩
                })
            );
            config.optimization = {
                splitChunks: {
                    cacheGroups: {
                        common: {
                            name: "chunk-common", // 打包后的文件名
                            chunks: "initial", //
                            minChunks: 2,
                            maxInitialRequests: 5,
                            minSize: 0,
                            priority: 1,
                            reuseExistingChunk: true,
                        },
                        vendors: {
                            name: "chunk-vendors",
                            test: /[\\/]node_modules[\\/]/,
                            chunks: "initial",
                            priority: 2,
                            reuseExistingChunk: true,
                            enforce: true,
                        },
                        element: {
                            name: "element",
                            test: /[\\/]node_modules[\\/]element-ui[\\/]/,
                            chunks: "initial",
                            priority: 3,
                            reuseExistingChunk: true,
                            enforce: true,
                        },
                    },
                },
            };
            config.output.filename = "js/[name].[contenthash:4].js";
            config.output.chunkFilename = "js/[name].[contenthash:4].js";
            // eslint-disable-next-line no-empty
        } else {
        }
    },
    devServer: {
        proxy: {
            "/api/": {
                target: "http://ait.dev.weiyun.test.com/",
                headers: {
                    // 如果需要传递cookie，可以在此添加
                    // Cookie: cookies
                },
            },
            "/books/": {
                target: "https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0",
                headers: {
                    // 如果需要传递cookie，可以在此添加
                    // Cookie: cookies
                },
            },
        },
        overlay: {
            warnings: true,
            errors: true,
        },
    },
};
