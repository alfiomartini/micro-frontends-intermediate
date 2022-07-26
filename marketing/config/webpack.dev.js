const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");
const { MARKETING_PORT_DEV } = require("../../utils");

const devConfig = {
  mode: "development",
  devServer: {
    port: MARKETING_PORT_DEV,
    // always return the index.html page if the user types a wrong path?
    //  related to navigation
    historyApiFallback: {
      index: "/index.html",
    },
  },
  // needed to avoid warning message in devtools
  // error: failed to load source map for webpack...""
  devtool: "source-map",
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
