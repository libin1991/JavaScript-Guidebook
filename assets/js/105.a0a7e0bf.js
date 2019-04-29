(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{402:function(e,t,r){"use strict";r.r(t);var a=r(0),_=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("FileReader 对象允许 Web 应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容。FileReader 接口提供了一个异步API，使用该 API 可以在浏览器主线程中异步访问文件系统，读取文件中的数据。")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("通过 new 操作符构造 FileReader 对象。")]),e._v(" "),e._m(3),e._m(4),e._v(" "),r("p",[e._v("以下属性均为只读属性，不可更改。")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),r("p",[e._v("对 FileReader 对象调用其中某一种读取方法后，可使用以下事件处理方式跟踪其读取进度。")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),r("p",[e._v("这些方法都是异步读取文件的。无论读取成功或失败，方法并不会返回读取结果，这一结果存储在 result 属性中。")]),e._v(" "),e._m(10),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("参考资料：")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.html5rocks.com/zh/tutorials/file/dndfiles/",target:"_blank",rel:"noopener noreferrer"}},[e._v("通过 File API 使用 JavaScript 读取文件"),r("OutboundLink")],1)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"filereader-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#filereader-对象","aria-hidden":"true"}},[this._v("#")]),this._v(" FileReader 对象")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("其中 File 对象可以是来自用户在一个 "),t("code",[this._v("<input>")]),this._v(" 元素上选择文件后返回的 FileList 对象，也可以来自拖放操作生成的 DataTransfer 对象，还可以是来自一个 HTMLCanvasElement 上执行 "),t("code",[this._v("mozGetAsFile()")]),this._v(" 方法后返回结果。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"构造函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构造函数","aria-hidden":"true"}},[this._v("#")]),this._v(" 构造函数")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" fileReader "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("FileReader")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 属性")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("属性")]),e._v(" "),r("th",[e._v("说明")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("code",[e._v("FileReader.error")])]),e._v(" "),r("td",[e._v("一个 DOMException，表示在读取文件时发生的错误。")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("FileReader.readyState")])]),e._v(" "),r("td",[e._v("表示 FileReader 状态的码（EMPTY=0还没有加载任何数据；LOADING=1数据正在被加载；DONE=2已完成全部的读取请求）")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("FileReader.result")])]),e._v(" "),r("td",[e._v("文件的内容。该属性仅在读取操作完成后才有效，数据的格式取决于使用哪个方法来启动读取操作。")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h5",{attrs:{id:"事件处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件处理","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件处理")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("事件")]),e._v(" "),r("th",[e._v("说明")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("code",[e._v("FileReader.onabort")])]),e._v(" "),r("td",[e._v("处理 abort 事件。该事件在读取操作被中断时触发。")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("FileReader.onerror")])]),e._v(" "),r("td",[e._v("处理 error 事件。该事件在读取操作发生错误时触发。")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("FileReader.onload")])]),e._v(" "),r("td",[e._v("处理 load 事件。该事件在读取操作完成时触发。")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("FileReader.onloadstart")])]),e._v(" "),r("td",[e._v("处理 loadstart 事件。该事件在读取操作开始时触发。")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("FileReader.onloadend")])]),e._v(" "),r("td",[e._v("处理 loadend 事件。该事件在读取操作结束（要么成功，要么失败）时触发。")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("FileReader.onprogress")])]),e._v(" "),r("td",[e._v("处理 progress 事件。该事件在读取 Blob 时触发。")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("✅ 因为 FileReader 继承自 EventTarget，所以所有这些事件也可以通过 addEventListener 方法使用。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 方法")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("方法")]),e._v(" "),r("th",[e._v("说明")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("code",[e._v("FileReader.abort()")])]),e._v(" "),r("td",[e._v("中止读取操作。在返回时，readyState 属性为 "),r("code",[e._v("DONE")]),e._v("。")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("FileReader.readAsArrayBuffer()")])]),e._v(" "),r("td",[e._v("开始读取指定的 Blob 中的内容，一旦完成，result 属性中保存的将是被读取文件的 "),r("strong",[e._v("ArrayBuffer 数据对象")]),e._v("。")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("FileReader.readAsBinaryString(file)")])]),e._v(" "),r("td",[e._v("开始读取指定 Blob 中的内容。一旦完成，result 属性中将包含所读取文件的"),r("strong",[e._v("原始二进制数据")]),e._v("。")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("FileReader.readAsDataURL(file)")])]),e._v(" "),r("td",[e._v("开始读取指定的 Blob 中的内容。一旦完成，result 属性中将包含一个 "),r("strong",[r("code",[e._v("data:URL")]),e._v(" 格式的字符串")]),e._v("以表示所读取文件的内容。")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("FileReader.readAsText(file [, encoding])")])]),e._v(" "),r("td",[e._v("开始读取指定的 Blob 中的内容。一旦完成，result 属性中将包含一个"),r("strong",[e._v("字符串")]),e._v("以表示所读取文件的内容。")])])])])}],!1,null,null,null);t.default=_.exports}}]);