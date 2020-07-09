### useState
* 调用useState会返回一个state变量，以及更新state变量的方法。useState的参数是state变量的初始值，初始值仅在初次渲染时有效。
* 更新state变量的方法，并不会像this.setState一样，合并state。而是替换state变量。
* Hook 在 class 内部是不起作用的。但你可以使用它们来取代 class 。
* Hook 是什么？ Hook 是一个特殊的函数，它可以让你“钩入” React 的特性。
* 调用 useState 方法的时候做了什么? 它定义一个 “state 变量”
* useState 需要哪些参数？ useState() 方法里面唯一的参数就是初始 state。
* useState 方法的返回值是什么？ 返回值为：当前 state 以及更新 state 的函数。
* Effect Hook 可以让你在函数组件中执行副作用操作(类似于生命周期)
* 为什么在组件内部调用 useEffect？ 将 useEffect 放在组件内部让我们可以在 effect 中直接访问 count state 变量（或其他 props）。
* useEffect 会在每次渲染后都执行吗？ 是的，默认情况下，它在第一次渲染之后和每次更新之后都会执行。
* 递给 useEffect 的函数在每次渲染中都会有所不同，这是刻意为之的。事实上这正是我们可以在 effect 中获取最新的 count 的值，而不用担心其过期的原因。每次我们重新渲染，都会生成新的 effect，替换掉之前的。
* 为什么要在 effect 中返回一个函数？ 这是 effect 可选的清除机制。每个 effect 都可以返回一个清除函数。如此可以将添加和移除订阅的逻辑放在一起。它们都属于 effect 的一部分。
* React 何时清除 effect？ React 会在组件卸载的时候执行清除操作。
* 只在最顶层使用 Hook 不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们。
* 只在 React 函数中调用 Hook 不要在普通的 JavaScript 函数中调用 Hook
### webpack
*  webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)
* HWP:在我们构建之前，你应该了解，虽然在 dist/ 文件夹我们已经有 index.html 这个文件，然而 HtmlWebpackPlugin 还是会默认生成 index.html 文件。这就是说，它会用新生成的 index.html 文件，把我们的原来的替换。
### 遇到的问题
1. CleanWebpackPlugin is not a constructor
   > 原因:版本更新插件无需传参，抛出体变了（待验证）