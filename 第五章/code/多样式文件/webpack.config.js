const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: {
    foo: "./scripts/foo.js",
    bar: "./scripts/bar.js",
  },
  output: {
    filename: "dist/[name].js",
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
  plugins: [new ExtractTextWebpackPlugin("dist/[name].css")],
};
