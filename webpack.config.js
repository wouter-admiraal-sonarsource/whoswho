var path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a 'scss' extension will be handled by the following loaders.
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },

      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      //{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};
