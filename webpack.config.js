const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = (env) => {

  const isProduction = env === 'production'
  const extractSASS = new ExtractTextPlugin('style.css')

  //console.log(CSSExtract);

  return {
    entry: './src/app.js',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'public')
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },{
        test: /\.sass$/,
        use: extractSASS.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }]
        })
      }]
    },
    plugins: [
      extractSASS
    ],
    devServer: {
      contentBase: path.join(__dirname, "public"),
      compress: true,
      port: 9000,
      historyApiFallback: true
    },
    //mode: 'development',
    devtool: isProduction ? 'source-map' :  'inline-source-map'

  };

}
