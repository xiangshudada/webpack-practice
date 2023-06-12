module.exports = {
  entry: "./main.js",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "force-strict-loader",
      },
    ],
  },
};
