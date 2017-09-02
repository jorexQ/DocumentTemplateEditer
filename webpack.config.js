const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


var extractLayoutTheme = new ExtractTextPlugin({
    filename: "styles/editer-layout-theme.min.css"
});

module.exports = {
    entry: {
        content: "./src/index.tsx"
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist"
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [{
            // All files with a '.ts' or '.tsx' extension will be handled by
            // 'awesome-typescript-loader'.
            test: /\.tsx?$/,
            use: ["awesome-typescript-loader"]
        }, {
            // All output '.js' files will have any sourcemaps re-processed by
            // 'source-map-loader'.
            test: /\.js$/,
            enforce: "pre",
            loader: "source-map-loader"
        }, {
            test: /\.scss$/,
            use: extractLayoutTheme.extract({
                use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    { loader: 'sass-loader' }
                ],
                fallback: 'style-loader'
            }),
            include: [
                path.resolve(__dirname, "src/assist/styles/editer-layout")
            ],
        }]
    },

    // When importing a module whose path matches one of the following, just assume
    // a corresponding global variable exists and use that instead. This is
    // important because it allows us to avoid bundling all of our dependencies,
    // which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "antd": "antd",
        "styled-components": "styled"
    },
    plugins: [
        extractLayoutTheme,
    ]


    // new UglifyJSPlugin({
    //     sourceMap: true
    // })
};