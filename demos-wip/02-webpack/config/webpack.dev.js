// Configuration options for webpack, used in Development environments.
// Webpack is Node based, so this is a node/commonjs module and thus starts with 'require'-statements.

var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
	devtool: 'cheap-module-eval-source-map',

	output: {
		// The HtmlWebpackPlugin (added in webpack.common.js) uses the publicPath and the filename settings to
		// generate appropriate <script> and <link> tags into the index.html.
		// Files are *not* placed in de /dist folder. In development they reside in memory.
		path: helpers.root('dist'),
		publicPath: 'http://localhost:8080/',
		filename: '[name].js',
		chunkFilename: '[id].chunk.js'
	},

	plugins: [
		// Our CSS are buried inside our Javascript bundles by default. The ExtractTextPlugin extracts them into
		//  external .css files that the HtmlWebpackPlugin inscribes as <link> tags into the index.html.
		new ExtractTextPlugin('[name].css')
	],

	devServer: {
		historyApiFallback: true,
		stats: 'minimal'
	}
});
