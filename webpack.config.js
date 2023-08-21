const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		bundle: path.resolve("src", "index.js"),
		// logger: path.resolve("src", "logger.js"),
	},
	output: {
		path: path.resolve("dist"),
		filename: "[name].[contenthash].js",
		assetModuleFilename: "assets/[name].[contenthash].[ext]",
	},
	devServer: {
		port: 3000,
		static: {
			directory: path.resolve("dist"),
		},
		open: true,
		hot: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
			filename: "index.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(gif|png|jpeg|jpg)$/i,
				type: "asset/resource",
			},
			{
				test: /\.html$/,
				use: ["html-loader"],
			},
		],
	},
};
