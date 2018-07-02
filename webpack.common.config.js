const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {

    context: __dirname,

    entry: "./src/main.js",

    module: {
      rules: [

        {
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            use: [ 'babel-loader' ]
        },

      ]
    },

    resolve: {
      extensions: ['.js', '.jsx', '.json', '.scss', '.css'],

      modules: ["node_modules"],

    },


    plugins: [
        new HtmlWebpackPlugin({
          filename: "index.html",
          template: "public/index.html",
        }),
    ]
}

module.exports = config;
