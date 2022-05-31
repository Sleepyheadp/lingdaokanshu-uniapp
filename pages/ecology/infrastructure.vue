<template>
  <div>
    
    <!-- <div class="" v-if="tab==0">
      <div class="chartModule">
        <div class="title_time title_time_margin">
          <span class="time">{{this.tabData.data[0].data.base.detail[0][0].year}}年</span>
          <span class="chart_title">{{this.tabData.data[0].data.base.detail[0][0].label}}(目标值{{this.tabData.data[0].data.base.detail[0][1].value}}{{this.tabData.data[0].data.base.detail[0][1].unit}})</span>
        </div>
        <div class="circle">
          <div id="barChart0" class="barChart"></div>
          <div class="line-circle"></div>
        </div>
      </div>
      <div class="chartModule">
        <div class="title_time">
          <span class="time">{{this.tabData.data[0].data.base.detail[1][0].year}}年</span>
          <span class="chart_title">{{this.tabData.data[0].data.base.detail[1][0].label}}(目标值{{this.tabData.data[0].data.base.detail[1][1].value}}{{this.tabData.data[0].data.base.detail[1][1].unit}})</span>
        </div>
        <div class="circle">
          <div id="barChart1" class="barChart"></div>
          <div class="line-circle"></div>
        </div>
      </div>
      <div class="chartModule">
        <div class="title_time">
          <span class="time">{{this.tabData.data[0].data.base.detail[2][0].year}}年</span>
          <span class="chart_title">{{this.tabData.data[0].data.base.detail[2][0].label}}(目标值{{this.tabData.data[0].data.base.detail[2][1].value}}{{this.tabData.data[0].data.base.detail[2][1].unit}})</span>
        </div>
        <div class="circle">
          <div id="barChart2" class="barChart"></div>
          <div class="line-circle"></div>
        </div>

      </div>
      <div class="chartModule">
        <div class="title_time">
          <span class="time">{{this.tabData.data[0].data.base.detail[3][0].year}}年</span>
          <span class="chart_title">{{this.tabData.data[0].data.base.detail[3][0].label}}(目标值{{this.tabData.data[0].data.base.detail[3][1].value}}{{this.tabData.data[0].data.base.detail[3][1].unit}})</span>
        </div>
        <div class="circle">
          <div class="barChart" id="barChart3"></div>
          <div class="line-circle"></div>
        </div>

      </div>
    </div> -->
    <div class="" v-if="tab==1" >
      <div class="content" v-for="(item,index) in infrastructureList"
      :class="{first: index===0,second: index===1,third: index===2}"
      >{{item[0].label}}:
        <span>{{item[0].value}}</span>
        <span>{{item[0].unit}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import {circleBar} from "../../charts/h5-chart"
    export default {
      name: "infrastructure",
      props:{
        tabData:{
          type:Object
        }
      },
      data(){
        return{
          // titleList:[{name:'环保设施'}],
          tab:'1',
          infrastructureList:[]
        }
      },
      watch:{
        'tabData.data':function (newValue, oldValue) {
          this.initWin();
        }
      },
      methods:{
        initWin(){
          // this.$nextTick(() => {
          //   circleBar("barChart0",this.tabData.data[0].data.base.detail[0])
          //   circleBar("barChart1",this.tabData.data[0].data.base.detail[1])
          //   circleBar("barChart2",this.tabData.data[0].data.base.detail[2])
          //   circleBar("barChart3",this.tabData.data[0].data.base.detail[3])
          // })
          this.infrastructureList = this.tabData.data[0].data.base.detail
          console.log('this.infrastructureList',this.tabData.data[0].data.base.detail)
        },
        // selectTab(val){
        //   if( val == 0){
        //     this.tab = '0'
        //     this.initWin();
        //   }else{
        //     this.tab = '1'
        //   }
        // },
      },
    }
</script>

<style lang="less" scoped>
  @import url("./ecology.less");
  // .title{
  //   width: 100%;
  //   height: 40rpx;
  //   margin-top: 10rpx;
  //   margin-left: 17rpx;
  // }
  .sub_title{
    height: 0.88rem;
    float: left;
    padding-left: 0.50667rem;
    padding-right: 0.50667rem;
    border: 0.01333rem solid #f2f2f2;
    background-color: #f2f2f2;
    border-radius: 0.44rem;
    font-size: 0.32rem;
    color: #000;
    line-height: 0.88rem;
    margin-right: 0.26667rem;
    font-family: 'PingFang-SC-Bold';
  }
.content{
  width: 95%;
  margin: 10rpx auto;
  height: 265rpx;
  text-align: center;
  line-height: 265rpx;
  color: #f2f2f2;
  font-size: 36rpx;
  border-radius: 10rpx;
  background-color: rgb(121, 190, 255);
    
      &.first{
        background-color: #f9e99e;
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      &.second{
        background-color: #baf17c;
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      &.third{
        background-color: rgb(121, 190, 255);
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
}
  
  .chartModule{
    margin-top:1rpx;
  }
  // .chartModule:last-child {
  //    padding-bottom: 70rpx;
  //  }
  .title_time_margin{
    margin-top: 34rpx;
  }
  .barChart{
    width:100%;
    height: 422rpx;
  }


</style>
