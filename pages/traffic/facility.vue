<style lang="less" scoped>
  @import url("./traffic-class.less");
  .trackHeight {
    /*height: 500rpx;*/
    /*height: 1000rpx;*/
  }
  .chartsTop {
    margin-top: -35rpx;
    margin-bottom: -40rpx;
  }
  .chartsLine {
    margin-top: -20rpx;
  }
  .charts {
    width: 100%;
    height: 500rpx;
    float: left;
  }
  .content {
    margin-top: 50rpx;
    width: 100%;
    /*height: 550rpx;*/
  }
  .textarea{
    border: 1rpx solid #7db2e2;
    border-radius: 8rpx;
    background-color: #f6f9fd;
    margin-left: 25rpx;
    padding-top: 30rpx;
    padding-bottom: 30rpx;
    width: 690rpx;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .textarea-content {
      margin-left: 100rpx;
      margin-right: 30rpx;
      position: relative;
    }
    .textarea-content::before {
      position: absolute;
      content: '';
      width: 50rpx;
      height: 50rpx;
      /*background-image: url("../../static/assets/images/h5/info.png");*/
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEJElEQVRogdXaX4hUZRjH8c+cxNCslrAuFjRTUBLCkoKsjbLCqyS6MN2KJCjQgrpJQugPZFd5UxDZIphJphURJEF/QKEbhbK2glIjsyIvLMrALMXcLp4z7pnZnTlnzsw0u19YOHvef79nzvvneZ/3rfSv36dDzMJSXIsFmIOZuAAVnMBvOIKD+Ax78HMnGp/SZvnZWI1VWJiT95L0bz6WZd5/g53Yhh/LCklKlluEt/ADnpVvRDMWpnUcTutcVKaSVg25DFvxBVaUKJ+nZUVa99a0rZYKF2WF6NurRZ/vFpW0jYNpm4UoYshUvCw+e18paeXoS9vclGpoSp4hM7ALa9vXVZo1qYYZzTI1M2Q6PlI7w/SKZULL9EYZGhkyVfwKS7ogqixL8J4G3ayRIS/g1m4paoPb8OJ4CeMZslJvx0Qea8QCXEP9yt6PVwpU9gsOYKR9XWO4AvNy8mzCJzhafVFvyEbNp9h/8Qg242zrGgtzF17XeHD3Ca33Vl9ku9ZiDOY08CqGdNcIeBfP5eQZFJpRa8jT8lfsD8vpKsXHOekVoRmjhlyO5QUq/7ukqDKcKpBnuRhT5wy5T2cdwP+LBA9UH8gMmknISsKQWbiyt1raYj7mJibmCt4qSxOxx57sXJ2IT1OWVWKVP4XXMK0u/WEcx0k8b+z0vhF/4Vc82oaOBYl8d6ARc4T4fuGR3o8nMulL8BIuFgauwz2Z9EE8LlbvmcJRvbGklrkJLi1Z+BpjXerrM88Dxn6BgczzTXVpFdxQUktfgotKFv5K+F5ZhjPP+8cp82Xm+dNx0r8uqeXCdhbB7/GQGAMjeAcbMum78YzwBs4IR3NzJn2biAWcwT8iJPRBWTGV/vX7/lT8q9yB9+veJThfY/dlKs5rkj5NOKH1LslV4qsX4fcpYsYo272kIpr5YKdzynfCf/sjEV1ksnM4waFeq+gABxMRFZ/sDCdidpmI5EYXM+xJxPnEt10S0w63FMz3nXSMwPbuaCnNUjxVMO+bjEZRtosFqcwCOYAHNQlntsg8maBCDmexhVFDjogQ6Z0tNHg7nsTNLZTpNLvEYVPNF9ggP+BWERv+vSLK0UsjRkQvQm2Abj92qHW169mivLfcaXbg8+o/9WNinXACGzFRjDgutJ6j3pCjJnYAu8pambgv489SOxULZPeKIaGxhkbT7WMm5oq/W4O9fSNDThudnSYKe4WmcbcFzRbAk0bP7npN9SzzZKMMeSv5CfErDHVQVKsMpRpONMtUxCU5LY677tZ8au40x0Vcd438XWZLvtXb4tbPNt05cqsykraxQFwYKESrTuIxcb1isTCskydXZ9M6F6dtHGulcNlrTsOiq1WvOQ0qH9E/gDe0ec2p0sGLZ7PFPuI6EU+eI0Kh1asX2Ytnh0SAbg9+6kTj/wEo4cDXaaBSLAAAAABJRU5ErkJggg==);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      margin-left: -76rpx;
      /*margin-top: 30rpx;*/

    }
  }
</style>
<template>
  <div class="main">
    <!--1公路-->
    <div id="firstTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{ tabData.data[0].name}}</span>
      </div>
      <div class="content-landing">
        <div class="tab-box-one-line-three ">
          <div
            v-for="(item, index) in tabData.data[0].data.road.detail.slice(0,2)"
            class="first-title-box distanceLeftTwo1"
            :class="{first: index===0,second: index===1,third: index===2}"
          >
            <div class="label">{{item.label}}</div>
            <div class="con">
              <div class="num">{{item.value}}<span class="unit">{{item.unit}}</span></div>
              <div :class="{compare1: item.increment.toString().substr(0,1)=='-',compare: item.increment.toString().substr(0,1)!='-'}">{{item.increment.toString().replace("-","")}}{{item.incrementUnit}}</div>
            </div>
          </div>
        </div>
        <div class="clear-both"></div>
        <!--1公路第一个图-->
        <div v-for="(item, index) in tabData.data[0].data.road.detail.slice(0,4)"
             v-if="primaryActive === index"
             class="content">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">{{item.label}}（公里）</span>
          <div class="charts" id="rateBarMap"></div>
        </div>
        <!--2公路第二个图-->
        <div
          v-for="(item, index) in tabData.data[0].data.road.detail.slice(0,4)"
          v-if="primaryActive === index"
          class="content">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">{{item.label}}行政等级构成</span>
          <div class="charts chartsTop" id="pieCharts1"></div>
        </div>
        <!--3公路第三个图1 -->
        <div
          v-for="(item, index) in tabData.data[0].data.road.detail.slice(0,4)"
          v-if="primaryActive === index"
          class="content">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">{{item.label}}路面类型构成</span>
          <div class="charts chartsTop" id="pieCharts2"></div>
        </div>
        <!--公路三个图下面的label -->
        <div class="tab-box-one-line-three ">
          <div
            v-for="(item, index) in tabData.data[0].data.road.detail.slice(2,4)"
            class="first-title-box distanceLeftTwo1 first-title-box-km"
            :class="{first: index===0,second: index===1,third: index===2}"
          >
            <div class="labelKm">{{item.label}}</div>
            <div class="con">
              <div class="numKm">{{item.value}}<span class="unit">{{item.unit}}</span></div>
              <div class="compareKm" :class="{compare1: index===0,compare: index===1}">{{item.increment}}{{item.incrementUnit}}</div>
            </div>
          </div>
        </div>

        <div class="clear-both"></div>
        <!--4公路第四个图-->
        <div class="content"
             v-for="(item, index) in tabData.data[0].data.road.detail.slice(4,7)"
             v-if="primaryActive === index">
          <!--<div class="lineTitle">公路密度(公里/百平方公里)</div>-->
          <!--<span class="blue-bar">包头市</span>-->
          <!--<span class="subtitle">{{item.label}}(公里/百平方公里)</span>-->
          <div class="charts chartsLine" id="employed1"></div>
        </div>
        <!--公路最后一个label-->
        <div class="tab-box-one-line-three ">
          <div
            v-for="(item, index) in tabData.data[0].data.road.detail.slice(4,7)"
            class="first-title-box"
            :class="{first: index===0,second: index===1,third: index===2}"
          >
            <div class="label">{{item.label}}</div>
            <div class="con">
              <div class="numNon">{{item.value}}<span class="unit">{{item.unit}}</span></div>
              <!--<div class="compare">{{item.increment}}{{item.incrementUnit}}</div>-->
            </div>
          </div>
        </div>
        <div class="clear-both"></div>
      </div>
    </div>
    <!--2水运-->
    <div id="secondTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[1].name}}</span>
      </div>
      <div class="content-landing">
        <div class="tab-box-one-line-three ">
          <div
            v-for="(item, index) in tabData.data[1].data.water.detail"
            class="first-title-box distanceLeftTwo1"
            :class="{first: index===0,second: index===1,third: index===2}"
          >
            <div class="label">{{item.label}}</div>
            <div class="con">
              <div class="numNon">{{item.value}}<span class="unit">{{item.unit}}</span></div>
              <div class="compareNon">{{item.increment}}{{item.incrementUnit}}</div>
            </div>
          </div>
        </div>
        <div class="clear-both"></div>
      </div>
    </div>
    <!--3轨道-->
    <div id="thirdTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[2].name}}</span>
      </div>
      <div class="clear-both"></div>
      <div class="content-landing trackHeight">
          <div class="textarea" >
            <div class="textarea-content">{{tabData.data[2].data.track.detail[0].value}}</div>
          </div>
      </div>
    </div>
    <div class="clear-both"></div>
    <div class="bottomDistance"></div>
  </div>
</template>

<script>
  import {barChart, ecologicalLineChart,pieChart } from "../../charts/h5-chart";

  export default {
    name: "facility",
    props: ['tabData'],
    data() {
      return {
        primaryActive: 0,
        textcontent:'we9uf9ufhf',
        activeTab1: 0,
        activeTab2: 0,
        activeTab3: 0,
        activeTab4: 0,
        onLineServiceName: '',
        onLineService: {}, // 在线服务成效度
        serviceName: '',
        service: {}, // 服务事项覆盖度
        onLineHandleName: '',
        onLineHandle: {}, // 在线办理成熟度
        serviceTypeName: '',
        serviceType: {}, // 服务方式完备度
        heatMapColors: ['0%-25%','25%-50%','50%-75%','75%-100%']
      }
    },
    watch: {
      'tabData.data': function (newValue, oldValue) {
        this.initWin();
      }
    },
    mounted(){
      this.initWin();
    },
    methods: {
      switchKindergartenTab(index) {
        this.primaryActive = index;
        if (this.primaryActive === 0) {
          this.$nextTick(() => {
          })
        } else if (this.primaryActive === 1) {
          this.$nextTick(() => {
          })
        } else if (this.primaryActive === 2) {
          this.$nextTick(() => {
          })
        }
      },
      initWin() {
        this.$nextTick(() => {
          // echarts 图1
          this.tabData.data[0].data.road.chart[0].gridTop = '10%';
          this.tabData.data[0].data.road.chart[0].gridLeft = '14%'
          // 图2
          // echarts图4
          this.tabData.data[0].data.road.chart[3].legendShow = 'true';
          this.tabData.data[0].data.road.chart[3].legendRight = 'auto'
          this.tabData.data[0].data.road.chart[3].legendTop = '3%'
          this.tabData.data[0].data.road.chart[3].paddingTop = '40'
          barChart('rateBarMap', this.tabData.data[0].data.road.chart[0]);
          pieChart('pieCharts1',this.tabData.data[0].data.road.chart[1].series[0].data);
          pieChart('pieCharts2',this.tabData.data[0].data.road.chart[2].series[0].data);
          ecologicalLineChart('employed1', this.tabData.data[0].data.road.chart[3]);
        });
      },
    }
  }
</script>
