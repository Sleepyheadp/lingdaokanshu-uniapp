<style lang="less" scoped>
  .main {
    background-color: #fff;
  }
  .section-item {
    background-color: #fff;
    width: 750rpx;
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
  .data-jm {
    width: 702rpx;
    height: 208rpx;
    margin-left: 24rpx;
    font-size: 22rpx;
    background-color: #fff;
    border-radius: 8rpx;
    padding-top: 30rpx;
    font-family: 'PingFang-SC-Medium';
    /*padding: 30px 30rpx;*/
    box-shadow: rgba(129, 129, 129, 0.25) 0 3rpx 12rpx;
  }
  .data-jm-item {
    width: 642rpx;
    float: left;
    padding-left: 30rpx;
    padding-right: 30rpx;
    margin-bottom: 9rpx;
    .item-box {
      display: inline-block;
      float: left;
      width: 100rpx;
    }
    .item-box-wide {
      display: inline-block;
      float: left;
      width: 144rpx;
    }
    .item-key {
      color: #1c70c8;
      font-family: 'PingFang-SC-Bold';
    }
    .detail {;
      display: inline-block;
      float: left;
      width: 498rpx;
    }
  }
  .table-content {
    width: 100%;
    background-color: #fff;
    height: max-content;
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
  .tab-box-one-line {
    width: 693rpx;
    height: 150rpx;
    margin-left: 29rpx;
    box-shadow: 0 0 12rpx rgba(129, 129, 129, 0.25);
    /*display: flex;*/
    margin-top: 30rpx;
    margin-bottom: 80rpx;
  }
  .name {
    font-size: 24rpx;
    font-family: "PingFang-SC-Medium";
    text-align: center;
  }
  .number {
    font-size: 44rpx;
    font-family: 'DIN-Medium';
    text-align: center;
    line-height: 44rpx;
  }
  .unit {
    font-size: 24rpx;
    font-family: "PingFang-SC-Medium";
    text-align: center;
    line-height: 44rpx;
  }
  .three-tab {
    width: 251rpx;
    height:150rpx;
    float:left;
    padding-left: 30rpx;
    text-align: left;
    padding-top: 36rpx;
    &:last-child {
      .splitLine {
        background-color: #fff;
      }
    }
    .tab-with-line {
      width: 250rpx;
      height:150rpx;
      float:left;
    }
    .tabWithLine {
      width: 230rpx;
      height:125rpx;
      float:left;
    }
    .tabWithArray {
      width: 219rpx;
      height: 150rpx;
    }
  }
  .tabActive {
    border-top:solid #1a79c8 4rpx;
    height: 150rpx;
    width: 231rpx;
    padding-top: 32rpx;
    background-image: linear-gradient(rgba(231, 242, 255, 1), rgba(231, 242, 255, 0));
    color: #1a79c8;
  }
  .splitLine {
    float: right;
    width: 1rpx;
    height: 80rpx;
    margin-top: 0;
    background-color: #e1e1e1;
  }
  .no-split-line {
    float: right;
    width: 1rpx;
    height: 80rpx;
    margin-top: 0rpx;
  }
  .subtitle {
    float: left;
    color: #909090;
    font-size: 26rpx;
    margin: -3rpx 0 0 5rpx;
    text-align: center;
    font-family: 'PingFang-SC-Medium';
  }
  .pie-chart {
    width: 100%;
    height: 600rpx;
  }
  .span-item {
    width: 100%;
    height: 40rpx;
  }
  .smallTab {
    width: 170rpx;
    padding-left: 28rpx;
    padding-right: 0;
    .tab-with-line {
      width: 100%;
    }
    .no-split-line {
      margin-top: -146rpx;
    }
  }
  .location-icon {
    display: inline-block;
    width: 24rpx;
    height: 24rpx;
    margin-right: 7rpx;
    margin-bottom: -4rpx;
    /*background: url("../../static/assets/images/h5/location-icon.png") no-repeat;*/
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABoUlEQVRIicXVTUsWURjG8Z8PQdAqXLiKXrRPIEVuKlCjIHRRQVAUWItqE0IfID9CuyCDFlEhRVBEWCDYpgxbtS1FSimKFr2QZBAtZoxhvM95nieILrhhzn3u6/rPwJwZ/rE6qotNozPRzF4cQz82l703mMItPKkbFi/1/blel4Fvw2XsD/a2l3UGkziHhSikkQjfiZlEeF0H8Bw7WgVsxWN0tRC+qi48Kr1NAVexsY3wVXVivBlgNwYSAe9wvaz3iZlB7MkBjiSMN9CDk2V142Zi9ngOsC8wvMYpLFd6yxjBfDCffYLuwHAHK0F/BbeD/pYcoMNafQ56ub1GcoHFwLArA4j2lnKA6cAwLH6zBjAU9J/mANGb0cB9jKG3rDE8CPwwUV3Uv0VTeGHtsd+Ai2Xl9AoP63dX13n8ahKU0mjdGwGe4cpfhN9Vu/sUAC7gZRvhb3E22kgBvuMQPrUQ/gOH8bEdAMzhIL5mZn7iKGZTAzkAxY9kGN8S4SdwLxfQDEBx+PrxodL7oni6ichQVe6fXNWs4oBdw3qcVnxl/79+A0IlSv/wneMFAAAAAElFTkSuQmCC) no-repeat;
    background-size: 24rpx 24rpx;
  }
  .area-icon {
    display: inline-block;
    width: 24rpx;
    height: 24rpx;
    margin-right: 7rpx;
    margin-bottom: -4rpx;
    /*background: url("../../static/assets/images/h5/area-icon.png") no-repeat;*/
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAKxJREFUSInt1D0OQUEUxfEfIRGdXqxDoVHQ0NJoLcBSVCorUNNJNAqrkBC18kVHRV7keVNM4SNONbkn9/xv5k6Gb1fhfqhPdtcMf4V+Tv8Svefiadp85JYCA5RRC/i5CgG6OIdC8lSMaf4IQPqK1qigFZG3xeUVoIMGDhGAEY7pwvfv4A94PyD9TBeoRubNkGCYBRhEhpPxs/7WDrK0wTjHn6MdA0iwD/h/xekGndkUwgDZor8AAAAASUVORK5CYII=) no-repeat;
    background-size: 24rpx 24rpx;
  }
  .population-icon {
    display: inline-block;
    width: 24rpx;
    height: 24rpx;
    margin-right: 7rpx;
    margin-bottom: -4rpx;
    /*background: url("../../static/assets/images/h5/population-icon.png") no-repeat;*/
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAbNJREFUSInt1L+PTFEUB/DPm0zILkHWKsgjEpFQiB+JAkGnEWQaGqHQKkahk+g2GhVBoVHtP7BIKFR2JyKyKxEh2WILGTUhiLGKeyb7Zsy8nYxtJL7Vufd9z/d7z33nXP51ZHm9MQhvByZwAlU8wzW8Xi6x0md/L2rxfTde4Cw2YC1OoYEjwalFzrIGGe5jFnewDncx1iN3JLjrgzsb66zM4DwuRfwYozjep0rYhe3BFbkXywxOF+Jv2FYi3saW4LZxssxgpGtdHcCgGx0a/X7yiqHb4EchHsXXATS+6zx1UeMPg4eF+ADe4lOJ+E/MYX9h71E/gxxbsRjrPVJ73ioxeIBVlmZgMXTyosEmqY/ncR1NqfeP4gNu4GUP8WlcCc6xyGmGxnxojmd5vTGNQ9KgXI7EjdLk1qRp7e6u9mnnpGudxBtpyA7jNvZhJsvrjV/4gp3Snd7EOawuuZpeeI6rmMFmvMeaSrg+xcco88IQ4qRKp6Tua+IJsgpaeBekg0MIFzEmvbykClpVnLH07Ga9sobEPbyq6uz9lcQCFsomeVi0iotugwl8/gvhSWn6/2Nw/AZvclTvsenoFgAAAABJRU5ErkJggg==) no-repeat;
    background-size: 24rpx 24rpx;
  }
  .district-icon {
    display: inline-block;
    width: 24rpx;
    height: 24rpx;
    margin-right: 7rpx;
    margin-bottom: -4rpx;
    /*background: url("../../static/assets/images/h5/district-icon.png") no-repeat;*/
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAdhJREFUSIm11jFsTlEUB/DfV2JqEIlEyoQBEQORaIIuElQjMZgEI4bSxMCESQQDCQviI2wdOthMoknTWdOSSITkq4hB6NCISGu49/vc93zvvdbHfzrvf865/3Pvu+e8x39GDdYNjZfFrMFlHMYqTOIOHpUlNW7tAksrCliPUfQk3A7UsR1nK/J1VfjrucVTDGKgE4FN2Bvt9+jFStxIYk53IrAtsS9hHN9wER8iv7UTgZkCew6zbfhFC7xMFjiP7mgfw+ZoP+tEYBZ3o70HDbzF08jN4HYnAnANn6K9AhsT3018rhLI98FynEqEG8J1HM7FTeAhLiTcd2HHP8sEBnA9eZ4XjucxTkbuB47jKk7k8l/jeUrkj+hQ7rmGexjCq8gNYnUUma/IzwgswYF8ALbgCo7gDEaEOVRrE1sq0CsMs3Y4J8ye+3iCtZGvCX3RxAbZi5AR+EM9hzpeYH9JkdBf5DxYIdCN3SX+5k4yhTYFemRnz9+guVaf313fIvu1f2mLxRyWYV9eoOj8Pwrnnr+ORegSCm29p2aj9UX1KYwJX7ExvIv+o0LntrZegbYC0/hSkDAsjIcR4UNUhK+xyNG8wMQCqnqDnXggNOSU8AMwmdjTC1jn3+IXZb1ZLdVh3AoAAAAASUVORK5CYII=) no-repeat;
    background-size: 24rpx 24rpx;
  }
</style>
<template>
  <div class="main">
    <div class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">数字江门</span>
      </div>
      <div class="data-jm">
        <div class="data-jm-item">
          <span class="item-box">
            <span class="location-icon"></span>
            <span class="item-key">区位：</span>
          </span>
          <span>粤港澳大湾区西翼</span>
        </div>
        <div class="data-jm-item">
          <span class="item-box">
            <span class="area-icon"></span>
            <span class="item-key">面积：</span>
          </span>
          <span>地域面积9509平方公里，海域面积2886平方公里</span>
        </div>
        <div class="data-jm-item">
          <span class="item-box">
            <span class="population-icon"></span>
            <span class="item-key">人口：</span>
          </span>
          <span>460万人，居民人均可支配收入增速全省第一</span>
        </div>
        <div class="data-jm-item">
          <div class="item-box-wide">
            <span class="district-icon"></span>
            <span class="item-key">行政区域：</span>
          </div>
          <span class="detail">蓬江区、江海区、新会区、台山市、开平市、鹤山市、恩平市，俗称“五邑”</span>
        </div>
      </div>
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">包头市</span>
      </div>
     <div class="table-content">
        <div class="tab-box-one-line">
          <div
            v-for="(item,index) in environment.detail"
            class="three-tab"
            :class="{smallTab:index!==1}">
            <div class="tab-with-line">
              <span class="name">{{item.label}}</span><br/>
              <span class="number">{{item.value}}</span>
              <span class="unit">{{item.unit}}</span>
            </div>
            <div
              :class="{splitLine: (index===0) || (index===1)}"
              class="no-split-line"></div>
          </div>
        </div>
        <div class="span-item">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">三大产业比例</span>
        </div>

        <div class="pie-chart" id="pieChartOne"></div>
        <div class="span-item" style="margin-top: -40rpx;">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">进出口额比例</span>
        </div>
        <div class="pie-chart" id="pieChartTwo"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {labelPieChart, pieChart} from "../../charts/h5-chart";

  export default {
    name: "investment-environment",
    props: ['tabData'],
    data() {
      return {
        environment: {},
      }
    },
    watch: {
      'tabData.data': function (newValue, oldValue) {
        this.initWin();
      }
    },
    methods: {
      initWin() {
        this.environment = this.tabData.data[0].data.overview;
        this.environment.detail[2].value = this.environment.detail[2].value.toFixed(1);
        this.environment.chart[0].data.series[0].data.forEach((item) => {
          item.name = item.name.slice(0, 4)
        });
        this.environment.chart[1].data.series[0].data.forEach((item) => {
          item.name = item.name.slice(0, 4)
        });
        this.$nextTick(() => {
          // pieChart('pieChartOne',this.environment.chart[0].data.series[0].data, adjust);
          labelPieChart('pieChartOne', this.environment.chart[0].data.series[0].data);
          // pieChart('pieChartTwo', this.environment.chart[1].data.series[0].data, adjust);
          labelPieChart('pieChartTwo', this.environment.chart[1].data.series[0].data);
        })
      }
    }
  }
</script>
