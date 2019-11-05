module.exports = {
    bail: true,
    entry: "./src/app.js",
    output: {
        path: `${__dirname}/dist`,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.md$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        publicPath: "/dist/",
        port: 9000,
        hot: true,
        historyApiFallback: {
            index: "index.html"
        }
    },
    stats: "errors-only"
};