const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = reauire('path');

module.exports = {
    entry: {
        //하나로 합쳐질 파일의 이름(app.js)
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        rules:[{
            test: /\.vew$/,
            loder: 'vue-loader',
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },
};