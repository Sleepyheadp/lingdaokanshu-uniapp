import echarts from 'echarts';

export const drawPieCharts = (id,data,cb,adjust={})  => {
  let client = document.getElementById(id);
  //  console.log(data)
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