var path = require('path');

module.exports = {
	entry: ['babel-polyfill', './app/app.js'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		loaders: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'es2017', 'stage-2']
			}
		}
		]
	}
}