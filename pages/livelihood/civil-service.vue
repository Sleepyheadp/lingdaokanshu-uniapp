<style lang="less" scoped>
  @import url("../common-class.less");
  .section-civil {
    width: 750rpx;
    float: left;
    margin-bottom: 32rpx;
    &:last-child {
      padding-bottom: 70rpx;
    }
    .title24 {
      line-height: 24rpx;
      font-size: 24rpx;
      color: #353535;
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
      margin-left: 30rpx;
      padding-bottom: 26rpx;
      overflow-y: visible;
      overflow-x: scroll;
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
    .increaseNum {
      line-height: 20rpx;
      font-size: 20rpx;
      color: #09ab80;
      font-family: 'DIN-Medium';
      &::before {
        content: '';
        float: left;
        display: block;
        background: url("../../static/assets/images/h5/upup.png") no-repeat;
        width: 9rpx;
        height: 16rpx;
        margin: 2rpx 0 1rpx 0;
        background-size: 9rpx 16rpx;
      }
    }
    .decreaseNum {
      line-height: 20rpx;
      font-size: 20rpx;
      color: #ef5150;
      font-family: 'DIN-Medium';
      &::before {
        content: '';
        float: left;
        display: block;
        background: url("../../static/assets/images/h5/down.png") no-repeat;
        width: 9rpx;
        height: 16rpx;
        margin: 2rpx 0 1rpx 0;
        background-size: 9rpx 16rpx;
      }
    }
    .increaseIcon {
      width: 23rpx;
      height: 22rpx;
      background: url("../../static/assets/images/h5/increase-icon.png") no-repeat;
      background-size: 23rpx 22rpx;
    }
    .decreaseIcon {
      width: 23rpx;
      height: 22rpx;
      background: url("../../static/assets/images/h5/decrease.png") no-repeat;
      background-size: 23rpx 22rpx;
    }
    .child {
      float: left;
      width: 704rpx;
      height: 144rpx;
      .child-box {
        float: left;
        width: 334rpx;
        height: 144rpx;
        margin-right: 18rpx;
        &:last-child {
          margin-right: 0;
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
      .label-adj {
        float: left;
        margin: 29rpx 0 0 22rpx;
      }
      .data-box {
        width: 100%;
        margin-top: 7rpx;
        float: left;
        .unit-adj {
          float: left;
          margin: 26rpx 0 0 0;
        }
        .num-adj {
          float: left;
          margin-left: 22rpx;
        }
        .icon-adj {
          float: left;
          margin: 26rpx 0 0 4rpx;
        }
        .change-adj {
          float: left;
          margin: 27rpx 0 0 2rpx;
        }
      }
    }
  }
</style>

<template>
  <div class="main">
    <div
      v-for="(item,index) in showData" class="section-civil"
      :id="index===0?'1stTab':(index===1?'2ndTab':(index===2?'3rdTab':(index+1+'thTab')))">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{titleData[index]}}</span>
      </div>
      <div class="slide-box">
        <div class="slide child">
          <div v-for="(eItem,eIndex) in item.detail"
            :class="{green: eIndex%3===0, blue: eIndex%3===1, orange: eIndex%3===2}"
            class="child-box">
            <div class="title24 label-adj">{{eItem.label}}</div>
            <div class="data-box">
              <span class="number50 fl num-adj">{{eItem.value}}</span>
              <span class="title24 unit-adj">{{eItem.unit}}</span>
              <span
                v-if="eItem.increment"
                :class="{increaseIcon: eItem.increment>=0,decreaseIcon: eItem.increment<0}"
                class="fl icon-adj"
              ></span>
              <span
                v-if="eItem.increment"
                :class="{increaseNum: eItem.increment>=0,decreaseNum: eItem.increment<0}"
                class="change-adj">
                {{eItem.increment+eItem.incrementUnit}}
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "civil-service",
    props: ['tabData'],
    data() {
      return {
        // tabData: {},
        showData: [],
        titleData: ['整体概况','福利院','敬老院','精神卫生中心','残疾人补贴']
      }
    },
    mounted() {
      // this.tabData = this.setData();
      // this.initWin();
      console.log('民政服务',this.tabData)
    },
    watch: {
      'tabData.data': function (newValue, oldValue) {
        this.initWin();
      }
    },
    methods: {
      initWin() {
        this.showData = [
          this.tabData.data[0].data.summary,
          this.tabData.data[1].data.welfare,
          this.tabData.data[2].data.gerocomium,
          this.tabData.data[3].data.spirit,
          this.tabData.data[4].data.subsidie,
        ]
        // console.log(this.showData)
      },
    }
  }
</script>

