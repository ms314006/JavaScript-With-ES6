const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: 'dist/bundle.js',
    path: path.resolve(__dirname, './'),
  },
  // 將loader的設定寫在module的rules屬性中
  module: {
    // rules的值是一個陣列可以存放多個loader物件
    rules: [
      { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'], }, }, }
    ],
  },
  devServer: {
    port: 8080,
  },
};