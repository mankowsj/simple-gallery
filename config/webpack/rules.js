var exclude = /node_modules/,
  MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  {
    enforce: 'pre',
    test: /\.(js|tsx)$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
    options: {
      quiet: true
    }
  },
  {
    test: /\.(tsx|js)$/,
    exclude,
    loader: 'ts-loader'
  },
  {
    test: /\.svg$/,
    loader: 'svg-inline-loader'
  },
  {
    test: /\.(woff|woff2)$/,
    loader: 'file-loader',
    options: {
      esModule: false
    }
  },
  {
    test: /\.(p|)css$/,
    exclude,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoader: 1
          // modules: true,
          // camelCase: true,
          // localIdentName: '[path]_[name]_[local]'
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: () => [
            require('postcss-mixins'),
            require('postcss-calc'),
            require('precss'),
            // require('postcss-modules'),
            require('postcss-preset-env')({
              stage: 3,
              features: {
                'nesting-rules': true
              }
            }),
            require('autoprefixer')
          ]
        }
      }
    ]
  }
];
