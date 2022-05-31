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
      width: 100%;
      float: left;
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
    float: left;
    width: 750rpx;
    text-align: center;
    height: max-content;
    padding-bottom: 15rpx;
    .content {
      height: max-content;
      float: left;
    }
    .tab-box-one-line{
      width: 698rpx;
      height: 144rpx;
      box-shadow: none;
      display: flex;
      justify-content: space-around;
      .three-tab:nth-child(1){
        background: #edf9f7;
        text-align: center;
        border-top: 4rpx solid #09ab80;
      }
      .three-tab:nth-child(2){
        background: #f1f6fb;
        text-align: center;
        border-top: 4rpx solid #1a79c8;
      }
      .three-tab:nth-child(3){
        background: #fcf7f2;
        text-align: center;
        border-top: 4rpx solid #f0993c;
      }
    }
    .three-tab{
      width: 210rpx;
      height: 144rpx;
      padding-top: 0rpx;
      .tab-with-line {
        width: 210rpx;
        /*flex: 1;*/
        padding-top: 35rpx;
        height:136rpx;
        float:left;
      }
      .no-split-line {
        /*float: right;*/
        width:210rpx;
        height: 20rpx;
        margin-top: -20rpx;
      }
    }
    .hotmap {
      width: 100%;
      height: 700rpx;
      float: left;
    }
  }
  .content-kid {
    width: 750rpx;
    /*text-align: center;*/
    height: max-content;
    float: left;
    padding-bottom: 15rpx;
    .tab-box-one-line{
      float: left;
      margin-top:20rpx;
      .two-tab1{
        width: 350rpx;
        float: left;
        /*padding: 40rpx 0rpx 0rpx 20rpx;*/
        border-right: 1rpx solid #dfe8f1;
        /*padding: 40rpx 0rpx 0rpx 40rpx;*/
        margin: 40rpx 0rpx 0rpx 50rpx;
      }
      .two-tab2{
        width: 240rpx;
        padding: 40rpx 0rpx 0rpx 40rpx;
        float: left;
        background: url("../../static/assets/img/echerts.png") no-repeat 110rpx 45rpx ;
        background-size: 130rpx  50%;
      }
    }
    .content {
      float: left;
      width: 750rpx;
      height: max-content;
    }
    .charts {
      float: left;
      width: 100%;
      height: 450rpx;
      float: left;
    }
  }
  .content-kid1{
    width: 750rpx;
    text-align: center;
    height: max-content;
    float: left;
    padding-bottom: 15rpx;
    .tab-box-one-line{
      margin-top: 20rpx;
      height: 115rpx;
      float: left;
      .weifang{
        display: flex;
        height: 115rpx;
        line-height: 115rpx;
        font-size: 24rpx;
        font-family: "PingFang-SC-Medium";
        text-align: center;
        justify-content: space-around;
        background: url("../../static/assets/rural/weifanggaizao.png") no-repeat 20rpx;
        background-size: 60rpx 60rpx;
        .weifangname{
          padding-left: 26rpx;
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
    .content {
      width: 100%;
      height: max-content;
      float: left;
    }
    .charts {
      width: 100%;
      height: 500rpx;
      float: left;
    }
  }
  .content-water {
    width: 750rpx;
    float: left;
    text-align: center;
    height: max-content;
    padding-bottom: 15rpx;
    .weifangname{
      padding-left: 60rpx;
      float: left;
      /*background: red;*/
    }
    .tab-box-one-line{
      float: left;
      height: 115rpx;
      margin-top: 20rpx;
      .weifang1{
        /*background: red;*/
        line-height: 115rpx;
      }

    }
    .title-img{
      width: 120rpx;
      height: 80rpx;
      background: red;
      float: left;
      margin: 25rpx 0rpx 0 13rpx;
      font-family: 'PingFang-SC-Medium';
      font-size: 34rpx;
    }
    .content {
      float: left;
      width: 100%;
      height: max-content;
    }
    .charts {
      float: left;
      width: 100%;
      height: 500rpx;
      float: left;
    }
  }
  .content-water1 {
    width: 750rpx;
    float: left;
    text-align: center;
    height: max-content;
    padding-bottom: 15rpx;
    .weifang1{
      /*background: red;*/
      line-height: 115rpx;
    }
    .weifang2{
      line-height: 115rpx;
      .weifangname{
      padding-left: 0rpx;
      line-height: 115rpx;
      /*background: red;*/
    }
    }
    .weifangname{
      padding-left:10rpx;
      line-height: 115rpx;
      /*background: red;*/
    }

    .tab-box-one-line{
      height: 115rpx;
      float: left;
      margin-top: 20rpx;
    }
    .title-img{
      width: 120rpx;
      height: 80rpx;
      background: red;
      float: left;
      margin: 25rpx 0rpx 0 13rpx;
      font-family: 'PingFang-SC-Medium';
      font-size: 34rpx;
    }
    .content {
      float: left;
      height: max-content;
      width: 100%;
    }
    .charts {
      float: left;
      width: 100%;
      height: 500rpx;
      float: left;
    }
  }
  .content-Economics1 {
    float: left;
    width: 750rpx;
    text-align: center;
    height: max-content;
    padding-bottom: 15rpx;
    .tab-box-one-line{
      float: left;
      margin-top: 20rpx;
      height: 115rpx;
      .weifangname{
        padding-left:60rpx;
      }
      .weifang3{
        line-height: 115rpx;
      }
    }
    .content {
      float: left;
      width: 100%;
      height: max-content;
    }
    .charts {
      float: left;
      width: 100%;
      height: 500rpx;
      float: left;
    }
  }
  .content-kindergarten1 {
    width: 750rpx;
    float: left;
    text-align: center;
    height: 835rpx;
    padding-bottom: 10rpx;
    .tab-box-kindergarten1 {
      margin-top: 20rpx;
      float: left;
      width: 693rpx;
      height: 162rpx;
      margin-left: 29rpx;
      /*box-shadow: 0 0 12rpx rgba(129, 129, 129, 0.25);*/
      /*display: flex;*/
      float: left;
      .two-tab {
        width: 332rpx;
        /* flex: 1; */
        height: 118rpx;
        border-top: solid #1a79c8 4rpx;
        box-shadow: 0 0 12rpx rgba(129, 129, 129, 0.25);
        float: left;
        /*.no-split-line {*/
        /*!*float: right;*!*/
        /*width: 346rpx;*/
        /*height: 20rpx;*/
        /*margin-top: 40rpx;*/
        /*}*/
        .icon-left {
          width: 84rpx;
          height: 84rpx;
          float: left;
          background: url('../../static/assets/img/fupinyuan.png') no-repeat;
          background-size: 84rpx 84rpx;
          margin: 0 0 0 37rpx;
        }
        .icon-right {
          width: 84rpx;
          height: 84rpx;
          float: left;
          background: url('../../static/assets/img/fupindi.png') no-repeat;
          background-size: 84rpx 84rpx;
          margin: 0 0 0 37rpx;
        }
        &:last-child {
          margin-left: 28rpx
        }
        .detail-box {
          width: 180rpx;
          height: max-content;
          float: left;
          margin-left: 24rpx;
          .line {
            width: 100%;
            float: left;
            text-align: left;
            height: max-content;
            &:nth-child(2) {
              margin-top: 5rpx;
            }
          }
        }
      }
    }
    .part-array {
      margin: 17rpx 0 -23rpx 0;
      float: left;
      width: 750rpx;
      height: 23rpx;
      .box-array {
        float: left;
        width: 212rpx;
        height: 23rpx;
        margin-left: 91rpx;
        &:nth-child(2) {
          margin-left: 150rpx;
        }
        .array {
          display: block;
          width: 212rpx;
          height: 23rpx;
          float: left;
          background: url("../../static/assets/img/jiantou.png") no-repeat;
          background-size: 212rpx 23rpx;
        }
      }
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
    .content {
      float: left;
      width: 100%;
      height: max-content;
    }
    .hotmap-7th {
      float: left;
      width: 100%;
      height: 450rpx;
      float: left;
    }
  }
  .content-kindergarten3 {
    width: 750rpx;
    float: left;
    text-align: center;
    height: max-content;;
    padding-bottom: 60rpx;
    .tab-box-one-line{
      margin-top: 20rpx;
      float: left;
    }
    .content {
      width: 100%;
      height: max-content;
      float: left;
    }
    .hotmap {
      width: 100%;
      float: left;
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
  .tab-box-two-park{
    width: 692rpx;
    height: 300rpx;
    margin-left: 29rpx;
    /*display: flex;*/
    float: left;
    margin-top: 12rpx;
  }
  .tab-box-one-tab {
    width: 250rpx;
    height: 125rpx;
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

  .two-tab-park{
    width: 50%;
    /*flex: 1;*/
    height:150rpx;
    box-shadow: 0rpx 0rpx 12rpx rgba(129, 129, 129, 0.25);
    float:left;
    padding-top: 40rpx;
    border-top: 2rpx solid #1a79c8;

  }
  .two-tab-care{
    width: 32%;
    height: 100%;
    float: left;
  }
 .tab-box-two-park .two-tab-park:nth-child(1){
   margin-right: 8rpx;
 }
  .one-tab {
    width: 250rpx;
    /*flex: 1;*/
    height:125rpx;
    float:left;
    padding-top: 25rpx;
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
  .text-box-green {
    background: url("../../static/assets/images/h5/textbox-green.png") no-repeat;
    background-size: 422rpx 123rpx;
    width: 422rpx;
    height: 123rpx;
    margin-left: 10rpx;
    float: left;
    .chart {
      width: 422rpx;
      height: 123rpx;
    }

  }
  .three-care{
    height: 100%;
    width: 30%;
    padding:0rpx 10rpx 0rpx 10rpx;
    float: left;
    margin-right: 2rpx;
    background: #e7f2ff;
  }
  .tab-box-two-care{
    height: 400rpx;
  }
  .tab-box-two-care  .three-care:nth-child(1){
    margin-left: 3rpx;
    border-top: 4rpx solid #09ab80;
  }
  .three-care-top{
    height: 50%;
  }
  .three-care-top1{
    height: 50%;
    border-bottom: 1rpx solid #999;
  }
  .tab-box-one-line{
    width: 693rpx;
    height: 150rpx;
    margin-left: 29rpx;
    box-shadow: 0 0 12rpx rgba(129, 129, 129, 0.25);
    /*display: flex;*/
    float: left;
    .weifang1{
      display: flex;
      height: 100%;
      line-height: 115rpx;
      font-size: 24rpx;
      font-family: "PingFang-SC-Medium";
      text-align: center;
      justify-content: space-around;
      background: url("../../static/assets/rural/jizhonggongshui.png") no-repeat 20rpx;
      background-size: 60rpx 60rpx;
    }
    .weifang2{
      display: flex;
      height: 100%;
      /*line-height: 140rpx;*/
      font-size: 24rpx;
      font-family: "PingFang-SC-Medium";
      text-align: center;
      justify-content: space-around;
      background: url("../../static/assets/rural/jiaoyu.png") no-repeat 20rpx;
      background-size: 60rpx 60rpx;
    }
    .weifang3{
      display: flex;
      height: 100%;
      line-height: 140rpx;
      font-size: 24rpx;
      font-family: "PingFang-SC-Medium";
      text-align: center;
      justify-content: space-around;
      background: url("../../static/assets/rural/jizhongjingji.png") no-repeat 20rpx;
      background-size: 60rpx 60rpx;
      .weifangname{
        padding-left: 35rpx;
      }
      .weifangnum{
        font-size: 44rpx;
        font-family: 'DIN-Medium';
      }
      .weifangunit{
        font-family: 'DIN-Medium';
      }
    }

    .weifangname{
      padding-left:35rpx;
    }
    .weifangnum{
      font-size: 44rpx;
      font-family: 'DIN-Medium';
    }
    .weifangunit{
      font-family: 'DIN-Medium';
    }
  }

  .three-tab {
    width: 231rpx;
    /*flex: 1;*/
    height:150rpx;
    padding-top: 40rpx;
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

  .splitLine {
    /*float: right;*/
    width: 210rpx;
    height: 80rpx;
    margin-top: 0rpx;
    border-top: 1rpx solid #e1e1e1;
    background:  url("../../static/assets/img/jiantou.png") no-repeat 50% 50%;
    background-size: 140rpx 20rpx;
  }
  .splitLine2 {
    float: right;
    height: 20rpx;
    border-top: 1rpx solid #e1e1e1;
    background:  url("../../static/assets/img/jiantou.png") no-repeat 50% 50%;
    background-size: 140rpx 20rpx;

  }
  .splitLine3 {
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
  .tabActive {
    border-top:solid #1a79c8 4rpx;
    height: 150rpx;
    width: 231rpx;
    padding-top: 36rpx;
    background-image: linear-gradient(rgba(231, 242, 255, 1), rgba(231, 242, 255, 0));
    color: #1a79c8;
  }
  .tabActive2 {
    border-top: solid #1a79c8 4rpx;
    height: 2rem;
    width: 50%;
    padding-top: 32rem;
    background-image: linear-gradient(#e7f2ff, rgba(231, 242, 255, 0));
    color: #1a79c8;
  }
  .divbordermap{
    float: left;
    margin-top:30rpx;
    .divbordermap1{
      padding: 0rpx 15rpx 0rpx 15rpx;
      float: left;
      width: 672rpx;
      border-bottom: 2rpx dashed #dfe8f1;
      /*border-bottom: 2rpx dashed red;*/
      margin: 0rpx 24rpx 0rpx 24rpx;
    }
  }

  #industrialPark{
    height: 450rpx;
  }
  #eBusiness{
    height: 450rpx;
  }
  .fl {
    float: left;
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
</style>

<template>
  <div v-if="Poverty.povertyArea" class="main" >
    <div class="section-xqjy">
      <!--贫困地区-->
      <div class="content-kindergarten">
        <div class="title">
          <span class="title-icon-bar-left"></span>
          <span class="title-icon-bar-right"></span>
          <span class="title-text">贫困地区</span>
        </div>
        <div class="part-three-tab">
          <div
            v-for="(item,index) in Poverty.povertyArea.allPoor.data.data[0]"
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
        <div class="part-three-arrow">
          <div v-for="(item,index) in Poverty.povertyArea.allPoor.data.data[0]" class="box-arrow">
            <div v-if="index===kindergartenActive" class="arrow"></div>
          </div>
        </div>
        <div
          v-for="(item,index) in Poverty.povertyArea.allPoor.data.data[0]"
          v-if="kindergartenActive === index"
          class="content">
          <span class="blur-bar">包头市</span>
          <span class="subtitle">{{item.lable}}分布</span>
          <div class="hotmap" id="kindergarten1"></div>
        </div>
        <div class="divbordermap">
          <div class="divbordermap1"></div>
        </div>
      </div>
      <!--人均收入-->
      <div class="content-kid" id="secondTab">
        <div class="title" >
          <span class="title-icon-bar-left"></span>
          <span class="title-icon-bar-right"></span>
          <span class="title-text">人均收入</span>
        </div>
        <div class="tab-box-one-line" >
          <div
            class="two-tab1" >
            <span class="name">{{Poverty.avgIncome.data.legends[0]}}</span><br/>
            <span class="number">{{Poverty.avgIncome.data.series[0].data[3]}}</span>
            <span class="unit">元</span>
          </div>
          <div
            class="two-tab2">
            <span class="name">增速</span><br/>
            <span class="number" style="color: #39c77f">{{Poverty.avgIncome.data.series[1].data[3]}}%</span>
<!--            <span class="unit" style="color: #39c77f">%</span>-->
          </div>
        </div>
        <div class="content">
          <div class="charts" id="avgIncome"></div>
        </div>
        <div class="divbordermap">
          <div class="divbordermap1"></div>
        </div>
      </div>
      <!--危房改造-->
      <div class="content-kid1" id="secondTab2">
        <div class="title" >
          <span class="title-icon-bar-left"></span>
          <span class="title-icon-bar-right"></span>
          <span class="title-text">危房改造</span>
        </div>
        <div class="tab-box-one-line">
          <div class="weifang">
            <span class="weifangname">{{Poverty.dangerousHouseRenovation.allDangerHouse.data.data[0][0].lable}}</span>
            <div>
              <span class="weifangnum">{{Poverty.dangerousHouseRenovation.allDangerHouse.data.data[0][0].value}}</span>
              <span class="weifangunit">{{Poverty.dangerousHouseRenovation.allDangerHouse.data.data[0][0].unit}}</span>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="charts" id="dangerHouse"></div>
        </div>
        <div class="divbordermap">
          <div class="divbordermap1"></div>
        </div>
      </div>
      <!--集中供水-->
      <div class="content-water" id="secondTab3">
        <div class="title" >
          <span class="title-icon-bar-left"></span>
          <span class="title-icon-bar-right"></span>
          <span class="title-text">集体供水</span>
        </div>
        <div class="tab-box-one-line">
          <div class="weifang1">
            <span class="weifangname">{{Poverty.AllWaterSup.AllWaterSupply.data.data[0][0].lable}}</span>
            <div>
              <span class="weifangnum">{{Poverty.AllWaterSup.AllWaterSupply.data.data[0][0].value}}</span>
              <span class="weifangunit">{{Poverty.AllWaterSup.AllWaterSupply.data.data[0][0].unit}}</span>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="charts" id="AllWaterSup"></div>
        </div>
        <div class="divbordermap">
          <div class="divbordermap1"></div>
        </div>
      </div>
      <!-- 义务教育 -->
      <div class="content-water1" id="secondTab4" >
        <div class="title" >
          <span class="title-icon-bar-left"></span>
          <span class="title-icon-bar-right"></span>
          <span class="title-text">义务教育</span>
        </div>
        <div class="tab-box-one-line" >
          <div class="weifang2">
            <span class="weifangname">{{Poverty.compulsoryEducation.AllCompulsoryEducation.data.data[0][0].lable}}</span>
            <div>
              <span class="weifangnum">{{Poverty.compulsoryEducation.AllCompulsoryEducation.data.data[0][0].value}}</span>
              <span class="weifangunit">{{Poverty.compulsoryEducation.AllCompulsoryEducation.data.data[0][0].unit}}</span>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="charts" id="Education"></div>
        </div>
        <div class="divbordermap">
          <div class="divbordermap1"></div>
        </div>
      </div>
      <!--集体经济-->
      <div class="content-Economics1" id="secondTab5">
        <div class="title" >
          <span class="title-icon-bar-left"></span>
          <span class="title-icon-bar-right"></span>
          <span class="title-text">集体经济</span>
        </div>
        <div class="tab-box-one-line">
          <div class="weifang3">
            <span class="weifangname">{{Poverty.collectiveEconomy.AllCollectiveEconomy.data.data[0][0].lable}}</span>
            <div>
              <span class="weifangnum">{{Poverty.collectiveEconomy.AllCollectiveEconomy.data.data[0][0].value}}</span>
              <span class="weifangunit">{{Poverty.collectiveEconomy.AllCollectiveEconomy.data.data[0][0].unit}}</span>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="charts" id="Economy"></div>
        </div>
        <div class="divbordermap">
          <div class="divbordermap1"></div>
        </div>
      </div>
      <!--产业园区-->
      <div class="content-kindergarten1" id="secondTab6">
        <div class="title">
          <span class="title-icon-bar-left"></span>
          <span class="title-icon-bar-right"></span>
          <span class="title-text">产业园区</span>
        </div>
        <div class="tab-box-kindergarten1">
          <div
            v-for="(item,index) in Poverty.industrialPark.allIndustrialPark.data.data[0]"
            class="two-tab"
            @click="switchKindergartenTab2(index)"
          >
            <div v-if="index===0" class="icon-left"></div>
            <div v-else class="icon-right"></div>
            <div class="detail-box">
              <div class="line">
                <span class="name">{{industrialLabelList[index]}}</span>
              </div>
              <div class="line">
                <span class="number">{{item.value}}</span>
                <span class="unit">{{item.unit}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="part-array">
          <div class="box-array">
            <div v-if="kindergartenActive2===0" class="array"></div>
          </div>
          <div class="box-array">
            <div v-if="kindergartenActive2===1" class="array"></div>
          </div>
        </div>
        <div
          v-for="(item,index) in Poverty.industrialPark.allIndustrialPark.data.data[0]"
          v-if="kindergartenActive2 === index"
          class="content">
          <span class="blur-bar">包头市</span>
          <span class="subtitle">{{item.lable}}</span>
          <div class="hotmap-7th" id="industrialPark"></div>
        </div>
      </div>
      <!--电子商务-->
      <div class="content-kindergarten3" id="secondTab7" >
        <div class="title">
          <span class="title-icon-bar-left"></span>
          <span class="title-icon-bar-right"></span>
          <span class="title-text">电子商务</span>
        </div>

        <div class="part-three-tab">
          <div
            v-for="(item,index) in Poverty.eBusiness.allEBusiness.data.data[0]"
            class="tab"
            @click="switchKindergartenTab3(index)">
            <div class="line">
              <span class="name">{{eBusinessLabelList[index]}}</span>
            </div>
            <div class="line">
              <span class="number">{{item.value}}</span>
              <span class="unit">{{item.unit}}</span>
            </div>
          </div>
        </div>
        <div class="part-three-arrow">
          <div v-for="(item,index) in Poverty.eBusiness.allEBusiness.data.data[0]" class="box-arrow">
            <div v-if="index===kindergartenActive3" class="arrow"></div>
          </div>
        </div>
        <div
          v-for="(item,index) in Poverty.eBusiness.allEBusiness.data.data[0]"
          v-if="kindergartenActive3 === index"
          class="content">
          <span class="blur-bar">包头市</span>
          <span class="subtitle">{{item.lable}}</span>
          <div class="hotmap" id="eBusiness"></div>
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
    multiBarChartHorizontal2jj,
    multiBarChartHorizontal3,
    multiBarChartHorizontal4,
    brainPieChartCircle,
    brainPieChartNew,
    brainLineAndBarChartFourmenoy,
  } from '../../charts/rural-charts';
  import {pieChartY} from "../../charts/h5-chart";
  // import {heatChart} from './echerts';
  export default {
    name: "preschool-education",
    props: ['Poverty'],
    data() {
      return {
        // 幼儿园
        kindergartenActive: 0,
        kindergartenActive2: 0,
        kindergartenActive3: 0,
        industrialLabelList: ['扶贫产业园','扶贫产业基地'],
        eBusinessLabelList: ['公共服务中心','服务站','服务点'],
        pieAdjust: {
          titleNoFixed: true,
          textLeft: 80,
          legendX: '60%',
        },
      }
    },
    mounted() {
      this.initWin();

    },
    methods: {
      initWin() {
        let time=setInterval(()=>{
          if(this.Poverty.dangerousHouseRenovation){
            this.Poverty.avgIncome.data.gridBottom = '15%';
            this.$nextTick(() => {
              multiBarChartHorizontal('dangerHouse',this.Poverty.dangerousHouseRenovation.dangerHouse.data);
              multiBarChartHorizontal2('AllWaterSup',this.Poverty.AllWaterSup.waterSupply.data);
              multiBarChartHorizontal('Education',this.Poverty.compulsoryEducation.AllCompulsoryEducation2.data);
              multiBarChartHorizontal2jj('Economy',this.Poverty.collectiveEconomy.AllCollectiveEconomy2.data);
              // brainPieChartNew('industrialPark',this.Poverty.industrialPark.povertyReliefPark.data);
              this.switchKindergartenTab3(0);
              this.switchKindergartenTab(0);
              this.switchKindergartenTab2(0);
              //人均收入
              brainLineAndBarChartFourmenoy('avgIncome',this.Poverty.avgIncome.data);
            })
            clearTimeout(time)
          }
        },1000)
      },
      switchKindergartenTab(index) {
        this.kindergartenActive = index;
          if (this.kindergartenActive === 0) {
            this.$nextTick(() => {
              let poorTown = this.Poverty.povertyArea.poorTown.data;
              poorTown.limitList=[15,10,5];
              drawJmMap('kindergarten1',poorTown);
            });
        } else if (this.kindergartenActive === 1) {
            this.$nextTick(() => {
              let poorVillages = this.Poverty.povertyArea.poorVillages.data;
              poorVillages.limitList=[200,100,50];
              drawJmMap('kindergarten1', poorVillages)
            });
        }else {
            this.$nextTick(() => {
              var poorPeople = this.Poverty.povertyArea.poorPeople.data;
              poorPeople.limitList=[2400,1800,1000];
              drawJmMap('kindergarten1', poorPeople)
            });
          }
      },
      /*产业园区*/
      switchKindergartenTab2(index) {
        this.kindergartenActive2 = index;
          if (this.kindergartenActive2 === 0) {
            this.$nextTick(() => {
              pieChartY('industrialPark',this.Poverty.industrialPark.povertyReliefPark.data.series[0].data,this.pieAdjust);
            });
        } else  {
            this.$nextTick(() => {
              pieChartY('industrialPark',this.Poverty.industrialPark.povertyReliefBase.data.series[0].data,this.pieAdjust)
            });
        }
      },
      /*电子商务*/
      switchKindergartenTab3(index) {
        this.kindergartenActive3 = index;
          if (this.kindergartenActive3 === 0) {
            this.$nextTick(() => {
              pieChartY('eBusiness',this.Poverty.eBusiness.eServiceCenter.data.series[0].data,this.pieAdjust);
            });
        } else if (this.kindergartenActive3 === 1) {
            this.$nextTick(() => {
              pieChartY('eBusiness',this.Poverty.eBusiness.eServiceStation.data.series[0].data,this.pieAdjust);
            });
        }else {
            this.$nextTick(() => {
              pieChartY('eBusiness',this.Poverty.eBusiness.eServicePoints.data.series[0].data,this.pieAdjust);
            });
          }
      },
    },
  }

</script>

