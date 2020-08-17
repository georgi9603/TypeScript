module.exports = {
  entry: './js/app.js',
  // devtool: 'inline-source-map',
  // module: {
  //   rules: [
  //     { test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader' }
  //   ]
  // },
  // resolve: {
  //   extensions: ['.tsx', '.ts', '.js']
  // },
  // output: {
  //   filename: 'bundle.js'
  // },
  devServer: {
    inline: false
  }
};
