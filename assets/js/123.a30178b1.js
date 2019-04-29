(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{435:function(e,r,t){"use strict";t.r(r);var i=t(0),_=Object(i.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"content"},[e._m(0),e._v(" "),t("p",[e._v("CSRF（Cross-site request forgery）跨站点请求伪造是指恶意用户将某些需要他人权限的接口埋藏在自己的脚本中，将脚本利用 XSS 相同的注入方式或诱导用户点击执行等方式令拥有权限者执行，从而达到自己的目的。")]),e._v(" "),e._m(1),e._v(" "),t("p",[e._v("CSRF 漏洞即利用网站权限校验漏洞在用户不知觉情况下发送请求，达到「伪装」用户的目的。")]),e._v(" "),t("p",[e._v("攻击者利用 CSRF 实现的攻击主要方式：")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),t("p",[e._v("CSRF 通常是跨域的，因为外域更容易被攻击者掌握。但是如果本域下有容易被利用的功能，比如可以发图和")]),e._v(" "),t("p",[e._v("CSRF 攻击时黑客借助受害者的 Cookie 骗取服务器的信任，但是黑客并不能拿到 Cookie，也看不到 Cookie 的内容。另外，对于服务器返回的结果，由于浏览器同源策略的限制，黑客也无法进行解析。因此，黑客无法从返回的结果中得到任何东西，他所能做的就是给服务器发送请求，以执行请求中所描述的命令，在服务器端直接改变数据的值，而非窃取服务器中的数据。所以，我们要保护的对象是那些可以直接产生数据改变的服务，而对于读取数据的服务，则不需要进行 CSRF 的保护。比如银行系统中转账的请求会直接改变账户的金额，会遭到 CSRF 攻击，需要保护。而查询金额是对金额的读取操作，不会改变数据，CSRF 攻击无法解析服务器返回的结果，无需保护。")]),e._v(" "),e._m(5),e._v(" "),t("p",[e._v("CSRF 通常从第三方网站发起，被攻击网站无法防止攻击发生，只能通过增强自己网站针对 CSRF 的防护能力来提升安全性。")]),e._v(" "),t("p",[e._v("针对 CSRF 的特点制定防护策略：")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),t("p",[e._v("既然 CSRF 大多来自第三方网站，那么我们就直接禁止外域（或者不受信任的域名）对我们发起请求。")]),e._v(" "),t("p",[e._v("在 HTTP 协议中，每个一部请求都会携带两个 Header，用于标记来源域名：")]),e._v(" "),e._m(8),e._v(" "),t("p",[e._v("这两个 Header 在浏览器发起请求时，大多数情况会自动带上，并且不能由前端自定义内容。服务器可以通过解析这两个 Header 中的域名，确定请求的来源域。")]),e._v(" "),e._m(9),e._v(" "),t("p",[e._v("使用 Origin Header 确定来源域名。")]),e._v(" "),t("p",[e._v("在部分与 CSRF 有关的请求中，请求的 Header 中会携带 Origin 字段。字段内包含请求的域名（不包含 pth 及 query）。")]),e._v(" "),t("p",[e._v("如果 Origin 存在，那么直接使用 Origin 中的字段确认来源域名就可以。")]),e._v(" "),t("p",[e._v("但是 Origin 在以下两种情况下并不存在：")]),e._v(" "),t("ul",[t("li",[e._v("IE11 同源策略：IE11 不会在跨站 CORS 请求上添加 Origin 标头，Referrer 头仍然是唯一的标识。最根本原因是因为 IE11 对同源的定义和其他浏览器不同，有两个主要的区别，可以参考 "),t("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FSecurity%2FSame-origin_policy%23IE_Exceptions",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN Same-origin_policy#IE_Exceptions"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("302 重定向：在 302 重定向之后 Origin 不包含在重定向的请求中，因为 Origin 可能会被认为是其他来源的敏感信息。对于 302 重定向的情况来说都是定向在新的服务器上的 URL，因此浏览器不想将 Origin 泄漏到新的服务器上。")])]),e._v(" "),e._m(10),e._v(" "),t("p",[e._v("根据 HTTP 协议，在 HTTP 头中有一个字段叫  Referrer，记录了该 HTTP 请求的来源地址。对于 Ajax 请求，图片和脚本文件等资源请求，Referrer 为发起请求的页面地址。对于页面跳转，Referrer 为打开页面历史记录的前一页面地址。因此我们使用 Referrer 中链接的 Origin 部分可以得到请求的来源域名。")]),e._v(" "),t("p",[e._v("这种方法并非万无一失，Referrer 的值是由浏览器提供的，虽然 HTTP 协议上有明确的要求，但是每个浏览器对于 Referrer 的具体实现可能有差别，并不能保证浏览器自身没有安全漏洞。使用验证 Referrer 值的方法，就是把安全性都依赖于第三方（即浏览器）来保障，从理论上来讲，这样并不是很安全。在部分情况下，攻击者可以隐藏，甚至修改自己请求的 Referrer。")]),e._v(" "),t("p",[e._v("新版 Referrer Policy 规定了五种 Referrer 策略：No Referrer、No Referrer When Downgrade、Origin Only、Origin When Cross-orgin 和 Unsafe URL。")]),e._v(" "),e._m(11),e._v(" "),t("p",[e._v("当 Origin 和 Referrer 头文件不存在时该怎么办？如果 Origin 和 Referrer 都不存在，建议直接进行阻止，特别是如果您没有使用随机 CSRF Token 作为第二次检查。")]),e._v(" "),e._m(12),e._v(" "),t("p",[e._v("前面讲到 CSRF 的另一个特征是，攻击者无法直接窃取到用户的信息（Cookie，Header，网站内容等），仅仅是冒用 Cookie 中的信息。")]),e._v(" "),t("p",[e._v("而 CSRF 攻击之所以能够成功，是因为服务器误把攻击者发送的请求当成了用户自己的请求。那么我们可以要求所有的用户请求都携带一个 CSRF 攻击者无法获取到的 Token。服务器通过校验请求是否携带正确的 Token，来把正常的请求和攻击的请求区分开，也可以防范 CSRF 的攻击。")]),e._v(" "),e._m(13),e._v(" "),t("p",[e._v("为每一个提交增加一个随机串参数，该参数服务端通过页面下发，每次请求的时候补充到提交参数中，服务端通过校验该参数是否一致来判断是否是用户请求。由于 CSRF 攻击中攻击者是无从事先得知该随机字符串的值，所以服务端就可以通过校验该值拒绝请求。")]),e._v(" "),e._m(14),e._v(" "),t("p",[e._v("实际上除了 session 登陆之外，现在越来越流行 JWT token 登录校验。该方式是在前端记录登陆 token，每次请求的时候通过在 Header 中添加认证头的方式来实现登录校验过程。由于 CSRF 攻击中攻击者无法知道该 token 值，通过这种方式也是可以防止 CSRF 攻击的。")]),e._v(" "),e._m(15),e._v(" "),t("p",[e._v("CSRF 攻击过程中，用户在不知情的情况下构造了网络请求，添加验证码能强制用户必须与应用进行交互")]),e._v(" "),e._m(16),e._v(" "),t("hr"),e._v(" "),e._m(17),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://juejin.im/post/5bc009996fb9a05d0a055192",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端安全系列：如何防止 CSRF 攻击?"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/entry/58802eb58fd9c50067dd746b",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSRF 攻击的应对之道"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/entry/5b1e4575f265da6e2c19fd57",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSRF 漏洞详细说明"),t("OutboundLink")],1)])])])},[function(){var e=this.$createElement,r=this._self._c||e;return r("h1",{attrs:{id:"csrf-攻击"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#csrf-攻击","aria-hidden":"true"}},[this._v("#")]),this._v(" CSRF 攻击")])},function(){var e=this.$createElement,r=this._self._c||e;return r("h2",{attrs:{id:"原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#原理","aria-hidden":"true"}},[this._v("#")]),this._v(" 原理")])},function(){var e=this.$createElement,r=this._self._c||e;return r("ul",[r("li",[this._v("攻击者能够欺骗受害用户完成该受害者所允许的任一状态改变的操作，比如：更新账号细节、完成购物、注销甚至登陆等操作")]),this._v(" "),r("li",[this._v("获取用户的隐私数据")]),this._v(" "),r("li",[this._v("配合其他漏洞攻击")]),this._v(" "),r("li",[this._v("CSRF 蠕虫")])])},function(){var e=this.$createElement,r=this._self._c||e;return r("h2",{attrs:{id:"特点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特点","aria-hidden":"true"}},[this._v("#")]),this._v(" 特点")])},function(){var e=this.$createElement,r=this._self._c||e;return r("ul",[r("li",[this._v("攻击一般发起在第三方网站，而不是被攻击的网站。被攻击的网站无法防止攻击发生")]),this._v(" "),r("li",[this._v("攻击利用受害者被攻击网站的登录凭证，冒充受害者提交操作；而不是直接窃取数据")]),this._v(" "),r("li",[this._v("整个过程攻击者并不能获取到受害者的登录凭证，仅仅是「冒用」")])])},function(){var e=this.$createElement,r=this._self._c||e;return r("h2",{attrs:{id:"防御策略"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#防御策略","aria-hidden":"true"}},[this._v("#")]),this._v(" 防御策略")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ul",[t("li",[e._v("阻止不明外域访问\n"),t("ul",[t("li",[e._v("同源检测")]),e._v(" "),t("li",[e._v("Samesite Cookie")])])]),e._v(" "),t("li",[e._v("提交时要求附加本域才能获取的信息\n"),t("ul",[t("li",[e._v("Token 验证")]),e._v(" "),t("li",[e._v("双重 Cookie 验证")])])])])},function(){var e=this.$createElement,r=this._self._c||e;return r("h3",{attrs:{id:"同源检测"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#同源检测","aria-hidden":"true"}},[this._v("#")]),this._v(" 同源检测")])},function(){var e=this.$createElement,r=this._self._c||e;return r("ul",[r("li",[this._v("Origin Header")]),this._v(" "),r("li",[this._v("Referrer Header")])])},function(){var e=this.$createElement,r=this._self._c||e;return r("h4",{attrs:{id:"origin-header"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#origin-header","aria-hidden":"true"}},[this._v("#")]),this._v(" Origin Header")])},function(){var e=this.$createElement,r=this._self._c||e;return r("h4",{attrs:{id:"referrer-header"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#referrer-header","aria-hidden":"true"}},[this._v("#")]),this._v(" Referrer Header")])},function(){var e=this.$createElement,r=this._self._c||e;return r("h5",{attrs:{id:"无法确认来源域名情况"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#无法确认来源域名情况","aria-hidden":"true"}},[this._v("#")]),this._v(" 无法确认来源域名情况")])},function(){var e=this.$createElement,r=this._self._c||e;return r("h4",{attrs:{id:"token-验证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#token-验证","aria-hidden":"true"}},[this._v("#")]),this._v(" Token 验证")])},function(){var e=this.$createElement,r=this._self._c||e;return r("p",[r("strong",[this._v("随机字符串")])])},function(){var e=this.$createElement,r=this._self._c||e;return r("p",[r("strong",[this._v("JWT")])])},function(){var e=this.$createElement,r=this._self._c||e;return r("h3",{attrs:{id:"验证码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#验证码","aria-hidden":"true"}},[this._v("#")]),this._v(" 验证码")])},function(){var e=this.$createElement,r=this._self._c||e;return r("ul",[r("li",[this._v("优点：简洁有效")]),this._v(" "),r("li",[this._v("缺点：网络不能给所有的操作都加上验证码")])])},function(){var e=this.$createElement,r=this._self._c||e;return r("p",[r("strong",[this._v("参考资料")])])}],!1,null,null,null);r.default=_.exports}}]);