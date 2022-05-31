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
  .tab-box-one-tab {
    width: 692rpx;
    height: 115rpx;
    box-shadow: 0 0 12rpx rgba(129, 129, 129, 0.25);
    margin: 0 auto;
    .tab-content-box{
      width: 83%;
      height: 100%;
      float: left;
      font-size: 24rpx;
      font-family: "PingFang-SC-Bold";
      color: #f99b37 ;
      position: relative;
      span{
        position: absolute;
        top: 25rpx;
      }
    }
    .tab-img-box{
      margin: 32rpx 24rpx 32rpx 30rpx;
      float: left;
      img{
        width: 50rpx;
        height: 50rpx;
      }
    }
  }
  .content-score-chart{
    .charts {
      width: 100%;
      height: 470rpx;
    }
  }
  .content-score-list{
    width: 750rpx;
    .score-result{
      float: left;
      width: 100%;
      height: 100%;
      margin-top: 40rpx;
      &:last-child {
        padding-bottom: 130rpx;
      }
      .list-header{
        width: 95%;
        height: 57rpx;
        line-height: 57rpx;
        font-size: 22rpx;
        font-family: 'PingFang-SC-Bold';
        color: #1c70c8;
        margin: 0 auto;
        display: flex;
        background-color: #DFE8F1;
        /*li{*/
          /*float: left;*/
          /*!*width: 100rpx;*!*/
          /*flex-grow:1;*/
          /*text-align:center*/
        /*}*/
        li:nth-child(1){
          flex: 0 0 220rpx;
          text-align: center;
        }
        li:nth-child(2){
          flex: 0 0 170rpx;
          text-align: center;
        }
        li:nth-child(3){
          flex: 0 0 170rpx;
          text-align: center;
        }
        li:nth-child(4){
          flex: 0 0 150rpx;
          text-align: center;
        }
      }
      .score-list{
        width: 95%;
        margin: 0 auto 40rpx auto;
        border-left: 1rpx solid #EBEBEB;
        border-right: 1rpx solid #EBEBEB;
        .li-style{
          border-bottom: 1rpx dotted #e5e5e5;
          .ul-title{
            width: 100%;
            height: 57rpx;
            line-height: 57rpx;
            font-size: 22rpx;
            font-family: "PingFang-SC-Bold";
            color: #1c1c1c;
            display: flex;
            li:nth-child(1){
              flex: 0 0 220rpx;
              text-align: left;
            }
            li:nth-child(2){
              flex: 0 0 170rpx;
              text-align: center;
            }
            li:nth-child(3){
              flex: 0 0 170rpx;
              text-align: center;
            }
            li:nth-child(4){
              flex: 0 0 150rpx;
            }
          }
        }
      }
    }
  }
  .location-title{
    height: 38rpx;
    .blue-bar {
      width: 95rpx;
      height: 34rpx;
      background-color: #1a79c8;
      border-radius: 18rpx;
      float: left;
      font-size: 22rpx;
      line-height: 34rpx;
      margin: 2rpx 0 0 23rpx;
      color: white;
      text-align: center;
      font-family: 'PingFang-SC-Medium';
    }
    .subtitle {
      float: left;
      color: #383838;
      font-size: 26rpx;
      margin: 0 0 0 5rpx;
      text-align: center;
      line-height: 38rpx;
      font-family: 'PingFang-SC-Bold';
    }
  }

  .score-detail-box {
    max-height: 0rpx;
    transition: max-height 600ms;
    overflow: hidden;
    text-align: center;
    background: #f7f9fb;
    .ul-list{
      display: flex;
      width: 80%;
      margin: 15rpx auto;
      font-family: "PingFang-SC-Medium";
      font-size: 22rpx;
      color: #1c1c1c;
      li{
        height: 30rpx;
        line-height: 30rpx;
      }
      .li{
        height: 30rpx;
        line-height: 30rpx;
      }
      .liBr{
        height: 60rpx;
        line-height: 30rpx;
      }

      li:nth-child(1){
        flex: 0 0 245rpx;
        text-align: left;
        margin-left: 110rpx;
      }
      li:nth-child(2){
        flex: 0 0 100rpx;
        text-align: center;
      }
      li:nth-child(3){
        flex: 0 0 100rpx;
        margin-left: 55rpx;
        text-align: center;
      }

    }
    .ul-no-data{
      font-family: "PingFang-SC-Medium";
      font-size: 22rpx;
      color: #1c1c1c;
      li{
        height: 40rpx;
        line-height: 40rpx;
      }
    }
  }
  .splitLine{
    width: 1rpx;
    margin-top: 14rpx;
    height: 30rpx;
    background-color: #BCC5CF;
    float: right;
  }
  .point{
    float: left;
    margin-left: 30rpx;
    margin-right: 10rpx;
    border-radius: 50%;
    width: 10rpx;
    height: 10rpx;
    margin-top: 24rpx;
    background-color: #378eef;
  }
  .arrow{
    img{
      width: 17rpx;
      height: 17rpx;
    }
    text-align:center;
  }
  .textLeft{
    text-align: left;
  }
  .textCenter{
    text-align: center;
  }


</style>
<template>
  <div class="main" style="background-color: #1CBBB4;">
    <div class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">营商环境综合得分</span>
      </div>
      <div class="content-score-chart">
        <div class="tab-box-one-tab">
          <div class="tab-img-box">
            <img src="../../static/assets/images/h5/scoreInf.png" alt="">
          </div>
          <div class="tab-content-box">
            <span>包头市{{ this.tabDataBusiness.detail.year }}年营商环境综合得分为{{ this.tabDataBusiness.detail.score }}分,在粤港澳大湾区中排名第{{ this.tabDataBusiness.detail.rank }}名</span>
          </div>
        </div>
        <!-- <div class="charts" id="rateBarMap"></div> -->
      </div>
      <div class="content-score-list">
        <div class="location-title">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">营商环境试评价结果</span>
        </div>
        <div class="score-result">
          <ul class="list-header">
            <li v-for="(item,index) in this.tabDataBusiness.listheader">
              {{ item }}
              <div v-if="index !==3" class="splitLine"></div>
            </li>
          </ul>
          <ul class="score-list">
            <li v-for="(data_item,index_1) in this.tabDataBusiness.list" :key="index_1" class="li-style">
              <div ref="divCon" @click="openAndClose(index_1)">
                <ul class="ul-title">
                  <li v-for="(title_item,index_2) in data_item.title" :key="index_2">
                    <div v-if="index_2 ===0" class="point" ></div>
                    <span v-if="index_2 !==2">{{ title_item }}</span>
                    <span v-if="index_2 ===2">{{ title_item.toFixed(2) }}</span>
                  </li>
                  <li style="position: relative">
                    <div ref="arrowEl" class="arrow">
                      <img src="../../static/assets/images/h5/arrow_open.png" alt="">
                      <!-- <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAQVJREFUOI2d0r0rRWEcB/DP9ZJSymC5BpQoNn8AOSUGJYpikpHNZvY32GRjE2Ugr8fAoFhM7kTJYFF3QCkxnDNwnHOvc7/b0/Pr83zr+RX8SBiG5+jFFK5kJAiCX+e6xH0XijjGUBaSTBIZwyNacIDRWpBS3OAezdjDRF4EHjCIOzRhG7N5EXjCMG7RiE0s5EXgGQGuUY8NLOVF4AUjuEABa1jOi0AZM3iLodVakFbsin7rCyvJgYYqQBuOMIBPLGI9D1LECfpjYB5baYNZSEcM9OADc9jJei0N6cYpOvGOaexXaPwH6YsbtONVtPJnlYA05DAGyhjHZTUgDSmJdmESN/8B4BuV4zBdmJHD3AAAAABJRU5ErkJggg==" alt=""> -->
                    </div>
                  </li>
                </ul>
              </div>
              <div class="score-detail-box" style="overflow-y: auto">
                <ul v-if="data_item.content.length !== 0">
                  <li v-for="(contentItem,index_3) in data_item.content" :key="index_3">
                    <ul class="ul-list">
                      <li :class="contentItem.label.length <=10?'li':'liBr'" >{{ contentItem.label }}</li>
                      <li v-if="contentItem.unit !=='%'">{{ contentItem.value}} </li>
                      <li v-if="contentItem.unit ==='%'&& contentItem.value !==0 &&  contentItem.value !==100">{{ contentItem.value.toFixed(2)}} </li>
                      <li v-if="contentItem.unit ==='%'&& (contentItem.value ===0 ||  contentItem.value ===100)">{{ contentItem.value}} </li>
                      <li >{{ contentItem.unit }}</li>
                    </ul>
                  </li>
                </ul>
                <ul v-else class="ul-no-data">
                  <li>
                    暂无数据
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    import { barChartForBusiness } from '../../charts/h5-chart';
    export default {
      name: "business-score",
      props:{
        tabDataBusiness:{
          type: Object
        }
      },
      data() {
        return {
        }
      },
	  mounted() {
	  	this.initWin()
	  },
      watch: {
        'tabDataBusiness.chart': function (newValue, oldValue) {
          this.initWin();
        }
      },
      methods: {
        initWin() {
          this.$nextTick(() => {
            this.tabDataBusiness.chart.gridBottom = 100;
            this.tabDataBusiness.chart.gridTop = 60;
            barChartForBusiness('rateBarMap', this.tabDataBusiness.chart);
          })
        },
        // 打开、关闭列表
        openAndClose(i){
          const divcon= this.$refs.divCon[i];
          const arrowEl = this.$refs.arrowEl[i];
          var el = divcon.nextSibling;
          if( window.getComputedStyle(el).maxHeight === "0rpx" ){
            let contentMaxHeight = (el.children[0].children.length+1) * 60 +"rpx";
            el.style.maxHeight = contentMaxHeight;
            arrowEl.style.transform="rotateZ(-90deg)";
            // 关闭其他下拉面板
            const divcons = this.$refs.divCon;
            for(let k=0;k < divcons.length;k++){
              const closeEl = divcons[k].nextSibling;
              if( k !== i && window.getComputedStyle(closeEl).maxHeight !== "0rpx"){
                closeEl.style.maxHeight = "0rpx";
                this.$refs.arrowEl[k].style.transform="rotateZ(0deg)"
              }
            }
          }else{
            el.style.maxHeight="0rpx";
            arrowEl.style.transform="rotateZ(0deg)";
          }
    }

      },
    }
</script>

<style scoped>

</style>
