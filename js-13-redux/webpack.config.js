var webpack = require('webpack');
var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var SRC_DIR = path.resolve(__dirname, 'src');
var DIST_DIR = path.resolve(__dirname, 'dist');

var isProduction = (process.env.NODE_ENV === 'production');

module.exports = {
  context: SRC_DIR,
  entry: './index.jsx',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      // js
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['env', {modules: false}], 'react', 'stage-2']
            }
          }
        ]
      },
      // css
      {
        test: /\.scss$/,
        include: SRC_DIR,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      },
      // images
      {
        test: /\.(jpg|png)$/i,
        include: SRC_DIR,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              limit: 10000
            }
          },
          {
            loader: 'img-loader'
          }
        ]
      },
      // html
      {
        test: /\.html$/,
        use: 'html-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [SRC_DIR, 'node_modules'],
    alias: {
      '@': SRC_DIR
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Webpack is awesome',
      filename: 'index.html',
      template: './index.html',
      favicon: './favicon.png',
      inject: true
    }),
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin({
      filename: 'styles.css'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: isProduction,
    }),
    new webpack.ProvidePlugin({})
  ],
  devServer: {
    contentBase: SRC_DIR,
    publicPath: '/',
    compress: true,
    port: 9000,
    historyApiFallback: true,
    stats: 'errors-only',
    clientLogLevel: 'warning',
  },
};

if (isProduction) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({sourceMap: true, mangle: false})
  );
}
