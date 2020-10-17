const base = require("./webpack.config.dev");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
module.exports = Object.assign({}, base, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, 'doc')
  },
  entry: {
    example: './example.tsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "pzui",
      template: "example.html",
      filename: 'example.html'
    }),
  ],
});
