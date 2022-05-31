<style lang="less" scoped>
  @import url("../traffic/traffic-class.less");
  .echartsBar {
    height: 550rpx;
    margin-top: -40rpx;
    margin-bottom: -50rpx;
  }
  .charts {
    width: 100%;
    height: 450rpx;
    float: left;
  }
  .content {
    margin-top: 50rpx;
    width: 100%;
    /*height: 550rpx;*/
  }
</style>
<template>
  <div class="main">
    <!--1.科技产业增加值-->
    <div id="firstTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[0].name}}</span>
      </div>
      <div class="content-landing">
        <div class="tab-box-one-line-three ">
          <div
            v-for="(item, index) in tabData.data[0].data.add.detail"
            class="first-title-box distanceLeftTwo1"
            :class="{first: index===0,second: index===1,third: index===2}"
          >
            <div class="label1">{{item.label}}</div>
            <div class="con1">
              <div class="num">{{item.value}}<span class="unit">{{item.unit}}</span></div>
              <div class="compare">{{item.increment}}{{item.incrementUnit}}</div>
            </div>
          </div>
        </div>
        <!--<div class="clear-both"></div>-->
        <div class="content">
          <div class="echartsBar" id="employed"></div>
        </div>

      </div>
    </div>
    <!--2科技产品-->
    <div id="secondTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[1].name}}</span>
      </div>
      <div class="content-landing">
        <div class="color-tab-two-box-up">
          <div class="color-tab-two-content distanceLeftTwo1"
               v-for="(item,index) in tabData.data[1].data.product.detail.slice(0,2)"
               :class="{tabGreenDouble: index===0, tabBlueDouble: index===1, tabYellowDouble: index===2}">
            <div
              :class="{colorTabDoubleUpAdjust: item.label.length > 8}"
              class="color-tab-double-up">
              <span class="name">{{item.label}}</span><br/>
              <span class="number">{{item.value}}</span>
              <span class="unit">{{item.unit}}</span>
              <div :class="{compare: index===1}">{{item.increment}}{{item.incrementUnit}}</div>
            </div>
            <!--<span :class="{splitLineGreen: index===0, splitLineBlue: index===1, splitLineYellow: index===2}"></span>-->
            <span class="splitTop" :class="{splitLineGreen1: index===0,splitLineBlue1: index===1}"></span>
            <div
            :class="{colorTabDoubleDownAdjust: tabData.data[1].data.product.detail[index+2].label.length > 8}"
            class="color-tab-double-down">
            <span class="name-color">{{tabData.data[1].data.product.detail[index+2].label}}</span><br/>
            <span class="number-color-down">{{tabData.data[1].data.product.detail[index+2].value}}</span>
            <span class="unit-color">{{tabData.data[1].data.product.detail[index+2].unit}}</span><br/>
            </div>
          </div>
        </div>
        <div class="clear-both"></div>
      </div>
    </div>
    <!--3专利-->
    <div id="thirdTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[2].name}}</span>
      </div>
      <div class="content-landing">
        <div class="tab-box-one-line-three ">
          <div
            v-for="(item, index) in tabData.data[2].data.patent.detail.slice(0,2)"
            class="first-title-box distanceLeftTwo1"
            :class="{first: index===0,second: index===1,third: index===2}"
          >
            <div class="label">{{item.label}}</div>
            <div class="con">
              <div class="num">{{item.value}}<span class="unit">{{item.unit}}</span></div>
              <div class="compare">{{item.increment}}{{item.incrementUnit}}</div>
            </div>
          </div>
        </div>
        <div class="clear-both"></div>
        <div class="content">
          <div class="charts" id="employed1"></div>
        </div>
        <div class="clear-both"></div>
        <div class="tab-box-one-line-four distanceTop">
          <div
            v-for="(item, index) in tabData.data[2].data.patent.detail.slice(2,4)"
            class="first-title-box distanceLeftTwo1"
            :class="{first: index===0,second: index===1,third: index===2,four: index===3}"
          >
            <div class="label">{{item.label}}</div>
            <div class="con">
              <div class="num">{{item.value}}<span class="unit">{{item.unit}}</span></div>
              <div class="compare">{{item.increment}}{{item.incrementUnit}}</div>
            </div>
          </div>
        </div>
        <div class="clear-both"></div>
        <div class="tab-box-one-line-four ">
          <div
            v-for="(item, index) in tabData.data[2].data.patent.detail.slice(4,6)"
            class="first-title-box distanceLeftTwo1"
            :class="{third: index===0,four: index===1}"
          >
            <div class="label">{{item.label}}</div>
            <div class="con">
              <div class="num">{{item.value}}<span class="unit">{{item.unit}}</span></div>
              <div :class="{compare1:item.increment.toString().substr(0,1)=='-', compare:item.increment.toString().substr(0,1)!='-'}">{{item.increment.toString().replace("-","")}}{{item.incrementUnit}}</div>
            </div>
          </div>
        </div>

        <div class="clear-both"></div>
        <div class="content">
          <div class="charts" id="employed2"></div>
        </div>
      </div>
    </div>
    <div class="clear-both"></div>
    <div class="bottomDistance"></div>
  </div>
</template>

<script>
  // ui还原前的柱状折线图LineAndBarChart,
  import { BarChartDouble,lineBarChart} from "../../charts/h5-chart";
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
      // this.initWin();
    },
    methods: {
      initWin() {
        this.$nextTick(() => {
          // echarts图1
          // this.tabData.data[0].data.add.chart.legendRight='auto';

          // echarts图2
          this.tabData.data[2].data.patent.chart[0].legendRight='auto';
          this.tabData.data[2].data.patent.chart[0].gridLeft='14%';
          // echarts图3
          this.tabData.data[2].data.patent.chart[1].legendRight='auto';
          this.tabData.data[2].data.patent.chart[1].gridLeft='12%';
          lineBarChart('employed', this.tabData.data[0].data.add.chart);
          BarChartDouble('employed1', this.tabData.data[2].data.patent.chart[0]);
          BarChartDouble('employed2', this.tabData.data[2].data.patent.chart[1]);
        });
      },
    }
  }
</script>
