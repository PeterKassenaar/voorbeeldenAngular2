// Configuration options for webpack, used in Production environments.
// Basically the same as the production environment, with a few key changes.
// Webpack is Node based, so this is a node/commonjs module and thus starts with 'require'-statements.

var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
	devtool: 'source-map',

	output: {
		// files are physically placed in the /dist folder.
		path: helpers.root('dist'),
		publicPath: '/',
		filename: '[name].[hash].js',
		chunkFilename: '[id].[hash].chunk.js'
	},

	htmlLoader: {
		minimize: false // workaround for ng2
	},

	plugins: [
		new webpack.NoErrorsPlugin(),				// Stop the build if there is an error
		new webpack.optimize.DedupePlugin(),		// Detect identical (and nearly identical) files and removes them from the output.
		new webpack.optimize.UglifyJsPlugin(),		// Minifies the bundles
		new ExtractTextPlugin('[name].[hash].css'),	// Extracts embedded css as external files, adding cache-busting hash to the filename.
		new webpack.DefinePlugin({
			'process.env': {
				'ENV': JSON.stringify(ENV)			// use to define environment variables that we can reference within our application.
			}
		})

		// Thanks to the DefinePlugin and the ENV variable defined at top, we can enable Angular 2 production mode like this:
		// if (process.env.ENV === 'production') {
		// 		enableProdMode();
		// }
	]
});
