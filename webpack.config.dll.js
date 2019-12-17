const path = require("path");
const webpack = require("webpack");

const webpackConfig = {
	// mode: "production",
	entry: {
		reactLibs: ["react", "react-dom"],
		// beta: ["./beta", "./b", "./c"]
	},
	output: {
		path: path.join(__dirname, "./public"),
		filename: "MyDll.[name].js",
		library: "[name]_library"
  },
	plugins: [
		new webpack.DllPlugin({
			path: path.join(__dirname, "./dll", "[name]-manifest.json"),
			name: "[name]_library"
		}),
  ],
  stats: 'verbose'
};

module.exports = webpackConfig;