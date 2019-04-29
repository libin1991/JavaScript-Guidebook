(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{555:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"node-clonenode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-clonenode","aria-hidden":"true"}},[t._v("#")]),t._v(" Node.cloneNode()")]),t._v(" "),a("p",[a("code",[t._v("Node.cloneNode()")]),t._v(" 方法创建节点的拷贝。")]),t._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cloneNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("deep")]),t._v(" "),a("td",[t._v("默认值达为 "),a("code",[t._v("false")]),t._v("。设置为 "),a("code",[t._v("true")]),t._v("，执行深拷贝，克隆节点及真个子节点树；设置为 "),a("code",[t._v("false")]),t._v("，执行浅拷贝，即拷贝节点本身。")]),t._v(" "),a("td",[t._v("boolean")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("返回值类型")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Node")]),t._v(" "),a("td",[t._v("被克隆节点")])])])]),t._v(" "),a("h3",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" prime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cloneNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"附注"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附注","aria-hidden":"true"}},[t._v("#")]),t._v(" 附注")]),t._v(" "),a("ul",[a("li",[t._v("克隆一个元素节点会拷贝它所有属性及属性值，当然也就包括了属性上绑定的事件，但不会绑定那些使用 "),a("code",[t._v("addEventListener()")]),t._v(" 方法或者 "),a("code",[t._v("node.onClick = fn")]),t._v(" 这种 JavaScrept 动态绑定的事件。")]),t._v(" "),a("li",[t._v("在使用 "),a("code",[t._v("Node.appendChild()")]),t._v(" 或类似的方法将拷贝的节点添加到文档中之前，那个拷贝节点并不属于当前文档树的一部分，也就是说，它没有父节点。")]),t._v(" "),a("li",[t._v("如果 "),a("code",[t._v("deep")]),t._v(" 参数设为 "),a("code",[t._v("false")]),t._v("，则不克隆它的任何子节点，该节点所包含的所有文本也不会被克隆，因为文本本身也是一个或多个 "),a("code",[t._v("Text")]),t._v(" 节点。")]),t._v(" "),a("li",[t._v("如果 "),a("code",[t._v("deep")]),t._v(" 参数设为 "),a("code",[t._v("true")]),t._v("，则会拷贝整棵 DOM 子树（包括那些可能存在的 "),a("code",[t._v("Text")]),t._v(" 子节点）。对于空节点（例如 "),a("code",[t._v("<img>")]),t._v(" 或 "),a("code",[t._v("<input>")]),t._v(" 元素），则 "),a("code",[t._v("deep")]),t._v(" 参数无论是 "),a("code",[t._v("true")]),t._v(" 还是 "),a("code",[t._v("false")]),t._v(" ，都没有关系，但是仍然需要为它指定一个值。")]),t._v(" "),a("li",[t._v("为了防止一个文档中出现两个 ID 重复的元素，使用 "),a("code",[t._v("cloneNode()")]),t._v(" 方法克隆的节点在需要时应该指定另一个与原 ID 值不同的 ID。")]),t._v(" "),a("li",[t._v("如果原始节点设置了 ID，并且克隆节点会被插入到相同的文档中，那么应该更新克隆节点的 ID 以保证唯一性。"),a("code",[t._v("name")]),t._v(" 属性可能也需要进行修改，取决于你是否希望有相同名称的节点存在于文档中。")])])])}],!1,null,null,null);e.default=n.exports}}]);