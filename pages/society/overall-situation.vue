<style lang="less" scoped>
  .main {
    width: 750rpx;
    height: 100%;
    float: left;
    padding-bottom: 20rpx;
    background-color: #fff;
  }
  // 小节标题
  .title {
    width: 100%;
    height: 100rpx;
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
      margin: 39rpx 0 0 13rpx;
      font-family: 'PingFang-SC-Bold';
      font-size: 36rpx;
    }
  }
  .section-overall {
    width: 750rpx;
  }
  .content-item {
    width: 750rpx;
    text-align: center;
    height: 600rpx;
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

        th:first-child {
          width: 200rpx;
          border-right: 1rpx solid #e8e8e8;
        }

        th:nth-child(2) {
          width: 180rpx;
          border-right: 1rpx solid #e8e8e8;
        }

        th:nth-child(3) {
          width: 150rpx;
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
        width: 200rpx;
        border-right: 1rpx solid #e8e8e8;
      }
      td:nth-child(2) {
        width: 180rpx;
        border-right: 1rpx solid #e8e8e8;
      }
      td:nth-child(3) {
        width: 115rpx;
        text-align: right;
        padding-right: 35rpx;
      }
    }
    .red-arrow span:before {
      content: '';
      display: inline-block;
      width: 8rpx;
      height: 16rpx;
      background: url("../../static/assets/images/h5/down-arrow.png") no-repeat;
      background-size: 8rpx 16rpx;
      margin-right: 2rpx;
    }
    .greenArrow span:before {
      content: '';
      display: inline-block;
      width: 8rpx;
      height: 16rpx;
      background: url("../../static/assets/images/h5/up-arrow.png") no-repeat;
      background-size: 8rpx 16rpx;
    }
  }
</style>
<template>
  <div class="main">
    <div class="section-overall">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">整体情况</span>
      </div>
      <div class="content-item">
        <table class="bar-table">
          <thead class="title">
          <tr>
            <th>名称</th>
            <th>数值</th>
            <th>增长情况</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(tItem,tIndex) in overall" class="row">
            <td>{{ tItem.label }}</td>
            <td>{{ tItem.value }}{{ tItem.unit }}</td>
            <td class="red-arrow" :class="{greenArrow:tItem.increment>0}">
              <span>{{ tItem.increment}}{{tItem.incrementUnit}}</span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "overall-situation",
    props: ['tabData'],
    data() {
      return {
        overall: {},
      }
    },
    watch: {
      'tabData.data': function (newValue, oldValue) {
        this.initWin();
      }
    },
    methods: {
      initWin() {
        this.overall = this.tabData.data[0].data.summary.detail || [];
      },
    }
  }
</script>
