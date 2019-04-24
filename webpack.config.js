const path = require('path');

module.exports = {
    entry: './src/index',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public')
    },
    module: {
        rules: [
           {
              test: /\.css$/,
              use: [
               'style-loader',
               'css-loader'
              ]
           },
            {
                 test: /\.(png|svg|jpg|gif)$/,
                 use: [
                'file-loader'
                ]
            },
            {
                 test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                'file-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
