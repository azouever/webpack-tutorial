const path = require("path");

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
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  experiments: {
    topLevelAwait: true,
  },
  //   optimization: {
  //     splitChunks: {
  //       chunks: "all",
  //     },
  //   },
};
