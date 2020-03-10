// @ts-check

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = (env) => {
  const isProduction = env.production === 'prod';
  console.debug('Production = ', isProduction);

  const config = {
    mode: isProduction ? 'production' : 'development',
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
          terserOptions: {
            parse: {
              ecma: 9,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
            // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
          },
        }),
      ],
    },
    entry: [
      `${__dirname}/src/index.js`,
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
      path: `${__dirname}/dist/public`,
    },
    devtool: isProduction ? '' : 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: 'babel-loader',
          exclude: [
            /node_modules/,
          ],
        },
        {
          test: /\.html/,
          loader: 'raw-loader',
        },
        {
          test: /\.(sass|scss)$/,
          use: [{
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          }],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${__dirname}/assets/index.html`,
      }),
    ],
    devServer: {
      contentBase: `${__dirname}/dist/public`,
      port: 7700,
    },
  };

  if (isProduction) {
    config.plugins.push(
      // @ts-ignore
      new CopyWebpackPlugin([{
        from: `${__dirname}/assets`,
      }]),
    );
  }
  return config;
};
