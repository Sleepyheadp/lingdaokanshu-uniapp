<style lang="less" scoped>
  .clear-both {
    clear: both;
    content: "";
  }
  .main {
    width: 750rpx;
    height: 100%;
    background-color: #fff;
  }
  .section-item {
    width: 750rpx;
    &:last-child {
      padding-bottom: 140rpx;
    }
    .title {
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
  .content-landing {
    width: 750rpx;
    height: 1170rpx;

    .charts {
      width: 100%;
      height: 450rpx;
      float: left;
    }
  }
  .content {
    width: 100%;
    height: 550rpx;
  }
  .table-content {
    width: 100%;
    height: 620rpx;
  }
  .tab-box-one-tab {
    width: 250rpx;
    height: 125rpx;
    margin-left: 29rpx;
    box-shadow: 0 0 12rpx rgba(129, 129, 129, 0.25);
    /*display: flex;*/
    float: left;
  }
  .tab-box-one-line {
    width: 693rpx;
    height: 150rpx;
    margin-left: 29rpx;
    box-shadow: 0 0 12rpx rgba(129, 129, 129, 0.25);
    /*display: flex;*/
    float: left;
  }
  .splitLine {
    float: right;
    width: 1rpx;
    height: 80rpx;
    margin-top: -145rpx;
    background-color: #e1e1e1;
  }
  .includeArray {
    float: right;
    height:121rpx;
    width: 12rpx;
    margin-top: -145rpx;
    /*background: url("../../static/assets/images/h5/include-array.png") no-repeat;*/
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAB5CAYAAAANmsCVAAAB+0lEQVRYhd3YPWsUURTG8d9k44Kg2IiFYmuhrY1gY2fUj6BiEAUrBUGwkCBY+FZpIwjBRhRsxBf0C0hAsLKxsRMtLEQCCpusazEzKtl17pxJxgxOM8Pe85/zMs+557LZvoU5Na8eTNe1RoYsAoQ9/Fsgw6gOUCadNP718khI0xi1CoSr1CiHdoENGlQp7CGcQ6gfwh7WHxjrkRQw1iONqhQC+omQJnpoF+hroNaOJd3IQyjp9Zf36oFwldZg10gMrnEgMbjaF19HB0ptYHNpO1XDeCPuFMD7FNDDbezHZ5xMAVcwg284gU9VwFnMYoCjeMffc5jFpeL5DN6UC5OqNIMbRfwX8PLPxZUe9uKeXDfXMJ//nE0E9uAxNhWGV38vjcaAHXiCrXiB85MSK4EteIqdWMBxDKuA8t5T4/A3ha84go84gAcFXOnhAw7hSwHfSgHwFgexiNO4mALgtVwGA8wVYCUAz3BOXqmbOJwC4C4uF8/zcgVUAnC9APt4hN0pgFx8z+VyeYjtKWCIU3iFbbhfp6e/41gB76q7ayximdi+1FEgNNjDwFLrIQ2aeAgB4Rw6CLRf1nBIA8HDSZMPl0XVOgpXqWNl7SAQ/tJLUaCjPR1Oul0Py02A9velVYWU/K9vJZA87q3R2K0IbDJQEdgwGtL/AoSk8QN+AvjtgUL4FYdcAAAAAElFTkSuQmCC) no-repeat;
    background-size: 100% 100%;
  }
  .name {
    font-size: 24rpx;
    font-family: "PingFang-SC-Medium";
    text-align: left;
  }
  .number {
    font-size: 44rpx;
    font-family: 'DIN-Medium';
    text-align: left;
    line-height: 44rpx;
  }
  .unit {
    font-size: 24rpx;
    font-family: "PingFang-SC-Medium";
    text-align: left;
    line-height: 44rpx;
  }
  .three-tab {
    width: 231rpx;
    /*flex: 1;*/
    height:150rpx;
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
      padding-left: 20rpx;
      padding-top: 36rpx;
    }
    .tabWithLine {
      width: 230rpx;
      /*flex: 1;*/
      height:125rpx;
      float:left;
      padding-left: 30rpx;
      padding-top: 36rpx;
    }
    .tabWithArray {
      width: 219rpx;
      height: 150rpx;
      padding-left: 30rpx;
      padding-top: 36rpx;
    }
    .tab {
      padding-left: 30rpx;
      padding-top: 36rpx;
      .number {
        color: #39c77f;
      }
      .unit {
        color: #39c77f;
        font-size: 44rpx;
        font-family: 'DIN-Medium';
      }
    }
  }
  .blue-bar {
    width: 95rpx;
    heigth: 36rpx;
    background-color: #1a79c8;
    border-radius: 18rpx;
    float: left;
    font-size: 22rpx;
    margin: 0 0 0 23rpx;
    color: white;
    text-align: center;
    font-family: 'PingFang-SC-Medium';
  }
  .subtitle {
    float: left;
    color: #909090;
    font-size: 26rpx;
    margin: -3rpx 0 0 5rpx;
    text-align: center;
    font-family: 'PingFang-SC-Medium';
  }
  .bar-table {
    width: 700rpx;
    height: 456rpx;
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
          width: 110rpx;
          border-right: 1rpx solid #e8e8e8;
        }
        th:nth-child(2) {
          width: 200rpx;
          border-right: 1rpx solid #e8e8e8;
        }
        th:nth-child(3) {
          width: 350rpx;
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
      height: 399rpx;
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
        width: 100rpx;
        border-right: 1rpx solid #e8e8e8;
      }
      td:nth-child(2) {
        width: 200rpx;
        border-right: 1rpx solid #e8e8e8;
      }
      td:nth-child(3) {
        width: 350rpx;
        height: 55rpx;
      }
    }
  }
</style>
<template>
  <div class="main">
    <div id="firstTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{landingSituationName}}</span>
      </div>
      <div class="content-landing">
        <div class="tab-box-one-line">
          <div
            v-for="(item, index) in landingSituation.detail"
            class="three-tab">
            <div :class="{tabWithArray: index===0, tabWithLine: index===1, tab: index===2}">
              <span class="name">{{item.label}}</span><br/>
              <span class="number">{{item.value}}</span>
              <span class="unit">{{item.unit}}</span>
            </div>
            <div :class="{includeArray: index===1, splitLine: index===0, tab: index===2}"></div>
          </div>
        </div>
        <div class="content">
          <div class="charts" id="landingGauge"></div>
        </div>
        <div class="table-content">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">各区项目落地情况</span>
          <table class="bar-table">
            <thead class="title">
            <tr>
              <!-- <th v-for="(item,index) in landingSituation.chart.column" v-if="index!==3">{{ item }}</th> -->
            </tr>
            </thead>
            <tbody>
            <!-- <tr v-for="(tItem,tIndex) in landingSituation.chart.data" class="row">
              <td v-for="(rItem,rIndex) in tItem"  v-if="rIndex!==3&&rIndex!==4" :id="'landing_'+tIndex+'_'+rIndex">{{ rItem }}</td>
            </tr> -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div id="secondTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{startSituationName}}</span>
      </div>
      <div class="content-landing">
        <div class="tab-box-one-line">
          <div
            v-for="(item, index) in startSituation.detail"
            class="three-tab">
            <div :class="{tabWithArray: index===0, tabWithLine: index===1, tab: index===2}">
              <span class="name">{{item.label}}</span><br/>
              <span class="number">{{item.value}}</span>
              <span class="unit">{{item.unit}}</span>
            </div>
            <div :class="{includeArray: index===1, splitLine: index===0, tab: index===2}"></div>
          </div>
        </div>
        <div class="content">
          <div class="charts" id="startGauge"></div>
        </div>
        <div class="table-content">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">各区项目开工情况</span>
          <table class="bar-table">
            <thead class="title">
            <tr>
              <th v-for="(item,index) in startSituation.chart.column" v-if="index!==3">{{ item }}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(tItem,tIndex) in startSituation.chart.data" class="row">
              <td v-for="(rItem,rIndex) in tItem"  v-if="rIndex!==3&&rIndex!==4" :id="'start_'+tIndex+'_'+rIndex">{{ rItem }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div id="thirdTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{productionSituationName}}</span>
      </div>
      <div class="content-landing">
        <div class="tab-box-one-line">
          <div
            v-for="(item, index) in productionSituation.detail"
            class="three-tab">
            <div :class="{tabWithArray: index===0, tabWithLine: index===1, tab: index===2}">
              <span class="name">{{item.label}}</span><br/>
              <span class="number">{{item.value}}</span>
              <span class="unit">{{item.unit}}</span>
            </div>
            <div :class="{includeArray: index===1, splitLine: index===0, tab: index===2}"></div>
          </div>
        </div>
        <div class="content">
          <div class="charts" id="productionGauge"></div>
        </div>
        <div class="table-content">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">各区项目落地情况</span>
          <table class="bar-table">
            <thead class="title">
            <tr>
              <th v-for="(item,index) in productionSituation.chart.column" v-if="index!==3">{{ item }}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(tItem,tIndex) in productionSituation.chart.data" class="row">
              <td v-for="(rItem,rIndex) in tItem"  v-if="rIndex!==3&&rIndex!==4" :id="'production_'+tIndex+'_'+rIndex">{{ rItem }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div id="fourthTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{investmentSituationName}}</span>
      </div>
      <div class="content-landing">
        <div class="tab-box-one-line">
          <div
            v-for="(item, index) in investmentSituation.detail"
            class="three-tab">
            <div :class="{tabWithArray: index===0, tabWithLine: index===1, tab: index===2}">
              <span class="name">{{item.label}}</span><br/>
              <span class="number">{{item.value}}</span>
              <span class="unit">{{item.unit}}</span>
            </div>
            <div :class="{includeArray: index===1, splitLine: index===0, tab: index===2}"></div>
          </div>
        </div>
        <div class="content">
          <div class="charts" id="investmentGauge"></div>
        </div>
        <div class="table-content">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">各区项目落地情况</span>
          <table class="bar-table">
            <thead class="title">
            <tr>
              <th v-for="(item,index) in investmentSituation.chart.column" v-if="index!==3">{{ item }}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(tItem,tIndex) in investmentSituation.chart.data" class="row">
              <td v-for="(rItem,rIndex) in tItem"  v-if="rIndex!==3&&rIndex!==4" :id="'investment_'+tIndex+'_'+rIndex">{{ rItem }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div id="fifthTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{problemSituationName}}</span>
      </div>
      <div class="content-landing">
        <div class="tab-box-one-line">
          <div
            v-for="(item, index) in problemSituation.detail"
            class="three-tab">
            <div :class="{tabWithArray: index===0, tabWithLine: index===1, tab: index===2}">
              <span class="name">{{item.label}}</span><br/>
              <span class="number">{{item.value}}</span>
              <span class="unit">{{item.unit}}</span>
            </div>
            <div :class="{includeArray: index===1, splitLine: index===0, tab: index===2}"></div>
          </div>
        </div>
        <div class="content">
          <div class="charts" id="problemGauge"></div>
        </div>
        <div class="table-content">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">各区项目落地情况</span>
          <table class="bar-table">
            <thead class="title">
            <tr>
              <th v-for="(item,index) in problemSituation.chart.column" v-if="index!==3">{{ item }}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(tItem,tIndex) in problemSituation.chart.data" class="row">
              <td v-for="(rItem,rIndex) in tItem"  v-if="rIndex!==3&&rIndex!==4" :id="'problem_'+tIndex+'_'+rIndex">{{ rItem }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {gaugeChart, percentBar} from "../../charts/h5-chart";

  export default {
    name: "project-monitor",
    props: ['tabData'],
    data() {
      return {
        landingSituationName: '',
        landingSituation: {},
        startSituationName: '',
        startSituation: {},
        productionSituationName: '',
        productionSituation: {},
        investmentSituationName: '',
        investmentSituation: {},
        problemSituationName: '',
        problemSituation: {}
      }
    },
    watch: {
      'tabData.data': function (newValue, oldValue) {
        this.initWin();
      }
    },
    methods: {
      initWin() {
        this.landingSituationName = this.tabData.data[0].name;
        this.startSituationName = this.tabData.data[1].name;
        this.productionSituationName = this.tabData.data[2].name;
        this.investmentSituationName = this.tabData.data[3].name;
        this.problemSituationName = this.tabData.data[4].name;

        this.landingSituation = this.tabData.data[0].data.land;
        this.startSituation = this.tabData.data[1].data.start;
        this.productionSituation = this.tabData.data[2].data.start;
        this.investmentSituation = this.tabData.data[3].data.start;
        this.problemSituation = this.tabData.data[4].data.start;
        this.$nextTick(() => {
          gaugeChart('landingGauge', 0, this.landingSituation.detail[0].value, this.landingSituation.detail[1].value);
          gaugeChart('startGauge', 0, this.startSituation.detail[0].value + this.startSituation.detail[1].value, this.startSituation.detail[0].value);
          gaugeChart('productionGauge', 0, this.productionSituation.detail[0].value, this.productionSituation.detail[1].value);
          gaugeChart('investmentGauge', 0, this.investmentSituation.detail[0].value, this.investmentSituation.detail[1].value);
          gaugeChart('problemGauge', 0, this.problemSituation.detail[0].value, this.problemSituation.detail[1].value);
          // this.initBarInTable('landing', this.landingSituation.chart.data, ['#39c77f']);
          this.initBarInTable('start', this.startSituation.chart.data, ['#39c77f']);
          this.initBarInTable('production', this.productionSituation.chart.data, ['#39c77f']);
          this.initBarInTable('investment', this.investmentSituation.chart.data, ['#39c77f']);
          this.initBarInTable('problem', this.problemSituation.chart.data, ['#39c77f']);
        });
      },
      initBarInTable(id, data, color) {
        let maxData = data[0][2];
        data.forEach((item, index) => {
          let tdId = id + '_' + index + '_2';
          const chartData = [item[2]];
          setTimeout(() => {
            percentBar(tdId, chartData, maxData, color);
          }, 500)
        })
      }
    }
  }
</script>
