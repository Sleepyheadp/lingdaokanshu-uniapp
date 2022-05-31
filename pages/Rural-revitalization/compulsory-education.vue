<style scoped lang="less">
  /*@import url(../../static/assets/font/PINGFANG_MEDIUM.TTF);*/
  /*@import url(../../static/assets/font/DIN-Medium.otf);*/
  .main {
    width: 750rpx;
    float: left;
    background-color: #fff;
  }

  .content-highschool {
    width: 750rpx;
    text-align: center;
    height: 1400rpx;
    .content {
      height: 925rpx;
    }
    .hotmap {
      width: 100%;
      height: 500rpx;
      float: left;
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
  height: 1200rpx;
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
        <div class="fff" id="Revitaliza"></div>
      </div>


  </div>
</template>

<script>
  import {
    barChartCountryIndustry, multiBarChartHorizontal6, horizontalBars, horizontalBarsruarl2
  } from '../../charts/rural-charts';
  import {remTorpx} from "../../libs/util";
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
        this.Poverty.data.xaxis.forEach(item => {
          item = item.split('目标完成率')[0];
          nameArray.push(item);
        });
        this.Poverty.data.xaxis = nameArray;
        this.Poverty.data.gridLeft = remTorpx(this.changeWithWidth(-340,-348,-340)/75);
        setTimeout(() => {
          // 2020年目标达成情况
          horizontalBarsruarl2('Revitaliza', this.Poverty.data);
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

