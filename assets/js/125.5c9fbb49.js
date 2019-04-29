(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{438:function(t,e,i){"use strict";i.r(e);var r=i(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("p",[t._v("我们国内用户，一般是在家用路由器后面，要访问一个网站的话，会有三个步骤：")]),t._v(" "),t._m(2),t._v(" "),i("p",[t._v("流量劫持就是在这些环节当中，对数据进行偷窃、篡改，甚至转发流量进行攻击的这样一类行为。从危害上来说，互联网上最可怕的攻击也莫过于此了。那互联网发展这么多年了，为什么流量劫持还能够横行呢？流量劫持能够发生，无非是两个原因：")]),t._v(" "),t._m(3),t._v(" "),i("p",[t._v("下面我们会详细介绍这些环节当中的流量劫持是怎么发生的，以及如何防御。")]),t._v(" "),t._m(4),t._v(" "),i("p",[t._v("**域名劫持（DNS 劫持）**是针对传统 DNS 解析的常见劫持方式。用户在浏览器输入网址，即发出一个 HTTP 请求，首先需要进行域名解析，得到业务服务器的 IP 地址。使用传统 DNS 解析时，会通过当地网络运营商提供的 Local DNS 解析得到结果。域名劫持，即是在请求 Local DNS 解析域名时出现问题，目标域名被恶意地解析到其他 IP 地址，造成用户无法正常使用服务。"),i("router-link",{attrs:{to:"./../dns.html#域名解析过程"}},[t._v("🌐关于域名解析过程详解")])],1),t._v(" "),t._m(5),t._v(" "),i("p",[t._v("那么如何才能够污染 DNS 以达成流量劫持的目的呢？粗略来说，一共有三种途径：")]),t._v(" "),t._m(6),t._v(" "),i("p",[t._v("这三种途径当中，第一种和第三种的实施成本都比较高，但污染链路设备，在 Wi-Fi 普及而安全意识尚未普及的今天，是最容易得手的一种途径。")]),t._v(" "),t._m(7),t._v(" "),i("p",[t._v("目前针对 DNS 投毒，对抗中间人攻击的研究比较多。DNS 协议本身的安全性较差，而改造 DNS 协议又比较困难，因此现在主要的防御手段，集中在替换 UDP 协议上。")]),t._v(" "),t._m(8),t._v(" "),i("p",[t._v("目前，三种常见的替代方式比较流行：")]),t._v(" "),t._m(9),t._v(" "),i("p",[t._v("比较遗憾的是，由于浏览器没有暴露 DNS 相关的接口，这三种较为安全的 DNS 查询方式，都无法在前端当中得以使用。而 iOS 和 Android 开发者有机会使用其中的技术进行加强，但需要单独编写一些代码。")]),t._v(" "),t._m(10),t._v(" "),i("p",[t._v("HTTP 协议属于明文协议，中间链路上的任意设备，都可以篡改内容，导致流量劫持。")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),i("p",[t._v("CSP 原本是为了和 XSS 对抗而产生的一种技术方案，其原理是在 HTML 加载的时候，指定每种资源的 URL 白名单规则，防止 XSS 的运行和数据外送。但如果巧妙利用规则，也可以让所有的资源强制走 HTTPS ，这样就可以降低流量劫持的可能性。")]),t._v(" "),i("p",[t._v("具体的 CSP 规则比较复杂，大家可以在 "),i("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Flink.zhihu.com%2F%3Ftarget%3Dhttps%253A%2F%2Fcontent-security-policy.com%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSP 专属网站"),i("OutboundLink")],1),t._v("上自己查看。")]),t._v(" "),i("p",[t._v("CSP 用来防劫持的缺点也比较明显：")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),i("p",[t._v("理想上来说，这样的方案可以杜绝中间人对资源的篡改。不过和 CSP 一样，它也有自己的局限性：")]),t._v(" "),t._m(16),t._v(" "),i("hr"),t._v(" "),t._m(17),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://juejin.im/post/5c355a816fb9a049a42f3ac8",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 SRI 解决 CDN 劫持"),i("OutboundLink")],1)]),t._v(" "),i("li",[i("a",{attrs:{href:"https://juejin.im/entry/5bcec8e2518825102423e391",target:"_blank",rel:"noopener noreferrer"}},[t._v("浅谈流量劫持与防治"),i("OutboundLink")],1)]),t._v(" "),i("li",[i("a",{attrs:{href:"https://juejin.im/entry/5a559dd36fb9a01c9e45d896",target:"_blank",rel:"noopener noreferrer"}},[t._v("常见 Web 安全攻防总结"),i("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"流量劫持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#流量劫持","aria-hidden":"true"}},[this._v("#")]),this._v(" 流量劫持")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("流量劫持的方式主要分为两种，域名劫持（DNS 劫持）和数据劫持（HTTP 劫持）。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("首先访问 DNS 服务器，将域名转换为 IP 地址。")]),this._v(" "),e("li",[this._v("访问这个 IP 地址，这样用户就访问了目标网站。")]),this._v(" "),e("li",[this._v("如果是一个建设良好的网站，一般会把静态资源放在 CDN 上。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("网络链路本身不安全。网络链路牵扯到具体的网络协议，这些协议当中，有些从设计上就没有考虑安全问题，贻害至今；另有一些，在当时可能是安全的，但正所谓“没有绝对的安全”，随着计算力和攻击手段的发展，当时安全的协议如今可能已经变得不再安全。")]),this._v(" "),e("li",[this._v("干扰安全链路，迫使链路降级到不安全的方案上。这一点可以归结到前面，但单独拿出来说，是因为很多攻击手段会利用这一点去做，导致我们的安全方案根本没有使用起来。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"dns-劫持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns-劫持","aria-hidden":"true"}},[this._v("#")]),this._v(" DNS 劫持")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"攻击原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#攻击原理","aria-hidden":"true"}},[this._v("#")]),this._v(" 攻击原理")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ol",[i("li",[i("strong",[t._v("在用户设备上动手")]),t._v("。这个主要是通过一些恶意软件实现的，比如早期一些流氓软件会在用户本机篡改"),i("code",[t._v("hosts")]),t._v("文件，影响用户的搜索引擎工作。")]),t._v(" "),i("li",[i("strong",[t._v("污染中间链路设备")]),t._v("。由于 DNS 查询是基于 UDP 协议明文发送的，因此在任意中间设备上——比如路由器——进行中间人攻击，修改 UDP 包的内容，就可以影响 DNS 的结果了。")]),t._v(" "),i("li",[i("strong",[t._v("入侵 DNS 服务器")]),t._v("。这是一种成本比较高的方案，看起来似乎很困难，但 DNS 是一种相对古老的技术，其服务软件的实现可能已经年久失修，别有用心的攻击者可以寻找一些缺乏维护的 DNS 服务器，施行攻击。另外，有时 DNS 服务器上不止运行 DNS 软件，还会有一些其他的软件也在运行，比如同时也启动了 HTTP 服务等，这时攻击者也可以通过这些软件的漏洞来控制服务器，进而影响 DNS 的解析。由于 DNS 的缓存和上下传递关系，一旦有 DNS 服务器被影响，就会一次影响很多用户的访问，因此非常危险。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"防御策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#防御策略","aria-hidden":"true"}},[this._v("#")]),this._v(" 防御策略")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("TLS（Cloudflare）")]),this._v(" "),e("li",[this._v("HTTP（腾讯云、阿里云）")]),this._v(" "),e("li",[this._v("HTTPS（Cloudflare、Google）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("DNS over TLS。这种协议是在 TLS 协议之上传输 DNS 内容，有点类似 HTTPS 和 TLS 关系。")]),this._v(" "),e("li",[this._v("DNS over HTTP。用 HTTP 协议来传输 DNS ，也是可以的。国内厂商当中对这种方案的支持较多。最简单的实现是使用一个 固定的 IP 地址作为域名服务器，每次不发生 UDP ，而是向这台服务器发送 HTTP 请求来获取解析结果。但通常很难签发相应的证书给固定 IP，因此也有些厂商自己对 HTTP 报文进行加密，从而防止这些解析结果再被中间人篡改。")]),this._v(" "),e("li",[this._v("DNS over HTTPS。和第二点比较类似，区别是使用了 HTTPS 协议。根据我的观察，采用这种方案的 Google 和 Cloudflare 都使用的是域名而非固定 IP ，因此还是要先解析一次域名服务器自身的域名才可以进行真正的查询。这可能会导致再次被中间人扰乱，从而迫使用户降级到普通的 UDP 方式上。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"http-劫持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-劫持","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP 劫持")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"防御策略-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#防御策略-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 防御策略")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"content-security-policy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#content-security-policy","aria-hidden":"true"}},[this._v("#")]),this._v(" Content Security Policy")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("CSP 可以用在 HTTP 页面，这也是我们想在 HTTP 页面用它做防御的一个原因。但中间人攻击可以在链路上直接移除 CSP 的相关标记，导致 CSP 全部失效。")]),this._v(" "),e("li",[this._v("CSP 规则设置比较复杂。不然也不会有一个网站专门用来查询和生成规则了。设置不当很容易玩脱，会直接导致你的资源不可用。")]),this._v(" "),e("li",[this._v("影响动态创建脚本。CSP 存在的一部分意义就是阻止动态创建脚本这种行为，这是防御 XSS 的一种办法。但同时市面上很多技术方案也是基于这种方式做的，比如一些统计 SDK 之类的，甚至有些开发人员的开发模式即是如此。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"subresource-integrity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subresource-integrity","aria-hidden":"true"}},[this._v("#")]),this._v(" Subresource Integrity")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("SRI 是专门用来校验资源的一种方案，它读取资源标签中的 "),e("code",[this._v("integrity")]),this._v(" 属性，将其中的信息摘要值，和资源实际的信息摘要值进行对比，如果发现无法匹配，那么浏览器就会拒绝执行资源。对于 "),e("code",[this._v("<script>")]),this._v(" 标签来说，就是拒绝执行其中的代码，对于 CSS 来说则是不加载其中的样式。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("和 CSP 一样，当我们用在 HTTP 页面中时，中间人可以直接移除 SRI 的相关属性，这样就完全失效了。")]),this._v(" "),e("li",[this._v("动态创建的脚本时，除非单独在前端计算信息摘要，否则无法使用 SRI 。")]),this._v(" "),e("li",[this._v("如果中途因为某种原因修改了脚本内容而忘记了更新摘要值，那么会直接影响可用性。有些自作聪明的代理或资源托管服务器，会对 JavaScript 进行压缩或者混淆，而这个过程对开发者透明，这样也会导致可用性受到影响。")]),this._v(" "),e("li",[this._v("兼容性比较有限。 iOS Safari 的支持至少需要 iOS 11，在目前看来不是很理想。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("参考资料：")])])}],!1,null,null,null);e.default=s.exports}}]);