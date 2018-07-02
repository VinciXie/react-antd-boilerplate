const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {

    context: __dirname,

    entry: "./src/main.ts",

    module: {
      rules: [

        {
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            use: [ 'babel-loader' ]
        },

        {
            test: /\.tsx?$/,
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            use: [ "ts-loader" ],
        }
      ]
    },

    resolve: {
      extensions: ['.js', '.jsx', '.json', '.css', '.ts', '.tsx'],

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
