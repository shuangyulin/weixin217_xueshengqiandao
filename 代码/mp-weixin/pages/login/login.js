(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"30d3":function(t,e,n){},"3d8c":function(t,e,n){},"57e1":function(t,e,n){"use strict";var o,a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}))},"66ab":function(t,e,n){"use strict";(function(t){n("02a3");o(n("66fd"));var e=o(n("6739"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},6739:function(t,e,n){"use strict";n.r(e);var o=n("57e1"),a=n("b7c2");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("bb9e"),n("9b19");var i,s=n("f0c5"),u=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"6e165073",null,!1,o["a"],i);e["default"]=u.exports},7932:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("4795")),a=r(n("384f"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,o,a,r,i){try{var s=t[r](i),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(o,a)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var r=t.apply(e,n);function s(t){i(r,o,a,s,u,"next",t)}function u(t){i(r,o,a,s,u,"throw",t)}s(void 0)}))}}var u={data:function(){return{username:"",password:"",codes:[{num:1,color:"#000",rotate:"10deg",size:"16px"},{num:2,color:"#000",rotate:"10deg",size:"16px"},{num:3,color:"#000",rotate:"10deg",size:"16px"},{num:4,color:"#000",rotate:"10deg",size:"16px"}],options:["请选择登录用户类型"],optionsValues:["","xuesheng","jiaoshi"],inputCode:"",validateCode:"",index:0,roleNum:0}},onLoad:function(){var t=["请选择登录用户类型"],e=a.default.list();this.menuList=e;for(var n=0;n<this.menuList.length;n++)"是"==this.menuList[n].hasFrontLogin&&(t.push(this.menuList[n].roleName),this.roleNum++);1==this.roleNum&&(this.index=1),this.options=t,this.randomString(4),this.styleChange()},methods:{randomString:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,e=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"],n=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],o=["28","30","32","34","36"];this.validateCode="";for(var a=0;a<t;a++){var r=Math.floor(Math.random()*e.length);this.codes[a].num=e[r],this.validateCode=this.validateCode+e[r];for(var i="#",s=0;s<6;s++){var u=Math.floor(Math.random()*n.length);i+=n[u]}this.codes[a].color=i;var c=Math.floor(30*Math.random()),d=Math.floor(2*Math.random());1==d&&(c="-"+c),this.codes[a].rotate="rotate("+c+"deg)";var l=Math.floor(Math.random()*o.length);this.codes[a].size=o[l]+"rpx"}},styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(e){t.setStorageSync("loginTable",e),this.$utils.jump("../register/register")},onForgetTap:function(){this.$utils.jump("../forget/forget")},onLoginTap:function(){var e=this;return s(o.default.mark((function n(){var a;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.optionsValues[e.index]){n.next=3;break}return e.$utils.msg("请选择登陆用户类型"),n.abrupt("return");case 3:if(e.inputCode==e.validateCode){n.next=6;break}return e.$utils.msg("请输入正确的验证码"),n.abrupt("return");case 6:return n.next=8,e.$api.login("".concat(e.optionsValues[e.index]),{username:e.username,password:e.password});case 8:return a=n.sent,t.removeStorageSync("useridTag"),t.setStorageSync("token",a.token),t.setStorageSync("nickname",e.username),t.setStorageSync("nowTable","".concat(e.optionsValues[e.index])),n.next=15,e.$api.session("".concat(e.optionsValues[e.index]));case 15:a=n.sent,t.setStorageSync("userid",a.data.id),a.data.vip&&t.setStorageSync("vip",a.data.vip),t.setStorageSync("role","".concat(e.options[e.index])),e.$utils.tab("../index/index");case 20:case"end":return n.stop()}}),n)})))()},optionsChange:function(t){this.index=t.target.value}}};e.default=u}).call(this,n("543d")["default"])},"9b19":function(t,e,n){"use strict";var o=n("30d3"),a=n.n(o);a.a},b7c2:function(t,e,n){"use strict";n.r(e);var o=n("7932"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=a.a},bb9e:function(t,e,n){"use strict";var o=n("3d8c"),a=n.n(o);a.a}},[["66ab","common/runtime","common/vendor"]]]);