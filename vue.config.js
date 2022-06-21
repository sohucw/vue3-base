/* eslint-disable */
console.log("vue.config.js", process.env.NODE_ENV);
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const postcssPxToViewPort = require("postcss-px-to-viewport");
let IS_PROD = process.env.NODE_ENV === "production";
module.exports = {
    productionSourceMap: false,
    publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/test/',
    pluginOptions: {
        // compression: {
        //     gzip: {
        //         filename: "[file].gz[query]",
        //         algorithm: "gzip",
        //         include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        //         minRatio: 0.8,
        //     },
        // },
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    // new postcssPxToViewPort({
                    //     unitToConvert: 'px', //需要转换的单位，默认为"px"；
                    //     viewportWidth: 375, //设计稿的视口宽度
                    //     unitPrecision: 5, //单位转换后保留的小数位数
                    //     propList: ['*'], //要进行转换的属性列表,*表示匹配所有,!表示不转换
                    //     viewportUnit: 'vw', //转换后的视口单位
                    //     fontViewportUnit: 'vw', //转换后字体使用的视口单位
                    //     selectorBlackList: ['.am-'], //不进行转换的css选择器，继续使用原有单位 过滤掉.am-开头的class，不进行vm vh转换
                    //     minPixelValue: 1, //设置最小的转换数值
                    //     mediaQuery: false, //设置媒体查询里的单位是否需要转换单位
                    //     replace: true, //是否直接更换属性值，而不添加备用属性
                    //     exclude: [/node_modules/] //忽略某些文件夹下的文件
                    // })
                ]
            }
        }
    },
    configureWebpack: (config) => {
        if (IS_PROD) {
            // 启用 gzip 压缩插件
            config.plugins.push(
                new CompressionWebpackPlugin({
                    test: /\.js$|\.html$|\.css$/u,
                    threshold: 4096 // 超过 4kb 压缩
                })
            );
            config.optimization = {
                splitChunks: {
                    cacheGroups: {
                        common: {
                            name: 'chunk-common', // 打包后的文件名
                            chunks: 'initial', //
                            minChunks: 2,
                            maxInitialRequests: 5,
                            minSize: 0,
                            priority: 1,
                            reuseExistingChunk: true
                        },
                        vendors: {
                            name: 'chunk-vendors',
                            test: /[\\/]node_modules[\\/]/,
                            chunks: 'initial',
                            priority: 2,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        element: {
                            name: 'element',
                            test: /[\\/]node_modules[\\/]element-ui[\\/]/,
                            chunks: 'initial',
                            priority: 3,
                            reuseExistingChunk: true,
                            enforce: true
                        }
                    }
                }
            };
            config.output.filename = 'js/[name].[contenthash:4].js';
            config.output.chunkFilename = 'js/[name].[contenthash:4].js';
            // eslint-disable-next-line no-empty
        } else {
        }
    },
    devServer: {
        proxy: {
            '/api/': {
                target: 'http://ait.dev.weiyun.test.com/',
                headers: {
                    // 如果需要传递cookie，可以在此添加
                    // Cookie: cookies
                }
            },
            '/books/': {
                target: 'https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0',
                headers: {
                    // 如果需要传递cookie，可以在此添加
                    // Cookie: cookies
                }
            }
        },
        overlay: {
            warnings: true,
            errors: true
        }
    }
};
