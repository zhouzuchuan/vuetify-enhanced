const path = require('path')
const { bindServer } = require('data-mock')
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
    publicPath: './', // 根域上下文目录
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
    pages: {
        index: {
            template: './public/index.html',
            entry: './src/pages/index/index.js',
            filename: 'index.html',
        },
    },
    lintOnSave: true, // 是否开启eslint保存检测，有效值：ture | false | 'error'
    runtimeCompiler: true, // 运行时版本是否需要编译
    transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
    productionSourceMap: true, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    configureWebpack: config => {
        // webpack配置，值位对象时会合并配置，为方法时会改写配置
        if (debug) {
            // 开发环境配置
            config.devtool = 'cheap-module-eval-source-map'
        } else {
            // 生产环境配置
        }
        Object.assign(config, {
            // 开发生产共同配置
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, './src'),
                    '@api': path.resolve(__dirname, './src/api'),
                    '@mk': path.resolve(__dirname, './src/mocks'),
                    '@cn': path.resolve(__dirname, './src/containers'),
                    '@m': path.resolve(__dirname, './src/models'),
                    '@p': path.resolve(__dirname, './src/pages'),
                    '@c': path.resolve(__dirname, './src/components'),
                    '@u': path.resolve(__dirname, './src/utils'),
                    '@s': path.resolve(__dirname, './src/styles'),
                    vue$: 'vue/dist/vue.esm.js',
                },
            },
        })
    },
    chainWebpack: () => {
        // webpack链接API，用于生成和修改webapck配置，https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
        if (debug) {
            // 本地开发配置
        } else {
            // 生产开发配置
        }
    },
    css: {
        // 配置高于chainWebpack中关于css loader的配置
        modules: false, // 是否开启支持‘foo.module.css’样式
        // extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
        sourceMap: false, // 是否在构建样式地图，false将提高构建速度
        loaderOptions: {
            // css预设器配置项
            css: {
                localIdentName: '[name]-[hash]',
                camelCase: 'only',
            },
            stylus: {},
        },
    },
    parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
    pluginOptions: {
        // 第三方插件配置
    },
    pwa: {
        // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    },
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        after: server => {
            bindServer({
                server,
                target: path.resolve(__dirname, './src/mocks/'),
                watchTarget: path.resolve(__dirname, '../src/api/'),
            })
        },
    },
}
