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
            use: [
                'babel-loader',
            ]
        },


        // {
        //   test: /\.(png|jpg|gif)$/,
        //   use: [
        //     {
        //       loader: 'url-loader',
        //       options: {
        //         limit: 8192
        //       }
        //     }
        //   ]
        // }

      ]
    },

    resolve: {
      extensions: ['.js', '.jsx', '.json', '.scss', '.css'],

      modules: ["libs", "node_modules"],

    },


    plugins: [
        new HtmlWebpackPlugin({
          filename: "index.html",
          template: "public/index.html",
        }),
    ]
}

module.exports = config;
