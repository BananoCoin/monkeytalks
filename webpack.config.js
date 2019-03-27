const path = require('path');
const webpack = require('webpack');

/*
 * Webpack Plugins
 */
const ManifestPlugin = require('webpack-manifest-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');

// take debug mode from the environment
const debug = (process.env.NODE_ENV !== 'production');

// Development asset host (webpack dev server)
const publicHost = debug ? 'http://localhost:2992' : '';

module.exports = {
    // configuration
    context: __dirname,
    entry: {
        app_js: path.join(__dirname, 'src', 'app')
    },
    output: {
        path: path.join(__dirname, 'app', 'static', 'build'),
        publicPath: `${publicHost}/static/build/`,
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].js',
    },
    resolve: {
        extensions: ['.ts', '.js', '.jsx'],
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
                    { loader: 'vue-style-loader', options: { sourceMap: true } },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true, precision:10 } }
                ],
            },
            {
                test: /\.(ttf|eot|svg|png|jpe?g|gif|ico|woff)(\?.*)?$/i,
                loader: 'file-loader',
                options: {
                    context: path.join(__dirname, 'src'),
                    name: '[path][name].[hash].[ext]',
                }
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
        new webpack.ProvidePlugin({io: 'socket.io-client'}),
        new ManifestPlugin({fileName: path.join(__dirname, 'app', 'webpack', 'manifest.json'), writeToFileEmit: debug}),
        new VueLoaderPlugin(),
        new PurgecssPlugin({
            paths: glob.sync([
                path.join(__dirname, './**/*.vue'),
                path.join(__dirname, './src/**/*.js'),
                path.join(__dirname, './src/**/*.ts')
            ]),
            minify: true
        })
    ].concat(debug ? [] : [
        // production webpack plugins go here
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            }
        }),
    ]),
};
