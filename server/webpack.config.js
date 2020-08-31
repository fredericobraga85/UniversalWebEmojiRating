const path = require('path')
const slsw = require('serverless-webpack')

module.exports = {
  mode: 'development',
  entry: slsw.lib.entries,
  externals: [{ 'aws-sdk': 'commonjs aws-sdk' }],
  //devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  optimization: {
    minimize: false // !(slsw.lib.webpack.isLocal || slsw.lib.options.environment === 'dev') // that's causing issues with node-mysql2
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { transpileOnly: true }
      },
    ],
  },
}
