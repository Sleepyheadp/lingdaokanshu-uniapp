<style lang="less" scoped>
  @import url("../common-class.less");
  .section-education {
    width: 750rpx;
    float: left;
  }
</style>

<template>
  <div v-if="tabData.data" class="main">
    <div class="section-education">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">教育</span>
      </div>
      <div class="section-content">
        <div class="color-tab-box">
          <div
            v-for="(item,index) in educationObj.detail.slice(0,3)"
            @click="switchEducationTab(index)"
            :class="{tabGreen: index===0, tabBlue: index===1, tabYellow: index===2}">
            <div
              :class="{colorTabDoubleUpAdjust: item.label.length > 8}"
              class="color-tab-double-up">
              <span class="name-color">{{item.label}}</span><br/>
              <span class="number-color">{{item.value}}</span>
              <span class="unit-color">{{item.unit}}</span>
            </div>
          </div>
          <div class="color-tab-box">
            <div v-for="(item,index) in educationObj.detail.slice(0,3)" class="select-box">
              <div v-if="educationActive===index" class="select"></div>
            </div>
          </div>
        </div>
        <div
          v-for="(item,index) in educationObj.detail"
          v-if="educationActive === index"
          class="content">
          <span class="blue-bar margin-top25">包头市</span>
          <span class="subtitle margin-top22">{{item.label}}</span>
          <div class="hotmap" id="education"></div>
        </div>
      </div>
      <div class="bottom-text margin-top-22">该板块数据为2019年数据</div>
    </div>
  </div>
</template>

<script>
  import {drawJmHotMap} from "../../charts/h5-chart"
  export default {
    name: "education",
    props: ['tabData'],
    data() {
      return {
        // tabData: {},
        educationObj: {},
        educationActive: '',
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
        this.educationActive = 0;
        this.educationObj = this.tabData.data[0].data.education;
        this.$nextTick(() => {
          this.switchEducationTab(0)
        })
      },
      switchEducationTab(index) {
        this.educationActive = index;
        this.$nextTick(() => {
          drawJmHotMap('education', this.educationObj.chart[index])
        });
      },
    }
  }
</script>

