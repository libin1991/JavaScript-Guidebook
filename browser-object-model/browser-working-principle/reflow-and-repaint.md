# 回流和重绘

整个在浏览器的渲染过程中回流（Reflow）和重绘（Repaint）会大大影响 Web 性能，尤其是手机页面。因此我们在页面设计的时候要尽量减少回流和重绘。

渲染过程包括页面初始化、用户行为改变界面样式和动画改变界面样式等。

## 回流

回流（Reflow），也叫重排，会计算页面布局（Layout）。某个节点回流时会**重新计算节点的尺寸和位置**，而且还有可能触及其后代节点的回流。回流后，浏览器会重新绘制受影响的部分到屏幕可视区域，该过程称为重绘。另外，DOM 变化不一定都会影响几何属性，比如改变一个元素的背景色不影响宽高，这种情况下只会发生重绘，代价较小。

当 DOM 的变化影响了元素的几何属性（宽或高），浏览器需要重新计算元素的几何属性，由于流式布局其他元素的几何属性和位置也受到影响。浏览器会使渲染树中受到影响的部分失效，并重新构造渲染树。

回流会从根节点开始递归往下，依次计算所有的结点几何尺寸和位置，在回流过程中，可能会增加一些渲染器，如文本字符串。DOM 树里的每个节点都会有 `reflow` 方法，一个结点的回流很有可能导致子节点，甚至父节点以及同级节点的回流。

回流（Reflow）几乎是无法避免的。现在界面上流行的一些效果，比如树状目录的折叠、展开（实质上是元素的显示与隐藏）等，都将引起浏览器的 `reflow`。鼠标滑过、点击等用户交互事件，只要这些行为引起了页面上某些元素的占位面积、定位方式、边距等属性的变化，都会引起它内部、周围甚至整个页面的重新渲 染。通常我们都无法预估浏览器到底会 `reflow` 哪一部分的代码，它们都彼此相互影响着。

**回流的原因：**

* **Initial**：网页初始化的时候
* **Incremental**：JavaScript 在操作 DOM Tree 时
* **Resize**：某些元件的尺寸变了
* **StyleChange**：如果 CSS 的属性发生变化了
* **Dirty**：几个 Incremental 的 Reflow 发生在同一个元素的子树上

**会导致产生回流的场景：**

- 网页初始化
- 元素内容变化，如输入空间
- 脚本操作 DOM（增加、删除和修改）
- 计算 `offsetWidth` 和 `offsetHeight` 等
- 改变浏览器窗口大小
- 设置 style 属性
- 操作 class 属性
- 激活伪类，如 `:hover`
- 改变文字大小
- 样式表变动

浏览器并不会在我们进行上述操作时立即进行回流，浏览器会积攥一批 Reflow 后批量进行回流，不过有的操作会让浏览器立马进行回流，比如窗口缩放，改变了页面默认的字体，或者说获取以下这些值。

* `offsetTop`、`offsetLeft`、`offsetWidth`、`offsetHeight`
* `scrollTop`、`scrollLeft`、`scrollWidth`、`scrollHeight`
* `clientTop`、`clientLeft`、`clientWidth`、`clientHeight`
* IE 中的 `getComputedStyle()` 和 `currentStyle`

**减少回流的方案：**

- 不要通过父级来改变子元素样式，最好直接改变子元素样式，改变子元素样式尽可能不要影响父元素和兄弟元素的大小和尺寸
- 尽量通过 `class` 来设计元素样式，切忌使用 `style`
- 实现元素的动画，对于经常要进行回流的组件，要抽离出来，它的 `position` 属性应当设为 `fixed` 或 `absolute`
- 权衡速度的平滑。比如实现一个动画，以 1 个像素为单位移动这样最平滑，但回流就会过于频繁，CPU 很快就会被完全占用。如果以 3 个像素为单位移动就会好很多。
- 不要用 `table` 布局的另一个原因就是 `tables` 中某个元素一旦触发回流就会导致 `table` 里所有的其它元素回流。在适合用 `table` 的场合，可以设置 `table-layout` 为 `auto` 或 `fixed`。
- CSS 里不要有表达式
- 减少不必要的 DOM 层级。改变 DOM 树中的一级会导致所有层级的改变，上至根部，下至被改变节点的子节点。这导致大量时间耗费在执行回流上面。
- 避免不必要的复杂的 CSS 选择器，尤其是后代选择器，因为为了匹配选择器将耗费更多的 CPU。
- 尽量不要过多的频繁的去增加、修改或删除元素，因为这可能会频繁地导致页面回流，可以先把该 DOM 节点抽离道内存中进行复杂的操作然后再 `display` 到页面上。
- 不要逐条地修改 DOM 样式。与其这样，不如预先定义好 CSS 的 `class`，然后修改 DOM 的 `className`。

## 重绘

重绘（Repaint）遍历所有节点，**检测节点的可见性、颜色、轮廓等可见的样式属性**，然后根据检测的结果更新页面的响应部分。当渲染树中的一些元素需要更新一些不会改变元素布局的属性，比如只是影响元素的外观、风格、而不会影响布局的那些属性，这时候就只发生重绘。当然，页面首次加载也是要重绘一次的。

光栅：光栅主要是针对图形的一个栅格化过程。现代浏览器中主要的绘制工作主要用光栅化软件来完成。所以元素重绘由这个元素和绘制层级的关系，来决定的是否会很大程度影响你的性能-，如果这个元素盖住的多层元素都被重新绘制，性能损耗当然大。

## 动态变化

在网页元素发生变化时，浏览器会尽可能做出最小的响应：

- 元素颜色的改变：只会对该元素进行**重绘**。
- 元素位置的改变：只会对该元素及其子元素（可能还有同级元素）进行**布局和重绘**。
- 添加 DOM 节点：会对该节点进行**布局和重绘**。
- 一些重大变化（例如增大 `<html>` 元素的字体）会导致缓存无效，使得整个渲染树都会进行重新**布局**和**绘制**。

---

**参考资料：**

* [📝 学习重流和重绘（reflow 和 repaint）](https://segmentfault.com/a/1190000015851927)
* [📝 研讨浏览器绘制和 Web 性能的注意事项](https://segmentfault.com/a/1190000016056546)
