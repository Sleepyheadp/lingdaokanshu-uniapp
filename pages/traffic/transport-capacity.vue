<style lang="less" scoped>
  @import url("./traffic-class.less");
  .chartsLine {
    margin-top: -20rpx;
    margin-bottom: -50rpx;
  }
  .chartsLine2 {
    margin-top: -20rpx;
  }
  .echartBar {
    height: 550rpx;
    margin-bottom: -50rpx;
  }
  .chartsTop {
    padding-top: 20rpx;
  }
  .charts {
    width: 100%;
    height: 500rpx;
    float: left;
  }
  .content {
    width: 100%;
  }
</style>
<template>
  <div class="main">
    <!--1运输企业-->
    <div id="firstTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[0].name}}</span>
      </div>
      <div class="content-landing">
        <div class="tab-box-one-line-cover">
          <div
            v-for="(item,index) in tabData.data[0].data.company.detail"
            :class="{tabActiveThree: primaryActive===index}"
            class="three-tab">
            <div class="tab-with-line">
              <span class="name">{{item.label}}</span><br/>
              <span class="num">{{item.value}}</span>
              <span class="unit">{{item.unit}}</span><br/>
              <div class="compare">
                <!--<img class="img1" src="../../static/assets/images/h5/compareUp.png" alt="">
                <img class="img2" src="../../static/assets/images/h5/compareUpImg.png" alt="">-->
                <img class="img1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAACF0lEQVQ4jZXVX2hPYRgH8M9v/ab5k6yUNmlL7YYS2oUSZhfCBRYyRS7cqEm4ELnwm0ItcoE7ocgupmy5EBf6pbjhgrU0KxlCokwrkgsu3nO2X8c557d96+30vO/zfHvO87zv9ynM7CvJQD12YTOWoQEFfMEgHqAXX7MIalL26nAMI9iAO2jHXMzBGtzCarzCKcxOIy8m7Cb0430UPJISMxqtXjSiB8/RgeGszJvxGNexNYM4iU/Ygyt4hCVpmddhAOdxCW1TIK7EZfyIOFZiHApRQ09jKbZHzn+nSV6IvleFBp8glKUeXTicCOiOgvJWdyLmOPZjIaEsW4Rr9SElo9I0/+Ab+rAPZ2uE5t2dJkke+rGJkHkrjmY4lqoQpZ0/Ex6dGizA54zgNqG5aastI2YMtZhVg9+YUSXDG1gfrSNVfCdQjLJuxOscv3coT5FzHv7gZxFDQo3yyJtMlmF5FfJWQdgUcU/Qhb4Ux7Eo42ZBoGKUo7M0dOB+TD6AC1jk/7v+QqhzFrYl7PnYiRUx+XdBeC5iRw5RJeJ30ZzY78E1fGRSFc+hBQcjuyzIahZeCo0bM3l7DmAtzsROsSr+En6xLAyEdvniVUrYXTgpDJfxeLNSz99iHTqFPrTkkMdowE0cihIaqjxMjrlRrMITPBVG3F4sFh5arXAtO4VJNIg3goYPJ7gm9DwN9diNjdIH9EPcljOg/wHs4HKBV5DQ8gAAAABJRU5ErkJggg==" alt="">
                <img class="img2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAlUlEQVQokeXQPQ5BYRCF4cd1FZYgNmAbEqJQqLR2oVHRqsQCNFQsRqMS0Sn8FTeRoFP4JJ8IG/A2M5k5czIzueKiL6KDCnpxMY3yNibI447Bq5GE2MIsCKCPbuzUwBwHnFDGFsPgOE4wxRlV7HANg0uMUEqQoYZNtF8WhCsUUjSx9skRddzSL4IX+/i6n/yX6OL57Tcem/wdD+BznX8AAAAASUVORK5CYII=" alt="">
                <span>
                {{item.increment}}{{item.incrementUnit}}</span>
              </div>
              <!--<span class="compare">-->
              <!--&lt;!&ndash;<img src="../../static/assets/images/h5/compareUp.png" alt="">&ndash;&gt;-->
              <!--&lt;!&ndash;<img src="../../static/assets/images/h5/compareUpImg.png" alt="">&ndash;&gt;-->
              <!--{{item.increment}}{{item.incrementUnit}}</span>-->


            </div>
            <div
              :class="{splitLine: (primaryActive===2 && index===0) || (primaryActive===0 && index===1)}"
              class="no-split-line"></div>
          </div>
        </div>

        <!--<div class="tab-box-one-line3">-->
          <!--<div-->
            <!--v-for="(item, index) in tabData.data[0].data.company.detail.slice(0,3)"-->
            <!--class="first-title-box"-->
            <!--:class="{first: index===0,second: index===1,third: index===2}"-->
          <!--&gt;-->
            <!--<div class="label">{{item.label}}</div>-->
            <!--<div class="num">{{item.value}}<span class="unit-size">{{item.unit}}</span></div>-->
            <!--<div class="compare"><span>同比</span><span class="per">11%</span></div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="clear-both"></div>-->
      </div>
    </div>
    <!--2从业人数-->
    <div class="clear-both"></div>
    <div id="secondTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[1].name}}</span>
      </div>
      <div class="content-landing">
        <div class="tab-box-one-line-one">
          <div
            v-for="(item, index) in tabData.data[1].data.number.detail"
          >
            <div class="label">{{item.label}}</div>
            <div class="con">
              <span class="num">{{item.value}}</span>
              <span class="unit">{{item.unit}}</span>
              <span class="compare">{{item.increment}}{{item.incrementUnit}}</span>
            </div>
          </div>
        </div>
        <div class="clear-both"></div>
        <div class="content">
          <div class="echartBar" id="employed"></div>
        </div>
      </div>
    </div>
    <!--3运输工具-->
    <div class="clear-both"></div>
    <div id="thirdTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{ tabData.data[2].name}}</span>
      </div>
      <div class="content-landing">
        <div class="tab-box-one-line-three ">
          <div
            v-for="(item, index) in tabData.data[2].data.transport.detail"
            class="first-title-box distanceLeftTwo1"
            :class="{first: index===0,second: index===1,third: index===2}"
          >
            <div class="label">{{item.label}}</div>
            <div class="con">
              <div class="num">{{item.value}}<span class="unit">{{item.unit}}</span></div>
              <div class="compare">{{item.increment}}{{item.incrementUnit}}</div>
            </div>
          </div>
        </div>
        <div class="clear-both"></div>
      </div>
    </div>
    <!--4客运量-->
    <div id="fourthTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[3].name}}</span>
      </div>
      <div class="content-landing">
        <div class="tab-box-one-line-cover">
          <div
            v-for="(item,index) in tabData.data[3].data.peopleflow.detail"
            :class="{tabActiveThree: primaryActive===index}"
            class="three-tab">
            <div class="tab-with-line">
              <span class="name">{{item.label}}</span><br/>
              <span class="num">{{item.value}}</span>
              <span class="unit">{{item.unit}}</span><br/>
              <div class="compare" v-if="item.increment.toString().substr(0,1)!='-'">
<!--                <img class="img1" src="../../static/assets/images/h5/compareUp.png" alt="">
                <img class="img2" src="../../static/assets/images/h5/compareUpImg.png" alt="">-->
                <img class="img1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAACF0lEQVQ4jZXVX2hPYRgH8M9v/ab5k6yUNmlL7YYS2oUSZhfCBRYyRS7cqEm4ELnwm0ItcoE7ocgupmy5EBf6pbjhgrU0KxlCokwrkgsu3nO2X8c557d96+30vO/zfHvO87zv9ynM7CvJQD12YTOWoQEFfMEgHqAXX7MIalL26nAMI9iAO2jHXMzBGtzCarzCKcxOIy8m7Cb0430UPJISMxqtXjSiB8/RgeGszJvxGNexNYM4iU/Ygyt4hCVpmddhAOdxCW1TIK7EZfyIOFZiHApRQ09jKbZHzn+nSV6IvleFBp8glKUeXTicCOiOgvJWdyLmOPZjIaEsW4Rr9SElo9I0/+Ab+rAPZ2uE5t2dJkke+rGJkHkrjmY4lqoQpZ0/Ex6dGizA54zgNqG5aastI2YMtZhVg9+YUSXDG1gfrSNVfCdQjLJuxOscv3coT5FzHv7gZxFDQo3yyJtMlmF5FfJWQdgUcU/Qhb4Ux7Eo42ZBoGKUo7M0dOB+TD6AC1jk/7v+QqhzFrYl7PnYiRUx+XdBeC5iRw5RJeJ30ZzY78E1fGRSFc+hBQcjuyzIahZeCo0bM3l7DmAtzsROsSr+En6xLAyEdvniVUrYXTgpDJfxeLNSz99iHTqFPrTkkMdowE0cihIaqjxMjrlRrMITPBVG3F4sFh5arXAtO4VJNIg3goYPJ7gm9DwN9diNjdIH9EPcljOg/wHs4HKBV5DQ8gAAAABJRU5ErkJggg==" alt="">
                <img class="img2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAlUlEQVQokeXQPQ5BYRCF4cd1FZYgNmAbEqJQqLR2oVHRqsQCNFQsRqMS0Sn8FTeRoFP4JJ8IG/A2M5k5czIzueKiL6KDCnpxMY3yNibI447Bq5GE2MIsCKCPbuzUwBwHnFDGFsPgOE4wxRlV7HANg0uMUEqQoYZNtF8WhCsUUjSx9skRddzSL4IX+/i6n/yX6OL57Tcem/wdD+BznX8AAAAASUVORK5CYII=" alt="">
                <span>
                {{item.increment}}{{item.incrementUnit}}</span>
              </div>
              <div class="compare1" v-if="item.increment.toString().substr(0,1)=='-'">
<!--                <img class="img1" src="../../static/assets/images/h5/compareDown.png" alt="">
                <img class="img2" src="../../static/assets/images/h5/compareDownImg.png" alt="">-->
                <img class="img1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAACEElEQVRIia3Vv0uVURgH8M8VcbG2SmsoB2loqCgNRAqdarCs1gLNv6AhiH5AEuGQNrTUVCnUWpI2NHVpCIKGglKIIHHxSkFBTXex4Zzrfe/1vPcq9IUD73vO83yfX+d5TuHXubMaoAPncQZHsRNllPAFc3iO1TyClpz9dkxhAcfwAAdRwHYcx8N4thBl21NErYm9/XiJ9ziQ8K6M5bjmYpR38QHD+Noogm4Uo8JIgjyF1Sg7GXW78yLYhnncwAsMbIK8gt94LKRwHr34A4VMkafQiYuR/M0WDBQxGL+fYQVXqKaoE2O4Xqc4GL1qtIp1OtciVyfVFF3ArFC4LLow3sDzpcTeMl5FznuVCE4Jef9fmMVJqhEcEq5ZysPpJmQjib13Qp9oEfK4QyhMCuNYy1l5WBG6vpBqtDwMZr5HMNpAtq3y0Ro9+Ynd8qOg9rYMNHFmD35grRLBJ/QIrZ+HLOm+JgaO4CPVIr8W5kjKwJLg/a26/WIDA8ORc93AU2Eq3raxF6Y1v0lZ7MVpXKXaySVhlkxskqRLGCVPcLjubCJylagdduNCL4wK+SsKQyyFpYyhIu7H/0tCLXsrglkDfzGEt7ip9lqmUH8+hjs4IU5SNr4H39CPy5jBriZGRJmZqNMfOdaRejK/o0+4x4t4JETWEc/bhEIOxbPFKNsXdWtQ2MKj3yOMlLLwin22iUf/Hx2keR6mS4MrAAAAAElFTkSuQmCC" alt="">
                <img class="img2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAQCAYAAAArij59AAAAfUlEQVQokeXPsQkCURCE4e8eByZiqMlxwYGptWgLmlyshWgoZtqGZxM2Ygma7IMXyFmAA8su/yyzbPXarBV6Rl9lkPzQHy10I36XMKD5YjYYElo8MC/MRbA2YYdlJM2i7sG2Na6Y4IwqEt7occtfXLAvThyCqQt4wjTmY4YffhMPux4f6iUAAAAASUVORK5CYII=" alt="">
                <span>
                {{item.increment.toString().replace("-","")}}{{item.incrementUnit}}</span>
              </div>
            </div>
            <div
              :class="{splitLine: (primaryActive===2 && index===0) || (primaryActive===0 && index===1)}"
              class="no-split-line"></div>
          </div>
        </div>

        <!--左边包含效果-->
        <!--<div class="tab-box-one-line-left">-->
          <!--<div-->
            <!--v-for="(item,index) in tabData.data[3].data.peopleflow.detail"-->
            <!--:class="{tabActiveThree: primaryActive===index}"-->
            <!--class="three-tab">-->
            <!--<div class="tab-with-line-contain">-->
              <!--<span class="label">{{item.label}}</span><br/>-->
              <!--<span class="num">{{item.value}}<span class="content-fize">{{item.unit}}</span></span><br/>-->
              <!--<span class="compare">同比{{item.increment}}{{item.incrementUnit}}</span>-->
            <!--</div>-->
            <!--<div :class="{includeArray: index===0, splitLine: index===1, tab: index===2}"></div>-->
          <!--</div>-->
        <!--</div>-->
        <div class="clear-both"></div>
        <!--<div v-for="(item, index) in this.tabData.data[3].data.peopleflow.detail"-->
             <!--v-if="primaryActive === index"-->
             <!--class="content">-->
          <!--<span class="blue-bar">包头市</span>-->
          <!--<span class="subtitle">{{item.label}}</span>-->
          <!--<div class="charts" id="quantity"></div>-->
        <!--</div>-->
        <div class="content">
          <div class="charts chartsLine" id="quantity"></div>
        </div>
      </div>
    </div>
    <!--5货运量-->
    <div class="clear-both"></div>
    <div id="fifthTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[4].name}}</span>
      </div>
      <div class="content-landing">
        <div class="tab-box-one-line-cover">
          <div
            v-for="(item,index) in tabData.data[4].data.goodsflow.detail"
            :class="{tabActiveThree: primaryActive===index}"
            class="three-tab">
            <div class="tab-with-line">
              <span class="name">{{item.label}}</span><br/>
              <span class="num">{{item.value}}</span>
              <span class="unit">{{item.unit}}</span><br/>
              <div class="compare">
<!--                <img class="img1" src="../../static/assets/images/h5/compareUp.png" alt="">
                <img class="img2" src="../../static/assets/images/h5/compareUpImg.png" alt="">-->
                <img class="img1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAACF0lEQVQ4jZXVX2hPYRgH8M9v/ab5k6yUNmlL7YYS2oUSZhfCBRYyRS7cqEm4ELnwm0ItcoE7ocgupmy5EBf6pbjhgrU0KxlCokwrkgsu3nO2X8c557d96+30vO/zfHvO87zv9ynM7CvJQD12YTOWoQEFfMEgHqAXX7MIalL26nAMI9iAO2jHXMzBGtzCarzCKcxOIy8m7Cb0430UPJISMxqtXjSiB8/RgeGszJvxGNexNYM4iU/Ygyt4hCVpmddhAOdxCW1TIK7EZfyIOFZiHApRQ09jKbZHzn+nSV6IvleFBp8glKUeXTicCOiOgvJWdyLmOPZjIaEsW4Rr9SElo9I0/+Ab+rAPZ2uE5t2dJkke+rGJkHkrjmY4lqoQpZ0/Ex6dGizA54zgNqG5aastI2YMtZhVg9+YUSXDG1gfrSNVfCdQjLJuxOscv3coT5FzHv7gZxFDQo3yyJtMlmF5FfJWQdgUcU/Qhb4Ux7Eo42ZBoGKUo7M0dOB+TD6AC1jk/7v+QqhzFrYl7PnYiRUx+XdBeC5iRw5RJeJ30ZzY78E1fGRSFc+hBQcjuyzIahZeCo0bM3l7DmAtzsROsSr+En6xLAyEdvniVUrYXTgpDJfxeLNSz99iHTqFPrTkkMdowE0cihIaqjxMjrlRrMITPBVG3F4sFh5arXAtO4VJNIg3goYPJ7gm9DwN9diNjdIH9EPcljOg/wHs4HKBV5DQ8gAAAABJRU5ErkJggg==" alt="">
                <img class="img2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAlUlEQVQokeXQPQ5BYRCF4cd1FZYgNmAbEqJQqLR2oVHRqsQCNFQsRqMS0Sn8FTeRoFP4JJ8IG/A2M5k5czIzueKiL6KDCnpxMY3yNibI447Bq5GE2MIsCKCPbuzUwBwHnFDGFsPgOE4wxRlV7HANg0uMUEqQoYZNtF8WhCsUUjSx9skRddzSL4IX+/i6n/yX6OL57Tcem/wdD+BznX8AAAAASUVORK5CYII=" alt="">
                <span>
                {{item.increment}}{{item.incrementUnit}}</span>
              </div>
              <!--<span class="compare">-->
                <!--&lt;!&ndash;<img src="../../static/assets/images/h5/compareUp.png" alt="">&ndash;&gt;-->
                <!--&lt;!&ndash;<img src="../../static/assets/images/h5/compareUpImg.png" alt="">&ndash;&gt;-->
                <!--{{item.increment}}{{item.incrementUnit}}</span>-->
            </div>
            <div
              :class="{splitLine: (primaryActive===2 && index===0) || (primaryActive===0 && index===1)}"
              class="no-split-line"></div>
          </div>
        </div>
        <div class="clear-both"></div>
        <div class="content">
          <div class="charts chartsTop" id="goodsNum"></div>
        </div>
      </div>
    </div>
    <!--6货物吞吐量 -->
    <div class="clear-both"></div>
    <div id="sixthTab" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[5].name}}</span>
      </div>
      <div class="content-landing">
        <div class="tab-box-one-line-one">
          <div
            v-for="(item, index) in tabData.data[5].data.goodstps.detail"
          >
            <div class="labelGoods">{{item.label}}</div>
            <div class="con">
              <span class="num">{{item.value}}</span>
              <span class="unit">{{item.unit}}</span>
              <span class="compare1">{{item.increment.toString().replace("-","")}}{{item.incrementUnit}}</span>
            </div>
          </div>
        </div>
        <div class="clear-both"></div>
        <div class="content">
          <div class="charts chartsLine2" id="lineChart1"></div>
        </div>
      </div>
    </div>
    <div class="clear-both"></div>
    <div class="bottomDistance"></div>
  </div>
</template>

<script>
  import {pileBarAndLineChart, ecologicalLineChart,lineBarChart } from "../../charts/h5-chart";

  export default {
    name: "transport-capacity",
    props: ['tabData'],
    data() {
      return {
        detail:[],
        primaryActive: 0,
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
        this.initWin()
        console.log('tabData',this.tabData)
      }
    },
    mounted(){
      this.initWin()
      // console.log(this.tabData.data[1].data.data,'gergewr')
    },
    methods: {
      switchKindergartenTab(index) {
        this.primaryActive = index;
        if (this.primaryActive === 0) {
          this.$nextTick(() => {
            // ecologicalLineChart('quantity', this.tabData.data[3].data.data.chart[0])
          })
        } else if (this.primaryActive === 1) {
          this.$nextTick(() => {
            // ecologicalLineChart('quantity', this.tabData.data[3].data.data.chart[0])
          })
        } else if (this.primaryActive === 2) {
          this.$nextTick(() => {
            // ecologicalLineChart('quantity', this.tabData.data[3].data.data.chart[0])
          })
        }
      },
      initWin() {
        this.$nextTick(() => {
          // echarts图1
          // this.tabData.data[1].data.number.chart.legendRight = 'auto';
          // this.tabData.data[1].data.number.chart.gridLeft = '14%';
          this.tabData.data[1].data.number.chart.gridLeft = 100;
          // echarts图2
          this.tabData.data[3].data.peopleflow.chart.legendRight = 'auto';
          this.tabData.data[3].data.peopleflow.chart.legendShow='true';
          this.tabData.data[3].data.peopleflow.chart.gridLeft = '110';
          // echarts图3
          this.tabData.data[4].data.goodsflow.chart.legendRight = 'auto';
          this.tabData.data[4].data.goodsflow.chart.gridLeft = '14%';
          // echarts图4
          this.tabData.data[5].data.goodstps.chart.legendRight = 'auto';
          this.tabData.data[5].data.goodstps.chart.legendShow='true';
          this.tabData.data[5].data.goodstps.chart.gridLeft = '110'
          lineBarChart('employed', this.tabData.data[1].data.number.chart);
          ecologicalLineChart('quantity',this.tabData.data[3].data.peopleflow.chart);
          pileBarAndLineChart('goodsNum', this.tabData.data[4].data.goodsflow.chart);
          ecologicalLineChart('lineChart1', this.tabData.data[5].data.goodstps.chart);
        });
      },
    }
  }
</script>
