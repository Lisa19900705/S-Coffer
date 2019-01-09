/*
 * @Author: Lisa 
 * @Date: 2018-12-29 21:13:41 
 * @Last Modified by: Lisa
 * @Last Modified time: 2019-01-09 16:15:31
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'), //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '../dist'), // 输出的路径
        filename: 'bundle.js',  // 打包后文件
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use:[
                  {
                    loader: 'style-loader'
                  },
                  {
                    loader: 'css-loader'
                  }
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg|svg|woff|woff2|eot|ttf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                        limit: 8192
                        } 
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    }, 
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    }, 
                    {
                        loader: 'less-loader', // compiles Less to CSS
                        options: {
                            modifyVars: {
                                'primary-color': '#1DA57A',                         // 全局主色
                                'link-color': '#1DA57A',                          // 链接色
                                'success-color': '#52c41a',                        // 成功色
                                'warning-color': '#faad14',                         // 警告色
                                'error-color': '#f5222d',                           // 错误色
                                'font-size-base': '14px',                           // 主字号
                                'heading-color': 'rgba(0, 0, 0, .85)',             // 标题色
                                'text-color': 'rgba(0, 0, 0, .65)',                 // 主文本色
                                'text-color-secondary' : 'rgba(0, 0, 0, .45)',      // 次文本色
                                'disabled-color' : 'rgba(0, 0, 0, .25)',            // 失效色
                                'border-radius-base': '4px',                       // 组件/浮层圆角
                                'border-color-base': '#1DA57A',                     // 边框色
                                'box-shadow-base': '0 2px 8px rgba(0, 0, 0, .15)',  // 浮层阴影
                                'layout-sider-background': '#a7e2cd8c',
                                'layout-trigger-background' : '#3db389cf',
                                'menu-item-color': 'rgba(0, 0, 0, 0.65)', 
                                'menu-dark-color': 'rgba(0, 0, 0, 0.65)',
                                'menu-dark-bg': '#3db389cf',
                                'tooltip-bg': '#37bb8ceb',

                            },
                            javascriptEnabled: true,
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
　　 　　new HtmlWebpackPlugin({
　　　　 　　template: path.resolve(__dirname, '../src/index.template.html'),
　　　　　　 inject: true,
           title: '小猪存钱罐' //生成html文件的标题
　　　　 })
　　 ],
    mode: 'development' // 设置mode
}