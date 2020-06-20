const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.(jpeg|jpg|png)$/,
        use: {
          loader: "file-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader', options:{}},
          {loader: 'css-loader', options: {}}
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
