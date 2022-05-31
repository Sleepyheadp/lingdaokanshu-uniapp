<style scoped lang="less">
  @import url("industrial.less");

  .time_location{
    margin-top: 14rpx;
    height: 36rpx;
    line-height: 36rpx;
  }

  .tab-two-line-title{
    width: 692rpx;
    height: 296rpx;
    text-align: center;
    margin: 0 auto;
    /*box-shadow: 0px 0px 12px rgba(129, 129, 129, 0.25);*/
    display: flex;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .tab-two-line-item{
    flex: 0 0 210rpx;
    height:100%;
    margin-right: 34rpx;
    .tab-two-line-item-top{
      height: 68%;
      width: 100%;
      display: table;
    }
    .tab-two-line-item-bottom{
      height: 32%;
      width: 100%;
      display: table;
    }
  }

  .select {
    height: 23rpx;
    /*background: url("../../static/assets/images/h5/tab-selected.png") no-repeat;*/
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAAAXCAYAAABzomECAAABYElEQVR4nO3bMUoDQRjF8f+GXMAzbO89RESxs7X3DKJ4htwgFwjYpk+dehWxDCxskyIQ1mInIijE3f1mv2HzfpBy33wpHllmJllZlufABSLS1+sUqIEz70lERiDLyrL0HkJkNLK6rr1nEBmNifcAImOiQokYmnoPcEqKohh8zTzPB1/zlOkXSsSQCuVjRnNcEfMzG+zbyDcVyscDsIiYvwhryMBUKB974A5YRchehex9hGw5QoXyswWugA/DzM+QuTXMlBZUKF8bmgJUBlkVcBkyxYkK5W8N3AK7Hhm7kLE2mUg6U6HSsATuaXbn2qrDs0vTiaQTFSodc+C5w3Mv4VlJgAqVlifalWMOPEaaRTpQodLS5vWtz2uiRKJCpec/GwwWGxkSgQqVpgq45u8t8A1wg81WuxhTodL1zu9D2sNh8JvLRHKUCpW2n9eIYl5XEiP6P1T6DhddJ8S9UCsGvgAm8lpnf997zgAAAABJRU5ErkJggg==) no-repeat;
  }

  .tabActive {
    border-top:solid #1a79c8 4rpx;
    padding-top: 36rpx;
    background-image: linear-gradient(rgba(231, 242, 255, 1), rgba(231, 242, 255, 0));
    color: #1a79c8;
  }
  .threeIndustrialContent{
    width: 750rpx;
  }
  .everyIndustrialContent{
    width: 750rpx;
  }
  .drop-down-list{
    width: 200rpx;
    margin-left: 30rpx;
    margin-bottom: 20rpx
  }
  .drop-down-list /deep/ .van-dropdown-menu__bar {
    box-shadow: none;
  }

  .pie-chart1{
    height: 412rpx;
  }
</style>
<template>
  <div>
    <div id="firstTab" class="content">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{ tabData.data[0].name }}</span>
      </div>
      <!--<div class="drop-down-list">-->
      <!--</div>-->
      <div>
        <span class="time_subtitle time_float">{{this.tabData.data[0].data.industry.detail[this.value1][0].year}}年</span>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" @change="switchCropYieldInfTab"/>
        </van-dropdown-menu>
      </div>
      <div class="threeIndustrialContent">
        <div class="tab-two-line-title">
          <div class="tab-two-line-item"
               v-for="(item,index) in tabData.data[0].data.industry.detail[this.value1]"
               :class="{tabGreenDouble: index===0, tabBlueDouble: index===1, tabYellowDouble: index===2}">
            <div class="tab-two-line-item-top">
              <div class="words">
                <span class="name">{{item.label}}</span><br/>
                <span class="number">{{item.value.toFixed(2)}}</span><br/>
                <span class="unit">({{item.unit}})</span>
              </div>

            </div>
            <div class="line" :class="{splitLineGreen: index===0, splitLineBlue: index===1, splitLineYellow: index===2}"></div>
            <div class="tab-two-line-item-bottom">
              <div class="words">
                <span class="name">增速</span>
                <span class="numberBottom" :class="{colorBlack:item.increment>0,colorRed:item.increment<0}">{{item.increment.toFixed(2)}}</span>
                <span class="unitBottom" :class="{colorBlack:item.increment>0,colorRed:item.increment<0}">{{item.incrementUnit}}</span>
              </div>
            </div>
            <!--<div v-if="cropYieldTabIndex === index" class="selectTab">-->
              <!--<img src="../../static/assets/images/h5/tab-selected.png" alt=""/>-->
            <!--</div>-->
          </div>
        </div>
        <div class="pie-chart1" id="threeIndustrialValuePie"></div>
      </div>
    </div>
    <div id="secondTab" class="content">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{ tabData.data[1].name }}</span>
      </div>
      <div class="time_location">
        <span class="subtitle-pre">包头市</span>
        <span class="subtitle-next">分行业增加值及结构</span>

        <!--<van-dropdown-menu>-->
          <!--<van-dropdown-item v-model="value1" :options="option1" @change="changeShow"/>-->
        <!--</van-dropdown-menu>-->
      </div>
      <div class="everyIndustrialContent">
            <div>
              <div class="bar-chart" id="everyIndustrialValueBar"></div>
            </div>
            <div>
              <div class="pie-chart" id="everyIndustrialValuePie"></div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { drawJmHotMap, industrialLineAnddoubleBarChart,pieChart,industrialpieChart,agricultureLineAndBarChart} from '../../charts/h5-chart';
  export default {
    name: "comprehensive",
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
          { text: '台山区', value: 4 },
          { text: '鹤山区', value: 5 },
          { text: '鹤山区', value: 6 },
          { text: '恩平市', value: 7 },
        ],
        totalValueTabIndex:0,
        cropYieldTabIndex:0
      }
    },
    // watch: {
    //   'tabData.data': function (newValue, oldValue) {
    //     console.log('tabData.chart',this.tabData)
    //     this.init()
    //   }
    // },
    methods:{
      // 切换农业总产值 tab
      switchTotalValueInfTab(index) {
        this.totalValueTabIndex = index;
        setTimeout(() => {
          drawJmHotMap('totalValueMap', this.tabData.data[0].data.gdp.chart[index])
        },100)
      },
      // 切换三次产业 location
      switchCropYieldInfTab(index) {
        // this.cropYieldTabIndex = index;
        setTimeout(() => {
          // if(this.value1>=1){
          //   this.tabData.data[0].data.industry.chart[this.value1].series[0].data.titleLeft = 280;
          // }
          let threeIndustrialValuePieData = this.tabData.data[0].data.industry.chart[this.value1].series[0].data
          threeIndustrialValuePieData.gridBottom = 40;
          threeIndustrialValuePieData.chartTop = '52%';
          industrialpieChart('threeIndustrialValuePie',threeIndustrialValuePieData)
        },100)
      },
      init(){
        this.$nextTick(()=>{
          //三次产业
          let threeIndustrialValuePieData = this.tabData.data[0].data.industry.chart[0].series[0].data
          threeIndustrialValuePieData.gridBottom = 40;
          threeIndustrialValuePieData.chartTop = '52%';
          industrialpieChart('threeIndustrialValuePie',threeIndustrialValuePieData)
          //分行业
          this.tabData.data[1].data.business.chart[0].rotate = 30;
          this.tabData.data[1].data.business.chart[0].gridBottom = '30%';

          industrialLineAnddoubleBarChart('everyIndustrialValueBar',this.tabData.data[1].data.business.chart[0]);

          let pieData = this.tabData.data[1].data.business.chart[1].series[0].data;
          // pieData.legendX = 435;
          // pieData.legendY = 58;
          pieData.nameBr = true;
          industrialpieChart('everyIndustrialValuePie',pieData)
        })
      }
    },
  }
</script>
