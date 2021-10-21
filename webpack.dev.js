const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const {merge} = require("webpack-merge");

const common = require("./webpack.common");

const index = {
  template: "./src/template/index.pug",
  filename: "index.html",
  chunks: ["index"]
}

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  entry: {
    index: "./src/index.tsx"
  },
  output: {
    publicPath: "/",
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  devServer: {
    host: "localhost",
    port: 8080,
    devMiddleware: {
      writeToDisk: true
    },
    historyApiFallback: {
      index: "/"
    }
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new HtmlWebpackPlugin(index),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ],
})
