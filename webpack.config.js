var path              = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack           = require('webpack');
var merge             = require('webpack-merge');

var TARGET    = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);

var common = {
  devtool: 'eval-source-map',

  entry: [
    'webpack-hot-middleware/client',
    path.resolve(ROOT_PATH, 'src'),
  ],

  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: path.resolve(ROOT_PATH, 'src')
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel', 'eslint'],
        exclude: /node_modules/,
        include: path.resolve(ROOT_PATH, 'src')
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Webpack Starter'
    }),
     new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      port: 4000
    }
  });
} else {
  module.exports = common;
}
