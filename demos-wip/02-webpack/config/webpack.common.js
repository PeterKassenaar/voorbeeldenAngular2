// Common configuration options for webpack. Used in Development, Test and Production environments.
// Webpack is Node based, so this is a node/commonjs module and thus starts with 'require'-statements.
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');


module.exports = {
	// Entries - split app in 3 separate parts, for vendor code, custom code and polyfills
	entry: {
		'polyfills': './src/polyfills.ts',
		'vendor': './src/vendor.ts',
		'app': './src/main.ts'
	},

	// Resolver. Look for explicit extensions (''), .js- and .ts-extensions. We could add .html and .css later, if necessary
	resolve: {
		extensions: ['', '.js', '.ts']
	},


	// Loaders. These are the 'plugins' for Webpack and tell WebPack how to handle .ts-files, .html-files, and so on.
	module: {
		loaders: [
			{
				// typescript loader - transpile ts to js.
				test: /\.ts$/,
				loaders: ['ts', 'angular2-template-loader']
			},
			{
				// html loader - load component templates
				test: /\.html$/,
				loader: 'html'
			},
			{
				// images and fonts loader. These are bundled as well
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'file?name=assets/[name].[hash].[ext]'
			},
			{
				// css loader, to bundle .css-files.
				test: /\.css$/,
				exclude: helpers.root('src', 'app'),
				loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
			},
			{
				test: /\.css$/,
				include: helpers.root('src', 'app'),
				loader: 'raw'
			}
		]
	},

	plugins: [
		// Our application code imports vendor code. Webpack is not smart enough to keep the vendor code out of the app.js bundle. We rely on the CommonsChunkPlugin to do that job.
		// It identifies the hierarchy among three chunks: app -> vendor -> polyfills. Where Webpack finds that app has shared dependencies with vendor, it removes them from app.
		// It would do the same if vendor and polyfills had shared dependencies (which they don't in this case).
		new webpack.optimize.CommonsChunkPlugin({
			name: ['app', 'vendor', 'polyfills']
		}),

		// Webpack generates a number of js and css files. We could insert them into our index.html manually. That would be tedious and error-prone. 
		// Webpack can inject those scripts and links for us with the HtmlWebpackPlugin.
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]
};
