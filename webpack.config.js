const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    "sensible-web3": "./lib/index.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
    new webpack.IgnorePlugin({
      checkResource(resource) {
        return /(.*\/genesisStates\/.*\.json)/.test(resource);
      },
    }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
  resolve: {
    alias: {
      // To avoid blotting up the `bn.js` library all over the packages
      // use single library instance.
      "bn.js": path.resolve(__dirname, "node_modules/bn.js"),
      process: "process/browser",
    },
    fallback: {
      os: require.resolve("os-browserify/browser"),
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      zlib: require.resolve("browserify-zlib"),
      buffer: require.resolve("buffer"),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "entry",
                  corejs: 3,
                  targets: {
                    ie: 10,
                  },
                },
              ],
            ],
            plugins: [
              "@babel/plugin-transform-runtime",
              "@babel/plugin-transform-modules-commonjs",
            ],
          },
        },
      },
    ],
  },
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "umd"),
    library: "sensible-web3",
    libraryTarget: "umd",
  },
  performance: {
    maxAssetSize: 4000000,
    maxEntrypointSize: 4000000,
  },
};
