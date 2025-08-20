const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    library: {
      type: 'module'
    },
    clean: true
  },
  experiments: {
    outputModule: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  externals: {
    // Don't bundle any peer dependencies
  },
  optimization: {
    minimize: false // Keep readable for debugging
  }
};