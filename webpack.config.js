const path = require('path');
const HWP = require('html-webpack-plugin');
const CWP =require('clean-webpack-plugin');
module.exports = {
  entry:'./src/index.js',
  output: {
    filename: 'bundle.js',
    path:path.resolve(_dirname,'dist')
  },
  devtool:'inline-source-map',
  plugins:[
    new CWP(['dist']),
    new HWP({
      title:'new pages'
    })
  ],
  devServer: {
    contentBase:'./dist'
  }
}