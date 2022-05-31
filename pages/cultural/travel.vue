<style lang="less" scoped>
  @import url("../common-class.less");
   .sub-tab-scroll {
    width: 710rpx;
    height:120rpx;
    overflow: hidden;
    margin-left: 10rpx;
    /*position: relative;*/
  }
  .sub-tab {
    /*position: absolute;*/
    top: 20%;
    overflow-x: scroll;
    overflow-y: hidden;
    height: 100%;
    margin-top: 22rpx;
    display: flex;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .sub-tab-item {
    height: 66rpx;
    float: left;
    padding-left: 38rpx;
    padding-right: 38rpx;
    border: 1rpx solid #f2f2f2;
    background-color: #f2f2f2;
    border-radius: 33rpx;
    font-size: 24rpx;
    color: #000;
    line-height: 66rpx;
    margin-right: 20rpx;
    font-family: 'PingFang-SC-Bold';
  }
  .subActive {
    border-color: #1a79c8;
    color: #1c70c8;
    background-color: #e7f2ff;
  }
  .section {
    width: 750rpx;
    float: left;
    padding-bottom: 85rpx;
    &:first-child {
      padding-bottom: 0;
    }
    &:nth-child(2) {
      margin-top: -30rpx;
    }
    &:nth-child(3) {
      margin-top: -80rpx;
    }
    &:nth-child(4) {
      margin-top: -60rpx;
    }
    &:nth-child(5) {
      margin-top: -70rpx;
    }
    &:last-child {
      padding-bottom: 140rpx;
    }
    .title24 {
      line-height: 24rpx;
      font-size: 24rpx;
      font-family: 'PingFang-SC-Medium';
      color: #353535;
    }
    .title24-bold {
      line-height: 24rpx;
      font-size: 24rpx;
      font-family: 'PingFang-SC-Bold';
      color: #353535;
    }
    .title30-bold {
      line-height: 28rpx;
      font-size: 28rpx;
      font-family: 'PingFang-SC-Bold';
      color: #353535;
    }
    .title22-bold {
      line-height: 22rpx;
      font-size: 22rpx;
      font-family: 'PingFang-SC-Bold';
      color: #353535;
    }
    .title22 {
      line-height: 22rpx;
      font-size: 22rpx;
      color: #353535;
      font-family: 'PingFang-SC-Medium';
    }
    .title20 {
      line-height: 20rpx;
      font-size: 20rpx;
      color: #353535;
      font-family: 'PingFang-SC-Medium';
    }
    .address{
      line-height: 20rpx;
      font-size: 20rpx;
      color: #1c70c8;
      font-family: 'PingFang-SC-Medium';
    }
    .number50 {
      line-height: 50rpx;
      font-size: 50rpx;
      color: #353535;
      font-family: 'DIN-Medium'
    }
    .number44 {
      line-height: 44rpx;
      font-size: 44rpx;
      color: #353535;
      font-family: 'DIN-Medium'
    }
    .increaseNum {
      line-height: 22rpx;
      font-size: 22rpx;
      color: #09ab80;
      font-family: 'DIN-Medium';
      &:before {
        margin-right: -4rpx;
        content: '';
        width: 9rpx;
        height: 16rpx;
        display: inline-block;
        background: url("../../static/assets/images/h5/upup.png") no-repeat;
        background-size: 9rpx 16rpx;
      }
    }
    .decreaseNum {
      line-height: 22rpx;
      font-size: 22rpx;
      color: #ef5150;
      font-family: 'DIN-Medium';
      &::before {
        margin-right: -4rpx;
        content: '';
        width: 9rpx;
        height: 16rpx;
        display: inline-block;
        background: url("../../static/assets/images/h5/down.png") no-repeat;
        background-size: 9rpx 16rpx;
      }
    }
    .increaseIcon {
      /*width: 23rpx;*/
      /*height: 22rpx;*/
      /*display: inline-block;*/
      /*background: url("../../static/assets/images/h5/increase-icon.png") no-repeat;*/
      /*background-size: 23rpx 22rpx;*/
      display: inline-block;
      position: relative;
      width:23rpx;
      height:22rpx;
      top: 3rpx;
      left: 0rpx;
      background: url("../../static/assets/images/h5/compareUp.png") no-repeat;
      background-size: 23rpx 22rpx;
    }
    .decreaseIcon {
      /*width: 23rpx;*/
      /*height: 22rpx;*/
      /*display: inline-block;*/
      /*background: url("../../static/assets/images/h5/decrease.png") no-repeat;*/
      /*background-size: 23rpx 22rpx;*/
      display: inline-block;
      position: relative;
      width:23rpx;
      height:22rpx;
      top: 3rpx;
      left: 0rpx;
      background: url("../../static/assets/images/h5/decrease.png") no-repeat;
      background-size: 23rpx 22rpx;
    }
    // 副标题-包头市
    .blue-bar {
      width: 106rpx;
      height: 36rpx;
      background-color: #1a79c8;
      border-radius: 18rpx;
      line-height: 36rpx;
      float: left;
      font-size: 22rpx;
      margin: 40rpx 0 0 26rpx;
      color: white;
      text-align: center;
      font-family: 'PingFang-SC-Medium';
    }
    // 副标题-文本
    .subtitle-text {
      float: left;
      color: #353535;
      font-size: 26rpx;
      margin: 40rpx 0 0 10rpx;
      text-align: center;
      font-family: 'PingFang-SC-Bold';
    }
    .shadow {
      float: left;
      box-shadow: 0 0 12rpx rgba(129, 129, 129, 0.25);
      border-radius:  6rpx;
    }
    .slide-box-without-scrollbar {
      float: left;
      width: 750rpx;
      overflow-y: visible;
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
    .tab-box-one-row {
      width: 692rpx;
      height: 115rpx;
      box-shadow: 0 0 12rpx rgba(129, 129, 129, 0.25);
      border-radius: 8rpx;
      margin: 0 auto;
      line-height: 115rpx;
      text-align: left;
      .name {
        font-family: 'PingFang-SC-Medium';
        font-size: 24rpx;
        color: #1c1c1c;
        width: 360rpx;
        text-align: left;
        float: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        &:before {
          content: '';
          background: url("../../static/assets/images/h5/cultural-travel-icon.png") no-repeat;
          background-size: 64rpx;
          width: 64rpx;
          height: 64rpx;
          margin: 25rpx 22rpx;
          display: block;
          float: left;
        }
      }
      .number {
        width: 300rpx;
        height: 115rpx;
        font-size: 50rpx;
        float: left;
        font-family: 'DIN-Medium';
        margin: 0;
        line-height: 115rpx;
      }
      .unit {
        font-size: 24rpx;
        font-family: 'PingFang-SC-Regular';
        margin-left: -10rpx;
      }
      .green-img {
        display: inline-block;
        position: relative;
        width:23rpx;
        height:22rpx;
        top: 3rpx;
        left: 11rpx;
        background: url("../../static/assets/images/h5/compareUp.png") no-repeat;
        background-size: 23rpx 22rpx;
      }
      .increase-span {
        color: #09AB80;
        font-size: 22rpx;
        position: relative;
        left: 14rpx;
        &:before {
          content: '';
          width: 9rpx;
          height: 16rpx;
          display: inline-block;
          background: url("../../static/assets/images/h5/up-arrow.png") no-repeat;
          background-size: 9rpx 16rpx;
        }
      }
      .redImg {
        content: '';
        width: 24rpx;
        height: 22rpx;
        display: inline-block;
        background: url("../../static/assets/images/h5/compareDown.png") no-repeat;
        background-size: 24rpx 22rpx;
      }
      .decreaseSpan {
        color: #EF5150;
        &:before {
          content: url("../../static/assets/images/h5/down-arrow.png");
        }
      }
    }
    .tourist {
      width: 750rpx;
      float: left;
      .charts-bar {
        float: left;
        height: 450rpx;
        width:750rpx;
      }
      .chart-pie {
        float: left;
        height: 450rpx;
        width:750rpx;
        margin-top: -23rpx;
      }
    }
    .income {
      width: 750rpx;
      float: left;
      .tab-box {
        width: 692rpx;
        height:  182rpx;
        float: left;
        margin-left: 30rpx;
        .tab {
          width: 224rpx;
          height: 192rpx;
          float: left;
          text-align: center;
          .title-box {
            width: 100%;
            float: left;
            margin-top: 39rpx;
          }
          .data-box {
            margin-top: 13rpx;
            width: 100%;
            float: left;
          }
          .change-box {
            margin-top: 10rpx;
            width: 100%;
            height: 30rpx;
            float: left;
            .data-adj {
              margin: 0 0 0 5rpx;
            }
          }
        }
        .includeArray {
          float: left;
          height:121rpx;
          width: 12rpx;
          margin-top: 35rpx;
          background: url("../../static/assets/images/h5/include-array.png") no-repeat;
          background-size: 100% 100%;
        }
        .split {
          float: left;
          width: 1rpx;
          height: 121rpx;
          background-color: #d2d2d2;
          margin-top: 34rpx;
        }
      }
      .chart-bar {
        float: left;
        margin-top: 10rpx;
        height: 450rpx;
        width:750rpx;
      }
      .chart-map {
        float: left;
        height: 750rpx;
        margin-top: -70rpx;
        width: 100%;
      }
    }
    .company {
      float: left;
      width: 100%;
      .box {
        float: left;
        width: 704rpx;
        height: 144rpx;
        margin-left: 30rpx;
        text-align: center;
        .tab {
          float: left;
          width: 334rpx;
          height: 144rpx;
          text-align: center;
          margin-right: 18rpx;
          &:last-child {
            margin-right: 0;
          }
        }
        .label-adj {
          margin: 29rpx 0 0 0;
        }
        .data-box {
          width: 100%;
          margin-top: 7rpx;
          float: left;
          text-align: center;
        }
      }
      .chart-bar {
        float: left;
        margin-top: 10rpx;
        height: 450rpx;
        width:750rpx;
      }
    }
    .facility {
      width: 100%;
      float: left;
      .tab {
        float: left;
        width: 334rpx;
        height: 144rpx;
        text-align: center;
        margin-right: 18rpx;
        &:last-child {
          margin-right: 30rpx;
        }
        &:first-child {
          margin-left: 30rpx;
        }
        .label-adj {
          margin: 29rpx 0 0 0;
        }
        .data-box {
          width: 100%;
          margin-top: 7rpx;
          float: left;
          text-align: center;
        }
      }
      .chart-pie {
        float: left;
        height: 450rpx;
        width:750rpx;
        margin-top: -13rpx;
      }
    }
    .scenic {
      float: left;
      width: 750rpx;
      .content {
        width: 750rpx;
        float: left;
        margin-top: 40rpx;
        &:first-child {
          margin-top: 8rpx;
        }
        .pic {
          width: 391rpx;
          height: 294rpx;
          float: left;
          margin-left: 25rpx;
        }
        .text {
          width: 280rpx;
          float: left;
          margin-left: 24rpx;
          .label {
            color: #2d8cf0;
            float: left;
            padding: 10rpx 0 20rpx 0;
          }
          .detail {
            line-height: 30rpx;
            float: left;
          }
        }
        .scenic-pic1 {
          width: 391rpx;
          height: 294rpx;
          float: left;
          background: url("../../static/assets/images/h5/scenic-pic1.jpg") no-repeat;
          background-size: 391rpx 294rpx;
        }
        .scenic-pic2 {
          width: 391rpx;
          height: 294rpx;
          float: left;;
          background: url("../../static/assets/images/h5/scenic-pic2.jpg") no-repeat;
          background-size: 391rpx 294rpx;
        }
        .scenic-pic3 {
          width: 391rpx;
          height: 294rpx;
          float: left;;
          background: url("../../static/assets/images/h5/scenic-pic3.jpg") no-repeat;
          background-size: 391rpx 294rpx;
        }
      }
    }
    .green {
      border-top: solid 4rpx #09ab80;
      background-color: #edf9f5;
    }
    .blue {
      border-top: solid 4rpx #1a79c8;
      background-color: #f6f9fd;
    }
    .orange {
      border-top: solid 4rpx #f0993c;
      background-color: #fdfaf7;
    }
    .marginTop-10 {
      margin-top: -10rpx;
    }
    .marginTop54 {
      margin-top: 54rpx !important;
    }
  }
</style>

<template>
  <div class="main">
    <!--旅游人数-->
    <div id="1stTab" class="section">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">旅游人数</span>
      </div>
      <div class="tourist">
        <div v-if="tourist.detail" class="tab-box-one-row">
          <span class="name">{{tourist.detail[0].label}}</span>
          <p class="number">{{tourist.detail[0].value}}
            <span class="unit">{{tourist.detail[0].unit}}</span>
            <span
              class="green-img"
              :class="{redImg:tourist.detail[1].value<0}"></span>
            <span class="increase-span" :class="{decreaseSpan:tourist.detail[1].value<0}">{{tourist.detail[1].value}}%</span>
          </p>
        </div>
        <span class="blue-bar">2019年</span>
        <span class="subtitle-text">接待游客历史趋势</span>
        <div class="charts-bar" id="touristBar"></div>
        <span class="blue-bar">2019年</span>
        <span class="subtitle-text">接待游客类型</span>
        <div class="charts-bar" id="touristPieUp"></div>
        <span class="blue-bar marginTop-10">2019年</span>
        <span class="subtitle-text marginTop-10">接待游客来源</span>
        <div class="charts-bar" id="touristPieDown"></div>
      </div>
    </div>
    <!--旅游收入-->
    <div id="2ndTab" class="section">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">旅游收入</span>
      </div>
      <div class="income">
        <div class="tab-box shadow">
          <div v-for="(item,index) in income.detail">
            <div v-if="index!==1" class="tab">
              <div class="title-box title24" :class="{marginTop54: index!==0}">
                {{item.label}}
              </div>
              <div class="data-box">
                <span class="number44">{{item.value}}</span>
                <span class="title24">{{item.unit}}</span>
              </div>
              <div v-if="index===0" class="change-box">
                <span
                  :class="{increaseIcon: income.detail[index+1].value>=0,decreaseIcon: income.detail[index+1].value<0}"
                ></span>
                <span
                  :class="{increaseNum: income.detail[index+1].value>=0,decreaseNum: income.detail[index+1].value<0}"
                  class="data-adj">
                {{income.detail[index+1].value+income.detail[index+1].unit}}
                </span>
              </div>
            </div>
            <div v-if="index===0" class="includeArray"></div>
            <div v-if="index===2" class="split"></div>
          </div>
        </div>
        <div class="chart-bar" id="incomeBar"></div>
        <span class="blue-bar">2019年</span>
        <span class="subtitle-text">各市区旅游收入</span>
        <div class="chart-map" id="incomeMap"></div>
      </div>
    </div>
    <!--旅游机构-->
    <div id="3rdTab" class="section">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">旅游机构</span>
      </div>
      <div class="company">
        <div class="box">
          <div v-for="(eItem,eIndex) in company.detail"
               :class="{green: eIndex%3===0, blue: eIndex%3===1, orange: eIndex%3===2}"
               class="tab">
            <div class="title24 label-adj">{{eItem.label}}</div>
            <div class="data-box">
              <span class="number50">{{eItem.value}}</span>
              <span class="title24">{{eItem.unit}}</span>
            </div>
          </div>
        </div>
        <div class="chart-bar" id="companyBar"></div>
      </div>
    </div>
    <!--旅游设施-->
    <div id="4thTab" class="section">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">旅游设施</span>
      </div>
      <div class="facility">
        <div class="slide-box-without-scrollbar">
          <div class="slide">
            <div v-for="(eItem,eIndex) in facility.detail"
                 :class="{green: eIndex%3===0, blue: eIndex%3===1, orange: eIndex%3===2}"
                 class="tab">
              <div class="title24 label-adj">{{eItem.label}}</div>
              <div class="data-box">
                <span class="number50">{{eItem.value}}</span>
                <span class="title24">{{eItem.unit}}</span>
              </div>
            </div>
          </div>
        </div>
        <span class="blue-bar">2019年</span>
        <span class="subtitle-text">旅游宾馆：按星级分</span>
        <div class="chart-pie" id="facilityPie"></div>
      </div>
    </div>
    <!--旅游景点-->
    <div id="5thTab" class="section">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">旅游景点</span>
      </div>
      <div class="sub-tab-scroll">
        <div class="sub-tab">
          <div v-for="(item,index) in titleList" class="sub-tab-item"
          :class="item.selected ? 'subActive':''"
                @click="selectTab(item.name)">{{item.name}}</div>
          </div>
      </div> 
      <div class="scenic">
        <div v-for="item in scenic" class="content">
          <div :class="item.pic" class="pic"></div>
          <div class="text">
            <div class="label title30-bold">{{item.label}}</div>
            <div class="detail address">地址:{{item.address}}</div>
            <div class="detail title20">{{item.detail}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {barChart,pieChartY,pileBarAndLineChart,drawJmHotMap,LineAndBarChart,twoBarStackChart,agricultureLineAndBarChart} from "../../charts/h5-chart";
  import {getDataScenic} from "../../api/h5-chart";
  export default {
    name: "travel",
    props: ['tabData'],
    data() {
      return {
        touristName: '',
        tourist: {},
        income: {},
        company: {},
        facility: {},
        titleList:[{name:'蓬江区'},{name:'江海区'},{name:'新会区'},{name:'开平市'},{name:'恩平市'},{name:'台山市'}
        ,{name:'鹤山市'}],
        scenic: [
          {
            pic: 'scenic-pic1',
            label: '古迹·开平碉楼',
            address:' 包头市开平市塘口镇立园内',
            detail: '拥有世界文化遗产开平碉楼与村落，入选2018年首批申遗遗产点名单的圣方济各墓园、以及崖门炮台、陈白沙祠、梁启超故居等文化古迹。'
          },
          {
            pic: 'scenic-pic2',
            label: '温泉·恩平锦江温泉',
            address:'包头市恩平市大田镇276省道旁',
            detail: '享有“温泉之乡”的美誉，拥有国家4A级旅游景区新会古兜温泉旅游度假村，以及恩平锦江温泉、颐和温泉等众多知名温泉。'
          },
          {
            pic: 'scenic-pic3',
            label: '海岛·台山川岛',
            address:'包头市台山市西南部',
            detail: '大陆海岸线长约420公里，占全省的1/10；海岛岸线长约400公里，约占全省1/6。大小海盗561个，数量居全省第二，总面积249.97平方公里。其中台山上（下）川岛为广东第一大岛，誉为“东方夏威夷”。'
          },
        ]
      }
    },
    watch: {
      'tabData.data': function (newValue, oldValue) {
        this.initWin();
      }
    },
    methods: {
      initWin() {
        console.log(this.tabData);
        // 旅游人数
        this.touristName = this.tabData.data[0].name || '';
        this.tourist = this.tabData.data[0].data.people || {};
        this.tourist.chart[0].yNameShow = true;
        this.tourist.chart[0].containLabel = true;
        let pieAdjust = {
          legendX: '55%',
          textLeft: 180
        }
        // 旅游收入
        this.income = this.tabData.data[1].data.income || {};
        this.income.chart[0].gridBottom = '10%';
        // 旅游机构
        this.company = this.tabData.data[2].data.company || {};
        this.company.chart.containLabel = true;
        this.company.chart.gridBottom = 60;
        this.company.chart.legendRight = '100';
        // 旅游设施
        this.facility = this.tabData.data[3].data.facility || {};
        let pieAdjustFacility = {
          legendX: '65%',
          textLeft: 50,
          textRight: 20,
          titleNoFixed: true
        }
        this.$nextTick(() => {
          barChart('touristBar', this.tourist.chart[0]);
          pieChartY('touristPieUp',this.tourist.chart[1].series[0].data,pieAdjust);
          pieChartY('touristPieDown',this.tourist.chart[2].series[0].data,pieAdjust);
          twoBarStackChart('incomeBar',this.income.chart[0]);
          drawJmHotMap('incomeMap',this.income.chart[1][0]);
          agricultureLineAndBarChart('companyBar',this.company.chart);
          pieChartY('facilityPie',this.facility.chart.series[0].data,pieAdjustFacility);
        })
      },
      selectTab(value){
        console.log('value',value)
        this.titleList.forEach(ele=>{
          if(value == ele.name){
             this.$set(ele,'selected',true)
            }else{
              this.$set(ele,'selected',false);
            }
          })
         
          getDataScenic({},res=>{
            console.log('params',res.data)
          })

        },
        
    }
  }
</script>

