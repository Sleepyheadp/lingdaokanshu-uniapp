(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/society/index"],{1132:function(t,e,n){"use strict";n.r(e);var i=n("fee8"),o=n("b041");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("d56f");var c,s=n("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"97bd4df6",null,!1,i["a"],c);e["default"]=u.exports},"2de7":function(t,e,n){"use strict";(function(t){n("3405");i(n("66fd"));var e=i(n("1132"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"933b":function(t,e,n){},b041:function(t,e,n){"use strict";n.r(e);var i=n("e371"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},d56f:function(t,e,n){"use strict";var i=n("933b"),o=n.n(i);o.a},e371:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("b413"),o=c(n("c8ae")),a=n("bad0");function c(t){return t&&t.__esModule?t:{default:t}}var s=function(){n.e("pages/society/overall-situation").then(function(){return resolve(n("9c6a"))}.bind(null,n)).catch(n.oe)},u=function(){Promise.all([n.e("common/vendor"),n.e("pages/society/old-security")]).then(function(){return resolve(n("2a6d"))}.bind(null,n)).catch(n.oe)},r=function(){Promise.all([n.e("common/vendor"),n.e("pages/society/medical-security")]).then(function(){return resolve(n("13ea"))}.bind(null,n)).catch(n.oe)},l=function(){Promise.all([n.e("common/vendor"),n.e("pages/society/unemployment-security")]).then(function(){return resolve(n("8a9c"))}.bind(null,n)).catch(n.oe)},d=function(){Promise.all([n.e("common/vendor"),n.e("pages/society/industrial-security")]).then(function(){return resolve(n("dc74"))}.bind(null,n)).catch(n.oe)},f=function(){Promise.all([n.e("common/vendor"),n.e("pages/society/fertility-security")]).then(function(){return resolve(n("1264"))}.bind(null,n)).catch(n.oe)},h=function(){Promise.all([n.e("common/vendor"),n.e("pages/society/housing-security")]).then(function(){return resolve(n("c3db"))}.bind(null,n)).catch(n.oe)},b={name:"index",components:{HousingSecurity:h,FertilitySecurity:f,IndustrialSecurity:d,UnemploymentSecurity:l,MedicalSecurity:r,OldSecurity:u,OverallSituation:s},data:function(){return{hasSecondTab:!1,tabListText:[{text:"整体概况",value:0},{text:"养老保障",value:1},{text:"医疗保障",value:2},{text:"失业保障",value:3},{text:"工伤保障",value:4},{text:"生育保障",value:5},{text:"住房保障",value:6}],tabListShow:[],tabRowShow:"",tabActiveIndex:"",subTabActiveIndex:"",subTabList:[],tabData:{}}},mounted:function(){this.initDOM(),this.changeShow(0),window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{initDOM:function(){document.getElementById("top").scrollIntoView(!0),this.tabRowShow=0,this.sliceObject(this.tabListText,0,3)},sliceObject:function(t,e,n){var i=this;t.forEach((function(t,o){o>=e&&o<=n&&i.tabListShow.push(t.text)}))},changeShow:function(t){document.getElementById("top").scrollIntoView(!0),this.tabListShow=[],this.subTabActiveIndex=0,t>3?(this.tabRowShow=1,this.sliceObject(this.tabListText,4,this.tabListText.length-1)):(this.tabRowShow=0,this.sliceObject(this.tabListText,0,3)),this.changeTab(t)},changeTab:function(t){var e=this;this.tabActiveIndex=t,this.subTabList=[];var n={name:this.tabListText[t].text};(0,i.getDataByTabName)(n,(function(t){t.data?(console.log(t.data),e.tabData=t.data):(0,o.default)({type:"danger",message:"获取数据错误"})}),(function(t){(0,o.default)({type:"danger",message:"服务器错误"+t})}))},handleScroll:function(){if(!0===this.hasSecondTab)for(var t=window.pageYOffset,e=this.tabActiveIndex,n=this.subIndexOffset[e],i=n.length,o=0;o<i;o++)t>n[o]-(0,a.remToPx)(230/75)&&(this.subTabActiveIndex=o)}}};e.default=b},fee8:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c},a=[]}},[["2de7","common/runtime","common/vendor"]]]);