### useState
* 调用useState会返回一个state变量，以及更新state变量的方法。useState的参数是state变量的初始值，初始值仅在初次渲染时有效。

* 更新state变量的方法，并不会像this.setState一样，合并state。而是替换state变量。

### webpack
*  webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)
* HWP:在我们构建之前，你应该了解，虽然在 dist/ 文件夹我们已经有 index.html 这个文件，然而 HtmlWebpackPlugin 还是会默认生成 index.html 文件。这就是说，它会用新生成的 index.html 文件，把我们的原来的替换。
### 遇到的问题
1. CleanWebpackPlugin is not a constructor
   > 原因:版本更新插件无需传参，抛出体变了（待验证）