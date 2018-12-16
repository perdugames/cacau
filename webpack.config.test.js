const path = require("path");

module.exports = {
    mode: "development",
    entry: "./tests/executetests.js",
        output: {
        path: path.resolve(__dirname, "build/"),
        filename: "cacau.test.js",
    },
    resolve: {
        modules: [__dirname, "node_modules"],
        alias: {
          LIB: path.resolve(__dirname, "lib/"),
          BUILD: path.resolve(__dirname, "build/")
        },
        extensions: ['.js']
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
    }
};