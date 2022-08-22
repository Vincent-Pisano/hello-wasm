const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Add this

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  experiments: {
    asyncWebAssembly: true,
  },
};
