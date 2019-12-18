const path = require("path");
const webpack = require("webpack");

const webpackConfig = {
	// mode: "production",
	entry: {
		reactLibs: ["react", "react-dom", "react-redux", "redux"],
		// beta: ["./beta", "./b", "./c"]
	},
	output: {
		path: path.join(__dirname, "./public"),
		filename: "MyDll.[name].js",
		library: "[name]_[hash:4]"
  },
	plugins: [
		new webpack.DllPlugin({
			path: path.join(__dirname, "./dll", "[name]-manifest.json"),
			name: "[name]_[hash:4]"
		}),
  ],
  stats: 'verbose'
};

module.exports = webpackConfig;