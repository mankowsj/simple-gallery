var path = require('path');

module.exports = {
  resolve: {
    modules: ['node_modules', 'assets/customTypes'],
    alias: {
      '@redux': path.resolve('./src/redux'),
      svg: path.resolve('./src/svg')
    },
    extensions: ['.ts', '.tsx', '.js']
  }
};
