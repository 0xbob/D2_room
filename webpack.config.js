const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/engine/index.js",
  output: {
    	path: path.resolve(__dirname, "dist"),
    	filename: "client.bundle.js"
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' },
      { test: /\.js$/, loader: 'babel-loader'}
    ]
  },
  plugins: [
  		new HtmlWebpackPlugin()
  ]
};
