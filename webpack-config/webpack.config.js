const TerserPlugin = require("terser-webpack-plugin");

const path = require('path')
const rules = require('./loaders')
const plugins = require('./plugins')
const { mode, isProduction } = require('./keys')


module.exports = {
  mode,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: "[name].[hash].js"
  },
  module: {
    rules
  },
  devServer: {
    port: 3005,
    hot: true,
    compress: isProduction,
    open: true
  },
  plugins,
  optimization: {
    minimize: isProduction,
    minimizer: [
      new TerserPlugin()
    ],
  }
}