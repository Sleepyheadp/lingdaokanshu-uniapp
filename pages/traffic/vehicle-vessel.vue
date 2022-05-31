<style lang="less" scoped>
  @import url("./traffic-class.less");
  .chartsTop {
    margin-top: -10rpx;
    margin-bottom: -10rpx;
  }
  .chartsPie {
    width: 100%;
    height: 450rpx;
    float: left;
    margin-bottom: -50rpx;
  }
  .nameTop {
    padding-top: 30rpx;
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
    <!--1公共交通 -->
    <div id="firstTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[0].name}}</span>
      </div>
      <div class="content-landing">
        <div class="tab-box-one-line-three ">
          <div
            v-for="(item, index) in tabData.data[0].data.public.detail"
            class="first-title-box distanceLeftTwo1"
            :class="{first: index===0,second: index===1,third: index===2}"
          >
            <div class="label">{{item.label}}</div>
            <div class="con">
              <div class="numNon">{{item.value}}<span class="unit">{{item.unit}}</span></div>
              <div class="compareNon">{{item.increment}}{{item.incrementUnit}}</div>
            </div>
          </div>
        </div>
        <div class="clear-both"></div>
        <div
          v-for="(item, index) in tabData.data[0].data.public.detail"
          v-if="primaryActive === index"
          class="content">
          <span class="blue-bar">包头市</span>
          <span class="subtitle" v-if="primaryActive === 0">{{item.label}}构成</span>
          <div class="charts chartsTop" id="pieCharts1"></div>
        </div>
        <div class="content">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">公共交通{{tabData.data[0].data.public.detail[1].label}}构成</span>
          <div class="chartsPie" id="pieCharts2"></div>
        </div>
      </div>
    </div>
    <!--2个人交通-->
    <div class="clear-both"></div>
    <div id="secondTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[1].name}}</span>
      </div>
      <div class="content-landing">
        <div class="color-tab-two-box">
          <div class="color-tab-two-content"
            v-for="(item,index) in tabData.data[1].data.personal.detail.slice(0,3)"
            :class="{tabGreenDouble: index===0, tabBlueDouble: index===1, tabYellowDouble: index===2}">
            <div
              :class="{colorTabDoubleUpAdjust: item.label.length > 8, nameTop: index===1||index==2}"
              class="color-tab-double-up">
              <span class="name">{{item.label}}</span><br/>
              <span class="number">{{item.value}}</span>
              <span class="unit">{{item.unit}}</span>
              <div class="compare">{{item.increment}}{{item.incrementUnit}}</div>
            </div>
            <!--<span :class="{splitLineGreen: index===0, splitLineBlue: index===1, splitLineYellow: index===2}"></span>-->
            <span class="splitTop" :class="{splitLineGreen: index===0}"></span>
            <div
              :class="{colorTabDoubleDownAdjust: tabData.data[1].data.personal.detail[3].label.length > 8}"
              class="color-tab-double-down" v-if="index===0">
              <span class="name">{{tabData.data[1].data.personal.detail[3].label}}</span><br/>
              <span class="number-color-down">{{tabData.data[1].data.personal.detail[3].value}}</span>
              <span class="unit">{{tabData.data[1].data.personal.detail[3].unit}}</span>
            </div>
          </div>
        </div>
        <div class="clear-both"></div>
        <div class="content">
          <div class="charts" id="goodsNum"></div>
        </div>
        <div class="clear-both"></div>
        <div class="content">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">机动车增速趋势</span>
          <div class="charts" id="lineChart3"></div>
        </div>
      </div>
    </div>
    <div class="clear-both"></div>
    <div class="bottomDistance"></div>
  </div>
</template>

<script>
  // import {ecologicalLineChart, situationLineAndBarChart } from "../../charts/h5-chart";
  import {ecologicalLineChart,pileBarAndLineChart,pieChart} from "../../charts/h5-chart";
  export default {
    name: "vehicle-vessel",
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
        onLineHandle: {}, // 在线办理成熟度
        serviceTypeName: '',
        serviceType: {}, // 服务方式完备度
        heatMapColors: ['0%-25%','25%-50%','50%-75%','75%-100%']
      }
    },
    watch: {
      'tabData.data': function (newValue, oldValue) {
        this.initWin();
      }
    },
    mounted() {
      this.initWin();
    },
    methods: {
      initWin() {
        // echarts图3
        this.tabData.data[1].data.personal.chart[0].legendRight = 'auto';
        // echarts图4
        this.tabData.data[1].data.personal.chart[1].legendShow = 'true';
        this.tabData.data[1].data.personal.chart[1].legendRight = 'auto';
        this.$nextTick(() => {
          console.log('11',this.tabData.data[0].data.public.chart[0].series[0].data)
          pieChart('pieCharts1',this.tabData.data[0].data.public.chart[0].series[0].data);
          pieChart('pieCharts2',this.tabData.data[0].data.public.chart[1].series[0].data);
          pileBarAndLineChart('goodsNum', this.tabData.data[1].data.personal.chart[0]);
          ecologicalLineChart('lineChart3', this.tabData.data[1].data.personal.chart[1]);
        });
      },
    }
  }
</script>
