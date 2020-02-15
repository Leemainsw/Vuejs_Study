const path = reauire('path');

module.exports = {
    entry: {
        //하나로 합쳐질 파일의 이름(app.js)
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        rules:[{

        }],
    },
    plugins: [],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },
};