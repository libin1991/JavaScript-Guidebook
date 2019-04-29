(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{412:function(t,a,n){"use strict";n.r(a);var s=n(0),e=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"screen对象的方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#screen对象的方法","aria-hidden":"true"}},[t._v("#")]),t._v(" Screen对象的方法")]),t._v(" "),n("h3",{attrs:{id:"screen-orientation-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#screen-orientation-api","aria-hidden":"true"}},[t._v("#")]),t._v(" Screen Orientation API")]),t._v(" "),n("p",[t._v("Screen Orientation API是一个能让Web开发者能控制屏幕旋转方向的API，开发者可以利用该API检测屏幕的当前方向，在屏幕方向发生改变时得到消息通知，并能通过API将屏幕方向锁定到指定状态。目前主流的浏览器都已经部分支持或决定支持该API，FireFox 26 和 IE 11 都支持了 "),n("code",[t._v("lockOrientation")]),t._v(" 和 "),n("code",[t._v("unlockOrientation")]),t._v(" API，Crosswalk 4（基于 Chromium 的 Web Runtime）也支持了该 API，Android 上的 Chrome 也正在实现该 API，估计2014年一季度之前能够完成。")]),t._v(" "),n("h4",{attrs:{id:"使用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),n("h5",{attrs:{id:"lockorientation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lockorientation","aria-hidden":"true"}},[t._v("#")]),t._v(" lockOrientation()")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" lockedAllowed "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("lockOrientation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("orientation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("strong",[t._v("参数介绍")])]),t._v(" "),n("ul",[n("li",[t._v("orientation：需要锁定屏幕的方向。这个参数是一个字符串或者是一个由字符串组成的数组。通过多个字符串可以让屏幕只在选定的方向上进行旋转。")])]),t._v(" "),n("p",[t._v("以下字符串即表示你也许会指定的一些可能的方向。")]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v("portrait-primary")])]),t._v(" "),n("p",[t._v("它表示屏幕处于主要的肖像模式时的方向。如果设备处于正常位置且该位置处于纵向位置，或设备的正常位置处于横向并且设备保持顺时针转动90°，则会在主肖像模式下考虑屏幕。正常的位置是依赖于设备的。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("portrait-secondary")])]),t._v(" "),n("p",[t._v("它表示屏幕处于辅助肖像模式时的方向。如果设备与正常位置保持180°，并且该位置处于纵向位置，或者设备的正常位置处于横向位置，并且持有的设备逆时针转动90°，则屏幕将处于辅助人像模式。正常的位置是依赖于设备的。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("landscape-primary")])]),t._v(" "),n("p",[t._v("它代表了屏幕处于主要风景模式时的方向。 如果设备保持在正常位置，并且该位置处于横向位置，或者设备的正常位置处于纵向位置，并且所保持的设备顺时针旋转90°，则会将其视为主要横向模式。正常的位置是依赖于设备的。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("landscape-secondary")])]),t._v(" "),n("p",[t._v("它代表了屏幕处于次要风景模式时的方向。如果设备与其正常位置保持180°并且该位置处于横向，或者如果设备的正常位置是纵向的，并且所保持的设备逆时针旋转90°，则将其视为次要横向模式。正常的位置是依赖于设备的。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("portrait")])]),t._v(" "),n("p",[t._v("它表示同时包含 "),n("code",[t._v("portrait-primary")]),t._v(" 和 "),n("code",[t._v("portrait-secondary")]),t._v(".")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("landscape")])]),t._v(" "),n("p",[t._v("它表示同时包含 "),n("code",[t._v("landscape-primary")]),t._v(" 和 "),n("code",[t._v("landscape-secondary")]),t._v(".")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("default")])]),t._v(" "),n("p",[t._v("它代表 "),n("code",[t._v("portrait-primary")]),t._v(" 和 "),n("code",[t._v("landscape-primary")]),t._v(" 主要取决于设备的自然方向。例如，如果面板分辨率为1280 * 800，则 "),n("code",[t._v("default")]),t._v(" 为横向，如果分辨率为800 * 1280，则 "),n("code",[t._v("default")]),t._v(" 为纵向。")])])]),t._v(" "),n("blockquote",[n("p",[t._v("⚠️注意：可同时设置多个锁定值。因此，如果锁定设置为只有一个方向，屏幕方向将永远不会改变，知道屏幕方向解锁。否则，只要方向在设备锁定的方向之中，屏幕方向就会从一个方向改变到另一个方向。")])]),t._v(" "),n("p",[n("strong",[t._v("返回值")])]),t._v(" "),n("p",[t._v("如果方向被授权锁定，则返回 true；如果方向锁定被拒绝，则返回 false。请注意，返回值并不表示屏幕方向确实被锁定：可能会有延迟。")]),t._v(" "),n("h5",{attrs:{id:"unlockorientation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#unlockorientation","aria-hidden":"true"}},[t._v("#")]),t._v(" unlockOrientation()")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" unlocked "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("unlockOrientation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("strong",[t._v("返回值")])]),t._v(" "),n("p",[t._v("如果方向授权解锁成功，则返回 true；如果方向锁定解除失败，则返回 false。")]),t._v(" "),n("h4",{attrs:{id:"示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 锁定屏幕为竖屏模式，不能设备如何旋转，屏幕都不会切换到横屏模式。")]),t._v("\nwindow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("lockOrientation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("“portrait"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("primary”"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("“portrait"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("secondary”"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 锁定屏幕为横屏模式，无论设备如何旋转，屏幕都不会切换到竖屏模式。")]),t._v("\nwindow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("lockOrientation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("“landscape"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("primary”"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("“landscape"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("secondary”"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 取消屏幕的锁屏，屏幕回到原始状态，")]),t._v("\nwindow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("unlockOrientation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h4",{attrs:{id:"兼容性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#兼容性","aria-hidden":"true"}},[t._v("#")]),t._v(" 兼容性")]),t._v(" "),n("p",[t._v("另外需要注意的是 Screen Orientation API 的文档规范还处于开发阶段，浏览器的实现可能带有前缀，例如 Firefox 带有 moz 前缀，IE 带有 ms 前缀。在使用前我们需要添加一些代码，保持更好的兼容性。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lockOrientation "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" screen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lockOrientation "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("screen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mozLockOrientation "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" screen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msLockOrientation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwindow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unlockOrientation "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" screen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unlockOrientation"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" screen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mozUnLockOrientation "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" screen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msUnLockOrientation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],!1,null,null,null);a.default=e.exports}}]);