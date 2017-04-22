/**
 * Created by Victor_Zhou on 2017-4-22.
 */
module.exports = {
    entry: [
        './public/javascripts/Draft/index/entry.jsx'
    ],
    output: {
        path: __dirname + '/public/javascripts/Draft',
        publicPath: "/public/javascripts/Draft",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};