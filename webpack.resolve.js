var path = require('path');

module.exports = {
  resolve: {
    modules: ['node_modules', 'assets/customTypes'],
    alias: {
      scripts: path.resolve('./src/scripts'),
      forms: path.resolve('./src/components/forms'),
      common: path.resolve('./src/components/common'),
      layout: path.resolve('./src/components/layout'),
      base: path.resolve('./src/components/base'),
      svg: path.resolve('./src/svg'),
    },
    extensions: ['.ts', '.tsx', '.js']
  }
};
