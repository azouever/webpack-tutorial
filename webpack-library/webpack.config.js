const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    //     index: {
    //       import: "./src/index.js",
    //       dependOn: "shared",
    //     },
    //     another: {
    //       import: "./src/another-module.js",
    //       dependOn: "shared",
    //     },
    //     shared: "lodash",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Caching",
    }),
  ],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  experiments: {
    topLevelAwait: true,
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
