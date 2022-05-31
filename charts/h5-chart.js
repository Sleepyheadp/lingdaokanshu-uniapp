import echarts from "echarts";
import originAxios from "axios";


// 地图热力图-有数据
export const drawJmMap = (id, data) => {
  echarts.registerMap('jmMap', jmMap);
  let limitList = data.limitList ? data.limitList.slice(0,3) : [100, 49, 35];
  let colorList = data.colorList ? data.colorList :  ['#ef5151', '#f99b37', '#f9db63', '#78c164'];
  let pieces = [];
  limitList[limitList.length] = 0;
  pieces.push({
    gte: limitList[0],
    label: '> ' + limitList[0],
    color: colorList[0],
  });
  for (let i = 1; i < limitList.length; i++) {
    pieces.push({
      gte: limitList[i],
      lt: limitList[i - 1],
      label: limitList[i] + ' - ' + limitList[i - 1],
      color: colorList[i],
    })
  }
  let mapData = data.mapData? data.mapData : [
    {
      name: '恩平区',
      value: 56
    }, {
      name: '开平市',
      value: 32
    }, {
      name: '台山市',
      value: 108
    }, {
      name: '新会区',
      value: 45
    }, {
      name: '江海区',
      value: 21
    }, {
      name: '蓬江区',
      value: 18
    }, {
      name: '鹤山市',
      value: 49
    }];
  let location = [
    {
      name: "蓬江区",
      value: [113.07859, 22.67],
      // product: '200',
      // scale: '50',
    },
    {
      name: '江海区',
      value: [113.128165, 22.548508],
      product: '260',
      scale: '30',
    },
    {
      name: '新会区',
      value: [113.029226, 22.381204],
      product: '150',
      scale: '50',
    },
    {
      name: '台山市',
      value: [112.710629, 22.042759],
      product: '280',
      scale: '50',
    },
    {
      name: '开平市',
      value: [112.6, 22.39],
      product: '280',
      scale: '50',
    },
    {
      name: '鹤山市',
      value: [112.79, 22.66],
      product: '280',
      scale: '50',
    },
    {
      name: '恩平区',
      value: [112.281469, 22.232814],
      product: '280',
      scale: '50',
    }
  ];
  data.mapData.forEach((item) => {
    location.forEach((eItem) => {
      if (item.name === eItem.name) {
        eItem.value[2] = item.value;
      }
    })
  });
  // console.log(mapData)
  let option = {
    grid: {
      right: '5%',
      top: '5%',
      bottom: '5%',
      left: '5%'
    },
    // backgroundColor: '#fff',
    tooltip: {
      show: false,
      trigger: 'item',
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      borderColor: '#48607f',
      borderWidth: remToPx(1/75),
      textStyle: {
        fontSize: remToPx(18/75),
        color: '#fff',
      },
      padding: [remToPx(10/75), remToPx(25/75)],
      axisPointer: {
        type: 'none',
      },
      formatter: (params) => {
        console.log(params)
        let retN = params.name + '<br/>';
        let retV = ''
        if (params.value[2]) {
          retV = params.value[2]
        } else {
          retV = params.value;
        }
        return retN + retV;
      }
    },
    visualMap: { //左边的图标
      min: 0,
      max: 100000,
      left: 'center',
      bottom: remToPx(30/75),
      showLabel: 1,
      itemWidth: remToPx(20/75),
      itemHeight: remToPx(15/75),
      itemGap: remToPx(20/75),
      textStyle: {
        fontSize: remToPx(20/75),
      },
      // text: ["高", "低"],
      pieces: pieces,
      show: !0,
      silent: true,
      orient: 'horizontal'
    },
    geo: {
      show: true,
      map: 'jmMap',
      silent: true,
      label: {
        normal: {
          show: false,
          position: 'outside',
          fontSize: remToPx(16/75),
          formatter: function(params) {
            return params.name
          },
          color: '#fff'
        },
        emphasis: {
          show: false
        }
      },
      aspectScale: 1.0, //长宽比
      roam: false,
      itemStyle: { // 整个一块
        normal: {
          borderColor: '#FFFFFF',
          borderWidth: remToPx(3/75),
        },
        // 鼠标移入
        emphasis: {
          show: false
        }
      },
    },
    series: [{
      type: 'scatter',
      coordinateSystem: 'geo',
      data: location,
      // symbol: 'none',
      label: {
        position: 'inside',
        show: true,
        formatter: (params) => {
          let retN = params.name.toString();
          let retV = params.value[2];
          return '{value|' + retV + '}' + '\n' + '{name|' + retN + '}'
        },
        rich: {
          value: {
            width: remToPx(100/75),
            fontSize: remToPx(32/75),
            fontFamily: 'DIN-Medium',
            color: '#000',
            align: 'center',
          },
          name: {
            width: remToPx(100/75),
            fontSize: remToPx(24/75),
            color: '#000',
            align: 'center',
            shadowColor: 'transparent',
          },
          emphasis: {
            show: false
          }
        }

      },
      emphasis: {
        show: false
      },
      silent: true,
      // itemStyle: {
      //     normal: {
      //         color: '#FFFF00'
      //     }
      // }
    },
      {
        type: 'map',
        map: 'jmMap',
        name: '小学学校数',
        geoIndex: 0,
        // aspectScale: 0.2, //长宽比
        showLegendSymbol: false, // 存在legend时显示
        roam: false,
        itemStyle: {
          normal: {
            borderColor: '#fff',
            borderWidth: remToPx(4/75),
          },
        },
        emphasis: {
          show: false
        },
        // emphasis: {
        //     areaColor: '#fff',
        //     borderColor: '#fff',
        //     borderWidth: 4

        // },
        silent: true,
        animation: false,
        data: mapData,
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
// 地图热力图-地域赋色
export const drawJmHotMap = (id, data) => {
    // console.log('echarts.version',echarts.version)
    let jmMap = getJmGeoJson();
    // console.log('jmMap',res.data)
    echarts.registerMap('jmMap', jmMap);
    // 要求data元素按value降序排列（后端调整）
    // 默认为蓝色色系，如有多个图，第偶数个替换为橙色色系，颜色表如下
    // ['rgba(249,155,55,1)', 'rgba(249,155,55,0.8)', 'rgba(249,155,55,0.6)', 'rgba(249,155,55,0.5)', 'rgba(249,155,55,0.4)', 'rgba(249,155,55,0.2)', 'rgba(249,155,55,0.1)'];
    // 备用绿色色系
    // ['rgba(9,171,128,1)', 'rgba(9,171,128,0.8)', 'rgba(9,171,128,0.6)', 'rgba(9,171,128,0.5)', 'rgba(9,171,128,0.4)', 'rgba(9,171,128,0.2)', 'rgba(9,171,128,0.1)'];
    let colorList = data.colorList ? data.colorList : ['rgba(26,143,218,1)', 'rgba(26,143,218,0.8)', 'rgba(26,143,218,0.6)', 'rgba(26,143,218,0.5)', 'rgba(26,143,218,0.4)', 'rgba(26,143,218,0.2)', 'rgba(26,143,218,0.1)'];
    let mapData = data.mapData ? data.mapData : [
	// 56 32 108 45 21 18 49
      {
        name: '白云鄂博矿区',
        value: 56
      },
      {
        name: '达尔罕茂明安联合旗',
        value: 32
      },
      {
        name: '固阳县',
        value: 108
      },
      {
        name: '石拐区',
        value: 45
      },
      {
        name: '东河区',
        value: 21
      },
      {
        name: '青山区',
        value: 18
      },
      {
        name: '九原区',
        value: 49
      }];
    let location = [
      {
        name: "蓬江区",
        value: [113.07859, 22.67],
        // product: '200',
        // scale: '50',
      },
      {
        name: '江海区',
        value: [113.128165, 22.548508],
        product: '260',
        scale: '30',
      },
      {
        name: '新会区',
        value: [113.029226, 22.381204],
        product: '150',
        scale: '50',
      },
      {
        name: '台山市',
        value: [112.710629, 22.042759],
        product: '280',
        scale: '50',
      },
      {
        name: '开平市',
        value: [112.6, 22.39],
        product: '280',
        scale: '50',
      },
      {
        name: '鹤山市',
        value: [112.79, 22.66],
        product: '280',
        scale: '50',
      },
      {
        name: '恩平区',
        value: [112.281469, 22.232814],
        product: '280',
        scale: '50',
      }
    ];
    mapData.forEach((item,index) => {
      item.itemStyle = {
        normal: {
          color: colorList[index]
        }
      }
      location.forEach((eItem) => {
        if (item.name === eItem.name) {
          eItem.value[2] = item.value;
        }
      })
    });
    // console.log('mapData',mapData)
    let option = {
      grid: {
        top: '5%',
        left: '5%',
        right: '5%',
        bottom:'5%',
      },
      geo: {
        map: "jmMap",
        aspectScale: 1.0, //长宽比
        roam: false,
        top: 50,
        label: {
          normal: {
            show: false,
            fontSize: "14",
            color: "rgba(0,0,0,0.7)"
          }
        },
        silent: true,
        itemStyle: {
          normal: {
            borderColor: '#FFFFFF',
            borderWidth: remToPx(3/75),
          },
          // 鼠标移入
          emphasis: {
            show: false
          }
        },
      },
      series: [
        {
          type: 'scatter',
          coordinateSystem: 'geo',
          backgroundColor: 'rgba(0,0,0,0)',
          data: location,
          itemStyle: {
            normal: {
              color: 'rgba(0,0,0,0)'
            }
          },
          label: {
            position: 'inside',
            show: true,
            formatter: (params) => {
              let retN = params.name.toString();
              let retV = params.value[2];
              return '{value|' + retV + '}' + '\n' + '{name|' + retN + '}'
            },
            rich: {
              value: {
                width: remToPx(100/75),
                fontSize: remToPx(32/75),
                borderWidth: 0,
                shadowColor: 'rgba(0,0,0,0)',
                fontFamily: 'DIN-Medium',
                color: '#000',
                align: 'center',
              },
              name: {
                width: remToPx(100/75),
                fontSize: remToPx(24/75),
                color: '#000',
                align: 'center',
                shadowColor: 'transparent',
              },
              emphasis: {
                show: false
              }
            }

          },
          emphasis: {
            show: false
          },
          silent: true,
        },
        {
          name: "",
          type: "map",
          geoIndex: 0,
          data: mapData
        }]
    };
    const client = document.getElementById(id);
    let myChart = echarts.init(client);
    const clientWidth = client.clientWidth;
    const clientHeight = client.clientHeight;
    myChart.clear();
    myChart.resize({width: clientWidth, height: clientHeight});
    myChart.setOption(option);
};

// 多折线图
export const ecologicalLineChart = (id, data) => {
  let colorList = data.colorList ? data.colorList : ['rgb(26, 121, 200)', 'rgb(57, 199, 127)', 'rgb(249, 155, 55)'];
  let colorStop = data.colorStop ? data.colorStop : ['rgba(26, 121, 200, 0.2)', 'rgba(26, 121, 200, 0)', 'rgba(57, 199, 127, 0.2)', 'rgba(57, 199, 127, 0)', 'rgba(249, 155, 55, 0.2)', 'rgba(249, 155, 55, 0)'];
  // console.log('aaa' ,colorStop);
  let series = [];
  let gridLeft = 83;
  for (let i = 0; i < data.series.length; i++) {
    if (data.series[i]) {
      data.series[i].data.forEach((item) => {
        gridLeft = item > 90000 ? 100 : 85;
      });
      series.push({
        name: data.series[i].name,
        type: data.series[i].type ? data.series[i].type : 'line',
        symbol: data.symbol?data.symbol:'emptyCircle',
        showSymbol: !data.series[i].closeSymbolShow,
        symbolSize: remToPx(0/75),
        data: data.series[i].data,
        lineStyle: {
          type: data.series[i].linetype ? data.series[i].linetype : 'solid',
          width:remToPx(3/75),
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: colorStop[2*i] // 0% 处的颜色
            }, {
              offset: 1,
              color:  colorStop[2*i+1], // 100% 处的颜色
            }],
            // opacity: 0.2,
            global: false // 缺省为 false
          }
        }
      })
    }
  }
  let paddingTop = data.paddingTop ? data.paddingTop : '-20';
  let option = {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: colorList,
    grid: data.gridContainLabel?{
      left: remToPx((data.gridLeft ? data.gridLeft : 20)/75),
      right: remToPx((data.gridRight ? data.gridRight : 40)/75),
      top: remToPx((data.gridTop ? data.gridTop : 114)/75),
      bottom: remToPx((data.gridBottom ? data.gridBottom : 65)/75),
      containLabel: true
    }:{
      left: remToPx((data.gridLeft ? data.gridLeft : 83)/75),
      right: remToPx((data.gridRight ? data.gridRight : 65)/75),
      top: remToPx((data.gridTop ? data.gridTop : 114)/75),
      bottom: remToPx((data.gridBottom ? data.gridBottom : 100)/75),
    },
    legend: {
      textStyle: {
        color: "#000",
        fontSize: remToPx(20/75),
        fontFamily: 'PingFang-SC-Medium',
        padding: [0, 0, 0, remToPx(-5/75)]
      },
      itemGap: data.legendItemGap?data.legendItemGap:remToPx(6/75),
      show: data.legendShow ? data.legendShow : false,
      itemHeight: remToPx((data.legendItemHeight ? data.legendItemHeight : 14)/75),
      itemWidth: remToPx((data.legendItemWidth ? data.legendItemWidth : 30)/75),
      right: data.legendRight ? data.legendRight : '5%',
      top: data.legendTop ? data.legendTop : '13%',
      // icon: "circle",
      data: data.legends,
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      borderColor: '#48607f',
      borderWidth: remToPx(1/75),
      textStyle: {
        fontSize: remToPx(18/75),
        color: '#fff',
        align: 'left',
        fontFamily: 'PingFang-SC-Medium',
      },
      padding: [remToPx(10/75), remToPx(25/75)],
      axisPointer: {
        type: 'line',
        label: {
          show: false,
          backgroundColor: '#333'
        }
      }
    },
    xAxis: {
      show: true,
      triggerEvent:true,
      type: 'category',
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: data.axisLineColor?data.axisLineColor:'#e1e1e1',
          width: remToPx(1/75),
          type: data.type?data.type:"solid"
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#e1e1e1',
          type: "solid",
          width: remToPx(1/75),
        }
      },
      axisLabel: {
        interval: 1,
        rotate: data.xRotate ? data.xRotate : 0,
        //判断横坐标名称的长度，长度超过固定值，超出部分进行隐藏。
        formatter: function(value) {
          var res = value;
          // if(res.length > 5) {
          //   res = res.substring(0, 5) + "...";
          //
          // }
          return res;
        },
        textStyle: {
          fontSize: remToPx(22/75),
          fontFamily: 'PingFang-SC-Medium',
          padding: [remToPx(8/75), 0, 0, 0],
          color: data.xRotate?'#838383':'#000'
        },
      },
      data: data.xaxis
    },
    yAxis: {
      show: true,
      name: data.yaxis[0] === null ? '' : data.yaxis,
      nameTextStyle: {
        fontSize: remToPx(22/75),
        padding: Math.max(...data.series[0].data) < 10 ? [0, remToPx(10/75), 0, 0] : [0, remToPx(10/75), 0, remToPx(paddingTop/75)],
        fontFamily: 'PingFang-SC-Medium',
        color: '#838383'
      },
      type: 'value',
      min: data.min ? data.min : null,
      max: data.max ? data.max : null,
      axisTick: {
        show: false
      },
      axisLine: {
        show: false,
        lineStyle: {
          width: remToPx(1/75),
          color: '#aaa',
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          width: remToPx(1/75),
          type: "solid",
          color: '#e1e1e1'
        }
      },
      axisLabel: {
        textStyle: {
          fontSize: remToPx(22/75),
          fontFamily: 'PingFang-SC-Medium',
          color: '#838383'
        }
      }
    },
    series: series
  };


  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  const clientHeight = client.clientHeight;
  myChart.clear();
  myChart.resize({width: clientWidth, height: clientHeight});
  myChart.setOption(option);
};


// 横向多柱状图-绿色圆角
export const horizontalGreenBars = (id, data) => {
  // console.log('11',data)
  let yData = [];
  let barData = [];
  let bgData = [];
  for (let i = 0; i < data.length; i++) {
    yData[i] = data[i].label;
    barData[i] = data[i].value;
  }
  let max = Math.max(...barData);
  max = max > 100 ? max : 100;
  while (bgData.length < barData.length) {
    bgData[bgData.length] = max;
  }
  // let paddingRight = data.paddingRight ? data.paddingRight : '-320';
  let option = {
    grid: {
      left: remToPx(24/75),
      right: '20%',
      bottom: '5%',
      top: '10%',
      // containLabel: true
    },
    xAxis: {
      show: false,
      max: max,
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
          padding: [remToPx(-60/75),remToPx(0/75),0,remToPx(15/75)]
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
      data: yData
    }, {
      type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      show: true,
      axisLabel: {
        textStyle: {
          color: '#39c77f',
          fontSize: remToPx(24/75),
          fontFamily: 'PingFang-SC-Bold',
          padding: [0,0,0,remToPx(15/75)],
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
          barBorderRadius: remToPx(8/75),
          color: '#39c77f',
        },
      },
      barWidth: remToPx(15/75),
      data: barData
    },
      {
        name: '背景',
        type: 'bar',
        barWidth: remToPx(15/75),
        barGap: '-100%',
        data: bgData,
        itemStyle: {
          normal: {
            color: '#e5e5e5',
            barBorderRadius: remToPx(8/75),
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
// 横向多柱状图-方角
export const horizontalBars = (id, data) => {
  let yData = data.xaxis;
  let barData = data.series[0].data;
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
      data: yData
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
        barWidth: remToPx(15/75),
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


function remToPx(rem) {
  if (Math.floor(rem*75+0.1)==1&&document.body.clientWidth<750) {return 0.5}
  if (Math.floor(rem*75+0.1)==2&&document.body.clientWidth<750) {return 1}
  var fontSize = document.documentElement.style.fontSize;
  return Math.floor(rem * fontSize.replace('px', ''));
}
// 不同宽度下数值调整函数 输入400/750/1080宽度时的值
function changeWithWidth(a,b,c) {
  let ret = 0;
  let bodyWidth = document.body.clientWidth;
  (20-(document.body.clientWidth-400)*18/600)
  if (bodyWidth<400) {
    ret = a
  } else if (bodyWidth <= 750 ) {
    ret = a + (bodyWidth -400)*(b-a)/350
  } else if (bodyWidth < 1080) {
    ret = b + (bodyWidth -750)*(c-b)/330
  } else {
    ret = c;
  }
  return ret
}


//纵向柱状图
export const barChart = (id,data) => {
  // let checkName = ''
  let option = {
    grid: data.containLabel ? {
      top: data.gridTop ? data.gridTop : '13%',
      left:data.gridLeft?data.gridLeft:'3%',
      right: data.gridRight?data.gridRight:'5%',
      bottom: data.gridBottom ? data.gridBottom : '15%',
      containLabel: true,
    }:{
      left: data.gridLeft ? data.gridLeft : remToPx(83/75),
      right: data.gridRight ? data.gridRight : remToPx(65/75),
      top: data.gridTop ? data.gridTop : remToPx(114/75),
      bottom: data.gridBottom ? data.gridBottom : remToPx(100/75),
    },
    xAxis : [
      {
        type : 'category',
        splitLine: {
          show: true,
          lineStyle: {
            color: '#e1e1e1',
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          // lineStyle: {
          //     color: '#2A2A2A',
          // }
        },
        silent: true,
        axisLabel: {
          rotate: 0,
          show:true,
          textStyle: {
            fontSize: remToPx(22/75),
            fontFamily: 'PingFang-SC-Medium',
            // padding: [5,0,0,0],
            color: '#000000'
          },
        },
        data : data.xaxis,

      }
    ],
    yAxis : [
      {
        name: data.yNameShow ? '('+data.yaxis[0]+')' : '',
        type : 'value',
        nameTextStyle: {
          color: '#838383',
          fontSize: remToPx(20/75),
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#e1e1e1',
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          // lineStyle: {
          //     color: '#2A2A2A',
          // }
        },
        axisLabel: {
          show:true,
          textStyle: {
            fontSize: remToPx(22/75),
            fontFamily: 'PingFang-SC-Medium',
            color: '#838383'
          }
        }
      }
    ],
    series : [
      {
        type:'bar',
        data:data.series.data ? data.series.data : data.series[0].data,
        barWidth: remToPx(25/75),//柱子的宽度
        silent: true,
        itemStyle: {
          normal: {
            color: function(params) {
              // if (params.name === "B区" || checkName  === params.name) {
              //   return new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              //     offset: 0,
              //     color: "#f99b37" // 0% 处的颜色
              //   },
              //     {
              //       offset: 1,
              //       color: "#ffbb51" // 100% 处的颜色
              //     }], false)
              // } else {
              return new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: "#1a79c9" // 0% 处的颜色
              },
                {
                  offset: 1,
                  color: "#46aafd" // 100% 处的颜色
                }], false)
              // }

            },
            label: {
              show: true,
              position: 'top',
              formatter: function(a){
                return a.value
              },
              fontSize: remToPx(18/75),
              borderWidth: remToPx(1/75),
              fontFamily: 'PingFang-SC-Bold',
              color: '#1a79c9'
            },
          },
        },
      }
    ]
  };
  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  const clientHeight = client.clientHeight;
  myChart.clear();
  myChart.resize({width: clientWidth, height: clientHeight});
  myChart.setOption(option);
  // myChart.on('click',function(params){
  //   //点击的柱子的名称
  //   checkName = params.name;
  //   //柱形图重构
  //   myChart.setOption(option);
  // })
};
//纵向柱状图
export const barChartForBusiness = (id,data) => {
  let seriesData = data.series.data ? data.series.data : data.series[0].data;
  let option = {
    grid: {
      left: data.gridLeft ? remToPx(data.gridLeft/75) : remToPx(83/75),
      right: data.gridRight ? remToPx(data.gridRight/75) : remToPx(65/75),
      top: data.gridTop ? remToPx(data.gridTop/75) : remToPx(114/75),
      bottom: data.gridBottom ? remToPx(data.gridBottom/75) : remToPx(100/75),
    },
    xAxis : [
      {
        type : 'category',
        splitLine: {
          show: true,
          lineStyle: {
            color: '#e1e1e1',
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          // lineStyle: {
          //     color: '#2A2A2A',
          // }
        },
        silent: true,
        axisLabel: {
          rotate: 0,
          show:true,
          textStyle: {
            fontSize: remToPx(22/75),
            fontFamily: 'PingFang-SC-Medium',
            // padding: [5,0,0,0],
            color: '#000000'
          },
        },
        data : data.xaxis,

      }
    ],
    yAxis : [
      {
        type : 'value',
        splitLine: {
          show: true,
          lineStyle: {
            color: '#e1e1e1',
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          // lineStyle: {
          //     color: '#2A2A2A',
          // }
        },
        axisLabel: {
          show:true,
          textStyle: {
            fontSize: remToPx(22/75),
            fontFamily: 'PingFang-SC-Medium',
            color: '#838383'
          }
        }
      }
    ],
    series : [
      {
        type: 'bar',
        data: seriesData,
        barWidth: remToPx(25/75),//柱子的宽度
        silent: true,
        itemStyle: {
          normal: {
            color: function(params) {
              if(params.name === '江门'){
                return new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                  offset: 0,
                  color: "#f99b37" // 0% 处的颜色
                },
                  {
                    offset: 1,
                    color: "#ffbb51" // 100% 处的颜色
                  }], false)

              }else {
                return new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                  offset: 0,
                  color: "#1a79c9" // 0% 处的颜色
                },
                  {
                    offset: 1,
                    color: "#46aafd" // 100% 处的颜色
                  }], false)
              }
            },
            label: {
              show: true,
              position: 'top',
              formatter: function(a){
                if(a.name === '江门'){
                  return a.value
                }else{
                  return ''
                }
              },
              fontSize: remToPx(22/75),
              borderWidth: remToPx(1/75),
              fontFamily: 'PingFang-SC-Bold',
              padding:[remToPx(5/75),0,0,0],
              color: '#f99b37',
              distance: remToPx(20/75),
              width: remToPx(77/75),
              height: remToPx(28/75),
              backgroundColor: 'rgba(254,240,225,0.6)',
              borderRadius: [2,2,2,2],
              borderColor: '#f99b37',
              align: 'center',
              verticalAlign: 'middle',
              rich:{}
            },

          },
        },
      }
    ]
  };
  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  const clientHeight = client.clientHeight;
  myChart.clear();
  myChart.resize({width: clientWidth, height: clientHeight});
  myChart.setOption(option);
  // myChart.on('click',function(params){
  //   //点击的柱子的名称
  //   checkName = params.name;
  //   //柱形图重构
  //   myChart.setOption(option);
  // })
};
// 纵向柱状图-堆叠-series.length = 3
export const barStackChart = (id,data) => {
  // let checkName = ''
  let option = {
    grid: {
      top: data.gridTop ? data.gridTop : '15%',
      left:data.gridLeft?data.gridLeft:'3%',
      right: data.gridRight?data.gridRight:'8%',
      bottom: data.gridBottom ? data.gridBottom : '13%',
      containLabel: true,
    },
    xAxis : [
      {
        type : 'category',
        splitLine: {
          show: true,
          lineStyle: {
            color: '#e1e1e1',
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          // lineStyle: {
          //     color: '#2A2A2A',
          // }
        },
        silent: true,
        axisLabel: {
          rotate: 0,
          show:true,
          textStyle: {
            fontSize: remToPx(22/75),
            fontFamily: 'PingFang-SC-Medium',
            // padding: [5,0,0,0],
            color: '#000000'
          },
        },
        data : data.xaxis,

      }
    ],
    yAxis : [
      {
        name: data.yaxis[0] ? '('+data.yaxis[0]+')' : '',
        type : 'value',
        nameTextStyle: {
          color: '#838383',
          fontSize: remToPx(20/75),
          padding: [0, 0, remToPx(-changeWithWidth(10,-3,-10)/75), 0],
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#e1e1e1',
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          // lineStyle: {
          //     color: '#2A2A2A',
          // }
        },
        axisLabel: {
          show:true,
          textStyle: {
            fontSize: remToPx(22/75),
            fontFamily: 'PingFang-SC-Medium',
            color: '#838383'
          }
        }
      }
    ],
    legend: {
      textStyle: {
        color: "#000",
        fontSize: remToPx(20/75),
        fontFamily: 'PingFang-SC-Medium',
        padding: [0, 0, 0, remToPx(-changeWithWidth(5,0,0)/75)],
      },
      itemGap: data.legendItemGap?data.legendItemGap:remToPx(6/75),
      // show: data.legendShow ? data.legendShow : false,
      itemHeight: remToPx((data.legendItemHeight ? data.legendItemHeight : 14)/75),
      itemWidth: remToPx((data.legendItemWidth ? data.legendItemWidth : 14)/75),
      right: data.legendRight ? data.legendRight : '7%',
      top: data.legendTop ? data.legendTop : '6%',
      // icon: "circle",
      // data: data.legends,
    },
    series : [
      // {
      //   name: data.series[0].name,
      //   type:'bar',
      //   data: data.series[0].data,
      //   // data:data.series.data ? data.series.data : data.series[0].data,
      //   barWidth: remToPx(25/75),
      //   barGap: -1,
      //   silent: true,
      //   itemStyle: {
      //     normal: {
      //       color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
      //         offset: 0,
      //         color: "rgba(26,121,201,1)" // 0% 处的颜色
      //       },
      //         {
      //           offset: 1,
      //           color: "rgba(245,187,82,1)" // 100% 处的颜色
      //         }], false),
      //       // opacity: 0.1,
      //       label: {
      //         show: true,
      //         position: 'top',
      //         formatter: function(a){
      //           return a.value
      //         },
      //         fontSize: remToPx(18/75),
      //         borderWidth: remToPx(1/75),
      //         fontFamily: 'PingFang-SC-Bold',
      //         color: 'rgba(26,121,201,1)'
      //       },
      //     },
      //   },
      // },
      {
        name: data.series[1].name,
        type:'bar',
        stack: data.series[0].name,
        data:data.series.data ? data.series.data : data.series[1].data,
        barWidth: remToPx(25/75),//柱子的宽度
        silent: true,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: "#1a79c9" // 0% 处的颜色
            },
              {
                offset: 1,
                color: "#46aafd" // 100% 处的颜色
              }], false),
            label: {
              // show: true,
              position: 'top',
              formatter: function(a){
                return a.value
              },
              fontSize: remToPx(18/75),
              borderWidth: remToPx(1/75),
              fontFamily: 'PingFang-SC-Bold',
              color: '#1a79c9'
            },
          },
        },
      },
      {
        name: data.series[2].name,
        type:'bar',
        stack: data.series[0].name,
        data:data.series.data ? data.series.data : data.series[2].data,
        barWidth: remToPx(25/75),//柱子的宽度
        silent: true,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: "#f0993c" // 0% 处的颜色
            },
              {
                offset: 1,
                color: "#febb52" // 100% 处的颜色
              }], false),
            label: {
              // show: true,
              position: 'top',
              formatter: function(a){
                return a.value
              },
              fontSize: remToPx(18/75),
              borderWidth: remToPx(1/75),
              fontFamily: 'PingFang-SC-Bold',
              color: '#1a79c9'
            },
          },
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
  // myChart.on('click',function(params){
  //   //点击的柱子的名称
  //   checkName = params.name;
  //   //柱形图重构
  //   myChart.setOption(option);
  // })
};
// 纵向柱状图-堆叠-series.length = 2
export const twoBarStackChart = (id,data) => {
  // let checkName = ''
  let option = {
    grid: {
      top: data.gridTop ? data.gridTop : '13%',
      left:data.gridLeft?data.gridLeft:'3%',
      right: data.gridRight?data.gridRight:'8%',
      bottom: data.gridBottom ? data.gridBottom : '15%',
      containLabel: true,
    },
    xAxis : [
      {
        type : 'category',
        splitLine: {
          show: true,
          lineStyle: {
            color: '#e1e1e1',
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          // lineStyle: {
          //     color: '#2A2A2A',
          // }
        },
        silent: true,
        axisLabel: {
          rotate: 0,
          show:true,
          textStyle: {
            fontSize: remToPx(22/75),
            fontFamily: 'PingFang-SC-Medium',
            // padding: [5,0,0,0],
            color: '#000000'
          },
        },
        data : data.xaxis,

      }
    ],
    yAxis : [
      {
        name: data.yaxis[0] ? '('+data.yaxis[0]+')' : '',
        type : 'value',
        nameTextStyle: {
          color: '#838383',
          fontSize: remToPx(20/75),
          padding: [0, 0, remToPx(-changeWithWidth(10,-3,-10)/75), 0],
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#e1e1e1',
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          // lineStyle: {
          //     color: '#2A2A2A',
          // }
        },
        axisLabel: {
          show:true,
          textStyle: {
            fontSize: remToPx(22/75),
            fontFamily: 'PingFang-SC-Medium',
            color: '#838383'
          }
        }
      }
    ],
    legend: {
      textStyle: {
        color: "#000",
        fontSize: remToPx(20/75),
        fontFamily: 'PingFang-SC-Medium',
        padding: [0, 0, 0, remToPx(-changeWithWidth(5,0,0)/75)],
      },
      itemGap: data.legendItemGap?data.legendItemGap:remToPx(6/75),
      // show: data.legendShow ? data.legendShow : false,
      itemHeight: remToPx((data.legendItemHeight ? data.legendItemHeight : 14)/75),
      itemWidth: remToPx((data.legendItemWidth ? data.legendItemWidth : 14)/75),
      right: data.legendRight ? data.legendRight : '7%',
      top: data.legendTop ? data.legendTop : '4%',
      // icon: "circle",
      // data: data.legends,
    },
    series : [
      {
        name: data.series[0].name,
        type:'bar',
        stack: '总量',
        data:data.series.data ? data.series.data : data.series[0].data,
        barWidth: remToPx(25/75),//柱子的宽度
        silent: true,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: "#1a79c9" // 0% 处的颜色
            },
              {
                offset: 1,
                color: "#46aafd" // 100% 处的颜色
              }], false),
            label: {
              // show: true,
              position: 'top',
              formatter: function(a){
                return a.value
              },
              fontSize: remToPx(18/75),
              borderWidth: remToPx(1/75),
              fontFamily: 'PingFang-SC-Bold',
              color: '#1a79c9'
            },
          },
        },
      },
      {
        name: data.series[1].name,
        type:'bar',
        stack: '总量',
        data:data.series.data ? data.series.data : data.series[1].data,
        barWidth: remToPx(25/75),//柱子的宽度
        silent: true,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: "#f0993c" // 0% 处的颜色
            },
              {
                offset: 1,
                color: "#febb52" // 100% 处的颜色
              }], false),
            label: {
              // show: true,
              position: 'top',
              formatter: function(a){
                return a.value
              },
              fontSize: remToPx(18/75),
              borderWidth: remToPx(1/75),
              fontFamily: 'PingFang-SC-Bold',
              color: '#1a79c9'
            },
          },
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
  // myChart.on('click',function(params){
  //   //点击的柱子的名称
  //   checkName = params.name;
  //   //柱形图重构
  //   myChart.setOption(option);
  // })
};
//横向柱状图
export const horizontalBar = (id,data) => {
  let max = data.value > 100 ? data.value : 100;
  // console.log(max)
  let option = {
    // grid: {
    //   left: data.gridLeft ? data.gridLeft : '10%',
    //   right: data.gridRight ? data.gridRight : '25%',
    //   top: data.gridTop ? data.gridTop : '30%',
    //   bottom: data.gridBottom ? data.gridBottom : '0',
    //   // containLabel: true,
    // },
    grid: {
      left: '10%',
      right: '28%',
      top: '30%',
      bottom: '0',
      // containLabel: true,
    },
    // grid: {
    //   left: data.gridLeft ? data.gridLeft : remToPx(83/75),
    //   right: data.gridRight ? data.gridRight : remToPx(65/75),
    //   top: data.gridTop ? data.gridTop : remToPx(114/75),
    //   bottom: data.gridBottom ? data.gridBottom : remToPx(100/75),
    // },
    tooltip: {
      show: true,
      trigger: 'axis',
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      borderColor: '#48607f',
      borderWidth: remToPx(1/75),
      textStyle: {
        fontSize: remToPx(18/75),
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
      },
      padding:[remToPx(5/75),remToPx(15/75)],
      axisPointer: {
        type: 'none',
      },
      formatter: function (p) {
        let str = p[0].name+ ':<br>' + p[0].value + '%';
        return str;
      }
    },
    xAxis: [
      {
        max: max,
        //左侧柱状图的X轴
        gridIndex: 0,//x 轴所在的 grid 的索引
        show: false
      }],
    yAxis: [
      {
        //左侧柱状图的Y轴
        type: 'category',
        gridIndex: 0,//y轴所在的 grid 的索引
        splitLine: 'none',
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
          show: true,
          textStyle: {
            // width: '100%',
            fontSize: remToPx(24/75),
            fontFamily: 'PingFang-SC-Medium',
            color: '#1c1c1c',
            align: 'left',
            padding: [remToPx(-changeWithWidth(80,80,80)/75),0,0,remToPx(changeWithWidth(15,6,6)/75)]
          },
          formatter: function(value) {
            if (value.length <= 13) {
              return value;
            } else {
              return value.slice(0, 13) + '...'
            }
          }
        },
        data: [data.label],
        // inverse: true,
      },
      {
        //左侧柱状图的Y轴
        gridIndex: 0,//y轴所在的 grid 的索引
        splitLine: 'none',
        axisTick: 'none',
        axisLine: 'none',
        data: [data.value],
        inverse: true,
        axisLabel: {
          show: true,
          // verticalAlign: 'bottom',
          align: 'left',
          // padding: [0, 0, 0, 0],
          textStyle: {
            fontFamily:'PingFang-SC-Bold',
            color: '#39c77f',
            fontSize: remToPx(24/75)
          },
          formatter: function (value) {
            return value + '%'
          },
        }
      }
    ],
    series: [{
      name: data.label,
      type: 'bar',
      xAxisIndex: 0,//使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
      yAxisIndex: 0,//使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
      data: [data.value],
      barWidth: remToPx(15/75),
      itemStyle: {
        normal: {
          color: '#39c77f',
          barBorderRadius: remToPx(15/75),
        },
      },
      // z: 2
    },
      {
        name: '外框',
        type: 'bar',
        xAxisIndex: 0,//使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
        yAxisIndex: 0,//使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
        barGap: '-100%',
        data: [max],
        barWidth: remToPx(15/75),
        itemStyle: {
          normal: {
            color: '#e5e5e5',
            barBorderRadius: remToPx(15/75),
          }
        },

        z: 0
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

//饼图
export const pieChart = (id,data,adjust = {}) => {
  let seriesData = [];
  let nameData = [];
  data.forEach((item) => {
    seriesData.push({
      name: item.name,
      value: item.value,
      unit: item.unit
    });
    nameData.push(item.name)
  });
  let option = {
    backgroundColor: 'rgba(0,0,0,0)',
    color: ['#1a79c9', '#71bcff', '#29b3cc', '#39c77f', '#f99b37', '#ef5150', '#f9db63'],
    legend: {
      orient: 'vertical',
      icon: 'circle',
      x: adjust.legendX ? adjust.legendX : '61.7%',
      y: 'center',
      data: seriesData,
      itemWidth: remToPx(12/75),
      itemHeight: remToPx(12/75),
      align: 'left',
      textStyle: {
        rich: {
          name: {
            align: 'left',
            // width:100,
            width: remToPx((adjust.legendNameWidth?adjust.legendNameWidth:70)/75),
            fontSize: remToPx(24/75),
            color: '#353535',
            padding: [0, 0, 0, remToPx(3/75)],
            fontFamily:'PingFang-SC-Medium'
          },
          value: {
            align: 'right',
            width: remToPx((adjust.legendValueWidth?adjust.legendValueWidth:70)/75),
            fontSize: remToPx(24/75),
            color: '#353535',
            fontWeight:'bold',
            padding: [0, remToPx(90/75), 0,remToPx(70/75)],
            fontFamily:'PingFang-SC-Medium'
          },
          unit: {
            fontSize: remToPx(24/75),
            color: '#353535',
            fontWeight:'bold',
            fontFamily:'PingFang-SC-Medium'
          },

        }
      },
      formatter: function(name) {
        let res = seriesData.filter(v => v.name === name);
        res = res[0] || {};
        return '{name|' + name + '}  {value|' + res.value + res.unit  +'}'
      }
    },
    series: [{
      type: 'pie',
      radius: [remToPx(107/75), remToPx(157/75)],
      padding:[remToPx(58/75),remToPx(84/75),remToPx(80/75),remToPx(65/75)],
      center: ['29.6%', '47.57%'],
      data: seriesData,
      hoverAnimation: false,
      label: {
        show: false,
      },
    }]
  };

  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  const clientHeight = client.clientHeight;
  myChart.clear();
  myChart.resize({width: clientWidth, height: clientHeight});
  myChart.setOption(option);

};

// 产业发展饼图
export const industrialpieChart = (id,data) => {
  let seriesData = [];
  let nameData = [];
  let sum = 0;
  data.forEach((item) => {
    seriesData.push({
      name: item.name,
      value: item.value,
      unit: item.unit
    });
    sum = sum + item.value;
    nameData.push(item.name)
  });
  let unit = data[0].unit === null? ' ':'('+data[0].unit+')';
  if(unit!=='(个)'){
    sum = sum.toFixed(2)
  }
  let option = {
    grid:{
      // show:true,
      top: data.gridTop ? remToPx(data.gridTop/75) : remToPx(58/75),
      right: data.gridRight ? remToPx(data.gridRight/75) : remToPx(90/75),
      bottom: data.gridBottom ? remToPx(data.gridBottom/75) : remToPx(80/75),
      left: data.gridLeft ? remToPx(data.gridLeft/75) : remToPx(65/75),
    },
    title: [{
      textAlign:'center',//文字居中
      text: '{sum|' + sum + '}\n{unit|' + unit + '}',
      top: data.titleTop?remToPx(data.titleTop/75):remToPx(180/75),
      left:data.titleLeft?remToPx(data.titleLeft/75):remToPx(220/75),
      textStyle: {
        rich: {
          sum: {
            fontSize:remToPx(46/75),
            color: '#1c1c1c',
            fontFamily:'PingFang-SC-Medium'
          },
          unit: {
            fontSize: remToPx(24/75),
            padding:[0, 0, remToPx(15/75),0],
            color: 'rgba(28,28,28,0.6)',
            fontFamily:'PingFang-SC-Medium'
          }
        }
      }
    }],
    backgroundColor: 'rgba(0,0,0,0)',
    color: ['#1a79c9',
      '#71bcff',
      '#29b3cc',
      '#39c77f',
      '#f99b37',
      '#f9db63',
      '#a07bce',
      '#ef5150',
      '#c4c4c4'],
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(255,255,255,0.85)',
      borderWidth: remToPx(1/75),
      borderColor:'rgba(238,238,238,0.85)',
      // width:remToPx(230/75),
      height:remToPx(96/75),
      marginTop:remToPx(16/75),
      marginLeft:remToPx(13/75),
      textStyle: {
        fontSize: remToPx(26/75),
        color: '#353535',
        fontFamily: 'PingFang-SC-Medium',
      },
      axisPointer:{
        type: 'none',
      },
      formatter: function(params){
        return '<span style="display:inline-block;margin-left:13px;margin-right:13px;border-radius:10px;width:12px;height:12px;background-color:' + params.color + ';"></span>'+params.name +  '<br/>' +'&nbsp;&nbsp;&nbsp;&nbsp;'+ params.value + params.data.unit
        // return '{name|' + params.name + '}' + '\n' + '{name|' + (params.data.value/sum*100).toFixed(2)% + '}'
      },
    },
    legend: {
      orient: 'vertical',
      icon: 'circle',
      x: data.legendX ? remToPx(data.legendX/75) : remToPx(463/75),
      y: data.legendY? remToPx(data.legendY/75): 'center',
      data: seriesData,
      itemWidth: remToPx(12/75),
      itemHeight: remToPx(12/75),
      align: 'left',
      tooltip:{
        show: true,
      },
      textStyle: {
        rich: {
          name: {
            fontSize: data.fontSize? remToPx(data.fontSize/75):remToPx(22/75),
            color: '#353535',
            fontFamily:'PingFang-SC-Medium'
          },
        }
      },
      formatter: function(name) {
        let res = seriesData.filter(v => v.name === name);
        res = res[0] || {};
        if(data.nameBr){
          if(name.length>9){
            name = name.slice(0,9) + '...'
          }
        }

        return '{name|' + name + '}'
      }
    },
    series: [{
      type: 'pie',
      radius: [remToPx(107/75), remToPx(157/75)],
      // padding:[remToPx(58/75),remToPx(84/75),remToPx(80/75),remToPx(65/75)],
      center: [data.chartLeft?data.chartLeft:'30%', data.chartTop?data.chartTop:'47.57%'],
      data: seriesData,
      hoverAnimation: false,
      label: {
        show: false,
        formatter: function(params) {
          return params.data.value+'('+(params.data.value/sum*100).toFixed(2)+'%)';
        }

      },
    }]
  };

  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  const clientHeight = client.clientHeight;
  myChart.clear();
  myChart.resize({width: clientWidth, height: clientHeight});
  myChart.setOption(option);

};


//产业发展 玫瑰图 半边饼图  弃用
export const roseChart = (id,data)=>{
  // mock
  // let data = [ { name: '农、林、牧、鱼业', value: 1200.58 }, { name: '制造业', value: 1100.58 }, { name: '电力、热力、燃气及水生产和供应业', value: 1200.58 }, { name: '建筑业', value: 1100.58 }, { name: '批发和零售业', value: 1200.58 }, { name: '住宿和餐饮业', value: 1100.58 }, { name: '金融业', value: 1200.58 }]

  let color = ['#1a79c9', '#71bcff', '#29b3cc', '#39c77f', '#f99b37', '#ef5150', '#f9db63','#a07bce','#c4c4c4']
  let legendData = [], seriesData = [];

  data.map((v,i) => {
    legendData.push(v.name);
    seriesData.push({ value: v.value, name: v.name, itemStyle: { color: color[i] } })
  });

  for (let i = 0; i < data.length; i++) {
    seriesData.push({ value: 0, name: "", label: { show: false }, labelLine: { show: false }, itemStyle: { color: 'rgba(0,0,0,0)'} })
  }

  let option = {
    grid:{
      // show:true,
      top: data.gridTop ? remToPx(data.gridTop/75) : remToPx(58/75),
      right: data.gridRight ? remToPx(data.gridRight/75) : remToPx(90/75),
      bottom: data.gridBottom ? remToPx(data.gridBottom/75) : remToPx(80/75),
      left: data.gridLeft ? remToPx(data.gridLeft/75) : remToPx(65/75),
    },
    backgroundColor: "#ffffff",
    legend: {
      icon: 'circle',
      data: legendData,
      textStyle: {
        rich: {
          name: {
            fontSize: data.fontSize ? remToPx(data.fontSize/75) : remToPx(24/75),
            color: '#353535',
            fontFamily: 'PingFang-SC-Medium'
          },
        }
      },
      // right: '20%',
      top: 'center',
      orient: 'vertical',
      left: remToPx(289/75),
      formatter: function(name) {
        let res = seriesData.filter(v => v.name === name);
        res = res[0] || {};
        return '{name|' + name + '}'
      }
    },
    // 遗留一个问题，hover时底图会遮住，暂时没有解决
    series: [{
      // 禁止放大
      hoverAnimation: false,
      radius: [0, remToPx(157/75)],
      center: [remToPx(65/75), '47.6%'],
      type: 'pie',
      label: {  normal: { show: false }, emphasis: { show: false } },
      labelLine: { normal: { show: false }, emphasis: { show: false }},
      animation: false,
      tooltip: { show: false },
      // 阴影颜色
      itemStyle: { color:'rgba(39,85,255,.21)'},
      data: [{ value: 1 }, { value: 1,itemStyle: { color: 'rgba(0,0,0,0)'} }],
    },{
      name: "",
      type: "pie",
      radius: [ 0, remToPx(147/75)],
      avoidLabelOverlap: false,
      startAngle: 90,
      center: [ remToPx(65/75), "47.6%" ],
      roseType: "area",
      selectedMode: "single",
      label: {
        show:false,
      },
      data: seriesData
    }]
  };

  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  const clientHeight = client.clientHeight;
  myChart.clear();
  myChart.resize({width: clientWidth, height: clientHeight});
  myChart.setOption(option);
};



export const gaugeChart = (id, min, max, nowData) => {
  let per = (nowData - min) / (max - min);
  let color = new echarts.graphic.LinearGradient(1,0,0,0,[
      {
        offset: 0,
        color: "#39c77f", // 0% 处的颜色
      },
      {
        offset: 1,
        color: "#39d49c", // 100% 处的颜色
      },
    ],
    false
  );
  let colorSet = [
    [per, color],
    [1, "#e3e3e3"],
  ];
  let startAngle = 180;
  let endAngle = 0;
  let center = ["50%", "70%"];
  let option = {
    tooltip: {
      show: false,
    },
    title: {
      text: nowData,
      x: 'center',
      y: '52%',
      textStyle: {
        fontFamily: 'DIN-Medium',
        color: '#39c77f',
        fontSize: remToPx(98/75),
      }
    },
    series: [
      {
        name: '刻度线',
        type: "gauge",
        radius: "100%",
        startAngle,
        endAngle,
        center,
        min,
        max,
        pointer: {
          show: false,
        },
        // data: dataArr,
        title: {
          show: false,
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: 'rgba(0,0,0,0)'
          }
        },
        axisTick: {
          show: false,
          splitNumber: 20,
          length: remToPx(20/75),
          lineStyle: {
            width: remToPx(1/75),
            type: 'solid',
            color: "rgba(57, 199, 127, 1)",
          }, //刻度节点线
        },
        splitLine: {
          show: false,
          splitNumber: 20,
          length: 20,
          lineStyle: {
            width: remToPx(1/75),
            type: 'solid',
            color: "rgba(57, 199, 127, 1)",
          }, //刻度节点线
        },
        axisLabel: {
          show: false,
        },
        detail: {
          show: 0,
        },
        animationDuration: 4000,
      },
      {
        name: "绿色渐变",
        type: "gauge",
        radius: "110%",
        startAngle, //刻度起始
        endAngle, //刻度结束
        center,
        min,
        max,
        splitNumber: 1,
        z: 4,
        axisTick: {
          show: false,
        },
        splitLine: {
          length: 16, //刻度节点线长度
          show: false,
          lineStyle: {
            width: 2,
            color: "#39c77f",
          }, //刻度节点线
        },
        pointer: {
          show: false,
          //   width: 8,
          //   length: "90%",
        },
        detail: {
          show: false,
        },
        axisLabel: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: colorSet,
            width: remToPx(65/75),
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            opacity: 1,
          },
        },
        data: nowData,
        animationDuration: 4000,
      },{
        name: "绿色渐变中间灰色",
        type: "gauge",
        radius: "99%",
        startAngle, //刻度起始
        endAngle, //刻度结束
        center,
        min,
        max,
        splitNumber: 1,
        z: 4,
        axisTick: {
          show: false,
        },
        splitLine: {
          length: remToPx(16/75), //刻度节点线长度
          show: false,
          lineStyle: {
            width: remToPx(2/75),
            color: "#39c77f",
          }, //刻度节点线
        },
        axisLabel: {
          formatter: function (v) {
            if (v == min) {
              if (max>999) {
                return `{minLong|${max}}`;
              } else {
                return `{min|${max}}`;
              }
            } else {
              return `{max|${min}}`;
            }
          },
          rich: {
            min: {
              // 下右上左
              padding: [0, 0, remToPx(60/75), remToPx(385/75)],
              color: "#000",
              fontSize: remToPx(39/75),
              fontFamily: 'DIN-Medium',
            },
            minLong: {
              // 下右上左
              padding: [0, 0, remToPx(60/75), remToPx(373/75)],
              color: "#000",
              fontSize: remToPx(39/75),
              fontFamily: 'DIN-Medium',
            },
            max: {
              // 下右上左
              padding: [0, remToPx(407/75), remToPx(60/75), 0],
              color: "#000",
              textAlign: 'center',
              width: '200',
              fontSize: remToPx(39/75),
              fontFamily: 'DIN-Medium',
            },
          },
        }, //刻度节点文字颜色
        pointer: {
          show: false,
          //   width: 8,
          //   length: "90%",
        },
        detail: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: [[per, 'rgba(255,255,255, 0.1)'],[1,'rgba(0,0,0,0)']],
            width: remToPx(10/75),
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            opacity: 1,
          },
        },
        data: nowData,
        animationDuration: 4000,
      },{
        name: "绿色最外",
        type: "gauge",
        radius: "114%",
        startAngle, //刻度起始
        endAngle, //刻度结束
        center,
        min,
        max,
        splitNumber: 1,
        z: 4,
        axisTick: {
          show: false,
        },
        splitLine: {
          length: remToPx(16/75), //刻度节点线长度
          show: false,
          lineStyle: {
            width: remToPx(2/75),
            color: "#39c77f",
          }, //刻度节点线
        },
        axisLabel: {
          show: false
        }, //刻度节点文字颜色
        pointer: {
          show: false,
          //   width: 8,
          //   length: "90%",
        },
        detail: {
          show: false,
        },
        title: {

        },
        axisLine: {
          show: true,
          lineStyle: {
            color: [[per, 'rgb(57, 199, 127)'],[1,'rgba(0,0,0,0)']],
            width: remToPx(2/75),
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            opacity: 1,
          },
        },
        data: nowData,
        animationDuration: 4000,
      },{
        name: '内部半透明',
        type: 'pie',
        center,
        radius: '100%',
        startAngle: -180,
        tooltip: {
          show: false
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,

        },
        splitLine: {
          show: false,
        },
        detail: {
          show: false
        },
        title: { //标题
          show: false,
        },
        data: [{
          value: nowData,
          itemStyle: {
            normal: {
              color: 'rgba(57, 199, 127, 0.1)'
            }
          }
        }, {
          value: max-nowData,
          itemStyle: {
            normal: {
              color: 'rgba(0,0,0,0)'
            }
          }
        }, {
          value: max,
          itemStyle: {
            normal: {
              color: 'rgba(0,0,0,0)'
            }
          }
        }],
        pointer: {
          show: false,
        },
        animationDuration: 4000,
      },
    ],
  };
  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  const clientHeight = client.clientHeight;
  myChart.clear();
  myChart.resize({width: clientWidth, height: clientHeight});
  myChart.setOption(option);
};

/**
 * 表格中的百分比bar
 *
 * */
export const percentBar = (id, data, maxData, color, flag=0) => {
  let colorLayer = ['#17E0FD', '#FAFAFA', '#1E7CCE'];
  // const topTenData = data;
  // let topTenName = [];
  // let topTenNum = [];
  // let topTenMaxArray = [];
  // topTenData.forEach(item => {
  //   topTenName.push(item.serviceName);
  //   topTenNum.push(item.accessNum);
  //   topTenMaxArray.push(topTenMax);
  // });
  let option = {
    grid: {
      left: remToPx(20/75),
      right: remToPx(100/75),
      bottom: remToPx(0/75),
      top: (33 - (document.body.clientWidth-400) * (15/350)) + '%',
      height: '100%',
      // top: remToPx(9/75),
      // width: '68%',
      containLabel: true
    },
    tooltip: {
      show: false,
      trigger: 'axis',
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      borderColor: '#48607f',
      borderWidth: remToPx(1/75),
      textStyle: {
        fontSize: remToPx(18/75),
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
      },
      padding:[remToPx(5/75),remToPx(15/75)],
      axisPointer: {
        type: 'none',
      },
      // formatter: function (p) {
      //   let str = p[0].name+ ':<br>' + p[0].value + '条';
      //   return str;
      // }
    },
    xAxis: {
      show: false,
      type: 'value',
      max: maxData
    },
    yAxis: [{
      type: 'category',
      show: false,
      inverse: true,
      axisLabel: {
        show: false,
        inside: false,
        textStyle: {
          color: '#fff',
          fontSize: remToPx(16/75),
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
      // data: name
    }, {
      type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      show: false,
      data: data[0]
    }],
    series: [
      {
        name: '',
        type: 'bar',
        barWidth: remToPx(12/75),
        barGap: '-100%',
        data: [maxData],
        silent: true,
        label: {
          normal: {
            show: true,
            position: 'right',
            // position: [0, 0],
            textStyle: {
              rich: {
                name: {
                  color: '#000',
                  width: remToPx(75/75),
                  fontSize: remToPx(22/75),
                  fontWeight: 100,
                  align: 'right',
                  fontFamily: 'PingFang-SC-Medium',
                  padding: 0
                },
                value: {
                  color: '#000',
                  width: remToPx(75/75),
                  fontSize: remToPx(22/75),
                  fontWeight: 100,
                  align: 'right',
                  fontFamily: 'PingFang-SC-Medium',
                  padding: [0, 0, 0, remToPx(12/75)]
                }
              }
            },
            formatter: function (param) {
              // const index = flag === 1 ? param.dataIndex + 1 : param.dataIndex + 6;
              // let label = `{number|${index}}{name|${param.name}}` ;
              // debugger;
              let label = '';
              if (flag===0) {
                label = `{name|${data[param.dataIndex].toFixed(2)}}` ;
              } else if(flag===1&&data[param.dataIndex].length>5&&data[param.dataIndex].length<9) {
                label = `{value|${adjustNumShow(data[param.dataIndex],10,7,1)}}` ;
              } else if(flag===1) {
                label = `{name|${adjustNumShow(data[param.dataIndex],10,7,1)}}` ;
              }
              return label;
            }
          }
        },
        itemStyle: {
          normal: {
            color: '#dfe8f1',
          }
        },
      },
      {
      name: '',
      type: 'bar',
      itemStyle: {
        normal: {
          color: color[0]
        }
      },
      barWidth: remToPx(12/75),
      data: data,
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

/**
 * 双条形图+折线图
 * data.series[0].type='line',1bar,2bar
 * */
export const situationLineAndBarChart = (id, data) => {
  let dataLegend = [];
  data.legends.forEach((item, index) => {
    if(index > 0) {
      dataLegend.push({
        name: item,
        icon: 'rect',
      })
    } else {
      dataLegend.push({
        name: item,
      })
    }
  });
  let option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      borderColor: '#48607f',
      borderWidth: remToPx(1/75),
      textStyle: {
        fontSize: remToPx(18/75),
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
      },
      padding:[remToPx(10/75),remToPx(25/75)],
      axisPointer: {
        type: 'none',
      }
    },
    grid: {
      top: data.gridTop ? data.gridTop : '16%',
      left:data.gridLeft?data.gridLeft:'10%',
      right: data.gridRight?data.gridRight:'10%',
      bottom: data.gridBottom ? data.gridBottom : '15%',
    },
    legend: [{
      data: dataLegend.slice(1,3),
      top: changeWithWidth(3,6,8)+'%',
      itemWidth: remToPx(16/75),
      itemHeight: remToPx(16/75),
      right: data.legendRight ? data.legendRight : '32%',
      textStyle: {
        color: "#000",
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Medium',
      }
    },
      {
        data: dataLegend.slice(0,1),
        top: changeWithWidth(3,6,8)+'%',
        itemWidth: remToPx(36/75),
        itemHeight: remToPx(16/75),
        right: data.lineLegendRight ? data.lineLegendRight : '16%',
        textStyle: {
          color: "#000",
          fontSize: remToPx(22/75),
          fontFamily: 'PingFang-SC-Medium',
        }
      }],
    xAxis: {
      show: true,
      type: 'category',
      // boundaryGap: false,
      data: data.xaxis,
      axisLabel: {
        rotate:data.rotate? data.rotate:'',
        // margin: 5,
        interval:0,  //设置这里
        color: data.rotate? '#838383' :'#000',
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Bold',
      },
      axisLine: {
        show: true,
        lineStyle:{
          color: '#e1e1e1',
        }
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle:{
          color: '#e1e1e1',
        }
      }
    },
    yAxis: [
      {
        show: true,
        name: data.yaxis[0] == null ? '' : '(' + data.yaxis[0] + ')',
        nameTextStyle: {
          color: '#838383',
          fontSize: remToPx(22/75),
        },
        type: 'value',
        position: 'left',
        axisLabel: {
          margin: remToPx(5/75),
          color: '#838383',
          fontSize: remToPx(22/75)
        },

        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle:{
            color: '#e1e1e1',
          }
        },
        axisLine: {
          show: false,
        }
      }, {
        show: true,
        name: data.yaxis[1] == null ? '' : '(' + data.yaxis[1] + ')',
        nameTextStyle: {
          color: '#868d96',
          fontSize: remToPx(22/75),
        },
        type: 'value',
        position: 'right',
        axisLabel: {
          margin: remToPx(5/75),
          color: '#838383',
          fontFamily: 'PingFang-SC-Medium',
          fontSize: remToPx(22/75)
        },

        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle:{
            color: '#e1e1e1',
          }
        },
        axisLine: {
          show: false,
        }
      }
    ],
    series: [
      {
        name: data.series[0].name,
        type: "line",
        showAllSymbol: false,
        symbol: 'emptyCircle',
        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
        symbolSize: 0, //标记的大小
        itemStyle: {
          normal: {
            width: remToPx(4/75),
            color: data.lineColor ? data.lineColor : '#ff4653', //拐点颜色
            borderColor: data.lineColor ? data.lineColor : '#ff4653',
          }
        },
        lineStyle: {
          normal: {
            color: data.lineColor ? data.lineColor : "#ff4653",
            borderColor: data.lineColor ? data.lineColor : '#ff4653',
            borderWidth: 0,
            shadowColor: 'rgba(0,0,0,0.1)',
            shadowWidth: remToPx(5/75)
          },
        },
        data: data.series[0].data,
      },
      {
        name: data.series[1].name,
        type: 'bar',
        barGap: 0,
        barWidth: remToPx(8/75),
        itemStyle:{
          normal: {
            color: '#1a79c8',
          }
        },
        data: data.series[1].data,
      }, {
        name: data.series[2].name,
        type: "bar",
        barWidth: remToPx(8/75),
        barGap: 0,
        itemStyle:{
          normal: {
            color: '#f99b37',
          }
        },
        data: data.series[2].data,
      }
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



/**
 * 单条形图+折线图
 * data.series[1].type='line',0bar
 * */
export const LineAndBarChart = (id, data) => {
  let dataLegend = [];
  data.legends.forEach((item, index) => {
    if(index > 0) {
      dataLegend.push({
        name: item,
        icon: 'line',
      })
    } else {
      dataLegend.push({
        name: item,
      })
    }
  });
  let option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      borderColor: '#48607f',
      borderWidth: remToPx(1/75),
      textStyle: {
        fontSize: remToPx(18/75),
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
      },
      padding:[remToPx(10/75),remToPx(25/75)],
      axisPointer: {
        type: 'none',
      }
    },
    grid: data.containLabel ? {
      top: data.gridTop ? data.gridTop : '16%',
      left:data.gridLeft?data.gridLeft:'3%',
      right: data.gridRight?data.gridRight:'3%',
      bottom: data.gridBottom ? data.gridBottom : '15%',
      containLabel: true,
    }:{
      top: data.gridTop ? data.gridTop : '16%',
      left:data.gridLeft?data.gridLeft:'10%',
      right: data.gridRight?'5%':'12%',
      bottom: data.gridBottom ? data.gridBottom : '15%',
    },
    legend: {
      data: dataLegend,
      top: '6%',
      itemWidth: remToPx(14/75),
      itemHeight: remToPx(14/75),
      right: data.legendRight ? data.legendRight : '22%',
      textStyle: {
        color: "#000",
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Medium',
      }
    },
    xAxis: {
      show: true,
      type: 'category',
      // boundaryGap: false,
      data: data.xaxis,
      axisLabel: {
        // margin: 5,
        interval:0,  //设置这里
        color: '#000',
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Bold',
      },
      axisLine: {
        show: true,
        lineStyle:{
          color: '#e1e1e1',
        }
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle:{
          color: '#e1e1e1',
        }
      }
    },
    yAxis: [
      {
        show: true,
        name: data.yaxis[0] == null ? '' : '(' + data.yaxis[0] + ')',
        nameTextStyle: {
          color: '#838383',
          fontSize: remToPx(22/75),
        },
        type: 'value',
        position: 'left',
        axisLabel: {
          margin: remToPx(5/75),
          color: '#838383',
          fontSize: remToPx(22/75)
        },

        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle:{
            color: '#e1e1e1',
          }
        },
        axisLine: {
          show: false,
        }
      }, {
        show: true,
        name: data.yaxis[1] == null ? '' : '(' + data.yaxis[1] + ')',
        nameTextStyle: {
          color: '#868d96',
          fontSize: remToPx(22/75),
        },
        type: 'value',
        position: 'right',
        axisLabel: {
          margin: remToPx(5/75),
          color: '#838383',
          fontFamily: 'PingFang-SC-Medium',
          fontSize: remToPx(22/75)
        },

        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle:{
            color: '#e1e1e1',
          }
        },
        axisLine: {
          show: false,
        }
      }
    ],
    series: [
      {
        name: data.series[0].name,
        type: 'bar',
        barWidth: remToPx(8/75),
        itemStyle:{
          normal: {
            color: '#1a79c8',
          }
        },
        data: data.series[0].data,
      },
      {
        name: data.series[1].name,
        type: "line",
        showAllSymbol: false,
        symbol: 'emptyCircle',
        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
        symbolSize: 0, //标记的大小
        itemStyle: {
          normal: {
            width: remToPx(4/75),
            color: '#ff4653', //拐点颜色
            borderColor: '#ff4653',
          }
        },
        lineStyle: {
          normal: {
            color: "#ff4653",
          },
          borderColor: '#ff4653'
        },
        data: data.series[1].data,
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

/**
 * 条形图+折线图
 * */

export const agricultureLineAndBarChart = (id, data) => {
  let dataLegend = [];

  let option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      borderColor: '#48607f',
      borderWidth: remToPx(1/75),
      textStyle: {
        fontSize: remToPx(18/75),
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
        align:'left'
      },
      position:['30%','50%'],
      padding:[remToPx(10/75),remToPx(25/75)],
      // margin:[remToPx(10/75),remToPx(25/75)],
      axisPointer: {
        type: 'none',
      }
    },
    grid: {
      top: data.gridTop ? remToPx(data.gridTop/75) : remToPx(85/75),
      left:data.gridLeft?remToPx(data.gridLeft/75):'10%',
      right: data.gridRight?remToPx(data.gridRight/75):'12%',
      bottom: data.gridBottom ?remToPx(data.gridBottom/75) : remToPx(110/75),
    },
    legend: {
      data: data.legends,
      top: data.legendTop? remToPx(data.legendTop/75):remToPx(40/75),
      right: data.legendRight ? data.legendRight : '18.5%',
      itemWidth: remToPx(24/75),
      itemHeight: remToPx(14/75),
      textStyle: {
        color: "#000",
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Medium',
      }
    },
    xAxis: {
      show: true,
      type: 'category',
      // boundaryGap: false,
      data: data.xaxis,
      axisLabel: {
        // margin: 5,
        interval:0,  //设置这里
        color:data.xRotate?'#838383':'#000',
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Bold',
        rotate: data.xRotate ? data.xRotate : 0,
        //判断横坐标名称的长度，长度超过固定值，超出部分进行隐藏。
        formatter: function(value) {
          var res = value;
          // if(res.length > 5) {
          //   res = res.substring(0, 5) + "...";
          //
          // }
          return res;
        },
      },
      axisLine: {
        show: true,
        lineStyle:{
          color: '#e1e1e1',
        }
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle:{
          color: '#e1e1e1',
        }
      }
    },
    yAxis: [
      {
        show: true,
        name: data.yaxis[0] == null ? '' : '(' + data.yaxis[0] + ')',
        nameTextStyle: {
          color: '#838383',
          fontSize: remToPx(22/75),
        },
        type: 'value',
        position: 'left',
        axisLabel: {
          margin: remToPx(5/75),
          color: '#838383',
          fontSize: remToPx(22/75)
        },

        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle:{
            color: '#e1e1e1',
          }
        },
        axisLine: {
          show: false,
        }
      }, {
        show: true,
        name: data.yaxis[1] == null ? '' : '(' + data.yaxis[1] + ')',
        nameTextStyle: {
          color: '#868d96',
          fontSize: remToPx(22/75),
          padding: [0,0,0,data.rightUnitPaddingleft?data.rightUnitPaddingleft:0]
        },
        type: 'value',
        position: 'right',
        axisLabel: {
          margin: remToPx(5/75),
          color: '#838383',
          fontFamily: 'PingFang-SC-Medium',
          fontSize: remToPx(22/75)
        },

        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle:{
            color: '#e1e1e1',
          }
        },
        axisLine: {
          show: false,
        }
      }
    ],
    series: [
      {
        name: data.series[0].name,
        type: 'bar',
        barWidth: remToPx(40/75),
        // label:{
        //   show: true,
        //   position: 'top'
        // },
        itemStyle:{
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: "#46aafd"
            },
              {
                offset: 1,
                color: "#1a79c9"
              }
            ])
          }
        },
        data: data.series[0].data,
      },
      {
        name: data.series[1].name,
        type: "line",
        showAllSymbol: false,
        symbol: 'circle',
        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
        symbolSize: remToPx(11/75), //标记的大小
        itemStyle: {
          width: remToPx(11/75),
          color: '#39c77f',
          borderColor: '#ffffff',
          borderWidth:remToPx(2/75)
        },
        lineStyle: {
          normal: {
            color: "#39c77f",
            width:remToPx(4/75),
            borderColor:'rgba(0,0,0,0.1)',
            borderWidth:remToPx(3/75)
          },
          borderColor: '#ffffff'
        },
        data: data.series[1].data,
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

/**
 * 民生服务百分比柱状图
 * */
export const greenPercentBar = (id, data, left=0, width=290) => {
  let maxData = data > 100 ? data : 100;
  // data=data.toFixed(2);
  // let colorLayer = ['#17E0FD', '#FAFAFA', '#1E7CCE'];
  let option = {
    grid: {
      left: remToPx(left/75),
      right: '0',
      bottom: 0,
      top: remToPx(43/75),
      width: remToPx(width/75)
    },
    xAxis: {
      show: false,
      type: 'value',
      max: maxData
    },
    yAxis: [{
      type: 'category',
      show: false,
      inverse: true,
      axisLabel: {
        show: false,
        inside: false,
        textStyle: {
          color: '#fff',
          fontSize: remToPx(16/75),
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
      // data: name
    }, {
      type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      show: false,
      data: [data]
    }],
    series: [
      {
        name: '',
        type: 'bar',
        zlevel: 1,
        itemStyle: {
          normal: {
            color: '#39c77f',
            barBorderRadius: remToPx(15/75),
          },
        },
        silent: true,
        label: {
          normal: {
            show: true,
            position: 'insideBottomRight',
            formatter: '{c}'+'%',
            distance: 0,
            // offset: [data<15?remToPx((50+(80/15*(15-data)))/75):remToPx(40/75), -remToPx(24/75)],
            // offset: [data<15?remToPx((40+(96/15*(15-data)))/75):remToPx(40/75), -remToPx(24/75)],
            offset: [remToPx(40/75), -remToPx(24/75)],
            color: '#39c77f',
            fontSize: remToPx(22/75),
            fontFamily: 'DIN-Medium',
            padding: [remToPx(7/75), remToPx(12/75), remToPx(10/75), remToPx(12/75)],
            // borderWidth:50,
            backgroundColor:{
              // image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAqCAYAAABBRS51AAACVklEQVR4nO2bW27bMBBFj6jELxQG5P6kj2QfWV2X1320TYMWQR4uECVOZPVjSFW1JUWqYpNy5wAEDIs2CF4Nh5wZRuefP9GRmW1jYATEgOn6JwfOGsiAJ+ABuLetNUct+8VAAsw7/OZ/xth2jLzEC0SoO+DGfm7kpUmOEEEWqFX0JUbmMQGubcvrOjcJMwLeIUuW8npEwFvgDXABPFd1qrOCKXCKirJLxsAZMKl6WCXMFPiImJ6yW44QA5htPtgU5hj4gJibsh8i4D3iOgpMRQd18vvHIP48Kn/hSFCf4pMxsmsD/ggTl79UvLHA7pSdMAm6hIWAOzcWYsz9jUXZYA5EBtkea5glHGJgaqjYQyvemRlqTp6KVyYuAqqExcig/iVEYoOGX0IkMjTkBBRv5IaafIDilcwgeWklLFYGKRZQwuLB0LF6Q9kL9wZIUT8TEhmQuiDm0udIlL9YYndlILVOa4+DUYQc0aII+2dInZPil2usWyknx26ARy/DUUDmvjCOsjA5cIkuaT5YI3NfRGE208krpDpQwzT7Iwe+I3NfUJXnT4FvtCh8VnqzRgxh6yxZV4CRAl9Rn7NLHoEv1Bzwm3IxK/vDBCmC1vTA65DTs9q//Cd36P2Yvrj7Mbe0iLS0neQMuLLN3SibIGlpvVG2TdWNspQOm6p/efs7X1vbEXPgpGXfZ2RZHkxMcMhv+pJ20Qq38xmMKDBsYUCW1qYArDsjDG53OXRhAH5Qv7Q2PQuaQxCmzipesqagOQRhYNuP3DLwaPmhCAMiygXwC/jpeSy9+Q2WLXw908CNygAAAABJRU5ErkJggg=='
            },
            // "rgba(57,199,127,0.15)",
            borderRadius: remToPx(18/75),
            // {

            //   // image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAA+CAYAAAD5wvNAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA0xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjQ3NTQ1RkVGOUM1MTFFOEJCQTdENzhFNjM5MzM3NkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjQ3NTQ1RkRGOUM1MTFFOEJCQTdENzhFNjM5MzM3NkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE5M2UxZjIxLTQyMmYtMTE3Yy05MTVlLWVhNzA0NDUwYzIzOSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE5M2UxZjIxLTQyMmYtMTE3Yy05MTVlLWVhNzA0NDUwYzIzOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvulhDwAAAQ3SURBVHja7J1JaBRBGIX/iZEQN1CjwVxUcL+4hUnUU8SDHjQiiqJR0EOCYMAtIG4HRQXBBUQkXgQxxoOieJZ4UzO4oAe3CKJoQI2IGhUTZHz/dI12mul090xcJvU+ePSkpqsTXr1Ud81Ud8UW1SZFYuJgtsn0z+Iqd+2TFPHWGY1tFVSJ96ZgOx5lo7AdDBX9OmbMczx3mas8076BZQUhfoe3ns+xve/7/X6JcpyIZRK17u+2+I7tF5S/w+vneP0YuoXX16G33mMk5kkkCiV7RkLroNXQbE/Tk39HkdEIaDK00JTr//kd6Dx0FnqfzcELsqgzBjoCvYCOQuUMS14QM22lbfYSOgGV/cnAaG/UAD2FtkKD2QZ5yyBoE/QkfkMaoIF9HZiJerqDDkND6He/YYhp0wRCM62vAlMN3YZm0t9+ywyoNX5TluYamFroEjSMnlrR21xEaGqzDcxGqBEaQC+tQdu6MX4r1faRArPEXEUTOzkRb01lIFRgpkJN7Fms72maEJqpQYHR4VUzR0LEZKA5nug55PYGZjM0nV4Rg2Zhi19g9FO/vfSIeNiDXqYsU2B28lREfE5Nu7yBKYE20Bviw3r0MiXuwNRAxfSF+FBsMtIjMIT0xpp0YEZDs+gHCWC2XvxqYOYL57OQYDQjVRqYCnpBQlKugZlCH0hIJmtgJtAHEpKJGphS+kBCUqqBGUofSEiGFtADEgUGhjAwhIEhDAzJQ7o0MJ/pAwnJZw3MG/pAQvJBA/OMPpCQtGlgHtMHEpInGphW+kBCckcDo08mStILEoBmpCV90XuXfpAA7ibi0p7+HOYc/SAB6KPOxB2Yb/SE+KDZOOsOTAd0hr4QH87gdNThDoxyAOqkN8RDp8mGeAPTDu2jP8TDfr3YzRQY5Th0jx4Rg2bhmLvAG5huaCX0iV5Zj34pvQq9S3dvgVHaoLXQD3pmLdr2NYmK1DOZJSgwylWonr5ZSz3CcjXTG71NoDoF1bGnsa5nqUtUptpeogZGOQ0t5zWNNcPnFYk5qTaXbAOjXBFnUQOOnvov96EKhOVy0I5h5/TqhXClOI+u4lcI/Qdty91QPDFXHoapEGUSeBd0UJyFKnRs/oV+5y1foZPQJATlANQVtmI2dw28Fmf5m3Fmq4s2cT7N/096gS1ts7HiLH/zKupBclmRrcP0NCq9ob9KnGfN6NOjnSX8nCcwDmRb/VW6zQWss4SfyCNxZlXqRLmcJ/wX9tEfqX/IBaN84RC0I8dj6Opm22xKo803sulziZtyqK91t9tmms2B0XO6Ppv4WhZ1W0zdJANjFzo6qJZod07o/Odlpq4wMHYOMRdLuBv6dB9d1vejrWYxMA46olhktrnsw8BYhPYeC3x6j84IvRADYxEPMlyfZHOdw8BYhHsElB5JtdAWh0JakBH9jGW4OJ9UN9GO3/wUYAAaXtVsjsG1HQAAAABJRU5ErkJggg=='
            //    // image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600747757743&di=30dc68092f209c12619342ce37f121a7&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F19%2F04%2F22%2F5bf415f7b0624d522e684bd3dce205ff.jpg"
            // }
          }
        },
        barWidth: remToPx(20/75),
        data: [data],
      },
      {
        name: '',
        type: 'bar',
        barGap: '-100%',
        data: [maxData],
        silent: true,
        barRadius: remToPx(10/75),
        barWidth: remToPx(20/75),
        itemStyle: {
          normal: {
            barBorderRadius: remToPx(15/75),
            color: '#e5e5e5',
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
/**
 * 民生服务百分比环形图
 * */
export const orangePercentBar = (id, data) => {
  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  const clientHeight = client.clientHeight;
  let maxData = data.value > 100 ? data.value : 100;
  // let colorLayer = ['#17E0FD', '#FAFAFA', '#1E7CCE'];
  let option = {
    grid: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    legend: {
      show: true,
      trigger: 'item',
      bottom: remToPx(0/75),
      left: remToPx(23/75),
      itemHeight: remToPx(11/75),
      itemGap: remToPx(42/75),
      data: data.legend,
      textStyle: {
        rich: {
          a: {
            color: '#838383',
            padding: [0, 0, 0, -remToPx(changeWithWidth(20,5,0)/75)],
            fontSize: remToPx(20/75),
          }
        }
      },
      formatter: function(data){
        return '{a|' + data + '}'
      },
      icon: 'circle',
    },
    title: {
      text: '{value|'+data.value+'}{unit|%}',
      x: remToPx(changeWithWidth(164,167,169)/75),
      y: remToPx(changeWithWidth(89,91,93)/75),
      textAlign: 'center',
      textVerticalAlign: 'center',
      textStyle: {
        fontSize: remToPx(36/75),
        color: '#f0993c',
        fontFamily: 'DIN-Medium',
        // textAlign: 'center',
        // textVerticalAlign: 'center',
        rich: {
          value: {
            fontSize: remToPx(36/75),
            fontFamily: 'DIN-Medium',
            height: remToPx(36/75)
          },
          unit: {
            fontSize: remToPx(20/75),
            fontFamily: 'DIN-Medium',
            padding: [0, 0, remToPx(10/75), 0],
          }
        },
      },
    },
    polar: {
      radius: [remToPx(59.5/75), remToPx(69.5/75)],
      center: ['50%', '41.5%'],
    },
    angleAxis: {
      max: maxData,
      show: false,
    },
    radiusAxis: {
      type: 'category',
      show: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,

      },
      axisTick: {
        show: false
      },
    },
    series: [
      {
        name: data.legend[0],
        type: 'pie',
        radius: [remToPx(75/75), remToPx(85/75)],
        center: ['50%', '41.5%'],
        barWidth: remToPx(60/75),
        showBackground: true,
        color: 'rgba(240,153,60,0.2)',
        data: [maxData],
        silent: true,
        label: {
          show: false
        },
        // coordinateSystem: 'polarB',
      }, {
        name: data.legend[1],
        type: 'bar',
        roundCap: true,
        barWidth: remToPx(60/75),
        z: 1,
        showBackground: false,
        color: '#f0993c',
        backgroundStyle: {
          color: '#2e2856',
        },
        label: {
          show: false
        },
        data: [data.value],
        coordinateSystem: 'polar',
      },

    ]
  };

  myChart.clear();
  myChart.resize({width: clientWidth, height: clientHeight});
  myChart.setOption(option);
};

/**
 * 民生服务百分比环形图-绿色
 * */
export const greenPercentPie = (id, data) => {
  let maxData = data.value > 100 ? data.value : 100;
  // let colorLayer = ['#17E0FD', '#FAFAFA', '#1E7CCE'];
  let option = {
    grid: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    legend: {
      show: false,
    },
    title: {
      text: '{value|'+data.value+'}{unit|%}',
      x: remToPx((changeWithWidth(160,162,164))/75),
      y: remToPx((changeWithWidth(101,105,107))/75),
      textAlign: 'center',
      textVerticalAlign: 'center',
      textStyle: {
        fontSize: remToPx(36/75),
        color: '#56cd8f',
        fontFamily: 'DIN-Medium',
        textAlign: 'center',
        textVerticalAlign: 'center',
        rich: {
          value: {
            fontSize: remToPx(36/75),
            fontFamily: 'DIN-Medium',
          },
          unit: {
            fontSize: remToPx(20/75),
            fontFamily: 'DIN-Medium',
          }
        },
      },
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: [remToPx(55/75), remToPx(81/75)],
        center: ['50%', '50%'],
        barWidth: remToPx(60/75),
        showBackground: true,
        color: '#56cd8f',
        data: [data.value],
        silent: true,
        label: {
          show: false
        },
        // coordinateSystem: 'polarB',
      }
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
/**
 * 民生服务堆叠柱状图
 * */
export const livelihoodTwoStackBar = (id, dataLeft, dataRight) => {
  let count = dataLeft + dataRight;
  let option = {
    grid: {
      left: '0',
      top: remToPx(-32/75),
      right: '0',
      bottom: '0',
    },
    xAxis: {
      show: false,
      max: count,
    },
    yAxis: {
      show: false,
      type: 'category',
      data: ['left', 'right'],
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.3)'
        }
      },
    },
    series: [{
      name: 'left',
      type: 'bar',
      stack: 'sum',
      barWidth: remToPx(32/75),
      itemStyle: {
        normal: {
          color: function(params) {
            return new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
              offset: 0,
              color: "#1a79c9" // 0% 处的颜色
            },
              {
                offset: 1,
                color: "#46aafd" // 100% 处的颜色
              }
            ], false)
          }
        },
      },
      data: [dataLeft]
    },
      {
        name: 'right',
        type: 'bar',
        stack: 'sum',
        barWidth: remToPx(32/75),
        itemStyle: {
          normal: {
            color: function(params) {
              return new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                offset: 0,
                color: "#febb52" // 0% 处的颜色
              },
                {
                  offset: 1,
                  color: "#f0993c" // 100% 处的颜色
                }
              ], false)
            }
          },
        },
        data: [dataRight]
      }
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

/*
 * 文化旅游饼图
 * 容器宽750高450px
 */
export const pieChartY = (id,data,adjust = {}) => {
  let seriesData = [];
  let nameData = [];
  let sum = 0
  let unit = data[0].unit ? ('('+ data[0].unit + ')') : '';
  data.forEach((item) => {
    seriesData.push({
      name: item.name,
      value: item.value,
      unit: item.unit
    });
    sum = sum + item.value
    nameData.push(item.name)
  });
  sum = adjust.titleNoFixed? sum.toFixed(0) : sum.toFixed(2);
  let colorList = seriesData.length > 4
    ? ['#1a79c9', '#71bcff', '#29b3cc', '#39c77f', '#f99b37', '#ef5150', '#f9db63','#a07bce','#c4c4c4']
    : ['#1a79c9', '#39c77f', '#f99b37', '#29b3cc']

  let option = {
    grid: {
      width: remToPx(10),
      height: remToPx(450/75),
    },
    title: {
      text: '{value|'+ sum + '}'+ '\n' + '{unit|' + unit + '}',
      x: remToPx(changeWithWidth(186,192,192)/75),
      y: remToPx(188/75),
      textAlign: 'center',
      textStyle: {
        rich: {
          value: {
            fontSize: remToPx(46/75),
            color: '#353535',
            fontWeight:'bold',
            lineHeight: remToPx(46/75),
            padding: [0, remToPx(0/75), 0,remToPx(0/75)],
            fontFamily:'PingFang-SC-Medium',
            align: 'center',
            width: remToPx(50/75),
          },
          unit: {
            fontSize: remToPx(24/75),
            lineHeight: remToPx(40/75),
            color: 'rgba(28,28,28,0.6)',
            fontWeight:'normal',
            align: 'center',
            fontFamily:'PingFang-SC-Medium'
          },

        }
      },
    },
    color: colorList,
    legend: {
      orient: 'vertical',
      selectedMode: false,
      icon: 'circle',
      x: adjust.legendX ? adjust.legendX : '51%',
      y: 'center',
      data: seriesData,
      itemWidth: remToPx(12/75),
      itemHeight: remToPx(12/75),
      itemGap: remToPx(18/75),
      align: 'left',
      textStyle: {
        rich: {
          name: {
            fontSize: remToPx(24/75),
            color: '#353535',
            // padding: [0, 0, 0, remToPx(12/75)],
            fontFamily:'PingFang-SC-Medium',
            align: 'left',
            padding: [0,0,0,remToPx(6/75)],
            width: remToPx((adjust.textLeft?adjust.textLeft:221)/75),
          },
          value: {
            fontSize: remToPx(24/75),
            color: '#353535',
            fontWeight:'bold',
            padding: [0, remToPx(0/75), 0,remToPx(0/75)],
            fontFamily:'PingFang-SC-Medium',
            align: 'right',
            width: remToPx((adjust.textRight?adjust.textRight:50)/75),
          },
          // unit: {
          //   fontSize: remToPx(24/75),
          //   color: '#353535',
          //   fontWeight:'bold',
          //   fontFamily:'PingFang-SC-Medium'
          // },

        }
      },
      formatter: function(name) {
        let res = seriesData.filter(v => v.name === name);
        res = res[0] || {};
        return '{name|' + name + '}  {value|' + res.value +'}'
      }
    },
    series: [{
      type: 'pie',
      radius: [remToPx(107/75), remToPx(157/75)],
      padding:[remToPx(58/75),remToPx(84/75),remToPx(80/75),remToPx(65/75)],
      center: [remToPx(195/75), '50%'],
      data: seriesData,
      hoverAnimation: false,
      label: {
        show: false,
      },
    }]
  };

  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  const clientHeight = client.clientHeight;
  myChart.clear();
  myChart.resize({width: clientWidth, height: clientHeight});
  myChart.setOption(option);

};
/**
 * 对长度大于adjustNumTh的数字省略为xx万/xx亿；保留fixedLen小数位；
 * 对小于adjustNumTh大于addDotTH的数隔三位添加逗号；
 *
 */
export const adjustNumShow = (str, addDotTh = 4, adjustNumTh = 8, fixedLen = 2) => {
  if (str.toString().length > 16|| isNaN(Math.round(str))) {
    return '数字应小于9999 9999 9999 9999，或输入非数字'
  }
  let nstr = str;
  if (str.toString().length >= adjustNumTh) {
    if (parseFloat(nstr) > 1000000000000){
      nstr = nstr / 1000000000000;
      nstr = parseFloat(nstr).toFixed(fixedLen) + '万亿';
    } else if (parseFloat(nstr) > 100000000) {
      nstr = nstr / 100000000;
      nstr = parseFloat(nstr).toFixed(fixedLen) + '亿';
    } else if (parseFloat(nstr) > 10000) {
      nstr = nstr / 10000;
      nstr = parseFloat(nstr).toFixed(fixedLen) + '万';
    }
  } else {
    if (typeof(str) != 'string') {
      str = str.toString()
    }
    nstr = [];
    if (str.length >= addDotTh) {
      let t = 0;
      str = str.split('');
      for (let i = str.length; i > 0; i--, t++) {
        nstr[nstr.length] = str[i - 1];
        if (t == 2 && i != 1) {
          nstr[nstr.length] = ',';
          t = -1;
        }
      }
      nstr = nstr.reverse().join('');
    } else {
      nstr = str;
    }
  }
  return nstr.toString()
}

// 0堆叠柱状图(gao)
export const pileBarAndLineChart = (id, data) => {
  let option = {
    color: ["#f99b37", "#1a79cb"],
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      borderColor: '#48607f',
      borderWidth: remToPx(1/75),
      textStyle: {
        fontSize: remToPx(18/75),
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
      },
      padding:[remToPx(10/75),remToPx(25/75)],
      axisPointer: {
        type: 'none',
      }
    },
    grid: data.containLabel ? {
        top: data.gridTop ? data.gridTop : '16%',
        left:data.gridLeft?data.gridLeft:'3%',
        right: data.gridRight?data.gridRight:'5%',
        bottom: data.gridBottom ? data.gridBottom : '0%',
        containLabel: true,
      }:
      {
        top: data.gridTop ? data.gridTop : '16%',
        left:data.gridLeft?data.gridLeft:'10%',
        right: data.gridRight?'5%':'12%',
        bottom: data.gridBottom ? data.gridBottom : '15%',
      },
    legend: {
      data: data.legends,
      top: '6%',
      itemWidth: remToPx(14/75),
      itemHeight: remToPx(14/75),
      right: data.legendRight ? data.legendRight : '16%',
      textStyle: {
        color: "#000",
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Medium',
      }
    },
    xAxis: {
      show: true,
      type: 'category',
      // boundaryGap: false,
      data: data.xaxis,
      axisLabel: {
        // margin: 5,
        interval:1,  //设置这里
        color: '#000',
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Bold',
      },
      axisLine: {
        show: true,
        lineStyle:{
          color: '#e1e1e1',
        }
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle:{
          color: '#e1e1e1',
        }
      }
    },
    yAxis: [
      {
        show: true,
        name: data.yaxis[0] == null ? '' : '(' + data.yaxis[0] + ')',
        nameTextStyle: {
          color: '#838383',
          fontSize: remToPx(22/75),
        },
        type: 'value',
        position: 'left',
        axisLabel: {
          margin: remToPx(5/75),
          color: '#838383',
          fontSize: remToPx(22/75)
        },

        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle:{
            color: '#e1e1e1',
          }
        },
        axisLine: {
          show: false,
        }
      }, {
        show: true,
        name: data.yaxis[1] == null ? '' : '',
        nameTextStyle: {
          color: '#868d96',
          fontSize: remToPx(22/75),
        },
        type: 'value',
        position: 'right',
        axisLabel: {
          margin: remToPx(5/75),
          color: '#838383',
          fontFamily: 'PingFang-SC-Medium',
          fontSize: remToPx(22/75)
        },

        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle:{
            color: '#e1e1e1',
          }
        },
        axisLine: {
          show: false,
        }
      }
    ],
    series: [{
      name: data.series[0].name,
      type: "bar",
      stack: "总数",
      barWidth: remToPx(20/75),
      itemStyle: {
        normal: {
          barBorderRadius: remToPx(3/75),
        }
      },
      data: data.series[0].data,
    }, {
      name: data.series[1].name,
      type: "bar",
      stack: "总数",
      barWidth: remToPx(20/75),
      itemStyle: {
        normal: {
          barBorderRadius: remToPx(3/75),
        }
      },
      data: data.series[1].data,
    }]
  };
  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  const clientHeight = client.clientHeight;
  myChart.clear();
  myChart.resize({width: clientWidth, height: clientHeight});
  myChart.setOption(option);
};
// * 1 两条柱子图(gao)
export const BarChartDouble = (id, data) => {
  let dataLegend = [];
  data.legends.forEach((item, index) => {
    if(index > 0) {
      dataLegend.push({
        name: item,
        icon: 'rect',
      })
    } else {
      dataLegend.push({
        name: item,
      })
    }
  });
  let option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      borderColor: '#48607f',
      borderWidth: remToPx(1/75),
      textStyle: {
        fontSize: remToPx(18/75),
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
        align: 'left',
      },
      padding:[remToPx(10/75),remToPx(25/75)],
      axisPointer: {
        type: 'none',
      }
    },
    grid: {
      top: data.gridTop ? data.gridTop : '16%',
      left:data.gridLeft?data.gridLeft:'10%',
      right: data.gridRight?'5%':'12%',
      bottom: data.gridBottom ? data.gridBottom : '15%',
    },
    legend: {
      data: dataLegend,
      top: '6%',
      itemWidth: remToPx(14/75),
      itemHeight: remToPx(14/75),
      right: data.legendRight ? data.legendRight : '16%',
      textStyle: {
        color: "#000",
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Medium',
      }
    },
    xAxis: {
      show: true,
      type: 'category',
      // boundaryGap: false,
      data: data.xaxis,
      axisLabel: {
        // margin: 5,
        interval:0,  //设置这里
        color: '#000',
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Bold',
      },
      axisLine: {
        show: true,
        lineStyle:{
          color: '#e1e1e1',
        }
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle:{
          color: '#e1e1e1',
        }
      }
    },
    yAxis: [
      {
        show: true,
        name: data.yaxis[0] == null ? '' : '(' + data.yaxis[0] + ')',
        nameTextStyle: {
          color: '#838383',
          fontSize: remToPx(22/75),
        },
        type: 'value',
        position: 'left',
        axisLabel: {
          margin: remToPx(5/75),
          color: '#838383',
          fontSize: remToPx(22/75)
        },

        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle:{
            color: '#e1e1e1',
          }
        },
        axisLine: {
          show: false,
        }
      }, {
        show: true,
        name: data.yaxis[1] == null ? '' : '(' + data.yaxis[1] + ')',
        nameTextStyle: {
          color: '#868d96',
          fontSize: remToPx(22/75),
        },
        type: 'value',
        position: 'right',
        axisLabel: {
          margin: remToPx(5/75),
          color: '#838383',
          fontFamily: 'PingFang-SC-Medium',
          fontSize: remToPx(22/75)
        },

        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle:{
            color: '#e1e1e1',
          }
        },
        axisLine: {
          show: false,
        }
      }
    ],
    series: [
      {
        name: data.series[0].name,
        type: 'bar',
        barWidth: data.barWidth ? remToPx(data.barWidth/75) : remToPx(8/75),
        itemStyle:{
          normal: {
            color: '#1a79c8',
          }
        },
        data: data.series[0].data,
      }, {
        name: data.series[1].name,
        type: "bar",
        barWidth: data.barWidth ? remToPx(data.barWidth/75) : remToPx(8/75),
        itemStyle:{
          normal: {
            color: '#f99b37',
          }
        },
        data: data.series[1].data,
      }
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
//2横向柱状图(加背景图的)
//横向柱状图
export const horizontalBarImg = (id,data) => {
  let max = data.value > 100 ? data.value : 100;
  // console.log(max)
  let paddingTop = data.paddingTop ? data.paddingTop : '-160';
  let option = {
    // grid: {
    //   left: data.gridLeft ? data.gridLeft : '10%',
    //   right: data.gridRight ? data.gridRight : '25%',
    //   top: data.gridTop ? data.gridTop : '30%',
    //   bottom: data.gridBottom ? data.gridBottom : '0',
    //   // containLabel: true,
    // },
    grid: {
      left: '10%',
      right: '15%',
      top: '30%',
      bottom: '0',
      // containLabel: true,
    },
    // grid: {
    //   left: data.gridLeft ? data.gridLeft : remToPx(83/75),
    //   right: data.gridRight ? data.gridRight : remToPx(65/75),
    //   top: data.gridTop ? data.gridTop : remToPx(114/75),
    //   bottom: data.gridBottom ? data.gridBottom : remToPx(100/75),
    // },
    tooltip: {
      show: true,
      trigger: 'axis',
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      borderColor: '#48607f',
      borderWidth: remToPx(1/75),
      textStyle: {
        fontSize: remToPx(18/75),
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
      },
      padding:[remToPx(5/75),remToPx(15/75)],
      axisPointer: {
        type: 'none',
      },
      formatter: function (p) {
        let str = p[0].name+ ':<br>' + p[0].value + '%';
        return str;
      }
    },
    xAxis: [
      {
        max: max,
        //左侧柱状图的X轴
        gridIndex: 0,//x 轴所在的 grid 的索引
        show: false
      }],
    yAxis: [
      {
        //左侧柱状图的Y轴
        type: 'category',
        gridIndex: 0,//y轴所在的 grid 的索引
        splitLine: 'none',
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
          show: true,
          textStyle: {
            // width: '100%',
            fontSize: remToPx(24/75),
            fontFamily: 'PingFang-SC-Medium',
            color: '#1c1c1c',
            align: 'left',
            padding: [remToPx(-110/75),0,remToPx(56/75),remToPx(changeWithWidth(13,6,6)/75)]
          },
          formatter: function(value) {
            if (value.length <= 13) {
              return value;
            } else {
              return value.slice(0, 13) + '...'
            }
          }
        },
        data: [data.label],
        // inverse: true,
      },
      {
        //左侧柱状图的Y轴
        gridIndex: 0,//y轴所在的 grid 的索引
        splitLine: 'none',
        axisTick: 'none',
        axisLine: 'none',
        data: [data.value],
        inverse: true,
        axisLabel: {
          show: true,
          textStyle: {
            // width: '100%',
            // fontSize: remToPx(24/75),
            // fontFamily: 'PingFang-SC-Medium',
            // color: '#1c1c1c',
            // align: 'left',
            padding: [remToPx(-200/75),0,remToPx(56/75),remToPx(6/75)],
            align: 'center',
            height:'100%',
          },
        },
      }
    ],
    series: [{
      name: data.label,
      type: 'bar',
      xAxisIndex: 0,//使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
      yAxisIndex: 0,//使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
      data: [data.value],
      barWidth: remToPx(15/75),
      label: {
        normal: {
          show: true,
          position: 'insideBottomRight',
          formatter: '{c}'+'%',
          distance: 0,
          offset: [remToPx(40/75), -remToPx(24/75)],
          color: '#39c77f',
          fontSize: remToPx(22/75),
          fontFamily: 'DIN-Medium',
          padding: [remToPx(6/75), remToPx(12/75), remToPx(10/75), remToPx(13/75)],
          // borderWidth:50,
          backgroundColor:{
            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAqCAYAAABBRS51AAACVklEQVR4nO2bW27bMBBFj6jELxQG5P6kj2QfWV2X1320TYMWQR4uECVOZPVjSFW1JUWqYpNy5wAEDIs2CF4Nh5wZRuefP9GRmW1jYATEgOn6JwfOGsiAJ+ABuLetNUct+8VAAsw7/OZ/xth2jLzEC0SoO+DGfm7kpUmOEEEWqFX0JUbmMQGubcvrOjcJMwLeIUuW8npEwFvgDXABPFd1qrOCKXCKirJLxsAZMKl6WCXMFPiImJ6yW44QA5htPtgU5hj4gJibsh8i4D3iOgpMRQd18vvHIP48Kn/hSFCf4pMxsmsD/ggTl79UvLHA7pSdMAm6hIWAOzcWYsz9jUXZYA5EBtkea5glHGJgaqjYQyvemRlqTp6KVyYuAqqExcig/iVEYoOGX0IkMjTkBBRv5IaafIDilcwgeWklLFYGKRZQwuLB0LF6Q9kL9wZIUT8TEhmQuiDm0udIlL9YYndlILVOa4+DUYQc0aII+2dInZPil2usWyknx26ARy/DUUDmvjCOsjA5cIkuaT5YI3NfRGE208krpDpQwzT7Iwe+I3NfUJXnT4FvtCh8VnqzRgxh6yxZV4CRAl9Rn7NLHoEv1Bzwm3IxK/vDBCmC1vTA65DTs9q//Cd36P2Yvrj7Mbe0iLS0neQMuLLN3SibIGlpvVG2TdWNspQOm6p/efs7X1vbEXPgpGXfZ2RZHkxMcMhv+pJ20Qq38xmMKDBsYUCW1qYArDsjDG53OXRhAH5Qv7Q2PQuaQxCmzipesqagOQRhYNuP3DLwaPmhCAMiygXwC/jpeSy9+Q2WLXw908CNygAAAABJRU5ErkJggg=='
          },
          borderRadius: remToPx(18/75),
        }
      },
      itemStyle: {
        normal: {
          color: '#39c77f',
          barBorderRadius: remToPx(15/75),
        },
      },
      // z: 2
    },
      {
        name: '外框',
        type: 'bar',
        xAxisIndex: 0,//使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
        yAxisIndex: 0,//使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
        barGap: '-100%',
        data: [max],
        barWidth: remToPx(15/75),
        itemStyle: {
          normal: {
            color: '#e5e5e5',
            barBorderRadius: remToPx(15/75),
          }
        },

        z: 0
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
//3 横向多条柱子（  标题在上册）
export const horizontalBarsTop = (id, data) => {
  let yData = data.xaxis;
  let barData = data.series[0].data;
  let bgData = [];
  let colorList = data.colorList ? data.colorList : ['#1a79c9', '#46aafd'];
  let maxData = Math.max(...barData);
  maxData = maxData>100 ? maxData : 100;
  while (bgData.length < barData) {
    bgData[bgData.length] = 100;
  }
  // let paddingLeft = data.paddingLeft ? data.paddingLeft : '5';
  // console.log('11',colorList)
  let option = {
    grid: {
      left: '5%',
      right: '18%',
      bottom: '5%',
      top: '10%',
      // show:true,
    },
    xAxis: {
      show: false,
      type: 'value'
    },
    yAxis: [
      {
        //左侧柱状图的Y轴
        gridIndex: 0,//y轴所在的 grid 的索引
        splitLine: 'none',
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
          verticalAlign: 'bottom',
          align: 'left',
          // padding: [0, 0, 0, remToPx(-changeWithWidth(5,0,0)/75)],
          padding: [0, 0, remToPx(15/75), remToPx(changeWithWidth(15,5,5)/75)],
          textStyle: {
            fontFamily: 'PingFang-SC-Medium',
            color: '#1c1c1c',
            fontSize: remToPx(24/75),
          }
        },
        data: yData,
        inverse: true,
      },
    //   {
    //   type: 'category',
    //   inverse: true,
    //   axisLabel: {
    //     show: true,
    //     textStyle: {
    //       verticalAlign: 'bottom',
    //       fontSize: remToPx(24/75),
    //       fontFamily: 'PingFang-SC-Medium',
    //       color: '#1c1c1c',
    //       align: 'left',
    //       // padding: data.paddingLeft?data.paddingLeft:  [remToPx(-50/75),0,remToPx(10/75),remToPx(paddingLeft/75)]
    //       // padding:[remToPx(-50/75),remToPx(-190/75),remToPx(10/75),remToPx(7/75)]
    //       padding:[0,0,remToPx(15/75),remToPx(15/75)]
    //     },
    //     formatter: function(value) {
    //       return value;
    //       // return '<div style="display:inline-block; width:500px;">' + value+ '</div>';
    //     },
    //   },
    //   splitLine: {
    //     show: false
    //   },
    //   axisTick: {
    //     show: false
    //   },
    //   axisLine: {
    //     show: false
    //   },
    //   data: yData
    // },
      {
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
          padding: [0,0,0,remToPx(0/75)],
        },
        formatter: function(value) {
          return value;
        },
      },
      data: barData
    }],
    series: [{
      name: '',
      type: 'bar',
      zlevel: 1,
      showBackground: true,
      backgroundStyle: {
        color: '#f0f0f0'
      },
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
      barWidth: remToPx(20/75),
      data: barData
    },
      {
        name: '背景',
        type: 'bar',
        barWidth: remToPx(20/75),
        barGap: '-100%',
        data: bgData,
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
// 4 饼图 交通运输-交通项目投资
export const pieChartTitle = (id,data,adjust = {}) => {
  let seriesData = [];
  let nameData = [];
  data.forEach((item) => {
    seriesData.push({
      name: item.name,
      value: item.value,
      unit: item.unit
    });
    nameData.push(item.name)
  });
  let option = {
    backgroundColor: 'rgba(0,0,0,0)',
    color: ['#1a79c9', '#71bcff', '#29b3cc', '#39c77f', '#f99b37', '#ef5150', '#f9db63'],
    legend: {
      orient: 'vertical',
      icon: 'circle',
      x: adjust.legendX ? adjust.legendX : '61.7%',
      y: 'center',
      data: seriesData,
      itemWidth: remToPx(12/75),
      itemHeight: remToPx(12/75),
      align: 'left',
      textStyle: {
        rich: {
          name: {
            align: 'left',
            // width:100,
            width: remToPx((adjust.legendNameWidth?adjust.legendNameWidth:100)/75),
            fontSize: remToPx(24/75),
            color: '#353535',
            padding: [0, 0, 0, remToPx(3/75)],
            fontFamily:'PingFang-SC-Medium'
          },
          value: {
            align: 'right',
            width: remToPx((adjust.legendValueWidth?adjust.legendValueWidth:70)/75),
            fontSize: remToPx(24/75),
            color: '#353535',
            fontWeight:'bold',
            padding: [0, remToPx(90/75), 0,remToPx(24/75)],
            fontFamily:'PingFang-SC-Medium'
          },
          unit: {
            fontSize: remToPx(24/75),
            color: '#353535',
            fontWeight:'bold',
            fontFamily:'PingFang-SC-Medium'
          },

        }
      },
      formatter: function(name) {
        let res = seriesData.filter(v => v.name === name);
        res = res[0] || {};
        return '{name|' + name + '}  {value|' + res.value + res.unit  +'}'
      }
    },
    series: [{
      type: 'pie',
      radius: [remToPx(107/75), remToPx(157/75)],
      padding:[remToPx(58/75),remToPx(84/75),remToPx(80/75),remToPx(65/75)],
      center: ['29.6%', '47.57%'],
      data: seriesData,
      hoverAnimation: false,
      label: {
        show: false,
      },
    }]
  };

  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  const clientHeight = client.clientHeight;
  myChart.clear();
  myChart.resize({width: clientWidth, height: clientHeight});
  myChart.setOption(option);

};
//5 纵向柱状图 政务服务-好差评-柱状图上面不显示数据
export const barChartNoData = (id,data) => {
  // let checkName = ''
  let option = {
    grid: data.containLabel ? {
      top: data.gridTop ? data.gridTop : '13%',
      left:data.gridLeft?data.gridLeft:'3%',
      right: data.gridRight?data.gridRight:'5%',
      bottom: data.gridBottom ? data.gridBottom : '15%',
      containLabel: true,
    }:{
      // left: data.gridLeft ? data.gridLeft : remToPx(83/75),
      left: data.gridLeft ? data.gridLeft : remToPx(100/75),
      right: data.gridRight ? data.gridRight : remToPx(65/75),
      top: data.gridTop ? data.gridTop : remToPx(114/75),
      bottom: data.gridBottom ? data.gridBottom : remToPx(100/75),
    },
    xAxis : [
      {
        type : 'category',
        splitLine: {
          show: true,
          lineStyle: {
            color: '#e1e1e1',
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          // lineStyle: {
          //     color: '#2A2A2A',
          // }
        },
        silent: true,
        axisLabel: {
          rotate: 0,
          show:true,
          textStyle: {
            fontSize: remToPx(22/75),
            fontFamily: 'PingFang-SC-Medium',
            // padding: [5,0,0,0],
            color: '#000000'
          },
        },
        data : data.xaxis,

      }
    ],
    yAxis : [
      {
        name: data.yNameShow ? '('+data.yaxis[0]+')' : '',
        type : 'value',
        nameTextStyle: {
          color: '#838383',
          fontSize: remToPx(20/75),
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#e1e1e1',
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          // lineStyle: {
          //     color: '#2A2A2A',
          // }
        },
        axisLabel: {
          show:true,
          textStyle: {
            fontSize: remToPx(22/75),
            fontFamily: 'PingFang-SC-Medium',
            color: '#838383'
          }
        }
      }
    ],
    series : [
      {
        type:'bar',
        data:data.series.data ? data.series.data : data.series[0].data,
        barWidth: remToPx(25/75),//柱子的宽度
        silent: true,
        itemStyle: {
          normal: {
            color: function(params) {
              // if (params.name === "B区" || checkName  === params.name) {
              //   return new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              //     offset: 0,
              //     color: "#f99b37" // 0% 处的颜色
              //   },
              //     {
              //       offset: 1,
              //       color: "#ffbb51" // 100% 处的颜色
              //     }], false)
              // } else {
              return new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: "#1a79c9" // 0% 处的颜色
              },
                {
                  offset: 1,
                  color: "#46aafd" // 100% 处的颜色
                }], false)
              // }

            },
            // label: {
            //   show: true,
            //   position: 'top',
            //   formatter: function(a){
            //     return a.value
            //   },
            //   fontSize: remToPx(18/75),
            //   borderWidth: remToPx(1/75),
            //   fontFamily: 'PingFang-SC-Bold',
            //   color: '#1a79c9'
            // },
          },
        },
      }
    ]
  };
  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  const clientHeight = client.clientHeight;
  myChart.clear();
  myChart.resize({width: clientWidth, height: clientHeight});
  myChart.setOption(option);
  // myChart.on('click',function(params){
  //   //点击的柱子的名称
  //   checkName = params.name;
  //   //柱形图重构
  //   myChart.setOption(option);
  // })
};
// 6 柱状图+折线图  交通运输-交通运力
export const lineBarChart = (id, data) => {
  let dataLegend = [];
  let option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      borderColor: '#48607f',
      borderWidth: remToPx(1/75),
      textStyle: {
        fontSize: remToPx(18/75),
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
        align:'left'
      },
      // position:['30%','50%'],
      padding:[remToPx(10/75),remToPx(25/75)],
      // margin:[remToPx(10/75),remToPx(25/75)],
      axisPointer: {
        type: 'none',
      }
    },
    grid: {
      top: data.gridTop ? remToPx(data.gridTop/75) : remToPx(85/75),
      left:data.gridLeft?remToPx(data.gridLeft/75):'10%',
      right: data.gridRight?remToPx(data.gridRight/75):'12%',
      bottom: data.gridBottom ?remToPx(data.gridBottom/75) : remToPx(110/75),
    },
    legend: {
      data: data.legends,
      top: remToPx(40/75),
      right: data.legendRight ? data.legendRight : '6%',
      itemWidth: remToPx(24/75),
      itemHeight: remToPx(14/75),
      textStyle: {
        color: "#000",
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Medium',
      }
    },
    xAxis: {
      show: true,
      type: 'category',
      // boundaryGap: false,
      data: data.xaxis,
      axisLabel: {
        // margin: 5,
        interval:0,  //设置这里
        color:data.xRotate?'#838383':'#000',
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Bold',
        rotate: data.xRotate ? data.xRotate : 0,
        //判断横坐标名称的长度，长度超过固定值，超出部分进行隐藏。
        formatter: function(value) {
          var res = value;
          // if(res.length > 5) {
          //   res = res.substring(0, 5) + "...";
          //
          // }
          return res;
        },
      },
      axisLine: {
        show: true,
        lineStyle:{
          color: '#e1e1e1',
        }
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle:{
          color: '#e1e1e1',
        }
      }
    },
    yAxis: [
      {
        show: true,
        // name: data.yaxis[0] == null ? '' : '(' + data.yaxis[0] + ')',
        nameTextStyle: {
          color: '#838383',
          fontSize: remToPx(22/75),
        },
        type: 'value',
        position: 'left',
        axisLabel: {
          margin: remToPx(5/75),
          color: '#838383',
          fontSize: remToPx(22/75)
        },

        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle:{
            color: '#e1e1e1',
          }
        },
        axisLine: {
          show: false,
        }
      }, {
        show: true,
        // name: data.yaxis[1] == null ? '' : '(' + data.yaxis[1] + ')',
        nameTextStyle: {
          color: '#868d96',
          fontSize: remToPx(22/75),
        },
        type: 'value',
        position: 'right',
        axisLabel: {
          margin: remToPx(5/75),
          color: '#838383',
          fontFamily: 'PingFang-SC-Medium',
          fontSize: remToPx(22/75)
        },

        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle:{
            color: '#e1e1e1',
          }
        },
        axisLine: {
          show: false,
        }
      }
    ],
    series: [
      {
        name: data.series[0].name,
        type: 'bar',
        barWidth: remToPx(40/75),
        // label:{
        //   show: true,
        //   position: 'top'
        // },
        itemStyle:{
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: "#46aafd"
            },
              {
                offset: 1,
                color: "#1a79c9"
              }
            ])
          }
        },
        data: data.series[0].data,
      },
      {
        name: data.series[1].name,
        type: "line",
        showAllSymbol: false,
        symbol: 'circle',
        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
        symbolSize: 9, //标记的大小
        // label:{
        //   show: true,
        //   position: 'top',
        //   distance: 5
        // },
        itemStyle: {
          normal: {
            width: remToPx(11/75),
            color: '#39c77f', //拐点颜色
            borderColor: '#ffffff',
            borderWidth:remToPx(2/75)
          }
        },
        lineStyle: {
          normal: {
            color: "#39c77f",
            width:remToPx(4/75),
            borderColor:'rgba(0,0,0,0.1)',
            borderWidth:remToPx(3/75)

          },
          borderColor: '#ffffff'
        },
        data: data.series[1].data,
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
//7 有背景的横向多柱状图 交通运输-交通项目投资
export const mulBars = (id, data) => {
  let yData = data.xaxis;
  let barData = data.series[0].data;
  let bgData = [];
  let colorList = data.colorList ? data.colorList : ['#1a79c9', '#46aafd'];
  let maxData = Math.max(...barData);
  maxData = maxData>100 ? maxData : 100;
  while (bgData.length < barData) {
    bgData[bgData.length] = 100;
  }
  let paddingLeft = data.paddingLeft ? data.paddingLeft : '-55';
  // console.log('11',colorList)
  let option = {
    grid: {
      left: '12%',
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
          padding: [0,0,0,remToPx(paddingLeft/75)]
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
      data: yData
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
          padding: [0,0,0,remToPx(5/75)],
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
      showBackground: true,
      backgroundStyle: {
        color: '#f0f0f0'
      },
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


//环形柱状图
export const circleBar = (id,data)=>{
  let option = {
    grid: {
      // show:true,
      top: remToPx(58/75),
      bottom: remToPx(50/75),
    },
    title: {
      text:['{value|'+ data[0].value + '}{unit|' + data[0].unit + '}'],
      textStyle: {
        rich:{
          value:{
            color: '#39c77f',
            fontSize: remToPx(55/75),
            fontFamily:'DIN-Medium',
            padding:[0,0,remToPx(145/75),0]
          },
          unit:{
            color: '#39c77f',
            fontSize: remToPx(30/75),
            fontFamily:'DIN-Medium',
            padding:[0,0,remToPx(151/75),0]
          }
        },

      },
      subtext: [
        // ['{line|'+'———————————'+'}'],
        ['{subValue|'+ data[1].value + '}{subUnit|'+ data[1].unit + '}'],
        ['{d|目标值}']
      ].join('\n'),
      subtextStyle: {
        rich: {
          subValue: {
            color: '#1c1c1c',
            fontSize: remToPx(40/75),
            fontFamily: 'DIN-Medium',
            padding:[0,0,remToPx(23/75),0],
            // fontWeight: 700,
            // height: 36
          },
          subUnit: {
            color: '#1c1c1c',
            fontSize: remToPx(20/75),
            fontFamily: 'DIN-Medium',
            // borderColor:'red',
            // borderWidth:1,
            padding:[0,0,remToPx(23/75),0]
            // fontWeight: 700,
            // height: 36
          },
          d: {
            fontFamily: 'PingFang-SC-Medium',
            color: '#909090',
            fontSize: remToPx(24/75),
            // padding:[0,0,0,0]
          }
        },
      },
      itemGap: 0,
      left: 'center',
      // top: '38%'
    },
    // tooltip: {
    //   formatter: function (params) {
    //     return '<span style="color: #fff;">'+data.data[0]+data.unit+'</span>';
    //   }
    // },
    angleAxis: {
      max: 100,
      clockwise: true, // 逆时针
      // 隐藏刻度线
      show: false
    },
    radiusAxis: {
      type: 'category',
      show: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,

      },
      axisTick: {
        show: false
      },
    },
    polar: {
      center: ['50%', '51%'],
      radius: remToPx(273/75), //图形大小
    },
    series: [{
      type: 'bar',
      data: [data[0].value],
      showBackground: true,
      coordinateSystem: 'polar',
      roundCap: false,
      barWidth: remToPx(41/75),
      itemStyle: {
        normal: {
          opacity: 1,
          color:  new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#39c77f'
          }, {
            offset: 1,
            color: '#38d29a'
          }]),
          // shadowBlur: 5,
          // shadowColor: '#2A95F9',
        }
      },
    },{
      type: 'bar',
      data: [100],
      showBackground: true,
      coordinateSystem: 'polar',
      roundCap: true,
      barWidth: remToPx(41/75),
      zlevel:-1,
      barGap:'-100%',
      itemStyle: {
        normal: {
          opacity: 1,
          color: '#eeeeee',
        }
      },
    }]
  };
  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  const clientHeight = client.clientHeight;
  myChart.clear();
  myChart.resize({width: clientWidth, height: clientHeight});
  myChart.setOption(option);
};
/**
 * 单柱状图+折线图l
 *
 * */
export const lineAndBarChart = (id, data) => {
  let dataLegend = [];
  data.legends.forEach((item, index) => {
    if(index > 0) {
      dataLegend.push({
        name: item,
        icon: 'rect',
      })
    } else {
      dataLegend.push({
        name: item,
      })
    }
  });
  let option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      borderColor: '#48607f',
      borderWidth: remToPx(1/75),
      textStyle: {
        fontSize: remToPx(18/75),
        color: '#fff',
        align: 'left',
        fontFamily: 'PingFang-SC-Medium',
      },
      padding:[remToPx(10/75),remToPx(25/75)],
      axisPointer: {
        type: 'none',
      }
    },
    grid: {
      top: data.gridTop ? data.gridTop : '16%',
      left:data.gridLeft?'5%':'10%',
      right: data.gridLeft?'5%':'12%',
      bottom: data.gridBottom ? data.gridBottom : '15%',
    },
    legend: {
      data: dataLegend,
      top: '6%',
      itemWidth: remToPx(14/75),
      itemHeight: remToPx(14/75),
      right: data.legendRight ? data.legendRight : '16%',
      textStyle: {
        color: "#000",
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Medium',
      }
    },
    xAxis: {
      show: true,
      type: 'category',
      // boundaryGap: false,
      data: data.xaxis,
      axisLabel: {
        // margin: 5,
        interval:0,  //设置这里
        color: '#000',
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Bold',
      },
      axisLine: {
        show: true,
        lineStyle:{
          color: '#e1e1e1',
        }
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle:{
          color: '#e1e1e1',
        }
      }
    },
    yAxis: [
      {
        show: true,
        name: data.yaxis[0] == null ? '' : '(' + data.yaxis[0] + ')',
        nameTextStyle: {
          color: '#838383',
          fontSize: remToPx(22/75),
        },
        type: 'value',
        position: 'left',
        axisLabel: {
          margin: remToPx(5/75),
          color: '#838383',
          fontSize: remToPx(22/75)
        },

        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle:{
            color: '#e1e1e1',
          }
        },
        axisLine: {
          show: false,
        }
      }, {
        show: true,
        name: data.yaxis[1] == null ? '' : '(' + data.yaxis[1] + ')',
        nameTextStyle: {
          color: '#868d96',
          fontSize: remToPx(22/75),
        },
        type: 'value',
        position: 'right',
        axisLabel: {
          margin: remToPx(5/75),
          color: '#838383',
          fontFamily: 'PingFang-SC-Medium',
          fontSize: remToPx(22/75)
        },

        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle:{
            color: '#e1e1e1',
          }
        },
        axisLine: {
          show: false,
        }
      }
    ],
    series: [
      {
        name: data.series[0].name,
        type: "line",
        showAllSymbol: false,
        symbol: 'circle',
        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
        symbolSize: remToPx(11/75), //标记的大小
        itemStyle: {
          normal: {
            width: remToPx(4/75),
            color: '#39c77f', //拐点颜色
            borderWidth: remToPx(2/75),
            borderColor: '#fff',
          }
        },
        lineStyle: {
          normal: {
            color: "#39c77f",
          },
          borderColor: '#39c77f'
        },
        data: data.series[0].data,
      },
      {
        name: data.series[1].name,
        type: 'bar',
        barWidth: remToPx(40/75),
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, //变化度
              [{
                offset: 0,
                color: '#46aafd'
              }, {
                offset: 1,
                color: '#1a79c9'
              }]),
          }
        },
        barGap: '1%',
        data: data.series[1].data,
      }
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


/**
 * 双条形图+折线图
 * data.series[2].type=1bar,2bar,'line'
 * */
export const industrialLineAnddoubleBarChart = (id, data) => {
  let dataLegend = [];
  data.legends.forEach((item, index) => {
    if(index < 2) {
      dataLegend.push({
        name: item,
        icon: 'rect',
      })
    } else {
      dataLegend.push({
        name: item,
      })
    }
  });
  let option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      borderColor: '#48607f',
      borderWidth: remToPx(1/75),
      textStyle: {
        align: 'left',
        bottom:300,
        fontSize: remToPx(18/75),
        color: '#fff',
        fontFamily: 'PingFang-SC-Medium',
      },
      padding:[remToPx(10/75),remToPx(25/75)],
      axisPointer: {
        type: 'none',
      }
    },
    grid: {
      top: data.gridTop ? data.gridTop : '16%',
      left:data.gridLeft?data.gridLeft:'10%',
      right: data.gridRight?data.gridRight:'12%',
      bottom: data.gridBottom ? data.gridBottom : '15%',
    },
    legend: {
      data: dataLegend,
      top: '6%',
      itemWidth: remToPx(14/75),
      itemHeight: remToPx(14/75),
      right: data.legendRight ? data.legendRight : '16%',
      textStyle: {
        color: "#000",
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Medium',
      }
    },
    xAxis: {
      show: true,
      type: 'category',
      // boundaryGap: false,
      data: data.xaxis,
      axisLabel: {
        rotate:data.rotate? data.rotate:'',
        // margin: 5,
        interval:0,  //设置这里
        color: data.rotate? '#838383' :'#000',
        fontSize: remToPx(22/75),
        fontFamily: 'PingFang-SC-Bold',
        formatter: function(value) {
          var res = value;
          // if(res.length > 5) {
          //   res = res.substring(0, 5) + "...";
          // }
          return res;
        },
      },
      axisLine: {
        show: true,
        lineStyle:{
          color: '#e1e1e1',
        }
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle:{
          color: '#e1e1e1',
        }
      }
    },
    yAxis: [
      {
        show: true,
        name: data.yaxis[0] == null ? '' : '(' + data.yaxis[0] + ')',
        nameTextStyle: {
          color: '#838383',
          fontSize: remToPx(22/75),
        },
        type: 'value',
        position: 'left',
        axisLabel: {
          margin: remToPx(5/75),
          color: '#838383',
          fontSize: remToPx(22/75)
        },

        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle:{
            color: '#e1e1e1',
          }
        },
        axisLine: {
          show: false,
        }
      }, {
        show: true,
        name: data.yaxis[2] == null ? '' : '(' + data.yaxis[2] + ')',
        nameTextStyle: {
          color: '#868d96',
          fontSize: remToPx(22/75),
        },
        type: 'value',
        position: 'right',
        axisLabel: {
          margin: remToPx(5/75),
          color: '#838383',
          fontFamily: 'PingFang-SC-Medium',
          fontSize: remToPx(22/75)
        },

        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle:{
            color: '#e1e1e1',
          }
        },
        axisLine: {
          show: false,
        }
      }
    ],
    series: [
      {
        name: data.series[0].name,
        type: 'bar',
        barWidth: remToPx(8/75),
        itemStyle:{
          normal: {
            color: '#1a79c8',
          }
        },
        data: data.series[0].data,
      }, {
        name: data.series[1].name,
        type: "bar",
        barWidth: remToPx(8/75),
        itemStyle:{
          normal: {
            color: '#f99b37',
          }
        },
        data: data.series[1].data,
      },{
        name: data.series[2].name,
        type: "line",
        showAllSymbol: false,
        symbol: 'emptyCircle',
        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
        symbolSize: 0, //标记的大小
        itemStyle: {
          normal: {
            width: remToPx(4/75),
            color: '#39c77f', //拐点颜色
            borderColor: '#39c77f',
          }
        },
        lineStyle: {
          normal: {
            color: "#39c77f",
          },
          borderColor: '#39c77f'
        },
        data: data.series[2].data,
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


// 环状饼图——带label说明
export const labelPieChart = (id, data) => {

  // var ary = data.series[0].data;
  let ary2 = [];
  data.forEach(a=>{
    ary2.push(a.value);
  });
  let datacount = eval(ary2.join('+'));
  let option = {
    title: {
      show: false,
      text: datacount,
      top:  '32%',
      // textAlign: "center",
      left: 'center',
      textStyle: {
        color: '#353535',
        fontSize: remToPx(55/75),
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
    color: ['#39c77f','#1a79c9','#f99b37','#09388f','#ff789b'],
    series: {
      type: 'pie',
      clockWise: true,
      radius: ['32%', '58%'],
      hoverAnimation: true,
      silent: false,
      center: ['50.5%', '37%'],
      labelLine: {
        show:false,
        length2: remToPx(-45/75),
        length: remToPx(-5/75),
      },
      roseType: 'area',
      label: {
        textStyle:{
          color:"#353535",
          fontFamily: 'PingFang-SC-Medium',
        },
        formatter: params => {
          let aa = params.name.slice(0,4);
          return ('{icon|●}{name|' + aa + '} {value|' + params.percent + '%}'
          );
        },
        rich: {
          icon: {
            padding: [remToPx(5/75),remToPx(5/75)],
            fontSize: remToPx(22/75),
          },
          name: {
            padding:[0,remToPx(5/75),5,0],
            fontSize: remToPx(26/75),
            color: '#353535',
            fontFamily: 'PingFang-SC-Medium',
          },
          value: {
            padding:[0,0,remToPx(7/75),remToPx(5/75)],
            fontSize: remToPx(26/75),
            color: '#353535',
            fontFamily: 'PingFang-SC-Medium',
          },
          aaa: {
            padding:[remToPx(5/75),remToPx(15/75),0,remToPx(15/75)],
            fontSize: remToPx(26/75),
            fontFamily: 'PingFang-SC-Medium',
            color: '#353535'
          }
        },
        // normal: { show: labelShow?true:false, formatter: "" }
        backgroundColor: 'rgba(255,255,255,0.85)',
        // backgroundColor: 'red',
        borderColor: 'rgba(238,238,238,0.85)',
        padding: [ remToPx(20/75), remToPx(10/75)],
        borderWidth:remToPx(1/75),
        borderRadius:remToPx(6/75),
        shadowBlur:remToPx(12/75),
        shadowOffsetX:remToPx(3/75),
        shadowOffsetY: remToPx(3/75),
        shadowColor: 'rgba(129,129,129,0.25)',
      },
      emphasis: {
        label: {
          show: true
        }
      },
      data: data
    }
  };
  let myChart = echarts.init(document.getElementById(id));
  myChart.clear();
  myChart.setOption(option);
};


export const industrialLineChart = (id, data) => {
  let colorList = data.colorList ? data.colorList : ['rgb(26, 121, 200)', 'rgb(57, 199, 127)', 'rgb(249, 155, 55)'];
  let colorStop = data.colorStop ? data.colorStop : ['rgba(26, 121, 200, 0.2)', 'rgba(26, 121, 200, 0)', 'rgba(57, 199, 127, 0.2)', 'rgba(57, 199, 127, 0)', 'rgba(249, 155, 55, 0.2)', 'rgba(249, 155, 55, 0)'];
  // console.log('aaa' ,colorStop);
  let series = [];
  let gridLeft = 83;
  for (let i = 0; i < data.series.length; i++) {
    if (data.series[i]) {
      data.series[i].data.forEach((item) => {
        gridLeft = item > 90000 ? 100 : 85;
      });
      series.push({
        name: data.series[i].name,
        type: data.series[i].type ? data.series[i].type : 'line',
        symbol: data.symbol?data.symbol:'emptyCircle',
        showSymbol: !data.series[i].closeSymbolShow,
        symbolSize: remToPx(0/75),
        data: data.series[i].data,
        lineStyle: {
          type: data.series[i].linetype ? data.series[i].linetype : 'solid',
          width:remToPx(3/75),
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: colorStop[2*i] // 0% 处的颜色
            }, {
              offset: 1,
              color:  colorStop[2*i+1], // 100% 处的颜色
            }],
            // opacity: 0.2,
            global: false // 缺省为 false
          }
        }
      })
    }
  }
  let paddingTop = data.paddingTop ? data.paddingTop : '-20';
  let option = {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: colorList,
    grid: data.gridContainLabel?{
      left: remToPx((data.gridLeft ? data.gridLeft : 20)/75),
      right: remToPx((data.gridRight ? data.gridRight : 40)/75),
      top: remToPx((data.gridTop ? data.gridTop : 114)/75),
      bottom: remToPx((data.gridBottom ? data.gridBottom : 65)/75),
      containLabel: true
    }:{
      left: remToPx((data.gridLeft ? data.gridLeft : 83)/75),
      right: remToPx((data.gridRight ? data.gridRight : 65)/75),
      top: remToPx((data.gridTop ? data.gridTop : 114)/75),
      bottom: remToPx((data.gridBottom ? data.gridBottom :100)/75),
    },
    legend: {
      textStyle: {
        color: "#000",
        fontSize: remToPx(20/75),
        fontFamily: 'PingFang-SC-Medium',
        padding: [0, 0, 0, remToPx(-5/75)]
      },
      itemGap: data.legendItemGap?data.legendItemGap:remToPx(6/75),
      show: data.legendShow ? data.legendShow : false,
      itemHeight: remToPx((data.legendItemHeight ? data.legendItemHeight : 14)/75),
      itemWidth: remToPx((data.legendItemWidth ? data.legendItemWidth : 30)/75),
      right: data.legendRight ? data.legendRight : '5%',
      top: data.legendTop ? data.legendTop : '13%',
      // icon: "circle",
      data: data.legends,
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(9, 20, 37, 0.75)',
      borderColor: '#48607f',
      borderWidth: remToPx(1/75),
      textStyle: {
        fontSize: remToPx(18/75),
        color: '#fff',
        align: 'left',
        fontFamily: 'PingFang-SC-Medium',
      },
      padding: [remToPx(10/75), remToPx(25/75)],
      axisPointer: {
        type: 'line',
        label: {
          show: false,
          backgroundColor: '#333'
        }
      }
    },
    xAxis: {
      show: true,
      triggerEvent:true,
      type: 'category',
      nameGap:15,
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: data.axisLineColor?data.axisLineColor:'#e1e1e1',
          width: remToPx(1/75),
          type: data.type?data.type:"solid"
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#e1e1e1',
          type: "solid",
          width: remToPx(1/75),
        }
      },
      axisLabel: {
        rotate: data.xRotate ? data.xRotate : 0,
        margin:remToPx(60/75),
        //判断横坐标名称的长度，长度超过固定值，超出部分进行换行处理。
        formatter: function(value) {
          var res = '';
          if(value.length > 7) {
            res = value.substring(0, 7) + '\n'+ value.substring(7);
          }else{
            res = value;
          }
          return res;
        },
        textStyle: {
          fontSize: remToPx(22/75),
          fontFamily: 'PingFang-SC-Medium',
          // padding: [remToPx(20/75), 0, 0, 0],

          align:"center",
          __verticalAlign:'middle',
          color: data.xRotate?'#838383':'#000'
        },
      },
      data: data.xaxis
    },
    yAxis: {
      show: true,
      name: data.yaxis[0] === null ? '' : data.yaxis,
      nameTextStyle: {
        fontSize: remToPx(22/75),
        padding: Math.max(...data.series[0].data) < 10 ? [0, remToPx(10/75), 0, 0] : [0, remToPx(10/75), 0, remToPx(paddingTop/75)],
        fontFamily: 'PingFang-SC-Medium',
        color: '#838383'
      },
      type: 'value',
      min: data.min ? data.min : null,
      max: data.max ? data.max : null,
      axisTick: {
        show: false
      },
      axisLine: {
        show: false,
        lineStyle: {
          width: remToPx(1/75),
          color: '#aaa',
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          width: remToPx(1/75),
          type: "solid",
          color: '#e1e1e1'
        }
      },
      axisLabel: {
        textStyle: {
          fontSize: remToPx(22/75),
          fontFamily: 'PingFang-SC-Medium',
          color: '#838383'
        }
      }
    },
    series: series
  };


  const client = document.getElementById(id);
  let myChart = echarts.init(client);
  const clientWidth = client.clientWidth;
  const clientHeight = client.clientHeight;
  myChart.clear();
  myChart.resize({width: clientWidth, height: clientHeight});
  myChart.setOption(option);
};









export const getJmGeoJson = () => {
  // let getTimestamp=new Date().getTime();
  return {
	"type": "FeatureCollection",
	"features": [{
		"type": "Feature",
		"geometry": {
			"type": "MultiPolygon",
			"coordinates": [
				[
					[
						[110.05203, 40.627255],
						[110.043453, 40.616739],
						[110.033315, 40.611506],
						[110.027315, 40.612138],
						[110.010333, 40.608573],
						[110.00338, 40.610671],
						[109.988174, 40.623236],
						[109.976434, 40.609862],
						[109.976888, 40.604476],
						[109.981221, 40.589354],
						[109.989365, 40.581817],
						[109.988672, 40.579793],
						[109.963589, 40.585332],
						[109.962181, 40.581791],
						[109.967574, 40.581564],
						[109.969221, 40.574506],
						[109.973726, 40.574405],
						[109.973618, 40.568865],
						[109.979596, 40.566208],
						[109.979596, 40.563349],
						[109.987307, 40.563121],
						[109.986939, 40.53212],
						[109.984925, 40.531538],
						[109.950527, 40.527538],
						[109.974029, 40.521614],
						[109.986463, 40.516652],
						[110.008427, 40.501079],
						[110.016636, 40.50075],
						[110.017979, 40.503966],
						[110.012889, 40.514601],
						[110.02073, 40.525133],
						[110.027164, 40.531639],
						[110.035395, 40.53374],
						[110.042586, 40.531816],
						[110.047546, 40.528728],
						[110.0579, 40.517968],
						[110.06076, 40.517032],
						[110.079778, 40.526703],
						[110.087858, 40.529032],
						[110.091042, 40.528044],
						[110.092515, 40.522399],
						[110.099749, 40.518703],
						[110.116515, 40.515664],
						[110.122992, 40.519994],
						[110.128234, 40.51969],
						[110.147317, 40.503079],
						[110.151367, 40.502193],
						[110.159339, 40.505333],
						[110.162631, 40.508701],
						[110.166617, 40.516778],
						[110.170667, 40.530272],
						[110.178487, 40.551026],
						[110.183469, 40.552924],
						[110.195123, 40.551659],
						[110.207448, 40.549204],
						[110.224581, 40.543029],
						[110.231903, 40.538018],
						[110.238314, 40.53007],
						[110.239419, 40.514854],
						[110.252047, 40.512727],
						[110.257528, 40.509258],
						[110.262445, 40.509866],
						[110.269788, 40.51612],
						[110.280662, 40.50665],
						[110.286163, 40.510929],
						[110.289673, 40.510423],
						[110.291687, 40.517842],
						[110.293853, 40.517892],
						[110.317897, 40.510296],
						[110.322099, 40.506726],
						[110.3229, 40.501712],
						[110.320604, 40.490214],
						[110.325673, 40.485857],
						[110.322576, 40.478181],
						[110.315081, 40.47238],
						[110.313803, 40.469593],
						[110.317377, 40.462016],
						[110.321731, 40.474457],
						[110.327991, 40.48383],
						[110.330265, 40.490087],
						[110.331933, 40.489226],
						[110.334012, 40.497559],
						[110.345991, 40.498724],
						[110.351276, 40.500395],
						[110.353984, 40.506447],
						[110.363471, 40.504219],
						[110.37036, 40.507156],
						[110.377226, 40.51336],
						[110.378179, 40.519209],
						[110.384353, 40.530854],
						[110.390764, 40.530576],
						[110.396699, 40.527437],
						[110.405559, 40.533031],
						[110.406143, 40.534702],
						[110.396894, 40.534575],
						[110.4061, 40.541156],
						[110.413335, 40.541207],
						[110.412837, 40.544396],
						[110.421891, 40.550647],
						[110.426136, 40.559478],
						[110.418577, 40.568207],
						[110.424144, 40.575214],
						[110.424057, 40.580122],
						[110.420873, 40.58642],
						[110.420548, 40.596005],
						[110.415848, 40.601518],
						[110.418274, 40.617851],
						[110.414223, 40.621896],
						[110.413422, 40.626471],
						[110.417667, 40.627558],
						[110.425487, 40.633321],
						[110.430512, 40.631956],
						[110.437855, 40.637365],
						[110.440823, 40.637138],
						[110.444093, 40.643658],
						[110.4267, 40.646059],
						[110.416064, 40.642976],
						[110.411732, 40.643026],
						[110.390006, 40.646337],
						[110.386237, 40.647802],
						[110.371746, 40.644997],
						[110.365356, 40.639791],
						[110.359529, 40.638983],
						[110.353767, 40.640676],
						[110.341875, 40.637896],
						[110.329204, 40.638073],
						[110.297665, 40.591327],
						[110.290474, 40.588367],
						[110.281203, 40.590795],
						[110.278929, 40.60172],
						[110.283153, 40.609508],
						[110.275723, 40.613124],
						[110.282698, 40.620582],
						[110.258178, 40.630415],
						[110.234459, 40.643102],
						[110.237231, 40.649672],
						[110.231101, 40.652123],
						[110.222459, 40.653462],
						[110.206126, 40.645654],
						[110.19887, 40.641131],
						[110.192047, 40.643355],
						[110.184747, 40.643405],
						[110.182278, 40.649419],
						[110.17253, 40.649344],
						[110.16209, 40.65086],
						[110.159923, 40.643835],
						[110.150718, 40.642672],
						[110.15388, 40.634484],
						[110.143981, 40.633549],
						[110.139151, 40.630642],
						[110.132652, 40.629631],
						[110.129338, 40.634711],
						[110.120566, 40.634155],
						[110.11476, 40.629404],
						[110.111121, 40.638553],
						[110.05203, 40.627255]
					]
				]
			]
		},
		"properties": {
			"adcode": 150202,
			"name": "东河区",
			"center": [110.026895, 40.587056],
			"centroid": [110.207275, 40.57604],
			"childrenNum": 0,
			"level": "district",
			"parent": "{ \"adcode\": 150200 }",
			"subFeatureIndex": 0,
			"acroutes": [100000, 150000, 150200]
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiPolygon",
			"coordinates": [
				[
					[
						[109.848504, 40.73172],
						[109.860504, 40.735707],
						[109.865205, 40.74305],
						[109.868692, 40.744211],
						[109.872786, 40.755313],
						[109.868865, 40.764848],
						[109.868605, 40.771381],
						[109.852446, 40.774887],
						[109.844324, 40.78099],
						[109.843349, 40.786538],
						[109.838453, 40.788228],
						[109.834035, 40.792187],
						[109.836071, 40.798717],
						[109.83124, 40.802952],
						[109.821861, 40.806406],
						[109.818807, 40.813212],
						[109.816684, 40.807616],
						[109.806222, 40.80744],
						[109.800958, 40.80391],
						[109.798121, 40.795439],
						[109.800027, 40.788808],
						[109.802821, 40.786614],
						[109.803774, 40.777762],
						[109.798554, 40.769843],
						[109.794438, 40.768481],
						[109.793117, 40.765101],
						[109.795911, 40.761796],
						[109.78677, 40.758517],
						[109.780944, 40.754859],
						[109.775788, 40.755918],
						[109.750727, 40.757306],
						[109.742062, 40.755313],
						[109.727831, 40.747037],
						[109.71765, 40.744085],
						[109.708314, 40.743202],
						[109.671772, 40.742697],
						[109.654205, 40.744161],
						[109.651628, 40.74242],
						[109.633822, 40.738357],
						[109.625721, 40.737625],
						[109.622537, 40.734117],
						[109.621931, 40.726596],
						[109.626024, 40.720513],
						[109.637461, 40.718494],
						[109.639411, 40.717055],
						[109.633606, 40.712511],
						[109.645368, 40.695696],
						[109.645736, 40.689863],
						[109.643678, 40.683877],
						[109.648617, 40.673572],
						[109.65505, 40.669151],
						[109.641859, 40.666726],
						[109.637007, 40.658667],
						[109.626393, 40.656696],
						[109.62271, 40.650481],
						[109.622862, 40.645856],
						[109.625851, 40.644846],
						[109.62414, 40.632967],
						[109.612703, 40.625106],
						[109.612226, 40.621365],
						[109.664949, 40.621087],
						[109.688495, 40.620632],
						[109.729975, 40.615601],
						[109.72991, 40.612593],
						[109.740568, 40.611227],
						[109.741001, 40.607308],
						[109.749384, 40.606626],
						[109.754236, 40.60966],
						[109.766084, 40.608421],
						[109.7676, 40.610747],
						[109.774705, 40.609559],
						[109.773622, 40.600759],
						[109.770611, 40.595828],
						[109.772907, 40.593097],
						[109.769767, 40.589506],
						[109.770265, 40.579591],
						[109.773189, 40.578528],
						[109.773189, 40.573823],
						[109.781074, 40.570838],
						[109.785102, 40.57099],
						[109.785492, 40.574607],
						[109.78924, 40.573595],
						[109.789825, 40.568814],
						[109.792944, 40.575948],
						[109.798272, 40.574607],
						[109.806893, 40.575973],
						[109.808041, 40.58427],
						[109.810532, 40.585585],
						[109.812287, 40.595449],
						[109.812872, 40.605665],
						[109.815536, 40.606373],
						[109.843825, 40.604932],
						[109.842677, 40.609533],
						[109.836374, 40.609963],
						[109.836959, 40.617978],
						[109.843024, 40.617649],
						[109.843392, 40.622907],
						[109.837609, 40.623211],
						[109.838952, 40.640019],
						[109.8448, 40.63969],
						[109.848417, 40.645654],
						[109.8508, 40.673875],
						[109.858815, 40.673395],
						[109.859161, 40.677917],
						[109.855587, 40.680417],
						[109.858533, 40.689307],
						[109.866894, 40.685999],
						[109.868064, 40.692413],
						[109.855825, 40.695948],
						[109.855306, 40.698398],
						[109.862714, 40.696756],
						[109.863818, 40.700266],
						[109.854677, 40.703599],
						[109.845688, 40.713672],
						[109.839255, 40.732426],
						[109.848504, 40.73172]
					]
				]
			]
		},
		"properties": {
			"adcode": 150203,
			"name": "昆都仑区",
			"center": [109.822932, 40.661345],
			"centroid": [109.755359, 40.686374],
			"childrenNum": 0,
			"level": "district",
			"parent": "{ \"adcode\": 150200 }",
			"subFeatureIndex": 1,
			"acroutes": [100000, 150000, 150200]
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiPolygon",
			"coordinates": [
				[
					[
						[109.848417, 40.645654],
						[109.889422, 40.643431],
						[109.892974, 40.646842],
						[109.946108, 40.618483],
						[109.952195, 40.63001],
						[109.949856, 40.631021],
						[109.961228, 40.644088],
						[109.969307, 40.65134],
						[109.974332, 40.649344],
						[109.982997, 40.654625],
						[109.986961, 40.65182],
						[109.990383, 40.645856],
						[109.995084, 40.646514],
						[109.995734, 40.652401],
						[110.000326, 40.654751],
						[110.013106, 40.652502],
						[110.015705, 40.643456],
						[110.02268, 40.635722],
						[110.033402, 40.641788],
						[110.055171, 40.679432],
						[110.076767, 40.701226],
						[110.090284, 40.710996],
						[110.090955, 40.719074],
						[110.093468, 40.728439],
						[110.091518, 40.733713],
						[110.046767, 40.731568],
						[110.030608, 40.729549],
						[110.013625, 40.744388],
						[110.002448, 40.744262],
						[109.998333, 40.734496],
						[109.981004, 40.724476],
						[109.936664, 40.733209],
						[109.883443, 40.74083],
						[109.866504, 40.729246],
						[109.848504, 40.73172],
						[109.839255, 40.732426],
						[109.845688, 40.713672],
						[109.854677, 40.703599],
						[109.863818, 40.700266],
						[109.862714, 40.696756],
						[109.855306, 40.698398],
						[109.855825, 40.695948],
						[109.868064, 40.692413],
						[109.866894, 40.685999],
						[109.858533, 40.689307],
						[109.855587, 40.680417],
						[109.859161, 40.677917],
						[109.858815, 40.673395],
						[109.8508, 40.673875],
						[109.848417, 40.645654]
					]
				]
			]
		},
		"properties": {
			"adcode": 150204,
			"name": "青山区",
			"center": [109.880049, 40.668558],
			"centroid": [109.958168, 40.689984],
			"childrenNum": 0,
			"level": "district",
			"parent": "{ \"adcode\": 150200 }",
			"subFeatureIndex": 2,
			"acroutes": [100000, 150000, 150200]
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiPolygon",
			"coordinates": [
				[
					[
						[110.05203, 40.627255],
						[110.111121, 40.638553],
						[110.11476, 40.629404],
						[110.120566, 40.634155],
						[110.129338, 40.634711],
						[110.132652, 40.629631],
						[110.139151, 40.630642],
						[110.143981, 40.633549],
						[110.15388, 40.634484],
						[110.150718, 40.642672],
						[110.159923, 40.643835],
						[110.16209, 40.65086],
						[110.17253, 40.649344],
						[110.182278, 40.649419],
						[110.184747, 40.643405],
						[110.192047, 40.643355],
						[110.19887, 40.641131],
						[110.206126, 40.645654],
						[110.222459, 40.653462],
						[110.231101, 40.652123],
						[110.237231, 40.649672],
						[110.234459, 40.643102],
						[110.258178, 40.630415],
						[110.282698, 40.620582],
						[110.275723, 40.613124],
						[110.283153, 40.609508],
						[110.278929, 40.60172],
						[110.281203, 40.590795],
						[110.290474, 40.588367],
						[110.297665, 40.591327],
						[110.329204, 40.638073],
						[110.341875, 40.637896],
						[110.353767, 40.640676],
						[110.359529, 40.638983],
						[110.365356, 40.639791],
						[110.371746, 40.644997],
						[110.386237, 40.647802],
						[110.390006, 40.646337],
						[110.411732, 40.643026],
						[110.416064, 40.642976],
						[110.4267, 40.646059],
						[110.444093, 40.643658],
						[110.453538, 40.64616],
						[110.459018, 40.657859],
						[110.460404, 40.664074],
						[110.45579, 40.669733],
						[110.448556, 40.671046],
						[110.434173, 40.66996],
						[110.42475, 40.674204],
						[110.424382, 40.677866],
						[110.43062, 40.681579],
						[110.445328, 40.683574],
						[110.450029, 40.68913],
						[110.447473, 40.696176],
						[110.43974, 40.708219],
						[110.434238, 40.712511],
						[110.422129, 40.716272],
						[110.411927, 40.714758],
						[110.406165, 40.716752],
						[110.416801, 40.727177],
						[110.425422, 40.733007],
						[110.436036, 40.743631],
						[110.446151, 40.749485],
						[110.461747, 40.752386],
						[110.463458, 40.757432],
						[110.459191, 40.760812],
						[110.443422, 40.767295],
						[110.438527, 40.771356],
						[110.438418, 40.776854],
						[110.443747, 40.781924],
						[110.458108, 40.785958],
						[110.465559, 40.789943],
						[110.476455, 40.801692],
						[110.482758, 40.818682],
						[110.486571, 40.823067],
						[110.49465, 40.826117],
						[110.504896, 40.826344],
						[110.508448, 40.829721],
						[110.510571, 40.818808],
						[110.51434, 40.813868],
						[110.520318, 40.817371],
						[110.543496, 40.825487],
						[110.551293, 40.825235],
						[110.550254, 40.829645],
						[110.545683, 40.836197],
						[110.541048, 40.840304],
						[110.541178, 40.845368],
						[110.545965, 40.849425],
						[110.543712, 40.852322],
						[110.534658, 40.853883],
						[110.517957, 40.859728],
						[110.512195, 40.864312],
						[110.507365, 40.863758],
						[110.504701, 40.868795],
						[110.499307, 40.869122],
						[110.488477, 40.861743],
						[110.484708, 40.860357],
						[110.4713, 40.863607],
						[110.45865, 40.860962],
						[110.449032, 40.862977],
						[110.442166, 40.861088],
						[110.436729, 40.862297],
						[110.428021, 40.870281],
						[110.419053, 40.868291],
						[110.410216, 40.872774],
						[110.400165, 40.870407],
						[110.394403, 40.878994],
						[110.391977, 40.879397],
						[110.374129, 40.872623],
						[110.364576, 40.873404],
						[110.359421, 40.870105],
						[110.342829, 40.869425],
						[110.346857, 40.865294],
						[110.343608, 40.862775],
						[110.337608, 40.863682],
						[110.334077, 40.87018],
						[110.325846, 40.873454],
						[110.319781, 40.872749],
						[110.307716, 40.877005],
						[110.302994, 40.881462],
						[110.292727, 40.877559],
						[110.284452, 40.882721],
						[110.274553, 40.891131],
						[110.270026, 40.893321],
						[110.259932, 40.894353],
						[110.254019, 40.892113],
						[110.25038, 40.887304],
						[110.253845, 40.880682],
						[110.249903, 40.873907],
						[110.247347, 40.864942],
						[110.244553, 40.860357],
						[110.231145, 40.859576],
						[110.225275, 40.857108],
						[110.232509, 40.853128],
						[110.231708, 40.847056],
						[110.235737, 40.841211],
						[110.227332, 40.840833],
						[110.221159, 40.831384],
						[110.210372, 40.823723],
						[110.17448, 40.813162],
						[110.168523, 40.812456],
						[110.160812, 40.816313],
						[110.133649, 40.815002],
						[110.122342, 40.813792],
						[110.115497, 40.817775],
						[110.111771, 40.813717],
						[110.109129, 40.802852],
						[110.109995, 40.77693],
						[110.112421, 40.756801],
						[110.108999, 40.748097],
						[110.109172, 40.738862],
						[110.111208, 40.735],
						[110.091518, 40.733713],
						[110.093468, 40.728439],
						[110.090955, 40.719074],
						[110.090284, 40.710996],
						[110.076767, 40.701226],
						[110.055171, 40.679432],
						[110.033402, 40.641788],
						[110.02268, 40.635722],
						[110.026384, 40.632437],
						[110.043886, 40.633245],
						[110.04616, 40.635748],
						[110.050319, 40.634762],
						[110.058247, 40.635975],
						[110.051164, 40.632765],
						[110.05203, 40.627255]
					]
				]
			]
		},
		"properties": {
			"adcode": 150205,
			"name": "石拐区",
			"center": [110.272565, 40.672094],
			"centroid": [110.286154, 40.747287],
			"childrenNum": 0,
			"level": "district",
			"parent": "{ \"adcode\": 150200 }",
			"subFeatureIndex": 3,
			"acroutes": [100000, 150000, 150200]
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiPolygon",
			"coordinates": [
				[
					[
						[109.956332, 41.818422],
						[109.941386, 41.817305],
						[109.926354, 41.815394],
						[109.910346, 41.820259],
						[109.89592, 41.823287],
						[109.880584, 41.823362],
						[109.873392, 41.83649],
						[109.847616, 41.878783],
						[109.874302, 41.931877],
						[109.865183, 41.936907],
						[109.827601, 41.883718],
						[109.837089, 41.835646],
						[109.838042, 41.824057],
						[109.840944, 41.811646],
						[109.841421, 41.804248],
						[109.849046, 41.783316],
						[109.850085, 41.77589],
						[109.853811, 41.76747],
						[109.855046, 41.757707],
						[109.857298, 41.754675],
						[109.85589, 41.74834],
						[109.862757, 41.738797],
						[109.885219, 41.724257],
						[109.889075, 41.720056],
						[109.895357, 41.704642],
						[109.902267, 41.697082],
						[109.902093, 41.684025],
						[109.910888, 41.677459],
						[109.918144, 41.673329],
						[109.930664, 41.668304],
						[109.946628, 41.663502],
						[109.957199, 41.656908],
						[109.963827, 41.655266],
						[109.977192, 41.648074],
						[109.97756, 41.652703],
						[109.986224, 41.668528],
						[109.988217, 41.677285],
						[110.004874, 41.71409],
						[110.013864, 41.73149],
						[110.018759, 41.735069],
						[110.02073, 41.740313],
						[110.019171, 41.742376],
						[110.029308, 41.741928],
						[110.040875, 41.745383],
						[110.042586, 41.753483],
						[110.04746, 41.761657],
						[110.048781, 41.767072],
						[110.046052, 41.771295],
						[110.047676, 41.777629],
						[110.045142, 41.779988],
						[110.050059, 41.791039],
						[110.05372, 41.794491],
						[110.052723, 41.797346],
						[110.05803, 41.801194],
						[110.058052, 41.813458],
						[110.049279, 41.81604],
						[110.042976, 41.815642],
						[110.023156, 41.821823],
						[110.011134, 41.82495],
						[110.000391, 41.822791],
						[109.985315, 41.82423],
						[109.956332, 41.818422]
					]
				]
			]
		},
		"properties": {
			"adcode": 150206,
			"name": "白云鄂博矿区",
			"center": [109.97016, 41.769246],
			"centroid": [109.938644, 41.767761],
			"childrenNum": 0,
			"level": "district",
			"parent": "{ \"adcode\": 150200 }",
			"subFeatureIndex": 4,
			"acroutes": [100000, 150000, 150200]
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiPolygon",
			"coordinates": [
				[
					[
						[110.05203, 40.627255],
						[110.051164, 40.632765],
						[110.058247, 40.635975],
						[110.050319, 40.634762],
						[110.04616, 40.635748],
						[110.043886, 40.633245],
						[110.026384, 40.632437],
						[110.02268, 40.635722],
						[110.015705, 40.643456],
						[110.013106, 40.652502],
						[110.000326, 40.654751],
						[109.995734, 40.652401],
						[109.995084, 40.646514],
						[109.990383, 40.645856],
						[109.986961, 40.65182],
						[109.982997, 40.654625],
						[109.974332, 40.649344],
						[109.969307, 40.65134],
						[109.961228, 40.644088],
						[109.949856, 40.631021],
						[109.952195, 40.63001],
						[109.946108, 40.618483],
						[109.892974, 40.646842],
						[109.889422, 40.643431],
						[109.848417, 40.645654],
						[109.8448, 40.63969],
						[109.838952, 40.640019],
						[109.837609, 40.623211],
						[109.843392, 40.622907],
						[109.843024, 40.617649],
						[109.836959, 40.617978],
						[109.836374, 40.609963],
						[109.842677, 40.609533],
						[109.843825, 40.604932],
						[109.815536, 40.606373],
						[109.812872, 40.605665],
						[109.812287, 40.595449],
						[109.810532, 40.585585],
						[109.808041, 40.58427],
						[109.806893, 40.575973],
						[109.798272, 40.574607],
						[109.792944, 40.575948],
						[109.789825, 40.568814],
						[109.78924, 40.573595],
						[109.785492, 40.574607],
						[109.785102, 40.57099],
						[109.781074, 40.570838],
						[109.773189, 40.573823],
						[109.773189, 40.578528],
						[109.770265, 40.579591],
						[109.769767, 40.589506],
						[109.772907, 40.593097],
						[109.770611, 40.595828],
						[109.773622, 40.600759],
						[109.774705, 40.609559],
						[109.7676, 40.610747],
						[109.766084, 40.608421],
						[109.754236, 40.60966],
						[109.749384, 40.606626],
						[109.741001, 40.607308],
						[109.740568, 40.611227],
						[109.72991, 40.612593],
						[109.729975, 40.615601],
						[109.688495, 40.620632],
						[109.664949, 40.621087],
						[109.612226, 40.621365],
						[109.612703, 40.625106],
						[109.62414, 40.632967],
						[109.625851, 40.644846],
						[109.622862, 40.645856],
						[109.62271, 40.650481],
						[109.626393, 40.656696],
						[109.637007, 40.658667],
						[109.641859, 40.666726],
						[109.65505, 40.669151],
						[109.648617, 40.673572],
						[109.643678, 40.683877],
						[109.645736, 40.689863],
						[109.645368, 40.695696],
						[109.633606, 40.712511],
						[109.639411, 40.717055],
						[109.637461, 40.718494],
						[109.626024, 40.720513],
						[109.621931, 40.726596],
						[109.622537, 40.734117],
						[109.625721, 40.737625],
						[109.607591, 40.737272],
						[109.598992, 40.740956],
						[109.583093, 40.739543],
						[109.545467, 40.742697],
						[109.528637, 40.732477],
						[109.51133, 40.734597],
						[109.488542, 40.744665],
						[109.481698, 40.748576],
						[109.454362, 40.72806],
						[109.444462, 40.718721],
						[109.435906, 40.713748],
						[109.425466, 40.711022],
						[109.413639, 40.705063],
						[109.407617, 40.696024],
						[109.411538, 40.678927],
						[109.408202, 40.670617],
						[109.399668, 40.656949],
						[109.400404, 40.644138],
						[109.405408, 40.630061],
						[109.410433, 40.626345],
						[109.413271, 40.620405],
						[109.419444, 40.61641],
						[109.438939, 40.608573],
						[109.441235, 40.604603],
						[109.445351, 40.603945],
						[109.448253, 40.599596],
						[109.444766, 40.596309],
						[109.426072, 40.598458],
						[109.419357, 40.592389],
						[109.422, 40.585788],
						[109.427004, 40.580172],
						[109.434997, 40.57486],
						[109.438831, 40.567827],
						[109.434325, 40.559731],
						[109.426462, 40.552494],
						[109.424491, 40.548799],
						[109.427957, 40.543586],
						[109.434347, 40.541207],
						[109.438072, 40.537638],
						[109.440065, 40.532171],
						[109.435062, 40.524703],
						[109.425184, 40.516753],
						[109.426311, 40.513639],
						[109.435798, 40.50898],
						[109.441257, 40.519184],
						[109.444939, 40.520956],
						[109.457567, 40.522196],
						[109.473055, 40.521943],
						[109.488283, 40.519234],
						[109.51237, 40.513082],
						[109.517395, 40.513183],
						[109.525149, 40.519411],
						[109.531756, 40.529968],
						[109.537518, 40.536296],
						[109.545186, 40.540701],
						[109.550623, 40.541131],
						[109.557056, 40.539005],
						[109.561497, 40.54146],
						[109.57237, 40.553759],
						[109.576789, 40.556619],
						[109.588053, 40.556973],
						[109.602739, 40.55214],
						[109.614739, 40.544623],
						[109.619916, 40.54027],
						[109.628342, 40.529589],
						[109.631028, 40.530323],
						[109.636335, 40.541156],
						[109.64383, 40.546015],
						[109.647534, 40.545661],
						[109.648704, 40.541966],
						[109.637786, 40.519893],
						[109.638804, 40.517513],
						[109.656003, 40.50936],
						[109.667614, 40.500674],
						[109.671426, 40.499281],
						[109.683339, 40.500142],
						[109.696618, 40.498014],
						[109.694018, 40.491328],
						[109.694841, 40.488466],
						[109.700668, 40.482412],
						[109.708249, 40.482868],
						[109.73043, 40.495532],
						[109.740264, 40.494139],
						[109.747629, 40.495735],
						[109.770698, 40.504903],
						[109.778041, 40.506473],
						[109.796063, 40.507005],
						[109.803211, 40.505232],
						[109.807608, 40.499889],
						[109.810597, 40.500826],
						[109.816338, 40.510322],
						[109.824092, 40.513082],
						[109.83072, 40.512727],
						[109.844453, 40.505409],
						[109.849002, 40.504751],
						[109.861891, 40.506954],
						[109.873934, 40.514525],
						[109.903263, 40.529411],
						[109.910649, 40.531285],
						[109.930599, 40.530981],
						[109.950527, 40.527538],
						[109.984925, 40.531538],
						[109.986939, 40.53212],
						[109.987307, 40.563121],
						[109.979596, 40.563349],
						[109.979596, 40.566208],
						[109.973618, 40.568865],
						[109.973726, 40.574405],
						[109.969221, 40.574506],
						[109.967574, 40.581564],
						[109.962181, 40.581791],
						[109.963589, 40.585332],
						[109.988672, 40.579793],
						[109.989365, 40.581817],
						[109.981221, 40.589354],
						[109.976888, 40.604476],
						[109.976434, 40.609862],
						[109.988174, 40.623236],
						[110.00338, 40.610671],
						[110.010333, 40.608573],
						[110.027315, 40.612138],
						[110.033315, 40.611506],
						[110.043453, 40.616739],
						[110.05203, 40.627255]
					]
				]
			]
		},
		"properties": {
			"adcode": 150207,
			"name": "九原区",
			"center": [109.968122, 40.600581],
			"centroid": [109.664582, 40.604186],
			"childrenNum": 0,
			"level": "district",
			"parent": "{ \"adcode\": 150200 }",
			"subFeatureIndex": 5,
			"acroutes": [100000, 150000, 150200]
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiPolygon",
			"coordinates": [
				[
					[
						[110.239419, 40.514854],
						[110.24843, 40.502016],
						[110.251766, 40.492493],
						[110.252242, 40.486414],
						[110.249318, 40.483045],
						[110.239896, 40.482285],
						[110.239679, 40.479727],
						[110.250228, 40.472988],
						[110.259542, 40.47281],
						[110.270568, 40.47585],
						[110.291492, 40.486287],
						[110.294221, 40.49262],
						[110.29799, 40.493987],
						[110.31012, 40.491581],
						[110.321168, 40.485224],
						[110.320713, 40.480284],
						[110.306525, 40.473064],
						[110.301716, 40.469314],
						[110.303232, 40.465108],
						[110.310229, 40.461839],
						[110.313283, 40.458367],
						[110.310705, 40.454211],
						[110.305268, 40.451576],
						[110.307023, 40.447977],
						[110.313998, 40.444707],
						[110.328641, 40.444352],
						[110.335594, 40.446152],
						[110.346359, 40.45112],
						[110.358771, 40.45857],
						[110.364966, 40.4608],
						[110.370013, 40.455884],
						[110.368605, 40.440804],
						[110.375168, 40.435354],
						[110.392497, 40.434847],
						[110.397761, 40.432667],
						[110.404411, 40.42681],
						[110.427263, 40.402467],
						[110.434346, 40.396761],
						[110.447148, 40.391814],
						[110.458823, 40.390876],
						[110.464498, 40.392728],
						[110.474679, 40.403152],
						[110.48382, 40.402975],
						[110.485119, 40.395619],
						[110.476498, 40.386031],
						[110.476823, 40.381616],
						[110.485054, 40.373244],
						[110.493719, 40.366697],
						[110.496621, 40.3669],
						[110.505177, 40.384255],
						[110.513495, 40.391611],
						[110.51852, 40.389075],
						[110.525192, 40.38286],
						[110.542347, 40.36147],
						[110.544752, 40.355886],
						[110.5566, 40.33464],
						[110.560889, 40.332482],
						[110.567842, 40.333295],
						[110.571676, 40.339083],
						[110.576875, 40.337611],
						[110.583915, 40.324815],
						[110.604449, 40.311711],
						[110.611338, 40.311889],
						[110.613049, 40.322453],
						[110.62011, 40.32743],
						[110.62767, 40.324967],
						[110.630724, 40.319736],
						[110.631157, 40.311305],
						[110.642703, 40.301476],
						[110.650392, 40.301044],
						[110.663475, 40.305743],
						[110.685656, 40.320676],
						[110.69183, 40.32126],
						[110.69497, 40.311102],
						[110.701317, 40.308689],
						[110.706256, 40.309705],
						[110.716133, 40.314302],
						[110.721982, 40.314708],
						[110.723346, 40.309807],
						[110.718992, 40.302746],
						[110.719881, 40.300079],
						[110.725621, 40.297107],
						[110.736646, 40.296015],
						[110.746805, 40.29825],
						[110.743729, 40.307496],
						[110.761838, 40.307394],
						[110.776416, 40.303229],
						[110.777542, 40.297615],
						[110.764805, 40.284303],
						[110.764307, 40.280086],
						[110.768769, 40.273352],
						[110.775614, 40.271599],
						[110.782047, 40.274547],
						[110.790734, 40.274826],
						[110.792943, 40.273047],
						[110.796322, 40.263873],
						[110.802734, 40.260468],
						[110.810553, 40.259655],
						[110.828727, 40.2609],
						[110.835355, 40.262857],
						[110.847182, 40.271548],
						[110.844518, 40.279578],
						[110.83529, 40.29317],
						[110.83516, 40.297513],
						[110.841572, 40.298174],
						[110.866655, 40.292509],
						[110.868626, 40.287327],
						[110.859854, 40.281077],
						[110.85394, 40.273098],
						[110.854633, 40.263441],
						[110.858446, 40.261789],
						[110.873348, 40.263365],
						[110.88472, 40.260849],
						[110.905233, 40.254851],
						[110.912425, 40.250148],
						[110.915912, 40.244988],
						[110.919421, 40.244327],
						[110.925573, 40.246844],
						[110.953754, 40.267838],
						[110.956483, 40.272819],
						[110.965559, 40.27663],
						[110.970281, 40.273581],
						[110.971061, 40.270506],
						[110.969003, 40.257316],
						[110.972317, 40.252995],
						[110.977234, 40.253427],
						[110.992744, 40.260925],
						[111.013365, 40.272844],
						[111.02961, 40.284227],
						[111.033596, 40.288267],
						[111.034224, 40.305362],
						[111.027986, 40.307064],
						[111.034246, 40.315419],
						[111.050946, 40.315851],
						[111.050297, 40.318822],
						[111.058311, 40.319685],
						[111.077958, 40.328826],
						[111.08099, 40.331264],
						[111.08946, 40.331492],
						[111.089503, 40.334285],
						[111.099012, 40.334107],
						[111.100702, 40.331492],
						[111.114933, 40.331391],
						[111.10811, 40.340911],
						[111.112897, 40.34548],
						[111.109799, 40.363601],
						[111.125005, 40.36416],
						[111.122601, 40.37469],
						[111.127431, 40.383037],
						[111.106572, 40.381058],
						[111.10055, 40.387375],
						[111.0892, 40.403685],
						[111.090608, 40.404826],
						[111.084629, 40.418646],
						[111.08346, 40.425771],
						[111.073214, 40.425974],
						[111.071546, 40.429574],
						[111.049582, 40.428965],
						[111.050102, 40.42463],
						[111.035156, 40.42321],
						[111.028744, 40.42965],
						[111.028679, 40.433123],
						[111.035242, 40.437686],
						[111.037343, 40.442046],
						[111.020405, 40.459204],
						[111.007755, 40.45672],
						[110.99844, 40.453096],
						[110.99218, 40.457227],
						[110.984187, 40.471848],
						[110.965927, 40.471543],
						[110.963198, 40.479651],
						[110.965689, 40.480284],
						[110.959537, 40.496242],
						[110.949725, 40.496368],
						[110.941949, 40.49885],
						[110.934129, 40.48877],
						[110.908179, 40.481854],
						[110.900208, 40.483932],
						[110.890266, 40.495254],
						[110.889096, 40.499103],
						[110.888966, 40.511866],
						[110.877637, 40.513537],
						[110.877442, 40.51569],
						[110.868106, 40.51569],
						[110.84311, 40.535284],
						[110.854135, 40.539005],
						[110.852272, 40.559832],
						[110.876836, 40.563855],
						[110.873825, 40.576884],
						[110.88145, 40.578275],
						[110.88002, 40.586395],
						[110.863904, 40.585307],
						[110.858251, 40.599647],
						[110.855326, 40.595676],
						[110.830915, 40.586951],
						[110.801976, 40.61234],
						[110.807759, 40.615171],
						[110.800286, 40.628317],
						[110.799744, 40.639235],
						[110.797037, 40.647903],
						[110.792596, 40.671097],
						[110.788394, 40.688777],
						[110.791058, 40.69211],
						[110.794589, 40.691832],
						[110.795997, 40.696504],
						[110.80295, 40.695443],
						[110.80986, 40.708017],
						[110.807261, 40.708548],
						[110.798596, 40.715313],
						[110.792726, 40.723189],
						[110.794264, 40.732401],
						[110.792531, 40.736338],
						[110.79695, 40.744817],
						[110.790409, 40.753294],
						[110.797124, 40.759702],
						[110.792358, 40.765984],
						[110.792055, 40.773071],
						[110.789954, 40.780436],
						[110.781549, 40.785303],
						[110.782351, 40.789564],
						[110.785838, 40.791531],
						[110.783889, 40.793851],
						[110.772408, 40.79496],
						[110.760192, 40.793145],
						[110.752979, 40.798566],
						[110.751636, 40.795238],
						[110.74557, 40.790724],
						[110.742949, 40.791128],
						[110.738531, 40.786664],
						[110.732942, 40.786311],
						[110.725079, 40.789968],
						[110.721787, 40.793271],
						[110.719361, 40.800078],
						[110.71518, 40.805398],
						[110.710935, 40.805524],
						[110.712927, 40.810137],
						[110.719599, 40.816212],
						[110.701902, 40.816288],
						[110.698848, 40.818128],
						[110.688797, 40.817497],
						[110.688126, 40.813414],
						[110.678898, 40.808322],
						[110.675606, 40.816943],
						[110.672421, 40.81901],
						[110.659187, 40.810591],
						[110.651974, 40.807969],
						[110.638392, 40.805776],
						[110.623251, 40.807641],
						[110.605424, 40.808826],
						[110.58816, 40.812532],
						[110.58177, 40.81659],
						[110.57837, 40.820673],
						[110.572759, 40.832291],
						[110.565091, 40.840002],
						[110.5532, 40.848114],
						[110.545965, 40.849425],
						[110.541178, 40.845368],
						[110.541048, 40.840304],
						[110.545683, 40.836197],
						[110.550254, 40.829645],
						[110.551293, 40.825235],
						[110.543496, 40.825487],
						[110.520318, 40.817371],
						[110.51434, 40.813868],
						[110.510571, 40.818808],
						[110.508448, 40.829721],
						[110.504896, 40.826344],
						[110.49465, 40.826117],
						[110.486571, 40.823067],
						[110.482758, 40.818682],
						[110.476455, 40.801692],
						[110.465559, 40.789943],
						[110.458108, 40.785958],
						[110.443747, 40.781924],
						[110.438418, 40.776854],
						[110.438527, 40.771356],
						[110.443422, 40.767295],
						[110.459191, 40.760812],
						[110.463458, 40.757432],
						[110.461747, 40.752386],
						[110.446151, 40.749485],
						[110.436036, 40.743631],
						[110.425422, 40.733007],
						[110.416801, 40.727177],
						[110.406165, 40.716752],
						[110.411927, 40.714758],
						[110.422129, 40.716272],
						[110.434238, 40.712511],
						[110.43974, 40.708219],
						[110.447473, 40.696176],
						[110.450029, 40.68913],
						[110.445328, 40.683574],
						[110.43062, 40.681579],
						[110.424382, 40.677866],
						[110.42475, 40.674204],
						[110.434173, 40.66996],
						[110.448556, 40.671046],
						[110.45579, 40.669733],
						[110.460404, 40.664074],
						[110.459018, 40.657859],
						[110.453538, 40.64616],
						[110.444093, 40.643658],
						[110.440823, 40.637138],
						[110.437855, 40.637365],
						[110.430512, 40.631956],
						[110.425487, 40.633321],
						[110.417667, 40.627558],
						[110.413422, 40.626471],
						[110.414223, 40.621896],
						[110.418274, 40.617851],
						[110.415848, 40.601518],
						[110.420548, 40.596005],
						[110.420873, 40.58642],
						[110.424057, 40.580122],
						[110.424144, 40.575214],
						[110.418577, 40.568207],
						[110.426136, 40.559478],
						[110.421891, 40.550647],
						[110.412837, 40.544396],
						[110.413335, 40.541207],
						[110.4061, 40.541156],
						[110.396894, 40.534575],
						[110.406143, 40.534702],
						[110.405559, 40.533031],
						[110.396699, 40.527437],
						[110.390764, 40.530576],
						[110.384353, 40.530854],
						[110.378179, 40.519209],
						[110.377226, 40.51336],
						[110.37036, 40.507156],
						[110.363471, 40.504219],
						[110.353984, 40.506447],
						[110.351276, 40.500395],
						[110.345991, 40.498724],
						[110.334012, 40.497559],
						[110.331933, 40.489226],
						[110.330265, 40.490087],
						[110.327991, 40.48383],
						[110.321731, 40.474457],
						[110.317377, 40.462016],
						[110.313803, 40.469593],
						[110.315081, 40.47238],
						[110.322576, 40.478181],
						[110.325673, 40.485857],
						[110.320604, 40.490214],
						[110.3229, 40.501712],
						[110.322099, 40.506726],
						[110.317897, 40.510296],
						[110.293853, 40.517892],
						[110.291687, 40.517842],
						[110.289673, 40.510423],
						[110.286163, 40.510929],
						[110.280662, 40.50665],
						[110.269788, 40.51612],
						[110.262445, 40.509866],
						[110.257528, 40.509258],
						[110.252047, 40.512727],
						[110.239419, 40.514854]
					]
				]
			]
		},
		"properties": {
			"adcode": 150221,
			"name": "土默特右旗",
			"center": [110.526766, 40.566434],
			"centroid": [110.688082, 40.518635],
			"childrenNum": 0,
			"level": "district",
			"parent": "{ \"adcode\": 150200 }",
			"subFeatureIndex": 6,
			"acroutes": [100000, 150000, 150200]
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "MultiPolygon",
			"coordinates": [
				[
					[
						[110.545965, 40.849425],
						[110.5532, 40.848114],
						[110.565091, 40.840002],
						[110.572759, 40.832291],
						[110.57837, 40.820673],
						[110.58177, 40.81659],
						[110.58816, 40.812532],
						[110.605424, 40.808826],
						[110.623251, 40.807641],
						[110.638392, 40.805776],
						[110.651974, 40.807969],
						[110.659187, 40.810591],
						[110.672421, 40.81901],
						[110.675606, 40.816943],
						[110.678898, 40.808322],
						[110.688126, 40.813414],
						[110.688797, 40.817497],
						[110.698848, 40.818128],
						[110.701902, 40.816288],
						[110.719599, 40.816212],
						[110.730689, 40.825588],
						[110.735888, 40.826949],
						[110.731058, 40.830351],
						[110.735173, 40.841917],
						[110.735152, 40.85877],
						[110.72991, 40.862272],
						[110.723563, 40.863707],
						[110.722675, 40.865949],
						[110.727765, 40.869122],
						[110.730256, 40.877735],
						[110.730148, 40.882268],
						[110.734177, 40.885264],
						[110.739202, 40.88607],
						[110.738076, 40.89171],
						[110.738921, 40.898004],
						[110.746913, 40.906613],
						[110.741888, 40.913509],
						[110.745072, 40.918316],
						[110.741195, 40.922393],
						[110.736863, 40.92262],
						[110.73409, 40.927099],
						[110.728783, 40.927451],
						[110.72378, 40.931175],
						[110.724949, 40.937893],
						[110.712451, 40.939302],
						[110.711823, 40.935327],
						[110.705238, 40.93349],
						[110.702444, 40.928206],
						[110.692956, 40.926747],
						[110.681606, 40.929263],
						[110.675107, 40.922746],
						[110.67253, 40.924004],
						[110.664645, 40.92189],
						[110.662024, 40.91882],
						[110.655937, 40.921588],
						[110.647251, 40.9196],
						[110.64136, 40.922947],
						[110.638457, 40.928055],
						[110.633713, 40.931653],
						[110.632717, 40.937717],
						[110.629793, 40.941315],
						[110.629121, 40.946346],
						[110.631656, 40.950094],
						[110.629078, 40.95598],
						[110.63367, 40.962067],
						[110.630984, 40.969561],
						[110.624962, 40.974238],
						[110.624572, 40.981103],
						[110.629944, 40.990003],
						[110.644544, 40.9941],
						[110.656046, 41.006919],
						[110.660703, 41.008553],
						[110.657389, 41.020867],
						[110.661721, 41.025716],
						[110.661396, 41.031243],
						[110.657064, 41.033429],
						[110.657367, 41.038705],
						[110.674414, 41.048777],
						[110.677988, 41.055006],
						[110.674241, 41.061636],
						[110.666053, 41.064072],
						[110.660855, 41.073714],
						[110.654465, 41.0884],
						[110.655418, 41.095202],
						[110.652862, 41.099946],
						[110.645302, 41.101903],
						[110.648053, 41.107726],
						[110.644695, 41.116332],
						[110.647836, 41.123659],
						[110.64658, 41.132916],
						[110.647381, 41.137155],
						[110.645237, 41.144805],
						[110.645973, 41.149495],
						[110.656674, 41.154936],
						[110.656154, 41.165819],
						[110.647316, 41.165292],
						[110.641533, 41.166295],
						[110.628471, 41.16617],
						[110.624529, 41.168652],
						[110.624312, 41.179933],
						[110.622991, 41.186375],
						[110.615431, 41.201913],
						[110.613655, 41.207801],
						[110.604341, 41.218123],
						[110.599077, 41.22138],
						[110.591258, 41.218399],
						[110.583958, 41.217823],
						[110.575792, 41.218775],
						[110.5626, 41.222808],
						[110.558138, 41.227192],
						[110.55686, 41.231876],
						[110.563099, 41.242119],
						[110.569294, 41.247628],
						[110.568319, 41.249531],
						[110.559438, 41.253287],
						[110.558896, 41.255416],
						[110.564918, 41.261925],
						[110.555777, 41.268609],
						[110.544947, 41.272039],
						[110.54029, 41.276044],
						[110.534636, 41.277846],
						[110.529827, 41.277245],
						[110.519409, 41.285179],
						[110.517437, 41.289083],
						[110.518629, 41.293537],
						[110.515661, 41.29629],
						[110.504008, 41.300593],
						[110.500975, 41.305622],
						[110.488802, 41.311376],
						[110.479791, 41.318806],
						[110.461985, 41.330311],
						[110.441581, 41.341339],
						[110.440454, 41.34934],
						[110.415913, 41.35439],
						[110.416974, 41.358865],
						[110.413075, 41.360415],
						[110.3928, 41.36504],
						[110.387862, 41.360565],
						[110.383161, 41.363065],
						[110.379912, 41.361165],
						[110.368107, 41.371513],
						[110.361305, 41.376212],
						[110.3422, 41.384858],
						[110.332388, 41.387707],
						[110.320063, 41.392554],
						[110.294611, 41.39925],
						[110.273687, 41.407868],
						[110.257029, 41.416785],
						[110.246589, 41.421456],
						[110.233116, 41.425177],
						[110.214033, 41.435215],
						[110.205693, 41.440608],
						[110.193845, 41.440683],
						[110.189166, 41.432843],
						[110.191808, 41.423978],
						[110.195296, 41.417135],
						[110.194343, 41.406395],
						[110.18726, 41.397826],
						[110.179483, 41.392254],
						[110.164516, 41.383584],
						[110.156696, 41.380285],
						[110.147014, 41.378786],
						[110.138761, 41.381435],
						[110.13588, 41.387557],
						[110.133519, 41.396677],
						[110.129382, 41.404396],
						[110.123793, 41.408668],
						[110.117056, 41.411091],
						[110.107006, 41.410941],
						[110.09611, 41.408718],
						[110.089547, 41.409067],
						[110.073843, 41.409292],
						[110.059698, 41.413613],
						[110.055994, 41.415612],
						[110.04525, 41.41771],
						[110.027445, 41.409392],
						[110.012932, 41.403397],
						[110.005438, 41.397526],
						[109.997401, 41.389381],
						[109.977842, 41.390305],
						[109.94678, 41.393504],
						[109.949184, 41.395402],
						[109.938614, 41.403322],
						[109.942686, 41.411415],
						[109.937271, 41.418359],
						[109.936404, 41.429397],
						[109.93465, 41.432069],
						[109.896613, 41.43901],
						[109.895378, 41.440084],
						[109.891306, 41.458607],
						[109.874822, 41.466818],
						[109.866114, 41.469738],
						[109.866634, 41.47141],
						[109.853075, 41.474454],
						[109.837002, 41.474429],
						[109.830547, 41.47156],
						[109.828294, 41.467267],
						[109.822663, 41.461926],
						[109.810684, 41.455786],
						[109.797038, 41.455212],
						[109.793377, 41.456385],
						[109.778561, 41.454788],
						[109.773687, 41.459855],
						[109.776828, 41.465146],
						[109.770633, 41.46552],
						[109.756445, 41.469688],
						[109.747997, 41.471235],
						[109.734697, 41.475902],
						[109.71087, 41.479694],
						[109.703787, 41.484161],
						[109.694408, 41.492219],
						[109.688213, 41.498979],
						[109.665036, 41.499777],
						[109.664018, 41.499303],
						[109.664083, 41.492843],
						[109.661029, 41.473581],
						[109.658169, 41.467117],
						[109.646386, 41.453814],
						[109.64253, 41.447224],
						[109.640711, 41.43936],
						[109.635274, 41.43519],
						[109.626284, 41.433767],
						[109.631938, 41.426326],
						[109.641902, 41.421006],
						[109.647534, 41.415362],
						[109.655072, 41.410716],
						[109.653274, 41.405345],
						[109.663108, 41.395877],
						[109.680437, 41.394153],
						[109.684834, 41.39138],
						[109.685787, 41.382784],
						[109.687325, 41.380935],
						[109.698719, 41.379661],
						[109.698805, 41.366214],
						[109.703636, 41.358065],
						[109.698437, 41.355915],
						[109.69991, 41.352365],
						[109.690444, 41.35129],
						[109.692134, 41.341639],
						[109.694603, 41.335313],
						[109.691224, 41.332287],
						[109.695664, 41.322608],
						[109.681975, 41.322858],
						[109.674718, 41.324284],
						[109.666812, 41.322133],
						[109.658408, 41.321357],
						[109.657563, 41.312852],
						[109.655245, 41.309475],
						[109.651281, 41.30885],
						[109.645064, 41.315654],
						[109.640364, 41.317705],
						[109.628104, 41.310126],
						[109.625656, 41.306123],
						[109.629144, 41.301194],
						[109.628451, 41.297566],
						[109.634082, 41.297891],
						[109.635512, 41.293712],
						[109.630573, 41.287356],
						[109.624205, 41.286906],
						[109.619223, 41.280374],
						[109.62401, 41.272464],
						[109.628364, 41.270362],
						[109.627108, 41.266206],
						[109.631591, 41.260824],
						[109.637916, 41.257093],
						[109.639238, 41.247754],
						[109.64188, 41.240266],
						[109.646277, 41.236008],
						[109.654205, 41.231675],
						[109.662891, 41.220553],
						[109.664494, 41.208703],
						[109.668935, 41.202589],
						[109.676646, 41.199106],
						[109.680827, 41.192315],
						[109.686285, 41.173666],
						[109.703029, 41.152955],
						[109.71204, 41.146962],
						[109.722004, 41.138459],
						[109.724235, 41.125465],
						[109.717542, 41.115956],
						[109.707903, 41.112769],
						[109.687, 41.110762],
						[109.677794, 41.104388],
						[109.675866, 41.098164],
						[109.678444, 41.083128],
						[109.687108, 41.06819],
						[109.68596, 41.056714],
						[109.687758, 41.049355],
						[109.691895, 41.041292],
						[109.701188, 41.034459],
						[109.717672, 41.031495],
						[109.728589, 41.032173],
						[109.73708, 41.031419],
						[109.746394, 41.024058],
						[109.746243, 41.009407],
						[109.750922, 41.00423],
						[109.7582, 41.003451],
						[109.764135, 41.007673],
						[109.768229, 41.012549],
						[109.775463, 41.013127],
						[109.781918, 41.009809],
						[109.803493, 41.005135],
						[109.812937, 41.002068],
						[109.822164, 40.996036],
						[109.825089, 40.988545],
						[109.82667, 40.975747],
						[109.826323, 40.966443],
						[109.829074, 40.963953],
						[109.830092, 40.958168],
						[109.835724, 40.945768],
						[109.845537, 40.939101],
						[109.856389, 40.937415],
						[109.860114, 40.935126],
						[109.869169, 40.922695],
						[109.875775, 40.919675],
						[109.884483, 40.92569],
						[109.887169, 40.924532],
						[109.886974, 40.913308],
						[109.881147, 40.910112],
						[109.885609, 40.906336],
						[109.882837, 40.898356],
						[109.900772, 40.882419],
						[109.903393, 40.875141],
						[109.902007, 40.870986],
						[109.896635, 40.868165],
						[109.886931, 40.870281],
						[109.881515, 40.869979],
						[109.873457, 40.866629],
						[109.868216, 40.860609],
						[109.829442, 40.820522],
						[109.829919, 40.817044],
						[109.824677, 40.812809],
						[109.818807, 40.813212],
						[109.821861, 40.806406],
						[109.83124, 40.802952],
						[109.836071, 40.798717],
						[109.834035, 40.792187],
						[109.838453, 40.788228],
						[109.843349, 40.786538],
						[109.844324, 40.78099],
						[109.852446, 40.774887],
						[109.868605, 40.771381],
						[109.868865, 40.764848],
						[109.872786, 40.755313],
						[109.868692, 40.744211],
						[109.865205, 40.74305],
						[109.860504, 40.735707],
						[109.848504, 40.73172],
						[109.866504, 40.729246],
						[109.883443, 40.74083],
						[109.936664, 40.733209],
						[109.981004, 40.724476],
						[109.998333, 40.734496],
						[110.002448, 40.744262],
						[110.013625, 40.744388],
						[110.030608, 40.729549],
						[110.046767, 40.731568],
						[110.091518, 40.733713],
						[110.111208, 40.735],
						[110.109172, 40.738862],
						[110.108999, 40.748097],
						[110.112421, 40.756801],
						[110.109995, 40.77693],
						[110.109129, 40.802852],
						[110.111771, 40.813717],
						[110.115497, 40.817775],
						[110.122342, 40.813792],
						[110.133649, 40.815002],
						[110.160812, 40.816313],
						[110.168523, 40.812456],
						[110.17448, 40.813162],
						[110.210372, 40.823723],
						[110.221159, 40.831384],
						[110.227332, 40.840833],
						[110.235737, 40.841211],
						[110.231708, 40.847056],
						[110.232509, 40.853128],
						[110.225275, 40.857108],
						[110.231145, 40.859576],
						[110.244553, 40.860357],
						[110.247347, 40.864942],
						[110.249903, 40.873907],
						[110.253845, 40.880682],
						[110.25038, 40.887304],
						[110.254019, 40.892113],
						[110.259932, 40.894353],
						[110.270026, 40.893321],
						[110.274553, 40.891131],
						[110.284452, 40.882721],
						[110.292727, 40.877559],
						[110.302994, 40.881462],
						[110.307716, 40.877005],
						[110.319781, 40.872749],
						[110.325846, 40.873454],
						[110.334077, 40.87018],
						[110.337608, 40.863682],
						[110.343608, 40.862775],
						[110.346857, 40.865294],
						[110.342829, 40.869425],
						[110.359421, 40.870105],
						[110.364576, 40.873404],
						[110.374129, 40.872623],
						[110.391977, 40.879397],
						[110.394403, 40.878994],
						[110.400165, 40.870407],
						[110.410216, 40.872774],
						[110.419053, 40.868291],
						[110.428021, 40.870281],
						[110.436729, 40.862297],
						[110.442166, 40.861088],
						[110.449032, 40.862977],
						[110.45865, 40.860962],
						[110.4713, 40.863607],
						[110.484708, 40.860357],
						[110.488477, 40.861743],
						[110.499307, 40.869122],
						[110.504701, 40.868795],
						[110.507365, 40.863758],
						[110.512195, 40.864312],
						[110.517957, 40.859728],
						[110.534658, 40.853883],
						[110.543712, 40.852322],
						[110.545965, 40.849425]
					]
				]
			]
		},
		"properties": {
			"adcode": 150222,
			"name": "固阳县",
			"center": [110.063421, 41.030004],
			"centroid": [110.146314, 41.113731],
			"childrenNum": 0,
			"level": "district",
			"parent": "{ \"adcode\": 150200 }",
			"subFeatureIndex": 7,
			"acroutes": [100000, 150000, 150200]
		}
	}, {
		"type": "Feature",
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[109.620219, 42.52127],
					[109.642075, 42.53499],
					[109.683989, 42.558987],
					[109.733506, 42.579099],
					[109.833753, 42.611561],
					[109.882728, 42.628545],
					[109.906166, 42.635773],
					[109.991683, 42.639105],
					[110.049518, 42.642241],
					[110.095959, 42.644152],
					[110.108457, 42.642755],
					[110.116277, 42.650031],
					[110.139454, 42.674743],
					[110.236603, 42.706689],
					[110.2882, 42.721959],
					[110.3375, 42.738032],
					[110.344366, 42.737445],
					[110.38288, 42.713052],
					[110.391674, 42.709283],
					[110.406057, 42.705123],
					[110.415761, 42.699958],
					[110.434974, 42.692444],
					[110.440216, 42.688747],
					[110.458888, 42.670237],
					[110.475134, 42.654783],
					[110.482715, 42.648684],
					[110.497964, 42.639693],
					[110.518542, 42.623668],
					[110.523286, 42.618668],
					[110.538037, 42.606462],
					[110.554283, 42.596754],
					[110.564073, 42.586383],
					[110.578608, 42.572208],
					[110.58437, 42.564114],
					[110.621107, 42.515256],
					[110.638717, 42.492224],
					[110.660096, 42.485151],
					[110.704458, 42.471125],
					[110.716003, 42.461568],
					[110.730191, 42.442868],
					[110.723173, 42.394284],
					[110.732357, 42.360701],
					[110.743231, 42.323554],
					[110.739007, 42.315501],
					[110.741953, 42.305256],
					[110.762509, 42.294244],
					[110.771347, 42.282221],
					[110.774856, 42.273769],
					[110.778105, 42.262136],
					[110.779686, 42.237705],
					[110.786705, 42.226139],
					[110.790387, 42.218346],
					[110.79251, 42.208059],
					[110.795542, 42.173735],
					[110.797665, 42.167095],
					[110.801672, 42.160923],
					[110.813348, 42.152455],
					[110.830525, 42.135934],
					[110.845254, 42.120818],
					[110.862431, 42.101101],
					[110.866092, 42.095146],
					[110.876814, 42.08348],
					[110.885392, 42.069735],
					[110.887276, 42.065236],
					[110.896721, 42.052575],
					[110.903912, 42.040728],
					[110.915414, 42.031279],
					[110.924317, 42.022595],
					[110.931053, 42.012525],
					[110.936555, 41.997651],
					[110.947602, 41.985546],
					[110.96348, 41.952612],
					[110.974202, 41.935693],
					[110.978794, 41.929994],
					[110.98865, 41.922685],
					[110.994151, 41.91582],
					[110.998397, 41.900725],
					[111.001408, 41.898395],
					[111.017632, 41.867673],
					[111.021791, 41.854303],
					[111.032123, 41.839318],
					[111.055084, 41.808667],
					[111.060347, 41.803826],
					[111.060954, 41.798761],
					[111.067647, 41.798389],
					[111.067019, 41.793199],
					[111.076355, 41.79017],
					[111.079907, 41.786271],
					[111.099489, 41.784409],
					[111.121041, 41.771643],
					[111.133085, 41.756738],
					[111.142832, 41.747271],
					[111.15232, 41.746178],
					[111.162457, 41.738673],
					[111.162825, 41.731813],
					[111.161049, 41.724257],
					[111.193432, 41.704841],
					[111.215028, 41.688552],
					[111.2217, 41.684971],
					[111.243707, 41.669672],
					[111.2723, 41.65967],
					[111.293267, 41.65967],
					[111.297903, 41.651931],
					[111.303773, 41.645784],
					[111.316661, 41.643345],
					[111.335658, 41.64576],
					[111.349131, 41.646755],
					[111.359572, 41.64337],
					[111.369731, 41.633588],
					[111.376186, 41.625174],
					[111.37872, 41.607795],
					[111.38368, 41.598904],
					[111.393796, 41.590958],
					[111.400273, 41.579998],
					[111.40519, 41.567914],
					[111.431854, 41.541445],
					[111.437399, 41.530501],
					[111.438028, 41.521126],
					[111.437486, 41.508083],
					[111.44028, 41.493691],
					[111.441558, 41.477449],
					[111.440995, 41.466469],
					[111.443464, 41.461477],
					[111.436056, 41.444053],
					[111.436143, 41.436738],
					[111.433739, 41.433742],
					[111.427089, 41.431644],
					[111.430836, 41.422979],
					[111.430598, 41.416785],
					[111.426136, 41.408293],
					[111.419507, 41.402772],
					[111.399774, 41.396652],
					[111.395247, 41.393429],
					[111.392886, 41.386982],
					[111.385045, 41.379835],
					[111.390244, 41.369339],
					[111.397305, 41.36044],
					[111.413161, 41.35479],
					[111.420482, 41.350465],
					[111.425074, 41.339739],
					[111.424056, 41.334888],
					[111.426396, 41.331887],
					[111.424793, 41.324534],
					[111.425832, 41.318806],
					[111.415673, 41.319206],
					[111.407096, 41.316605],
					[111.397283, 41.312302],
					[111.393493, 41.311977],
					[111.355499, 41.313178],
					[111.347052, 41.302295],
					[111.350431, 41.300243],
					[111.343348, 41.293037],
					[111.337542, 41.288833],
					[111.330763, 41.287932],
					[111.328661, 41.290384],
					[111.324199, 41.30312],
					[111.306177, 41.297991],
					[111.302647, 41.295889],
					[111.279578, 41.290259],
					[111.282437, 41.283877],
					[111.272148, 41.281875],
					[111.261599, 41.271513],
					[111.253216, 41.264454],
					[111.259953, 41.257293],
					[111.261079, 41.250308],
					[111.259563, 41.246952],
					[111.250162, 41.245825],
					[111.245895, 41.241944],
					[111.238942, 41.240091],
					[111.226357, 41.249131],
					[111.21401, 41.254139],
					[111.204588, 41.259396],
					[111.194125, 41.263577],
					[111.162717, 41.283452],
					[111.145496, 41.284653],
					[111.137265, 41.28648],
					[111.135489, 41.29121],
					[111.120197, 41.298542],
					[111.119438, 41.302845],
					[111.108088, 41.305372],
					[111.1025, 41.308324],
					[111.096304, 41.289608],
					[111.092167, 41.286981],
					[111.08021, 41.288082],
					[111.065394, 41.291035],
					[111.034874, 41.299793],
					[111.034203, 41.305898],
					[111.029437, 41.318456],
					[111.024953, 41.324784],
					[111.019365, 41.326134],
					[111.011177, 41.335388],
					[111.005393, 41.335438],
					[110.999177, 41.333312],
					[110.995668, 41.337988],
					[110.989971, 41.341489],
					[110.984274, 41.342214],
					[110.984144, 41.347165],
					[110.966166, 41.348115],
					[110.962007, 41.337463],
					[110.96101, 41.32686],
					[110.950548, 41.318731],
					[110.922064, 41.328961],
					[110.887016, 41.334813],
					[110.890742, 41.34399],
					[110.885457, 41.34634],
					[110.873673, 41.347165],
					[110.875644, 41.35709],
					[110.863753, 41.360065],
					[110.856193, 41.359215],
					[110.851016, 41.35589],
					[110.832301, 41.356515],
					[110.823593, 41.357815],
					[110.820301, 41.360765],
					[110.822618, 41.367364],
					[110.829637, 41.375962],
					[110.82903, 41.383134],
					[110.820886, 41.383634],
					[110.81573, 41.386258],
					[110.811311, 41.383734],
					[110.803773, 41.38201],
					[110.795975, 41.383434],
					[110.787463, 41.378886],
					[110.779275, 41.37996],
					[110.773405, 41.377236],
					[110.76786, 41.377161],
					[110.762141, 41.374212],
					[110.756964, 41.376287],
					[110.748408, 41.376412],
					[110.742278, 41.38121],
					[110.737967, 41.381085],
					[110.74217, 41.385508],
					[110.737989, 41.386857],
					[110.734502, 41.383709],
					[110.728133, 41.383959],
					[110.729563, 41.386557],
					[110.722567, 41.384933],
					[110.718689, 41.380385],
					[110.706321, 41.376237],
					[110.705411, 41.373763],
					[110.71074, 41.367039],
					[110.710047, 41.36234],
					[110.698588, 41.363565],
					[110.685201, 41.35604],
					[110.683534, 41.35154],
					[110.67892, 41.35164],
					[110.664688, 41.341889],
					[110.659901, 41.341664],
					[110.652862, 41.337988],
					[110.647576, 41.333262],
					[110.64697, 41.323808],
					[110.638652, 41.322108],
					[110.633952, 41.317305],
					[110.634645, 41.312302],
					[110.630053, 41.313878],
					[110.628926, 41.318206],
					[110.619612, 41.319381],
					[110.611944, 41.318481],
					[110.600485, 41.324359],
					[110.597475, 41.327135],
					[110.593056, 41.327385],
					[110.58359, 41.331737],
					[110.581077, 41.32861],
					[110.576897, 41.333012],
					[110.570832, 41.331562],
					[110.573453, 41.32636],
					[110.563792, 41.329661],
					[110.573648, 41.321232],
					[110.573518, 41.318731],
					[110.567582, 41.31738],
					[110.574471, 41.313303],
					[110.567951, 41.311551],
					[110.567886, 41.305898],
					[110.562795, 41.298617],
					[110.552398, 41.288833],
					[110.540831, 41.294813],
					[110.528484, 41.296315],
					[110.523567, 41.293712],
					[110.518629, 41.293537],
					[110.515661, 41.29629],
					[110.504008, 41.300593],
					[110.500975, 41.305622],
					[110.488802, 41.311376],
					[110.479791, 41.318806],
					[110.461985, 41.330311],
					[110.441581, 41.341339],
					[110.440454, 41.34934],
					[110.415913, 41.35439],
					[110.416974, 41.358865],
					[110.413075, 41.360415],
					[110.3928, 41.36504],
					[110.387862, 41.360565],
					[110.383161, 41.363065],
					[110.379912, 41.361165],
					[110.368107, 41.371513],
					[110.361305, 41.376212],
					[110.3422, 41.384858],
					[110.332388, 41.387707],
					[110.320063, 41.392554],
					[110.294611, 41.39925],
					[110.273687, 41.407868],
					[110.257029, 41.416785],
					[110.246589, 41.421456],
					[110.233116, 41.425177],
					[110.214033, 41.435215],
					[110.205693, 41.440608],
					[110.193845, 41.440683],
					[110.189166, 41.432843],
					[110.191808, 41.423978],
					[110.195296, 41.417135],
					[110.194343, 41.406395],
					[110.18726, 41.397826],
					[110.179483, 41.392254],
					[110.164516, 41.383584],
					[110.156696, 41.380285],
					[110.147014, 41.378786],
					[110.138761, 41.381435],
					[110.13588, 41.387557],
					[110.133519, 41.396677],
					[110.129382, 41.404396],
					[110.123793, 41.408668],
					[110.117056, 41.411091],
					[110.107006, 41.410941],
					[110.09611, 41.408718],
					[110.089547, 41.409067],
					[110.073843, 41.409292],
					[110.059698, 41.413613],
					[110.055994, 41.415612],
					[110.04525, 41.41771],
					[110.027445, 41.409392],
					[110.012932, 41.403397],
					[110.005438, 41.397526],
					[109.997401, 41.389381],
					[109.977842, 41.390305],
					[109.94678, 41.393504],
					[109.949184, 41.395402],
					[109.938614, 41.403322],
					[109.942686, 41.411415],
					[109.937271, 41.418359],
					[109.936404, 41.429397],
					[109.93465, 41.432069],
					[109.896613, 41.43901],
					[109.895378, 41.440084],
					[109.891306, 41.458607],
					[109.874822, 41.466818],
					[109.866114, 41.469738],
					[109.866634, 41.47141],
					[109.853075, 41.474454],
					[109.837002, 41.474429],
					[109.830547, 41.47156],
					[109.828294, 41.467267],
					[109.822663, 41.461926],
					[109.810684, 41.455786],
					[109.797038, 41.455212],
					[109.793377, 41.456385],
					[109.778561, 41.454788],
					[109.773687, 41.459855],
					[109.776828, 41.465146],
					[109.770633, 41.46552],
					[109.756445, 41.469688],
					[109.747997, 41.471235],
					[109.734697, 41.475902],
					[109.71087, 41.479694],
					[109.703787, 41.484161],
					[109.694408, 41.492219],
					[109.688213, 41.498979],
					[109.665036, 41.499777],
					[109.664018, 41.499303],
					[109.638739, 41.498904],
					[109.609584, 41.497981],
					[109.583461, 41.494464],
					[109.567605, 41.495088],
					[109.554132, 41.497807],
					[109.52463, 41.498655],
					[109.51055, 41.501623],
					[109.482781, 41.499852],
					[109.477062, 41.499977],
					[109.449076, 41.506437],
					[109.457611, 41.51544],
					[109.452022, 41.523919],
					[109.436968, 41.527734],
					[109.428542, 41.533518],
					[109.425531, 41.541022],
					[109.433155, 41.549397],
					[109.441473, 41.56445],
					[109.44052, 41.574242],
					[109.437834, 41.581293],
					[109.433134, 41.602714],
					[109.429386, 41.613597],
					[109.421242, 41.628087],
					[109.420116, 41.633538],
					[109.42057, 41.64683],
					[109.419184, 41.651608],
					[109.414462, 41.655838],
					[109.40361, 41.668204],
					[109.399993, 41.675668],
					[109.400534, 41.685966],
					[109.399104, 41.691661],
					[109.391501, 41.698599],
					[109.382469, 41.702951],
					[109.378592, 41.708123],
					[109.378765, 41.711803],
					[109.371075, 41.717396],
					[109.35888, 41.728334],
					[109.341746, 41.74255],
					[109.364815, 41.766377],
					[109.346273, 41.795335],
					[109.317204, 41.808791],
					[109.311356, 41.824106],
					[109.2942, 41.85212],
					[109.281096, 41.864399],
					[109.277392, 41.86998],
					[109.27802, 41.877767],
					[109.283847, 41.886148],
					[109.298056, 41.892644],
					[109.323139, 41.896883],
					[109.337999, 41.902956],
					[109.345125, 41.909748],
					[109.360765, 41.928409],
					[109.374779, 41.933017],
					[109.42774, 42.002527],
					[109.450224, 42.029696],
					[109.464715, 42.048371],
					[109.488131, 42.077696],
					[109.504203, 42.110713],
					[109.515575, 42.139639],
					[109.539316, 42.14727],
					[109.530803, 42.177807],
					[109.516615, 42.226361],
					[109.508276, 42.25765],
					[109.507149, 42.265907],
					[109.485532, 42.297348],
					[109.4799, 42.307374],
					[109.483734, 42.31225],
					[109.483495, 42.318875],
					[109.479033, 42.323135],
					[109.470261, 42.327789],
					[109.466665, 42.333674],
					[109.467661, 42.340542],
					[109.458239, 42.354081],
					[109.45982, 42.361882],
					[109.456268, 42.366385],
					[109.450029, 42.368797],
					[109.444289, 42.373718],
					[109.441647, 42.378713],
					[109.445199, 42.392021],
					[109.443726, 42.398391],
					[109.436903, 42.408966],
					[109.433697, 42.427554],
					[109.423993, 42.433159],
					[109.403935, 42.437706],
					[109.391935, 42.442843],
					[109.383227, 42.447734],
					[109.394447, 42.449307],
					[109.48681, 42.458645],
					[109.504918, 42.470241],
					[109.516723, 42.471199],
					[109.544233, 42.472354],
					[109.561691, 42.484071],
					[109.598363, 42.507571],
					[109.620219, 42.52127]
				],
				[
					[109.956332, 41.818422],
					[109.941386, 41.817305],
					[109.926354, 41.815394],
					[109.910346, 41.820259],
					[109.89592, 41.823287],
					[109.880584, 41.823362],
					[109.873392, 41.83649],
					[109.847616, 41.878783],
					[109.874302, 41.931877],
					[109.865183, 41.936907],
					[109.827601, 41.883718],
					[109.837089, 41.835646],
					[109.838042, 41.824057],
					[109.840944, 41.811646],
					[109.841421, 41.804248],
					[109.849046, 41.783316],
					[109.850085, 41.77589],
					[109.853811, 41.76747],
					[109.855046, 41.757707],
					[109.857298, 41.754675],
					[109.85589, 41.74834],
					[109.862757, 41.738797],
					[109.885219, 41.724257],
					[109.889075, 41.720056],
					[109.895357, 41.704642],
					[109.902267, 41.697082],
					[109.902093, 41.684025],
					[109.910888, 41.677459],
					[109.918144, 41.673329],
					[109.930664, 41.668304],
					[109.946628, 41.663502],
					[109.957199, 41.656908],
					[109.963827, 41.655266],
					[109.977192, 41.648074],
					[109.97756, 41.652703],
					[109.986224, 41.668528],
					[109.988217, 41.677285],
					[110.004874, 41.71409],
					[110.013864, 41.73149],
					[110.018759, 41.735069],
					[110.02073, 41.740313],
					[110.019171, 41.742376],
					[110.029308, 41.741928],
					[110.040875, 41.745383],
					[110.042586, 41.753483],
					[110.04746, 41.761657],
					[110.048781, 41.767072],
					[110.046052, 41.771295],
					[110.047676, 41.777629],
					[110.045142, 41.779988],
					[110.050059, 41.791039],
					[110.05372, 41.794491],
					[110.052723, 41.797346],
					[110.05803, 41.801194],
					[110.058052, 41.813458],
					[110.049279, 41.81604],
					[110.042976, 41.815642],
					[110.023156, 41.821823],
					[110.011134, 41.82495],
					[110.000391, 41.822791],
					[109.985315, 41.82423],
					[109.956332, 41.818422]
				]
			]
		},
		"properties": {
			"adcode": 150223,
			"name": "达尔罕茂明安联合旗",
			"center": [110.438452, 41.702836],
			"centroid": [110.472676, 41.954988],
			"childrenNum": 0,
			"level": "district",
			"parent": "{ \"adcode\": 150200 }",
			"subFeatureIndex": 8,
			"acroutes": [100000, 150000, 150200]
		}
	}]
}


  // return originAxios.get(`/jiangmenGeoJson.json?timestamp=${getTimestamp}`)
};


export const drawPieCharts = (id,data,cb,adjust={})  => {
  let client = document.getElementById(id);
   console.log('ffff',data)
  let seriesData = [];
  let nameData = [];
  data.forEach((item) => {
    seriesData.push({
      name: item.name,
      value: item.value,
      unit: item.unit
    });
    nameData.push(item.name)
  });
  let option = {
    backgroundColor: 'rgba(0,0,0,0)',
    color: ['#1a79c9', '#71bcff', '#29b3cc', '#39c77f', '#f99b37', '#ef5150', '#f9db63'],
    legend: {
      orient: 'vertical',
      icon: 'circle',
      x: adjust.legendX ? adjust.legendX : '61.7%',
      y: 'center',
      data: seriesData,
      itemWidth: remToPx(12/75),
      itemHeight: remToPx(12/75),
      align: 'left',
      textStyle: {
        rich: {
          name: {
            align: 'left',
            // width:100,
            width: remToPx((adjust.legendNameWidth?adjust.legendNameWidth:70)/75),
            fontSize: remToPx(24/75),
            color: '#353535',
            padding: [0, 0, 0, remToPx(3/75)],
            fontFamily:'PingFang-SC-Medium'
          },
          value: {
            align: 'right',
            width: remToPx((adjust.legendValueWidth?adjust.legendValueWidth:70)/75),
            fontSize: remToPx(24/75),
            color: '#353535',
            fontWeight:'bold',
            padding: [0, remToPx(90/75), 0,remToPx(24/75)],
            fontFamily:'PingFang-SC-Medium'
          },
          unit: {
            fontSize: remToPx(24/75),
            color: '#353535',
            fontWeight:'bold',
            fontFamily:'PingFang-SC-Medium'
          },

        }
      },
      formatter: function(name) {
        let res = seriesData.filter(v => v.name === name);
        res = res[0] || {};
        return '{name|' + name + '}  {value|' + res.value + res.unit  +'}'
      }
    },
    series: [{
      type: 'pie',
      radius: [remToPx(107/75), remToPx(157/75)],
      padding:[remToPx(58/75),remToPx(84/75),remToPx(80/75),remToPx(65/75)],
      center: ['29.6%', '47.57%'],
      data: seriesData,
      hoverAnimation: false,
      label: {
        show: false,
      },
    }]
  };
    // let option = {
    //     id: 'echarts',
    //     grid: {
    //       top: 0,
    //       bottom: 0,
    //       left: 0,
    //       right: 0,
    //     },
    //     tooltips:{
    //       trigger: 'item',
    //       triggerOn:'mousemove',

    //     },
    //     legend: {
    //       show: false,
    //   },

    //     series: [
    //         {
    //             name:'数据来源',
    //             type: 'pie',
    //             center:['50%','50%'],
    //             avoidLabelOverlap: false,
    //             color:['rgba(26,143,218,1)', 'rgba(26,143,218,0.8)', 'rgba(26,143,218,0.6)', 'rgba(26,143,218,0.5)', 'rgba(26,143,218,0.4)', 'rgba(26,143,218,0.2)', 'rgba(26,143,218,0.1)'],
    //             label: {
    //               formatter: '{b} : {c}',
    //               borderWidth:1,
    //               padding: 5,
    //               height: 36,
    //               weight:'100%',
    //               align: 'center',
    //               show: false,
    //           },
    //           data:data
    //         }
    //     ]
    //   };
      let myChart = echarts.init(client);
      myChart.on('click',function(param){
        if(cb) cb(param.data.name)
        // console.log('param.data',param.data)
      })
      myChart.setOption(option);
}

export const drawPieCharts1 = (id,data,cb,adjust={})  => {
  let client = document.getElementById(id);
   console.log(data)
  let seriesData = [];
  let nameData = [];
  data.forEach((item) => {
    seriesData.push({
      name: item.name,
      value: item.value,
      unit: item.unit
    });
    nameData.push(item.name)
  });
  let option = {
    backgroundColor: 'rgba(0,0,0,0)',
    color: ['#1a79c9', '#71bcff', '#29b3cc', '#39c77f', '#f99b37', '#ef5150', '#f9db63'],
    legend: {
      orient: 'vertical',
      icon: 'circle',
      x: adjust.legendX ? adjust.legendX : '51.7%',
      y: 'center',
      data: seriesData,
      itemWidth: remToPx(12/75),
      itemHeight: remToPx(12/75),
      align: 'left',
      textStyle: {
        rich: {
          name: {
            align: 'left',
            // width:100,
            width: remToPx((adjust.legendNameWidth?adjust.legendNameWidth:70)/75),
            fontSize: remToPx(24/75),
            color: '#353535',
            padding: [0, remToPx(63/75), 0, remToPx(3/75)],
            fontFamily:'PingFang-SC-Medium'
          },
          value: {
            align: 'right',
            width: remToPx((adjust.legendValueWidth?adjust.legendValueWidth:70)/75),
            fontSize: remToPx(24/75),
            color: '#353535',
            fontWeight:'bold',
            padding: [0, remToPx(90/75), 0,remToPx(24/75)],
            fontFamily:'PingFang-SC-Medium'
          },
          unit: {
            fontSize: remToPx(24/75),
            color: '#353535',
            fontWeight:'bold',
            fontFamily:'PingFang-SC-Medium'
          },

        }
      },
      formatter: function(name) {
        // console.log('name',name)
        // if(name.length>9) {
        //   name = name.slice(0,5) + "..."
        // }
        let res = seriesData.filter(v => v.name === name);
        res = res[0] || {};
        return '{name|' + name + '}  {value|' + res.value + res.unit  +'}'
      }
    },
    series: [{
      type: 'pie',
      radius: [remToPx(107/75), remToPx(157/75)],
      padding:[remToPx(58/75),remToPx(84/75),remToPx(80/75),remToPx(65/75)],
      center: ['29.6%', '47.57%'],
      data: seriesData,
      hoverAnimation: false,
      label: {
        show: false,
      },
    }]
  };

      let myChart = echarts.init(client);
      myChart.on('click',function(param){
        if(cb) cb(param.data.name)
        // console.log('param.data',param.data)
      })
      myChart.setOption(option);
}
