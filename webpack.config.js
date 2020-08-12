const path = require('path')
module.exports = {
    mode: 'development',
    entry: {
        pzui: './lib/index.tsx'
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
            }
        ]
    }
}