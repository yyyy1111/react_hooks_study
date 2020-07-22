### CSS基础
******
#### css基础知识
1. 三种引入方式
* 行内：写在元素上的style
* 内部: 写在style标签里面的
* 外部： link引入的
2. 优先级
* 每个选择器都有权值，权值越大越优先
* 继承的样式优先级低于自身指定样式
* ！important优先级最高 js也无法修改
* 权值相同时，靠近元素的样式优先级高 顺序为内联样式表（标签内部）> 内部样式表（当前文件中）> 外部样式表（外部文件中）
3. 定位（position）
* relative:相对定位
* absolute：绝对定位
* fixed：固定
* sticky：黏贴：https://www.cnblogs.com/moqiutao/p/7341671.html
* static：默认
4. 浮动
* left
* right
* 清除浮动：不清楚浮动会发生高度塌陷：浮动元素父元素高度自适应（父元素不写高度时，子元素写了浮动后，父元素会发生高度塌陷）
5. link 与 @import的区别
* 从属关系：link是html标签，不仅可以加载css文件，还可以定义RSS、rel连接属性等，而@import是css的语法，只有导入样式表的作用。
* 加载顺序：页面加载事，link和html会同时加载，而@import在html加载完成后才加载。
* 兼容性：@import是css2.1才有的语法，在ie5以上才能识别，link是html标签不存在兼容问题。
* DOM：link引入的样式可以通过js操作dom来改变，而@import不能。
* 权重：link引入的样式的权重高于@import的权重。
6. 宽高的获取方式
* 文档相关宽高：https://www.cnblogs.com/yulintianxia/p/9385595.html
7. display 相关
* display:none;
* display:block;
* display:inline;
* display:inline-block;
* display:flex;
* display:table;
* display:grid;
#### 伪类
* :nth-child,:after,等
#### bfc
##### ![./public/box.png]
* 盒模型：w3c与怪异盒模型的区别
###### 
* margin,padding,border,content的分布
#### 垂直水平居中
#### 经典布局
#### cs3
#### 常见兼容css的hack
1. 防止高度塌陷的常见方法：
* clear清除浮动（添加空div法）在浮动元素下方添加空div,并给该元素写css样式：   {clear:both;height:0;overflow:hidden;}
* 给浮动元素父级设置高度
* 父级同时浮动（需要给父级同级元素添加浮动）
* 父级设置成inline-block，其margin: 0 auto居中方式失效
* 给父级添加overflow:hidden 清除浮动方法
* 万能清除法 after伪类 清浮动（现在主流方法，推荐使用）
.float_div:after{
	content:".";
	clear:both;
	display:block;
	height:0;
	overflow:hidden;
	visibility:hidden;
}
.float_div{
	zoom:1
} 
#### 自适应