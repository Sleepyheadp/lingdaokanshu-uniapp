import echarts from "echarts";
import jiangmenData from "./data.json";

// 热力图
export const heatChart = (id, data) => {
  let sdata =data;
  let areaData = [
    {
      name: '蓬江区',
      value: sdata[1]
    },
    {
      name: '江海区',
      value: sdata[2]
    },
    {
      name: '新会区',
      value: sdata[0]
    },
    {
      name: '台山市',
      value: sdata[6]
    },
    {
      name: '开平市',
      value: sdata[3]
    },
    {
      name: '鹤山市',
      value: sdata[5]
    },
    {
      name: '恩平市',
      value: sdata[4]
    },
  ];
  echarts.registerMap('xxx', jiangmenData);
  let myChart = echarts.init(document.getElementById(id));

  let option = {
    backgroundColor: '#fff',
    tooltip: {
      formatter:'{b}:{c}%',
      show: true,
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
        emphasis: {
          // 鼠标移入颜色
          areaColor: '#409EFF',
          borderWidth: 0,
        }
      }
    },
    visualMap: {
      textStyle: {
        fontSize: '10',
        color: '#7B93A7'
      },
      orient: 'horizontal',
      type: 'piecewise',
      show: true,
      left: 'center',
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
      name: '蓬江区',
      value: sdata[1]
    },
    {
      name: '江海区',
      value: sdata[2]
    },
    {
      name: '新会区',
      value: sdata[0]
    },
    {
      name: '台山市',
      value: sdata[6]
    },
    {
      name: '开平市',
      value: sdata[3]
    },
    {
      name: '鹤山市',
      value: sdata[5]
    },
    {
      name: '恩平市',
      value: sdata[4]
    },
  ];
  echarts.registerMap('xxx', jiangmenData);
  let myChart = echarts.init(document.getElementById(id));

  let option = {
    backgroundColor: '#fff',
    tooltip: {
      formatter:'{b}:{c}%',
      show: true,
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
        emphasis: {
          // 鼠标移入颜色
          areaColor: '#409EFF',
          borderWidth: 0,
        }
      }
    },
    visualMap: {
      textStyle: {
        fontSize: '10',
        color: '#7B93A7'
      },
      orient: 'horizontal',
      type: 'piecewise',
      show: true,
      left: 'center',
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
  // console.log("yyyyyy2323万千瓦若无若123",datacount)
  let option = {
    title: {
      text: datacount,
      top: '45%',
      textAlign: "center",
      left: "48%",
      textStyle: {
        color: '#353535',
        fontSize: 16,
        fontWeight: 'bold',
        rich:{
          a:{
            fontSize:14,
            color:"#353535",
            padding:7
          },
          b:{
            fontSize:14,
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
      center: ['50%', '50%'],
      labelLine: {
        show:false,
        length2:-22,
        length: -22,
      },
      roseType: 'area',
      label: {
        textStyle:{
          color:"#353535",
          // fontSize:13,
        },
        // formatter: '●{b}：{d}%\n\n   {c}',
        formatter: params => {
          // console.log("00000",params);
          let aa = params.name.slice(0,4)
          console.log("住",aa)
            return ('{icon|●}{name|' + aa + '} {value|' + params.percent + '%}\n\n{aaa|'+params.value+'}'
        );

      },
        rich: {
          icon: {
              fontSize: 12
          },
          name: {
            fontSize: 14,
            color: '#353535'
          },
          value: {
            fontSize: 14,
            color: '#353535'
          },
          aaa: {
            padding:[0,30],
            fontSize: 14,
            color: '#353535'
          }
        },
        // normal: { show: labelShow?true:false, formatter: "" }
        backgroundColor: 'rgba(255,255,255,0.85)',
        borderColor: 'rgba(238,238,238,0.85)',
        padding: [16,10],
        borderWidth: 1,
        borderRadius: 4,
        shadowBlur:2,
        shadowOffsetX:1,
        shadowOffsetY: 1,
        // shadowColor: 'rgba(238,238,238,0.85)',
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
      borderColor: '#48607f',
      borderWidth: 1,
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
      itemHeight:8,
      itemWidth:8,
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
          color: "black"
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
            fontSize: '12',
            fontFamily: 'PingFang-SC-Medium',
            color: 'black'
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
          margin: 5,
          color: '#fff',
          fontFamily: 'PingFang-SC-Medium',
          fontSize: 16
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
            color: '#868d96',
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
  const colorList = ["#1a79c9", '#39c77f', '#fe9a8b', '#F56948', '#9E87FF']
  let option = {
    // backgroundColor: '#fff',
    title: {
      // text: '全国6月销售统计',
      textStyle: {
        fontSize: 12,
        fontWeight: 400
      },
      left: 'center',
      top: '5%'
    },
    legend: {
      color:["#1a79c9", '#39c77f'],
      data: data.legends,
      icon: 'circle',
      top: '5%',
      right: '5%',
      itemWidth: 6,
      itemGap: 20,
      textStyle: {
        color: '#556677'
      }
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      borderColor: '#48607f',
      borderWidth:4,
      textStyle: {
        fontSize: 12,
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
      },
      padding: [5, 10],
      axisPointer: {
        type: 'none',
      }
    },
    grid: {
      top: '20%',
      right:"15%",
      bottom:"12%"
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
        interval: 3,
        textStyle: {
          color: '#556677'
        },
        // 默认x轴字体大小
        fontSize: 12,
        // margin:文字到x轴的距离
        margin: 15
      },
      splitLine: {
        show: true,
      },
      axisPointer: {
        label: {
          padding: [0, 0, 10, 0],
          margin: 15,
          fontSize: 12,
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
              /*
0.86 = （文字 + 文字距下边线的距离）/（文字 + 文字距下边线的距离 + 下边线的宽度）

              */
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
          color: '#DCE2E8'
        }
      },
      axisLabel: {
        textStyle: {
          color: '#556677'
        }
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
          color: '#556677'
        },
        formatter: '{value}'
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#DCE2E8'
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
      symbolSize: 1,
      // symbol: 'circle',
      // smooth: true,
      yAxisIndex: 0,
      showSymbol: false,
      lineStyle: {
        width: 3,
        shadowColor: 'rgba(158,135,255, 0.3)',
        shadowBlur: 10,
        shadowOffsetY: 20
      },
      //   lineStyle: {
      //     width: 3,
      //     color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
      //       offset: 0,
      //       color: 'blue'
      //     },
      //       {
      //         offset: 1,
      //         color: '#9E87FF'
      //       }
      //     ]),
      //     shadowColor: 'rgba(158,135,255, 0.3)',
      //     shadowBlur: 10,
      //     shadowOffsetY: 20
      //   },
        itemStyle: {
          normal: {
            color: colorList[0],
            borderColor: colorList[0]
          }
        },

      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(108,80,243,0.3)'
          },
            {
              offset: 1,
              color: 'rgba(108,80,243,0)'
            }
          ], false),
          shadowColor: 'rgba(108,80,243, 0.9)',
          shadowBlur: 20,
          origin:'start',
          opacity:0.15
        }
      },

    },
      {
        name: data2.name,
        type: 'line',
        data: data2.data,
        symbolSize: 1,
        yAxisIndex: 1,
        // symbol: 'circle',
        // smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 3,
          shadowColor: 'rgba(158,135,255, 0.3)',
          shadowBlur: 10,
          shadowOffsetY: 20,

        },
        // lineStyle: {
        //   width: 3,
        //   color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
        //     offset: 0,
        //     color: 'blue'
        //   },
        //     {
        //       offset: 1,
        //       color: '#9E87FF'
        //     }
        //   ]),
        //   shadowColor: 'rgba(158,135,255, 0.3)',
        //   shadowBlur: 10,
        //   shadowOffsetY: 20
        // },
        areaStyle: {
          normal: {

            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(0,202,149,0.3)'
            },
              {
                offset: 1,
                color: 'rgba(0,202,149,0)'
              }
            ], false),
            shadowColor: 'rgba(0,202,149, 0.9)',
            shadowBlur: 20,
            origin:'start',
            opacity:0.15
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
      data.series[i].barWidth = barWidth ? barWidth : 6;
      data.series[i].itemStyle = {
        normal: {
          color: colorlist[i],
          borderWidth: 3,
        }
      }
    } else if (data.series[i].type == 'line') {
      data.series[i].showAllSymbol = false;
      data.series[i].lineStyle = {
        normal: {
          color: "#ff4653",
        },
        borderColor: '#FF7997'
      };
    }
  }
  let option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      borderColor: '#48607f',
      borderWidth:4,
      textStyle: {
        fontSize: 12,
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
      },
      padding: [5, 10],
      axisPointer: {
        type: 'none',
      }
    },
    grid: {
      top: '23%',
      left: "8%",
      right: '5%',
      bottom:"8%"
    },
    legend: {
      data: data.legends,
      top: '4%',
      itemHeight:8,
      itemWidth:8,
      textStyle: {
        color: "black",
        fontSize: 12,
        fontFamily: 'PingFang-SC-Medium',
      }
    },
    xAxis: {
      show: true,
      type: 'category',
      // boundaryGap: false,
      data: data.xaxis,

      axisLabel: {
        rotate: 0,
        interval: 4, //设置这里
        color: 'black',
        fontSize: 12,
        fontFamily: 'PingFang-SC-Bold',
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#868d96',
        }
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
      }
    },
    yAxis: [{
      show: true,
      nameTextStyle: {
        color: '#868d96',
        fontSize: 12,
        fontFamily: 'PingFang-SC-Medium',
      },
      type: 'value',
      position: 'left',
      axisLabel: {
        margin: 5,
        color: '#868d96',
        fontSize: 12
      },

      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
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
        fontSize: 16,
      },
      type: 'value',
      position: 'right',
      axisLabel: {
        margin: 5,
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
        fontSize: 16
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
export const brainLineAndBarChart3 = (id, data, barWidth, rotate, gridBottom) => {
  // let colorList = ['#3a8be6 ', '#06e2e6', '#ffcd47', '#09388f', '#ff789b', '#7ca66', "#1d866c", "#734c9e"]
  let colorlist = ["#71bcff", "#1a79c8","#f99b37","green"]
  for (let i = 0; i < data.series.length; i++) {
    if (data.series[i].type == 'bar') {
      data.series[i].barWidth = barWidth ? barWidth :10;
      // data.series[i].barCategoryGap = '20%';
      data.series[i].barGap = '0%';
      data.series[i].itemStyle = {
        normal: {
          color: colorlist[i],
          borderWidth:10,
        },
        // barGap:'100%',
        // barCategoryGap:'0',
      }
    } else if (data.series[i].type == 'line') {
      // data.series[i].symbol = 'none';
      data.series[i].showAllSymbol = true;
      data.series[i].yAxisIndex = 1;
      data.series[i].symbolSize = 0;
      data.series[i].itemStyle = {
        normal: {
          color: '#39c77f', //拐点颜色
          borderColor: '#39c77f',
        }
      };
      data.series[i].lineStyle = {
        // type:'solid',
        normal: {
          color: "#39c77f",
        },
        borderColor: '#39c77f'
      };
    }
  }
  let option = {
    tooltip: {
      trigger:'axis',
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      axisPointer: {
        show:true,
        type: 'shadow',
        shadowStyle:{
          color:'#f3f8fc',
          zIndex:-100,
          opacity:0.3
        },

      },

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
      top: '20%',
      left: '8%',
      right: '2%',
      bottom: '15%',

    },
    legend: {
      data: data.legends,
      top: '4%',
      itemHeight:8,
      itemWidth:8,
      textStyle: {
        color: "black",
        fontSize: 12,
        fontFamily: 'PingFang-SC-Medium',
      }
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
        fontSize: 16,
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
      }
    },
    yAxis: [{
      show: true,
      nameTextStyle: {
        color: '#868d96',
        fontSize: 16,
        fontFamily: 'PingFang-SC-Medium',
      },
      type: 'value',
      position: 'left',
      axisLabel: {
        margin: 5,
        color: '#868d96',
        fontSize: 16
      },

      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
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
        fontSize: 16,
      },
      type: 'value',
      position: 'right',
      axisLabel: {
        margin: 5,
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
        fontSize: 16
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
  console.log("yyyyyy2323123",datacount)
  let option = {
    title:[{
      text: datacount,
       x:"28%",
       y:"40%",
      textAlign: "center",

      textStyle: {
        color: '#353535',
        fontSize: 20,
        fontWeight: 'bold',
      },
    },{
      text: "(亿元)",
      // subtext:"(亿元)",
      top: '48%',
      textAlign: "center",
      left: "28%",
      textStyle: {
        color: 'rgba(28,28,28,0.6)',
        fontSize:14,
        fontWeight: "normal",
      },
      subtextStyle:{
        left: "50%",
      },
    },
    ],
    legend: {
      left:"55%",
      right: 'center',
      bottom: "14%",
      textStyle: {
        color: "#353535",
        fontSize:"16",

        rich:{
          a:{
            fontSize:14,
            color:"#353535",

          },
          b:{
            fontSize:14,
            color:"#353535",

            // textAlign:"right",
          }
        }
      },
      icon: 'circle',
      formatter: function(params) {
        let datas = data.series[0].data

        let tarValue = 0.0;
        for (let i = 0, l = datas.length; i < l; i++) {

          if (datas[i].name == params) {
            tarValue = datas[i].value;
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
      radius: ['40%', '50%'],
      hoverAnimation: true,
      silent: false,
      center: ['30%', '50%'],
      label: {
        normal: {
          show: false,
          formatter: ""
        }
      },
      labelLine: {
        normal: {
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

  let series = [];

  let colorlist= ["#1a79c8","#06e2e6","#f99b37",""]
  let length = data.series.length;
  for (let i = 0; i < length; i++) {
    series.push({
      name: data.series[i].name,
      type: 'bar',
      barWidth: barWidth ? barWidth : 10,
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

      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      borderColor: '#48607f',
      borderWidth:3,
      textStyle: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
      },
      padding: [5, 10],
      axisPointer: {
        type: 'none',
      }
    },
    grid: {
      top: '20%',
      left: '8%',
      right: '2%',
      bottom: '15%',
    },
    legend: {
      left: 'center',
      top: '4%',
      // icon: 'circle',
      itemWidth:8,
      itemHeight:8,
      textStyle: {
        color: '#353535',
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
        // margin: 5,
        color: '#353535',
        fontSize: 16,
        fontFamily: 'PingFang-SC-Medium',
        interval: 0,
        formatter: function(params) {
          return params.slice(5, 7) + "月";
        },
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#868d96',
          width: 1
        }
      },
      axisTick: {
        show: true,
      },
      splitLine: {
        show: true,
      }
    },
    yAxis: [{
      show: true,
      // name: data.yaxis[0] === null ? '' : '(' + data.yaxis[0] + ')',
      nameTextStyle: {
        color: "#868d96",
        padding: [10, 0, 0, 0],
        fontSize: 16,
        fontFamily: 'PingFang-SC-Medium',
      },
      type: 'value',
      position: 'left',
      axisLabel: {
        margin: 5,
        color: '#868d96',
        fontSize: 16,
        fontFamily: 'PingFang-SC-Medium'
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
          color: '#868d96',
          width: 1
        }
      }
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
export const brainMultiBarChartForMarine3 = (id, data, barWidth) => {

  let series = [];

  let colorlist= ["#71bcff","#1a79c9","#39c77f","#f99b37","#ef5150"]
  let length = data.series.length;
  for (let i = 0; i < length; i++) {
    series.push({
      name: data.series[i].name,
      type: 'bar',
      barWidth: barWidth ? barWidth : 8,
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
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      borderColor: '#48607f',
      borderWidth:3,
      textStyle: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
      },
      padding: [5, 10],
      axisPointer: {
        type: 'none',
      }
    },
    grid: {
      top: '20%',
      left: '8%',
      right: '2%',
      bottom: '15%',
    },
    legend: {
      left: 'center',
      top: '4%',
      // icon: 'circle',
      itemWidth:8,
      itemHeight:8,
      textStyle: {
        color: '#353535',
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
        // margin: 5,
        color: '#353535',
        fontSize: 16,
        fontFamily: 'PingFang-SC-Medium',
        interval: 0,
        formatter: function(params) {
          return params.slice(5, 7) + "月";
        },
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#868d96',
          width: 1
        }
      },
      axisTick: {
        show: true,
      },
      splitLine: {
        show: true,
      }
    },
    yAxis: [{
      show: true,
      // name: data.yaxis[0] === null ? '' : '(' + data.yaxis[0] + ')',
      nameTextStyle: {
        color: "#868d96",
        padding: [10, 0, 0, 0],
        fontSize: 16,
        fontFamily: 'PingFang-SC-Medium',
      },
      type: 'value',
      position: 'left',
      axisLabel: {
        margin: 5,
        color: '#868d96',
        fontSize: 16,
        fontFamily: 'PingFang-SC-Medium'
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
          color: '#868d96',
          width: 1
        }
      }
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
export const brainMultiBarChartForMarine2 = (id, data, barWidth) => {

  let series = [];

  let colorlist= ["#1a79c8","#06e2e6","#f99b37"]
  let length = data.series.length;
  for (let i = 0; i < length; i++) {
    series.push({
      name: data.series[i].name,
      type: 'bar',
      barWidth: barWidth ? barWidth : 8,
      barGap: "10%",
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
      borderWidth:3,
      textStyle: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
      },
      padding: [5, 10],
      axisPointer: {
        type: 'none',
      }
    },
    grid: {
      top: '12%',
      left: '18%',
      right: '2%',
      bottom: '8%',
    },
    legend: {
      left: 'center',
      top: '4%',
      // icon: 'circle',
      itemWidth:8,
      itemHeight:8,
      textStyle: {
        color: '#353535',
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
      show: false,
      // type: 'category',
      type: 'value',
      // boundaryGap: false,
      // data: data.xaxis,
      axisLabel: {
        // margin: 5,
        color: '#353535',
        fontSize: 16,
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
        fontSize: 14,
        fontFamily: 'PingFang-SC-Medium',
      },
      axisLine:{
        show:false
      },

      position: 'left',
      axisLabel: {
        margin: 5,
        color: 'black',
        fontSize: 16,
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
    getmydzd.push(20)
  }
  var aaa = [];
  getmyd.forEach(g=>{
    aaa.push(Math.abs(g));
  });
  let option = {
    grid: {
      right: '40%',
      left: '4%',
      top: 'center'
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
          fontSize: '14'
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
        textStyle: {
          color: '#333333',
          fontSize: '14',
          // textAlign:'right'
        },
        formatter: '{value}%'
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
      barWidth: 10,
      data: aaa
    },
      {
        name: '背景',
        type: 'bar',
        barWidth: 10,
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
// export const  progesscharts = (id,data) => {
//   console.log("hh销h",data)
//   let  option = {
//
//     title: {
//       textStyle: {
//         color: 'black',
//         fontSize: '12',
//       }
//     },
//     grid: {
//       top: '35%',
//       left: '0',
//       right:"8%",
//       bottom: '0',
//       containLabel: true
//     },
//     yAxis: [{
//       type: 'category',
//       // data: ['全年目标'],
//       inverse: true,
//       axisTick: {
//         show: false
//       },
//       axisLabel: {
//         margin: 20,
//         textStyle: {
//           fontSize: 14,
//           color: 'black'
//         }
//       },
//       axisLine: {
//         show: false
//       }
//     }],
//     xAxis: [{
//       type: 'value',
//       axisLabel: {
//         show: false
//       },
//       axisLine: {
//         show: false
//       },
//       splitLine: {
//         show: false
//       }
//     }],
//     series: [{
//       type: 'bar',
//       barWidth:5,
//       data: data,
//       label: {
//         normal: {
//           show: true,
//           position: 'insideBottomRight',
//           formatter: '{c}%',
//           distance: 0,
//           offset: [30, -20],
//           color: '#1f2e42',
//           fontSize: 14,
//           padding: [5, 5, 5, 5],
//           // borderWidth:50,
//           backgroundColor:"#ed8a16",
//           borderRadius:15,
//         }
//       },
//       itemStyle: {
//         normal: {
//
//           color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
//             offset: 0,
//             color: '#dfe8f1'
//             // 0% 处的颜色
//           }, {
//             offset: 1,
//             color: 'green' // 100% 处的颜色
//           }], false),
//           barBorderRadius: 14
//         }
//       }
//     }, {
//       type: "bar",
//       barWidth: 5,
//       xAxisIndex: 0,
//       barGap: "-100%",
//       data: [120],
//       // itemStyle: {
//       //   normal: {
//       //     color: "rgba(237,138,22,0.25)",
//       //     barBorderRadius: 14
//       //   }
//       // },
//       zlevel: -1
//     }]
//   };
//   let myChart = echarts.init(document.getElementById(id));
//   myChart.clear();
//   myChart.setOption(option);
// };


