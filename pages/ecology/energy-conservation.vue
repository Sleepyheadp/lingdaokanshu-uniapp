<template>
  <div>
    <div id="firstTab" class="content" >
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{this.tabData.data[0].name}}</span>
      </div>
      <div class="TotalControlContent">
        <div>
          <div class="title_time">
            <span class="time">{{this.tabData.data[0].data.summary.chart[0].year}}年</span>
            <span class="chart_title">有害物排放情况</span>
          </div>
          <div class="content-table">
            <!--<div class="table-line line1"></div>-->
            <!--<div class="table-line line2"></div>-->
            <table class="bar-table">
              <thead class="title">
              <tr>
                <th v-for="(item,index) in tableColumns">{{ item.title }}</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(tItem,tIndex) in this.tableData" class="row" :class="{tableColor1:index%2!==0,tableColor2:index%2===0}">
                <!--<td v-for="(rItem,rIndex) in tItem">{{ rItem }}</td>-->
                <td  v-for="(rItem,i) in tItem" v-if="i==='label'">{{ rItem }}</td>
                <td  v-for="(rItem,i) in tItem" v-if="i!=='label'" :class="{redColor:(parseFloat(tItem.value)<parseFloat(tItem.increment))&&(i === 'value') }">{{ rItem }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <div class="dottedLine"></div>
      </div>
    </div>
    <div id="secondTab" class="content" >
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{this.tabData.data[1].name}}</span>
      </div>
      <div class="ThreeWasteDischargeContent">
        <div class="tab-two-line-title">
          <div class="tab-two-line-item"
               v-for="(item,index) in tabData.data[1].data.contaminant.detail"
               @click="switchThreeWasteDischargeTab(index)"
               :class="{tabGreenDouble: index===0, tabBlueDouble: index===1, tabYellowDouble: index===2}">
            <div class="tab-two-line-item-top">
              <div class="words">
                <span class="name">{{item.label}}</span><br/>
                <span class="number">{{item.value}}</span>
                <span class="unit">{{item.unit}}</span>
              </div>

            </div>
            <div v-if="ThreeWasteDischargeIndex===index" class="selectTab">
              <img src="../../static/assets/images/h5/tab-selected.png" alt="">
            </div>
          </div>
        </div>
        <div class="bar">
          <div class="BarLineChart" id="ThreeWasteDischargeBarLine"></div>
        </div>
      </div>
      <div>
        <div class="dottedLine"></div>
      </div>
    </div>
    <div id="thirdTab" class="content" >
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{this.tabData.data[2].name}}</span>
      </div>
      <div class="EnergyConsumptionContent">
        <div class="clear-both"></div>
        <div class="tab-title">
          <div  :class="{tab0:index===0,tab1:index===1}"
                v-for="(item,index) in tabData.data[2].data.energy.detail">
            <div :class="{splitLine: index===0}"></div>
            <span class="name" :class="{textAlignChange: index===1}">{{item.label}}</span><br/>
            <div class="tab-margin"></div>
            <span class="number" :class="{colorChange: index===1}">{{item.value}}</span>
            <span class="unit" :class="{unitcolorChange: index===1}">{{item.unit}}</span>
            <img class="img-line" v-if="index===1" src="../../static/assets/images/h5/line.png" alt="">
          </div>
        </div>
        <div class="clear-both"></div>
        <div>
          <div class="BarLineChart" id="EnergyConsumptionBarLine"></div>
        </div>
        <!--<div style="height: 120rpx;"></div>-->
      </div>
      <div>
        <div class="dottedLine"></div>
      </div>
    </div>
    <div id="fourthTab" class="content" >
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{this.tabData.data[3].name}}</span>
      </div>
      <div class="PowerConsumptionContent">

        <div class="tab-title">
          <div  :class="{tab0:index===0,tab1:index===1}"
                v-for="(item,index) in tabData.data[3].data.electric.detail">
            <div :class="{splitLine: index===0}"></div>
            <div class="textAlignChange">
              <span  class="name">{{item.label}}</span><br/>
              <div class="tab-margin"></div>
              <span  class="number" :class="{colorChange: index===1}">{{item.value.toFixed(2)}}</span>
              <span  class="unit" :class="{unitcolorChange: index===1}">{{item.unit}}</span>
              <img class="img-line" v-if="index===1" src="../../static/assets/images/h5/line.png" alt="">
            </div>
            <div v-if="index===1" class="simpleLine"></div>
          </div>
        </div>
        <div class="clear-both"></div>
        <div>
          <div class="BarLineChart" id="PowerConsumptionBarLine"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {LineAndBarChart,agricultureLineAndBarChart} from '../../charts/h5-chart.js'
  export default {
      name: "energy-conservation",
      props:{
        tabData:{
          type:Object
        }
      },
      data(){
        return{
          ThreeWasteDischargeIndex:0,
          tableData:[],
          tableColumns:[
            // {
            //   title:"序号",
            //   key:"num"
            // },
            {
              title:"指标",
              key:"label"
            },
            {
              title:"减少量",
              key:"value"
            },
            {
              title:"减少目标",
              key:"increment"
            }
          ]
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
            this.ThreeWasteDischargeIndex = 0;
            console.log(this.tabData.data[0].data.summary.chart,'E')
            let tableData = []
            this.tabData.data[0].data.summary.chart.forEach(function (item) {
              console.log(item,'item')
              tableData.push({
                'label':item.label,
                'value':item.value.toFixed(2)+item.unit,
                'increment':item.increment.toFixed(2)+item.incrementUnit,
              })
            })
            this.tableData = tableData;
            let lineData = this.tabData.data[1].data.contaminant.chart[0]
            // lineData.gridBottom = 30;
            lineData.gridLeft = 90;
            lineData.legendTop = 5;
            lineData.legendRight = '10%'
            // lineData.gridTop = 100;
            agricultureLineAndBarChart("ThreeWasteDischargeBarLine",lineData);
            let lineData1 = this.tabData.data[2].data.energy.chart
            // lineData1.gridBottom = 80;
            lineData1.gridLeft = 90;
            lineData1.gridTop = 115;
            lineData1.legendRight = '15%'
            agricultureLineAndBarChart("EnergyConsumptionBarLine",lineData1);
            let lineData2 = this.tabData.data[3].data.electric.chart;
            // lineData2.gridBottom = 80;
            lineData2.gridLeft = 90;
            lineData2.gridTop = 115;
            lineData2.legendRight = '15%'
            agricultureLineAndBarChart("PowerConsumptionBarLine",lineData2)          })
        },
        switchThreeWasteDischargeTab(index){
          this.ThreeWasteDischargeIndex = index;
          let lineBarData = this.tabData.data[1].data.contaminant.chart[index]
          lineBarData.legendTop = 5;
          lineBarData.legendRight = '10%'
          agricultureLineAndBarChart("ThreeWasteDischargeBarLine",lineBarData)
        }
      },

    }
</script>

<style lang="less" scoped>
  @import url("ecology.less");
  .clear-both {
    clear: both;
    content: "";
  }
  .table-title{
    height: 25rpx;
    margin-bottom: 25rpx;
  }

  .selectTab{
    margin-top: 7rpx;
    img{
      width:210rpx;
    }
  }
  .bar{
    margin-top: 34rpx
  }


  .img-line{
    width: 130rpx;
    overflow: hidden;
  }

  .table-line{
    width: 1rpx;
    height: 30rpx;
    background-color:#b7c0ca;
    /*background-color: red;*/
    position:absolute;
    top:14rpx;
    z-index: 19;
  }

  .line1{
    left:342rpx;
    width: 1rpx;
  }

  .line2{
    left:532rpx;
    width: 1rpx;
  }

  .table-line1{
    width: 1rpx;
    height: 394rpx;
    background-color:#e8e8e8;
    position:absolute;
    top:55rpx;
    z-index: 19;
  }


  .td-style-left{
    text-align: left;
    width: 272rpx;
    padding-left:48rpx;
  }

  .td-style-right{
    text-align: right;
    width: 137rpx;
    padding-right:53rpx;
  }

  .tab-margin{
    height: 10rpx;
  }


  .borderWidth{
    border-left:1rpx solid #e8e8e8
  }

  .content-table{
    height: 550rpx;
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
          width: 292rpx;
          border-right: 1rpx solid #e8e8e8;
        }
        th:nth-child(2) {
          width: 137rpx;
          border-right: 1rpx solid #e8e8e8;
        }
        th:nth-child(3) {
          width: 137rpx;
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
        width: 232rpx;
        border-right: 1rpx solid #e8e8e8;
        text-align: left;
        padding-left: 60rpx;
      }
      td:nth-child(2) {
        width: 137rpx;
        border-right: 1rpx solid #e8e8e8;
      }
      td:nth-child(3) {
        width: 137rpx;
        height: 55rpx;
      }
    }
  }
</style>
