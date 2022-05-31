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
      height: 320rpx;
    }
    .three-tab{
      padding-top: 0rpx;
    }
    .content {
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
    width: 750rpx;
    text-align: center;
    height: max-content;
    float: left;
    .tab-box-one-line{
      height: 320rpx;
      /*background: red;*/
      margin-top:20rpx ;
      .two-tab{
        width: 50%;
        height:120rpx;

      }
    }
    .content {
      height: max-content;
      width: 750rpx;
    }
    .hotmap {
      width: 100%;
      height: 700rpx;
      float: left;
    }
  }
  .content-kindergarten2 {
    width: 750rpx;
    text-align: center;
    float: left;
    height: max-content;
    &:last-child {
      padding-bottom: 70rpx;
    }
    .tab-box-one-line{
      height: 320rpx;
      /*background: red;*/

      margin-top:20rpx ;
      .two-tab{
        width: 50%;
        height: 120rpx;
      }
    }
    .content {
      height: max-content;
      width: 750rpx;
    }
    .hotmap {
      width: 100%;
      height: 700rpx;
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
  .three-tab{
    width:33.3%;
    /*flex: 1;*/
    height:150rpx;
    float:left;
    padding-top: 40rpx;
  }
  .two-tab {
    width: 50%;
    /*flex: 1;*/
    height:150rpx;
    float:left;
    padding-top: 40rpx;
  }

  .tabActive {
    border-top:solid #1a79c8 4rpx;
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
  .tab-box-one-line {
    width: 693rpx;
    height: 150rpx;
    margin-left: 29rpx;
    box-shadow: 0rpx 0rpx 12rpx rgba(129, 129, 129, 0.25);
    /*display: flex;*/
    float: left;
  }
  .tabActive {
    border-top:solid #1a79c8 4rpx;
    height: 150rpx;
    width: 231rpx;
    padding-top: 36rpx;
    background-image: linear-gradient(rgba(231, 242, 255, 1), rgba(231, 242, 255, 0));
    color: #1a79c8;
  }
  .splitLine {
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
  .tabActive1 {
    padding-top: 36rpx;
    /*border-top:solid #1a79c8 1rpx;*/
    border-top: 1rpx solid #1a79c8 !important;
    background-image: linear-gradient(rgba(231, 242, 255, 1), rgba(231, 242, 255, 0));
    color: #1a79c8;
  }
  .three-tab1{
    padding-top: 32rpx;
    width:33.3%;
    /*flex: 1;*/
    height:150rpx;
    display: inline-block;
    border-top: 1rpx solid #FFFFFF;
    /*float:left;*/
    /*padding-top: 40rpx;*/
  }
  .three-tab1:nth-child(1){
    position: relative;
    top:-2rpx;
  }
  .three-tab1:nth-child(3){
    position: relative;
    top:-2rpx
  }
  .tabActive2 {
    padding-top: 36rpx;
    /*border-top:solid #1a79c8 1rpx;*/
    border-top: 1rpx solid #1a79c8 !important;
    background-image: linear-gradient(rgba(231, 242, 255, 1), rgba(231, 242, 255, 0));
    color: #1a79c8;
  }
  .two-tab2{
    padding-top: 32rpx;
    width:50%;
    /*flex: 1;*/
    height:120rpx;
    display: inline-block;
    border-top: 1rpx solid #FFFFFF;
    /*float:left;*/
    /*padding-top: 40rpx;*/
  }
  .two-tab2:nth-child(1){
    position: relative;
  }
  #kindergarten{
    height: 500rpx;
  }
  .fl {
    float: left;
  }

#transport{
  height: 500rpx;
}
  #life{
    height: 500rpx;
  }
  .part-tab {
    height: 290rpx;
    width: 750rpx;
    float: left;
  }
  // 两行分类tab
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
  .color-tab-double-up {
    width:100%;
    height:118rpx;
    float: left;
    display: block;
    margin-top: 28rpx;
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
  .part-three-arrow {
    margin: 7rpx 0 -23rpx 0;
    float: left;
    width: 750rpx;
    height: 23rpx;
    .box-arrow {
      float: left;
      width: 212rpx;
      height: 23rpx;
      margin-left: 23rpx;
      &:nth-child(2) {
        margin-left: 32rpx;
      }
      &:nth-child(3) {
        margin-left: 32rpx;
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
  .part-slide {
    width: 750rpx;
    height: max-content;
    overflow-x: auto;
    .slide {
      width: max-content;
      height: max-content;

    }
  }

  .slide-box-without-scrollbar {
    float: left;
    width: 750rpx;
    margin-bottom: -30rpx;
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
    padding: 0 29rpx 0 9rpx;
    .select-box-slide {
      float: left;
      width: 334rpx;
      height: 30rpx;
      margin-left: 18rpx;
      .select {
        float: left;
        margin-top: 7rpx;
        margin-left: 62rpx;
        width: 210rpx;
        height: 23rpx;
        background: url("../../static/assets/images/h5/tab-selected.png") no-repeat;
        background-size: 210rpx 23rpx;
      }
    }
    .name-color {
      margin-top: 25rpx;
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
    .unit-color {
      font-size: 24rpx;
      font-family: "PingFang-SC-Medium";
      text-align: center;
      color: #353535;
      line-height: 44rpx;
    }
  }
  // 一行分类tab
  .tabGreen {
    float: left;
    height: 144rpx;
    width: 334rpx;
    margin-left: 18rpx;
    text-align: center;
    background-color: #edf9f5;
    border-top: solid #09ab80 4rpx;
  }
  .tabBlue {
    float: left;
    height: 144rpx;
    width: 334rpx;
    margin-left: 18rpx;
    text-align: center;
    background-color: #f1f6fb;
    border-top: solid #1a79c8 4rpx;
  }
  .tabYellow {
    float: left;
    height: 144rpx;
    width: 334rpx;
    margin-left: 18rpx;
    text-align: center;
    background-color: #fcf7f2;
    border-top: solid #f0993c 4rpx;
  }
</style>

<template>
  <div class="main" >
    <div class="section-xqjy">
      <!--农业基础设施-->
      <div class="content-kindergarten" >
        <div class="title">
          <span class="title-icon-bar-left"></span>
          <span class="title-icon-bar-right"></span>
          <span class="title-text">农业基础设施</span>
        </div>
        <div class="part-tab">
          <div
            v-for="(item,index) in Poverty.farmingInfrastructure.tableFarmingInfrastructure.tableFarmingInfrastructure.data[0].slice(0,3)"
            :class="{tabGreenDouble: index===0, tabBlueDouble: index===1, tabYellowDouble: index===2}"
            @click="switchKindergartenTab(index)">
            <div class="color-tab-double-up">
              <div class="line">
                <span class="name">{{item.lable}}</span>
              </div>
              <div class="line">
                <span class="number">{{item.value}}</span>
                <span class="unit">{{item.unit}}</span>
              </div>
            </div>
            <div :class="{splitLineGreen: index===0, splitLineBlue: index===1, splitLineYellow: index===2}"></div>
            <div class="color-tab-double-down">
              <div class="line">
                <span class="name">{{deviceLabelList[index]}}</span><br/>
                 </div>
              <div class="line">
                <span class="number">{{Poverty.farmingInfrastructure.tableFarmingInfrastructure.tableFarmingInfrastructure.data[0][index+3].value}}</span>
                <span class="unit">{{Poverty.farmingInfrastructure.tableFarmingInfrastructure.tableFarmingInfrastructure.data[0][index+3].unit}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="part-three-arrow">
          <div
            v-for="(item,index) in Poverty.farmingInfrastructure.tableFarmingInfrastructure.tableFarmingInfrastructure.data[0].slice(0,3)"
            class="box-arrow">
            <div v-show="kindergartenActive===index" class="arrow"></div>
          </div>
        </div>
        <div
          v-for="(item,index) in Poverty.farmingInfrastructure.tableFarmingInfrastructure.tableFarmingInfrastructure.data[0].slice(0,3)"
          v-if="kindergartenActive === index"
          class="content">
          <span class="blur-bar">包头市</span>
          <span class="subtitle">{{item.lable}}</span>
          <div class="hotmap" id="kindergarten"></div>
        </div>
      </div>
      <div class="content-kindergarten1" id="secondTab">
        <div class="title">
          <span class="title-icon-bar-left"></span>
          <span class="title-icon-bar-right"></span>
          <span class="title-text">交通基础设施</span>
        </div>
        <div class="slide-box-without-scrollbar">
          <div class="color-tab-box">
            <div
              v-for="(item,index) in Poverty.transportInfrastructure.tableTransportInfrastructure.tableFarmingInfrastructure.data[0]"
              :class="{tabGreen: index%3===0, tabBlue: index%3===1, tabYellow: index%3===2}"
              @click="switchKindergartenTab2(index)">
              <div class="name-color">{{item.lable}}</div>
              <span class="number-color">{{item.value}}</span>
              <span class="unit-color">{{item.unit}}</span>
            </div>
          </div>
          <div class="color-tab-box">
            <div
              v-for="(item,index) in Poverty.transportInfrastructure.tableTransportInfrastructure.tableFarmingInfrastructure.data[0]"
              class="select-box-slide">
              <div v-if="index===kindergartenActive2" class="select"></div>
            </div>
          </div>
        </div>
        <div class="content">
          <div
            v-for="(item,index) in Poverty.transportInfrastructure.tableTransportInfrastructure.tableFarmingInfrastructure.data[0]"
            v-if="kindergartenActive2 === index"
            class="content">
            <span class="blur-bar">包头市</span>
            <span class="subtitle">{{item.lable}}</span>
            <div class="hotmap" id="transport"></div>
          </div>
        </div>
      </div>
      <div class="content-kindergarten2"  id="secondTab2">
        <div class="title">
          <span class="title-icon-bar-left"></span>
          <span class="title-icon-bar-right"></span>
          <span class="title-text">生活基础设施</span>
        </div>
        <div class="slide-box-without-scrollbar">
          <div class="color-tab-box">
            <div
              v-for="(item,index) in Poverty.lifeInfrastructure.tableLifeInfrastructure.tableFarmingInfrastructure.data[0]"
              :class="{tabGreen: index%3===0, tabBlue: index%3===1, tabYellow: index%3===2}"
              @click="switchKindergartenTab3(index)">
              <div class="name-color">{{item.lable}}</div>
              <span class="number-color">{{item.value}}</span>
              <span class="unit-color">{{item.unit}}</span>
            </div>
          </div>
          <div class="color-tab-box">
            <div
              v-for="(item,index) in Poverty.lifeInfrastructure.tableLifeInfrastructure.tableFarmingInfrastructure.data[0]"
              class="select-box-slide">
              <div v-if="index===kindergartenActive3" class="select"></div>
            </div>
          </div>
        </div>
        <div class="content">
          <div
            v-for="(item,index) in Poverty.lifeInfrastructure.tableLifeInfrastructure.tableFarmingInfrastructure.data[0]"
            v-if="kindergartenActive3 === index"
            class="content">
            <span class="blur-bar">包头市</span>
            <span class="subtitle">{{item.lable}}</span>
            <div class="hotmap" id="life"></div>
          </div>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
  // import {drawJmMap, ecologicalLineChart} from '../../charts/h5-chart';
  import {
    drawJmMap,
    brainLineAndBarChartFour2,
    brainLineAndBarChartFourmenoyinf,
    brainLineAndBarChartFourmeoy1,
    multiBarChartHorizontal,
    multiBarChartHorizontal2,
    multiBarChartHorizontal3,
    brainPieChartNew,
    multiBarChartHorizontal4,
    multiBarChartHorizontal4woter,
    brainPieChartCircle
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
        zz:[],
        deviceLabelList: ['面积占比','排涝站分布','灌溉站分布'],
      }
    },
    mounted() {
      this.initWin();
    },
    methods: {
      initWin() {


        // console.log('31312313小明',this.zz);
        this.switchKindergartenTab(0);
        this.switchKindergartenTab2(0);
        this.switchKindergartenTab3(0);
        // this.tabData[0].data.teacher.chart.colorList = ['rgb(26, 121, 200)', 'rgb(57, 199, 127)'];
        // this.tabData[0].data.teacher.chart.colorStop = ['rgba(26, 121, 200, 1)', 'rgba(26, 121, 200, 0)', 'rgba(57, 199, 127, 1)', 'rgba(57, 199, 127, 0)'];
        // this.tabData[0].data.teacher.chart.legendShow = true;
        // ecologicalLineChart('teacher', this.tabData[0].data.teacher.chart);
        // ecologicalLineChart('teacher2', this.tabData[0].data.teacher.chart);
        // ecologicalLineChart('teacher3', this.tabData[0].data.teacher.chart);
        setTimeout(() => {
          //人均收入
          // brainLineAndBarChartFour2('avgIncome',this.Poverty.avgIncome.data);
          // multiBarChartHorizontal('dangerHouse',this.Poverty.dangerousHouseRenovation.dangerHouse.data);
          // multiBarChartHorizontal2('AllWaterSup',this.Poverty.AllWaterSup.waterSupply.data);
          // multiBarChartHorizontal3('Education',this.Poverty.compulsoryEducation.AllCompulsoryEducation2.data);
          // multiBarChartHorizontal4('Economy',this.Poverty.collectiveEconomy.AllCollectiveEconomy2.data);
        }, 500);
      },

      switchKindergartenTab(index) {
        this.kindergartenActive = index;
        if (this.kindergartenActive === 0) {
          this.$nextTick(() => {
            brainLineAndBarChartFourmenoyinf('kindergarten', this.Poverty.farmingInfrastructure.farmlandArea.data);
          })
          } else if (this.kindergartenActive === 1) {
          this.$nextTick(() => {
            brainLineAndBarChartFourmenoyinf('kindergarten', this.Poverty.farmingInfrastructure.irrigationStation.data);
          })
        }else  {
          this.$nextTick(() => {
            brainLineAndBarChartFourmenoyinf('kindergarten', this.Poverty.farmingInfrastructure.drainageStation.data);
          })
        }
      },
      /*交通基础设施*/
      switchKindergartenTab2(index) {
        this.kindergartenActive2 = index;
        if (this.kindergartenActive2 === 0) {
          this.$nextTick(() => {
            multiBarChartHorizontal2('transport',this.Poverty.transportInfrastructure.pavingRate.data,100);
          })
        } else if (this.kindergartenActive2 === 1) {
          this.$nextTick(() => {
            multiBarChartHorizontal('transport',this.Poverty.transportInfrastructure.listingRate.data)
          })
        }else if (this.kindergartenActive2 === 2) {
          this.$nextTick(() => {
            brainPieChartNew('transport',this.Poverty.transportInfrastructure.logisticsPark.data)
          })
        }else {
          this.$nextTick(() => {
            brainPieChartNew('transport',this.Poverty.transportInfrastructure.logisticsNodes.data)
          })
        }
      },
      /*生活基础*/
      switchKindergartenTab3(index) {
        this.kindergartenActive3 = index;
        if (this.kindergartenActive3 === 0) {
          this.$nextTick(() => {
            multiBarChartHorizontal2('life',this.Poverty.lifeInfrastructure.waterQualifiedRate.data);
          })
        } else if (this.kindergartenActive3 === 1) {
          this.$nextTick(() => {
            var poorVillages = this.Poverty.lifeInfrastructure.waterPenetrationRate.data;
            poorVillages.limitList=[99.4,98.6,98];
            multiBarChartHorizontal('life',this.Poverty.lifeInfrastructure.waterPenetrationRate.data);
          })
        }else if (this.kindergartenActive3 === 2) {
          this.$nextTick(() => {
            multiBarChartHorizontal2('life',this.Poverty.lifeInfrastructure.fiberUserRate.data);
          })
        }else {
          this.$nextTick(() => {
            multiBarChartHorizontal('life',this.Poverty.lifeInfrastructure.coverageRate.data);
          })
        }
      },
    },
  }

</script>

