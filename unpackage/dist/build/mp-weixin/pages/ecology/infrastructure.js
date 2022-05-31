(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ecology/infrastructure"],{"00d7":function(t,a,n){"use strict";var e=n("bdfc"),r=n.n(e);r.a},"014d":function(t,a,n){"use strict";n.r(a);var e=n("844b"),r=n("d6eb");for(var u in r)"default"!==u&&function(t){n.d(a,t,(function(){return r[t]}))}(u);n("00d7");var i,c=n("f0c5"),f=Object(c["a"])(r["default"],e["b"],e["c"],!1,null,"8b85e290",null,!1,e["a"],i);a["default"]=f.exports},"2a18":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;n("a3cf");var e={name:"infrastructure",props:{tabData:{type:Object}},data:function(){return{tab:"1",infrastructureList:[]}},watch:{"tabData.data":function(t,a){this.initWin()}},methods:{initWin:function(){this.infrastructureList=this.tabData.data[0].data.base.detail,console.log("this.infrastructureList",this.tabData.data[0].data.base.detail)}}};a.default=e},"844b":function(t,a,n){"use strict";var e;n.d(a,"b",(function(){return r})),n.d(a,"c",(function(){return u})),n.d(a,"a",(function(){return e}));var r=function(){var t=this,a=t.$createElement;t._self._c},u=[]},bdfc:function(t,a,n){},d6eb:function(t,a,n){"use strict";n.r(a);var e=n("2a18"),r=n.n(e);for(var u in e)"default"!==u&&function(t){n.d(a,t,(function(){return e[t]}))}(u);a["default"]=r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/ecology/infrastructure-create-component',
    {
        'pages/ecology/infrastructure-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("014d"))
        })
    },
    [['pages/ecology/infrastructure-create-component']]
]);
