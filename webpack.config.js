/* eslint-disable no-undef */
const path = require(`path`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    compress: false,
    open: true,
    port: 1337,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
        resolve: {
          extensions: [`.js`, `.jsx`],
          alias: {
            "@src": path.resolve(__dirname, `src`),
            "@history": path.resolve(__dirname, `src/history.js`),
            "@hocs": path.resolve(__dirname, `src/hocs`),
            "@reducers": path.resolve(__dirname, `src/reducers`),
            "@components": path.resolve(__dirname, `src/components`),
            "@pages": path.resolve(__dirname, `src/components/pages`),
            "@selectors": path.resolve(__dirname, `src/selectors/selectors.js`),
            "@helpers": path.resolve(__dirname, `src/helpers/helpers.js`),
            "@constants": path.resolve(__dirname, `src/const.js`),
          }
        }
      }
    ],
  },
  devtool: `source-map`
};
