const path = require('path');

module.exports = {
    mode: 'development',
	entry: path.join(__dirname, 'scripts', 'main.ts'),
	output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
            }
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
    },
    devtool: 'inline-source-map'
};
