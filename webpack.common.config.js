const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {

    context: path.join(__dirname, 'src'),

    entry: "./main.js",

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

      modules: ["node_modules"],

    },


    plugins: [
        new HtmlWebpackPlugin({
          inject: true,
          filename: "index.html",
          template: "./index.html",
        }),
    ]
}

module.exports = config;
