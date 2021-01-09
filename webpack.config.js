module.exports = [
	{
		mode: 'production',
		context: __dirname,
		output: {
			path: __dirname,
			filename: `./dist.index.js`
		},
		entry: {
			'index': './src.index.js'
		},
		devtool: 'source-map',
		target: ['web', 'browserslist:IE 8'],
		optimization: {
			minimize: false
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules)/,
					use: {
						loader: 'babel-loader',
						options: {
							comments: false,
							presets: [
								[
									'@babel/preset-env',
									{
										corejs: '^3.6.3',
										targets: {
											browsers: [
												'chrome >= 26',
												'edge >= 12',
												'firefox >= 26',
												'opera >= 26',
												'safari >= 6',
												'ie >= 8'
											]
										},
										useBuiltIns: 'usage'
									}
								]
							]
						}
					}
				}
			]
		}
	},
];
