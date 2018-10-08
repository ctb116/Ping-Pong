const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundles.js',
    path: path.resolve(_dirname, 'dist')
  }
};
