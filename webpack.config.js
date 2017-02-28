var path = require('path');
var webpack = require('webpack');
let autoprefixer = require('autoprefixer');
//var glob = require('glob');//利用glob模块可以很方便的获取src/scripts/page路径下的所有js入口文件。同理，可以实现自动的进行与入口文件相对应的模板配置
/*
 html-webpack-plugin插件，重中之重，webpack中生成HTML的插件，
 具体可以去这里查看https://www.npmjs.com/package/html-webpack-plugin
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
/*
 extract-text-webpack-plugin插件，
 有了它就可以将你的样式提取到单独的css文件里，
 再也不用担心样式会被打包到js文件里了。
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var config = {
    entry: require('./server.config').entries,
    output: {
        path: path.resolve(__dirname,'public'),
        publicPath: '/static/',
        filename: 'scripts/[name].js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: 'style-loader!css-loader?importLoaders=1!postcss-loader'
            },
            {
                test: /\.styl$/,
                use: [
                    {
                        loader: 'style-loader!css-loader!postcss-loader!stylus-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|bmp|svg|woff|woff2|eot|ttf|ico)$/i,
                use: 'url',
                query: {
                    limit: 1,
                    name: '[name]-[hash:5].[ext]'
                }
            }
        ]
    }
}

module.exports = config;