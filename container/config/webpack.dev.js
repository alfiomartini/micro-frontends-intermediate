const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    // always return the index.html page if the user types a wrong path?
    //  related to navigation
    historyApiFallback: {
      index: "index.html",
    },
  },
  // needed to avoid warning message in devtools
  // error: failed to load source map for webpack...""
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);