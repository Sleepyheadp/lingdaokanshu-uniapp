<style lang="less" scoped>
  @import url("../common-class.less");
  .section-business {
    width: 750rpx;
    float: left;
  }
  .chart {
    width: 100%;
    height: 450rpx;
    float: left;
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
  .bar-table {
    width: 700rpx;
    float: left;
    text-align: center;
    margin-left: 30rpx;
    margin-top: 20rpx;
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
      text-align: center;
      font-family: 'PingFang-SC-Medium';
      display: table;
      table-layout: fixed;
      height: 57rpx;
      line-height: 2;
      tr {
        width: 100%;
        height: 57rpx;
        table-layout: fixed;
        text-align: center;
        display: table;
        line-height: 2;
        th:first-child{
          width: 160rpx;
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
        width: 160rpx;
        font-size: 22rpx;
        line-height: 30rpx;
        vertical-align: center;
        border-right: 1rpx solid #e8e8e8;
      }
      td:nth-child(2) {
        width: 200rpx;
        border-right: 1rpx solid #e8e8e8;
      }
    }
  }
  .bar-td {
    width: 386rpx;
    height: 55rpx;
    float: left;
  }
  .shadow-box {
    float: left;
    box-shadow: 0 0 12rpx rgba(129, 129, 129, 0.25);
    border-radius:  6rpx;
    width: 695rpx;
    height: 115rpx;
    float: left;
    margin: 30rpx 0 15rpx 31rpx;
    background: url("../../static/assets/images/h5/service.png") no-repeat 22px 27rpx;
    background-size: 64rpx 64rpx;
    .box {
      float: left;
      height: 100%;
    }
    .left {
      width: 60%
    }
    .right {
      width: 40%
    }
    .label-adj {
      padding: 48rpx 0 0 107rpx;
    }
    .data-adj {
      padding: 32rpx 0 0 0;
    }
    .unit-adj {
      padding: 55rpx 0 0 0;
    }
  }
  .fl {
    float: left;
  }
</style>


<template>
  <div v-if="tabData.data" class="main">
    <div class="section-business">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">商业</span>
      </div>
      <div class="section-content">
        <div class="tab-box-one-line">
          <div
            v-for="(item,index) in businessObj.detail"
            class="four-tab-top-blue">
            <div class="tab">
              <span class="name">{{item.label}}</span><br/>
              <span class="number">{{item.value}}</span>
              <span class="unit">{{item.unit}}</span>
            </div>
            <span v-if="index!=3" class="splitLine"></span>
          </div>
        </div>
        <div class="content">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">服务业主体分布情况（2018年）</span>
          <div class="shadow-box">
            <div class="box left">
              <span class="title24 label-adj fl">{{businessObj.chart.series[0].data[0].name}}</span>
            </div>
            <div class="box right">
              <span class="number50 data-adj fl">{{businessObj.chart.series[0].data[0].value}}</span>
              <span class="title24 fl unit-adj">{{businessObj.chart.series[0].data[0].unit}}</span>
            </div>
          </div>
          <table class="bar-table">
            <thead class="title">
            <tr>
              <th>行业名称</th>
              <th>数值(个)</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in dataList" class="row">
                <td>{{ item.name }}</td>
                <td :id="'landing_'+index+'_1'"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="bottom-text margin-top22">除服务业主体数外，其余指标为2020年数据</div>
    </div>
  </div>
</template>

<script>
  import {percentBar} from "../../charts/h5-chart"
  export default {
    name: "business",
    props: ['tabData'],
    data() {
      return {
        // tabData: {},
        businessObj: {},
        dataList: {},
      }
    },
    watch: {
      'tabData.data': function (newValue, oldValue) {
        this.initWin();
      }
    },
    mounted() {
      // this.tabData = this.setData();
      this.initWin();
    },
    methods: {
      initWin() {
        this.businessObj = this.tabData.data[0].data.business;
        this.dataList = this.businessObj.chart.series[0].data.slice(1,this.businessObj.chart.series[0].data.length)
        this.dataList.forEach((item)=>{
          item.name = item.name.replace('主体数','')
        })
        this.$nextTick(() => {
          this.initBarInTable('landing', this.businessObj.chart.series[0].data.slice(1,this.businessObj.chart.series[0].data.length), ['#39c77f']);
        })
      },
      initBarInTable(id, data, color) {
        let maxData = data[0].value;
        data.forEach((item, index) => {
          let tdId = id + '_' + index + '_1';
          const chartData = [item.value];
          setTimeout(() => {
            percentBar(tdId, chartData, maxData, color, 1);
          }, 500)
        })
      }
    }
  }
</script>

