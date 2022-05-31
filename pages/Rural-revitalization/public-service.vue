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
    float: left;
    .title {
      float: left;
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
    .content {
      height: max-content;
    }
    .hotmap {
      width: 100%;
      height: 700rpx;
      float: left;
    }
  }
  .content-kindergarten3 {
    width: 750rpx;
    float: left;
    text-align: center;
    height: max-content;
    margin-top: -60rpx;
    .tab-box-one-line{
      margin-top:20rpx ;
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
  .content-kindergarten1 {
    float: left;
    width: 750rpx;
    text-align: center;
    height: max-content;
    margin-top: -50rpx;
    &:last-child {
      padding-bottom: 70rpx;
    }
    .tab-box-one-line{
      margin-top: 20rpx;
      height: 340rpx;

    }
    .three-tab{
      height: 120rpx;
      padding-top: 0rpx;
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
  .unit {
    font-size: 24rpx;
    font-family: "PingFang-SC-Medium";
    text-align: center;
    line-height: 44rpx;
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
  .content-kindergarten {
    width: 750rpx;
    text-align: center;
    height: 870rpx;
    /*.tab-box-one-line{*/
    /*  margin-top: 20rpx;*/
    /*}*/
    .content {
      height: 925rpx;
    }
    .hotmap {
      width: 100%;
      height: 700rpx;
      float: left;
    }
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
  .three-tab {
    width: 231rpx;
    /*flex: 1;*/
    height:150rpx;
    /*padding-top: 40rpx;*/
    float:left;
    &:last-child {
      .splitLine {
        background-color: #fff;
      }
    }
    .tab-with-line {
      width: 230rpx;
      /*flex: 1;*/
      height:150rpx;
      float:left;
    }
  }
  .three-tab1{
    padding-top: 32rpx;
    width:33.3%;
    /*flex: 1;*/
    height:120rpx;
    display: inline-block;
    border-top: 1rpx solid #FFFFFF;
    /*float:left;*/
    /*padding-top: 40rpx;*/
  }

  #industrialPark{
    height: 450rpx;
  }
  #kindergarten{
  height: 450rpx;
}
  #eBusiness{
    height: 450rpx;
  }
  #education{
    height: 500rpx;
  }
  #Treatment{
    height: 500rpx;
  }
  .part-three-tab {
    margin-top: 12rpx;
    width: 750rpx;
    height: 148rpx;
    float: left;
    .tab {
      width: 210rpx;
      float: left;
      height: 144rpx;
      margin-left: 24rpx;
      border-top: solid #09ab80 4rpx;
      background-color: #edf9f5;
      &:nth-child(2) {
        margin-left: 34rpx;
        border-top: solid #1a79c8 4rpx;
        background-color: #f1f6fb;
      }
      &:nth-child(3) {
        margin-left: 34rpx;
        border-top: solid #f0993c 4rpx;
        background-color: #fcf7f2;
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
  .color-tab-box {
    width: 750rpx;
    float: left;
    margin-bottom: -10rpx;
    .select-box {
      float: left;
      width: 210rpx;
      height: 30rpx;
      &:first-child {
        margin-left: 24rpx;
      }
      &:nth-child(2) {
        margin-left: 34rpx;
      }
      &:nth-child(3) {
        margin-left: 34rpx;
      }
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
</style>

<template>
  <div class="main" >
    <div class="section-xqjy">
      <!--养老机构-->
      <div class="content-kindergarten" >
        <div class="title">
          <span class="title-icon-bar-left"></span>
          <span class="title-icon-bar-right"></span>
          <span class="title-text">养老机构</span>
        </div>
        <div class="part-three-tab">
          <div
            v-for="(item,index) in Poverty.retirementOrganization.allRetirementOrganization.data.data[0]"
            class="tab"
            @click="switchKindergartenTab(index)">
            <div class="line">
              <span class="name">{{oldLabelList[index]}}</span>
            </div>
            <div class="line">
              <span class="number">{{item.value}}</span>
              <span class="unit">{{item.unit}}</span>
            </div>
          </div>
        </div>
        <div class="part-three-arrow">
          <div v-for="(item,index) in Poverty.retirementOrganization.allRetirementOrganization.data.data[0]" class="box-arrow">
            <div v-if="index===kindergartenActive" class="arrow"></div>
          </div>
        </div>
        <div class="content">
          <div
            v-for="(item,index) in Poverty.retirementOrganization.allRetirementOrganization.data.data[0]"
            v-if="kindergartenActive === index"
            class="content">
            <span class="blur-bar">包头市</span>
            <span class="subtitle">{{item.lable}}</span>
            <div class="hotmap" id="kindergarten"></div>
          </div>
        </div>
      </div>
      <!--儿童教育-->
      <div class="content-kindergarten3" id="secondTab">
        <div class="title">
          <span class="title-icon-bar-left"></span>
          <span class="title-icon-bar-right"></span>
          <span class="title-text">儿童教育</span>
        </div>
        <div class="part-three-tab">
          <div
            v-for="(item,index) in Poverty.childRearing.allChildRearing.data.data[0]"
            class="tab"
            @click="switchKindergartenTab2(index)">
            <div class="line">
              <span class="name">{{childLabelList[index]}}</span>
            </div>
            <div class="line">
              <span class="number">{{item.value}}</span>
              <span class="unit">{{item.unit}}</span>
            </div>
          </div>
        </div>
        <div class="part-three-arrow">
          <div v-for="(item,index) in Poverty.retirementOrganization.allRetirementOrganization.data.data[0]" class="box-arrow">
            <div v-if="index===kindergartenActive2" class="arrow"></div>
          </div>
        </div>
        <div class="content">
          <div
            v-for="(item,index) in Poverty.childRearing.allChildRearing.data.data[0]"
            v-if="kindergartenActive2 === index"
            class="content">
            <span class="blur-bar">包头市</span>
            <span class="subtitle">{{item.lable}}</span>
            <div class="hotmap" id="industrialPark"></div>
          </div>
        </div>
      </div>
      <!--社会救助-->
      <div class="content-kindergarten3" id="secondTab2">
        <div class="title">
          <span class="title-icon-bar-left"></span>
          <span class="title-icon-bar-right"></span>
          <span class="title-text">社会救助</span>
        </div>
        <div class="part-three-tab">
          <div
            v-for="(item,index) in Poverty.socialAssistance.allSocialAssistance.data.data[0]"
            class="tab"
            @click="switchKindergartenTab3(index)">
            <div class="line">
              <span class="name">{{socialLabelList[index]}}</span>
            </div>
            <div class="line">
              <span class="number">{{item.value}}</span>
              <span class="unit">{{item.unit}}</span>
            </div>
          </div>
        </div>
        <div class="part-three-arrow">
          <div v-for="(item,index) in Poverty.retirementOrganization.allRetirementOrganization.data.data[0]" class="box-arrow">
            <div v-if="index===kindergartenActive3" class="arrow"></div>
          </div>
        </div>
        <div class="content">
          <div
            v-for="(item,index) in Poverty.socialAssistance.allSocialAssistance.data.data[0]"
            v-if="kindergartenActive3 === index"
            class="content">
            <span class="blur-bar">包头市</span>
            <span class="subtitle">{{item.lable}}</span>
            <div class="hotmap" id="eBusiness"></div>
          </div>
        </div>
      </div>
      <!--教育-->
      <div class="content-kindergarten3" id="secondTab3">
        <div class="title">
          <span class="title-icon-bar-left"></span>
          <span class="title-icon-bar-right"></span>
          <span class="title-text">教育</span>
        </div>
        <div class="part-three-tab">
          <div
            v-for="(item,index) in Poverty.education.allEducation.data.data[0]"
            class="tab">
            <div class="line">
              <span class="name">{{item.lable}}</span>
            </div>
            <div class="line">
              <span class="number">{{item.value}}</span>
              <span class="unit">{{item.unit}}</span>
            </div>
          </div>
        </div>
        <div
          class="content">
          <span class="blur-bar">包头市</span>
          <div class="hotmap" id="education"></div>
        </div>
      </div>
      <!--医疗-->
      <div class="content-kindergarten1" id="secondTab4">
        <div class="title">
          <span class="title-icon-bar-left"></span>
          <span class="title-icon-bar-right"></span>
          <span class="title-text">医疗</span>
        </div>
        <div class="color-tab-box">
          <div
            v-for="(item,index) in Poverty.medicalTreatment.allMedicalTreatment.data.data[0].slice(0,3)"
            @click="switchKindergartenTab5(index)"
            :class="{tabGreenDouble: index===0, tabBlueDouble: index===1, tabYellowDouble: index===2}">
            <div
              class="color-tab-double-up">
              <span class="name-color">{{medicalUpLabelList[index]}}</span><br/>
              <span class="number-color">{{item.value}}</span>
              <span class="unit-color">{{item.unit}}</span>
            </div>
            <span :class="{splitLineGreen: index===0, splitLineBlue: index===1, splitLineYellow: index===2}"></span>
            <div
              class="color-tab-double-down">
              <span class="name-color">{{medicalDownLabelList[index]}}</span><br/>
              <span class="number-color-down">{{Poverty.medicalTreatment.allMedicalTreatment.data.data[0][index+3].value}}</span>
              <span class="unit-color">{{Poverty.medicalTreatment.allMedicalTreatment.data.data[0][index+3].unit}}</span>
            </div>
          </div>
          <div class="color-tab-box">
            <div v-for="(item,index) in Poverty.medicalTreatment.allMedicalTreatment.data.data[0].slice(0,3)" class="select-box">
              <div v-if="kindergartenActive5===index" class="select"></div>
            </div>
          </div>
        </div>
        <div class="content">
          <div
            v-for="(item,index) in Poverty.medicalTreatment.allMedicalTreatment.data.data[0].slice(0,3)"
            v-if="kindergartenActive5 === index"
            class="content">
            <span class="blur-bar">包头市</span>
            <span class="subtitle">{{item.lable}}</span>
            <div class="hotmap" id="Treatment"></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  // import {drawJmMap, ecologicalLineChart} from '../../charts/h5-chart';
  import {pieChartY} from "../../charts/h5-chart";
  import {
    drawJmMap,
    brainLineAndBarChartFour2,
    brainLineAndBarChartFourmenoyinf,
    brainLineAndBarChartFourmenoypublic,
    multiBarChartHorizontal,
    multiBarChartHorizontal2,
    multiBarChartHorizontal3,
    multiBarChartHorizontal4,
    brainPieChartCircle,
    brainPieChartNew,
    brainPieChartCircle1,
    barChartForBusiness,
    brainPieChartCircle2,
    brainSingleBarChart
  } from '../../charts/rural-charts';
  // import {heatChart} from './echerts';
  import {remToPx} from '../../libs/util'
  export default {
    name: "preschool-education",
    props: {
      Poverty: {
        // type: Array,
        // default: {}
      }
    },
    data() {
      return {
        // 幼儿园
        kindergartenActive: 0,
        kindergartenActive2: 0,
        kindergartenActive3: 0,
        kindergartenActive4: 0,
        kindergartenActive5: 0,
        oldLabelList: ['乡村养老机构数','机构现有老人数','机构分布'],
        childLabelList: ['福利院','福利院现有儿童数','福利院分布'],
        socialLabelList: ['乡村社会救助站','救助站救助人数','救助站分布'],
        medicalUpLabelList: ['乡村二级医院','健康服务站','自助式健康监测室'],
        medicalDownLabelList: ['医院分布','健康服务站','监测室分布'],
        pieAdjust: {
          titleNoFixed: true,
          textLeft: 80,
          legendX: '60%',
        },
        pieAdjust2: {
          titleNoFixed: true,
          textLeft: 100,
          legendX: '60%',
        }
      }
    },
    mounted() {
      this.initWin();
    },
    methods: {
      initWin() {
        this.Poverty.retirementOrganization.organizationDistribution.data.gridBottom = remToPx(80/75)
        this.Poverty.retirementOrganization.organizationDistribution.data.gridTop = remToPx(50/75)
        this.Poverty.childRearing.welfareDistribution.data.gridBottom = remToPx(80/75)
        this.Poverty.childRearing.welfareDistribution.data.gridTop = remToPx(50/75)
        this.Poverty.socialAssistance.rescueStationDistribution.data.gridBottom = remToPx(80/75)
        this.Poverty.socialAssistance.rescueStationDistribution.data.gridTop = remToPx(50/75)
        this.switchKindergartenTab(0);
        this.switchKindergartenTab2(0);
        this.switchKindergartenTab3(0);
        // this.switchKindergartenTab4(0);
        this.switchKindergartenTab5(0);
        this.get()
      },
    get(){
      this.$nextTick(() => {
        brainLineAndBarChartFourmenoyinf('education', this.Poverty.education.enrollmentRate.data);
      });

    },
      switchKindergartenTab(index) {
        this.kindergartenActive = index;
        if (this.kindergartenActive === 0) {
          pieChartY('kindergarten',this.Poverty.retirementOrganization.institutionsNumber.data.series[0].data, this.pieAdjust2);
        } else if (this.kindergartenActive === 1) {
          pieChartY('kindergarten', this.Poverty.retirementOrganization.oldMan.data.series[0].data, this.pieAdjust2)
        }else {
          barChartForBusiness('kindergarten', this.Poverty.retirementOrganization.organizationDistribution.data)
        }
      },
      /*儿童教育*/
      switchKindergartenTab2(index) {
        this.kindergartenActive2 = index;
        if (this.kindergartenActive2 === 0) {
          pieChartY('industrialPark',this.Poverty.childRearing.welfareHouse.data.series[0].data, this.pieAdjust2);
        } else if (this.kindergartenActive2 === 1) {
          pieChartY('industrialPark',this.Poverty.childRearing.childrenNumber.data.series[0].data, this.pieAdjust2);
        }else {
          barChartForBusiness('industrialPark',this.Poverty.childRearing.welfareDistribution.data);
        }
      },
      /*社会救助*/
      switchKindergartenTab3(index) {
        this.kindergartenActive3 = index;
        if (this.kindergartenActive3 === 0) {
          pieChartY('eBusiness',this.Poverty.socialAssistance.rescueStation.data.series[0].data, this.pieAdjust2);
        } else if (this.kindergartenActive3 === 1) {
          pieChartY('eBusiness',this.Poverty.socialAssistance.savedPeople.data.series[0].data, this.pieAdjust2);
        }else {
          barChartForBusiness('eBusiness', this.Poverty.socialAssistance.rescueStationDistribution.data)
        }
      },
      // switchKindergartenTab4(index) {
      //   this.kindergartenActive4 = index;
      //   if (this.kindergartenActive4 === 0) {
      //     brainLineAndBarChartFour2('education', this.Poverty.education.enrollmentRate.data);
      //   } else if (this.kindergartenActive4 === 1) {
      //     var poorVillages = this.Poverty.education.ruralKindergarten.data;
      //     poorVillages.limitList=[120,90,50];
      //     drawJmMap('education', poorVillages)
      //   }else {
      //     var poorPeople = this.Poverty.education.kindergartensDistribution.data;
      //     poorPeople.limitList=[4,2,1.5];
      //     drawJmMap('education', poorPeople)
      //   }
      // },
      switchKindergartenTab5(index) {
        this.kindergartenActive5 = index;
        if (this.kindergartenActive5 === 0) {
          brainLineAndBarChartFourmenoyinf('Treatment',this.Poverty.medicalTreatment.secondClassHospital.data);
        } else if (this.kindergartenActive5 === 1) {

          brainLineAndBarChartFourmenoyinf('Treatment',this.Poverty.medicalTreatment.healthServiceStation.data);
        }else {
          brainLineAndBarChartFourmenoypublic('Treatment',this.Poverty.medicalTreatment.selfServiceRoom.data);
        }
      },
    },
  }

</script>

