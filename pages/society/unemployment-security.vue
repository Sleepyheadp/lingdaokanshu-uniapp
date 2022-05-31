<style lang="less" scoped>
  .main {
    width: 750rpx;
    height: 100%;
    float: left;
    padding-bottom: 85rpx;
    background-color: #fff;
  }
  // 小节标题
  .title {
    width: 100%;
    height: 115rpx;
    .title-icon-bar-left {
      margin: 49rpx 0 0 25rpx;
      float: left;
      width: 6rpx;
      height: 34rpx;
      background: #277ecf;
      border-radius: 3rpx;
    }
    .title-icon-bar-right {
      margin: 56rpx 0 0 4rpx;
      float: left;
      width: 6rpx;
      height: 21rpx;
      background: #7db2e2;
      border-radius: 3rpx;
    }
    .title-text {
      float: left;
      margin: 39rpx 0 0 13rpx;
      font-family: 'PingFang-SC-Bold';
      font-size: 36rpx;
    }
  }
  .section-unemployment {
    width: 750rpx;
  }
  .content-item {
    width: 750rpx;
    text-align: center;
    height: 900rpx;
    .chart-item {
      width: 100%;
      height: 500rpx;
      float: left;
    }
  }
  .blur-bar {
    width: 95rpx;
    heigth: 36rpx;
    background-color: #1a79c8;
    border-radius: 18rpx;
    float: left;
    font-size: 22rpx;
    margin: 14rpx 0 0 23rpx;
    color: white;
    text-align: center;
    font-family: 'PingFang-SC-Medium';
  }
  .subtitle {
    float: left;
    color: #909090;
    font-size: 26rpx;
    margin: 10rpx 0 0 5rpx;
    text-align: center;
    font-family: 'PingFang-SC-Medium';
  }
  .tab-box-one-row {
    width: 692rpx;
    height: 115rpx;
    box-shadow: 0 0 12rpx rgba(129, 129, 129, 0.25);
    border-radius: 8rpx;
    margin: 0 auto 50rpx auto;
    line-height: 115rpx;
    text-align: left;
    .name {
      font-family: 'PingFang-SC-Medium';
      font-size: 24rpx;
      color: #1c1c1c;
      width: 500rpx;
      text-align: left;
      float: left;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      &:before {
        content: '';
        background: url("../../static/assets/images/h5/society-unemployment-icon.png") no-repeat;
        background-size: 64rpx;
        width: 64rpx;
        height: 64rpx;
        margin: 25rpx 22rpx;
        display: block;
        float: left;
      }
    }
    .number {
      width: 190rpx;
      height: 115rpx;
      font-size: 50rpx;
      float: left;
      font-family: 'DIN-Medium';
      margin: 0;
    }
    .unit {
      font-size: 24rpx;
      font-family: 'PingFang-SC-Regular';
      margin-left: -10rpx;
    }
  }
</style>
<template>
  <div class="main">
    <div class="section-unemployment">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">失业保障</span>
      </div>
      <div class="content-item">
        <div v-if="unemploymentSecurity.detail" class="tab-box-one-row">
          <span class="name">{{unemploymentSecurity.detail[0].label}}</span>
          <p class="number">{{unemploymentSecurity.detail[0].value}}
            <span class="unit">{{unemploymentSecurity.detail[0].unit}}</span>
          </p>
        </div>
        <div class="content">
          <span class="blur-bar">包头市</span>
          <span class="subtitle">{{titleArray[0]}}</span>
          <div class="chart-item" id="insuranceNumberLine"></div>
        </div>
        <div class="content">
          <span class="blur-bar">包头市</span>
          <span class="subtitle">{{titleArray[1]}}</span>
          <div class="chart-item" id="insuranceTwoLine"></div>
        </div>
        <div class="content">
          <span class="blur-bar">包头市</span>
          <span class="subtitle">{{titleArray[2]}}</span>
          <div class="chart-item" id="insurancePeopleLine"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {ecologicalLineChart} from "../../charts/h5-chart";
  import {contactTitle} from "../../libs/util";

  export default {
    name: "unemployment-security",
    props: ['tabData'],
    data() {
      return {
        unemploymentSecurity: {},
        titleArray: ['', '', '']
      }
    },
    watch: {
      'tabData.data': function (newValue, oldValue) {
        this.initWin();
      }
    },
    methods: {
      initWin() {
        this.unemploymentSecurity = this.tabData.data[0].data.summary || [];
        this.unemploymentSecurity.chart[1].legendShow = true;
        this.unemploymentSecurity.chart.forEach((item, index) => {
          let title = contactTitle(item.legends);
          this.titleArray[index] = title;
        });
        this.$nextTick(() => {
          this.unemploymentSecurity.chart[0].gridTop = 70;
          this.unemploymentSecurity.chart[1].gridTop = 70;
          this.unemploymentSecurity.chart[1].legendTop = '7%';
          this.unemploymentSecurity.chart[2].gridTop = 70;
          ecologicalLineChart('insuranceNumberLine', this.unemploymentSecurity.chart[0]);
          ecologicalLineChart('insuranceTwoLine', this.unemploymentSecurity.chart[1]);
          this.unemploymentSecurity.chart[2].colorList = ['rgb(249, 155, 55)'];
          this.unemploymentSecurity.chart[2].colorStop = ['rgba(249, 155, 55, 0.2)', 'rgba(249, 155, 55, 0)'];
          ecologicalLineChart('insurancePeopleLine', this.unemploymentSecurity.chart[2]);

        })
      }
    }
  }
</script>
