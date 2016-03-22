// FOR REFERENCE: https://webpack.github.io/docs/configuration.html
module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
    // You need this to reference the file in your index.html
    publicPath: "/dist/"
  },
  devServer: {
    inline: true,
    port: 3333,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
