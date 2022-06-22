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
            '/get/': {
                target: 'https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0',
                headers: {
                    // 如果需要传递cookie，可以在此添加
                    Cookie: 'll="118220"; bid=tNypoyRM11A; __utmc=30149280; __utmc=223695111; _vwo_uuid_v2=DFD2D78435504BB4E0C51FD3376E50429|7ac37f323b01b254dd2692e7d2ee8f56; gr_user_id=32dcc12a-13b5-48dc-b1b1-cf90e3391bc5; dbcl2="216486244:y5psqpV++FU"; ck=BhQ9; __utmz=223695111.1655369071.3.3.utmcsr=accounts.douban.com|utmccn=(referral)|utmcmd=referral|utmcct=/; push_noty_num=0; push_doumail_num=0; __utmz=30149280.1655538849.5.5.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); __utmv=30149280.21648; _pk_ref.100001.4cf6=%5B%22%22%2C%22%22%2C1655792058%2C%22https%3A%2F%2Faccounts.douban.com%2F%22%5D; _pk_id.100001.4cf6=9875ddc9447a4ccf.1654302855.4.1655792058.1655369070.; __utma=30149280.43860434.1654302856.1655538849.1655792060.6; __utma=223695111.1165112140.1654302856.1655369071.1655792060.4'
                }
            }
        },
        overlay: {
            warnings: true,
            errors: true
        }
    }
};
