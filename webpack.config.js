const path = require('path');

module.exports = {
  entry: './src/js/add-book.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }
    ]
  }
};
