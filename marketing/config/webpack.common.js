module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // presets are applied from right to left
            presets: ["@babel/preset-react", "@babel/preset-env"],
            // plugins are applied from left to right
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
