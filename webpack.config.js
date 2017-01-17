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
    publicPath: "/",
    // filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true'] },
      {
        test: /\.(html|css)$/,
        loader: 'raw-loader',
        exclude: /\.async\.(html|css)$/
      },
      {
        test: /\.async\.(html|css)$/,
        loaders: ['file?name=[name].[hash].[ext]', 'extract']
      }
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
