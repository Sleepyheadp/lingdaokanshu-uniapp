<style lang="less" scoped>
  @import url("../common-class.less");
  .section-item {
    width: 750rpx;
    &:last-child {
      padding-bottom: 140rpx;
    }
  }
  .tabel-detail {
    text-align: left;
    margin: 5rpx 15rpx;
  }
  .drawCharts{
    width:100%;
    height:450rpx;
    margin: 0 auto;
  }

</style>
<template>
  <div class="main">
    <div class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">注册法人单位数量</span>
      </div>
      <div class="drawCharts"  id="firstTab"></div>
    </div>

    <div class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">注册法人单位分布</span>
      </div>
      <div class="drawCharts"  id="secondTab"></div>
    </div>

    <div class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">主体类型</span>
      </div>
      <div class="drawCharts"  id="thirdTab"></div>
    </div>

    <div class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">注销法人单位数量</span>
      </div>
      <div class="drawCharts"  id="fourthTab"></div>
    </div>
  </div>

</template>

<script>
import {lineBarChart,pieChart,barChart,labelPieChart} from "../../charts/h5-chart"
  export default {
    name: "attract-investment",
    props: ['tabData'],
    data() {
      return {
        unit:'',
        distribution:'',
        mainType:'',
        register:'',
        chart: [
                      {
                        "legends": [
                          "从业人数",
                          "增速",
                          // "计划投资"
                        ],
                        "series": [
                          {
                            "data": [
                              56.0,
                              29.0,
                              6.0,
                              13.0,
                              3.0,
                              37.0
                            ],
                            "name": "从业人数",
                            "type": "line"
                          },
                          {
                            "data": [
                              198.2095,
                              161.9465,
                              292.7261,
                              812.3566,
                              63.5401,
                              240.3558
                            ],
                            "name": "增速",
                            "type": "bar"
                          },
                        ],
                        "xaxis": [
                          "市政道路",
                          "环境治理",
                          "轨道交通",
                          "高快路网",
                          "港口航道",
                          "等级公路"
                        ],
                        "yaxis": [
                          "个",
                          "亿元"
                        ]
                      },
                    ],
       
        tab: {
          data: [
            {
              name: '注册法人单位数量',
            },
            {
              name: '注册法人单位分布',
            },
            {
              name: '主题类型',
            },
            {
              name: '注销法人单位数量',
            }
          ],
        }
      }
    },
    mounted() {
      this.initWin();
    },
    methods: {
      initWin() {
       
        this.unit = this.tabData.data[0].data.cancellation;
        this.distribution = this.tabData.data[0].data.distribution;
        this.mainType = this.tabData.data[0].data.mainType;
        console.log('this.mainType',this.mainType)
        this.register = this.tabData.data[0].data.register;
        this.$nextTick(()=>{
          lineBarChart('firstTab',this.register.chart[0])
          barChart('secondTab',this.distribution.chart[0])
          pieChart('thirdTab', this.mainType.chart[0].series[0].data);
          lineBarChart('fourthTab',this.unit.chart[0])
        })
        
      },
      tabIdList(index) {
        let list = ['firstTab', 'secondTab', 'thirdTab', 'fourthTab'];
        return list[index]
      }
    },
    watch: {
      'tabData.data': function (newValue, oldValue) {
        // this.initWin();
        console.log('newValue, oldValue',newValue, oldValue)

      }
    },
  }
</script>


