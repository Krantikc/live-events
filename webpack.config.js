// Version if the local Node.js version supports async/await
// webpack.config.js

const webpack = require('webpack')
const slsw = require('serverless-webpack');

module.exports = (async () => {
  const accountId = await slsw.lib.serverless.providers.aws.getAccountId();
  return {
    entry: slsw.lib.entries,
    target: 'node',
    plugins: [
      new webpack.DefinePlugin({
        AWS_ACCOUNT_ID: `${accountId}`,
      }),
	],
	module: {
		rules: [
			{
			  test: /\.m?js$/,
			  exclude: /(node_modules|bower_components)/,
			  use: {
				loader: 'babel-loader',
				options: {
				  presets: ['@babel/preset-env']
				}
			  }
			}
		  ]
	}
  };
})();