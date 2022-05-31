(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/industrial/agricultureG"],{"155e":function(a,e,n){"use strict";n.r(e);var t=n("21c8"),i=n("c0e9");for(var u in i)"default"!==u&&function(a){n.d(e,a,(function(){return i[a]}))}(u);n("a47a"),n("a1cc");var l,r=n("f0c5"),c=Object(r["a"])(i["default"],t["b"],t["c"],!1,null,"2703789e",null,!1,t["a"],l);e["default"]=c.exports},"21c8":function(a,e,n){"use strict";var t;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return t}));var i=function(){var a=this,e=a.$createElement;a._self._c},u=[]},"3ab8":function(a,e,n){},"3e62":function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n("a3cf"),i={name:"agriculture",components:{},props:{tabDataAgriculture:{type:Object}},data:function(){return{value1:0,option1:[{text:"江门市",value:0},{text:"蓬江区",value:1},{text:"江海区",value:2},{text:"新会区",value:3},{text:"台山市",value:4},{text:"开平市",value:5},{text:"鹤山市",value:6},{text:"恩平市",value:7}],totalValueTabIndex:0,cropYieldTabIndex:0,areaOFCropTabIndex:0,chengchuhangye:[{name:"行业四",unit:"个",value:21},{name:"行业五",unit:"%",value:9},{name:"行业一",unit:"%",value:49},{name:"行业二",unit:"%",value:22},{name:"行业三",unit:"%",value:34}],xingzhengchufa:{legends:["行政处罚"],series:[{name:"行政处罚",type:"line",stack:null,data:["46","11","82","56","44","86"]},{name:"",type:"line",stack:null,data:null}],type:"line",year:null,yaxis:["家"],xaxis:["2021-09","2021-10","2021-11","2021-12","2022-01","2022-02"]},zhutishuliang:{legends:["新增主体数量（年）","新增主体数量增速（年）"],series:[{name:"新增主体数量（年）",type:"line",stack:null,data:["0","0","0","0","0","5196","5192","1111","0","0"]},{name:"新增主体数量增速（年）",type:"line",stack:null,data:["0","0","0","0","0","0","0","-79","0","0"]}],type:"line",year:null,yaxis:["个","%"],xaxis:["2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"]},banjianliang:{legends:["办件办结量","办件受理量"],series:[{name:"办件办结量",type:"line",stack:null,data:["1089","1100","1111","1122","1133","1144","1155","1166","1177","1188","1199","1210"]},{name:"办件受理量",type:"line",stack:null,data:["17465","16552","18536","13927","12357","14641","23728","24109","9741","7917","19793","10341"]}],type:"line",year:null,yaxis:["天","天"],xaxis:["2021-09","2021-10","2021-11","2021-12","2021-01","2021-02"]},pingjunchengnuo:{legends:["平均承诺时间","平均办结时间"],series:[{name:"平均承诺时间",type:"line",stack:null,data:[5,6,8,7,5,4]},{name:"平均办结时间",type:"line",stack:null,data:[10,8,5,4,4,5]}],type:"line",year:null,yaxis:["天","天"],xaxis:["2021-09","2021-10","2021-11","2021-12","2021-01","2021-02"]},zhuanli:[{name:"外观专利",unit:"个",value:841},{name:"发明专利",unit:"%",value:664},{name:"实用新型专利",unit:"%",value:1026}],manyidu:[{name:"满意数量占比",unit:"%",value:4},{name:"很满意数量占比",unit:"%",value:94},{name:"基本满意数量占比",unit:"%",value:1},{name:"不满意数量占比",unit:"%",value:.9},{name:"很不满意数量占比",unit:"%",value:.1}],danweileixing:[{name:"企业",unit:"家",value:1e3},{name:"个体工商户",unit:"家",value:2e3},{name:"农专合作社",unit:"家",value:3e3}],chanyeleixing:[{name:"第一产业",unit:"家",value:2},{name:"第二产业",unit:"家",value:3},{name:"第三产业",unit:"家",value:10}],sanshitian:{legends:["",""],series:[{name:"近30天",type:"line",stack:null,data:[]},{name:"近30天",type:"line",stack:null,data:["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","697","0","729","0","1724","0","1898","0","1857","0","1807","0","1783","0","0","0","0","0","0"]}],type:"line",year:null,yaxis:["件"],xaxis:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"]}}},mounted:function(){this.initWin(),this.switchCropYieldInfTab(0)},watch:{"tabDataAgriculture.data":function(a,e){this.initWin()}},methods:{initWin:function(){var a=this;this.$nextTick((function(){(0,t.agricultureLineAndBarChart)("cropYieldValueBar4",a.zhutishuliang),(0,t.agricultureLineAndBarChart)("cropYieldValueBar5",a.xingzhengchufa),a.tabDataAgriculture.data[1].data.quality.chart[1][0].series[0].data.titlePadding=30;var e=a.zhuanli,n=a.danweileixing,i=a.chanyeleixing,u=a.chengchuhangye;e.gridBottom=40,e.chartTop="52%",(0,t.industrialpieChart)("cropYieldValuePie",e),(0,t.industrialpieChart)("cropYieldValuePie2",n),(0,t.industrialpieChart)("cropYieldValuePie3",i),(0,t.industrialpieChart)("cropYieldValuePie4",u);a.tabDataAgriculture.data[2].data.area.chart.series[0].data}))},switchTotalValueInfTab:function(a){var e=this;this.totalValueTabIndex=a,setTimeout((function(){var n=e.tabDataAgriculture.data[0].data.gdp.chart[a][0];(0,t.drawJmHotMap)("totalValueMap",n)}),200)},switchCropYieldInfTab:function(a){var e=this;this.cropYieldTabIndex=a,setTimeout((function(){e.banjianliang.legendRight="15%",e.banjianliang.gridTop=115;var a=e.manyidu;a.gridBottom=40,a.chartTop="52%",(0,t.industrialpieChart)("cropYieldValuePie",a)}),200)}}};e.default=i},"4e16":function(a,e,n){},a1cc:function(a,e,n){"use strict";var t=n("4e16"),i=n.n(t);i.a},a47a:function(a,e,n){"use strict";var t=n("3ab8"),i=n.n(t);i.a},c0e9:function(a,e,n){"use strict";n.r(e);var t=n("3e62"),i=n.n(t);for(var u in t)"default"!==u&&function(a){n.d(e,a,(function(){return t[a]}))}(u);e["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/industrial/agricultureG-create-component',
    {
        'pages/industrial/agricultureG-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("155e"))
        })
    },
    [['pages/industrial/agricultureG-create-component']]
]);
