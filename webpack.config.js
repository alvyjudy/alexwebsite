const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  devtool: 'inline-source-map',
  entry: "./src/index.js",
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    port: 3001,
    host: '0.0.0.0',
    open: false
  },
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
          {
            loader: 'style-loader',
            options:{}
          },
          {
            loader: 'css-loader',
            options: {modules: true}
          }
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
