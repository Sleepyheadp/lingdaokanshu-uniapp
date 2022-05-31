<style scoped lang="less">
  /*@import url(../../static/assets/font/PINGFANG_MEDIUM.TTF);*/
  /*@import url(../../static/assets/font/DIN-Medium.otf);*/
  .main {
    width: 750rpx;
    float: left;
    background-color: #fff;
  }

  .section-xqjy {
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
        font-family: 'PingFang-SC-Bold';
        font-size: 36rpx;
      }
    }

  }
  .content-kindergarten {
    width: 750rpx;
    text-align: center;
    height: max-content;
    float: left;
    .tab-box-one-line{
      height: 115rpx;
      float: left;
    }
    .weifang{

      padding-left: 10rpx;
      .weifangname{
        line-height: 115rpx;
      }
      .newpo{
        padding-left: 20rpx;
        line-height: 115rpx;
      }

    }
    .content {
      float: left;
      height: max-content;
      width: 750rpx;
    }
    .hotmap {
      width: 100%;
      height: 700rpx;
      float: left;
    }
  }
  .content-kindergarten1 {
    float: left;
    width: 750rpx;
    text-align: center;
    height: max-content;
    .weifang1{
      padding-left: 10rpx;
    }
    .tab-box-one-line{
      margin-top: 20rpx;
      float: left;
    }
    .content {
      height: max-content;
      width: 750rpx;
      float: left;
    }
    .hotmap {
      width: 100%;
      height: 500rpx;
      float: left;
    }
  }
  .content-kindergarten2 {
    width: 750rpx;
    text-align: center;
    height: max-content;
    float: left;
    .weifang1{
      padding-left: 10rpx;
      .weifangname{
        line-height: 115rpx;
      }
      .weifangname2{
        line-height: 115rpx;
      }
    }
    .tab-box-one-line{
      float: left;
      height: 115rpx;
      margin-top: 20rpx;
    }
    .content {
      height: max-content;
      float: left;
      width: 750rpx;
    }
    .hotmap {
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
  .number1 {
    font-size: 36rpx;
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
  .unit1{
    font-size: 36rpx;
    font-family: "PingFang-SC-Medium";
    text-align: center;
    line-height: 44rpx;
  }
  .tab-box-one-line {
    width: 692rpx;
    height: 150rpx;
    margin-left: 29rpx;
    box-shadow: 0rpx 0rpx 12rpx rgba(129, 129, 129, 0.25);
    /*display: flex;*/
    float: left;
  }
  .subtitle {
    float: left;
    color: #909090;
    font-size: 26rpx;
    margin: 60rpx 0 0 5rpx;
    text-align: center;
    font-family: 'PingFang-SC-Medium';
  }
  .tab-box-one-line{
    .weifang{
      display: flex;
      height: 100%;
      line-height: 140rpx;
      font-size: 24rpx;
      font-family: "PingFang-SC-Medium";
      text-align: center;
      justify-content: space-around;
      background: url("../../static/assets/rural/new-zhiye-farmer.png") no-repeat 20rpx;
      background-size: 60rpx 60rpx;
      .weifangname{
        /*margin-left: 20rpx;*/
      }
      .weifangnum{
        font-size: 44rpx;
        font-family: 'DIN-Medium';
      }
      .weifangunit{
        font-family: 'DIN-Medium';
      }
    }
    .weifang1{
      display: flex;
      height: 100%;
      line-height: 140rpx;
      font-size: 24rpx;
      font-family: "PingFang-SC-Medium";
      text-align: center;
      justify-content: space-around;
      background: url("../../static/assets/rural/farmer-rencai-yinjin.png") no-repeat 20rpx;
      background-size: 60rpx 60rpx;
      .weifangname{
        margin-left:8rpx;
      }
      .weifangnum{
        font-size: 44rpx;
        font-family: 'DIN-Medium';
      }
      .weifangunit{
        font-family: 'DIN-Medium';
      }
    }
    .weifang2{
      display: flex;
      height: 100%;
      line-height: 140rpx;
      font-size: 24rpx;
      font-family: "PingFang-SC-Medium";
      text-align: center;
      justify-content: space-around;
      background: url("../../static/assets/rural/jiaoyu.png") no-repeat 20rpx;
      background-size: 60rpx 60rpx;
      .weifangname{
        /*margin-left: 40rpx;*/
      }
      .weifangnum{
        font-size: 44rpx;
        font-family: 'DIN-Medium';
      }
      .weifangunit{
        font-family: 'DIN-Medium';
      }
    }
  }
  #ProfesFarmer{
    height: 500rpx;
    /*background: red;*/
  }

  .part-two-tab {
    margin-top: 12rpx;
    width: 750rpx;
    height: 148rpx;
    float: left;
    .tab {
      width: 332rpx;
      float: left;
      height: 144rpx;
      margin-left: 30rpx;
      border-top: solid #09ab80 4rpx;
      background-color: #edf9f5;
      &:nth-child(2) {
        margin-left: 26rpx;
        border-top: solid #1a79c8 4rpx;
        background-color: #f1f6fb;
      }
      .line {
        width: 100%;
        float: left;
        text-align: center;
        height: max-content;
        margin-top: 28rpx;
        &:nth-child(2) {
          margin-top: 5rpx;
        }
      }
    }
  }
  .part-two-arrow {
    margin: 7rpx 0 -23rpx 0;
    float: left;
    width: 750rpx;
    height: 23rpx;
    .box-arrow {
      float: left;
      width: 212rpx;
      height: 23rpx;
      margin-left: 83rpx;
      &:nth-child(2) {
        margin-left: 153rpx;
      }
      .arrow {
        display: block;
        width: 212rpx;
        height: 23rpx;
        float: left;
        background: url("../../static/assets/img/jiantou.png") no-repeat;
        background-size: 212rpx 23rpx;
      }
    }
  }
</style>

<template>
  <div class="main" >
    <div class="section-xqjy">
      <!--新型职业农民-->
      <div class="content-kindergarten" >
        <div class="title">
          <span class="title-icon-bar-left"></span>
          <span class="title-icon-bar-right"></span>
          <span class="title-text">新型职业农民</span>
        </div>
        <div class="tab-box-one-line">
          <div class="weifang">
            <span class="weifangname">{{this.Poverty.newProfesFarmer.tableNewProfesFarmer.tableNewProfesFarmer.data[0][0].lable}}</span>
            <div class="newpo">
              <span class="weifangnum">{{this.Poverty.newProfesFarmer.tableNewProfesFarmer.tableNewProfesFarmer.data[0][0].value}}</span>
              <span class="weifangunit">{{this.Poverty.newProfesFarmer.tableNewProfesFarmer.tableNewProfesFarmer.data[0][0].unit}}</span>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="hotmap" id="ProfesFarmer"></div>
        </div>
      </div>
      <!--大学生就业-->
      <div class="content-kindergarten1" id="secondTab" >
        <div class="title">
          <span class="title-icon-bar-left"></span>
          <span class="title-icon-bar-right"></span>
          <span class="title-text">大学生就业</span>
        </div>
        <div class="part-two-tab">
          <div
            v-for="(item,index) in Poverty.graduateEmployment.tableGraduateEmployment.tableGraduateEmployment.data[0]"
            class="tab"
            @click="switchKindergartenTab(index)">
            <div class="line">
              <span class="name">{{item.lable}}</span>
            </div>
            <div class="line">
              <span class="number">{{item.value}}</span>
              <span class="unit">{{item.unit}}</span>
            </div>

          </div>
        </div>
        <div class="part-two-arrow">
          <div
            v-for="(item,index) in Poverty.graduateEmployment.tableGraduateEmployment.tableGraduateEmployment.data[0]"
            class="box-arrow">
            <div v-if="kindergartenActive===index" class="arrow"></div>
          </div>
        </div>
        <div class="content">
          <div class="hotmap" id="graduat"></div>
        </div>
      </div>
      <!--农业高层次人才引进-->
      <div class="content-kindergarten2" id="secondTab2" >
        <div class="title">
          <span class="title-icon-bar-left"></span>
          <span class="title-icon-bar-right"></span>
          <span class="title-text">农业高层次人才引进</span>
        </div>
        <div class="tab-box-one-line">
          <div class="weifang1">
            <span class="weifangname">{{this.Poverty.highLevelTalents.tableHighLevelTalents.tableHighLevelTalents.data[0][0].lable}}</span>
            <div class="weifangname2">
              <span class="weifangnum">{{this.Poverty.highLevelTalents.tableHighLevelTalents.tableHighLevelTalents.data[0][0].value}}</span>
              <span class="weifangunit">{{this.Poverty.highLevelTalents.tableHighLevelTalents.tableHighLevelTalents.data[0][0].unit}}</span>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="hotmap" id="highLevel"></div>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
  // import {drawJmMap, ecologicalLineChart} from '../../charts/h5-chart';
  import {
    drawJmMap,brainPieChart, brainPieChartNew
  } from '../../charts/rural-charts';
  // import {heatChart} from './echerts';
  export default {
    name: "preschool-education",
    props: {
      Poverty: {
        // type: Array,
        // default: {}
      }
    },
    // watch:{
    //   'Poverty':{
    //     deep:true,
    //     immediate:true,
    //     handler(newValue,oldValue){
    //       alert(this.Poverty = newValue)
    //     }
    //   }
    // },
    data() {
      return {
        // 幼儿园
        kindergartenActive: 0,
        kindergartenActive2: 0,
        kindergartenActive3: 0,
        // 教职工
        zz:[]
      }
    },
    mounted() {
      this.initWin();
    },
    methods: {
      initWin() {

        // this.tabData[0].data.teacher.chart.colorList = ['rgb(26, 121, 200)', 'rgb(57, 199, 127)'];
        // this.tabData[0].data.teacher.chart.colorStop = ['rgba(26, 121, 200, 1)', 'rgba(26, 121, 200, 0)', 'rgba(57, 199, 127, 1)', 'rgba(57, 199, 127, 0)'];
        // this.tabData[0].data.teacher.chart.legendShow = true;
        // ecologicalLineChart('teacher', this.tabData[0].data.teacher.chart);
        // ecologicalLineChart('teacher2', this.tabData[0].data.teacher.chart);
        // ecologicalLineChart('teacher3', this.tabData[0].data.teacher.chart);
        setTimeout(() => {
          // brainPieChart('ProfesFarmer', this.Poverty.newProfesFarmer.pieNewProfesFarmer.data)
          brainPieChartNew("ProfesFarmer", this.Poverty.newProfesFarmer.pieNewProfesFarmer.data);
          brainPieChartNew('highLevel', this.Poverty.highLevelTalents.pieHighLevelTalents.data)
          brainPieChartNew('graduat', this.Poverty.graduateEmployment.employment.data)
          brainPieChartNew('graduat', this.Poverty.graduateEmployment.villageOfficials.data)
        }, 500);
      },

      switchKindergartenTab(index) {
        this.kindergartenActive = index;
        if (this.kindergartenActive === 0) {
          brainPieChartNew('graduat', this.Poverty.graduateEmployment.employment.data)
        } else if (this.kindergartenActive === 1) {
          brainPieChartNew('graduat', this.Poverty.graduateEmployment.villageOfficials.data)
        }else {
        }
      },

    },
  }

</script>

