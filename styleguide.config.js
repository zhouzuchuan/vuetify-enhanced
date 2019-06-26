const path = require('path')
const pkg = require('./package.json')

module.exports = {
    title: pkg.name,
    version: pkg.version,
    defaultExample: true,
    minimize: false,
    pagePerSection: true,
    ribbon: {
        text: 'Back to fork',
        url: 'https://github.com/zhouzuchuan/vuetify-enhanced',
    },
    // 定义props和方法选项卡的初始状态
    usageMode: 'expand',
    // 定义示例代码选项卡的初始状态
    exampleMode: 'collapse',

    // 生成的静态HTML样式指南的文件夹
    styleguideDir: 'docs',
    require: [
        'css.preset',
        path.join(__dirname, 'styleguide/global.js'),
        path.join(__dirname, 'styleguide/global.scss'),
    ],
    renderRootJsx: path.join(__dirname, 'styleguide/root.js'),
    sections: [
        {
            name: '快速上手',
            content: 'docments/introduce.md',
        },
        {
            name: 'Components',
            content: 'docments/component.md',
            components: 'src/components/**/[A-Z]*.vue',
            sectionDepth: 1,
        },
    ],

    styleguideComponents: {
        // LogoRenderer: path.join(__dirname, 'styleguide/components/Logo'),
        StyleGuideRenderer: path.join(__dirname, 'styleguide/components/StyleGuideRenderer'),
        // SectionsRenderer: path.join(__dirname, 'styleguide/components/SectionsRenderer'),
    },
    // webpackConfig: {
    //   // custom config goes here
    // }
}
