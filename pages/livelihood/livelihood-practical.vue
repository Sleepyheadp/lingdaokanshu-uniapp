<style lang="less" scoped>
  @import url("../common-class.less");
  .main {
    padding-bottom: 137rpx;
    background-color: #fff;
  }
  .section-livelihood {
    width: 750rpx;
    float: left;
    margin-bottom: 32rpx;
    &:last-child {
      margin-bottom: 40rpx;
    }
    .shadow {
      float: left;
      box-shadow: 0 0 12rpx rgba(129, 129, 129, 0.25);
      border-radius:  6rpx;
    }
    .title36-box {
      width: 80%;
      float: left;
      .title-triangle {
        background: url("../../static/assets/images/h5/triangle.png") 0 7rpx no-repeat;
        -webkit-background-size: 12rpx 18rpx;
        background-size: 12rpx 18rpx;
        /*background-position: ;*/
        float: left;
        width: 18rpx;
        height: 33rpx;
      }
      .title-text {
        float: left;
        font-size: 36rpx;
        font-family: 'PingFang-SC-Bold';
        line-height: 36rpx;
        color: #1c1c1c;
      }
    }
    .title24 {
      line-height: 24rpx;
      font-size: 24rpx;
      color: #353535;
    }
    .title20 {
      line-height: 20rpx;
      font-size: 20rpx;
      color: #353535;
    }
    .subtitle20 {
      float: left;
      font-size: 20rpx;
      line-height: 20rpx;
      color: #838383
    }
    .number50 {
      line-height: 50rpx;
      font-size: 50rpx;
      color: #353535;
      font-family: 'DIN-Medium'
    }
    .number44 {
      line-height: 44rpx;
      font-size: 44rpx;
      color: #353535;
      font-family: 'DIN-Medium'
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
    .blue-box {
      float: left;
      padding-top: 27rpx;
      background-color: #f1f6fb;
      border-radius: 5rpx;
      width: 290rpx;
      height:75rpx;
      text-align: center;
    }
    .green-bar-box {
      float: left;
      width: 100%;
    }
    .green-bar {
      float: left;
      width: 100%;
      height: 66rpx;
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
        margin: 0 313rpx 0 313rpx;

      }
      .slide {
        float: left;
        overflow-y: visible;
        width: max-content;
      }
    }
    .content {
      width:100%;
      margin-top:21rpx;
      float: left;
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
    .summary-up {
      width: 692rpx;
      height: 355rpx;
      margin-left: 30rpx;
      .title-adj {
        padding: 34rpx 0 0 30rpx
      }
      .blue-box-adj {
        margin-left: 27rpx;
      }
      .content-left {
        float: left;
        width:346rpx;
        height: 225rpx;
        .title-left-adj {
          float: left;
          padding-top: 22rpx;
          margin: 0 0 2rpx 27rpx;
        }
        .green-bar-adj {
          margin-top: 11rpx;
        }
      }
      .content-right {
        float: left;
        width:345rpx;
        height: 225rpx;
        .title-right-adj {
          margin-left: 28rpx;
        }
        .percent-pie-box {
          float: left;
          width: 100%;
          height: 225rpx;
          .percent-pie {
            float: left;
            width: 100%;
            height: 225rpx;
            margin-top: -26rpx;
          }
        }
      }
    }
    .summary-down {
       width: 692rpx;
       height: 226rpx;
       margin-top: 24rpx;
       margin-left: 30rpx;
      .title-adj {
        padding: 34rpx 0 0 30rpx
      }
      .content-left {
        float: left;
        width:346rpx;
        .blue-box-adj {
          margin-left: 27rpx;
        }
      }
      .split-line-short {
        float: left;
        height: 102rpx;
        width: 1rpx;
        background-color: #e4e4e4;
      }
      .content-right {
        float: left;
        width:345rpx;
        height: 225rpx;
        .title-right-adj {
          margin-left: 28rpx;
        }
        .green-bar-adj {
          margin-top: 10rpx;
        }
      }
     }
    .medical {
      float: left;
      .content-blue {
        width: 235rpx;
        height: 249rpx;
        float: left;
        white-space: normal;
        border-top: solid 4rpx #1c70c8;
        background-color: #f4f8fc;
        margin-left: 18rpx;
        &:first-child {
          margin-left: 0;
        }
        .subtitle-box {
          float: left;
          width: 100%;
          text-align: left;
          height: 81rpx;
          .oneLineSubtitle {
            width:229rpx;
            margin: 45rpx 0 0 6rpx;
          }
          .twoLineSubtitle {
            width:205rpx;
            line-height: 26rpx;
            margin: 16rpx 0 0 15rpx;
          }
        }
        .label-box {
          float: left;
          text-align: center;
          width: 100%;
          height: 60rpx;
        }
        .data-box {
          float: left;
          text-align: center;
          width: 100%;
        }
      }
    }
    .livelihood {
      float: left;
      .content-orange {
        width: 233rpx;
        height: 249rpx;
        float: left;
        white-space: normal;
        border-top: solid 4rpx #f0993c;
        background-color: #fdf9f5;
        margin-left: 18rpx;
        &:first-child {
          margin-left: 0;
        }
        .subtitle-box {
          float: left;
          width: 100%;
          text-align: left;
          height: 81rpx;
          .oneLineSubtitle {
            width:205rpx;
            margin: 45rpx 15rpx 0 15rpx;
          }
          .twoLineSubtitle {
            width:205rpx;
            line-height: 26rpx;
            margin: 16rpx 15rpx 0 15rpx;
          }
        }
        .label-box {
          float: left;
          text-align: center;
          width: 100%;
          height: 60rpx;
        }
        .data-box {
          float: left;
          text-align: center;
          width: 100%;
        }
      }
    }
    .food-left {
      float: left;
      width: 335rpx;
      height: 334rpx;
      margin-left: 27rpx;
      .title-left-pad {
        padding: 33rpx 0 15rpx 25rpx;
      }
      .blue-adj {
        float: left;
        margin-left: 27rpx
      }
      .title-left-down-pad {
        float: left;
        padding: 20rpx 0 0 25rpx;
      }
      .green-bar-adj {
        padding: 16rpx 0 0 0;
      }
    }
    .food-right {
      float: left;
      width: 335rpx;
      height: 334rpx;
      margin-left: 27rpx;
      .subtitle-box {
        width: 100%;
        height: 97rpx;
        .subtitle-adj {
          width:80%;
          float: left;
          line-height: 26rpx;
          padding: 33rpx 0 0 25rpx;
        }
      }
      .title-adj {
        float: left;
        padding-left: 25rpx;
      }
      .chart {
        float: left;
        width: 335rpx;
        height: 213rpx;
      }
    }
    .old {
      width: 687rpx;
      height: 175rpx;
      float: left;
      margin: 6rpx 20rpx 0 0;
      .content-left {
        float: left;
        width: 349rpx;
        .title-left-adj {
          padding: 33rpx 0 0 23rpx;
        }
        .detail-box {
          width: 100%;
          float: left;
          height: 93rpx;
          .detail-left {
            width: 106rpx;
            float: left;
            height: 93rpx;
            .subtitle-adj {
              float: left;
              padding: 24rpx 0 0 30rpx
            }
          }
          .detail-right {
            width: 242rpx;
            float: left;
            height: 93rpx;
            .subtitle-adj {
              float: left;
              padding: 24rpx 0 0 28rpx
            }
          }
          .data-box {
            float: left;
            width: 100%;
            padding: 2rpx 0 0 28rpx
          }
          .split-line56 {
            float: left;
            height: 56rpx;
            margin-top: 29rpx;
            width: 1rpx;
            background-color: #e4e4e4;
          }
        }
      }
      .content-right {
        float: left;
        width: 337rpx;
        .title-right-adj {
          padding: 33rpx 0 0 23rpx;
        }
        .green-bar {
          float: left;
          width: 100%;
          height: 66rpx;
          padding: 13rpx 0 0 0;
        }
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 5rpx;
      }
    }
    .child {
      float: left;
      width: 704rpx;
      margin-left: 26rpx;
      height: 144rpx;
      .child-green {
        float: left;
        width: 334rpx;
        height: 144rpx;
        border-top: solid 4rpx #09ab80;
        background-color: #edf9f5;
      }
      .child-blue {
        float: left;
        width: 334rpx;
        margin-left: 36rpx;
        height: 144rpx;
        border-top: solid 4rpx #1a79c8;
        background-color: #f6f9fd;
      }
      .label-adj {
         float: left;
         margin: 26rpx 0 0 33rpx;
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
          margin-left: 33rpx;
        }
        .icon-adj {
          float: left;
          margin: 26rpx 0 0 11rpx;
        }
        .change-adj {
          float: left;
          margin: 27rpx 0 0 4rpx;
        }
      }
    }
    .poor {
      float: left;
      .content-poor {
        float: left;
        width: 233rpx;
        height: 306rpx;
        border-top: solid 4rpx #f0993c;
        background-color: #fdf9f5;
        margin-left: 18rpx;
        &:first-child {
          margin-left: 0;
        }
        .subtitle-box {
          float: left;
          width:100%;
          height: 66rpx;
          .adj {
            padding: 46rpx 0 0 18rpx
          }
        }
        .label-box {
          float: left;
          width:100%;
          margin: 17rpx 0 0 0;
          text-align: center;
          .num-adj {
            margin: 32rpx 0 0 0;
          }
         }
        .data-box {
          float: left;
          width:100%;
          margin: 32rpx 0 0 0;
          text-align: center;
        }
        .detail-box {
          float: left;
          margin-top: 18rpx;
          width:100%;
          .oneLine {
            padding: 26rpx 0 0 16rpx
          }
          .twoLine {
            padding: 9rpx 0 0 16rpx
          }
        }
      }
    }
    .job {
      width: 703rpx;
      height: 388rpx;
      float: left;
      margin: 0 0 0 21rpx;
      .title {
        float: left;
        font-size: 24rpx;
        height:30rpx;
        width: 100%;
      }
      .content-left {
        float: left;
        width: 411rpx;
        height: 388rpx;
        text-align: left;
        .title-pad-left-up {
          padding: 22rpx 0 20rpx 33rpx;
        }
        .title-pad-left-down {
          padding: 16rpx 0 0 33rpx;
        }
        .blue-left {
          float: left;
          width: 348rpx;
          height: 158rpx;
          margin-left: 30rpx;
          background-color: #f1f6fb;
          border-radius: 5rpx;
          .data-box {
            float: left;
            width: 100%;
            margin-top: 27rpx;
            text-align: center;
          }
          .detail-box {
            float: left;
            width: 100%;
            margin-top: 11rpx;
            .detail-adj {
              padding: 6rpx 0 0 22rpx;
            }
          }
        }
        .green-bar {
          padding-top: 0;
        }
      }
      .content-right {
        float: left;
        width: 291rpx;
        height: 388rpx;
        text-align: center;
        .title-pad-up {
          padding-top: 24rpx;
        }
        .title-pad-down {
          padding-bottom: 29rpx;
        }
        .blue-right {
          float: left;
          width: 226rpx;
          margin-left: 33rpx;
          height: 237rpx;
          background-color: #f1f6fb;
          border-radius: 5rpx;
          .back-img {
            float: left;
            width: 87rpx;
            height: 78rpx;
            margin: 50rpx 0 0 70rpx;
            background: url("../../static/assets/images/h5/entrepreneurial-projects.png") no-repeat;
            background-size: 87rpx 78rpx;
          }
          .data-box {
            float: left;
            width: 100%;
            margin-top: 16rpx;
          }
        }
      }
      .split-line317 {
        float: left;
        height: 317rpx;
        margin-top: 36rpx;
        width: 1rpx;
        background-color: #e4e4e4;
      }
    }
    .people {
      width: 698rpx;
      height: 115rpx;
      float: left;
      margin: 0 0 0 27rpx;
      background: url("../../static/assets/images/h5/whole-process.png") no-repeat 22rpx 27rpx;
      background-size: 62rpx 62rpx;
      .box {
        float: left;
        width:50%;
        height: 100%;
      }
      .label-adj {
        padding: 44rpx 0 0 107rpx;
      }
      .data-adj {
        padding: 32rpx 0 0 100rpx;
      }
      .unit-adj {
        padding: 55rpx 0 0 0;
      }
    }
    .people-chart {
      float: left;
      width: 750rpx;
      height: 475rpx;
    }
    .people-bar-box {
      float: left;
      width: 750rpx;
      height: 150rpx;
      .title-people {
        margin-left: 27rpx;
        width: 723rpx;
        height: 30rpx
      }
      .legend {
        width: 750rpx;
        height: 60rpx;
        float: left;
        .left {
          float: left;
          width: 50%;
          height: 100%;
          .icon {
            float: left;
            width: 12rpx;
            height: 12rpx;
            background-color: #1a79c8;
            border-radius: 6rpx;
            margin: 31rpx 7rpx 0 31rpx;
          }
          .title-adj {
            float: left;
            margin-top: 26rpx;
          }
          .number-left {
            float: left;
            font-size: 24rpx;
            color: #1a79c8;
            margin: 24rpx 0 0 8rpx;
          }
        }
        .right {
          float: right;
          height: 100%;
          width: 50%;
          .icon {
            float: right;
            width: 12rpx;
            height: 12rpx;
            background-color: #f0993c;
            border-radius: 6rpx;
            margin: 31rpx 7rpx 0 31rpx;
          }
          .title-adj {
            float: right;
            margin-top: 26rpx;
          }
          .number-right {
            float: right;
            font-size: 24rpx;
            color: #f09937;
            margin: 24rpx 35rpx 0 8rpx;
          }
        }
      }
      .two-bar {
        float: left;
        width: 690rpx;
        margin: -19rpx 0 0 27rpx;
        height: 64rpx;
      }
    }
    .water {
      float: left;
      width: 335rpx;
      height: 334rpx;
      margin-left: 27rpx;
      &:last-child {
        margin-left: 25rpx;
      }
      .title-adj {
        width:90%;
        float: left;
        line-height: 30rpx;
        margin: 31rpx 0 0 31rpx;
      }
      .green-bar {
        float: left;
        margin-top: 17rpx;
      }
      .detail-box {
        width: 100%;
        float: left;
        height: 93rpx;
        margin-top: 45rpx;
        .detail {
          width: 167rpx;
          float: left;
          height: 93rpx;
          .subtitle-box {
            float: left;
            width: 100%;
            text-align: center;
          }
        }
        .data-box {
          float: left;
          width: 100%;
          margin-top: 3rpx;
          text-align: center;
        }
        .split-line56 {
          float: left;
          height: 56rpx;
          margin-top: 16rpx;
          width: 1rpx;
          background-color: #e4e4e4;
        }
      }
    }
    .city {
      float: left;
      width: 335rpx;
      height: 280rpx;
      margin-left: 27rpx;
      &:last-child {
        margin-left: 25rpx;
      }
      .title-adj {
        width:90%;
        float: left;
        line-height: 30rpx;
        margin: 30rpx 0 0 31rpx;
      }
      .green-bar {
        float: left;
        margin-top: 17rpx;
      }
      .detail-box {
        width: 100%;
        float: left;
        height: 93rpx;
        margin-top: 26rpx;
        .detail {
          width: 167rpx;
          float: left;
          height: 93rpx;
          .subtitle-box {
            float: left;
            width: 100%;
            text-align: center;
          }
        }
        .data-box {
          float: left;
          width: 100%;
          margin-top: 3rpx;
          text-align: center;
        }
        .split-line56 {
          float: left;
          height: 56rpx;
          margin-top: 16rpx;
          width: 1rpx;
          background-color: #e4e4e4;
        }
      }
    }
    .city-bottom {
      width: 700rpx;
      height: 115rpx;
      float: left;
      margin-left: 30rpx;
      margin-top: 24rpx;
      background: url("../../static/assets/images/h5/garbage.png") no-repeat 22rpx 27rpx;
      background-size: 62rpx 62rpx;
      .box {
        float: left;
        height: 100%;
      }
      .left {
        width: 70%
      }
      .right {
        width: 30%
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
  }
  .pieCharts{
    width: 100%;
    height: 350rpx;
    display: block;
  }
  .split-line-long {
    float: left;
    height: 225rpx;
    width: 1rpx;
    background-color: #e4e4e4;
  }
  .split-line110 {
    float: left;
    height: 110rpx;
    width: 1rpx;
    background-color: #e4e4e4;
  }
  .margin-bottom4 {
    margin-bottom: 4rpx
  }
  .margin-top35 {
    margin-top: 35rpx;
  }
  .margin-top-24 {
    margin-top: -24rpx;
  }
  .old-slide-adjust {
    margin-top: -6rpx;
    padding: 0 5rpx;
    &::-webkit-scrollbar-track {
      height: 6rpx;
      width: 63rpx;
      border-radius: 3rpx;
      background: #eeeeee;
      margin: 0 318rpx 0 318rpx !important;
    }
  }
 .tableContent {
    width: 98%;
  }
  .barTable {
    width: 680rpx;
    height: 452rpx;
    float: left;
    text-align: center;
    margin-left: 30rpx;
    /*margin-top: 35rpx;*/
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
        th{
          text-align: center;
          /*height: 50rpx;*/
          /*line-height: 30rpx;*/
          /*white-space: pre;*/
        }
        th:first-child{
          /*width: 25%;*/
          border-right: 1rpx solid #e8e8e8;
        }
        th:nth-child(2) {
          /*width: 25%;*/
          border-right: 1rpx solid #e8e8e8;
          /*border: 1rpx solid red;*/

        }
        th:nth-child(3) {
          /*width: 25%;*/
          border-right: 1rpx solid #e8e8e8;
        }
        th:nth-child(4) {
          /*width: 25%;*/
          border-right: 1rpx solid #e8e8e8;
        }
      }
      .tr2 {
        width: 100%;
        height: 75rpx;
        table-layout: fixed;
        display: table;
        line-height: 2;
        th{
          text-align: center;
          /*height: 50rpx;*/
          line-height: 30rpx;
          /*white-space: pre;*/
        }
        th:first-child{
          /*width: 25%;*/
          border-right: 1rpx solid #e8e8e8;
        }
        th:nth-child(2) {
          /*width: 25%;*/
          border-right: 1rpx solid #e8e8e8;
          /*border: 1rpx solid red;*/

        }
        th:nth-child(3) {
          /*width: 25%;*/
          border-right: 1rpx solid #e8e8e8;
        }
        th:nth-child(4) {
          /*width: 25%;*/
          border-right: 1rpx solid #e8e8e8;
        }
      }
      th {
        font-weight: 300;
      }
      /*.little{*/
        /*width: 12%!important;*/
      /*}*/
    }
    tbody {
      font-size: 22rpx;
      color: #000;
      /*border: 1rpx solid red;*/
      height: 395rpx;
      /*display: block;*/
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
        /*width: 25%;*/
        border-right: 1rpx solid #e8e8e8;
      }
      td:nth-child(2) {
        /*width: 25%;*/
        border-right: 1rpx solid #e8e8e8;
      }
      td:nth-child(3) {
        /*width: 25%;*/
        border-right: 1rpx solid #e8e8e8;
      }
      td:nth-child(4) {
        /*width: 25%;*/
        border-right: 1rpx solid #e8e8e8;
      }
    }
  }
</style>

<template>
  <div v-if="tabData.data" class="main">
    <!--总体概况-->
    <div class="section-livelihood" id="1stTab" defer="defer">
    <div class="title">
      <span class="title-icon-bar-left"></span>
      <span class="title-icon-bar-right"></span>
      <span class="title-text">{{tabData.data[0].name}}</span>
    </div>
    <div class="shadow summary-up">
      <div class="title36-box title-adj">
        <span class="title-triangle"></span>
        <span class="title-text">{{summary.detail[0].label}}</span>
      </div>
      <div class="content">
        <div class="content-left">
          <div class="blue-box blue-box-adj">
            <span class="number">{{summary.detail[0].value}}</span>
            <span class="unit">{{summary.detail[0].unit}}</span>
          </div>
          <div class="green-bar-box">
            <span class="title24 title-left-adj">年度计划完成率</span>
            <div class="green-bar green-bar-adj" id="1stTab-green-bar-top"></div>
          </div>
        </div>
        <div class="split-line-long"></div>
        <div class="content-right">
          <div class="percent-pie-box">
            <span class="title24 title-right-adj">占比</span>
            <div class="percent-pie" id="1stTab-percent-pie"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="shadow summary-down">
      <div class="title36-box title-adj">
        <span class="title-triangle"></span>
        <span class="title-text">十件民生实事投入</span>
      </div>
      <div class="content">
        <div class="content-left">
          <div class="blue-box blue-box-adj">
            <span class="number">{{summary.detail[3].value}}</span>
            <span class="unit">{{summary.detail[3].unit}}</span>
          </div>
        </div>
        <div class="split-line-short"></div>
        <div class="content-right">
          <div class="green-bar-box">
            <span class="title24 title-right-adj">年度计划完成率</span>
            <div class="green-bar green-bar-adj" id="1stTab-green-bar-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!--提高医疗卫生服务水平-->
    <div class="section-livelihood margin-bottom4" id="2ndTab">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[1].name}}</span>
      </div>
      <div class="slide-box">
        <ul class="slide medical">
          <li v-for="item in medicalObj.detail" class="content-blue">
            <div class="subtitle-box">
              <div v-if="item.description"
                   :class="{oneLineSubtitle:item.description.length<=11, twoLineSubtitle:item.description.length>11}"
                   class="subtitle20">
                {{item.description}}</div>
            </div>
            <div class="label-box">
              <span class="title24">{{item.label}}</span>
            </div>
            <div class="data-box">
              <span class="number50">{{item.value}}</span>
              <span class="title24">{{item.unit}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--提高底线民生保障水平-->
    <div class="section-livelihood margin-bottom4" id="3rdTab">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[2].name}}</span>
      </div>
      <div class="slide-box">
        <ul class="slide livelihood">
          <li v-for="item in livelihoodObj.detail" class="content-orange">
            <div class="subtitle-box">
              <div v-if="item.description"
                   :class="{oneLineSubtitle:item.description.length<=10, twoLineSubtitle:item.description.length>10}"
                   class="subtitle20">
                {{item.description}}</div>
            </div>
            <div class="label-box">
              <span class="title24">{{item.label}}</span>
            </div>
            <div class="data-box">
              <span class="number50">{{item.value}}</span>
              <span class="title24">{{item.unit}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--加大市场食品质量安全监管力度-->
    <div class="section-livelihood" id="4thTab">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[3].name}}</span>
      </div>
      <div class="shadow food-left">
        <div class="title24 title-left-pad">{{food.detail[0].label}}</div>
        <div class="blue-box blue-adj">
          <span class="number">{{food.detail[0].value}}</span>
          <span class="unit">{{food.detail[0].unit}}</span>
        </div>
        <div class="green-bar-box">
          <span class="title24 title-left-down-pad">任务完成率</span>
          <span class="green-bar green-bar-adj" id="4thTab-green-bar"></span>
        </div>
      </div>
      <div class="shadow food-right">
        <div class="subtitle-box">
          <span class="subtitle20 subtitle-adj">取得食品经营许可的学校食堂食品安全量化分级</span>
        </div>
        <div class="title24 title-adj">B级以上占比</div>
        <div class="chart" id="4thTab-green-pie"></div>
      </div>
    </div>
    <!--提升养老照护服务水平-->
    <div class="section-livelihood margin-bottom4" id="5thTab">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[4].name}}</span>
      </div>
      <div class="slide-box old-slide-adjust">
        <div class="slide">
          <div v-for="(item, index) in oldObj.detail" class="shadow old">
            <div class="content-left">
              <div class="title24 title-left-adj">{{item.title}}</div>
              <div class="detail-box">
                <div class="detail-left">
                  <span class="subtitle20 subtitle-adj">{{item.subtitle[0]}}</span>
                  <div class="data-box">
                    <span class="number">{{item.value[0]}}</span>
                    <span class="title20">{{item.unit[0]}}</span>
                  </div>
                </div>
                <div class="split-line56"></div>
                <div class="detail-right">
                  <span class="subtitle20 subtitle-adj">{{item.subtitle[1]}}</span>
                  <div class="data-box">
                    <span class="number">{{item.value[1]}}</span>
                    <span class="title20">{{item.unit[1]}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="split-line110 margin-top35"></div>
            <div class="content-right">
              <div class="title24 title-right-adj">建设进度</div>
              <div class="green-bar" :id="'5thTab-green-bar'+index"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--促进幼儿学前教育发展-->
    <div class="section-livelihood margin-bottom4" id="6thTab">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[5].name}}</span>
      </div>
      <div class="child">
        <div class="child-green">
          <div class="title24 label-adj">公办幼儿园在园幼儿占比</div>
          <div class="data-box">
            <span class="number50 fl num-adj">{{childhood.detail[0].value}}</span>
            <span class="title24 unit-adj">{{childhood.detail[0].unit}}</span>
            <span
              :class="{increaseIcon: childhood.detail[0].increment>=0,decreaseIcon: childhood.detail[0].increment<0}"
              class="fl icon-adj"
            ></span>
            <span
              :class="{increaseNum: childhood.detail[0].increment>=0,decreaseNum: childhood.detail[0].increment<0}"
              class="change-adj">
                {{childhood.detail[0].increment+childhood.detail[0].incrementUnit}}
            </span>
          </div>
        </div>
        <div class="child-blue">
          <div class="title24 label-adj">公办和普惠性民办幼儿占比</div>
          <div class="data-box">
            <span class="number50 num-adj">{{childhood.detail[1].value}}</span>
            <span class="title24 unit-adj">{{childhood.detail[1].unit}}</span>
            <span
              :class="{increaseIcon: childhood.detail[1].increment>=0,decreaseIcon: childhood.detail[1].increment<0}"
              class="icon-adj"
            ></span>
            <span
              :class="{increaseNum: childhood.detail[1].increment>=0,decreaseNum: childhood.detail[1].increment<0}"
              class="change-adj">
                {{childhood.detail[1].increment+childhood.detail[1].incrementUnit}}
            </span>
          </div>
        </div>
      </div>
    </div>
    <!--打赢精准脱贫攻坚战-->
    <div class="section-livelihood margin-bottom4" id="7thTab">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[6].name}}</span>
      </div>
      <div class="pieCharts" id="piecharts" style="margin:0 auto;"></div>
        <div class="livelihoodTable" style="width:295rpx;">
           <table class="barTable"  style="height:20rpx;">
              <thead class="title">
              <tr class="tr2">
                <th v-for="(item,index) in livelihoodColumns">{{ item.title }}</th>
              </tr>
              </thead>
              <tbody>
              <tr class="row" v-for="(tItem,tIndex) in livelihoodTableData">
                <td v-for="(rItem,tIndex) in tItem">{{ rItem}}</td>
              </tr>
              </tbody>
            </table>
      </div>
    </div>
    <!--打赢精落实就业创业帮扶政策-->
    <div class="section-livelihood" id="8thTab">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[7].name}}</span>
      </div>
      <div class="shadow job">
        <div class="content-left">
          <div class="title title-pad-left-up">培训各类劳动者</div>
          <div class="blue-left">
            <div class="data-box">
              <span class="number44">{{job.detail[0].value}}</span>
              <span class="title20">{{job.detail[0].unit}}</span>
            </div>
            <div class="detail-box">
              <span class="subtitle20 detail-adj">“粤菜师傅”{{job.detail[2].value+job.detail[2].unit}}</span>
              <span class="subtitle20 detail-adj">各类家政相关从业人员{{job.detail[3].value+job.detail[3].unit}}</span>
            </div>
          </div>
          <div class="title title-pad-left-down">全年目标完成率</div>
          <div class="green-bar" id="8thTab-green-bar"></div>
        </div>
        <div class="split-line317"></div>
        <div class="content-right">
          <div class="title title-pad-up">推出“粤菜师傅”</div>
          <div class="title title-pad-down">彩虹计划创业项目</div>
          <div class="blue-right">
            <div class="back-img"></div>
            <div class="data-box">
              <span class="number44">{{job.detail[4].value}}</span>
              <span class="title20">{{job.detail[4].unit}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--打通便民服务最后一公里-->
    <div class="section-livelihood" id="9thTab">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[8].name}}</span>
      </div>
      <div class="shadow people">
        <div class="box">
          <span class="title24 label-adj fl">{{people.detail[0].label}}</span>
        </div>
        <div class="box">
          <span class="number50 data-adj fl">{{people.detail[0].value}}</span>
          <span class="title24 fl unit-adj">{{people.detail[0].unit}}</span>
        </div>
      </div>
      <div class="people-chart" id="9thTab-bar"></div>
      <div class="people-bar-box">
        <div class="title title-people">粤省事、粤商通上线服务事项</div>
        <div class="legend">
          <div class="left">
            <span class="icon"></span>
            <span class="title24 title-adj">粤省事</span>
            <span class="number-left">{{people.detail[1].value}}</span>
          </div>
          <div class="right">
            <span class="number-right num-adj">{{people.detail[2].value}}</span>
            <span class="title24 title-adj">粤商通</span>
            <span class="icon"></span>
          </div>
        </div>
        <div class="two-bar" id="9thTab-two-bar"></div>
      </div>
    </div>
    <!--着力解决群众饮水难题-->
    <div class="section-livelihood margin-top-24" id="10thTab">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[9].name}}</span>
      </div>
      <div class="shadow water">
        <div class="title24 title-adj">322条革命老区自然村集中供水覆盖任务进度</div>
        <div class="green-bar" id="10thTab-bar-left"></div>
        <div class="detail-box">
          <div class="detail">
            <div class="subtitle-box"><span class="subtitle20" style="float: none">已覆盖</span></div>
            <div class="data-box">
              <span class="number44">{{water.detail[1].value}}</span>
              <span class="title20">{{water.detail[1].unit}}</span>
            </div>
          </div>
          <div class="split-line56"></div>
          <div class="detail">
            <div class="subtitle-box"><span class="subtitle20" style="float: none">未覆盖</span></div>
            <div class="data-box">
              <span class="number44">{{water.detail[2].value}}</span>
              <span class="title20">{{water.detail[2].unit}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="shadow water">
        <div class="title24 title-adj">123条自然村集中供水全覆盖任务进度</div>
        <div class="green-bar" id="10thTab-bar-right"></div>
        <div class="detail-box">
          <div class="detail">
            <div class="subtitle-box"><span class="subtitle20" style="float: none">已覆盖</span></div>
            <div class="data-box">
              <span class="number44">{{water.detail[4].value}}</span>
              <span class="title20">{{water.detail[4].unit}}</span>
            </div>
          </div>
          <div class="split-line56"></div>
          <div class="detail">
            <div class="subtitle-box"><span class="subtitle20" style="float: none">未覆盖</span></div>
            <div class="data-box">
              <span class="number44">{{water.detail[5].value}}</span>
              <span class="title20">{{water.detail[5].unit}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--提升城市综合管理水平-->
    <div class="section-livelihood" id="11thTab">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[10].name}}</span>
      </div>
      <div class="shadow city">
        <div class="title24 title-adj">旧楼加装电梯项目进度</div>
        <div class="green-bar" id="11thTab-bar-left"></div>
        <div class="detail-box">
          <div class="detail">
            <div class="subtitle-box"><span class="subtitle20" style="float: none">已完工</span></div>
            <div class="data-box">
              <span class="number44">{{city.detail[1].value}}</span>
              <span class="title20">{{city.detail[1].unit}}</span>
            </div>
          </div>
          <div class="split-line56"></div>
          <div class="detail">
            <div class="subtitle-box"><span class="subtitle20" style="float: none">未完工</span></div>
            <div class="data-box">
              <span class="number44">{{city.detail[2].value}}</span>
              <span class="title20">{{city.detail[2].unit}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="shadow city">
        <div class="title24 title-adj">老旧小区改造项目进度</div>
        <div class="green-bar" id="11thTab-bar-right"></div>
        <div class="detail-box">
          <div class="detail">
            <div class="subtitle-box"><span class="subtitle20" style="float: none">已完工</span></div>
            <div class="data-box">
              <span class="number44">{{city.detail[4].value}}</span>
              <span class="title20">{{city.detail[4].unit}}</span>
            </div>
          </div>
          <div class="split-line56"></div>
          <div class="detail">
            <div class="subtitle-box"><span class="subtitle20" style="float: none">未完工</span></div>
            <div class="data-box">
              <span class="number44">{{city.detail[5].value}}</span>
              <span class="title20">{{city.detail[5].unit}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="shadow city-bottom">
        <div class="box left">
          <span class="title24 label-adj fl">{{city.detail[6].label}}</span>
        </div>
        <div class="box right">
          <span class="number50 data-adj fl">{{city.detail[6].value}}</span>
          <span class="title24 fl unit-adj">{{city.detail[6].unit}}</span>
        </div>
      </div>
    </div>
    <!--城市事件-->
    <div class="section-livelihood" id="12thTab">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[11].name}}</span>
      </div>
      <div class="pieCharts" id="pieFirstCharts" style="margin:0 auto;"></div>
      <div class="pieCharts" id="pieSecondCharts" style="margin:0 auto;"></div>
    </div>
  </div>
</template>

<script>
  import {remToPx} from '../../libs/util.js'
  import {getDataPoor} from "../../api/h5-chart";
  // import {drawPieCharts} from './echats.js'
  import {greenPercentBar,orangePercentBar,greenPercentPie,barChart,
  livelihoodTwoStackBar,pieChartY,pieChartTitle,drawPieCharts,drawPieCharts1} from "../../charts/h5-chart"
  export default {
      name: "livelihood-practical",
      props: ['tabData'],
    data() {
      return {
        // tabData: {},
        detailId: '',
        cityEvent:'',
        detailId1:'',
        livelihoodTableData:[],
        livelihoodColumns:[
          {
					title: '贫困人员身份证号',
					key: 'idCard',
					align: 'left',
					ellipsis: true,
					tooltip: true
				},
				{
					title: '帮扶项目开始时间',
					key: 'beginTime',
					align: 'left',
					ellipsis: true,
					tooltip: true
				},
        	{
					title: '帮扶项目结束时间',
					key: 'endTime',
					align: 'left',
					ellipsis: true,
					tooltip: true
				},
        	{
					title: '贫困家庭领取金额',
					key: 'amount',
					align: 'left',
					ellipsis: true,
					tooltip: true
				},
        	{
					title: '贫困家庭居住地址',
					key: 'address',
					align: 'left',
					ellipsis: true,
					tooltip: true
				},
        ],
        summary: {},
        medical: {},
        medicalObj: {
          detail: [],
        },
        livelihood: {},
        livelihoodObj: {
          detail: [],
        },
        food: {},
        old: {},
        oldObj: {
          detail: [],
        },
        childhood: {},
        poor: {},
        poorObj: {},
        job: {},
        people: {},
        water: {},
        city: {},

      }
    },
    watch: {
      'tabData.data': function (newValue, oldValue) {
        this.initWin();
        // alert(222)
      },

      detailId:{

        handler(val, oldVal){
          // this.getDetail(val)
          console.log('val',val)
           this.getDetail(val)

          },
      },
      detailId1:{
        handler(val, oldVal){
          // this.getDetail(val)
          console.log('val',val)
           this.getDetail1(val)
          },
      },
    },
    methods: {
      getDetail(ele){
        let params={
          county:ele,
          pageNo:1,
          pageSize:15
        }
        getDataPoor(params,res=>{
          let data =[]
          data = res.data.data.list
          for( let i=0;i<data.length;i++){
            var newObject = {}
            newObject.idCard = data[i].idCard
            newObject.beginTime = data[i].beginTime
            newObject.endTime = data[i].endTime
            newObject.amount = data[i].amount
            newObject.address = data[i].address
            this.livelihoodTableData.push(newObject)
          }
        })
      },
      getDetail1(ele){

        this.cityEvent = this.tabData.data[11].data.events.chart[2].series[0].data;
        if(ele === '120事件'){
          this.cityEvent = this.tabData.data[11].data.events.chart[3].series[0].data;

        }else if(ele === '12345事件'){
          this.cityEvent = this.tabData.data[11].data.events.chart[2].series[0].data;
        }else if(ele === '119事件占比'){
          this.cityEvent = this.tabData.data[11].data.events.chart[1].series[0].data;
        }else if(ele === '110事件'){
          this.cityEvent = this.tabData.data[11].data.events.chart[4].series[0].data;
        }
        setTimeout(()=>{
           drawPieCharts('pieSecondCharts',this.cityEvent)
        },100)
      },
      getDetailId(e){
      this.detailId = e
      },
      getDetailId1(e){
        this.detailId1 = e
      },
      initWin() {
        this.summary = this.tabData.data[0].data.summary;
        let summaryPercentData = {
          legend: ['公共预算支出','民生投入'],
          value: this.summary.detail[2].value,
        };
        this.medical = this.tabData.data[1].data.medical;
        this.medical.detail.forEach((item,index)=>{
          this.medicalObj.detail[index] = {
            description: item.label.indexOf('==')>0 ? item.label.slice(0,item.label.indexOf('==')):null,
            label: item.label.indexOf('==')>0 ? item.label.slice(item.label.indexOf('==')+2): item.label,
            value: item.value,
            unit: item.unit,
            year: item.year,
          }
        });
        console.log('this.medical.detail',this.medicalObj.detail)
        this.medicalObj.detail[1].description = this.medicalObj.detail[1].description.replace('拥','')
        this.livelihood = this.tabData.data[2].data.livelihood;
        this.livelihood.detail.forEach((item,index)=>{
          this.livelihoodObj.detail[index] = {
            description: item.label.indexOf('==')>0 ? item.label.slice(0,item.label.indexOf('==')):null,
            label: item.label.indexOf('==')>0 ? item.label.slice(item.label.indexOf('==')+2): item.label,
            value: item.value,
            unit: item.unit,
            year: item.year,
          }
        });
        this.food = this.tabData.data[3].data.food;
        this.old = this.tabData.data[4].data.old;
        this.oldObj.detail = [
          {
            title: '区域性养老服务中心',
            subtitle: ['建成','完成基础设施建设'],
            value: [this.old.detail[1].value,this.old.detail[2].value,this.old.detail[0].value],
            unit: [this.old.detail[1].unit,this.old.detail[2].unit,this.old.detail[0].unit],
          },
          {
            title: '居家社区养老服务示范点',
            subtitle: ['方案','完成基础设施建设'],
            value: [this.old.detail[5].value,this.old.detail[4].value,this.old.detail[3].value],
            unit: [this.old.detail[5].unit,this.old.detail[4].unit,this.old.detail[3].unit],
          },
          {
            title: '新建12家长者食堂',
            subtitle: ['建成','完成基础设施建设'],
            value: [this.old.detail[7].value,this.old.detail[8].value,this.old.detail[6].value],
            unit: [this.old.detail[7].unit,this.old.detail[8].unit,this.old.detail[6].unit],
          },
      ];
        this.childhood = this.tabData.data[5].data.childhood;
        this.poor = this.tabData.data[6].data.poor.chart[0].series[0].data;
        let temp=[];
        temp = this.tabData.data[11].data.events.chart[0].series[0].data;
        // this.cityEvent = this.tabData.data[11].data.events.chart[2].series[0].data;
        this.cityEvent=this.tabData.data[11].data.events.chart[2].series[0].data.map(item=> {
          item = {
            name: item.name.replace('12345事件分类-',''),
            value:item.value,
            unit:item.unit
          }
          return item
        })
        this.job = this.tabData.data[7].data.job;
        this.people = this.tabData.data[8].data.people;
        this.people.chart.xaxis = ['马上办','网上办','就近办','一次办'];
        this.people.chart.yNameShow = true;
        this.people.chart.gridTop = remToPx(74/75);
        this.people.chart.gridBottom = remToPx(79/75);
        // this.people.chart.series[0].
        this.water = this.tabData.data[9].data.water;
        this.city = this.tabData.data[10].data.city;
        // this.$nextTick(() => {
        //   console.log(this.summary.detail[1]);
        //   // greenPercentBar('1stTab-green-bar-top',this.summary.detail[1].value);
        // })
        setTimeout(()=>{
          greenPercentBar('1stTab-green-bar-top',this.summary.detail[1].value,27,290);
          orangePercentBar('1stTab-percent-pie',summaryPercentData);
          greenPercentBar('1stTab-green-bar-bottom',this.summary.detail[4].value,30,290);
          greenPercentBar('4thTab-green-bar',this.food.detail[1].value,25,290);

          drawPieCharts('piecharts',this.poor,this.getDetailId)
          let adjust= {
            legendNameWidth:'90'
          }
          drawPieCharts('pieFirstCharts',temp,this.getDetailId1,adjust)
          let adjust2= {
            // legendX: '50%',
            legendNameWidth:'110'
          }
          drawPieCharts('pieSecondCharts',this.cityEvent,'',adjust2)
          // drawPieCharts('pieSecondCharts',this.cityEvent)

          greenPercentPie('4thTab-green-pie',this.food.detail[2] )
          this.oldObj.detail.forEach((item,index)=>{
            greenPercentBar('5thTab-green-bar'+index,item.value[2],38,268);
          })
          greenPercentBar('8thTab-green-bar',this.job.detail[1],36,343)
          barChart('9thTab-bar',this.people.chart)
          livelihoodTwoStackBar('9thTab-two-bar',this.people.detail[1].value,this.people.detail[2].value)
          greenPercentBar('10thTab-bar-left',this.water.detail[0].value,27,290);
          greenPercentBar('10thTab-bar-right',this.water.detail[3].value,27,290);
          greenPercentBar('11thTab-bar-left',this.city.detail[0].value,27,290);
          greenPercentBar('11thTab-bar-right',this.city.detail[3].value,27,290);


        },400)
      },
    }
  }
</script>

