const webpack = require('webpack');
const htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  
  entry: {
    'vendor': './src/vendor',
    app: './src/main.ts'
  },
  output: {
    path: './dist',
    filename: 'app.[name].js',
    // filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts'}
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // Fixes Angular 2 error
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    ),
    new htmlWebPackPlugin({
      template: 'index.html'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.ts']
  }
};
