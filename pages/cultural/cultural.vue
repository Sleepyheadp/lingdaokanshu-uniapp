<style lang="less" scoped>
  @import url("../common-class.less");
  .section {
    width: 750rpx;
    float: left;
    padding-bottom: 85rpx;
    &:nth-child(4) {
      padding-bottom: 7rpx;
    }
    &:nth-child(6) {
      margin-top: -4rpx;
    }
    &:last-child {
      margin-bottom: 50rpx;
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
    .title28-bold {
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
    .number50 {
      line-height: 50rpx;
      font-size: 50rpx;
      color: #353535;
      font-family: 'DIN-Medium'
    }
    .slide-box {
      float: left;
      width: 690rpx;
      margin-left: 28rpx;
      padding-bottom: 26rpx;
      overflow-y: visible;
      overflow-x: auto;
      /*滚动条样式*/
      &::-webkit-scrollbar {
        height: 6rpx;
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
        margin: 0 318rpx 0 318rpx !important;
      }
      .slide {
        float: left;
        overflow-y: visible;
        width: max-content;
      }
    }
    .slide-box-without-scrollbar {
      float: left;
      width: 750rpx;
      height: max-content;
      overflow-y: hidden;
      overflow-x: auto;
      /*滚动条样式*/
      &::-webkit-scrollbar {
        height: 0;
        width: 0;
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
        margin: 0 318rpx 0 318rpx !important;
      }
      .slide {
        float: left;
        overflow-y: visible;
        width: max-content;
      }
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
      margin: 0 0 0 26rpx;
      color: white;
      text-align: center;
      font-family: 'PingFang-SC-Medium';
    }
    // 副标题-文本
    .subtitle-text {
      float: left;
      color: #353535;
      font-size: 26rpx;
      margin: 0 0 0 10rpx;
      text-align: center;
      font-family: 'PingFang-SC-Bold';
    }
    .undertaking-investment {
      float: left;
      width:750rpx;
      margin-bottom: -40rpx;
      .color-tab-box {
        float: left;
        width: 100%;
        margin-top:25rpx;
        .blue {
          height: 144rpx;
          float: left;;
          width: 334rpx;
          margin-left: 30rpx;
          background-color: #f1f6fb;
          border-top: solid #1a79c8 4rpx;
        }
        .green {
          height: 144rpx;
          float: left;
          margin-left: 20rpx;
          width: 334rpx;
          background-color: #edf9f5;
          border-top: solid #09ab80 4rpx;
        }
        .label-box {
          float: left;
          width: 100%;
          text-align: center;
          margin-top: 33rpx;
        }
        .data-box {
          float: left;
          width: 100%;
          text-align: center;
          margin-top: 1rpx;
        }
      }
      .select-box {
        float: left;
        width: 100%;
        .select-content {
          float: left;
          width: 210rpx;
          height: 30rpx;
          &:first-child {
            margin-left: 91rpx;
          }
          &:nth-child(2) {
            margin-left: 144rpx;
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
      }
      .chart-pie {
        float: left;
        height: 450rpx;
        width:750rpx;
        margin-top: -23rpx;
      }
      .chart-map {
        float: left;
        margin-top: -120rpx;
        height: 750rpx;
        width: 100%;
      }
    }
    .undertaking-multi {
      margin-bottom: -100rpx;
      float: left;
      width:750rpx;
      .button-box {
        float: left;
        width: 724rpx;
        margin-top: 24rpx;
        margin-left: 26rpx;
        .button {
          width: 116rpx;
          height: 50rpx;
          margin-left: 1rpx;
          line-height: 51rpx;
          float: left;
          background-color: #e8f2fe;
          text-align: center;
          color: #126fce;
          &:first-child {
            margin-left: 0;
          }
        }
        .buttonActive {
          background-color: #1a79c9;
          color: #fff;
        }
      }
      .content-box {
        float: left;
        padding-top: 23rpx;
        .content {
          float: left;
          width: 252rpx;
          height: 150rpx;
          margin-left: 20rpx;
          background-color: #f4f7fc;
          border-left: solid #f4f7fc 4rpx;
          border-right: solid #f4f7fc 4rpx;
          .label-box {
            float: left;
            width: 100%;
            text-align: center;
            margin-top: 38rpx;
          }
          .data-box {
            float: left;
            width: 100%;
            text-align: center;
            margin-top: 1rpx;
          }
          &:first-child {
            margin-left: 0;
          }
        }
        .contentActive {
          border-left: solid #1979cd 4rpx;
        }
      }
      .chart-map {
        float: left;
        height: 750rpx;
        width: 100%;
      }
    }
    .industry {
      float: left;
      width:750rpx;
      .color-tab-box {
        float: left;
        width: 100%;
        margin-top:25rpx;
        .blue {
          height: 144rpx;
          float: left;;
          width: 334rpx;
          margin-left: 30rpx;
          background-color: #f1f6fb;
          border-top: solid #1a79c8 4rpx;
        }
        .green {
          height: 144rpx;
          float: left;
          margin-left: 20rpx;
          width: 334rpx;
          background-color: #edf9f5;
          border-top: solid #09ab80 4rpx;
        }
        .label-box {
          float: left;
          width: 100%;
          text-align: center;
          margin-top: 33rpx;
        }
        .data-box {
          float: left;
          width: 100%;
          text-align: center;
          margin-top: 1rpx;
        }
      }
      .chart-line {
        float: left;
        height: 450rpx;
        width:750rpx;
      }
      .chart-pie {
        float: left;
        height: 450rpx;
        width:750rpx;
      }
    }
    .city-brand {
      float: left;
      width:750rpx;
      .brand-left {
        float: left;
        width: 220rpx;
        height: 121rpx;
        margin-left: 32rpx;
        background: url("../../static/assets/images/h5/city-brand1.png") no-repeat;
        background-size: 220rpx 121rpx;
      }
      .brand-mid {
        float: left;
        width: 220rpx;
        height: 121rpx;
        margin-left: 18rpx;
        background: url("../../static/assets/images/h5/city-brand2.png") no-repeat;
        background-size: 220rpx 121rpx;
      }
      .brand-right {
        float: left;
        width: 220rpx;
        height: 121rpx;
        margin-left: 18rpx;
        background: url("../../static/assets/images/h5/city-brand3.png") no-repeat;
        background-size: 220rpx 121rpx;
      }
    }
    .history {
      float: left;
      width:750rpx;
      border-bottom: dashed #dedede 1rpx;
      .line {
        width: 2rpx;
        height: 1035rpx;
        margin: 10rpx 0 -1035rpx 155rpx;
        background-color: #92bfe8;
      }
      .line400 {
        width: 2rpx;
        height: 1055rpx;
        margin: 10rpx 0 -1055rpx 155rpx;
        background-color: #92bfe8;
      }
      .content {
        float: left;
        width:750rpx;
        height: max-content;
        margin-top: -35rpx;
        padding-bottom: 35rpx;
        &:last-child {
          padding-bottom: 16rpx;
        }
        .left {
          float: left;
          width: 170rpx;
          padding-top: 23rpx;
          height: max-content;
          .text {
            float: left;
            width: 139rpx;
            color: #1a79c9;
            line-height: 24rpx;
            text-align: right;
            height: max-content;
          }
          .icon {
            width: 14rpx;
            height: 14rpx;
            border-radius: 7rpx;
            background-color: #247ecc;
            margin: 5rpx 0 0 149rpx;
          }
        }
        .right {
          float: left;
          height: max-content;
          width: 546rpx;
          padding-bottom: 22rpx;
          padding-top: 11rpx;
          margin-left:5rpx;
          border-top: solid #f1f6fa 1rpx;
          .text {
            float: left;
            margin-top: 8rpx;
            line-height: 31rpx;
            height: max-content;
            width: 546rpx;
            text-align: left;
          }
        }
        .noBorderTop {
          border-top:  solid rgba(0,0,0,0) 1rpx;
        }
      }
    }
    .famous {
      float: left;
      width:750rpx;
      .hometown {
        float: left;
        width: 690rpx;
        height: 96rpx;
        border: solid #7bb3e6 1rpx;
        border-radius: 6rpx;
        background: #f6f9fe;
        margin: 8rpx 0 0 29rpx;
        .icon {
          float: left;
          margin: 28rpx 0 0 15rpx;
          height: 43rpx;
          width: 39rpx;
          background: url("../../static/assets/images/h5/cultural-famous.png") no-repeat;
          background-size: 39rpx 43rpx;
        }
        .text {
          float: left;
          margin: 0 0 0 4rpx;
          line-height: 96rpx;
        }
      }
      .split-img {
        text-align: center;
        float: left;
        width: 696rpx;
        margin: 68rpx 0 0 26rpx;
        background: url("../../static/assets/images/h5/cultural-title-split.png") no-repeat 0 6rpx;
        background-size: 696rpx 14rpx;
        color: #1c70c8;
        &:nth-child(4) {
          margin: 33rpx 0 0 26rpx;
        }
        &:nth-child(6) {
          margin: 63rpx 0 0 26rpx;
        }
      }
      .content {
        width: 210rpx;
        padding-top: 51rpx;
        float: left;
        margin-left: 25rpx;
        &:first-child {
          margin-left: 27rpx;
        }
        &:last-child {
          margin-right: 27rpx;
        }
        .text-box {
          margin-left: 20rpx;
          width: 170rpx;
          line-height: 30rpx;
          float: left;
          text-align: center;
          &:nth-child(2) {
            padding-top: 14rpx;
          }
          &:nth-child(3) {
            padding-top: 0;
          }
        }
        // 伟人辈出
        .img-great-man1 {
          width: 210rpx;
          height: 280rpx;
          float: left;
          background: url("../../static/assets/images/h5/img-great-man1.jpg") no-repeat;
          background-size: 210rpx 280rpx;
        }
        .img-great-man2 {
          width: 210rpx;
          float: left;
          height: 280rpx;
          background: url("../../static/assets/images/h5/img-great-man2.jpg") no-repeat;
          background-size: 210rpx 280rpx;
        }
        .img-great-man3 {
          width: 210rpx;
          float: left;
          height: 280rpx;
          background: url("../../static/assets/images/h5/img-great-man3.jpg") no-repeat;
          background-size: 210rpx 280rpx;
        }
        .img-great-man4 {
          width: 210rpx;
          float: left;
          height: 280rpx;
          background: url("../../static/assets/images/h5/img-great-man4.jpg") no-repeat;
          background-size: 210rpx 280rpx;
        }
        // 院士摇篮
        .img-academician-man1 {
          width: 210rpx;
          float: left;
          height: 280rpx;
          background: url("../../static/assets/images/h5/img-academician-man1.jpg") no-repeat;
          background-size: 210rpx 280rpx;
        }
        .img-academician-man2 {
          width: 210rpx;
          float: left;
          height: 280rpx;
          background: url("../../static/assets/images/h5/img-academician-man2.jpg") no-repeat;
          background-size: 210rpx 280rpx;
        }
        .img-academician-man3 {
          width: 210rpx;
          float: left;
          height: 280rpx;
          background: url("../../static/assets/images/h5/img-academician-man3.jpg") no-repeat;
          background-size: 210rpx 280rpx;
        }
        .img-academician-man4 {
          width: 210rpx;
          float: left;
          height: 280rpx;
          background: url("../../static/assets/images/h5/img-academician-man4.jpg") no-repeat;
          background-size: 210rpx 280rpx;
        }
        // 明星之乡
        .img-star-man1 {
          width: 210rpx;
          float: left;
          height: 280rpx;
          background: url("../../static/assets/images/h5/img-star-man1.jpg") no-repeat;
          background-size: 210rpx 280rpx;
        }
        .img-star-man2 {
          width: 210rpx;
          float: left;
          height: 280rpx;
          background: url("../../static/assets/images/h5/img-star-man2.jpg") no-repeat;
          background-size: 210rpx 280rpx;
        }
        .img-star-man3 {
          width: 210rpx;
          float: left;
          height: 280rpx;
          background: url("../../static/assets/images/h5/img-star-man3.jpg") no-repeat;
          background-size: 210rpx 280rpx;
        }
        .img-star-man4 {
          width: 210rpx;
          float: left;
          height: 280rpx;
          background: url("../../static/assets/images/h5/img-star-man4.png") no-repeat;
          background-size: 210rpx 280rpx;
        }
      }
    }
    .region {
      .button-box {
        float: left;
        width: 724rpx;
        margin-top: -9rpx;
        margin-left: 26rpx;
        .button {
          width: 116rpx;
          height: 50rpx;
          margin-left: 1rpx;
          line-height: 51rpx;
          float: left;
          background-color: #e8f2fe;
          text-align: center;
          color: #126fce;
          &:first-child {
            margin-left: 0;
          }
        }
        .buttonActive {
          background-color: #1a79c9;
          color: #fff;
        }
      }
      .blue-box {
        width: 690rpx;
        float: left;
        border: solid #7bb3e6 1rpx;
        border-radius: 6rpx;
        background: #f6f9fe;
        margin: 37rpx 0 0 23rpx;
        .text {
          width: 580rpx;
          float: left;
          line-height: 33rpx;
          margin: 21rpx 0 22rpx 20rpx ;
        }
        .iconDialect{
          float: left;
          width: 48rpx;
          height: 48rpx;
          margin: 25rpx 0 0 26rpx;
          background: url("../../static/assets/images/h5/cultural-dialect.png");
          background-size: 48rpx;
        }
        .iconCustom{
          float: left;
          width: 48rpx;
          height: 48rpx;
          margin: 25rpx 0 0 26rpx;
          background: url("../../static/assets/images/h5/cultural-custom.png");
          background-size: 48rpx;
        }
        .iconReligion{
          float: left;
          width: 48rpx;
          height: 48rpx;
          margin: 25rpx 0 0 26rpx;
          background: url("../../static/assets/images/h5/cultural-religion.png");
          background-size: 48rpx;
        }
        .iconQuyi{
          float: left;
          width: 48rpx;
          height: 48rpx;
          margin: 25rpx 0 0 26rpx;
          background: url("../../static/assets/images/h5/cultural-quyi.png");
          background-size: 48rpx;
        }
        .iconLearning{
          float: left;
          width: 48rpx;
          height: 48rpx;
          margin: 25rpx 0 0 26rpx;
          background: url("../../static/assets/images/h5/cultural-learning.png");
          background-size: 48rpx;
        }
      }
    }
    .paddingBottom6 {
      padding-bottom: 32rpx;
    }
    .paddingBottom0 {
      padding-bottom: 0;
    }
    .marginTop21 {
      margin-top: 21rpx;
    }
    .marginTop10 {
      margin-top: 10rpx;
    }
  }
</style>

<template>
  <div class="main">
    <!--文化事业-->
    <div class="section" id="1stTab">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">文化事业</span>
      </div>
      <!--公共文化投入-->
      <div class="undertaking-investment">
        <span class="blue-bar">2019年</span>
        <span class="subtitle-text">公共文化投入</span>
        <div class="color-tab-box">
          <div
            v-for="(item,index) in investment.detail"
            :class="{blue: index===0,green:index===1}"
            @click="investmentChange(index)">
            <div class="label-box">
              <span class="title24">{{item.label}}</span>
            </div>
            <div class="data-box">
              <span class="number50">{{item.value}}</span>
              <span class="title24">{{item.unit}}</span>
            </div>
          </div>
        </div>
        <div class="select-box">
          <div v-for="(item,index) in investment.detail" class="select-content">
            <span :class="{select: investmentActive===index}"></span>
          </div>
        </div>
        <div class="chart-pie" id="1stTabPie"></div>
        <div class="chart-map" id="1stTabMap"></div>
      </div>
      <!--公共文化设施-->
      <div class="undertaking-multi">
        <span class="blue-bar">2019年</span>
        <span class="subtitle-text">公共文化设施</span>
        <div class="button-box">
          <div v-for="(item,index) in undertakingButtonList"
            :class="{buttonActive:undertakingButtonSelect===index}"
            class="button title22"
            @click="undertakingChange(index,0)">
            {{item}}
          </div>
        </div>
        <div
          v-for="(item,index) in undertakingDataList"
          v-if="undertakingButtonSelect!=null && undertakingButtonSelect===index"
          :class="{paddingBottom6: item.detail.length<3}"
          class="slide-box">
          <div
            class="slide content-box">
            <div
              v-for="(eItem,eIndex) in item.detail"
              :class="{contentActive:undertakingContentActive===eIndex}"
              class="content"
              @click="undertakingChange(eIndex,1)">
              <div
                :class="{marginTop21:eItem.label.length>10}"
                class="label-box">
                <span class="title24">{{eItem.label}}</span>
              </div>
              <div class="data-box">
                <span class="number50">{{eItem.value}}</span>
                <span class="title24">{{eItem.unit}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="chart-map" id="1stTabMapBottom"></div>
      </div>
    </div>
    <!--文化产业-->
    <div class="section marginTop-38" id="2ndTab">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">文化产业</span>
      </div>
      <div class="industry">
        <span class="blue-bar">2019年</span>
        <span class="subtitle-text">公共文化投入</span>
        <div class="color-tab-box">
          <div
            v-for="(item,index) in industry.detail"
            :class="{blue: index===0,green:index===1}">
            <div class="label-box">
              <span class="title24">{{item.label}}</span>
            </div>
            <div class="data-box">
              <span class="number50">{{item.value}}</span>
              <span class="title24">{{item.unit}}</span>
            </div>
          </div>
        </div>
        <div class="chart-line" id="2ndTabLine"></div>
        <div class="chart-pie" id="2ndTabPie"></div>
      </div>
    </div>
    <!--城市品牌-->
    <div class="section marginTop-38" id="3rdTab">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">城市品牌</span>
      </div>
      <div class="city-brand">
        <div class="brand-left"></div>
        <div class="brand-mid"></div>
        <div class="brand-right"></div>
      </div>
    </div>
    <!--历史沿革-->
    <div class="section marginTop10" id="4thTab">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">历史沿革</span>
      </div>
      <div class="history">
        <div id="historyLine" class="line"></div>
        <div
          v-for="(item,index) in history"
          class="content">
          <div class="left">
            <div v-for="eItem in item.time" class="text title22">{{eItem}}</div>
            <div class="icon"></div>
          </div>
          <div
            :class="{noBorderTop: index===0}"
            class="right">
            <div v-for="rItem in item.detail" class="text title22">{{rItem}}</div>
          </div>
        </div>
      </div>
    </div>
    <!--著名人物-->
    <div class="section" id="5thTab">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">著名人物</span>
      </div>
      <div class="famous">
        <div class="hometown">
          <span class="icon"></span>
          <span class="text title22">400多万侨乡，遍布世界107个国家和地区，约战全国的1/10。</span>
        </div>
        <div class="split-img title28-bold">伟人辈出</div>
        <div class="slide-box-without-scrollbar">
          <div class="slide">
            <div
              v-for="(item) in greatList"
              class="content">
              <div :class="item.img"></div>
              <div
                v-for="eItem in item.detail"
                class="text-box">
                <span class="title22">{{eItem}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="split-img title28-bold">院士摇篮</div>
        <div class="slide-box-without-scrollbar">
          <div class="slide">
            <div
              v-for="(item) in academicianList"
              class="content">
              <div :class="item.img"></div>
              <div
                v-for="eItem in item.detail"
                class="text-box">
                <span class="title22">{{eItem}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="split-img title28-bold">明星之乡</div>
        <div class="slide-box-without-scrollbar">
          <div class="slide">
            <div
              v-for="(item) in starList"
              class="content">
              <div :class="item.img"></div>
              <div
                v-for="eItem in item.detail"
                class="text-box">
                <span class="title22">{{eItem}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!--区域文化-->
    <div class="section" id="6thTab">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">区域文化</span>
      </div>
      <div class="region">
        <div class="button-box">
          <div v-for="(item,index) in regionButtonList"
               :class="{buttonActive:regionButtonSelect===index}"
               class="button title22"
               @click="regionChange(index)">
            {{item}}
          </div>
        </div>
        <div class="blue-box">
          <div :class="regionDataList[regionButtonSelect].img"></div>
          <div class="title22-bold text">{{regionDataList[regionButtonSelect].detail}}</div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  import {pieChartY,drawJmHotMap,situationLineAndBarChart} from "../../charts/h5-chart"
  export default {
    name: "cultural",
    props: ['tabData'],
    data() {
      return {
        // 文化事业
        investment: {},
        library: {},
        museum: {},
        art: {},
        headRadio: {},
        investmentActive: '',
        undertakingButtonList: ['图书馆','博物馆','文化艺术','广播电视'],
        undertakingButtonSelect: null,
        undertakingContentActive: '',
        undertakingDataList: [],
        // 文化产业
        industry: {},
        // 历史沿革
        history: [
          {
            time: ['先秦'],
            detail: [
              '秦始皇三十三年（公元前214年）统一岭南，设置南海、桂林、象郡三郡，今江门五邑地区属南海郡。至三国时期，江门五邑地区都属南海郡。'
            ]
          },
          {
            time: ['两汉','魏晋南北朝'],
            detail: [
              '东汉建安二十四年（219），今恩平市地名思平县，唐至德二年（757年）改为恩平县。北宋开宝元年（968年）废恩平县并入阳江县。明成化十四年（1478年）割新会县德行都及阳江、新兴地复置恩平县。',
              '三国吴黄武元年（222年），今新会市司前镇河村一带置平夷县，属南海郡。西晋太康元年（280年）改平夷为新夷。南朝宋永初元年（420年）分南海、新宁二郡立新会郡，隋开皇十年（590年）新会开始由郡名改为县名。'

            ]
          },
          {
            time: ['唐宋元明清'],
            detail: [
              '北宋开宝五年（972年）义宁县并入新会县，属广州，是新会县境最大的时期。包括隋唐两代冈州全境，故新会又改名冈州。',
              '明弘治十二年（1499年）今台山市地置县，原名新宁县，隶属广州府。',
              '清顺治六年（1649年）割新会、恩平、新宁部分地合置开平县。',
              '清雍正九年（1731年），析新会、开平部分地合置鹤山县。',
              '清光绪二十八年（1902年）《中英续议道商行船条约》，规定将江门辟为通商口岸，并在北街设立江门海关。',

            ]
          },
          {
            time: ['民国'],
            detail: [
              '民国3年（1914年）新宁县改为台山县。1953年，赤溪县并入台山县。',
              '1925年8月，江门列为省辖市，设立包头市政厅。1931年2月，包头市撤消，改为新会管辖的一个镇。',

            ]
          },
          {
            time: ['建国后'],
            detail: [
              '中华人民共和国建立后，江门五邑，先后隶属粤中专区、粤西行政区、佛山专区、江门专区、肇庆专区、佛山专区等。',
              '1949年10月23日，江门和平解放。10月底，江门五邑全境解放。',
              '1983年6月，江门升格为地级市，辖台山、开平、恩平、新会、鹤山五县及江门城区、郊区。同年8月增辖阳江、阳春两县（1988年2月，阳江、阳春两县分出）',
              '从1992年4月开始，台山、新会、开平、恩平、鹤山等先后撤县建市（县级），均有广东省直辖，省政府委托江门代管。',
              '1994年3月，江门对城区、郊区行政区域进行调整，以蓬江河为界，河南为城区，河北为郊区，同年8月，包头市城区更名为江海区，郊区更名为蓬江区。',
              '2002年9月，撤消县级的新会市设立包头市新会区。'
            ]
          },
        ],
        // 著名人物
        greatList: [
          {
            img: 'img-great-man1',
            detail: ['明代理学家大儒','陈白沙']
          },
          {
            img: 'img-great-man2',
            detail: ['维新先驱','梁启超']
          },
          {
            img: 'img-great-man3',
            detail: ['中国飞行第一人','冯如']
          },
          {
            img: 'img-great-man4',
            detail: ['中国近现代油画与民主革命先驱','李铁夫']
          },
        ],
        academicianList: [
          {
            img: 'img-academician-man1',
            detail: ['梁思成院士']
          },
          {
            img: 'img-academician-man2',
            detail: ['梁思礼院士']
          },
          {
            img: 'img-academician-man3',
            detail: ['林为干院士']
          },
          {
            img: 'img-academician-man4',
            detail: ['陈焕镛院士']
          },
        ],
        starList: [
          {
            img: 'img-star-man1',
            detail: ['周润发']
          },
          {
            img: 'img-star-man2',
            detail: ['刘德华']
          },
          {
            img: 'img-star-man3',
            detail: ['红线女']
          },
          {
            img: 'img-star-man4',
            detail: ['易建联']
          },
        ],
        // 区域文化
        regionButtonList: ['方言','民俗','宗教','曲艺','学派'],
        regionButtonSelect: 0,
        regionDataList: [
          {
            img: 'iconDialect',
            detail: '江门本地方言主要有粤方言和客家话方言两种。 江门方言即四邑话，也称五邑话，是江门侨乡文化独具特色的一部分。在江门，大部分地方流行五邑话，还有一些地方流行广州话、客家话。'
          },
          {
            img: 'iconCustom',
            detail: '江门以侨乡风情闻名，五邑地区华人华侨和港澳台同胞众多，遍布世界。共同的历史，同出一宗的地缘人缘，加上海外对五邑的影响，使江门五邑地区展现出丰富的民俗风情，有独特的节日、婚嫁、丧葬、饮食、娱乐等习俗，主要有龙舟赛、舞狮舞龙、广东曲艺、民间舞蹈、民歌演唱等。如抬阁、新会鱼灯、大鳌咸水歌、鹤山市狮艺、恩平木鱼等。'
          },
          {
            img: 'iconReligion',
            detail: '包头市有佛教、道教、天主教、基督教四大宗教。全市教徒约1.2万人，共登记开放宗教活动62场所处，共有教徒聚居村8条，共有宗教团体21个。'
          },
          {
            img: 'iconQuyi',
            detail: '“中国曲艺之乡”。由清至民国初年，“没有四邑人就不成戏班”的定律为粤剧戏行内所公认，五邑地区粤剧人才辈出，享誉粤港澳，如粤剧复兴鼻祖邝新华，粤剧四大名旦、四大名丑，“红派艺术”开创者红线女，“芳腔”之芳艳芬等。'
          },
          {
            img: 'iconLearning',
            detail: '江门学派，又称岭南学派，是由明代著名哲学家陈白沙创立的心学思想派别，提倡以“虚明静一”之心为主，确立心的主体性，以避免程朱理学“徇外”和陆九渊心学“自欺”弊端。在广东开‘岭学’之先河，树‘粤风’之模范。江门人深受陈白沙心学思想的影响：“自得”、“自然”、“主静”'
          },
        ],
      }
    },
    mounted() {
      // this.tabData = this.setData();
      // this.initWin();
      console.log('文化',this.tabData)
    },
    watch: {
      'tabData.data': function (newValue, oldValue) {
        this.initWin();
      }
    },
    methods: {
      initWin() {
        // 文化事业
        this.investment = this.tabData.data[0].data.investment;
        this.art = this.tabData.data[0].data.art;
        this.headRadio = this.tabData.data[0].data.headradio;
        this.library = this.tabData.data[0].data.library;
        this.museum = this.tabData.data[0].data.museum;
        this.undertakingDataList = [this.library,this.museum,this.art,this.headRadio];
        this.undertakingContentActive = 0;
        this.industry = this.tabData.data[1].data.industry;
        // console.log('this.industry.chart[0]',this.industry.chart[0])
        this.industry.chart[0].legends = ['增速','2018','2019'];
        this.industry.chart[0].legendRight = '30%';
        this.industry.chart[0].lineColor = '#39c77f';
        let temp = this.industry.chart[0].series[2];
        this.industry.chart[0].series[2] = this.industry.chart[0].series[1];
        this.industry.chart[0].series[1] = this.industry.chart[0].series[0];
        this.industry.chart[0].series[0] = temp;
        this.industry.chart[0].rotate = 30;
        this.industry.chart[0].gridBottom = '26%';
        this.industry.chart[0].xaxis.forEach((item,index)=>{
          if (item.indexOf('增加值')>0) {
            this.industry.chart[0].xaxis[index] = item.slice(0,item.indexOf('增加值'));
          }
        });
        this.industry.chart[1].series[0].data.forEach((item,index)=>{
          if (item.name.indexOf('增加值')>0) {
            this.industry.chart[1].series[0].data[index].name = item.name.slice(0,item.name.indexOf('增加值'));
          }
        });
        setTimeout(() => {
          let lineStyle = document.getElementById('historyLine');
          if (document.body.clientWidth <= 400) {
            lineStyle.setAttribute('class','line400')
          }
          // 文化事业
          pieChartY('1stTabPie',this.investment.chart[0].series[0].data,);
          this.investmentChange(0);
          this.undertakingChange(0,0);
          situationLineAndBarChart('2ndTabLine',this.industry.chart[0]);
          pieChartY('2ndTabPie',this.industry.chart[1].series[0].data);
          this.regionChange(0);

          // console.log('line', );
        },500);
      },
      investmentChange(index) {
        this.investmentActive = index;
        this.$nextTick(()=>{
          drawJmHotMap('1stTabMap',this.investment.chart[index+1][0])
        })
      },
      undertakingChange(index,flag) {
        if (flag===0) {
          this.undertakingButtonSelect = index;
          this.undertakingContentActive = 0;
        } else {
          this.undertakingContentActive = index;
        }
        drawJmHotMap('1stTabMapBottom',this.undertakingDataList[this.undertakingButtonSelect].chart[this.undertakingContentActive][0])
      },
      regionChange(index) {
        this.regionButtonSelect = index;
      }
    }
  }
</script>

