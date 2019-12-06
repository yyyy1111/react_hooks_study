const path = require('path');
const HWP = require('html-webpack-plugin');
const { CleanWebpackPlugin } =require('clean-webpack-plugin');
module.exports = {
  entry:'./src/index.js',
  output: {
    filename: 'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  devtool:'inline-source-map',
  plugins:[
    new CleanWebpackPlugin(),
    new HWP({
      title:'new pages'
    })
  ],
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use:[
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use:[
          'xml-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase:'./dist'
  }
}