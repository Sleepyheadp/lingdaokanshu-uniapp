<style lang="less" scoped>
  @import url("./traffic-class.less");
  .chartsMulBar {
    height: 350rpx;
  }
  .chartsPie {
    margin-top: -10rpx;
    margin-bottom: -45rpx;
  }
  .chartsTop {
    margin-top: -60rpx;
  }
  .charts {
    width: 100%;
    height: 450rpx;
    float: left;
  }
  .content {
    margin-top: 50rpx;
    width: 100%;
  }
</style>
<template>
  <div class="main">
    <!--1交通项目 -->
    <div id="firstTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[0].name}}</span>
      </div>
      <div class="content-landing">
        <div class="tab-box-one-line-right">
          <div
            v-for="(item, index) in tabData.data[0].data.project.detail"
            class="three-tab">
            <div :class="{tabWithArray: index===0, tabWithLine: index===1, tab: index===2}">
              <span class="name">{{item.label}}</span><br/>
              <span class="number">{{item.value}}<span class="unit">{{item.unit}}</span></span>
            </div>
            <div :class="{includeArray: index===1, splitLine: index===0, tab: index===2}"></div>
          </div>
        </div>
        <div class="clear-both"></div>
        <div class="content">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">项目数</span>
          <div class="charts chartsTop" id="rateBarMap4"></div>
        </div>
        <div class="content">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">项目数(个)</span>
          <div class="charts chartsPie" id="pieCharts1"></div>
        </div>
      </div>
    </div>
    <!--2交通投资-->
    <div class="clear-both"></div>
    <div id="secondTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[1].name}}</span>
      </div>
      <div class="content-landing">
        <div class="tab-box-one-line-right">
          <div
            v-for="(item, index) in tabData.data[1].data.investment.detail"
            class="three-tab">
            <div :class="{tabWithArray: index===0, tabWithLine: index===1, tab: index===2}">
              <span class="name">{{item.label}}</span><br/>
              <span class="number">{{item.value}}<span class="unit">{{item.unit}}</span></span>
              <!--<span class="unit">{{item.unit}}</span>-->
            </div>
            <div :class="{includeArray: index===1, splitLine: index===0, tab: index===2}"></div>
          </div>
        </div>
        <div class="clear-both"></div>
        <div
          v-for="(item, index) in tabData.data[1].data.investment.detail"
          v-if="primaryActive === index"
          class="content">
          <span class="blue-bar">包头市</span>
          <span class="subtitle" v-if="primaryActive === 0">{{item.label}}(亿)</span>
          <div class="charts chartsTop" id="rateBarMap5"></div>
        </div>
        <div class="content">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">{{tabData.data[1].data.investment.detail[1].label}}(亿)</span>
          <div class="charts" id="pieCharts2"></div>
        </div>
        <div class="content">
          <!--<div class="lineTitle">投资目标完成率</div>-->
          <span class="blue-bar">包头市</span>
          <span class="subtitle">{{tabData.data[1].data.investment.detail[2].label}}(%)</span>
          <div class="clear-both"></div>
          <div class="chartsMulBar" id="rateBarMap6"></div>
        </div>
      </div>
    </div>
    <div class="clear-both"></div>
    <div class="bottomDistance"></div>
  </div>
</template>

<script>
  import {pieChartTitle,barChart,mulBars} from "../../charts/h5-chart";

  export default {
    name: "project-invest",
    props: ['tabData'],
    data() {
      return {
        primaryActive: 0,
        activeTab1: 0,
        activeTab2: 0,
        activeTab3: 0,
        activeTab4: 0,
        onLineServiceName: '',
        onLineService: {}, // 在线服务成效度
        serviceName: '',
        service: {}, // 服务事项覆盖度
        onLineHandleName: '',
        onLineHandle: {}, //   在线办理成熟度
        serviceTypeName: '',
        serviceType: {}, // 服务方式完备度
        heatMapColors: ['0%-25%','25%-50%','50%-75%','75%-100%']
      }
    },
    mounted() {
      this.initWin();
    },
    watch: {
      'tabData.data': function (newValue, oldValue) {
        this.initWin();
      }
    },
    methods: {
      switchKindergartenTab(index) {
        this.primaryActive = index;
        if (this.primaryActive === 0) {
          this.$nextTick(() => {
            // barChart('rateBarMap4', this.tabData.data[0].data.data.chart[0]);
            // pieChart('pieCharts1',this.tabData.data[0].data.data.chart[1].seriesData);
          })
        } else if (this.primaryActive === 1) {
          this.$nextTick(() => {
            // barChart('rateBarMap4', this.tabData.data[0].data.data.chart[0]);
            // pieChart('pieCharts1',this.tabData.data[0].data.data.chart[1].seriesData);
          })
        } else if (this.primaryActive === 2) {
          this.$nextTick(() => {
            // barChart('rateBarMap4', this.tabData.data[0].data.data.chart[0]);
            // pieChart('pieCharts1',this.tabData.data[0].data.data.chart[1].seriesData);
          })
        }
      },
      initWin() {
        this.$nextTick(() => {
          // this.tabData.data[0].data.project.chart[1].series[0].adjust.data=100
          // console.log('33',this.tabData.data[0].data.project.chart[1].series[0])
          barChart('rateBarMap4', this.tabData.data[0].data.project.chart[0]);
          pieChartTitle('pieCharts1',this.tabData.data[0].data.project.chart[1].series[0].data);
          barChart('rateBarMap5', this.tabData.data[1].data.investment.chart[0]);
          pieChartTitle('pieCharts2',this.tabData.data[1].data.investment.chart[1].series[0].data);
          mulBars('rateBarMap6', this.tabData.data[1].data.investment.chart[2])
        });
      },
    }
  }
</script>
