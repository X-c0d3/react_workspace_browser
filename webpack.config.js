var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/app/App.tsx', 'webpack-hot-middleware/client'],
        vendor: ['react', 'react-dom']
    },
    // externals: [
    //     /^library\/.+$/
    // ],
    // context: path.resolve(__dirname, 'app'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'bundle.js',
        filename: 'js/[name].bundle.js'
    },
    mode: process.env.NODE_ENV || 'development',
    performance: {
        hints: process.env.NODE_ENV === 'production' ? "warning" : false
    },
    module: {
        rules: [{
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                // loader: 'awesome-typescript-loader'
                // test: /\.ts|\.tsx$/,
                // exclude: /node_modules/,
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'app', 'index.html'),
            filename: 'index.html',
            hash: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
        // plugins: [],
    },
    stats: {
        colors: true
    },
    optimization: {
        minimize: false,
        sideEffects: false,
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        inline: true,
        host: "localhost",
        port: 3000,
        watchOptions: {
            poll: true
        }
    }
};