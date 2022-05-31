<style scoped lang="less">
  /*@import url(../../static/assets/font/PINGFANG_MEDIUM.TTF);*/
  /*@import url(../../static/assets/font/DIN-Medium.otf);*/
  .main {
    width: 750rpx;
    height: fit-content;
    background-color: #fff;
  }

  .section-highschool {
    width: 750rpx;
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
        margin: 39rpx 0rpx 0 13rpx;
        font-family: 'PingFang-SC-Medium';
        font-size: 34rpx;
      }
    }

  }
  .content-highschool {
    width: 750rpx;
    text-align: center;
    height: 120rpx;
    .content {
      height: 925rpx;
    }
    .hotmap {
      width: 100%;
      height: 700rpx;
      float: left;
    }
  }
  .content-teacher {
    width: 750rpx;
    text-align: center;
    height: 630rpx;
    .content {
      height: 666rpx;
    }
    .charts {
      width: 100%;
      height: 500rpx;
      float: left;
    }
  }
  .content-kid {
    width: 750rpx;
    text-align: center;
    height: 630rpx;
    .content {
      height: 666rpx;
    }
    .charts {
      width: 100%;
      height: 500rpx;
      float: left;
    }
  }
  .content-rate {
    width: 750rpx;
    text-align: center;
    height: 630rpx;
    .content {
      height: 666rpx;
      .charts{
        height: 100%;
      }
    }
    .charts {
      width: 100%;
      height: 500rpx;
      float: left;
    }
  }
  .name {
    font-size: 24rpx;
    font-family: "PingFang-SC-Medium";
    text-align: center;
  }
  .number {
    font-size: 44rpx;
    font-family: 'DIN-Medium';
    text-align: center;
    line-height: 44rpx;
  }
  .unit {
    font-size: 24rpx;
    font-family: "PingFang-SC-Medium";
    text-align: center;
    line-height: 44rpx;
  }
  .tab-box-one-line {
    width: 693rpx;
    height: 150rpx;
    margin-left: 29rpx;
    box-shadow: 0rpx 0rpx 12rpx rgba(129, 129, 129, 0.25);
    /*display: flex;*/
    float: left;
  }
  .two-tab {
    width: 346rpx;
    /*flex: 1;*/
    height:150rpx;
    float:left;
    padding-top: 40rpx;
  }
  .SplitLine {
    float: right;
    width: 1rpx;
    height: 80rpx;
    margin-top: 0rpx;
    background-color: #e1e1e1;
  }
  .no-split-line {
    float: right;
    width: 1rpx;
    height: 80rpx;
    margin-top: 0rpx;
  }
  .include-array {
    float: right;
    height:121rpx;
    width: 12rpx;
    margin-top: -173rpx;
    background: url("../../static/assets/images/h5/include-array.png") no-repeat;
    background-size: 100% 100%;
  }
  .three-tab {
    width: 231rpx;
    /*flex: 1;*/
    height:150rpx;
    padding-top: 40rpx;
    float:left;
    &:last-child {
      .SplitLine {
        background-color: #fff;
      }
    }
    .tab-with-line {
      width: 230rpx;
      /*flex: 1;*/
      height:150rpx;
      float:left;
    }
    .tab-with-array {
      width: 219rpx;
      height: 150rpx;
    }
  }
  .tabActive {
    border-top:solid #1a79c8 4rpx;
    height: 150rpx;
    width: 231rpx;
    padding-top: 36rpx;
    background-image: linear-gradient(rgba(231, 242, 255, 1), rgba(231, 242, 255, 0));
    color: #1a79c8;
  }
  .blur-bar {
    width: 95rpx;
    heigth: 36rpx;
    background-color: #1a79c8;
    border-radius: 18rpx;
    float: left;
    font-size: 22rpx;
    margin: 64rpx 0 0 23rpx;
    color: white;
    text-align: center;
    font-family: 'PingFang-SC-Medium';
  }
  .subtitle {
    float: left;
    color: #909090;
    font-size: 26rpx;
    margin: 60rpx 0 0 5rpx;
    text-align: center;
    font-family: 'PingFang-SC-Medium';
  }
  .text-box-green {
    background: url("../../static/assets/images/h5/textbox-green.png") no-repeat;
    background-size: 100% 100%;
    width: 422rpx;
    height: 123rpx;
    margin-left: 10rpx;
    float: left;
    .chart {
      width: 422rpx;
      height: 123rpx;
    }
  }
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
      margin: 39rpx 0rpx 0 13rpx;
      font-family: 'PingFang-SC-Bold';
      font-size: 36rpx;
    }
  }
  .fff{
    height: 710rpx;
  }

</style>

<template>
  <div class="main">

      <!--养老机构-->
      <div class="content-highschool">
        <div class="title">
          <span class="title-icon-bar-left"></span>
          <span class="title-icon-bar-right"></span>
          <span class="title-text">2020年目标完成率</span>
        </div>

      </div>

    <div class="fff" id="Revitaliza"></div>

  </div>
</template>

<script>
  import {horizontalBarsruarl2} from '../../charts/rural-charts';
  import {remToPx} from "../../libs/util";

  export default {
    props: {
      Poverty: {
        // type: Array,
        // default: {}
      }
    },
    data() {
      return {
      }
    },
    mounted() {

      this.initWin();
    },
    methods: {
      initWin() {
        let nameArray = [];
        this.Poverty.goalsAchieved2.data.xaxis.forEach(item => {
          item = item.split('目标完成率')[0];
          nameArray.push(item);
        });
        this.Poverty.goalsAchieved2.data.gridLeft = remToPx(this.changeWithWidth(-610,-638,-620)/75);
        this.Poverty.goalsAchieved2.data.xaxis = nameArray;
        setTimeout(() => {
          //人均收入
          horizontalBarsruarl2('Revitaliza',this.Poverty.goalsAchieved2.data);
        }, 500);
      },
      changeWithWidth(a,b,c) {
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
      },
    },
  }

</script>

