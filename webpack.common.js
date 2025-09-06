const path = require('path');

module.exports = {
  entry: {
    app: './assets/js/main-scripts.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './assets/js/main-scripts.js',
  },
};
