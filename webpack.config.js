const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        pzui: './lib/index.tsx'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'pzui',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader', "sass-loader", ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
}