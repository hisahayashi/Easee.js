const webpack = require('webpack');
const path = require('path');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
        test: /\.js$/,
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',
				options: {
					plugins: ['syntax-dynamic-import'],
					presets: ['@babel/preset-env']
				},
			},
			{
				test: /\.(scss|css)$/,
				use: [
					{loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'sass-loader'}
				]
			}
		]
	},

	entry: {
		app: ['babel-polyfill', './src/entry.js'],
	},

	output: {
    // filename: '[name].[chunkhash].js',
    filename: 'easee.js',
		path: path.resolve(__dirname, 'dist'),
    library: 'Easee',
    libraryTarget: 'umd'
	},

	mode: 'development',

  devServer: {
    open: true,
    openPage: 'example/',
    contentBase: path.join(__dirname, './'),
    watchContentBase: true,
    historyApiFallback: true,
    host: 'localhost',
    disableHostCheck: true,
    port: 8000,
    noInfo: true
  },

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	}
};
