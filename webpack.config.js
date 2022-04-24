const path = require("path");
const webpack = require('webpack');
//webpack placeholders
// naming files for security
/**
* [hash]
* [chunkhash]
* [name]
* [id]
* [query]
* [contenthash]
*/


module.exports = {
  // set to production by default , size better & performance  & compressed
  // developement better for speed & verbose  to debug
  mode : "development",
  entry: "./src/index.js", // by default
  output: {
    path: path.resolve(__dirname, "dist/build"), //set folder === better choice
    filename: "js/main.js" , //'js/[name].[contenthash].build.js'
    // ./build/build.js auto creates folder build
    publicPath: "/assets/" //public in node exp
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, 'dist')
    },
    // devMiddleware: {
    //   writeToDisk : true,
    // },
      hot: "only"
  },


    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]

}
