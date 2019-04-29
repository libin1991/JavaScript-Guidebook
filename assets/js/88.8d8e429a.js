(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{367:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("HTML5 中的 Web Storage 提供了两个在客户端存储数据的对象：")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("因此 sessionStorage 和 localStorage 的主要区别在于他们存储数据的生命周期，sessionStorage 存储的数据的生命周期是一个会话，而 localStorage 存储的数据的生命周期是永久，直到被主动删除，否则数据永远不会过期的。")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("HTTP 协议的缓存，可以由用户浏览器清除或禁用缓存，也可以由 Web 服务器设置过期时间或不缓存。对于前端工程师，这更像是一个黑盒，想要决定文件是访问缓存还是访问远程显得有些力不从心。")]),t._v(" "),a("p",[t._v("使用 localStorage 控制文件缓存的方式有两种：")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("这两种方式一般都会提前做好缓存过期策略，通常是使用版本号来控制，下面还会细讲。否则文件新版上线，用户客户端还是旧版，这就麻烦大了，而且这类问题，还不好调试不好重现。")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("localStorage 和 sessionStorage 有着统一的API接口，这为二者的操作提供了极大的便利。下面以 localStorage 为例来介绍一下 API 接口使用方法，同样这些接口也适用于 sessionStorage。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),a("p",[t._v("字面量形式实现：")]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("当我们要存储对象是，应先转换成我们可识别的字符串格式（比如 JSON 格式）再进行存储。")]),t._v(" "),t._m(10),t._m(11),t._v(" "),a("p",[t._v("用于获取指定键名的键值。")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),a("p",[t._v("用于删除指定键名的键值。")]),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),a("p",[t._v("用于清除所有存储的键值对。")]),t._v(" "),t._m(20),t._m(21),t._m(22),t._v(" "),a("p",[t._v("通过指定索引获取键名称。需要注意的是赋值早的键值对应的索引值大，赋值完的键值对应的索引小，key 方法可用于遍历 localStorage 存储的键值。")]),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),a("p",[t._v("length 属性用于获取 localStorage 中键值对的数量。")]),t._v(" "),t._m(26),t._m(27),t._v(" "),a("p",[t._v("在 HTML5 中，可以通过 window 对象的 Storage 事件进行监听。当存储的 Storage 数据发生变化时都会触发它，也就是说当前页面的 Storage 改变的时候，触发这个事件也会触发调用所有同域下其他窗口的 Storage 事件。但是，该事件不会再导致数据变化的当前页面触发。而且它不同于 click 点击类的事件会事件捕获和冒泡，storage 事件更像是一个通知，不可取消。")]),t._v(" "),a("p",[t._v("触发 Storage 事件的条件：")]),t._v(" "),t._m(28),t._v(" "),a("p",[t._v("Storage 的 Event 对象的常用属性")]),t._v(" "),t._m(29),t._v(" "),t._m(30),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/ruangong1203/article/details/52841135",target:"_blank",rel:"noopener noreferrer"}},[t._v("📍实例：H5 Storage事件监听"),a("OutboundLink")],1)]),t._v(" "),t._m(31),t._v(" "),a("p",[t._v("基于 Web Storage 的特点，它主要被用于储存一些不经常改动的，不敏感的数据，比如全国省市区县信息。还可以存储一些不太重要的跟用户相关的数据，比如说用户的头像地址、主题颜色等，这些信息可以先存储在用户本地一份，便于快速呈现，等真正从服务器端读取成功后再更改头像地址，主题颜色。另外，基于 storage 事件特点，Web Storage 还可以用于同域不同窗口间的通信。")]),t._v(" "),t._m(32),t._v(" "),a("p",[t._v("Web Storage 和 Cookie 有许多相同之处：")]),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),a("p",[t._v("相比 Cookie ，Web Storage 的优点主要表现在存储空间更大，可存储的内容更大。Cookie每次都随请求数据发送到服务器端，Web Storage不会和请求数据一同发送到服务器端，占用带宽更少。缺点主要表现在，现在所有浏览器都支持 Cookie 操作，而只有现代浏览器才支持 Web Storage 操作，如果需要兼容老旧浏览器，就不能使用 Web Storage。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://my.oschina.net/u/2282680/blog/791180",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web Storage 学习"),a("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"web-storage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-storage","aria-hidden":"true"}},[this._v("#")]),this._v(" Web Storage")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("localStorage：主要用于存储一个域名下的需要永久存在在本地的数据，这些数据可以被一直访问，直到这些数据被删除，同源下数据多窗口共享")]),this._v(" "),s("li",[this._v("sessionStorage：主要用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问，同一源下不同窗口亦无法访问，会话结束后数据也随之销毁")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"缓存静态文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存静态文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 缓存静态文件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("使用 Loader 加载静态文件")]),this._v(" "),s("li",[this._v("借助服务器端将静态文件 inline 化")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"web-storage-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-storage-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Web Storage API")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"添加键值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加键值","aria-hidden":"true"}},[this._v("#")]),this._v(" 添加键值")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("Storage.setItem()")]),this._v(" 接受一个键名和值作为参数，将会把键名添加到存储中，如果键名已存在，则更新其对应的值。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("storage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("key")]),t._v(" "),a("td",[t._v("键名")]),t._v(" "),a("td",[t._v("DOMString")])]),t._v(" "),a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("键值")]),t._v(" "),a("td",[t._v("DOMString")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("Storage.key = value")])]),this._v(" "),s("li",[s("code",[this._v("Storage['key'] = value")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Example")]),t._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'boy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ben'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ben'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'boy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ben'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lilei'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"获取键值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取键值","aria-hidden":"true"}},[this._v("#")]),this._v(" 获取键值")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("Storage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("getItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),this._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("key")]),t._v(" "),a("td",[t._v("获取键值的键名")]),t._v(" "),a("td",[t._v("DOMString")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Example")]),t._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'boy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'Ben'")]),t._v("\n\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'Ben'")]),t._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'boy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'Ben'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {id: 1, name: 'lilei}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"删除键值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除键值","aria-hidden":"true"}},[this._v("#")]),this._v(" 删除键值")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("Storage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("removeItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),this._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("key")]),t._v(" "),a("td",[t._v("删除键值的键名")]),t._v(" "),a("td",[t._v("DOMString")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Example")]),t._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'boy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'Ben'")]),t._v("\n\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'boy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'boy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// null")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"清除所有键值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清除所有键值","aria-hidden":"true"}},[this._v("#")]),this._v(" 清除所有键值")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("Storage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Example")]),t._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"获取键名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取键名","aria-hidden":"true"}},[this._v("#")]),this._v(" 获取键名")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("Storage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),this._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("index")]),t._v(" "),a("td",[t._v("索引")]),t._v(" "),a("td",[t._v("number")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"获取键值数量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取键值数量","aria-hidden":"true"}},[this._v("#")]),this._v(" 获取键值数量")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("Storage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),this._v("length\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"web-storage-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-storage-事件","aria-hidden":"true"}},[this._v("#")]),this._v(" Web Storage 事件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("同一个浏览器打开了两个同源页面")]),this._v(" "),s("li",[this._v("其中一个页面修改了 localStorage")]),this._v(" "),s("li",[this._v("另一个网页注册了这个事件")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("oldValue")]),t._v(" "),a("td",[t._v("更新前的值。如果该键为新增加，则这个属性为 null。")]),t._v(" "),a("td",[t._v("any")])]),t._v(" "),a("tr",[a("td",[t._v("newValue")]),t._v(" "),a("td",[t._v("更新后的值。如果该键被删除，则这个属性为 null。")]),t._v(" "),a("td",[t._v("any")])]),t._v(" "),a("tr",[a("td",[t._v("url")]),t._v(" "),a("td",[t._v("原始触发storage事件的那个网页的网址。")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("key")]),t._v(" "),a("td",[t._v("存储 store 的 key 名。")]),t._v(" "),a("td",[t._v("string")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("storageChanged")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'storage'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" storageChanged"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用场景","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用场景")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"web-storage-和-cookie-的异同点及优劣势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-storage-和-cookie-的异同点及优劣势","aria-hidden":"true"}},[this._v("#")]),this._v(" Web Storage 和 cookie 的异同点及优劣势")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("它们都可以用于存储用户数据")]),this._v(" "),s("li",[this._v("它们存储数据的格式都是字符串形式")]),this._v(" "),s("li",[this._v("它们存储的数据都有大小限制")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("cookie")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("localStorage")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("sessionStorage")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("数据存储方面")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("数据始终在同源的 HTTP 请求中携带（即便不需要），即 cookie 在浏览器和服务器之间来回传递。cookie 数据还有路径（path）的概念，可以限制 cookie 只属于某个路径下")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("不会自动把数据发送给服务器，仅在本地保存")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("不会自动把数据发送给服务器，仅在本地保存")])]),t._v(" "),a("tr",[a("td",[t._v("容量")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("数据大小限制在4kb以内，同时因为每次 HTTP 请求都会携带 cookie，所以 cookie 只适合保存很小的数据，如会话标识")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5MB")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5MB")])]),t._v(" "),a("tr",[a("td",[t._v("数据存储有效期")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("只在 cookie 设置的过期时间之前有效，即使窗口关闭或浏览器关闭")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("始终有效，窗口或浏览器关闭也一直保存，本地存储，因此用作持久数据")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("仅在当前浏览器窗口关闭之前有效")])]),t._v(" "),a("tr",[a("td",[t._v("作用域不同")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在所有"),a("strong",[t._v("同源窗口")]),t._v("中都是共享的；也就是说只要浏览器不关闭，数据仍然存在")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在所有"),a("strong",[t._v("同源窗口")]),t._v("中都是共享的；也就是说只要浏览器不关闭，数据仍然存在")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("不在不同的浏览器窗口中共享，即使是同一个页面")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("Web Storage拥有setItem、getItem、removeItem、clear等方法，不像cookie需要自己封装setCookie、getCookie等方法")])])}],!1,null,null,null);s.default=n.exports}}]);