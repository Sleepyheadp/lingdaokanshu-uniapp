<template>
  <div class="content">
    <div class="tab-two-line-title1">
      <div class="tab-two-line-item1"
           v-for="(item,index) in tabData.data[0].data.environment.detail"
           @click="switchMapTab(index)"
           :class="{tabGreenDouble: index===0, tabBlueDouble: index===1, tabYellowDouble: index===2}">
        <div class="tab-two-line-item-top1">
          <div class="words">
            <span class="name" v-if="item.label.length<6||item.label.length===6">{{item.label}}</span>
            <span class="name" v-if="item.label.length>6">{{item.label.slice(0,6)}}</span><br /><span class="name" v-if="item.label.length>6">{{item.label.slice(6)}}</span><br/>
            <span class="number">{{item.value}}</span>
            <span class="unit">{{item.unit}}</span><br/>
          </div>

        </div>
        <div class="line" :class="{splitLineGreen: index===0, splitLineBlue: index===1, splitLineYellow: index===2}"></div>
        <div class="tab-two-line-item-bottom1">
          <div class="words">
            <span class="name">目标值</span><br/>
            <span class="numberBottom">{{item.increment}}</span>
            <span class="unitBottom">{{item.incrementUnit}}</span>
          </div>

        </div>
        <div v-if="mapIndex === index" class="selectTab">
          <img src="../../static/assets/images/h5/tab-selected.png" alt=""/>
        </div>
      </div>
    </div>
    <div class="sub-title">
      <span class="blue-bar">包头市</span>
      <span class="subtitle">{{this.tabData.data[0].data.environment.detail[this.mapIndex].label}}</span>


    </div>

      <div class="mapChart" id="mapChart"></div>


  </div>
</template>

<script>
  import {drawJmHotMap} from "../../charts/h5-chart"
  export default {
    name: "ecology-construction",
    props:{
      tabData:{
        type:Object
      }
    },
    data(){
      return{
        mapIndex:'0'
      }
    },
    watch:{
      'tabData.data':function (newValue, oldValue) {
        this.initWin()
      }
    },
    methods:{
      initWin(){
        this.$nextTick(() => {
          this.mapIndex =0;
          drawJmHotMap("mapChart",this.tabData.data[0].data.environment.chart[0][0])
        })

      },
      switchMapTab(index){
        this.mapIndex = index;
        let mapData = this.tabData.data[0].data.environment.chart[index][0]
        // if((this.mapIndex+1)%2===0){
        //   //黄色色系
        //   let yellowColorList = ['rgba(249,155,55,1)', 'rgba(249,155,55,0.8)', 'rgba(249,155,55,0.6)', 'rgba(249,155,55,0.5)', 'rgba(249,155,55,0.4)', 'rgba(249,155,55,0.2)', 'rgba(249,155,55,0.1)'];
        //   mapData.colorList = yellowColorList;
        // }
        drawJmHotMap("mapChart",mapData)
      }
    },
    // mounted(){
    //   this.initWin();
    // }
  }
</script>

<style lang="less" scoped>
  @import url("ecology.less");
  .sub-title{
    margin-top: 64rpx;
    height: 100%;
    margin-left: 23rpx;
  }
  .content{
    margin-top:35rpx;
    background-color: #fff;
  }
  .mapChart{
    height: 700rpx;
  }
  .selectTab{
    /*margin-top: 17rpx;*/
    position: absolute;
    top: 294rpx;
    margin-top: 7rpx;
    img{
      width: 210rpx;
    }
  }
  .tab-two-line-title1{
    width: 692rpx;
    height: 294rpx;
    /*overflow-x: scroll;*/
    /*overflow-y: hidden;*/
    text-align: center;
    margin: 0 auto;
    /*box-shadow: 0rpx 0rpx 12rpx rgba(129, 129, 129, 0.25);*/
    display: flex;
    white-space: nowrap;
    .tab-two-line-item1{
      flex: 0 0 210rpx;
      height:100%;
      /*padding-top: 40rpx;*/
      margin-right: 34rpx;
      position: relative;
      .tab-two-line-item-top1{
        height: 65%;
        width: 100%;
        display: table;
        .words{
          display: table-cell;
          vertical-align: middle;
        }
      }
      .tab-two-line-item-bottom1{
        height: 35%;
        width: 100%;
        display: table;
        .words{
          display: table-cell;
          vertical-align: middle;
        }
      }
    }
  }
  .line{
    width: 150rpx;
    height: 1rpx;
    margin: 2rpx auto;
    /*background-color: #93E0BA;*/
  }

  .blue-bar {
    width: 95rpx;
    height: 30rpx;
    background-color: #1a79c8;
    border-radius: 18rpx;
    float: left;
    font-size: 22rpx;
    /*margin: 64rpx 0 0 23rpx;*/
    color: white;
    text-align: center;
    font-family: 'PingFang-SC-Medium';
  }
  // 副标题-文本
  .subtitle {
    /*float: left;*/
    color: #909090;
    font-size: 26rpx;
    /*margin: 60rpx 0 0 5rpx;*/
    text-align: center;
    font-family: 'PingFang-SC-Medium';
  }

  /*.mapChart{*/
    /*margin-top: 120rpx;*/
  /*}*/
</style>
