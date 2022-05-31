(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/livelihood/civil-service"],{"01cd":function(t,a,n){"use strict";n.r(a);var i=n("2c27"),e=n("5b07");for(var c in e)"default"!==c&&function(t){n.d(a,t,(function(){return e[t]}))}(c);n("374f");var u,r=n("f0c5"),o=Object(r["a"])(e["default"],i["b"],i["c"],!1,null,"ecea730e",null,!1,i["a"],u);a["default"]=o.exports},"2c27":function(t,a,n){"use strict";var i;n.d(a,"b",(function(){return e})),n.d(a,"c",(function(){return c})),n.d(a,"a",(function(){return i}));var e=function(){var t=this,a=t.$createElement;t._self._c},c=[]},"374f":function(t,a,n){"use strict";var i=n("93d1"),e=n.n(i);e.a},"5b07":function(t,a,n){"use strict";n.r(a);var i=n("aec1"),e=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(a,t,(function(){return i[t]}))}(c);a["default"]=e.a},"93d1":function(t,a,n){},aec1:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"civil-service",props:["tabData"],data:function(){return{showData:[],titleData:["整体概况","福利院","敬老院","精神卫生中心","残疾人补贴"]}},mounted:function(){console.log("民政服务",this.tabData)},watch:{"tabData.data":function(t,a){this.initWin()}},methods:{initWin:function(){this.showData=[this.tabData.data[0].data.summary,this.tabData.data[1].data.welfare,this.tabData.data[2].data.gerocomium,this.tabData.data[3].data.spirit,this.tabData.data[4].data.subsidie]}}};a.default=i}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/livelihood/civil-service-create-component',
    {
        'pages/livelihood/civil-service-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("01cd"))
        })
    },
    [['pages/livelihood/civil-service-create-component']]
]);
