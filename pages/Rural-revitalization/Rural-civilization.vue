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
    /*.tab-box-one-line{*/
    /*  height: 350rpx;*/
    /*  !*background: red;*!*/
    /*}*/
    .content {
      height: max-content;
    }
    .hotmap {
      width: 100%;
      height: 700rpx;
      float: left;
    }
  }
  .content-kindergarten1 {
    width: 750rpx;
    float: left;
    text-align: center;
    height: max-content;
    margin-top: -50rpx;
    .tab-box-one-line{
      height: 320rpx;
      margin-top:10rpx;
      /*background: red;*/
      .two-tab{
        width: 50%;
        height:100rpx;
      }
    }

    .content {
      height: max-content;
    }
    .hotmap {
      width: 100%;
      height: 700rpx;
      float: left;
    }
  }
  .content-kindergarten2 {
    width: 750rpx;
    float: left;
    text-align: center;
    margin-top: -30rpx;
    height: max-content;
    &:last-child {
      padding-bottom: 70rpx;
    }
    .tab-box-one-line{
      height: 340rpx;
      margin-top:35rpx;
      /*background: red;*/
      .two-tab{
        width: 50%;
        height: 100rpx;
      }
    }

    .content {
      height: max-content;
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
  .tab-box-one-line {
    width: 692rpx;
    height: 150rpx;
    margin-left: 29rpx;
    box-shadow: 0rpx 0rpx 12rpx rgba(129, 129, 129, 0.25);
    /*display: flex;*/
    float: left;
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
    margin: 61rpx 0 0 5rpx;
    text-align: center;
    font-family: 'PingFang-SC-Medium';
  }
  #ideological{
    height: 450rpx;
  }
  #special{
    height: 450rpx;
  }
  #culturalLife{
    height: 500rpx;
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
  }
  .color-tab-box-normal {
    width: 750rpx;
    float: left;
    .name-color-1st {
      margin-top: 12rpx;
      font-size: 24rpx;
      font-family: "PingFang-SC-Medium";
      color: #353535;
      text-align: center;
      white-space: pre-line;
    }
    .unit-color {
      font-size: 24rpx;
      font-family: "PingFang-SC-Medium";
      text-align: center;
      color: #353535;
      line-height: 44rpx;
    }
    .number-color {
      font-size: 50rpx;
      font-family: 'DIN-Medium';
      color: #353535;
      line-height: 54rpx;
      text-align: center;
    }
    .select-box-slide {
      float: left;
      width: 210rpx;
      height: 30rpx;
      margin-left: 34rpx;
      &:first-child {
        margin-left: 24rpx;
      }
      .select {
        float: left;
        margin-top: 7rpx;
        margin-left: 0rpx;
        width: 210rpx;
        height: 23rpx;
        background: url("../../static/assets/images/h5/tab-selected.png") no-repeat;
        background-size: 210rpx 23rpx;
      }
    }
  }
  .color-tab-box-wide {
    width: max-content;
    float: left;
    padding: 0 29rpx 0 9rpx;
    text-align: left;
    .name-color {
      margin-top: 25rpx;
      font-size: 24rpx;
      margin-left: 25rpx;
      font-family: "PingFang-SC-Medium";
      color: #353535;
      white-space: pre-line;
    }
    .name-color-double {
      margin-top: 12rpx;
      font-size: 24rpx;
      margin-left: 25rpx;
      font-family: "PingFang-SC-Medium";
      color: #353535;
      white-space: pre-line;
    }
    .number-color {
      font-size: 50rpx;
      font-family: 'DIN-Medium';
      margin-left: 25rpx;
      color: #353535;
      line-height: 54rpx;
    }
    .unit-color {
      font-size: 24rpx;
      font-family: "PingFang-SC-Medium";
      color: #353535;
      line-height: 44rpx;
    }
    .select-box-slide-wide {
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
    margin-left: 34rpx;
    text-align: center;
    background-color: #f1f6fb;
    border-top: solid #1a79c8 4rpx;
  }
  .tabYellow {
    float: left;
    height: 144rpx;
    width: 210rpx;
    margin-left: 34rpx;
    text-align: center;
    background-color: #fcf7f2;
    border-top: solid #f0993c 4rpx;
  }
  .tabGreenWide {
    float: left;
    height: 144rpx;
    width: 334rpx;
    margin-left: 18rpx;
    text-align: left;
    background-color: #edf9f5;
    border-top: solid #09ab80 4rpx;
  }
  .tabBlueWide {
    float: left;
    height: 144rpx;
    width: 334rpx;
    margin-left: 18rpx;
    text-align: left;
    background-color: #f1f6fb;
    border-top: solid #1a79c8 4rpx;
  }
  .tabYellowWide {
    float: left;
    height: 144rpx;
    width: 334rpx;
    margin-left: 18rpx;
    text-align: left;
    background-color: #fcf7f2;
    border-top: solid #f0993c 4rpx;
  }
  .marginBottom-30 {
    margin-bottom: -30rpx;
  }
</style>

<template>
  <div class="main" >
    <div class="section-xqjy">
      <!--思想道德建设-->
      <div class="content-kindergarten" >
        <div class="title">
          <span class="title-icon-bar-left"></span>
          <span class="title-icon-bar-right"></span>
          <span class="title-text">思想道德建设</span>
        </div>
        <div class="color-tab-box-normal">
          <div
            v-for="(item,index) in Poverty.ideological.tableIdeological.tableFarmingInfrastructure.data[0]"
            :class="{tabGreen: index%3===0, tabBlue: index%3===1, tabYellow: index%3===2}"
            @click="switchKindergartenTab(index)">
            <div class="name-color-1st">{{mindTabList[index]}}</div>
            <span class="number-color">{{item.value}}</span>
            <span class="unit-color">{{item.unit}}</span>
          </div>
        </div>
        <div class="color-tab-box-normal marginBottom-30">
          <div
            v-for="(item,index) in Poverty.ideological.tableIdeological.tableFarmingInfrastructure.data[0]"
            class="select-box-slide">
            <div v-if="index===kindergartenActive" class="select"></div>
          </div>
        </div>
        <div class="content">
          <div
            v-for="(item,index) in Poverty.ideological.tableIdeological.tableFarmingInfrastructure.data[0]"
            v-if="kindergartenActive === index"
            class="content">
            <span class="blur-bar">包头市</span>
            <span class="subtitle">{{item.lable}}</span>
            <div class="hotmap" id="ideological"></div>
          </div>
        </div>
      </div>
      <!--侨乡文化特色-->
      <div class="content-kindergarten1"  id="secondTab">
        <div class="title">
          <span class="title-icon-bar-left"></span>
          <span class="title-icon-bar-right"></span>
          <span class="title-text">侨乡特色文化</span>
        </div>
        <div class="slide-box-without-scrollbar">
          <div class="color-tab-box-wide">
            <div
              v-for="(item,index) in Poverty.specialCulture.tableSpecialCulture.tableFarmingInfrastructure.data[0]"
              :class="{tabGreenWide: index%3===0, tabBlueWide: index%3===1, tabYellowWide: index%3===2}"
              @click="switchKindergartenTab2(index)">
              <div class="name-color">{{item.lable}}</div>
              <span class="number-color">{{item.value}}</span>
              <span class="unit-color">{{item.unit}}</span>
            </div>
          </div>
          <div class="color-tab-box-wide">
            <div v-for="(item,index) in Poverty.specialCulture.tableSpecialCulture.tableFarmingInfrastructure.data[0]" class="select-box-slide-wide">
              <div v-show="index===kindergartenActive2" class="select"></div>
            </div>
          </div>
        </div>
        <div class="content">
          <div
            v-for="(item,index) in Poverty.specialCulture.tableSpecialCulture.tableFarmingInfrastructure.data[0]"
            v-if="kindergartenActive2 === index"
            class="content">
            <span class="blur-bar">包头市</span>
            <span class="subtitle">{{item.lable}}</span>
            <div class="hotmap" id="special"></div>
          </div>
        </div>
      </div>
      <!--乡村文化生活-->
      <div class="content-kindergarten2" id="secondTab2" >
        <div class="title">
          <span class="title-icon-bar-left"></span>
          <span class="title-icon-bar-right"></span>
          <span class="title-text">乡村文化生活</span>
        </div>
        <div class="slide-box-without-scrollbar">
          <div class="color-tab-box-wide">
            <div
              v-for="(item,index) in Poverty.culturalLife.tableCulturalLife.tableFarmingInfrastructure.data[0]"
              :class="{tabGreenWide: index%3===0, tabBlueWide: index%3===1, tabYellowWide: index%3===2}"
              @click="switchKindergartenTab3(index)">
              <div class="name-color-double">{{culturalList[index]}}</div>
              <span class="number-color">{{item.value}}</span>
              <span class="unit-color">{{item.unit}}</span>
            </div>
          </div>
          <div class="color-tab-box-wide">
            <div v-for="(item,index) in Poverty.culturalLife.tableCulturalLife.tableFarmingInfrastructure.data[0]" class="select-box-slide-wide">
              <div v-show="index===kindergartenActive3" class="select"></div>
            </div>
          </div>
        </div>
        <div class="content">
          <div
            v-for="(item,index) in Poverty.culturalLife.tableCulturalLife.tableFarmingInfrastructure.data[0]"
            v-if="kindergartenActive3 === index"
            class="content">
            <span class="blur-bar">包头市</span>
            <span class="subtitle">{{item.lable}}</span>
            <div class="hotmap" id="culturalLife"></div>
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
    multiBarChartHorizontal,
    multiBarChartHorizontal2,
    multiBarChartHorizontal3,
    multiBarChartHorizontal4,
    multiBarChartHorizontalRR,
    brainPieChartCircle4,
    brainPieChartCircle2,
    brainSingleBarChart2,
    brainSingleBarChart,
    brainPieChartCircle
  } from '../../charts/rural-charts';
  import {pieChartY} from "../../charts/h5-chart";
  import {barChart} from '../../charts/h5-chart';
  // import {heatChart} from './echerts';
  export default {
    name: "preschool-education",
    props: {
      Poverty: {
      }
    },
    data() {
      return {
        kindergartenActive: 0,
        kindergartenActive2: 0,
        kindergartenActive3: 0,
        mindTabList: [],
        culturalList: [],
        pieAdjust: {
          titleNoFixed: true,
          textLeft: 80,
          legendX: '60%',
        },
        pieAdjust2: {
          titleNoFixed: false,
          textLeft: 130,
          legendX: '55%',
        }
      }
    },
    mounted() {
      this.initWin();
    },
    methods: {
      initWin() {
        this.mindTabList = [
          this.Poverty.ideological.tableIdeological.tableFarmingInfrastructure.data[0][0].lable.replace('文明村','\n文明村'),
          this.Poverty.ideological.tableIdeological.tableFarmingInfrastructure.data[0][1].lable.replace('文明村','\n文明村'),
          this.Poverty.ideological.tableIdeological.tableFarmingInfrastructure.data[0][2].lable.replace('少年宫','\n少年宫')
        ]
        this.culturalList = [
          this.Poverty.culturalLife.tableCulturalLife.tableFarmingInfrastructure.data[0][0].lable.replace('乡镇','\n乡镇'),
          this.Poverty.culturalLife.tableCulturalLife.tableFarmingInfrastructure.data[0][1].lable.replace('覆盖率','\n覆盖率'),
          this.Poverty.culturalLife.tableCulturalLife.tableFarmingInfrastructure.data[0][2].lable.replace('年平均','\n年平均'),
          this.Poverty.culturalLife.tableCulturalLife.tableFarmingInfrastructure.data[0][3].lable.replace('月平均','\n月平均'),
        ]
        this.Poverty.specialCulture.culturalAncestralHall.data.containLabel = true;
        this.Poverty.specialCulture.culturalAncestralHall.data.gridTop = '10%';
        this.Poverty.specialCulture.culturalAncestralHall.data.gridBottom = '5%';
        this.Poverty.ideological.villageTownRate.data.containLabel = true;
        this.Poverty.ideological.villageTownRate.data.gridTop = '12%';
        this.Poverty.ideological.villageTownRate.data.gridBottom = '8%';
        // console.log('31312313小明',this.zz);
        // this.tabData[0].data.teacher.chart.colorList = ['rgb(26, 121, 200)', 'rgb(57, 199, 127)'];
        // this.tabData[0].data.teacher.chart.colorStop = ['rgba(26, 121, 200, 1)', 'rgba(26, 121, 200, 0)', 'rgba(57, 199, 127, 1)', 'rgba(57, 199, 127, 0)'];
        // this.tabData[0].data.teacher.chart.legendShow = true;
        // ecologicalLineChart('teacher', this.tabData[0].data.teacher.chart);
        // ecologicalLineChart('teacher2', this.tabData[0].data.teacher.chart);
        // ecologicalLineChart('teacher3', this.tabData[0].data.teacher.chart);
        setTimeout(() => {
          this.switchKindergartenTab(0);
          this.switchKindergartenTab2(0);
          this.switchKindergartenTab3(0);
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
          pieChartY('ideological',this.Poverty.ideological.villageTown.data.series[0].data, this.pieAdjust);
        } else if (this.kindergartenActive === 1) {
          barChart('ideological',this.Poverty.ideological.villageTownRate.data)
        }else {
          pieChartY('ideological',this.Poverty.ideological.childrensPalace.data.series[0].data, this.pieAdjust);
        }
      },
      /*侨乡文化*/
      switchKindergartenTab2(index) {
        this.kindergartenActive2 = index;
        if (this.kindergartenActive2 === 0) {
          barChart('special',this.Poverty.specialCulture.culturalAncestralHall.data);
        } else if (this.kindergartenActive2 === 1) {

          pieChartY('special',  this.Poverty.specialCulture.experimentalArea.data.series[0].data, this.pieAdjust)
        }else if (this.kindergartenActive2 === 2) {
          pieChartY('special',this.Poverty.specialCulture.culturalBrand.data.series[0].data, this.pieAdjust)
        }else if (this.kindergartenActive2 === 3){

          pieChartY('special', this.Poverty.specialCulture.cultureIndustry.data.series[0].data, this.pieAdjust2)
        }else if (this.kindergartenActive2 ===4){
          pieChartY('special', this.Poverty.specialCulture.touristsNumber.data.series[0].data, this.pieAdjust2)
        }else {
          pieChartY('special', this.Poverty.specialCulture.tourismRevenue.data.series[0].data, this.pieAdjust2)
        }
      },
      /*乡村文化生活*/
      switchKindergartenTab3(index) {
        this.kindergartenActive3 = index;
        if (this.kindergartenActive3 === 0) {
          multiBarChartHorizontal3('culturalLife',this.Poverty.culturalLife.culturalStationsRate.data);
        } else if (this.kindergartenActive3 === 1) {
          multiBarChartHorizontal3('culturalLife', this.Poverty.culturalLife.serviceCenterRate.data)
        }else if (this.kindergartenActive3 === 2) {
          multiBarChartHorizontal4('culturalLife',this.Poverty.culturalLife.performances.data)
        }else {
          multiBarChartHorizontal4('culturalLife', this.Poverty.culturalLife.moviesPlaying.data)
        }
      },
    },
  }

</script>

