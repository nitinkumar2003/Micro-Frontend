const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    mode: "development",
    devServer: {
        port: 3002,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                }
            }
        ]
    },
    plugins:[
        new ModuleFederationPlugin({
            name:"remoteApp2",
            filename:"remoteEntry.js",
            exposes:{
                "./Footer":"./src/components/Footer"
            },
            shared:{
                react:{singleton:true},
                "react-dom":{singleton:true}
            }
        }),
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        })
    ]
}