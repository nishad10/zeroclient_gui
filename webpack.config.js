const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = () => {
  return [
    {
      mode: 'production',
      devtool: 'source-map',
      stats: { modules: false },
      entry: { main: './ClientApp/boot.tsx' },
      resolve: { extensions: ['*', '.js', '.jsx', '.ts', '.tsx'] },
      output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.min.js',
        publicPath: '/'
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            include: /ClientApp/,
            use: 'awesome-typescript-loader?silent=true'
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './index.html'
        })
      ]
    }
  ]
}
