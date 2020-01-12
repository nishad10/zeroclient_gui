const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const bundleOutputDir = './wwwroot/dist'
module.exports = () => {
  return [
    {
      mode: 'production',
      devtool: 'source-map',
      stats: { modules: false },
      entry: { main: './ClientApp/boot.tsx' },
      resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.js'
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
          { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
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
