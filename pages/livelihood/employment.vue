<style lang="less" scoped>
  @import url("../common-class.less");
  .section-employment {
    width: 750rpx;
    float: left;
    padding-bottom: 140rpx;
  }
  // line map
  .chart-line {
    width: 750rpx;
    height: 450rpx;
    float: left;
  }

</style>

<template>
  <div v-if="tabData.data" class="main">
    <div class="section-employment">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">劳动就业</span>
      </div>
      <div class="section-content">
        <div class="tab-box-one-line">
          <div
            v-for="(item,index) in employmentObj.detail"
            class="three-tab paddingTop20">
            <div class="tab-with-line">
              <span class="name">{{item.label}}</span><br/>
              <span class="number">{{item.value}}</span>
              <span class="unit">{{item.unit}}</span>
            </div>
            <div
              :class="{splitLine: (index===0) || (index===1)}"
              class="no-split-line"></div>
          </div>
        </div>
        <div
          v-for="(item, index) in employmentObj.chart"
          class="content">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">{{item.legends[0]}}</span>
          <div class="chart-line" :id="'chart-line'+ index"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {ecologicalLineChart} from '../../charts/h5-chart';
  export default {
    name: "employment",
    props: ['tabData'],
    data() {
      return {
        // tabData:{},
        employmentObj: {},
        employmentActive: '',
      }
    },
    watch: {
      'tabData.data': function (newValue, oldValue) {
        this.initWin();
      }
    },
    methods: {
      initWin() {
        this.employmentActive = 0;
        this.employmentObj = this.tabData.data[0].data.project;
        this.employmentObj.detail[0].label = this.employmentObj.detail[0].label.replace('签订率','\n签订率')
        this.employmentObj.detail[1].label = this.employmentObj.detail[1].label.replace('仲裁','\n仲裁')
        this.employmentObj.detail[2].label = this.employmentObj.detail[2].label.replace('调解','\n调解')
        this.employmentObj.chart.forEach((item) => {
          item.gridTop = 80;
          item.gridBottom = 100;
          item.gridLeft = 100;
          item.gridRight = 40;
          item.xRotate = 30;
          // item.gridContainLabel = true
        });
        this.employmentObj.chart[0].min = Math.floor(Math.min(...this.employmentObj.chart[0].series[0].data));
        this.employmentObj.chart[1].colorList = ['rgb(57, 199, 127)'];
        this.employmentObj.chart[1].colorStop = ['rgba(57, 199, 127, 0.2)', 'rgba(57, 199, 127, 0)'];
        // this.employmentObj.chart[1].min = Math.floor(Math.min(...this.employmentObj.chart[1].series[0].data));
        // this.employmentObj.chart[0].gridTop = 80;
        // this.employmentObj.chart[0].gridBottom = 60;
        this.$nextTick(() => {
          ecologicalLineChart('chart-line0', this.employmentObj.chart[0]);
          ecologicalLineChart('chart-line1', this.employmentObj.chart[1])
        })
      },
      switchInfrastructureTab(index) {
        this.infrastructureActive = index;
        this.$nextTick(() => {
          // drawJmHotMap('infrastructureMap', this.infrastructure.chart[0][index])
        });
      },
    }
  }
</script>

