<style lang="less" scoped>
  @import url("../traffic/traffic-class.less");
  .echartsBar {
    height: 600rpx;
  }
  .echartsTop {
    margin-bottom: -60rpx;
  }
  .trackHeight {
    height: max-content;
    /*border: 1px solid red;*/
  }
  .charts {
    width: 100%;
    height: 450rpx;
    float: left;
  }
  .content {
    /*margin-top: 50rpx;*/
    width: 100%;
    /*height: 550rpx;*/
  }
  .textarea{
    margin-left: 0rpx !important;
    margin-right: 0rpx !important;
    width: 100%;
    height: 300rpx;
    background-image: url("../../static/assets/images/h5/related-bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
</style>
<template>
  <div class="main">
    <!--1.财务支出-->
    <div id="firstTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{ tabData.data[0].name}}</span>
      </div>
      <div class="content-landing">
        <div class="tab-box-one-line-one">
          <div
            v-for="(item, index) in tabData.data[0].data.pay.detail"
          >
            <div class="labelMoney">{{item.label}}</div>
            <div class="con">
              <span class="num">{{item.value}}</span>
              <span class="unit">{{item.unit}}</span>
              <span class="compare">{{item.increment}}{{item.incrementUnit}}</span>
            </div>
          </div>
        </div>
        <div class="clear-both"></div>
        <div v-for="(item, index) in tabData.data[0].data.pay.detail"
             v-if="primaryActive === index"
             class="content">
          <!--<span class="blue-bar">包头市</span>-->
          <!--<span class="subtitle">{{item.label}}（公里）</span>-->
          <div class="echartsBar echartsTop" id="employed"></div>
        </div>
        <div class="clear-both"></div>
      </div>
    </div>
    <!--2R&D经费-->
    <div id="secondTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[1].name}}</span>
      </div>
      <div class="content-landing">
        <div class="tab-box-one-line-three ">
          <div v-if="index!==1"
            v-for="(item, index) in tabData.data[1].data.funds.detail"
            class="first-title-box distanceLeftTwo1"
            :class="{first: index===0,second: index===2,third: index===3}"
          >
            <div class="labelCom">{{item.label.toString().replace("R&D","")}}</div>
            <div v-if="index==0" class="ranking">排名{{tabData.data[1].data.funds.detail[1].value}}</div>
            <div class="con">
              <div class="num">{{item.value}}<span class="unit">{{item.unit}}</span></div>
              <div class="compare">{{item.increment}}{{item.incrementUnit}}</div>
            </div>
          </div>
        </div>
        <div class="clear-both"></div>
      </div>
    </div>
    <!--3固定资产投资-->
    <div id="thirdTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{ tabData.data[2].name}}</span>
      </div>
      <div class="content-landing trackHeight" >
        <div class="tab-box-one-line-three ">
          <div
            v-for="(item, index) in tabData.data[2].data.investment.detail"
            class="first-title-box distanceLeftTwo1"
            :class="{first: index===0,second: index===1,third: index===2}"
          >
            <div class="label">{{item.label}}</div>
            <div class="con">
              <div class="num">{{item.value}}<span class="unit">{{item.unit}}</span></div>
              <div :class="{compare1:item.increment.toString().substr(0,1)=='-', compare:item.increment.toString().substr(0,1)!='-'}">{{item.increment.toString().replace("-","")}}{{item.incrementUnit}}</div>
            </div>
          </div>
        </div>


        <!--<div class="tab-box-one-line3 distanceLeftTwo">-->
          <!--<div-->
            <!--v-for="(item, index) in tabData.data[2].data.data.detail"-->
            <!--class="first-title-box tabHeight"-->
            <!--:class="{first: index===0,second: index===1,third: index===2}"-->
          <!--&gt;-->
            <!--<div class="label">{{item.label}}</div>-->
            <!--<div class="num">{{item.value}}<span class="content-fize">{{item.unit}}</span></div>-->
            <!--<div class="compare"><span>同比</span><span class="per">{{item.pro}}</span></div>-->
          <!--</div>-->
        <!--</div>-->
        <div class="clear-both"></div>
        <div class="content">
          <div class="echartsBar" id="employed1"></div>
        </div>
        <div class="clear-both"></div>
      </div>
    </div>
  </div>
</template>

<script>
  // import {ecologicalLineChart, situationLineAndBarChart } from "../../charts/h5-chart";
  import {lineBarChart} from "../../charts/h5-chart";

  export default {
    name: "facility",
    props: ['tabData'],
    data() {
      return {
        legendRight: '',
        primaryActive: 0,
        textcontent:'we9uf9ufhf',
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
    mounted(){
      // this.initWin();
    },
    methods: {
      switchKindergartenTab(index) {
        this.primaryActive = index;
        if (this.primaryActive === 0) {
          this.$nextTick(() => {
          })
        } else if (this.primaryActive === 1) {
          this.$nextTick(() => {
          })
        } else if (this.primaryActive === 2) {
          this.$nextTick(() => {
          })
        }
      },
      initWin() {
        this.$nextTick(() => {
          // this.tabData.data[0].data.pay.chart.legendRight = 'auto';
          // this.tabData.data[2].data.investment.chart.legendRight = 'auto';
          console.log('555',this.tabData.data[0].data.pay.chart.legendRight);
          lineBarChart('employed', this.tabData.data[0].data.pay.chart);
          lineBarChart('employed1', this.tabData.data[2].data.investment.chart);
        });
      },
      // initBarInTable(id, data, color) {
      //   let maxData = data[0][2];
      //   data.forEach((item, index) => {
      //     let tdId = id + '_' + index + '_2';
      //     const chartData = [item[2]];
      //     setTimeout(() => {
      //       percentBar(tdId, chartData, maxData, color);
      //     }, 500)
      //   })
      // },
      // switchTab(num, index) {
      //   switch (num) {
      //     // 在线服务成效度
      //     case 1:
      //       this.activeTab1 = index;
      //       this.$nextTick(() => {
      //         drawJmHotMap('heatMap-onLineService', this.tabData.data[0].data.onLineService.chart[0][index])
      //       })
      //       break
      //     // 服务事项覆盖度
      //     case 2:
      //       this.activeTab2 = index;
      //       this.$nextTick(() => {
      //         drawJmHotMap('heatMap-service', this.tabData.data[1].data.Service.chart[0][index])
      //       })
      //       break
      //     // 在线办理成熟度
      //     case 3:
      //       this.activeTab3 = index;
      //       this.$nextTick(() => {
      //         drawJmHotMap('heatMap-onLineHandle', this.tabData.data[2].data.onLineHandle.chart[0][index])
      //       })
      //       break
      //     // 在线服务成效度
      //     case 4:
      //       this.activeTab4 = index;
      //       this.$nextTick(() => {
      //         drawJmHotMap('heatMap-onLineService', this.tabData.data[3].data.start.chart[0][index])
      //       })
      //       break
      //   }
      // },
    }
  }
</script>
