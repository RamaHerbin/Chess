const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, '../src/js/index.js'),
	output: {
		filename: 'bundle.[hash].js',
		path: path.resolve(__dirname, '../dist'),
	},
	devtool: 'source-map',
	plugins: [
		new CopyWebpackPlugin([{ from: path.resolve(__dirname, '../static') }]),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../src/index.html'),
			minify: true,
		}),
	],
	module: {
		rules: [
			// HTML
			{
				test: /\.(html)$/,
				use: ['html-loader'],
			},

			// JS
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},

			// CSS
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},

			// Images
			{
				test: /\.(jpg|png|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'assets/images/',
						},
					},
				],
			},
            // jQuery
			{
				test: /jquery.+\.js$/,
				use: [
					{
						loader: 'expose-loader',
						options: {
							exposes: ['$', 'jQuery'],
						},
					},
				],
			},
		],
	},
    externals: {
        jquery: 'jQuery'
    }
};
