var webpack = require('webpack');

var PROD = true; //JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
  entry: "./lib/index.js",
  output: {
    path: './dist',
    library: 'FontAwesome',
    libraryTarget: 'umd',
    filename: PROD ? "react-fontawesome.min.js" : "react-fontawesome.js"
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : [],

  //https://github.com/webpack/webpack/issues/1275
  resolve: {
    extensions: ['', '.js'],
    alias: {
      "react": "dummyReact.js"
    }
  },
  externals: {
    // Use external version of React
    "react": "React"
  },
  module: {
    noParse: [ "react" ]
  }
};
