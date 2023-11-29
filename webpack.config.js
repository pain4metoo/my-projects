const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 3000,
    open: true,
    hot: false,
  },
  entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: 'index.[contenthash].js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/tour-pages/', 'tour_0.html'),
      filename: 'tour_0.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/tour-pages/', 'tour_1.html'),
      filename: 'tour_1.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/tour-pages/', 'tour_2.html'),
      filename: 'tour_2.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/tour-pages/', 'tour_3.html'),
      filename: 'tour_3.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/tour-pages/', 'tour_4.html'),
      filename: 'tour_4.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/tour-pages/', 'tour_5.html'),
      filename: 'tour_5.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/tour-pages/', 'tour_6.html'),
      filename: 'tour_6.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new ESLintPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
          'group-css-media-queries-loader',
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.woff2?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[ext]',
        },
      },
      {
        test: /\.mp4$/i,
        type: 'asset/resource',
        generator: {
          filename: 'video/[name].[ext]',
        },
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        type: 'asset/inline',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
