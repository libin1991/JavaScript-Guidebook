(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{204:function(t,e,_){t.exports=_.p+"assets/img/3820a643-db06-479a-92a0-f603cf0f8e41.2e013153.jpeg"},454:function(t,e,_){"use strict";_.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"https"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#https","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTPS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景","aria-hidden":"true"}},[this._v("#")]),this._v(" 背景")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("窃听：通信内容不经加密有可能被第三方捕获")]),this._v(" "),e("li",[this._v("伪造：第三方拦截通信内容，并伪装成发送方向接收方发送通信内容")]),this._v(" "),e("li",[this._v("否认：发送方将恶意数据发送给接受方并否认这些数据是它发送的")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ul",[_("li",[t._v("对称加密：使用相同密钥加密/解密，但是钥匙交付问题无法解决")]),t._v(" "),_("li",[t._v("非对称加密：公钥加密数据，私钥解密数据，但是加密/解密消耗时间较多")]),t._v(" "),_("li",[t._v("混合加密：公钥加密密钥，密钥加密数据，私钥解密密钥，密钥解密数据（非对称传送密钥，密钥传送数据）。解决非对成加密效率问题")]),t._v(" "),_("li",[t._v("中间人攻击：秘密替换公钥窃取数据，源于服务端无法确认客户端公钥是否合法")]),t._v(" "),_("li",[t._v("消息鉴别码："),_("code",[t._v("MAC")]),t._v(" 密钥和密文组成的字符串的哈希值。能够解决 "),_("code",[t._v("伪造")]),t._v(" 问题，但无法解决 "),_("code",[t._v("否认")]),t._v(" 问题")]),t._v(" "),_("li",[t._v("数字签名：服务端创建数字签名，而客户端只验证签名是否争取。解决 "),_("code",[t._v("否认")]),t._v(" 问题")]),t._v(" "),_("li",[t._v("数字证书：由权威机构背书创建证书，保证公钥不被篡改。解决 "),_("code",[t._v("中间人攻击")]),t._v(" 问题")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作用","aria-hidden":"true"}},[this._v("#")]),this._v(" 作用")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("建立一个信息安全通道，来保证数据传输的安全")]),this._v(" "),e("li",[this._v("确认网站的真实性，防止钓鱼网站")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"工作原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工作原理","aria-hidden":"true"}},[this._v("#")]),this._v(" 工作原理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("HTTPS 在传输数据之前需要客户端（浏览器）与服务端之间进行一次握手，在握手过程中将确立双方加密传输数据的密码信息。TLS/SSL 协议不仅仅是一套加密传输的协议，更是一件经过艺术家精心设计的艺术品，TLS/SSL 中使用了"),e("strong",[this._v("非对称加密")]),this._v("、"),e("strong",[this._v("对称加密")]),this._v("以及 "),e("strong",[this._v("HASH 算法")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:_(204),alt:"https-workflow"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("具体流程：")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ol",[_("li",[_("strong",[t._v("客户端发起 HTTPS 请求")]),t._v("：客户端将支持的一套加密规则发送给服务端")]),t._v(" "),_("li",[_("strong",[t._v("服务端配置并传送证书")]),t._v("：服务端选用一组"),_("strong",[t._v("加密算法")]),t._v("与 "),_("strong",[t._v("HASH 算法")]),t._v("，并将自己的身份信息以证书的形式发回给客户端。证书包含网站地址、过期时间、加密公钥，以及证书的颁发机构等信息")]),t._v(" "),_("li",[_("strong",[t._v("客户端解析证书")]),t._v("：客户端获得网站证书并进行相关验证\n"),_("ul",[_("li",[t._v("验证证书的合法性，颁发证书的机构是否合法，证书中包含的网站地址是否与正在访问的地址一致等，如果证书受信任，则客户端（浏览器）地址栏会显示一个小锁头，否则会给出证书不受信的提示")]),t._v(" "),_("li",[t._v("如果证书验证不通过，客户端（浏览器）会提示用户证书存在问题；如果证书受信任，客户端会生成一串随机数的密钥（消息鉴别码：即用于终端数据交互的对称密钥），并用证书中提供的公钥加密密钥")]),t._v(" "),_("li",[_("strong",[t._v("传送加密信息")]),t._v("：使用约定好的 HASH 算法计算握手信息，并使用生成的随机数（对称密钥）对消息进行加密，最后将之前生成的所有信息发送给网站")])])]),t._v(" "),_("li",[_("strong",[t._v("服务端解密信息")]),t._v("：服务端接收客户端发来的数据之后的处理程序\n"),_("ul",[_("li",[t._v("使用自己的私钥将信息解密取出密钥，使用密钥解密客户端发来的握手信息，并验证 HASH 是否与浏览器发来的一致")]),t._v(" "),_("li",[_("strong",[t._v("传输加密后的信息")]),t._v("：使用密钥加密一段握手消息，发送给客户端")])])]),t._v(" "),_("li",[t._v("浏览器解密并计算握手信息的 HASH，如果与服务端发来的 HASH 一致，此时握手过程结束，之后所有的通信数据将由之前客户端生成的随机密码并利用堆成加密算法进行加密")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("HTTPS 使用的加密与 HASH 算法")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("非对称加密算法：RSA、DSA/DSS")]),this._v(" "),e("li",[this._v("对称加密算法：AES、RC4、3DES")]),this._v(" "),e("li",[this._v("HASH 算法：MD5、SHA1、SHA256")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"通信协议对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通信协议对比","aria-hidden":"true"}},[this._v("#")]),this._v(" 通信协议对比")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("HTTP 和 HTTPS 协议区别")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("HTTP 是明文传输，HTTPS 通过 SSL\\TLS 进行了加密")]),this._v(" "),e("li",[this._v("HTTP 的端口号是 80，HTTPS 是 443")]),this._v(" "),e("li",[this._v("HTTPS 需要到 CA 申请证书，一般免费证书很少，需要交费")]),this._v(" "),e("li",[this._v("HTTPS 的连接很简单，是无状态的；HTTPS 协议是由 SSL+HTTP 协议构建的可进行加密传输、身份认证的网络协议，比 HTTP 协议安全。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("参考资料：")])])}],i=_(0),s=Object(i.a)({},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"content"},[t._m(0),t._v(" "),_("p",[t._v("HTTPS（全称：Hyper Text Transfer Protocol over Secure Socket Layer），是以安全为目标的 HTTP 通道，简单来说就是 HTTP 的安全版。即 HTTP 下加入 SSL 层，HTTPS 的安全基础是 SSL，因此加密的详细内容就需要 SSL。 现在它被广泛用于万维网上安全敏感的通讯，例如交易支付方面。")]),t._v(" "),t._m(1),t._v(" "),_("p",[t._v("使用 HTTP 协议通信存在的问题：")]),t._v(" "),t._m(2),t._v(" "),_("p",[t._v("对通信内容进行加密的解决方案：")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),_("p",[t._v("这里客户端与服务端互相发送加密的握手消息并验证，目的是为了保证双方都获得了一致的密码，并且可以正常的加密解密数据，为后续真正数据的传输做一次测试。")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),_("hr"),t._v(" "),t._m(16),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s/StqqafHePlBkWAPQZg3NrA",target:"_blank",rel:"noopener noreferrer"}},[t._v("一个故事讲完 HTTPS"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://juejin.im/entry/56ce90edefa631df62c21f8d",target:"_blank",rel:"noopener noreferrer"}},[t._v("图解 HTTPS 协议"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://juejin.im/post/5c441073e51d455226654d60",target:"_blank",rel:"noopener noreferrer"}},[t._v("完全图解 HTTPS"),_("OutboundLink")],1)])])])},r,!1,null,null,null);e.default=s.exports}}]);