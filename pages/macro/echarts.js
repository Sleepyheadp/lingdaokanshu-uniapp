import echarts from "echarts";
// import jiangmenData from "./data.json";
import baotouData from "./json/baotou-beifen3.json";

function remToPx(rem) {
  var fontSize = document.documentElement.style.fontSize;
  return Math.floor(rem * fontSize.replace('px', ''));
}
// 热力图
export const heatChart = (id, data) => {
  console.log("666666",data);
  let sdata =data.series[0].data;
  let areaData = [
    {
      name: '白云鄂博矿区',
      value: sdata[1]
    },
    {
      name: '达尔罕茂明安联合旗',
      value: sdata[2]
    },
    {
      name: '固阳县',
      value: sdata[0]
    },
    {
      name: '石拐区',
      value: sdata[6]
    },
    {
      name: '东河区',
      value: sdata[3]
    },
    {
      name: '青山区',
      value: sdata[5]
    },
    {
      name: '九原区',
      value: sdata[4]
    },
  ];
  echarts.registerMap('xxx', baotouData);
  let myChart = echarts.init(document.getElementById(id));

  let option = {
    backgroundColor: '#fff',
    tooltip: {
      formatter:'{b}：{c}%',
      show: true,
      fontSize:remToPx(22/75),
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      borderColor: '#48607f',
      borderWidth: remToPx(1/75),
      textStyle: {
        fontSize: remToPx(18/75),
        color: '#fff',
      },
      padding: [remToPx(10/75), remToPx(25/75)],
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      containLabel: true,
      height: '100%',
      width: '100%'
    },
    geo: {
      map: 'xxx',
      top: 'center',
      roam: false,
      zoom: 1,
      aspectScale:1.0,
      label: {
        show: true,
        normal: {
          show: true,
          fontSize:remToPx(22/75),
          color: 'black',
          fontFamily: 'PingFang-SC-Medium',
        },
        emphasis: {
          color: '#fff'
        }
      },
      itemStyle: {
        // normal: {
        //   areaColor: '#76b1ff',
        //   borderColor: '#eee',
        //   shadowColor: '#76b1ff',
        //   shadowBlur: 10,
        //   borderWidth: 1
        // },
        normal: {
          borderColor: '#FFFFFF',
          borderWidth: remToPx(2/75),
        },
        emphasis: {
          // 鼠标移入颜色
          show: true,
          color: 'rgba(26,143,218,0.4)'
        }
      }
    },
    visualMap: {
      textStyle: {
        fontSize: remToPx(22/75),
        color: '#7B93A7'
      },
      orient: 'horizontal',
      type: 'piecewise',
      show: true,
      left: 'center',
      bottom: remToPx(30/75),
      showLabel: 1,
      itemWidth: remToPx(15/75),
      itemHeight: remToPx(15/75),
      itemGap: remToPx(20/75),
      itemSymbol: 'rect',
      min: 5,
      max: 20,
      pieces: [
        {
          min: 4,
          color: '#ef5151'
        },
        {
          min: 0,
          max: 4,
          color: '#f99b37'
        },
        {
          min: -4,
          max: 0,
          color: '#f9db63'
        },
        {
          max: -4,
          color: '#88c85e'
        },
      ],
      calculable: true
    },
    series: [
      {
        name: 'xxx',
        type: 'map',
        roam: true,
        map: 'xxx',
        geoIndex: 0,
        // emphasis: {
        //   label: {
        //     show: true
        //   }
        // },
        // 文本位置修正
        // textFixed: {
        //   Alaska: [20, -20]
        // },
        data: areaData
      }
    ]
  };
  // myChart.clear();
  myChart.setOption(option);
};
export const heatChart1 = (id, data) => {
  let sdata =data.series[0].data;
  let areaData = [
    {
      name: '白云鄂博矿区',
      value: sdata[1]
    },
    {
      name: '达尔罕茂明安联合旗',
      value: sdata[2]
    },
    {
      name: '固阳县',
      value: sdata[0]
    },
    {
      name: '石拐区',
      value: sdata[6]
    },
    {
      name: '东河区',
      value: sdata[3]
    },
    {
      name: '青山区',
      value: sdata[5]
    },
    {
      name: '九原区',
      value: sdata[4]
    },
  ];
  echarts.registerMap('xxx', baotouData);
  let myChart = echarts.init(document.getElementById(id));

  let option = {
    backgroundColor: '#fff',
    tooltip: {
      formatter:'{b}:{c}%',
      show: true,
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      borderColor: '#48607f',
      borderWidth: remToPx(1/75),
      textStyle: {
        fontSize: remToPx(18/75),
        color: '#fff',
      },
      padding: [remToPx(10/75), remToPx(25/75)],
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      containLabel: true,
      height: '100%',
      width: '100%',
    },
    geo: {
      map: 'xxx',
      top: 'center',
      roam: false,
      zoom: 1,
      aspectScale:1.0,
      label: {
        show: true,
        normal: {
          show: true,
          fontSize: remToPx(22/75),
          color: 'black'
        },
        emphasis: {
          color: '#fff'
        }
      },
      itemStyle: {
        // normal: {
        //   areaColor: '#76b1ff',
        //   borderColor: '#eee',
        //   shadowColor: '#76b1ff',
        //   shadowBlur: 10,
        //   borderWidth: 1
        // },
        normal: {
          borderColor: '#fff',
          borderWidth: remToPx(2/75),
        },
      },
      emphasis: {
        // 鼠标移入颜色
        show: true,
        color: 'rgba(26,143,218,0.4)'
      }
    },
    visualMap: {
      textStyle: {
        fontSize: remToPx(22/75),
        color: '#7B93A7'
      },
      orient: 'horizontal',
      type: 'piecewise',
      show: true,
      left: 'center',
      bottom: remToPx(30/75),
      showLabel: 1,
      itemWidth: remToPx(20/75),
      itemHeight: remToPx(15/75),
      itemGap: remToPx(20/75),
      itemSymbol: 'rect',
      min: 5,
      max: 20,
      pieces: [
        {
          min: 6,
          color: '#ef5151'
        },
        {
          min: 3,
          max: 6,
          color: '#f99b37'
        },
        {
          min: 0,
          max: 3,
          color: '#f9db63'
        },
        {
          max: 0,
          color: '#88c85e'
        },
      ],
      calculable: true
    },
    series: [
      {
        name: 'xxx',
        type: 'map',
        roam: true,
        map: 'xxx',
        geoIndex: 0,
        // emphasis: {
        //   label: {
        //     show: true
        //   }
        // },
        // 文本位置修正
        // textFixed: {
        //   Alaska: [20, -20]
        // },
        data: areaData
      }
    ]
  };
  // myChart.clear();
  myChart.setOption(option);
};

// 环状饼图
export const brainPieChart = (id, data,labelShow) => {

  var ary = data.series[0].data;
  let ary2 = [];
  ary.forEach(a=>{
    ary2.push(a.value);
  });
  let datacount = eval(ary2.join('+'));

  let option = {
    title: {
      text: datacount,
      top:  remToPx(174/75),
      textAlign: "center",
      left: remToPx(350/75),
      textStyle: {
        color: '#353535',
        fontSize: remToPx(55/75),
        // fontWeight: 'bold',
        fontWeight: 'normal',
        fontFamily: 'DIN-Medium',
        rich:{
          a:{
            fontSize:remToPx(22/75),
            color:"#353535",
            // padding:7
          },
          b:{
            fontSize:remToPx(22/75),
            color:"#353535"
          }
        }
      }
    },
    // legend: {
    //   orient: 'vertical',
    //   right: '30',
    //   top: 'center',
    //   textStyle: {
    //     color: "#ffffff",
    //     fontFamily: 'PingFang-SC-Medium',
    //   },
    //   icon: 'circle',
    //   data: data.legends
    // },
    color: ['#39c77f','#1a79c9','#f99b37','#09388f','#ff789b'],
    // tooltip: {
    //   trigger: 'item',
    //   formatter: '{b} : {c} '
    // },
    series: {
      type: 'pie',
      clockWise: true,
      radius: ['40%', '70%'],
      hoverAnimation: true,
      silent: false,
      center: ['50%', '40%'],
      labelLine: {
        show:false,
        length2:-50,
        length: 8,
      },
      roseType: 'area',
      label: {
        // width: '100',
        textStyle:{
          color:"#353535",
          fontFamily: 'PingFang-SC-Medium',
        },
        formatter: params => {
          let aa = params.name.slice(0,4);
          return '{icon|●}{name|' + aa + '} {value|' + params.percent + '%}\n{aaa|'+params.value+'}';
          // return `{icon|●}{name|${aa}}{value|${params.percent}%}
          // {aaa|生产总值${params.value}亿}`
        },
        rich: {
          icon: {
            padding: [remToPx(5/75),remToPx(5/75)],
            fontSize: remToPx(22/75),
          },
          name: {
            fontSize: remToPx(26/75),
            color: '#353535',
            fontFamily: 'PingFang-SC-Medium',

          },
          value: {
            fontSize: remToPx(26/75),
            color: '#353535',
            fontFamily: 'PingFang-SC-Medium',
          },
          aaa: {
            fontSize: remToPx(26/75),
            padding: [0,0,remToPx(10/75),remToPx(24/75)],
            fontFamily: 'PingFang-SC-Medium',
            align: 'left',
            color: '#353535'
          }
        },
        // normal: { show: labelShow?true:false, formatter: "" }
        backgroundColor: 'rgba(255,255,255,0.75)',
        // backgroundColor: 'red',
        borderColor: 'rgba(238,238,238,0.85)',
        padding: [ remToPx(20/75), remToPx(10/75)],
        borderWidth:remToPx(1/75),
        borderRadius:remToPx(6/75),
        shadowBlur:remToPx(12/75),
        shadowOffsetX:remToPx(3/75),
        shadowOffsetY: remToPx(3/75),
        shadowColor: 'rgba(129,129,129,0.25)',
        // shadowColor: "red",
      },
      // labelLine: {
      //   normal: {
      //     show:false,
      //     length2: 0,
      //     length: 5
      //   }
      // },
      emphasis: {
        label: {
          show: true
        }
      },
      data: data.series[0].data
    }
  };
  let myChart = echarts.init(document.getElementById(id));
  myChart.clear();
  myChart.setOption(option);
};


export const singleLineChart1 = (id, data) => {
  console.log("2222222222",data )
  let option = {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    grid: {
      left: data.gridLeft ? data.gridLeft : '3%',
      right: '2%',
      top: data.gridTop ? data.gridTop : '16%',
      bottom: data.gridBottom ? data.gridBottom : '6%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      textStyle: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
      },
      padding:[5,15],
      axisPointer: {
        type: 'line',
        label: {
          show: true,
          backgroundColor: '#333'
        }
      }
    },
    xAxis: {
      show: true,
      type: 'category',
      axisTick: {
        show: false
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#2A2A2A',
        }
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: '#E0E0E0',
          type:"dashed"
        }
      },
      axisLabel: {
        rotate: 0,
        textStyle: {
          fontSize: '16',
          fontFamily: 'PingFang-SC-Medium',
          padding: [5,0,0,0],
          color: '#fff'
        },
      },
      data: data.xaxis
    },
    yAxis: {
      show: true,
      name: data.yaxis[0] === null ? '' : '(' + data.yaxis + ')',
      nameTextStyle: {
        fontSize:'18',
        fontFamily: 'PingFang-SC-Medium',
        padding: [0, 10, 0, -25],
        color: '#b8b9bb'
      },
      type: 'value',
      splitNumber : 4,
      axisTick: {
        show: false
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#aaa',
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          type:"dashed",
          color: '#414f65'
        }
      },
      axisLabel: {
        textStyle: {
          fontSize: '16',
          fontFamily: 'PingFang-SC-Medium',
          color: '#fff'
        }
      }
    },
    series: [{
      type: 'line',
      data: data.series[0].data,
      symbol: 'circle',
      symbolSize: 8, //拐点大小
      lineStyle: {
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
          offset: 0,
          color: "#41ce96"
        }, {
          offset: 1,
          color: "#06e2e6"
        }]),
        width: 2,
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: "rgba(6, 226, 230, 0.5)"
          }, {
            offset: 0.3,
            color: "rgba(6, 226, 230, 0.2)"
          }, {
            offset: 1,
            color: "rgba(0, 0, 0, 0)"
          }])
        }
      },
      itemStyle: {
        normal: {
          color: '#06e1e5', //拐点颜色
          borderColor: '#fff',
        }
      }
    }]
  };
  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  myChart.clear();
  myChart.resize({width: clientWidth});
  myChart.setOption(option);
};

export const brainMultiLineChartwo2 = (id, data) => {
  let series = [];
  for (let i = 0; i < 6; i++) {
    if (data.series[i]) {
      series.push({
        name: data.series[i].name,
        type: data.series[i].type,
        symbol: 'circle',
        symbolSize: 6,
        data: data.series[i].data,

        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#d4f3e3'
            },
              {
                offset: 1,
                color: '#d4f3e3'
              }
            ], false),
            shadowColor: 'rgba(108,80,243, 0.5)',
            shadowBlur: 20
          }
        },
      })
    }
  }
  let option = {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    title: {
      text: data.title,
      left: data.titleLeft ? data.titleLeft : 'center',
      top: '21',
      textStyle: {
        color: '#fff',
        fontSize: '18',
        fontWeight: 'normal',
        fontFamily: 'PingFang-SC-Medium'
      }
    },
    legend: {
      data: data.legends,
      itemHeight: remToPx(20/75),
      itemWidth: remToPx(20/75),
      top:'2%',
      textStyle: {
        color: "black",
        fontFamily: 'PingFang-SC-Medium',
      }
    },
    color: ['#1a39c8', '#39cc7f','#09388f', '#ff789b', '#1d866c', '#734c9e'],
    grid: {
      left:"15%",
      right:'18%'
      // top: '30%',
      // bottom: '13%',
      // containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        label: {
          show: true,
          backgroundColor: '#333'
        }
      }
    },
    xAxis: {
      show: true,
      type: 'category',
      axisTick: {
        show: false
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#2A2A2A',
        }
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: '#414f65',
          type:"dashed"
        }
      },

      axisLabel: {
        rotate: 0,
        color: 'black',
        interval: 4, //设置这里
        textStyle: {
          fontSize: '12',
          fontFamily: 'PingFang-SC-Medium',
          padding: [5,0,0,0],
          color: "#1c1c1c"
        },
      },
      data: data.xaxis
    },
    yAxis: [{
        show: true,
        // name: data.yaxis[0] === null ? '' : '(' + data.yaxis + ')',
        // nameTextStyle: {
        //   fontSize:'12',
        //   padding: [0, 10, 0, -20],
        //   fontFamily: 'PingFang-SC-Medium',
        //   color: '#b8b9bb'
        // },
        type: 'value',
        splitNumber : 4,
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#aaa',
          }
        },
        splitLine: {
          show: true,
          // lineStyle: {
          //   type:"dashed",
          //   color: '#414f65'
          // }
        },
        axisLabel: {
          textStyle: {
            fontSize: remToPx(22/75),
            fontFamily: 'PingFang-SC-Medium',
            color: '1c1c1c'
          }
        },

      },
      {
        show: true,
        // name: data.yaxis[1] ? '(' + data.yaxis[1] + ')' : '',
        nameTextStyle: {
          color: '#868d96',
          fontSize: 16,
        },
        type: 'value',
        min:80,
        position: 'right',
        axisLabel: {
          margin: remToPx(15/75),
          color: '#fff',
          fontFamily: 'PingFang-SC-Medium',
          fontSize: remToPx(16/75)
        },

        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          // lineStyle: {
          //   color: '#414f65',
          //   type: 'dashed'
          // }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#838383',
            width: 1
          }
        }
      }],
    series: series
  };
  let myChart = echarts.init(document.getElementById(id));
  myChart.clear();
  myChart.setOption(option);
};
export const brainMultiLineChartwo3 = (id,data) => {
  let data1 =data.series[0];
  let data2 =data.series[1];
  const colorList = ['rgb(26, 121, 200)', 'rgb(57, 199, 127)', 'rgb(249, 155, 55)'];
  let option = {
    // backgroundColor: '#fff',
    title: {
      // text: '全国6月销售统计',
      textStyle: {
        fontSize: remToPx(22/75),
        fontWeight: 400
      },
      left: 'center',
      top: '5%'
    },
    legend: {
      color:["#1a79c9", '#39c77f'],
      data: data.legends,
      // icon: 'circle',
      top: remToPx(20/75),
      right: remToPx(20/75),
      itemHeight: remToPx(16/75),
      itemWidth: remToPx(36/75),
      textStyle: {
        color: '#1c1c1c',
        fontSize: remToPx(22/75),
      },

    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      textStyle: {
        fontSize: remToPx(22/75),
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
      },
      padding: [remToPx(10/75), remToPx(20/75)],
      axisPointer: {
        type: 'none',
      }
    },
    grid: {
      left: data.gridLeft ? data.gridLeft : remToPx(65/75),
      right: data.gridRight ? data.gridRight : remToPx(100/75),
      top: data.gridTop ? data.gridTop : remToPx(114/75),
      bottom: data.gridBottom ? data.gridBottom : remToPx(60/75),
    },
    xAxis: [{
      type: 'category',
      axisLine: {
        lineStyle: {
          color: '#DCE2E8'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        rotate: 0,
        interval:3, //设置这里
        color: '#1c1c1c',
        margin: remToPx(15/75),
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Bold',
        // formatter: function(params) {
        //   return params.slice(5, 7) + "月";
        // },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#e1e1e1',
          // color: 'red',
        }
      },
      axisPointer: {
        label: {
          padding: [0, 0, 10, 0],
          margin: 15,
          fontSize:  remToPx(22/75),
          backgroundColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: '#fff' // 0% 处的颜色
            }, {
              // offset: 0.9,
              offset: 0.86,
              color: '#fff' // 0% 处的颜色
            }, {
              offset: 0.86,
              color: '#33c0cd' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#33c0cd' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          }
        }
      },
      boundaryGap: false,
      data: data.xaxis
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#e1e1e1'
        }
      },
      axisLabel: {
        margin: remToPx(10/75),
        textStyle: {
          color: '#838383'
        },
        fontSize: remToPx(22/75),
      },
      splitLine: {
        show: false
      }
    },
      {
      type: 'value',
      position: 'right',
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#838383'
        },
        margin: remToPx(10/75),
        fontSize: remToPx(22/75),
        formatter: '{value}'
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#e1e1e1'
        }
      },
      splitLine: {
        show: false
      }
    }],
    series: [
      {
      name: data1.name,
      type: 'line',
      data: data1.data,
      // symbol: 'circle',
      // smooth: true,
      yAxisIndex: 0,
      showSymbol: false,
      lineStyle: {
        width:  remToPx(3/75),
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(26, 121, 200, 0.15)'
          },
            {
              offset: 1,
              color: 'rgba(26, 121, 200, 0)'
            }
          ]),
          origin: 'start'
        },

      },
      itemStyle: {
        normal: {
          color: colorList[0],
          borderColor: colorList[0]
        }
      },
    },
      {
        name: data2.name,
        type: 'line',
        data: data2.data,
        yAxisIndex: 1,
        // symbol: 'circle',
        // smooth: true,
        showSymbol: false,
        lineStyle: {
          width:  remToPx(3/75),
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(57, 199, 127, 0.15)'
            },
              {
                offset: 1,
                color: 'rgba(57, 199, 127, 0)'
              }
            ]),
          }
        },
        itemStyle: {
          normal: {
            color: colorList[1],
            borderColor: colorList[1]
          }
        }
      }
    ]
  };
  let myChart = echarts.init(document.getElementById(id));
  myChart.clear();
  myChart.setOption(option);
};

//堆叠折线图
export const stackedLineChart = (id, data) => {
  let option = {
    color: ["#316BDB", "#1B58C1", "#223595"],
    title: {
      text: data.title,
      left: data.titleLeft ? data.titleLeft : 'center',
      show: false,
      top: '21',
      textStyle: {
        color: '#fff',
        fontSize: '18',
        fontWeight: 'normal',
        fontFamily: 'PingFang-SC-Medium'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: data.legends,
      itemHeight: remToPx(20/75),
      itemWidth: remToPx(20/75),
      bottom: '0%',
      textStyle: {
        color: "#fff"
      }
    },
    grid: {
      top: '10%',
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
      show: true,
      type: 'category',
      boundaryGap: false,
      data: data.xaxis,
      // axisLabel: {
      //   show: true,
      //   textStyle: {
      //     color: "#fff"
      //   },
      // },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#2A2A2A',
        }
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: '#414f65',
          type:"dashed"
        }
      },
      axisLabel: {
        rotate: 0,
        textStyle: {
          fontSize: '16',
          fontFamily: 'PingFang-SC-Medium',
          padding: [5,0,0,0],
          color: '#fff'
        },
      },
    },
    yAxis: {
      show: true,
      name: data.yaxis[0] === null ? '' : '(' + data.yaxis + ')',
      nameTextStyle: {
        fontSize:'18',
        padding: [0, 10, 0, -20],
        fontFamily: 'PingFang-SC-Medium',
        color: '#b8b9bb'
      },
      type: 'value',
      splitNumber : 4,
      axisTick: {
        show: false
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#aaa',
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          type:"dashed",
          color: '#414f65'
        }
      },
      axisLabel: {
        textStyle: {
          fontSize: '16',
          fontFamily: 'PingFang-SC-Medium',
          color: '#fff'
        }
      }
    },
    series: [
      {
        name: data.series[0].name,
        type: 'line',
        areaStyle: {},
        data: data.series[0].data
      },
      {
        name: data.series[1].name,
        type: 'line',
        areaStyle: {},
        data: data.series[1].data
      },
      {
        name: data.series[2].name,
        type: 'line',
        areaStyle: {},
        data: data.series[2].data
      }
    ]
  };


  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  myChart.clear();
  myChart.resize({ width: clientWidth });
  myChart.setOption(option);
};

export const brainMultiBarChartRegional = (id, data,isParams) => {
  let series = [];
  let colorList = ['#3a8be6 ', '#06e2e6', '#ffcd47', '#09388f', '#ff789b', '#7ca66',"#1d866c","#734c9e"]
  let color1 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: '#3a8be6'
    },
    {
      offset: 1,
      color: 'rgba(0,228,255,0)',
    }
  ])
  let color2 =new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: '#ffcd47'
    },
    {
      offset: 1,
      color: 'rgba(0,228,255,0)',
    }
  ])
  let colorlist= [color1,color2]
  let length = data.series.length;
  for (let i = 0; i < length; i++) {
    series.push({
      name: data.series[i].name,
      type: 'bar',
      barWidth: 4,
      itemStyle: {
        normal: {
          color: colorlist[i],
        }
      },
      data: data.series[i].data
    })
  }
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
      padding:[10,25],
      axisPointer: {
        type: 'none',
      }
    },
    grid: {
      top: '20%',
      left: '8%',
      right: '2%',
      bottom: '30%',
    },
    legend: {
      left: 'center',
      top: 'top',
      icon: 'circle',
      textStyle: {
        color: 'black',
        fontFamily: 'PingFang-SC-Medium',
      },
      formatter: function(params) {
        if(!isParams) {
          return params;
        }else if(params.length>5) {
          return params.slice(0,5)+'...';
        }else {
          return params;
        }
      },
      data: data.legends
    },
    xAxis: {
      show: true,
      type: 'category',
      // boundaryGap: false,
      data: data.xaxis,
      axisLabel: {
        rotate: 38,
        // margin: 5,
        color: 'black',
        fontSize: 12,
        fontFamily: 'PingFang-SC-Medium',
        interval:0
      },
      axisLine: {
        show: true,
        lineStyle:{
          color: '#868d96',
          width: 1
        }
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      }
    },
    yAxis: [
      {
        show: true,
        name: data.yaxis[0]?'('+ data.yaxis[0] + ')':'',
        nameTextStyle: {
          color: '#838383',
          fontSize: 12,
          fontFamily: 'PingFang-SC-Medium',
        },
        type: 'value',
        splitNumber : 3,
        position: 'left',
        axisLabel: {
          margin: 5,
          color: '#838383',
          fontSize: 12,
          fontFamily: 'PingFang-SC-Medium'
        },

        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#414f65',
            type: 'dashed'
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#868d96',
            width: 1
          }
        }
      },
    ],
    series: series
  };
  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  myChart.clear();
  myChart.resize({width: clientWidth});
  myChart.setOption(option);
};

// 条形图+折线图（无配置，根据后台返的显示）
export const brainLineAndBarChart2 = (id, data, barWidth, rotate, gridBottom) => {
  let colorList = ['#3a8be6 ', '#06e2e6', '#ffcd47', '#09388f', '#ff789b', '#7ca66', "#1d866c", "#734c9e"]
  let colorlist = ["#1a79c8", "#f99b37"]
  for (let i = 0; i < data.series.length; i++) {
    if (data.series[i].type == 'bar') {
      data.series[i].barGap= "0%",
      data.series[i].barWidth = barWidth ? barWidth :remToPx(8/75);
      data.series[i].itemStyle = {
        normal: {
          color: colorlist[i],
          borderWidth: remToPx(3/75),
        }
      }
    } else if (data.series[i].type == 'line') {
      data.series[i].showAllSymbol = false;
      data.series[i].showSymbol=false
      // data.series[i].itemStyle = {
      //
      //   normal: {
      //     type:'dotted' //设置线条为虚
      //     // color: '#39c77f', //拐点颜色
      //     // borderColor: '#39c77f',
      //   }
      // };
      data.series[i].lineStyle = {

        normal: {
          width:remToPx(4/75),
          borderColor: '#FF7997',
          borderWidth:remToPx(0/75),
          color: "#ff4653",
          shadowBlur:remToPx(5/75),
          shadowColor: 'rgba(0,0,0,0.1)',
          // shadowColor: '#000000',
          // opacity:'10%',
        },

        // shadowColor: '#000000',


      };
    }
  }
  let option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      textStyle: {
        fontSize: remToPx(22/75),
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
      },
      padding: [remToPx(5/75), remToPx(10/75)],
      axisPointer: {
        type: 'none',
      }
    },
    grid: {
      left: data.gridLeft ? data.gridLeft : remToPx(65/75),
      right: data.gridRight ? data.gridRight : remToPx(30/75),
      top: data.gridTop ? data.gridTop : remToPx(114/75),
      bottom: data.gridBottom ? data.gridBottom : remToPx(40/75),
    },
    legend: [{
      data: data.legends.slice(0,2),
      top: remToPx(20/75),
      left: remToPx(15/75),
      itemHeight: remToPx(16/75),
      itemWidth: remToPx(16/75),
      icon: 'rect',
      textStyle: {
        color: "black",
        fontSize:  remToPx(22/75),
        fontFamily: 'PingFang-SC-Medium',
      }
    },{
      data: data.legends.slice(2,3),
    top: remToPx(20/75),
    itemHeight: remToPx(16/75),
    itemWidth: remToPx(36/75),
      right:remToPx(10/75),
    textStyle: {
    color: "black",
      fontSize:  remToPx(22/75),
      fontFamily: 'PingFang-SC-Medium',
  }
},],
    xAxis: {
      show: true,
      type: 'category',
      // boundaryGap: false,
      data: data.xaxis,

      axisLabel: {
        rotate: 0,
        interval:3, //设置这里
        color: 'black',
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Bold',
        // formatter: function(params) {
        //   return params.slice(5, 7) + "月";
        // },
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#e1e1e1',
        }
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#e1e1e1',
          // color: 'red',
        }
      },
    },
    yAxis: [{
      show: true,
      nameTextStyle: {
        color: '#868d96',
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Medium',
      },
      type: 'value',
      position: 'left',
      axisLabel: {
        margin: 5,
        color: '#868d96',
        fontSize: remToPx(22/75)
      },

      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#e1e1e1',
          // color: 'red',
        }
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: 'red',
          width:remToPx(3/75),
          shadowBlur: 'rgba(0,0,0,0)'
        }
      }
    }, {
      show: true,
      nameTextStyle: {
        color: '#868d96',
        fontSize: remToPx(16/75),
      },
      type: 'value',
      position: 'right',
      axisLabel: {
        margin: 5,
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
        fontSize: remToPx(22/75)
      },

      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        // lineStyle: {
        //   color: '#414f65',
        //   type: 'dashed'
        // }
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#868d96'
          // width: 1
        }
      }
    }],
    series: data.series
  };
  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  myChart.clear();
  myChart.resize({
    width: clientWidth
  });
  myChart.setOption(option);
};
export const brainLineAndBarChart3 = (id, data, barWidth, rotate, gridBottom) => {
  // let colorList = ['#3a8be6 ', '#06e2e6', '#ffcd47', '#09388f', '#ff789b', '#7ca66', "#1d866c", "#734c9e"]
  let colorlist = ["#71bcff", "#1a79c8","#f99b37","#39c77f"]
  for (let i = 0; i < data.series.length; i++) {
    if (data.series[i].type == 'bar') {
      data.series[i].barWidth = barWidth ? barWidth :remToPx(25/75);
      // data.series[i].barCategoryGap = '20%';
      data.series[i].barGap = '0%';
      data.series[i].itemStyle = {
        normal: {
          color: colorlist[i],
          // borderWidth:remToPx(5/75),
        },
        // barGap:'100%',
        // barCategoryGap:'0',
      }
    } else if (data.series[i].type == 'line') {
      data.series[i].showAllSymbol = false;
      data.series[i].showSymbol=false
      data.series[i].itemStyle = {
        normal: {
          color: '#39c77f', //拐点颜色
          borderWidth:remToPx(3/75),
          borderColor: '#39c77f',
        }
      };
      data.series[i].lineStyle = {
        type:'solid',
        normal: {
          width:remToPx(5/75),
          color: "#39c77f",
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowBlur: 5,
          shadowOffsetY: 2
        },
        borderColor: '#39c77f',

      };
    }
  }
  let option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      // borderColor: '#48607f',
      // borderWidth:3,
      textStyle: {
        fontSize: remToPx(22/75),
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
      },
      padding: [remToPx(10/75),remToPx(15/75)],
      axisPointer: {
        type: 'none',
      }
    },
    // tooltip: {
    //   trigger: 'axis',
    //   backgroundColor: 'rgba(9, 20, 37, 0.75)',
    //   borderColor: '#48607f',
    //   borderWidth:3,
    //   textStyle: {
    //     fontSize: 16,
    //     color: '#fff',
    //     fontFamily: 'PingFang-SC-Medium',
    //   },
    //   padding: [5, 10],
    //   axisPointer: {
    //     type: 'none',
    //   }
    // },
    grid: {
      left: data.gridLeft ? data.gridLeft : remToPx(65/75),
      right: data.gridRight ? data.gridRight : remToPx(40/75),
      top: data.gridTop ? data.gridTop : remToPx(114/75),
      bottom: data.gridBottom ? data.gridBottom : remToPx(60/75),
    },
    legend: [{
      data: data.legends.slice(0,3),
      top:  remToPx(45/75),
      itemHeight: remToPx(15/75),
      left:remToPx(40/75),
      icon: 'rect',
      itemWidth: remToPx(15/75),
      textStyle: {
        color: "black",
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Medium',
      }
    },
      {
        data: data.legends.slice(3,4),
        top:  remToPx(45/75),
        right:remToPx(6/75),
        itemHeight: remToPx(16/75),
        itemWidth: remToPx(36/75),
        textStyle: {
          color: "black",
          fontSize: remToPx(22/75),
          fontFamily: 'PingFang-SC-Medium',
        }
      },],
    xAxis: {
      show: true,
      type: 'category',
      // boundaryGap: false,
      data: data.xaxis,

      axisLabel: {
        rotate: 0,
        interval:0, //设置这里
        color: 'black',
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Bold',
        formatter: function(params) {
          return params.slice(5, 7) + "月";
        },
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#e1e1e1',
          // color: 'red',
        }
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#e1e1e1',
          // color: 'red',
        }
      },
    },
    yAxis: [{
      show: true,
      nameTextStyle: {
        color: '#868d96',
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Medium',
      },
      type: 'value',
      position: 'left',
      axisLabel: {
        margin: remToPx(10/75),
        color: '#868d96',
        fontSize: remToPx(22/75),
      },

      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#e1e1e1',
          // color: 'red',
        }
      },

      axisLine: {
        show: true,
        lineStyle: {
          color: '#e1e1e1',
          // width:remToPx(1/75)
        }
      }
    }, {
      show: true,
      nameTextStyle: {
        color: '#868d96',
        fontSize: remToPx(22/75),
      },
      type: 'value',
      position: 'right',
      axisLabel: {
        margin: 5,
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
        fontSize: remToPx(22/75),
      },

      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#e1e1e1',
          // color: 'red',
        }
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#868d96',
          width: 1
        }
      }
    }],
    series: data.series
  };
  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  myChart.clear();
  myChart.resize({
    width: clientWidth
  });
  myChart.setOption(option);
};
//环状饼图
export const brainPieChartCircle = (id, data) => {

  var ary = data.series[0].data;
  let ary2 = [];
  ary.forEach(a=>{
    ary2.push(a.value);
  });
  let datacount = eval(ary2.join('+'));
  let option = {
    title:[{
      text: datacount.toFixed(2),
      x:'26%',
      y:'43%',
      textAlign: "center",

      textStyle: {
        color: '#1c1c1c',
        fontSize: remToPx(46/75),
        fontWeight: 'normal',
        fontFamily: 'DIN-Medium',
      },
    },{
      text: "(亿元)",
      // subtext:"(亿元)",
      y: '56%',
      textAlign: "center",
      x: '26.5%',
      textStyle: {
        color: 'rgba(28,28,28,0.6)',
        fontSize: remToPx(24/75),
        fontWeight: "normal",
      },
      // subtextStyle:{
      //   left: "50%",
      // },
    },
    ],
    legend: {
      right: remToPx(75/75),
      top: 'center',
      itemHeight: remToPx(12/75),
      itemWidth: remToPx(12/75),
      itemGap: remToPx(18/75),
      orient: 'vertical',
      align: 'left',
      textStyle: {
        color: "#353535",
        fontSize: remToPx(22/75),

        rich:{
          a:{
            align: 'left',
            width: remToPx(70/75),
            fontSize: remToPx(24/75),
            padding: [0, 0, 0, remToPx(10/75)],
            color:"#353535",
            fontFamily: 'PingFang-SC-Medium',

          },
          b:{
            fontSize: remToPx(24/75),
            color:"#353535",
            padding: [0, remToPx(0/75), 0,remToPx(12/75)],
            width:remToPx(70/75),
            align:"right",
            fontFamily: 'PingFang-SC-Medium',
            fontWeight: '600',
          }
        }
      },
      icon: 'circle',
      formatter: function(params) {
        let datas = data.series[0].data

        let tarValue = 0.0;
        for (let i = 0, l = datas.length; i < l; i++) {

          if (datas[i].name == params) {
            tarValue = datas[i].value.toFixed(2);
          }
        }

        let arr=["{a|"+params+"}   {b|"+tarValue+"}"]
        return arr
      },

      data: data.legends
    },
    color: ['#1a79c9', '#71bcff', '#29b3cc', '#39c77f', '#f99b37','#ef5150','#f9db63'],
    // tooltip: {
    //   trigger: 'item',
    //   formatter: '{b} : {c}%'
    // },
    series: {
      type: 'pie',
      clockWise: true,
      radius: [remToPx(100/75), remToPx(150/75)],
      hoverAnimation: true,
      silent: false,
      center: ['27%', '50%'],
      label: {
        normal: {
          show: false,
          formatter: ""
        }
      },
      labelLine: {
        normal: {
          show: false,
          length2: 0,
          length: 5
        }
      },
      emphasis: {
        label: {
          show: true
        }
      },
      data: data.series[0].data
    }
  };
  let myChart = echarts.init(document.getElementById(id));
  myChart.clear();
  myChart.setOption(option);
};

// 多个条形图
export const brainMultiBarChartForMarine = (id, data, barWidth) => {
  console.log("jasksjkasj",data)
  let series = [];

  let colorlist= ["#1a79c8","#39c77f","#f99b37",""]
  let length = data.series.length;
  for (let i = 0; i < length; i++) {
    series.push({
      name: data.series[i].name,
      type: 'bar',
      barWidth: barWidth ? barWidth : remToPx(25/75),
      barGap: "0%",
      itemStyle: {
        normal: {
          color: colorlist[i],


        }
      },
      data: data.series[i].data
    })
  }
  let option = {
    tooltip: {
      trigger: 'axis',
      itemHeight: remToPx(20/75),
      itemWidth: remToPx(20/75),
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      // borderColor: '#48607f',
      // borderWidth:3,
      textStyle: {
        fontSize: remToPx(22/75),
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
      },
      padding: [5, 10],
      axisPointer: {
        type: 'none',
      }
    },
    grid: {
      left: data.gridLeft ? data.gridLeft : remToPx(65/75),
      right: data.gridRight ? data.gridRight : remToPx(40/75),
      top: data.gridTop ? data.gridTop : remToPx(102/75),
      bottom: data.gridBottom ? data.gridBottom : remToPx(60/75),
    },
    legend: {
      right: remToPx(30/75),
      top: remToPx(30/75),
      // icon: 'circle',
      itemHeight: remToPx(15/75),
      itemWidth: remToPx(15/75),
      itemGap: 20,
      icon: 'rect',
      textStyle: {
        color: "black",
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Medium',
      },
      formatter: function(params) {
        //   if(params.length>5) {
        //     return params.slice(0,5)+'...';
        //   }else {
        //     return params;
        //   }
        return params;
      },
      data: data.legends
    },
    xAxis: {
      show: true,
      type: 'category',
      // boundaryGap: false,
      data: data.xaxis,

      axisLabel: {
        rotate: 0,
        interval:0, //设置这里
        color: 'black',
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Bold',
        formatter: function(params) {
          return params.slice(5, 7) + "月";
        },
      },
      axisLine: {
        show: false,
        // lineStyle: {
        //   color: '#868d96',
        // }
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#e1e1e1',
          // color: 'red',
        }
      },
    },
    yAxis: [{
      show: true,
      nameTextStyle: {
        color: '#868d96',
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Medium',
      },
      type: 'value',
      position: 'left',
      axisLabel: {
        margin: 5,
        color: '#868d96',
        fontSize: remToPx(22/75),
      },

      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#e1e1e1',
          // color: 'red',
        }
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#868d96',
          width: 1
        }
      }
    }, {
      show: true,
      nameTextStyle: {
        color: '#868d96',
        fontSize: remToPx(22/75),
      },
      type: 'value',
      position: 'right',
      axisLabel: {
        margin: 5,
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
        fontSize: remToPx(22/75),
      },

      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#e1e1e1',
          // color: 'red',
        }
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#868d96',
          width: 1
        }
      }
    }],
    series: series
  };
  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  myChart.clear();
  myChart.resize({
    width: clientWidth
  });
  myChart.setOption(option);
};
export const brainMultiBarChartForMarine3 = (id, data, barWidth) => {

  let series = [];

  let colorlist= ["#71bcff","#1a79c9","#39c77f","#f99b37","#ef5150"]
  let length = data.series.length;
  for (let i = 0; i < length; i++) {
    series.push({
      name: data.series[i].name,
      type: 'bar',
      barWidth: barWidth ? barWidth : remToPx(15/75),
      barGap: "0%",
      itemStyle: {
        normal: {
          color: colorlist[i],


        }
      },
      data: data.series[i].data
    })
  }
  let option = {
    tooltip: {
      trigger: 'axis',
      itemHeight: remToPx(20/75),
      itemWidth: remToPx(20/75),
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      // borderColor: '#48607f',
      // borderWidth:3,
      textStyle: {
        fontSize: remToPx(22/75),
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
      },
      padding: [remToPx(20/75), remToPx(20/75)],
      axisPointer: {
        type: 'none',
      }
    },
    grid: {
      left: data.gridLeft ? data.gridLeft : remToPx(65/75),
      right: data.gridRight ? data.gridRight : remToPx(40/75),
      top: data.gridTop ? data.gridTop : remToPx(104/75),
      bottom: data.gridBottom ? data.gridBottom : remToPx(60/75),
    },
    legend: {
      right: '4%',
      top: '6.5%',
      icon: 'rect',
      itemHeight: remToPx(15/75),
      itemWidth: remToPx(15/75),
      itemGap: 30,
      textStyle: {
        color: "black",
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Medium',
      },
      formatter: function(params) {
        //   if(params.length>5) {
        //     return params.slice(0,5)+'...';
        //   }else {
        //     return params;
        //   }
        return params;
      },
      data: data.legends
    },
    xAxis: {
      show: true,
      type: 'category',
      // boundaryGap: false,
      data: data.xaxis,

      axisLabel: {
        rotate: 0,
        interval:0, //设置这里
        color: 'black',
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Bold',
        formatter: function(params) {
          return params.slice(5, 7) + "月";
        },
      },
      axisLine: {
        show: false,
        // lineStyle: {
        //   color: '#868d96',
        // }
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#e1e1e1',
          // color: 'red',
        }
      },
    },
    yAxis: [{
      show: true,
      nameTextStyle: {
        color: '#868d96',
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Medium',
      },
      type: 'value',
      position: 'left',
      axisLabel: {
        margin: 5,
        color: '#868d96',
        fontSize: remToPx(22/75),
      },

      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#e1e1e1',
          // color: 'red',
        }
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#868d96',
          width: 1
        }
      }
    }, {
      show: true,
      nameTextStyle: {
        color: '#868d96',
        fontSize: remToPx(22/75),
      },
      type: 'value',
      position: 'right',
      axisLabel: {
        margin: 5,
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
        fontSize: remToPx(22/75),
      },

      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#e1e1e1',
          // color: 'red',
        }
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#868d96',
          width: 1
        }
      }
    }],
    series: series
  };
  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  myChart.clear();
  myChart.resize({
    width: clientWidth
  });
  myChart.setOption(option);
};
export const brainMultiBarChartForMarine2 = (id, data, barWidth) => {
  console.log("jasksjkasj",data)
  let series = [];

  let colorlist= ["#71bcff","#1a79c9","#f09b3b"]
  let length = data.series.length;
  for (let i = 0; i < length; i++) {
    series.push({
      name: data.series[i].name,
      type: 'bar',
      barWidth: barWidth ? remToPx(barWidth/75) :  remToPx(20/75),
      barGap: "46%",
      itemStyle: {
        normal: {
          color: colorlist[i],
          borderWidth: 0
        }
      },
      data: data.series[i].data
    })
  }
  let option = {
    tooltip: {
      trigger: 'axis',

      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      // borderColor: '#48607f',
      // borderWidth:3,
      textStyle: {
        fontSize: remToPx(22/75),
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
      },
      padding: [5, 10],
      axisPointer: {
        type: 'none',
      }
    },
    grid: {
      left: data.gridLeft ? data.gridLeft : remToPx(100/75),
      right: data.gridRight ? data.gridRight : remToPx(30/75),
      top: data.gridTop ? data.gridTop : remToPx(60/75),
      bottom: data.gridBottom ? data.gridBottom : remToPx(20/75),
    },
    legend: {
      right: remToPx(24/75),
      top: '2%',
      icon: 'rect',
      itemHeight: remToPx(12/75),
      itemWidth: remToPx(12/75),
      textStyle: {
        color: '#353535',
        fontFamily: 'PingFang-SC-Medium',
        fontSize: remToPx(22/75),
      },
      formatter: function(params) {
        //   if(params.length>5) {
        //     return params.slice(0,5)+'...';
        //   }else {
        //     return params;
        //   }
        return params;
      },
      data: data.legends
    },
    xAxis: {
      show: false,
      // type: 'category',
      type: 'value',
      // boundaryGap: false,
      // data: data.xaxis,
      axisLabel: {
        // margin: 5,
        color: '#353535',
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Medium',
        interval: 0,
        // formatter: function(params) {
        //   return params.slice(5, 7) + "月";
        // },
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#868d96',
          width: 1
        }
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      }
    },
    yAxis: [{
      show: true,
      data: data.xaxis,
      // name: data.yaxis[0] === null ? '' : '(' + data.yaxis[0] + ')',
      nameTextStyle: {
        color: "black",
        padding: [10, 0, 0, 0],
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Medium',
      },
      axisLine:{
        show:false
      },

      position: 'left',
      axisLabel: {
        margin: 5,
        color: 'black',
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Medium'
      },

      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
        // lineStyle: {
        //   color: '#414f65',
        //   type: 'dashed'
        // }
      },

    }, ],
    series: series
  };
  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  myChart.clear();
  myChart.resize({
    width: clientWidth
  });
  myChart.setOption(option);
};

//   //进度条
export const  progesscharts = (id,data) => {
  console.log("hh销h",data)
  let  option = {

    title: {
      textStyle: {
        color: 'black',
        fontSize: '12',
      }
    },
    grid: {
      // top: '20%',
      // left: '0',
      right:"28%",
      // bottom: '0',
      // containLabel: true
    },
    yAxis: [{
      type: 'category',
      // data: ['全年目标'],
      inverse: true,
      axisTick: {
        show: false
      },
      // axisLabel: {
      //   margin: 20,
      //   textStyle: {
      //     fontSize: 14,
      //     color: 'black'
      //   }
      // },
      axisLine: {
        show: false
      }
    }],
    xAxis: [{
      type: 'value',
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      }
    }],
    series: [{
      type: 'bar',
      barWidth:10,
      data: data,
      label: {
        // normal: {
        //   show: true,
        //   position: 'insideBottomRight',
        //   formatter: '{c}%',
        //   distance: 0,
        //   offset: [30, -20],
        //   color: '#1f2e42',
        //   fontSize: 14,
        //   padding: [5, 5, 5, 5],
        //   // borderWidth:50,
        //   backgroundColor:"#ed8a16",
        //   borderRadius:15,
        // }
      },
      itemStyle: {
        normal: {
          // barBorderRadius: 5,
          color: 'red'
        },
      },
    }, {
      type: "bar",
      barWidth:10,
      xAxisIndex: 0,
      barGap: "-100%",
      data: [100],
      itemStyle: {
        normal: {
          color: "#dfe8f1",
          // barBorderRadius: 5
        }
      },
      zlevel: -1
    }
    ]
  };
  let myChart = echarts.init(document.getElementById(id));
  myChart.clear();
  myChart.setOption(option);
};
export const  progesscharts2 = (id,data) => {
  var  getmyd=[data];
  var getmydzd =[];
  for (let i = 0; i < getmyd.length; i++) {
    getmydzd.push(100)
  }
  var aaa = [];
  getmyd.forEach(g=>{
    aaa.push(Math.abs(g));
  });
  let option = {
    grid: {
      left:remToPx(15/75),
     right:remToPx(90/75)
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
    },
    xAxis: {
      show: false,
      type: 'value'
    },
    yAxis: [{
      type: 'category',
      inverse: true,
      axisLabel: {
        textStyle: {
          color: '#666666',
          fontSize:  remToPx(22/75)
        },
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },

    }, {
      // type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      show: true,
      // width:remToPx(100/75),
      // axisLabel: {
      //   textStyle: {
      //     color: '#333333',
      //     fontSize:  remToPx(22/75),
      //
      //     backgroundColor:'red',
      //     // textAlign:'right',
      //     position:'right',
      //     padding: [remToPx(10/75),0,remToPx(10/75),0],
      //   },
      //   formatter: function(value) {
      //     return value +"%";
      //
      //   },
      // },
      axisLabel: {
        show: true,
        // inside: false,

        textStyle: {
          color: '#1c1c1c',
          align:'right',
          // position:,
          // width:60,
          // backgroundColor:'red',
          fontFamily: 'PingFang-SC-Medium',
          fontSize:  remToPx(22/75),
          padding:[remToPx(0/75),remToPx(-70/75),remToPx(0/75),0],
          // fontFamily: 'PingFangSC-Regular'
        },
        formatter: function (val) {

          return val + "%"
        }
      },
      data:getmyd,
    }],
    series: [{
      name: '值',
      type: 'bar',
      zlevel: 1,

      itemStyle: {
        normal: {

          color: '#39c77f'
        },
      },
      barWidth: remToPx(10/75),
      data: aaa
    },
      {
        name: '背景',
        type: 'bar',
        barWidth: remToPx(10/75),
        barGap: '-100%',
        data: getmydzd,
        itemStyle: {
          normal: {
            color: '#dfe8f1',
          }
        },
      },
    ]
  };
  let myChart = echarts.init(document.getElementById(id));
  myChart.clear();
  myChart.setOption(option);
};
export const  progesscharts3 = (id,data) => {
  // console.log("2222222222222",data)
  var  getmyd=[data];
  var getmydzd =[];
  for (let i = 0; i < getmyd.length; i++) {
    getmydzd.push(100)
  }
  var aaa = [];
  getmyd.forEach(g=>{
    aaa.push(Math.abs(g));
  });
  let option = {
    grid: {
     right: remToPx(90/75),
      left:remToPx(15/75)
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
      // formatter: function(params) {
      //   return '学生满意度<br>'+ params[0].name  + ': ' + params[0].value+'%'
      // }
    },
    xAxis: {
      show: false,
      type: 'value'
    },
    yAxis: [{
      type: 'category',
      inverse: true,
      axisLabel: {
        textStyle: {
          color: '#666666',
          fontWeight: 'normal',
          fontFamily: 'PingFang-SC-Medium',
          fontSize:  remToPx(22/75)
        },
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },

    }, {
      type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      show: true,
      axisLabel: {
        show: true,
        inside: false,

        textStyle: {
          color: '#333333',
          align:'right',
          width:60,
          // backgroundColor:'red',
          fontSize:  remToPx(22/75),
          padding:[remToPx(0/75),remToPx(-68/75),remToPx(0/75),0],
          fontFamily: 'PingFang-SC-Medium',
          fontWeight: 'normal',
        },
        formatter: function (val) {

          return val + "%"
        }
      },
      data:getmyd,
    }],
    series: [{
      name: '值',
      type: 'bar',
      zlevel: 1,

      itemStyle: {
        normal: {

          color: '#39c77f'
        },
      },
      barWidth: remToPx(10/75),
      data: aaa
    },
      {
        name: '背景',
        type: 'bar',
        barWidth: remToPx(10/75),
        barGap: '-100%',
        data: getmydzd,
        itemStyle: {
          normal: {
            color: '#dfe8f1',
          }
        },
      },
    ]
  };
  let myChart = echarts.init(document.getElementById(id));
  myChart.clear();
  myChart.setOption(option);
};


export const horizontalBars = (id, data) => {
  console.log("jjjjjjjjjjjj",data)
// yData为左侧系列名称，barData为数据值，bgData为底色值，底色值为100或大于100的最大值；
// 请自行调整下系列名称超长时的省略显示，使用formatter调整；
  let yData = data.xaxis;
  let barData = data;
  let bgData = [];
  let colorList = data.colorList ? data.colorList : ['#1a79c9', '#46aafd'];
  let maxData = Math.max(...barData);
  maxData = maxData>100 ? maxData : 100;
  while (bgData.length < barData) {
    bgData[bgData.length] = 100;
  }
  let paddingLeft = data.paddingLeft ? data.paddingLeft : '-75';
  // console.log('11',colorList)
  let option = {
    grid: {
      left: '16%',
      right: '18%',
      bottom: '5%',
      top: '10%',
    },
    xAxis: {
      show: false,
      type: 'value'
    },
    yAxis: [{
      type: 'category',
      inverse: true,
      axisLabel: {
        show: true,
        textStyle: {
          fontSize: remToPx(24/75),
          fontFamily: 'PingFang-SC-Medium',
          color: '#1c1c1c',
          align: 'left',
          padding: [remToPx(10/75),0,0,remToPx(paddingLeft/75)]
        },
        formatter: function(value) {
          return value;
          // return '<div style="display:inline-block; width:500px;">' + value+ '</div>';
        },
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      // data: yData
    }, {
      type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      show: true,
      axisLabel: {
        textStyle: {
          color: colorList[1],
          fontSize: remToPx(24/75),
          fontFamily: 'PingFang-SC-Bold',
          padding: [remToPx(10/75),0,0,remToPx(0/75)],
        },
        formatter: function(value) {
          return value + '%';
        },
      },
      data: barData
    }],
    series: [{
      name: '',
      type: 'bar',
      zlevel: 1,
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0,
              color: colorList[0] // 0% 处的颜色
            }, {
              offset: 1,
              color:  colorList[1], // 100% 处的颜色
            }],
            // opacity: 0.2,
            global: false // 缺省为 false
          }
        },
      },
      barWidth: remToPx(25/75),
      data: barData
    },
      {
        name: '背景',
        type: 'bar',
        barWidth: remToPx(25/75),
        barGap: '-100%',
        data: bgData,
        itemStyle: {
          normal: {
            color: '#fff',
            // barBorderRadius: remToPx(8/75),
          }
        },
      },
    ]
  };
  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  const clientHeight = client.clientHeight;
  myChart.clear();
  myChart.resize({width: clientWidth, height: clientHeight});
  myChart.setOption(option);
};

