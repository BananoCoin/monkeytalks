const path = require('path');
const webpack = require('webpack');

/*
 * Webpack Plugins
 */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestRevisionPlugin = require('manifest-revision-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// take debug mode from the environment
const debug = (process.env.NODE_ENV !== 'production');

// Development asset host (webpack dev server)
const publicHost = debug ? 'http://localhost:2992' : '';

const rootAssetPath = path.join(__dirname, 'assets');
const rootAssetPathAlt = path.join(__dirname, 'src');

module.exports = {
    // configuration
    context: __dirname,
    entry: {
        app_js: path.join(__dirname, 'src', 'app'),
        main_js: path.join(__dirname, 'src', 'js', 'main'),
        main_css: [
            path.join(__dirname, 'assets', 'css', 'main.scss'),
        ],
    },
    output: {
        path: path.join(__dirname, 'app', 'static', 'build'),
        publicPath: `${publicHost}/static/build/`,
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].js',
    },
    resolve: {
        extensions: ['.ts', '.js', '.jsx', '.css', '.scss'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devtool: 'source-map',
    devServer: {
        headers: {'Access-Control-Allow-Origin': '*'},
    },
    module: {
        rules: [
            {test: /\.html$/, loader: 'raw-loader'},
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ],
            },
            {
                test: /\.(ttf|eot|svg|png|jpe?g|gif|ico|woff)(\?.*)?$/i,
                loader: `file-loader?context=${rootAssetPath}&name=[path][name].[hash].[ext]`
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {presets: ['env'], cacheDirectory: true}
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules|\.d\.ts$/,
                options: {
                appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.d\.ts$/,
                loader: 'ignore-loader'
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({filename: '[name].[hash].css'}),
        new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery'}),
        new webpack.ProvidePlugin({io: 'socket.io-client'}),
        new ManifestRevisionPlugin(path.join(__dirname, 'app', 'webpack', 'manifest.json'), {
            rootAssetPath,
            rootAssetPathAlt,
            ignorePaths: ['/js', '/css'],
        }),
        new VueLoaderPlugin()
    ].concat(debug ? [] : [
        // production webpack plugins go here
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            }
        }),
    ]),
};