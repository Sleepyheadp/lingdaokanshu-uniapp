(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/livelihood/index"],{"3a49":function(e,t,n){"use strict";var o=n("d4cf"),a=n.n(o);a.a},"80e2":function(e,t,n){"use strict";n.r(t);var o=n("ca68"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},"9b18":function(e,t,n){"use strict";(function(e){n("3405");o(n("66fd"));var t=o(n("f91a"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},c230:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var a=function(){var e=this,t=e.$createElement;e._self._c},i=[]},ca68:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("b413"),a=c(n("c8ae")),i=n("bad0");function c(e){return e&&e.__esModule?e:{default:e}}var s=function(){n.e("pages/livelihood/civil-service").then(function(){return resolve(n("01cd"))}.bind(null,n)).catch(n.oe)},u=function(){Promise.all([n.e("common/vendor"),n.e("pages/livelihood/livelihood-practical")]).then(function(){return resolve(n("854b"))}.bind(null,n)).catch(n.oe)},l=function(){Promise.all([n.e("common/vendor"),n.e("pages/livelihood/employment")]).then(function(){return resolve(n("984a"))}.bind(null,n)).catch(n.oe)},r=function(){Promise.all([n.e("common/vendor"),n.e("pages/livelihood/education")]).then(function(){return resolve(n("f4e0"))}.bind(null,n)).catch(n.oe)},d=function(){Promise.all([n.e("common/vendor"),n.e("pages/livelihood/medical")]).then(function(){return resolve(n("c929"))}.bind(null,n)).catch(n.oe)},h=function(){Promise.all([n.e("common/vendor"),n.e("pages/livelihood/culture")]).then(function(){return resolve(n("b144"))}.bind(null,n)).catch(n.oe)},f=function(){Promise.all([n.e("common/vendor"),n.e("pages/livelihood/business")]).then(function(){return resolve(n("921e"))}.bind(null,n)).catch(n.oe)},b=function(){Promise.all([n.e("common/vendor"),n.e("pages/livelihood/city-education")]).then(function(){return resolve(n("b1ed"))}.bind(null,n)).catch(n.oe)},v={name:"index",components:{LivelihoodPractical:u,CivilService:s,Employment:l,Education:r,Medical:d,Culture:h,Business:f,CityEducation:b},data:function(){return{hasSecondTab:!1,tabListText:[{text:"民生实事",value:0},{text:"民政服务",value:1},{text:"劳动就业",value:2},{text:"城市教育",value:3},{text:"医疗",value:4}],tabListShow:[],tabRowShow:"",tabActiveIndex:"",subTabList:[],subTabActiveIndex:"",tabData:{},preschoolData:[],compulsoryData:[],highschoolData:[],loadDataFinish:!1,subIndexOffset:[]}},mounted:function(){this.initDOM(),this.changeShow(0),window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{initDOM:function(){document.getElementById("top").scrollIntoView(!0),this.tabRowShow=0,this.sliceObject(this.tabListText,0,3)},changeTab:function(e){var t=this;this.tabActiveIndex=e,this.subTabList=[];var n={name:""};n.name=5===e?"民生服务-文化":3===e?"民生服务-教育":this.tabListText[e].text,(0,o.getDataByTabName)(n,(function(n){n.data?(console.log("1111",n.data.data),t.tabData=n.data,t.judgeHasSubTab(t.tabData.data),t.setSubTabOffset(e)):(0,a.default)({type:"danger",message:"获取数据错误"})}),(function(e){(0,a.default)({type:"danger",message:"服务器错误"+e})}))},judgeHasSubTab:function(e){var t=this;e.length>1?(this.hasSecondTab=!0,e.forEach((function(e){t.subTabList.push(e.name)}))):this.hasSecondTab=!1},changeShow:function(e){document.getElementById("top").scrollIntoView(!0),this.tabListShow=[],this.subTabActiveIndex=0,e>3?(this.tabRowShow=1,this.sliceObject(this.tabListText,4,this.tabListText.length-1)):(this.tabRowShow=0,this.sliceObject(this.tabListText,0,3)),this.changeTab(e)},sliceObject:function(e,t,n){var o=this;e.forEach((function(e,a){a>=t&&a<=n&&o.tabListShow.push(e.text)}))},setSubTabOffset:function(e){var t=this;setTimeout((function(){!0===t.hasSecondTab&&(t.subIndexOffset[e]=[],t.subTabList.forEach((function(n,o){var a=0===o?"1stTab":1===o?"2ndTab":2===o?"3rdTab":o+1+"thTab";t.$nextTick((function(){window.onload=function(){var t=document.getElementById(a),n=t.offsetTop;this.subIndexOffset[e].push(n)}}))})))}),1e3)},changeSubTab:function(e){0===e?(this.subTabActiveIndex=e,document.getElementById("top").scrollIntoView(!0)):(0,i.windowScroll)(0===e?"1stTab":1===e?"2ndTab":2===e?"3rdTab":e+1+"thTab")},handleScroll:function(){if(!0===this.hasSecondTab)for(var e=window.pageYOffset,t=this.tabActiveIndex,n=this.subIndexOffset[t],o=n.length,a=0;a<o;a++)e>n[a]-(0,i.remToPx)(3)&&(this.subTabActiveIndex=a)}}};t.default=v},d4cf:function(e,t,n){},f91a:function(e,t,n){"use strict";n.r(t);var o=n("c230"),a=n("80e2");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("3a49");var c,s=n("f0c5"),u=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"3a20543b",null,!1,o["a"],c);t["default"]=u.exports}},[["9b18","common/runtime","common/vendor"]]]);