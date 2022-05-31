(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cultural/cultural"],{3130:function(t,i,a){"use strict";a.r(i);var n=a("9134"),e=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(i,t,(function(){return n[t]}))}(r);i["default"]=e.a},4687:function(t,i,a){"use strict";var n=a("f777"),e=a.n(n);e.a},9134:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a("a3cf"),e={name:"cultural",props:["tabData"],data:function(){return{investment:{},library:{},museum:{},art:{},headRadio:{},investmentActive:"",undertakingButtonList:["图书馆","博物馆","文化艺术","广播电视"],undertakingButtonSelect:null,undertakingContentActive:"",undertakingDataList:[],industry:{},history:[{time:["先秦"],detail:["秦始皇三十三年（公元前214年）统一岭南，设置南海、桂林、象郡三郡，今江门五邑地区属南海郡。至三国时期，江门五邑地区都属南海郡。"]},{time:["两汉","魏晋南北朝"],detail:["东汉建安二十四年（219），今恩平市地名思平县，唐至德二年（757年）改为恩平县。北宋开宝元年（968年）废恩平县并入阳江县。明成化十四年（1478年）割新会县德行都及阳江、新兴地复置恩平县。","三国吴黄武元年（222年），今新会市司前镇河村一带置平夷县，属南海郡。西晋太康元年（280年）改平夷为新夷。南朝宋永初元年（420年）分南海、新宁二郡立新会郡，隋开皇十年（590年）新会开始由郡名改为县名。"]},{time:["唐宋元明清"],detail:["北宋开宝五年（972年）义宁县并入新会县，属广州，是新会县境最大的时期。包括隋唐两代冈州全境，故新会又改名冈州。","明弘治十二年（1499年）今台山市地置县，原名新宁县，隶属广州府。","清顺治六年（1649年）割新会、恩平、新宁部分地合置开平县。","清雍正九年（1731年），析新会、开平部分地合置鹤山县。","清光绪二十八年（1902年）《中英续议道商行船条约》，规定将江门辟为通商口岸，并在北街设立江门海关。"]},{time:["民国"],detail:["民国3年（1914年）新宁县改为台山县。1953年，赤溪县并入台山县。","1925年8月，江门列为省辖市，设立包头市政厅。1931年2月，包头市撤消，改为新会管辖的一个镇。"]},{time:["建国后"],detail:["中华人民共和国建立后，江门五邑，先后隶属粤中专区、粤西行政区、佛山专区、江门专区、肇庆专区、佛山专区等。","1949年10月23日，江门和平解放。10月底，江门五邑全境解放。","1983年6月，江门升格为地级市，辖台山、开平、恩平、新会、鹤山五县及江门城区、郊区。同年8月增辖阳江、阳春两县（1988年2月，阳江、阳春两县分出）","从1992年4月开始，台山、新会、开平、恩平、鹤山等先后撤县建市（县级），均有广东省直辖，省政府委托江门代管。","1994年3月，江门对城区、郊区行政区域进行调整，以蓬江河为界，河南为城区，河北为郊区，同年8月，包头市城区更名为江海区，郊区更名为蓬江区。","2002年9月，撤消县级的新会市设立包头市新会区。"]}],greatList:[{img:"img-great-man1",detail:["明代理学家大儒","陈白沙"]},{img:"img-great-man2",detail:["维新先驱","梁启超"]},{img:"img-great-man3",detail:["中国飞行第一人","冯如"]},{img:"img-great-man4",detail:["中国近现代油画与民主革命先驱","李铁夫"]}],academicianList:[{img:"img-academician-man1",detail:["梁思成院士"]},{img:"img-academician-man2",detail:["梁思礼院士"]},{img:"img-academician-man3",detail:["林为干院士"]},{img:"img-academician-man4",detail:["陈焕镛院士"]}],starList:[{img:"img-star-man1",detail:["周润发"]},{img:"img-star-man2",detail:["刘德华"]},{img:"img-star-man3",detail:["红线女"]},{img:"img-star-man4",detail:["易建联"]}],regionButtonList:["方言","民俗","宗教","曲艺","学派"],regionButtonSelect:0,regionDataList:[{img:"iconDialect",detail:"江门本地方言主要有粤方言和客家话方言两种。 江门方言即四邑话，也称五邑话，是江门侨乡文化独具特色的一部分。在江门，大部分地方流行五邑话，还有一些地方流行广州话、客家话。"},{img:"iconCustom",detail:"江门以侨乡风情闻名，五邑地区华人华侨和港澳台同胞众多，遍布世界。共同的历史，同出一宗的地缘人缘，加上海外对五邑的影响，使江门五邑地区展现出丰富的民俗风情，有独特的节日、婚嫁、丧葬、饮食、娱乐等习俗，主要有龙舟赛、舞狮舞龙、广东曲艺、民间舞蹈、民歌演唱等。如抬阁、新会鱼灯、大鳌咸水歌、鹤山市狮艺、恩平木鱼等。"},{img:"iconReligion",detail:"包头市有佛教、道教、天主教、基督教四大宗教。全市教徒约1.2万人，共登记开放宗教活动62场所处，共有教徒聚居村8条，共有宗教团体21个。"},{img:"iconQuyi",detail:"“中国曲艺之乡”。由清至民国初年，“没有四邑人就不成戏班”的定律为粤剧戏行内所公认，五邑地区粤剧人才辈出，享誉粤港澳，如粤剧复兴鼻祖邝新华，粤剧四大名旦、四大名丑，“红派艺术”开创者红线女，“芳腔”之芳艳芬等。"},{img:"iconLearning",detail:"江门学派，又称岭南学派，是由明代著名哲学家陈白沙创立的心学思想派别，提倡以“虚明静一”之心为主，确立心的主体性，以避免程朱理学“徇外”和陆九渊心学“自欺”弊端。在广东开‘岭学’之先河，树‘粤风’之模范。江门人深受陈白沙心学思想的影响：“自得”、“自然”、“主静”"}]}},mounted:function(){console.log("文化",this.tabData)},watch:{"tabData.data":function(t,i){this.initWin()}},methods:{initWin:function(){var t=this;this.investment=this.tabData.data[0].data.investment,this.art=this.tabData.data[0].data.art,this.headRadio=this.tabData.data[0].data.headradio,this.library=this.tabData.data[0].data.library,this.museum=this.tabData.data[0].data.museum,this.undertakingDataList=[this.library,this.museum,this.art,this.headRadio],this.undertakingContentActive=0,this.industry=this.tabData.data[1].data.industry,this.industry.chart[0].legends=["增速","2018","2019"],this.industry.chart[0].legendRight="30%",this.industry.chart[0].lineColor="#39c77f";var i=this.industry.chart[0].series[2];this.industry.chart[0].series[2]=this.industry.chart[0].series[1],this.industry.chart[0].series[1]=this.industry.chart[0].series[0],this.industry.chart[0].series[0]=i,this.industry.chart[0].rotate=30,this.industry.chart[0].gridBottom="26%",this.industry.chart[0].xaxis.forEach((function(i,a){i.indexOf("增加值")>0&&(t.industry.chart[0].xaxis[a]=i.slice(0,i.indexOf("增加值")))})),this.industry.chart[1].series[0].data.forEach((function(i,a){i.name.indexOf("增加值")>0&&(t.industry.chart[1].series[0].data[a].name=i.name.slice(0,i.name.indexOf("增加值")))})),setTimeout((function(){var i=document.getElementById("historyLine");document.body.clientWidth<=400&&i.setAttribute("class","line400"),(0,n.pieChartY)("1stTabPie",t.investment.chart[0].series[0].data),t.investmentChange(0),t.undertakingChange(0,0),(0,n.situationLineAndBarChart)("2ndTabLine",t.industry.chart[0]),(0,n.pieChartY)("2ndTabPie",t.industry.chart[1].series[0].data),t.regionChange(0)}),500)},investmentChange:function(t){var i=this;this.investmentActive=t,this.$nextTick((function(){(0,n.drawJmHotMap)("1stTabMap",i.investment.chart[t+1][0])}))},undertakingChange:function(t,i){0===i?(this.undertakingButtonSelect=t,this.undertakingContentActive=0):this.undertakingContentActive=t,(0,n.drawJmHotMap)("1stTabMapBottom",this.undertakingDataList[this.undertakingButtonSelect].chart[this.undertakingContentActive][0])},regionChange:function(t){this.regionButtonSelect=t}}};i.default=e},b9de:function(t,i,a){"use strict";a.r(i);var n=a("bba8"),e=a("3130");for(var r in e)"default"!==r&&function(t){a.d(i,t,(function(){return e[t]}))}(r);a("4687");var s,d=a("f0c5"),u=Object(d["a"])(e["default"],n["b"],n["c"],!1,null,"1813b9ae",null,!1,n["a"],s);i["default"]=u.exports},bba8:function(t,i,a){"use strict";var n;a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return r})),a.d(i,"a",(function(){return n}));var e=function(){var t=this,i=t.$createElement;t._self._c},r=[]},f777:function(t,i,a){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/cultural/cultural-create-component',
    {
        'pages/cultural/cultural-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b9de"))
        })
    },
    [['pages/cultural/cultural-create-component']]
]);