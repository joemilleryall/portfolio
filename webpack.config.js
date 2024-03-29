
const path = require('path');

module.exports = {
    mode:'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs'),
    },
    devServer: {
        port: 8080,
        static: path.join(__dirname, 'docs'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|pdf)$/i,
                include: path.resolve(__dirname, 'assets'),
                use: {
                    loader: 'file-loader', 
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
            },
        ]
    }
};