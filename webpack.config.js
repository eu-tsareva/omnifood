const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        // use: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use: ['css-loader', 'sass-loader', 'postcss-loader'],
        //   disable: true
        // })
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 8000,
              name: "images/[hash]-[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    // new ExtractTextPlugin('style.css')
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "."),
    watchContentBase: true,
    hot: true,
    inline: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
