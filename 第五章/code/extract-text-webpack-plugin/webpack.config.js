const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: "./main.js",
  output: {
    filename: "dist/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
        }),
      },
    ],
  },
  plugins: [new ExtractTextWebpackPlugin("dist/bundle.css")],
};
