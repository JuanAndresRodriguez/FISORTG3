const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");


// using enviroment variables to determine the correct compiling mode
let mode = (process.env.NODE_ENV === "production") ? "production" : "development";

module.exports = {

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",  
            },
            {
                test: /\.s?css$/i,
                use: [
                    {
                       loader: MiniCssExtractPlugin.loader,
                       options: { publicPath: "" }
                    }, 
                    "css-loader", 
                    "sass-loader"
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[hash][ext][query]",
    },

    plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
        template: "./src/index.html",
    })],

    mode: mode,
    devServer: {
        contentBase: "./dist",
    }
}