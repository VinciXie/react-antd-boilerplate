const webpack = require('webpack');
const path = require('path');

const merge = require('webpack-merge');

const common = require('./webpack.common.config.js');

function sourceMapLoader(loaderName) {
  return {
    loader: loaderName,
    options: {
      sourceMap: true
    }
  }
}

const config = {
  devtool: 'cheap-eval-source-map',

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },

  module: {
    rules: [

      {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            }
          ]
      },

      // {
      //     test: /\.less$/,
      //     use: [
      //         'style-loader',
      //         sourceMapLoader('css-loader'),
      //         sourceMapLoader('less-loader')
      //     ]
      // },

    ]
  },

  mode: 'development',

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DllReferencePlugin({
			context: path.join(__dirname),
			manifest: require("./dll/reactLibs-manifest.json") // eslint-disable-line
		}),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    hot: true,
    port: 8888,
    index: 'index.html'
  }
}



module.exports = merge(common, config);
