const webpack = require("webpack");

module.exports = {
  entry: {
    bar: "./bar.js",
    foo: "./foo.js",
  },
  output: {
    filename: "dist/[name].js",
  },
  module: {
    rules: [],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "commons.js",
    }),
  ],
};
