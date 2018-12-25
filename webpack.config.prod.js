const path = require("path");

module.exports = {
    mode: "production",
    entry: "./index.js",
        output: {
        path: path.resolve(__dirname, "build/"),
        filename: "cacau.js"
//        libraryTarget: 'umd',
//        globalObject: 'this',
//        libraryExport: 'default',
//        library: 'cacau'
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
            }
        ]
    }
};