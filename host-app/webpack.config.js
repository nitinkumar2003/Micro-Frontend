require("dotenv").config();

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: "development",
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'hostApp',
      remotes: {
        remoteApp: `remoteApp@${process.env.REMOTE_URL}`
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        zustand: { singleton: true }
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
