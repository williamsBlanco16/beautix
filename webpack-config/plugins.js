const { isProduction } = require('./keys')

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html'
})
const miniCssPlugin = new MiniCssExtractPlugin({
  filename: "[name].[hash].css"
})
module.exports = [
  htmlPlugin,
  miniCssPlugin,
  !isProduction && new ReactRefreshWebpackPlugin()
].filter(Boolean)
