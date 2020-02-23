var exclude = /node_modules/,
  {fromRoot} = require('./utils'),
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
  // {
  //   test: /\.svg$/,
  //   loader: 'svg-inline-loader'
  // },
  {
    test: /\.(woff|woff2|svg)$/,
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
            require('postcss-mixins')({
              mixinsDir: fromRoot('src/global-styles/mixins')
            }),
            require('postcss-preset-env')({
              stage: 3,
              features: {
                preserve: false,
                'nesting-rules': true
              }
            }),
            require('postcss-custom-properties')({
              preserve: false
            }),
            // require('postcss-simple-vars'),

            // require('postcss-calc'),
            require('postcss-import')(),
            require('postcss-advanced-variables')({}),
            require('precss'),
            // require('postcss-modules'),
            require('autoprefixer')({
              flexbox: true
            })
          ]
        }
      }
    ]
  }
];
