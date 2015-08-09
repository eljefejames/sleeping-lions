var path = require('path');
var ROOT_PATH = path.resolve(__dirname);


module.exports = {
    entry: "./js/app.jsx",
    output: {
        filename: "bundle.js"
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['react-hot', 'babel?stage=1'],
            include: path.resolve(ROOT_PATH, './js/')
        }
      ]
    }
}
