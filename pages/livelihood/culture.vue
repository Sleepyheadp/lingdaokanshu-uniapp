<style lang="less" scoped>
  @import url("../common-class.less");
  .section-culture {
    width: 750rpx;
    float: left;
  }
  .chart {
    width: 100%;
    height: 450rpx;
    float: left;
  }
  .slide-box-without-scrollbar {
    float: left;
    width: 750rpx;
    height: max-content;
    overflow-y: hidden;
    overflow-x: auto;
    /*滚动条样式*/
    &::-webkit-scrollbar {
      height: 0rpx;
      width: 63rpx;
      border-radius: 3rpx;
      /*height: 4rpx;*/
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 3rpx;
      background: #d6d6d6;
    }
    &::-webkit-scrollbar-track {
      height: 6rpx;
      width: 63rpx;
      border-radius: 3rpx;
      background: #eeeeee;

    }
    .slide {
      float: left;
      overflow-y: visible;
      width: max-content;
    }
  }
  .color-tab-box {
    width: max-content;
    float: left;
    margin-right: 24rpx;
    .select-box {
      float: left;
      width: 210rpx;
      height: 30rpx;
      margin-left: 24rpx !important;
    }
    .select {
      float: left;
      margin-top: 7rpx;
      width: 210rpx;
      height: 23rpx;
      background: url("../../static/assets/images/h5/tab-selected.png") no-repeat;
      background-size: 210rpx 23rpx;
    }
  }
  // 一行分类tab
  .tabGreen {
    float: left;
    height: 144rpx;
    width: 210rpx;
    margin-left: 24rpx;
    text-align: center;
    background-color: #edf9f5;
    border-top: solid #09ab80 4rpx;
  }
  .tabBlue {
    float: left;
    height: 144rpx;
    width: 210rpx;
    margin-left: 24rpx;
    text-align: center;
    background-color: #f1f6fb;
    border-top: solid #1a79c8 4rpx;
  }
  .tabYellow {
    float: left;
    height: 144rpx;
    width: 210rpx;
    margin-left: 24rpx;
    text-align: center;
    background-color: #fcf7f2;
    border-top: solid #f0993c 4rpx;
  }
</style>


<template>
  <div v-if="tabData.data" class="main">
    <div class="section-culture">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">文化</span>
      </div>
      <div class="section-content">
        <div class="slide-box-without-scrollbar">
          <div class="slide">
            <div
              v-for="(item,index) in cultureObj.detail"
              @click="switchCultureTab(index)"
              :class="{tabGreen: index%3===0, tabBlue: index%3===1, tabYellow: index%3===2}">
              <div
                :class="{colorTabDoubleUpAdjust: item.label.length > 8}"
                class="color-tab-double-up">
                <span class="name-color">{{item.label}}</span><br/>
                <span class="number-color">{{item.value}}</span>
                <span class="unit-color">{{item.unit}}</span>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="color-tab-box" >
              <div v-for="(item,index) in cultureObj.detail" class="select-box">
                <div v-if="cultureActive===index" class="select"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-for="(item,index) in cultureObj.detail"
          v-if="cultureActive === index"
          class="content">
          <span class="blue-bar margin-top25">包头市</span>
          <span class="subtitle margin-top22">{{item.label}}</span>
          <div class="chart" id="culture"></div>
        </div>
      </div>
      <div class="bottom-text margin-top22">该板块数据为2019年数据</div>
    </div>
  </div>
</template>

<script>
  import {pieChart} from "../../charts/h5-chart"
  export default {
    name: "culture",
    props: ['tabData'],
    data() {
      return {
        // tabData: {},
        cultureObj: {},
        cultureActive: '',
      }
    },
    watch: {
      'tabData.data': function (newValue, oldValue) {
        this.initWin();
      }
    },
    mounted() {
      // this.tabData = this.setData();
      this.initWin();
    },
    methods: {
      initWin() {
        this.cultureActive = 0;
        this.cultureObj = this.tabData.data[0].data.culture;
        this.$nextTick(() => {
          this.switchCultureTab(0);
        })
      },
      switchCultureTab(index) {
        this.cultureActive = index;
        if (index===3) {
          let adjust = {
            legendX: '56%',
            // legendNameWidth: 90,
            legendValueWidth: 100
          };
          this.$nextTick(() => {
            pieChart('culture', this.cultureObj.chart[index].series[0].data,adjust)
          });
        } else if (index===4) {
          let adjust = {
            legendX: '56%',
            // legendNameWidth: 90,
            legendValueWidth: 90
          };
          this.$nextTick(() => {
            pieChart('culture', this.cultureObj.chart[index].series[0].data,adjust)
          });
        } else {
          let adjust = {
            legendX: '63%',
            legendNameWidth: 70,
            legendValueWidth: 30
          };
          this.$nextTick(() => {
            pieChart('culture', this.cultureObj.chart[index].series[0].data,adjust)
          });
        }
      },
    }
  }
</script>

