(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/society/old-security"],{"2a6d":function(t,a,r){"use strict";r.r(a);var e=r("9e54"),c=r("b3a2");for(var i in c)"default"!==i&&function(t){r.d(a,t,(function(){return c[t]}))}(i);r("df5a");var n,o=r("f0c5"),u=Object(o["a"])(c["default"],e["b"],e["c"],!1,null,"e6c4d28c",null,!1,e["a"],n);a["default"]=u.exports},"3b0a":function(t,a,r){},"4a2d":function(t,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=r("a3cf"),c=r("bad0"),i={name:"old-security",props:["tabData"],data:function(){return{oldSecurity:{},titleArray:["","",""]}},watch:{"tabData.data":function(t,a){this.initWin()}},methods:{initWin:function(){var t=this;this.oldSecurity=this.tabData.data[0].data.summary||[],this.oldSecurity.chart[1].legendShow=!0,this.oldSecurity.chart.forEach((function(a,r){var e=(0,c.contactTitle)(a.legends);t.titleArray[r]=e})),this.$nextTick((function(){t.oldSecurity.chart[0].gridTop=70,t.oldSecurity.chart[1].gridTop=70,t.oldSecurity.chart[1].legendTop="7%",t.oldSecurity.chart[2].gridTop=70,(0,e.ecologicalLineChart)("insuranceNumberLine",t.oldSecurity.chart[0]),(0,e.ecologicalLineChart)("insuranceTwoLine",t.oldSecurity.chart[1]),t.oldSecurity.chart[2].colorList=["rgb(249, 155, 55)"],t.oldSecurity.chart[2].colorStop=["rgba(249, 155, 55, 0.2)","rgba(249, 155, 55, 0)"],(0,e.ecologicalLineChart)("insurancePeopleLine",t.oldSecurity.chart[2])}))}}};a.default=i},"9e54":function(t,a,r){"use strict";var e;r.d(a,"b",(function(){return c})),r.d(a,"c",(function(){return i})),r.d(a,"a",(function(){return e}));var c=function(){var t=this,a=t.$createElement;t._self._c},i=[]},b3a2:function(t,a,r){"use strict";r.r(a);var e=r("4a2d"),c=r.n(e);for(var i in e)"default"!==i&&function(t){r.d(a,t,(function(){return e[t]}))}(i);a["default"]=c.a},df5a:function(t,a,r){"use strict";var e=r("3b0a"),c=r.n(e);c.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/society/old-security-create-component',
    {
        'pages/society/old-security-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2a6d"))
        })
    },
    [['pages/society/old-security-create-component']]
]);
