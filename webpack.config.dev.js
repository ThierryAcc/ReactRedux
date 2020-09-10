const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// for babbel to know that we are running in dev
process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "web", // could be a node
  devtool: "cheap-module-source-map", // shows original code in browser
  entry: "./src/index", // is default
  output: {
    path: path.resolve(__dirname, "build"), // webpack serves app from memory __dirname is current, not write file but inmemory
    publicPath: "/", // browser url
    filename: "bundle.js", // is never created but for html to know
  },
  devServer: {
    // serve app via webpack, could also use express
    stats: "minimal", // reduces info to cli
    overlay: true,
    historyApiFallback: true, // all links loaded from index.html
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_URL": JSON.stringify("http://localhost:3001"),
    }),
    new HtmlWebpackPlugin({
      // where to find template and favicon
      template: "src/index.html",
      favicon: "src/favicon.ico",
    }),
  ],
  module: {
    // what files to handle in webpack
    rules: [
      // first rule is for js,  second for css
      {
        test: /\.(js|jsx)$/, // find js or jsx
        exclude: /node_modules/, // ignore node modules
        // use: ["babel-loader", "eslint-loader"], // what to do with js files, use babel and eslint
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/react"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"], // import css and bundle into single file
      },
    ],
  },
};
