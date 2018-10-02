const path = require("path");

module.exports = {
    mode: "development",
    entry: "./cacau.js",
        output: {
        path: path.resolve(__dirname, "build/"),
        filename: "cacau.dev.js",
        libraryTarget: 'umd',
        globalObject: 'this',
        libraryExport: 'default',
        library: 'cacau'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        presets: ["babel-preset-env"]
                    }
                }
            },
        ]
    },
    devtool: "source-map"
};