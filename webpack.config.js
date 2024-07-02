const OptimizeCSSAssetsPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const fs = require("fs");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: devMode ? "development" : "production",
  // entry: './src/js/main.js',
  entry: JSON.parse(fs.readFileSync("./modules.json")),

  optimization: {
    minimize: !devMode,
    minimizer: [new OptimizeCSSAssetsPlugin(), new TerserPlugin()],
  },
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "assets"),
  },
  plugins: [new MiniCssExtractPlugin({ filename: "[name].min.css" })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { url: false, sourceMap: true },
          },
          { loader: "sass-loader", options: { sourceMap: true } },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [require("postcss-preset-env")],
              },
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { useBuiltIns: "usage", corejs: 3 }],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src/"),
    },
  },
};
