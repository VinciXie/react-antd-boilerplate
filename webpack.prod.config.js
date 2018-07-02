const webpack = require('webpack');
const path = require('path');

const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require('./webpack.common.config.js');

function sourceMapLoader(loaderName) {
  return {
    loader: loaderName,
    options: {
      minimize: true
    }
  }
}

const config = {
  // devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/js/bundle-[hash:6].js'
  },

  module: {
    rules: [

      {
          test: /\.css$/,
          use: [
              MiniCssExtractPlugin.loader,
              sourceMapLoader('css-loader')
          ]
      },

      // {
      //     test: /\.less$/,
      //     use: [
      //         'MiniCssExtractPlugin.loader',
      //         sourceMapLoader('css-loader'),
      //         sourceMapLoader('less-loader')
      //     ]
      // },

    ]
  },

  mode: 'production',

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "static/css/style-[hash:6].min.css",
      // chunkFilename: "[id].css"
    })
  ],

}



module.exports = merge(common, config);
