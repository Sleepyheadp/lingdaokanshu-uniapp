<style lang="less" scoped>
  .main {
    width: 750rpx;
    height: 100%;
    float: left;
    padding-bottom: 90rpx;
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
    margin: 24rpx 0 0 23rpx;
    color: white;
    text-align: center;
    font-family: 'PingFang-SC-Medium';
  }
  .subtitle {
    float: left;
    color: #909090;
    font-size: 26rpx;
    margin: 20rpx 0 0 5rpx;
    text-align: center;
    font-family: 'PingFang-SC-Medium';
  }
  .color-tab-box {
    width: 750rpx;
    float: left;
    margin-top: 20rpx;
    margin-bottom: 40rpx;
  }
  .tabGreenDouble {
    float: left;
    height: 290rpx;
    width: 210rpx;
    margin-left: 24rpx;
    text-align: center;
    background-color: #edf9f5;
    border-top: solid #09ab80 4rpx;
  }
  .tabBlueDouble {
    float: left;
    height: 290rpx;
    width: 210rpx;
    margin-left: 34rpx;
    text-align: center;
    background-color: #f1f6fb;
    border-top: solid #1a79c8 4rpx;
  }
  .tabYellowDouble {
    float: left;
    height: 290rpx;
    width: 210rpx;
    margin-left: 34rpx;
    text-align: center;
    background-color: #fcf7f2;
    border-top: solid #f0993c 4rpx;
  }

  .splitLineGreen {
    float:left;
    width: 150rpx;
    height: 1rpx;
    background-color: rgba(57,199,127,0.5);
    margin-left: 30rpx
  }
  .splitLineBlue {
    float:left;
    width: 150rpx;
    height: 1rpx;
    display: block;
    background-color: rgba(26,121,201,0.5);
    margin-left: 30rpx
  }
  .splitLineYellow {
    float:left;
    width: 150rpx;
    height: 1rpx;
    display: block;
    background-color: rgba(240,153,60,0.5);
    margin-left: 30rpx
  }
  .color-tab-double-up {
    width:100%;
    height:116rpx;
    float: left;
    display: block;
    margin-top: 30rpx;
  }
  .colorTabDoubleUpAdjust {
    width:100%;
    height:130rpx;
    float: left;
    display: block;
    margin-top: 16rpx;
  }
  .color-tab-double-down {
    width:100%;
    float: left;
    display: block;
    margin-top: 28rpx;
  }
  .colorTabDoubleDownAdjust {
    width:100%;
    float: left;
    display: block;
    margin-top: 18rpx;
  }
  .name-color {
    font-size: 24rpx;
    font-family: "PingFang-SC-Medium";
    color: #353535;
    text-align: center;
  }
  .number-color {
    font-size: 50rpx;
    font-family: 'DIN-Medium';
    text-align: center;
    color: #353535;
    line-height: 54rpx;
  }
  .number-color-down {
    font-size: 30rpx;
    font-family: 'DIN-Medium';
    text-align: center;
    color: #353535;
    line-height: 46rpx;
  }
  .unit-color {
    font-size: 24rpx;
    font-family: "PingFang-SC-Medium";
    text-align: center;
    color: #353535;
    line-height: 44rpx;
  }
</style>
<template>
  <div class="main">
    <div class="section-housing">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">住房保障</span>
      </div>
      <div class="content-item">
        <div v-if="housingSecurity.chart" class="content">
          <span class="blur-bar">包头市</span>
          <span class="subtitle">{{housingSecurity.chart[0].title}}</span>
          <div class="chart-item" id="lineBarChart1"></div>
          <div class="chart-item" id="lineBarChart2"></div>
        </div>
        <div class="color-tab-box">
          <div
            v-for="(item,index) in housingSecurity.detail"
            :class="{tabGreenDouble: index===0, tabBlueDouble: index===1, tabYellowDouble: index===2}">
            <div
              :class="{colorTabDoubleUpAdjust: item[0].label.length > 8}"
              class="color-tab-double-up">
              <span class="name-color">{{item[0].label}}</span><br/>
              <span class="number-color">{{item[0].value}}</span>
              <span class="unit-color">{{item[0].unit}}</span>
            </div>
            <span :class="{splitLineGreen: index===0, splitLineBlue: index===1, splitLineYellow: index===2}"></span>
            <div
              :class="{colorTabDoubleDownAdjust: item[1].label.length > 8}"
              class="color-tab-double-down">
              <span class="name-color">{{item[1].label}}</span><br/>
              <span class="number-color-down">{{item[1].value}}</span>
              <span class="unit-color">{{item[1].unit}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {BarChartDouble, lineAndBarChart} from "../../charts/h5-chart";

  export default {
    name: "housing-security",
    props: ['tabData'],
    data() {
      return {
        housingSecurity: {}
      }
    },
    watch: {
      'tabData.data': function (newValue, oldValue) {
        this.initWin();
      }
    },
    methods: {
      initWin() {
        this.housingSecurity = this.tabData.data[0].data.summary || [];
        console.log(this.housingSecurity.detail[2][1].label);
        this.housingSecurity.detail[0][1].label = '惠及户数';
        this.housingSecurity.detail[1][1].label = '补贴惠及人数';
        this.housingSecurity.detail[2][1].label = '基本建成套数';
        this.$nextTick(() => {
          lineAndBarChart('lineBarChart1', this.housingSecurity.chart[0]);
          // lineAndBarChart('lineBarChart2', this.housingSecurity.chart[1]);
          this.housingSecurity.chart[1].barWidth = 25;
          BarChartDouble('lineBarChart2', this.housingSecurity.chart[1]);
        })
      }
    }
  }
</script>
