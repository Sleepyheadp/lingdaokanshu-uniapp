<template>
  <div>
    <div id="firstTab" class="content" >
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{this.tabData.data[0].name}}</span>
      </div>
      <div class="AtmosphericEnvironmentContent">
        <div>
          <div class="title_time">
            <span class="time">{{this.tabData.data[0].data.air.detail[0].year}}年</span>
            <span class="chart_title">{{this.tabData.data[0].data.air.detail[0].label}}(目标值{{this.tabData.data[0].data.air.detail[1].value}}{{this.tabData.data[0].data.air.detail[1].unit}})</span>
          </div>
          <div class="circle">
            <div id="AtmosphericBarChart" class="barChart"></div>
            <div class="line-circle"></div>
          </div>

        </div>
        <div style="position: relative;">
          <div class="title_time">
            <span class="time">{{this.tabData.data[0].data.air.detail[1].year}}年</span>
            <div class="chart_title">{{this.tabData.data[0].data.air.chart[0].title}}</div>
          </div>
          <!--<div class="line-table line1"></div>-->
          <!--<div class="line-table line2"></div>-->
          <div class="content-table">
            <table class="bar-table">
              <thead class="title">
              <tr>
                <th v-for="(item,j) in tableColumns">{{ item.title }}</th>
              </tr>
              </thead>
              <tbody>
              <tr  class="row" :class="{tableColor1:index%2!==0,tableColor2:index%2===0}"  v-for="(tItem,index) in this.tableData">
                <td v-for="(rItem,i) in tItem" v-if="i === 'label'">{{ rItem }}</td>
                <td v-for="(rItem,i) in tItem" v-if="i === 'value'">{{ rItem }}</td>
                <td v-for="(rItem,i) in tItem" v-if="i === 'increment'">
                  <img v-if="(parseFloat(tItem.increment)<0)&&(i === 'increment')" class="table-img" src="../../static/assets/images/h5/increase.png" alt=""/>
                  <span v-if="(parseFloat(tItem.increment)>=0)&&(i === 'increment')">&nbsp;</span>
                  {{ Math.abs(parseFloat(rItem)).toFixed(2) }}%</td></tr>
              </tbody>
            </table>
          </div>

          <div>
            <div class="dottedLine"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="secondTab" class="content" >
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{this.tabData.data[1].name}}</span>
      </div>
      <div class="WaterEnvironmentContent">
        <div>
          <div class="title_time">
            <span class="time">{{this.tabData.data[1].data.water.detail[0][0].year}}年</span>
            <span class="chart_title">{{this.tabData.data[1].data.water.detail[0][0].label}}(目标值{{this.tabData.data[1].data.water.detail[0][1].value}}{{this.tabData.data[1].data.water.detail[0][1].unit}})</span>
          </div>

          <div class="circle">
            <div id="WaterBarChart" class="barChart"></div>
            <div class="line-circle"></div>
          </div>
        </div>
        <div>
          <div class="title_time">
            <span class="time">{{this.tabData.data[1].data.water.detail[1][0].year}}年</span>
            <span class="chart_title">{{this.tabData.data[1].data.water.detail[1][0].label}}(目标值{{this.tabData.data[1].data.water.detail[1][1].value}}{{this.tabData.data[1].data.water.detail[1][1].unit}})</span>
          </div>
          <div class="circle">
            <div id="WaterBarChart1" class="barChart"></div>
            <div class="line-circle"></div>
          </div>
        </div>
        <div class="tab-two-line-title1" >
          <div class="tab-two-line-item1"
               v-for="(item,index) in [tabData.data[1].data.water.detail[2],tabData.data[1].data.water.detail[3]]"
               :class="{tabGreenDouble: index===0, tabBlueDouble: index===1}">
            <div class="tab-two-line-item-top1">
              <div class="words">
                <span class="name" v-if="item[0].label.length<10||item[0].length===10">{{item[0].label}}</span>
                <span class="name" v-if="item[0].label.length>10 && index ===0">{{item[0].label.slice(0,10)}}</span><br v-if="index ===0"/>
                <span class="name" v-if="item[0].label.length>10 && index ===0">{{item[0].label.slice(10)}}</span><br v-if="index === 0"/>
                <span class="name" v-if="item[0].label.length>5 && index ===1">{{item[0].label.slice(0,5)}}</span><br v-if="index ===1"/>
                <span class="name" v-if="item[0].label.length>5 && index ===1">{{item[0].label.slice(5)}}</span><br v-if="index === 1"/>
                <span class="number">{{item[0].value}}</span>
                <span class="unit">{{item[0].unit}}</span>
              </div>
            </div>
            <div class="line" :class="{splitLineGreen: index===0, splitLineBlue: index===1}"></div>
            <div class="tab-two-line-item-bottom1">
              <div class="words">
                <span class="name">目标值</span>
                <span class="numberBottom">{{item[1].value}}</span>
                <span class="unitBottom">{{item[1].unit}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="dottedLine-margin">
          <div class="dottedLine"></div>
        </div>
      </div>
    </div>
    <div id="thirdTab" class="content" >
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{this.tabData.data[2].name}}</span>
      </div>

      <div class="AcousticEnvironmentContent">
        <div class="tab-two-line-title">
          <div class="tab-two-line-item"
               v-for="(item,index) in tabData.data[2].data.sound.detail"
               :class="{tabGreenDouble: index===0, tabBlueDouble: index===1}">
            <div class="tab-two-line-item-top">
              <div class="words">
                <span class="name">{{item.label}}</span><br/>
                <span class="number">{{item.value}}</span>
                <span class="unit">{{item.unit}}</span>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="dottedLine-margin">
        <div class="dottedLine"></div>
      </div>
    </div>
    <div id="fourthTab" class="content" >
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{this.tabData.data[3].name}}</span>
      </div>
      <div class="SoilEnvironmentContent">
        <div>
          <div class="title_time">
            <span class="time">{{this.tabData.data[3].data.soil.detail[0][0].year}}年</span>
            <span class="chart_title">{{this.tabData.data[3].data.soil.detail[0][0].label}}(目标值{{this.tabData.data[3].data.soil.detail[0][1].value}}{{this.tabData.data[3].data.soil.detail[0][1].unit}})</span>
          </div>
          <div class="circle">
            <div id="SoilBarChart1" class="barChart"></div>
            <div class="line-circle"></div>
          </div>
        </div>
        <div>
          <div class="title_time">
            <span class="time">{{this.tabData.data[3].data.soil.detail[1][0].year}}年</span>
            <div class="chart_title">{{this.tabData.data[3].data.soil.detail[1][0].label}}(目标值{{this.tabData.data[3].data.soil.detail[1][1].value}}{{this.tabData.data[3].data.soil.detail[1][1].unit}})</div>
          </div>
          <div class="circle">
            <div id="SoilBarChart2" class="barChart"></div>
            <div class="line-circle"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {circleBar} from "../../charts/h5-chart";

  export default {
    name: "environmentalQuality",
    props:{
      tabData:{
        type:Object
      }
    },
    data(){
      return{
        tableData:[],
        tableColumns:[
          // {
          //   title:"序号",
          //   key:"num"
          // },
          {
            title:"污染物",
            key:"label"
          },
          {
            title:"数值",
            key:"value"
          },
          {
            title:"增长情况",
            key:"increment"
          }
        ]
      }
    },
    watch:{
      'tabData.data':function (newValue, oldValue) {
        console.log(this.tabData,'tabData3333333')
        this.initWin();
      }
    },
    methods:{
      initWin(){

        this.$nextTick(() => {
          circleBar("AtmosphericBarChart",this.tabData.data[0].data.air.detail)
          let tableData = []
          this.tabData.data[0].data.air.chart[1].forEach(function (item) {
            tableData.push({
              'label':item.label,
              'value':item.value+item.unit,
              'increment':item.increment.toFixed(2)+item.incrementUnit,
            })
          })
          this.tableData = tableData;
          //水环境
          circleBar("WaterBarChart",this.tabData.data[1].data.water.detail[0])
          circleBar("WaterBarChart1",this.tabData.data[1].data.water.detail[1])

          //土壤环境
          circleBar("SoilBarChart1",this.tabData.data[3].data.soil.detail[0])
          circleBar("SoilBarChart2",this.tabData.data[3].data.soil.detail[1])
        })
        //大气环境
      }
    },
  }
</script>

<style lang="less" scoped>
  @import url("ecology.less");
  .tab-oneValue{
    height: 115rpx;
    width: 692rpx;
    text-align: center;
    background-color: #ffffff;
    border-radius: 8rpx;

    .tab-title{
      float:left;
      font-family: PingFang-SC-Medium;
      color: #1c1c1c;
      font-size: 24rpx;
      width:400rpx ;
      height: 115rpx;
      margin-right: 145rpx;
      .tab-img{
        margin-left:22rpx;
        margin-right:22rpx;
        width: 60rpx;
      }
    }
    .tab-value{
      float:left;
      width:117rpx ;
      height: 115rpx;
      font-family: DIN-Medium;
      font-size: 50rpx;
      color: #353535;
    }
  }

  .tab-two-line-item{
    flex: 0 0 330rpx;
    margin-right: 34rpx;
    .tab-two-line-item-top{
      height: 100%;
      width: 100%;
      display: table;
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
      flex: 0 0 330rpx;
      height:100%;
      margin-right: 34rpx;
      .tab-two-line-item-top1{
        display: table;
        height: 65%;
        width: 100%;
      }
      .tab-two-line-item-bottom1{
        display: table;
        width: 100%;
        height: 35%;
      }
    }
  }
  .line{
    width: 230rpx;
    height: 1rpx;
    margin: 2rpx auto;
    /*background-color: #93E0BA;*/
  }
  .barChart1{
    height: 422rpx;
  }

  .td-style-left{
    text-align: left;
    width:150rpx;
    padding-left:80rpx;
  }
  .td-style-right{
    width: 165rpx;
    text-align: right;
    padding-right:65rpx;
  }

.table-img{
  width: 8rpx;
  height: 16rpx;
  overflow: hidden;
}

.line-table{
  width: 1rpx;
  height: 30rpx;
  background-color:#b7c0ca;
  position:absolute;
  top:90rpx;
  z-index: 9;
}
.line1{
  left:257rpx;
}

.line2{
  left:490rpx;
}
  .words{
    display: table-cell;
    vertical-align: middle;
  }

  .bar-table {
    width: 700rpx;
    height: 400rpx;
    float: left;
    text-align: center;
    margin-left: 30rpx;
    margin-top: 35rpx;
    border: 1rpx solid #e8e8e8;
    border-spacing: 0;
    .title {
      height: 57rpx;
      width: 100%;
      line-height: 2;
    }
    thead {
      background-color: #dfe8f1;
      font-weight: normal;
      color: #1c70c8;
      font-size: 22rpx;
      width: 100%;
      font-family: 'PingFang-SC-Medium';
      display: table;
      table-layout: fixed;
      height: 57rpx;
      line-height: 2;
      tr {
        width: 100%;
        height: 57rpx;
        table-layout: fixed;
        display: table;
        line-height: 2;
        th:first-child{
          width: 232rpx;
          border-right: 1rpx solid #e8e8e8;
        }
        th:nth-child(2) {
          /*width: 137rpx;*/
          border-right: 1rpx solid #e8e8e8;
        }
        th:nth-child(3) {
          /*width: 137rpx;*/
          text-align: center;
        }
      }
      th {
        font-weight: 300;
      }
    }
    tbody {
      font-size: 22rpx;
      color: #000;
      height: 100%;
      display: block;
      font-family: 'PingFang-SC-Medium';
      tr {
        line-height: 2;
        height: 57rpx;
        &:nth-child(odd) {
          background-color: #f7f9fb;
        }
        &:nth-child(even) {
          background-color: #fff;
        }
      }
    }
    thead, tbody tr {
      display: table;
      width: 100%;
      table-layout: fixed;
      td:first-child {
        width: 152rpx;
        border-right: 1rpx solid #e8e8e8;
        text-align: left;
        padding-left: 90rpx;
      }
      td:nth-child(2) {
        /*width: 137rpx;*/
        border-right: 1rpx solid #e8e8e8;
      }
      td:nth-child(3) {
        /*width: 137rpx;*/
        height: 55rpx;
      }
    }
  }

  .content-table{
    height: 500rpx;
  }
</style>
