<style scoped lang="less">
  @import url("industrial.less");
  .tab-title{
    width: 692rpx;
    height: 294rpx;
    text-align: center;
    margin-left: 29rpx;
    box-shadow: 0 0 12rpx rgba(129, 129, 129, 0.25);
    display: flex;
    float: left;
  }
  .img{
    width: 200rpx;
    margin-top: 28rpx;
  }
  .img-margin{
    margin-top: 7rpx;
    position:absolute;
    top:292rpx;
    img{
      width: 200rpx;
    }
  }
  .tab {
    flex: 1;
    height:150rpx;
    padding-top: 40rpx;
  }
  .tab-one-line-title-scroll{
    width: 692rpx;
    height: 181rpx;
    overflow-x: scroll;
    overflow-y: hidden;
    text-align: center;
    margin: 0 auto;
    /*padding-bottom: 29rpx;*/

    /*box-shadow: 0px 0px 12px rgba(129, 129, 129, 0.25);*/
    display: flex;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .tab-one-line-scroll-item{
    flex: 0 0 200rpx;
    /*height:86%;*/
    height: 150rpx;
    vertical-align: middle;
    /*padding-top: 40rpx;*/
    margin-right: 22rpx;
    display: table;
    .words{
      position: relative;
      display: table-cell;
      vertical-align: middle;
      .arrow-bottom{
        position: absolute;
        height: 29rpx;
        width: 200rpx;
        margin-top: 7rpx;
        /*border:1px solid red;*/
        top:148rpx;
        /*left:20rpx;*/
        img{
          width: 200rpx;
        }
      }
    }


  }
  .tab-two-line-title-scroll-padding{
    padding-bottom: 33rpx;
  }

  .tab-two-line-title-scroll{
    /*padding-bottom: 33rpx;*/
    width: 692rpx;
    height: 294rpx;
    overflow-x: scroll;
    overflow-y: hidden;
    text-align: center;
    margin: 0 auto;
    /*box-shadow: 0px 0px 12px rgba(129, 129, 129, 0.25);*/
    display: flex;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .tab-two-line-scroll-item{
    flex: 0 0 200rpx;
    height:100%;
    /*padding-top: 40rpx;*/
    margin-right: 22rpx;
    position: relative;
    .tab-two-line-scrolll-item-top{
      height: 65%;
      width: 100%;
      display: table;
    }
    .tab-two-line-scrolll-item-bottom{
      /*padding-top: 28rpx;*/
      height: 35%;
      width: 100%;
      display: table;
    }
  }
  .line{
    width: 150rpx;
    height: 1rpx;
    margin: 2rpx auto;
    /*background-color: #93E0BA;*/
  }
  /*.tabActive {*/
    /*border-top:solid #1a79c8 4rpx;*/
    /*padding-top: 36rpx;*/
    /*background-image: linear-gradient(rgba(231, 242, 255, 1), rgba(231, 242, 255, 0));*/
    /*color: #1a79c8;*/
  /*}*/
  .totalValueContent{
    width: 750rpx;
    text-align: center;
    height: 1030rpx;
    .map {
      width: 100%;
      height: 700rpx;
      /*float: left;*/
    }
  }
  .cropYieldContent{
    width: 750rpx;
    /*text-align: center;*/
    height: 100%;
    /*margin-top:34rpx;*/
  }
  .cropAreaContent{
    width: 750rpx;

  }
 .drop-down-list{
   width: 200rpx;
   margin-left: 30rpx;
   margin-bottom: 20rpx
 }
  .drop-down-list /deep/ .van-dropdown-menu__bar {
    /*box-shadow: none;*/
  }
  .sub-title{
    margin-top: 34rpx;
    height: 100%;
  }

  .pie-chart1{
    height: 412rpx;
  }

</style>
<template>
  <div>
    <div id="firstTab" class="content" >
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{ tabData.data[0].name }}</span>
      </div>
      <div class="time_subtitle time_float">{{this.tabData.data[0].data.gdp.detail[this.value1][this.totalValueTabIndex].year}}年</div>
     <!-- <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1"  />
      </van-dropdown-menu> -->
      <div class="totalValueContent">
        <div class="tab-two-line-title-scroll tab-two-line-title-scroll-padding">
          <div class="tab-two-line-scroll-item"
               v-for="(item,index) in tabData.data[0].data.gdp.detail[this.value1]"
               :class="{tabGreenDouble: index===0||index===3, tabBlueDouble: index===1||index===4, tabYellowDouble: index===2}"
               @click="switchTotalValueInfTab(index)">
            <div class="tab-two-line-scrolll-item-top">
              <div class="words">
                <span class="name">{{item.label}}</span><br/>
                <span class="number">{{item.value.toFixed(2)}}</span><br/>
                <span class="unit">({{item.unit}})</span>
              </div>

            </div>
            <div class="line" :class="{splitLineGreen: index===0 ||index===3, splitLineBlue: index===1||index===4, splitLineYellow: index===2}"></div>
            <div class="tab-two-line-scrolll-item-bottom">
              <div class="words">
                <span class="name">增速</span>
                <span class="numberBottom" :class="{colorBlack:item.increment>0,colorRed:item.increment<0}">{{item.increment.toFixed(2)}}</span>
                <span class="unitBottom" :class="{colorBlack:item.increment>0,colorRed:item.increment<0}">{{item.incrementUnit}}</span>

              </div>
              </div>
            <div v-if="totalValueTabIndex === index"  class="img-margin">
              <!--<img src="../../static/assets/images/h5/tab-selected.png" alt=""/>-->
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAAAXCAYAAABzomECAAABYElEQVR4nO3bMUoDQRjF8f+GXMAzbO89RESxs7X3DKJ4htwgFwjYpk+dehWxDCxskyIQ1mInIijE3f1mv2HzfpBy33wpHllmJllZlufABSLS1+sUqIEz70lERiDLyrL0HkJkNLK6rr1nEBmNifcAImOiQokYmnoPcEqKohh8zTzPB1/zlOkXSsSQCuVjRnNcEfMzG+zbyDcVyscDsIiYvwhryMBUKB974A5YRchehex9hGw5QoXyswWugA/DzM+QuTXMlBZUKF8bmgJUBlkVcBkyxYkK5W8N3AK7Hhm7kLE2mUg6U6HSsATuaXbn2qrDs0vTiaQTFSodc+C5w3Mv4VlJgAqVlifalWMOPEaaRTpQodLS5vWtz2uiRKJCpec/GwwWGxkSgQqVpgq45u8t8A1wg81WuxhTodL1zu9D2sNh8JvLRHKUCpW2n9eIYl5XEiP6P1T6DhddJ8S9UCsGvgAm8lpnf997zgAAAABJRU5ErkJggg==" alt=""/>
            </div>
          </div>
        </div>
        <div class="sub-title">
          <span class="subtitle-pre">包头市</span>
          <span class="subtitle-next">{{this.tabData.data[0].data.gdp.detail[this.value1][this.totalValueTabIndex].label}}</span>
          <div class="map" id="totalValueMap"></div>
        </div>
      </div>
    </div>
    <div id="secondTab" class="content">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{ tabData.data[1].name }}</span>
      </div>
      <div class="time_subtitle">{{this.tabData.data[1].data.quality.detail[this.cropYieldTabIndex].year}}年</div>
      <!--<van-dropdown-menu>-->
        <!--<van-dropdown-item v-model="value1" :options="option1" @change="changeShow"/>-->
      <!--</van-dropdown-menu>-->
      <div class="cropYieldContent">
        <div class="tab-one-line-title-scroll">
          <div class="tab-one-line-scroll-item"
               v-for="(item,index) in tabData.data[1].data.quality.detail"
               :class="{tabGreenDouble: index===0||index===3, tabBlueDouble: index===1||index===4, tabYellowDouble: index===2}"
               @click="switchCropYieldInfTab(index)">
            <div class="words">
              <span class="name">{{item.label}}</span><br/>
              <span class="number">{{item.value.toFixed(2)}}</span>
              <span class="unit">{{item.unit}}</span>
              <div class="arrow-bottom" v-if="cropYieldTabIndex === index">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAAAXCAYAAABzomECAAABYElEQVR4nO3bMUoDQRjF8f+GXMAzbO89RESxs7X3DKJ4htwgFwjYpk+dehWxDCxskyIQ1mInIijE3f1mv2HzfpBy33wpHllmJllZlufABSLS1+sUqIEz70lERiDLyrL0HkJkNLK6rr1nEBmNifcAImOiQokYmnoPcEqKohh8zTzPB1/zlOkXSsSQCuVjRnNcEfMzG+zbyDcVyscDsIiYvwhryMBUKB974A5YRchehex9hGw5QoXyswWugA/DzM+QuTXMlBZUKF8bmgJUBlkVcBkyxYkK5W8N3AK7Hhm7kLE2mUg6U6HSsATuaXbn2qrDs0vTiaQTFSodc+C5w3Mv4VlJgAqVlifalWMOPEaaRTpQodLS5vWtz2uiRKJCpec/GwwWGxkSgQqVpgq45u8t8A1wg81WuxhTodL1zu9D2sNh8JvLRHKUCpW2n9eIYl5XEiP6P1T6DhddJ8S9UCsGvgAm8lpnf997zgAAAABJRU5ErkJggg==" alt=""/>
              </div>
            </div>

          </div>
          <!--<div class="arrow-bottom"-->
               <!--v-for="(item,index) in tabData.data[1].data.quality.detail">-->

          <!--</div>-->



        </div>
        <div>
          <div
            v-for="(item,index) in tabData.data[1].data.quality.detail"
            v-if="cropYieldTabIndex === index"
            class="sub-title">
            <span class="subtitle-pre">包头市</span>
            <span class="subtitle-next">{{item.label}}及其增长速度</span>
            <div class="bar-chart" id="cropYieldValueBar"></div>
            <span class="subtitle-pre">包头市</span>
            <span class="subtitle-next">{{item.label}}种类</span>
            <div class="pie-chart1" id="cropYieldValuePie"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="thirdTab" class="content">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{ tabData.data[2].name }}</span>
      </div>
      <div class="time_subtitle time_float">{{this.tabData.data[2].data.area.detail[this.areaOFCropTabIndex].year}}年</div>
      <!--<van-dropdown-menu>-->
        <!--<van-dropdown-item v-model="value1" :options="option1" @change="changeShow"/>-->
      <!--</van-dropdown-menu>-->
      <div class="cropAreaContent">
        <div class="tab-two-line-title-scroll">
          <div class="tab-two-line-scroll-item"
               v-for="(item,index) in tabData.data[2].data.area.detail"
               :class="{tabGreenDouble: index===0||index===3, tabBlueDouble: index===1||index===4, tabYellowDouble: index===2}">
            <div class="tab-two-line-scrolll-item-top">
              <div class="words">
                <span class="name" v-if="item.label.length<=7">{{item.label}}</span>
                <span class="name" v-if="item.label.length>7">{{item.label.slice(0,7)}}</span><br/><span class="name" v-if="item.label.length>7">{{item.label.slice(7)}}</span><br/>
                <span class="number">{{item.value.toFixed(2)}}</span><br/>
                <span class="unit">({{item.unit}})</span>
              </div>

            </div>
            <div class="line" :class="{splitLineGreen: index===0 ||index===3, splitLineBlue: index===1||index===4, splitLineYellow: index===2}"></div>
            <div class="tab-two-line-scrolll-item-bottom">
              <div class="words">
                <span class="name">增速</span>
                <span class="numberBottom" :class="{colorBlack:item.increment>0,colorRed:item.increment<0}">{{item.increment.toFixed(2)}}</span>
                <span class="unitBottom" :class="{colorBlack:item.increment>0,colorRed:item.increment<0}">{{item.incrementUnit}}</span>
              </div>
            </div>
            <!--<div v-if="areaOFCropTabIndex === index" class="img-margin">-->
              <!--<img class="img" src="../../static/assets/images/h5/tab-selected.png" alt=""/>-->
            <!--</div>-->
          </div>
        </div>
        <div>
          <div
            v-for="(item,index) in tabData.data[2].data.area.detail"
            v-if="areaOFCropTabIndex === index"
            class="sub-title">
            <span class="subtitle-pre">包头市</span>
            <span class="subtitle-next">农作物播种面积占比</span>
            <div class="pie-chart" id="cropAreaValuePie"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { drawJmHotMap, agricultureLineAndBarChart,industrialpieChart } from '../../charts/h5-chart';
  export default {
    name: "agriculture",
    components:{},
    props:{
      tabData:{
        type:Object
      }
    },
    data(){
      return {
        value1: 0,
        option1: [
          { text: '江门市', value: 0 },
          { text: '蓬江区', value: 1 },
          { text: '江海区', value: 2 },
          { text: '新会区', value: 3 },
          { text: '台山市', value: 4 },
          { text: '开平市', value: 5 },
          { text: '鹤山市', value: 6 },
          { text: '恩平市', value: 7 },
        ],
        totalValueTabIndex:0,
        cropYieldTabIndex:0,
        areaOFCropTabIndex:0,
      }
    },
    watch:{
      'tabData.data':function (newValue, oldValue) {
        this.initWin()
      }
    },
    methods:{
      initWin(){
        this.$nextTick(()=>{
          drawJmHotMap('totalValueMap', this.tabData.data[0].data.gdp.chart[0][0]);
          this.tabData.data[1].data.quality.chart[0][0].gridTop = 115;
          this.tabData.data[1].data.quality.chart[0][0].legendRight = '15%';
          agricultureLineAndBarChart('cropYieldValueBar', this.tabData.data[1].data.quality.chart[0][0]);

          this.tabData.data[1].data.quality.chart[1][0].series[0].data.titlePadding = 30;

          let cropYieldValuePieData = this.tabData.data[1].data.quality.chart[1][0].series[0].data;
          cropYieldValuePieData.gridBottom = 40;
          cropYieldValuePieData.chartTop = '52%';
          industrialpieChart('cropYieldValuePie',cropYieldValuePieData);
          let cropAreaValuePieData = this.tabData.data[2].data.area.chart.series[0].data;
          // cropAreaValuePieData.chartLeft = '30%';
          cropAreaValuePieData.legendX = 435;
          // cropAreaValuePieData.titleLeft = 220;
          industrialpieChart('cropAreaValuePie',cropAreaValuePieData);
        })

      },
      // 切换农业总产值 tab
      switchTotalValueInfTab(index) {
        this.totalValueTabIndex = index;
        setTimeout(() => {
          let mapData = this.tabData.data[0].data.gdp.chart[index][0];
          // if((index+1)%2 === 0){
          //   //黄色色系
          //   let yellowColorList = ['rgba(249,155,55,1)', 'rgba(249,155,55,0.8)', 'rgba(249,155,55,0.6)', 'rgba(249,155,55,0.5)', 'rgba(249,155,55,0.4)', 'rgba(249,155,55,0.2)', 'rgba(249,155,55,0.1)'];
          //   mapData.colorList = yellowColorList;
          // }
          drawJmHotMap('totalValueMap',mapData)
          // drawJmHotMap('totalValueMap', this.tabData.data[0].data.totalValue.chart[index])
        },200)
      },
      // 切换农产品产量 tab
      switchCropYieldInfTab(index) {
        this.cropYieldTabIndex = index;
        setTimeout(() => {
          this.tabData.data[1].data.quality.chart[0][index].legendRight = '15%';
          this.tabData.data[1].data.quality.chart[0][index].gridTop = 115;
          agricultureLineAndBarChart('cropYieldValueBar', this.tabData.data[1].data.quality.chart[0][index]);
          // this.tabData.data[1].data.quality.chart[1][index].series[0].data.titleLeft = 280;
          let cropYieldValuePieData = this.tabData.data[1].data.quality.chart[1][index].series[0].data;
          cropYieldValuePieData.gridBottom = 40;
          cropYieldValuePieData.chartTop = '52%';
          industrialpieChart('cropYieldValuePie',cropYieldValuePieData);
          // agricultureLineAndBarChart('cropYieldValueBar', this.tabData.data[1].data.cropYiedValue.chart[index])
          // industrialpieChart('cropYieldValuePie',this.tabData.data[1].data.cropYielRate.chart[index].data);
        },200)
      },
      //切换农作物播种面积
      // switchAreaOfCropTab(index){
      //   this.areaOFCropTabIndex = index;
      //   setTimeout(()=>{
      //     industrialpieChart('cropAreaValuePie',this.tabData.data[2].data.area.chart.series[0].data);
      //     // industrialpieChart('cropAreaValuePie',this.tabData.data[2].data.area_of_crops.chart[index].data);
      //   },200)
      // }
    }
  }
</script>

<style scoped>

</style>
