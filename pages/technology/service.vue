<style lang="less" scoped>
  @import url("../traffic/traffic-class.less");
  .distanceMap {
    margin-bottom: -50rpx;
    margin-top: -25rpx;
    /*border: 1px solid red;*/
  }
  .lineTop {
    top: -50rpx !important;
  }
  .chartsTop {
    margin-top: 20rpx;
    margin-bottom: -35rpx;
  }
  //  地图
  .hotmap {
    width: 100%;
    height: 700rpx;
    float: left;
  }
  .distanceLabel {
    padding-left: 80rpx;
  }
  .charts {
    width: 100%;
    height: 400rpx;
    float: left;
  }
  .content {
    margin-top: 50rpx;
    width: 100%;
    height: 350rpx;
  }
</style>
<template>
  <div class="main">
    <!--1.科技孵化器-->
    <div id="firstTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{ tabData.data[0].name}}</span>
      </div>
      <div class="content-landing">
        <div class="tab-box-one-line-one">
          <div
            v-for="(item, index) in tabData.data[0].data.tech.detail"
          >
            <div class="labelTechnology">{{item.label}}</div>
            <div class="con">
              <span class="num distanceLabel">{{item.value}}</span>
              <span class="unit">{{item.unit}}</span>
            </div>
          </div>
        </div>
        <div class="clear-both"></div>
        <div v-for="(item, index) in tabData.data[0].data.tech.detail"
             v-if="primaryActive === index"
             class="content">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">企业孵化器个数</span>
          <div class="clear-both"></div>
          <div class="hotmap distanceMap" id="kindergarten"></div>
        </div>
        <div class="clear-both"></div>
        <div v-for="(item, index) in tabData.data[0].data.tech.detail"
             v-if="primaryActive === index"
             class="content">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">企业孵化器构成</span>
          <div class="charts chartsTop" id="pieCharts1"></div>
        </div>
        <div class="clear-both"></div>
      </div>
    </div>
    <!--2孵化企业-->
    <div id="secondTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[1].name}}</span>
      </div>
      <div class="content-landing">
        <div class="tab-box-one-line-three ">
          <div
            v-for="(item, index) in tabData.data[1].data.company.detail"
            class="first-title-box distanceLeftTwo1"
            :class="{first: index===0,second: index===1,third: index===2}"
          >
            <div class="label">{{item.label}}</div>
            <div class="con">
              <div class="num">{{item.value}}<span class="unit">{{item.unit}}</span></div>
            </div>
          </div>
        </div>
        <div class="clear-both"></div>
        <div class="content">
          <div class="charts lineTop" id="employed"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {drawJmHotMap,pieChart,ecologicalLineChart} from "../../charts/h5-chart";

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
        onLineHandle: {}, // 在线办理成熟度
        serviceTypeName: '',
        serviceType: {}, // 服务方式完备度
        heatMapColors: ['0%-25%','25%-50%','50%-75%','75%-100%']
      }
    },
    mounted() {
      // this.initWin();
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
          this.tabData.data[1].data.company.chart.legendShow = true;
          this.tabData.data[1].data.company.chart.legendRight= "auto";
          drawJmHotMap('kindergarten', this.tabData.data[0].data.tech.chart[0][0]);
          pieChart('pieCharts1',this.tabData.data[0].data.tech.chart[1].series[0].data);
          ecologicalLineChart('employed', this.tabData.data[1].data.company.chart);
        });
      },
    }
  }
</script>
