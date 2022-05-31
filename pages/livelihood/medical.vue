<style lang="less" scoped>
  @import url("../common-class.less");
  .section-medical {
    width: 750rpx;
    float: left;
    background-color: #fff;
    &:last-child {
      padding-bottom: 120rpx;
    }
  }
  .chart {
    width: 100%;
    height: 450rpx;
    float: left;
  }
</style>


<template>
  <div v-if="tabData.data" class="main">
    <div class="section-medical">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">医疗</span>
      </div>
      <div class="section-content">
        <div class="color-tab-box">
          <div
            v-for="(item,index) in medicalObj.detail.slice(0,3)"
            @click="switchMedicalTab(index)"
            :class="{tabGreenDouble: index===0, tabBlueDouble: index===1, tabYellowDouble: index===2}">
            <div
              :class="{colorTabDoubleUpAdjust: item.label.length > 9}"
              class="color-tab-double-up">
              <span class="name-color">{{item.label}}</span><br/>
              <span class="number-color">{{item.value}}</span>
              <span class="unit-color">{{item.unit}}</span>
            </div>
            <span :class="{splitLineGreen: index===0, splitLineBlue: index===1, splitLineYellow: index===2}"></span>
            <div
              :class="{colorTabDoubleDownAdjust: medicalObj.detail[index+3].label.length > 8}"
              class="color-tab-double-down">
              <span class="name-color">{{medicalObj.detail[index+3].label}}</span><br/>
              <span class="number-color-down">{{medicalObj.detail[index+3].value}}</span>
              <span class="unit-color">{{medicalObj.detail[index+3].unit}}</span>
            </div>
          </div>
          <div class="color-tab-box">
            <div v-for="(item,index) in medicalObj.detail.slice(0,3)" class="select-box">
              <div v-if="medicalActive===index" class="select"></div>
            </div>
          </div>
        </div>
        <div
          v-for="(item,index) in medicalObj.detail"
          v-if="medicalActive === index"
          class="content">
          <span class="blue-bar margin-top25">包头市</span>
          <span class="subtitle margin-top22">{{item.label}}</span>
          <div class="chart" id="medical"></div>
        </div>
      </div>
      <div class="bottom-text margin-top12">该板块数据为2018年数据</div>
    </div>
  </div>
</template>

<script>
  import {LineAndBarChart,agricultureLineAndBarChart} from "../../charts/h5-chart"
  export default {
    name: "medical",
    props: ['tabData'],
    data() {
      return {
        // tabData: {},
        medicalObj: {},
        medicalActive: '',
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
        this.medicalActive = 0
        this.medicalObj = this.tabData.data[0].data.medical;
        this.medicalObj.detail[1].label = this.medicalObj.detail[1].label.replace('（','(');
        this.medicalObj.detail[1].label = this.medicalObj.detail[1].label.replace('）',')');
        this.medicalObj.detail[3].label = this.medicalObj.detail[3].label.replace(this.medicalObj.detail[0].label, '');
        this.medicalObj.detail[3].unit = this.medicalObj.detail[3].unit.replace('/平方公里', '');
        this.medicalObj.detail[4].label = this.medicalObj.detail[4].label.replace('执业（助理）医师数', '');
        this.medicalObj.detail[5].label = this.medicalObj.detail[5].label.replace(this.medicalObj.detail[2].label, '');
        // this.medicalObj.chart[2].gridLeft = '12%';
        // this.medicalObj.chart[1].gridTop = '22%';
        this.medicalObj.chart[0].legendRight = 'auto';
        this.medicalObj.chart[1].legendRight = 'auto';
        this.medicalObj.chart[1].rightUnitPaddingleft = 10;
        this.medicalObj.chart[2].legendRight = 'auto';
        this.medicalObj.chart[0].gridBottom = '60';
        this.medicalObj.chart[1].gridBottom = '60';
        this.medicalObj.chart[2].gridBottom = '60';
        this.medicalObj.chart[2].yaxis[1] = '张';
        this.$nextTick(() => {
          this.switchMedicalTab(0);
        })
      },
      switchMedicalTab(index) {
        this.medicalActive = index;
        this.$nextTick(() => {
          agricultureLineAndBarChart('medical', this.medicalObj.chart[index])
        });
      },
    }
  }
</script>

