import echarts from 'echarts'
// import Bus from '../../libs/bus';

/*
lineColors:Array类型，表示 线或者叠加柱图 的颜色，按数组顺序排列
barColors:Array类型，表示柱状图的颜色，按数组顺序排列，默认会渐变
barBorderColors:Array类型，表示柱状图边框的颜色，按数组顺序排列，默认会渐变
gridTop、gridLeft、gridRight、gridBottom：string或者number类型，分别表示图标上左右下边距
legendShow：boolean类型 表示是否显示图例
legendTop、legendRight
legendIcon：图例的图标类型
rotate：X轴的偏转角度
xAxisFontSize：X轴字体大小
xAxisSplit：number x轴每隔 n 个字符串换行
xaxisLineShow：是否显示x轴的线
barWidth：柱状图的宽度
splitNumber: 坐标轴的分割段数
*/


// 条形图+折线图
export const lineAndBarChart = (id, data, options = {


}) => {
  let barColorIdx = 0,
    lineColorIdx = 0,
    markLineColorIdx = 0,
    areaLineColorIdx = 0
// console.log(data.series)
 // let lineColors = options.lineColors || ['#ff789b', '#f9c756', '#c088ff', '#6be7da', '#67ca66', '#4384ff', '#FF9077', '#ea60a9'];
  let lineColors = options.lineColors || ['#4384ff', '#60f290', '#24836c', '#3a8be6', '#ffcd47', '#ffffff', '#ff798a', '#65ffdd', '#c088ff'];
  // let lineColors = ['#19e7ff','#ffcd47']
  let markLineColors = options.markLineColors || ['#fbff00', '#06e2e6'];
  let areaLineColors = options.areaLineColors || ['#4afefe','#60f290'];
  let barColors = options.barColors ? getBarColors(options.barColors) : getBarColors(['#06e2e6','rgba(0,228,255,0.6)', '#3a8be6','#ffcd47']);
  // let barColors = getBarColors(['#3a8be6','#60f290'])
  let barBorderColors = options.barBorderColors ? getBarBorderColors(options.barBorderColors) : getBarBorderColors(['transparent']);
  let legends = options.lengendsLineIndexs ? getLegends(options, data.legends) : data.legends


  let option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      borderColor: '#48607f',
      borderWidth: 1,
      textStyle: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
      },
      padding: [10, 25],
      axisPointer: {
        type: options.axisPointer?options.axisPointer:'none',
        axis:'x',
        snap:true,
        lineStyle:{
          color:'#0C7485'
        }
      },
      alwaysShowContent:options.alwaysShowContent?options.alwaysShowContent:false,
    },
    grid: {
      top: options.gridTop || '30%',
      // top:'30%',
      left: options.gridLeft || '14%',
      right: options.gridRight || '5%',
      bottom: options.gridBottom || '15%',
      // bottom:'20%',
      // containLabel: options.containLabel !== undefined ? options.containLabel : false
    },
    title: {
      show: options.titleShow ? options.titleShow : false,
      text:data.title,
      left: options.titleX ? options.titleX : 'center',
      top: options.titleY ? options.titleY : '8%',
      textStyle: {
        color: '#fff',
        fontSize: options.titleFontSize ? options.titleFontSize : '20',
        fontFamily: 'PingFang-SC-Medium',
        fontWeight: 'normal'
      }
    },
    legend: {
      show: options.legendShow === false ? false : true,
      // show:true,
      data: legends,
      top: options.legendTop || '4%',
      // top:'15%',
      right: options.legendRight || '4%',
      orient: options.legendOrient || 'horizontal',
      textStyle: {
        color: "#ffffff",
        fontSize: options.legendFontSize || "14",
        fontFamily: 'PingFang-SC-Medium',
		
      },
      icon: options.legendIcon || '',
      formatter: params => isFormatter(params, options.isFormatter, getLegendTitle),
    },
    xAxis: {
      show: options.xAxisShow===false?false:true,
      type: 'category',
      // boundaryGap: false,
      data: data.xAxis,
      offset:5,
      axisLabel: {
        align: options.xAxisLabelAlign ? options.xAxisLabelAlign : undefined,
        margin: options.xAxisLabelMargin ? options.xAxisLabelMargin : undefined,
        // margin:20,
        rotate:  options.rotate?options.rotate:'',
        // rotate:0,
        interval: options.axisLabelInterval==0 ? options.axisLabelInterval : undefined, //设置这里
        // interval:0,
        color: '#fff',
        fontSize: 16,
        fontFamily: 'PingFang-SC-Bold',
        padding: [5, 0, 0, 0],
        formatter:(value)=>{
          let _temp = value;
          if(options.xAxisSplit) _temp = Xreplace(value,options.xAxisSplit,'\n')
          return _temp;
        },
      },
      axisLine: {
        show: options.xAxisLineShow ? true : false,
        lineStyle: {
          color: '#868d96',
        }
      },
      axisTick: {
        show: options.xAxisTick?true:false,
      },
      splitLine: {
        show: options.xaxisLineShow?options.xaxisLineShow:false,
      }
    },
    // yAxis: [createYAxis(data.yaxis[0],0), createYAxis(data.yaxis[1],1)],
    //series: [, lineSeries(data.series[1])]
    // visualMap
    visualMap:options.visualMapShow?{
      type:'piecewise',
      show:true,
      dimension:0,
      right:50,
      top:0,
      orient:'horizontal',
      hoverLink:true,
      textStyle:{
        color:"#fff",
        fontSize:16
      },
      itemWidth:40,
      itemHeight:6,
      pieces:[
        {
          gte:0,
          lt:30,
          color:'#52d483',
          label:'实际',
          // symbol:'line'
        },
        {
          gte:30,
          lte:37,
          // color:'#3da1ff',
          color:'#ffcd47',
          label:'预测',
          // symbol:'line',
        }
      ],
    }:''
  };

  let _series = [],
  _temp = data.series || [],_y=[];

  if(data.single) options.singleYAxis = true;

  for (let i = 0; i < _temp.length; i++) {
    switch (_temp[i].type) {
      case 'bar':
        if (_temp[i].stack) {
          _series.push(stackBarSeries(_temp[i], options,'总量'));
        } else {
          _series.push(barSeries(_temp[i], options));
        }
        _y[0] = _temp[i].unit;
        break;
      case 'line':
        if (_temp.length == 1) {
          _series.push(areaLineSeries(_temp[i], options));
        } else {
          _series.push(lineSeries(_temp[i], options));
        }
        _y[1] = _temp[i].unit;
        break;
      case 'markLine':
        _series.push(markLineSeries(_temp[i], options));
        break;
      case 'stack':
        _series.push(stackBarSeriesWithoutStackKeyUsingLineColor(_temp[i], options,'总量'));
        _y[0] = _temp[i].unit;
        break;
      default :
        _y[0] = _temp[i].unit;
      break;
    }
  }

  option.series = _series;

  let _yAxis = [];
  for (let i = 0; i < _y.length; i++) {
    if (!_y[0]) {
      _yAxis[0] = createYAxis(_y[1], 0);
    }else{
      _yAxis.push(createYAxis(_y[i], i));
    }
  }

  if(data.single) {
    _yAxis[0] = createYAxis(_temp[0].unit, 0);
  }
  option.yAxis = _yAxis;

  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  myChart.clear();
  myChart.resize({
    width: clientWidth
  });
  myChart.setOption(option);
  // Bus.chartsUrl[id] = myChart.getDataURL();
  myChart.dispatchAction({
    // type:options.dispatchActionType?options.dispatchActionType:'showTip',
    type:'showTip',
    seriesIndex:0,
    dataIndex:22
  })

  function getBarColors(colors) {
    let _temp = [];
    for (let i = 0; i < colors.length; i++) {
      _temp.push(new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: colors[i]
        },
        {
          offset: 1,
          // color: 'transparent',
          color:colors[2]?colors[2]:'transparent'
        }
      ]))
    }

    return _temp;
  }

  function getBarBorderColors(colors) {
    let _temp = [];
    for (let i = 0; i < colors.length; i++) {
      _temp.push(new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: colors[i]
        },
        {
          offset: 1,
          // color: 'rgba(255,255,255,0)',
          color:'transparent'
        }
      ]))
    }

    return _temp;
  }

  function createYAxis(name, position) {
    return {
      show: options.yAxisShow===false?false:true,
      min: options.yAxisMin || null,
      max: options.yAxisMax || null,
      // min:-60,
      // max:120,
      // min:function(params){
      //   var index_min = params.value
      //   if(index_min<0){
      //     return index_min - 40
      //   }
      // },
      // max:function(params){
      //   var index_max = params.value
      //   if(index_max>0){
      //     return index_max + 40
      //   }
      // },
      name: name ? '(' + name + ')' : '',
      nameTextStyle: {
        color: '#868d96',
        fontSize: options.nameTextStylefontSize || 16,
        fontFamily: 'PingFang-SC-Medium',
        padding: options.nameTextStylePadding || 0
      },
      type: 'value',

      splitNumber: options.splitNumber || 5,
      position: position % 2 == 0 ? 'left' : 'right',
      axisLabel: {
        margin: 5,
        color: '#fff',
        fontSize: 16,
        // interval:2,
        // rotate:20,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: options.splitLineColor || '#414f65',
          type: 'dashed'
        }
      },
      axisLine: {
        show: options.yaxisLineShow ? true : false,
        lineStyle: {
          color: '#868d96',
          width: 1
        }
      }
    }
  }


  function lineSeries(data, options) {
    let _color = lineColors[lineColorIdx % lineColors.length]
    lineColorIdx++;
    return {
      name: data.name,
      type: "line",
      showAllSymbol: true,
      symbol: options.seriesSymbol || 'circle',
      yAxisIndex: options.singleYAxis ? 0 : 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
      symbolSize: options.symbolSize || 8, //标记的大小
      itemStyle: {
        normal: {
          color: options.seriesItemStyleColor || _color, //拐点颜色
          borderColor: options.seriesItemStyleBorderColor || _color,
          borderWidth: options.seriesItemStyleBorderWidth || undefined,
        }
      },
      lineStyle: {
        normal: {
          color: _color,
        },
        borderColor: _color
      },
      areaStyle:{
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          // color: options.areaStyleColor?options.areaStyleColor[0]:"transparent"
          color:options.areaStyleColor?_color:'transparent'
          // color:'#ffcd47'
        }, {
          offset: 1,
          color:  options.areaStyleColor?options.areaStyleColor[1]:"transparent"
          // color:'transparent'
        }]),
        borderColor: _color,
      },
      smooth: options.smooth || false,
      data: data.data,
    }

  }

  function markLineSeries(data, options) {

    let _color = markLineColors[markLineColorIdx % markLineColors.length]
    markLineColorIdx++;
    return {
      name: data.name,
      type: "line",
      showAllSymbol: true,
      symbol:'none',
      yAxisIndex: 0, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
      symbolSize: 0, //标记的大小
      itemStyle: {
        normal: {
          color: _color, //拐点颜色
          borderColor: _color,
        }
      },
      lineStyle: {
        normal: {
          width:1,
          type:'dashed',
          color: _color,
        },
      },
      smooth: false,
      data: data.data,
    }

  }

  function barSeries(data, options) {
    let _color = barColors[barColorIdx % barColors.length];
    let _borderColor = barBorderColors[barColorIdx % barBorderColors.length];
    barColorIdx++;
    return {
      name: data.name,
      type: 'bar',
      barWidth: options.barWidth || 55,
      barGap:'50%',
      itemStyle: {
        normal: {
          label: options.itemStyleNormalLabel || '',
          color:options.showMarkPonit?function(params){
            var index_color = params.value;
            if(index_color>0){
              return  new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color:options.barColors?options.barColors[0]:''
              },
                {
                  offset: 1,
                  color: options.barColors?options.barColors[1]:'transparent',
                }
              ], false)
            }else{
              return  new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color:options.barColors?options.barColors[0]:_color
              },
                {
                  offset: 1,
                  color: options.barColors?options.barColors[1]:_color,
                }
              ], false)
            }
          }
          :_color,
          // color
          // :new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
          //   offset: 0,
          //   color: "#3a8be6",
          //   // color:options.barColors?options.barColors[1]:''
          // },
          //   {
          //     offset: 1,
          //     color: '#3a8be6',
          //     // color: options.barColors?options.barColors[0]:'',
          //   }
          // ], false),
          borderWidth: 1,
          borderColor:_borderColor,
          // borderColor: function(params){
          //   var index_borderColor = params.value;
           
          //   if(index_borderColor>0){
          //     return  new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          //       offset: 0,
          //       color: _borderColor[0]
          //     },
          //       {
          //         offset: 1,
          //         color: _borderColor[1]
          //       }
          //     ], false)
          //   }else{
          //     return  new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
          //       offset: 0,
          //       // color: "#D06684"
          //       color:'red'
          //     },
          //       {
          //         offset: 1,
          //         color: 'red',
          //       }
          //     ], false)
          //   }
          // },
        }
      },
      label: {
        show: options.labelShow || false,
        position: "top",
        fontSize: 16,
        color: '#101d2b',
        fontFamily: 'commonTitle',
        backgroundColor: '#77fdff',
        padding: [2,1,0,1],
      },
      markPoint:options.showMarkPonit?{
        symbol:'rect',
        symbolSize:[40,25],
        label:{
          normal:{
            fontSize:18,
          }
        },
        itemStyle:{
          color:'transparent',
          // color:function(params){
          //   var index_itemStyleColor = params.value;
          //   if(index_itemStyleColor>0){
          //     return  new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          //       offset: 0,
          //       color: "#06e2e6",
          //       // color:options.barColors?options.barColors[0]:''
          //     },
          //       {
          //         offset: 1,
          //         color:'transparent',
          //         // color: options.barColors?'transparent':'',
          //       }
          //     ], false)
          //   }else{
          //     return  new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
          //       offset: 0,
          //       color: "#D06684",
          //       // color:options.barColors?options.barColors[2]:_color
          //     },
          //       {
          //         offset: 1,
          //         color: 'transparent',
          //         // color: options.barColors?options.barColors[1]:_color,
          //       }
          //     ], false)
          //   }
          // },
        },
        data:[
          {value:data.data[0],xAxis:0,yAxis:parseInt(data.data[0])-20},
          {value:data.data[1],xAxis:1,yAxis:parseInt(data.data[1])+10},
          {value:data.data[2],xAxis:2,yAxis:parseInt(data.data[2])-20}
        ]
      }:{},
      data: data.data,
    }
  }

  function stackBarSeries(data, options) {
    let _color = lineColors[lineColors % lineColors.length]
    barColorIdx++;
    return {
      name: data.name,
      type: 'bar',
      stack: data.stack || null,
      barWidth: options.barWidth || 25,
      itemStyle: {
        normal: {
          color: _color,
          borderWidth: 1,
        }
      },
      data: data.data,
    }
  }

  function stackBarSeriesWithoutStackKeyUsingLineColor(data, options) {
    let _color = lineColors[(lineColorIdx) % lineColors.length]
    lineColorIdx++;
    return {
      name: data.name,
      type: 'bar',
      stack: data.type || null,
      barWidth: options.barWidth || 5,
      itemStyle: {
        normal: {
          color: _color,
          borderWidth: 1,
          barBorderRadius: 0,
        }
      },
      data: data.data,
    }
  }

  function areaLineSeries(data, options) {
    // console.log(data,options)
    // let _color = areaLineColors[areaLineColorIdx % areaLineColors.length]
    // areaLineColorIdx++
    let _color = lineColors[(lineColorIdx) % lineColors.length]
    lineColorIdx++;
    return {
      type: 'line',
      data: data.data,
      smooth: options.areaLineSmooth?false:true,
      // smooth:false,
      symbol: 'circle',
      showSymbol: options.showSymbol==false?false:true,
      symbolSize: options.symbolSize?options.symbolSize:0, //拐点大小
      lineStyle: options.visualMapShow?{
        width: options.lineStyleWidth?options.lineStyleWidth:4,
        type:options.lineStyleType?options.lineStyleType:'solid'
      }:{
        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
          offset: 0,
          color: options.lineStyleColor?options.lineStyleColor[0]:'transparent'
          // color:'#60f290'
        }, {
          offset: 1,
          color: options.lineStyleColor?options.lineStyleColor[1]:'transparent'
          // color:'#01faff'
        }]),
        width: options.lineStyleWidth?options.lineStyleWidth:4,
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: options.areaStyleColor?options.areaStyleColor[0]:"transparent"
          }, {
            offset: 1,
            color: options.areaStyleColor?options.areaStyleColor[1]:"transparent"
            // color:_color
          }])
        }
      },
      itemStyle: {
        normal: {
          color: options.itemStyleColor?options.itemStyleColor:'#06e1e5', //拐点颜色
          borderColor: '#fff',
        }
      },
      label:{
        show:options.areaLineSeriesLabelShow?options.areaLineSeriesLabelShow:false,
        color:options.areaLineSeriesLabelColor?options.areaLineSeriesLabelColor:'#ffcd47',
        fontSize:16,
        formatter(value){
          return value.data + '%'
        }
      }
    }
  }

  function Xreplace(str,length,unit)
  {
    let re = new RegExp("\\S{1,"+length+"}","g");
    let ma = str.match(re) || [];
    return ma.join(unit);//最后面不要"a" 就去掉( + "a")
  }

  function isFormatter(params, isFormatter, callback) {
    // 通过isFormatter属性判断是否需要自定义legend名称，true时会调用自定义的回调函数进行名称抽取
    if (isFormatter) {
      return callback(params)
    } else {
      return params;
    }
  }

  function getLegendTitle (params) {
    if(params.length>5) {
      let str = params.slice(3).replace('拥有量','')
      return str;
    }else {
      return params;
    }
  }

  function getLegends (options, legends) {
    let _legends = []
    _legends = legends.map((item, index) => {
      if(options.lengendsLineIndexs.indexOf(index) > -1) {
        let temp = {
          name: item,
          itemStyle: {
            color: '#49bd47',
            borderColor: options.legendsLineBorderColor,
            borderWidth: options.legendsLineBorderWidth
          }
        }
        return temp
      } else {
        return item
      }
    })
    return _legends
  }

};
