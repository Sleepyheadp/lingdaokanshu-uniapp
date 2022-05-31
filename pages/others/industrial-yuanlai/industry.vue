<style scoped lang="less">
  @import url("industrial.less");
  .bottom{
    height: 98rpx;
  }
  .sub-title{
    margin-top: 34rpx;
    height: 489rpx;
  }
  .margin-sub-title{
    margin-top:140rpx
  }

  .sub-title1{
    height: 600rpx;
    margin-top: 34rpx;
    text-align:left;
  }

  .sub-title2{
    height: 469rpx;
    margin-top: 34rpx;
    text-align:left;
  }

  .time-location{
    float:left;
    width: 100%;
  }

  .tab-two-line-title1{
    width: 692rpx;
    height: 148rpx;
    /*overflow-x: scroll;*/
    /*overflow-y: hidden;*/
    text-align: center;
    margin: 0 auto;
    /*box-shadow: 0px 0px 12px rgba(129, 129, 129, 0.25);*/
    display: flex;
    white-space: nowrap;
    .tab-two-line-item1{
      flex: 0 0 334rpx;
      padding-top: 40rpx;
      margin-right: 34rpx;
      .tab-two-line-item-top1{
        height: 100%;
      }

    }
  }

  .tab-two-line-title{
    width: 692rpx;
    height: 294rpx;
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
    margin-right: 28rpx;
    .tab-two-line-item-top{
      height: 68%;
      width: 100%;
      display: table;
      .words{
        display: table-cell;
        vertical-align: middle;
      }
    }
    .tab-two-line-item-bottom{
      padding-top: 25rpx;
    }
  }

  .tabActive {
    border-top:solid #1a79c8 4rpx;
    padding-top: 36rpx;
    background-image: linear-gradient(rgba(231, 242, 255, 1), rgba(231, 242, 255, 0));
    color: #1a79c8;
  }

  .totalValueContent{
    width: 750rpx;
    text-align: center;
    height: 100%;
    /*height: 1500rpx;*/
  }
  .industrialEnterpriseContent{
    width: 750rpx;
  }
  .highTechContent{
    width: 750rpx;
  }

  .highTechIndustiralContent{
    width: 750rpx;
    text-align: center;
  }
  .tab-title{
    width: 692rpx;
    height: 176rpx;
    text-align: center;
    margin-left: 29rpx;
    box-shadow: 0 0 12rpx rgba(129, 129, 129, 0.25);
    border-radius: 8rpx;
    margin-bottom:34rpx;
    display: flex;
  }
  .tab {
    flex: 1;
    height:176rpx;
  }
  .tab0{
    margin-top: 47rpx;
    flex-basis: 407rpx;
  }
  .tab1{
    margin-top: 47rpx;
    flex-basis: 289rpx;
  }
  .splitLine {
    float: right;
    width: 1rpx;
    height: 90rpx;
    margin-left: 30rpx;
    background-color: #e1e1e1;
  }

  .img-line{
    width: 130rpx;
  }

  .pie-chart1{
    height: 412rpx;
  }

  .tab-margin{
    height: 10rpx;
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
      <div class="time_subtitle time_float">{{this.tabData.data[0].data.gdp.detail[this.value1][0].year}}年</div>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" @change="switchIndustrialOutputTab"/>
      </van-dropdown-menu>
      <div class="totalValueContent">
        <div class="tab-two-line-title">
          <div class="tab-two-line-item"
               v-for="(item,index) in tabData.data[0].data.gdp.detail[this.value1]"
               :class="{tabGreenDouble: index===0, tabBlueDouble: index===1, tabYellowDouble: index===2}">
            <div class="tab-two-line-item-top">
              <div class="words">
                <span v-if="item.label.length<=7" class="name">{{item.label}}</span>
                <span v-if="item.label.length>7" class="name">{{item.label.slice(0,7)}}</span><br/>
                <span v-if="item.label.length>7" class="name">{{item.label.slice(7)}}</span><br/>
                <span class="number">{{item.value.toFixed(2)}}</span><br/>
                <span class="unit">({{item.unit}})</span>
              </div>
            </div>
            <div class="line" :class="{splitLineGreen: index===0, splitLineBlue: index===1, splitLineYellow: index===2}"></div>
            <div class="tab-two-line-item-bottom">
              <span class="name">增速</span>
              <span class="numberBottom" :class="{colorBlack:item.increment>0,colorRed:item.increment<0}">{{item.increment.toFixed(2)}}</span>
              <span class="unitBottom" :class="{colorBlack:item.increment>0,colorRed:item.increment<0}">{{item.incrementUnit}}</span>
            </div>
            <!--<div v-if="OutputTabIndex === index" class="selectTab">-->
              <!--<img src="../../static/assets/images/h5/tab-selected.png" alt=""/>-->
            <!--</div>-->
          </div>
        </div>
        <div
          v-for="(item,index) in tabData.data[0].data.gdp.detail[0]"
          v-if="OutputTabIndex === index"
          class="sub-title1">
          <div>
            <span class="subtitle-pre">{{option1[value1].text}}</span>
            <span class="subtitle-next">规模以上工业增加值及增速</span>
          </div>
          <div class="bar-chart" id="industrialCountBar"></div>
        </div>
        <div
          v-for="(item,index) in tabData.data[0].data.gdp.detail[0]"
          v-if="OutputTabIndex === index"
          class="sub-title2 margin-sub-title">
          <div >
            <span class="subtitle-pre">{{option1[value1].text}}</span>
            <span class="subtitle-next">产业增加值占规模以上工业增加值比重</span>
          </div>
          <div class="pie-chart1" id="industrialRatePie"></div>
        </div>
      </div>
    </div>
    <div id="secondTab" class="content">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{ tabData.data[1].name }}</span>
      </div>
      <div class="time-location">
        <div class="time_subtitle time_float">{{this.tabData.data[1].data.company.detail[this.value1][0].year}}年</div>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" @change="switchEnterprisesTab"/>
        </van-dropdown-menu>
      </div>

      <div class="industrialEnterpriseContent">
        <div class="tab-two-line-title">
          <div class="tab-two-line-item"
               v-for="(item,index) in tabData.data[1].data.company.detail[this.value1]"
               :class="{tabGreenDouble: index===0, tabBlueDouble: index===1, tabYellowDouble: index===2}">
            <div class="tab-two-line-item-top">
              <div class="words">
                <span v-if="item.label.length<=7" class="name">{{item.label}}</span>
                <span v-if="item.label.length>7" class="name">{{item.label.slice(0,7)}}</span><br/>
                <span v-if="item.label.length>7" class="name">{{item.label.slice(7)}}</span><br/>
                <span class="number">{{item.value}}</span><br/>
                <span class="unit">({{item.unit}})</span>
              </div>

            </div>
            <div class="line" :class="{splitLineGreen: index===0, splitLineBlue: index===1, splitLineYellow: index===2}"></div>
            <div class="tab-two-line-item-bottom">
              <span class="name">增速</span>
              <span class="numberBottom" :class="{colorBlack:item.increment>0,colorRed:item.increment<0}">{{item.increment.toFixed(2)}}</span>
              <span class="unitBottom" :class="{colorBlack:item.increment>0,colorRed:item.increment<0}">{{item.incrementUnit}}</span>
            </div>
            <!--<div v-if="EnterprisesTabIndex === index" class="selectTab">-->
              <!--<img src="../../static/assets/images/h5/tab-selected.png" alt=""/>-->
            <!--</div>-->
          </div>
          <!--<div class="tab-two-line-item">-->
            <!--<div v-for="(item,index) in tabData.data[1].data.Industrial_Enterprises.detail.slice(0,3)" class="select-box">-->
              <!--<div v-if="EnterprisesTabIndex===index" class="select"></div>-->
            <!--</div>-->
          <!--</div>-->
        </div>
        <div>
          <div class="sub-title">
            <span class="subtitle-pre">{{option1[value1].text}}</span>
            <span class="subtitle-next">规模以上工业企业按登记注册类型分类</span>
            <!--<div class="bar-chart" id=""></div>-->
            <div class="pie-chart" id="enterpriseValuePie1"></div>
          </div>
        </div>
        <div>
          <!--<div class="data-title">-->
          <div>
            <span class="subtitle-pre">{{option1[value1].text}}</span>
            <span class="subtitle-next">规模以上工业企业按轻重工业分类</span>
            <div class="pie-chart" id="enterpriseValuePie2"></div>
          </div>
        </div>
        <div>
          <div>
            <span class="subtitle-pre">{{option1[value1].text}}</span>
            <span class="subtitle-next">规模以上工业企业按企业规模分类</span>
            <div class="pie-chart1" id="enterpriseValuePie3"></div>
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
      <div class="time_subtitle">{{this.tabData.data[2].data.technology.detail[0].year}}年</div>
      <!--<van-dropdown-menu>-->
        <!--<van-dropdown-item v-model="value1" :options="option1" @change="changeShow"/>-->
      <!--</van-dropdown-menu>-->
      <div class="highTechContent">
        <div class="tab-title">
          <div  :class="{tab0:index===0,tab1:index===1}"
                v-for="(item,index) in tabData.data[2].data.technology.detail">
            <div :class="{splitLine: index===0}"></div>
            <div class="textAlignChange">
              <span  class="name">{{item.label}}</span><br/>
              <div class="tab-margin"></div>
              <span  class="number" :class="{colorChange: index===1}">{{item.value.toFixed(2)}}</span>
              <span  class="unit" :class="{unitcolorChange: index===1}">{{item.unit}}</span>
              <!--<img class="img-line" v-if="index===1" src="../../static/assets/images/h5/line.png" alt="">-->
              <img class="img-line" v-if="index===1" src="data:image/png;base64,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" alt="">
            </div>
            <div v-if="index===1" class="simpleLine"></div>
          </div>
        </div>
        <div>
          <div class="data-title">
            <span>高新技术产业增加值及占规模以上比重</span>
          </div>
          <div class="bar-chart" id="highTechCountBar"></div>
        </div>
        <div>
          <div class="data-title">
            <span>高技术产业分行业增速</span>
          </div>
          <div class="line-chart" id="highTechRateBar"></div>
        </div>
      </div>
    </div>
    <div id="fourthTab" class="content">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{ tabData.data[3].name }}</span>
      </div>
      <div class="time_subtitle">{{this.tabData.data[3].data.manufacturing.detail[0].year}}年</div>
      <!--<van-dropdown-menu>-->
        <!--<van-dropdown-item v-model="value1" :options="option1" @change="changeShow"/>-->
      <!--</van-dropdown-menu>-->
      <div class="highTechIndustiralContent">
        <div class="tab-title">
          <div  :class="{tab0:index===0,tab1:index===1}"
                v-for="(item,index) in tabData.data[3].data.manufacturing.detail">
            <div :class="{splitLine: index===0}"></div>
            <div class="textAlignChange">
              <span  class="name">{{item.label}}</span><br/>
              <div class="tab-margin"></div>
              <span  class="number" :class="{colorChange: index===1}">{{item.value.toFixed(2)}}</span>
              <span  class="unit" :class="{unitcolorChange: index===1}">{{item.unit}}</span>
              <!--<img class="img-line" v-if="index===1" src="../../static/assets/images/h5/line.png" alt="">-->
              <img class="img-line" v-if="index===1" src="data:image/png;base64,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" alt="">
            </div>
            <div v-if="index===1" class="simpleLine" id="simpleLine"></div>
          </div>
        </div>
        <div>
          <div class="data-title">
            <span>先进制造业增加值及占规模以上比重</span>
          </div>
          <div class="bar-chart" id="highTechIndustryBar1"></div>
        </div>
        <div>
          <div class="data-title">
            <span>先进制造业分行业增速</span>
          </div>
          <div class="line-chart" id="highTechIndustryBar2"></div>
          <div class = "bottom"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { agricultureLineAndBarChart,industrialpieChart,ecologicalLineChart,industrialLineChart } from '../../charts/h5-chart';
  export default {
    name: "industry",
    components:{},
    props:{
      tabData:{
        type:Object
      }
    },
    data(){
      return {
        OutputTabIndex:0,
        EnterprisesTabIndex: 0,
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
        value1:0,
      }
    },
    watch: {
      'tabData.data': function (newValue, oldValue) {
        this.init();
        // console.log('tabData.chart',this.tabData.data[0].data.gdp)
      }
    },
    methods:{

      // 工业总产值 tab
      switchIndustrialOutputTab() {
        console.log(this.value1,'this.value1')
        // this.OutputTabIndex = index;
        setTimeout(() => {
          this.tabData.data[0].data.gdp.chart[0][this.value1].gridTop = 110;
          this.tabData.data[0].data.gdp.chart[0][this.value1].legendRight = '15%'
          agricultureLineAndBarChart('industrialCountBar',this.tabData.data[0].data.gdp.chart[0][this.value1]);
          let industrialRatePieData = this.tabData.data[0].data.gdp.chart[1][this.value1].series[0].data;
          industrialRatePieData.gridBottom = 40;
          industrialRatePieData.chartTop = '52%';
          industrialpieChart('industrialRatePie',industrialRatePieData);
        },50)
      },
      switchEnterprisesTab(){
        // this.EnterprisesTabIndex = index;
        setTimeout(() => {
          // this.tabData.data[1].data.company.chart[0][this.value1].series[0].data.titlePadding = 70;
          industrialpieChart('enterpriseValuePie1',this.tabData.data[1].data.company.chart[0][this.value1].series[0].data);
          industrialpieChart('enterpriseValuePie2',this.tabData.data[1].data.company.chart[1][this.value1].series[0].data);
          let enterpriseValuePie3Data = this.tabData.data[1].data.company.chart[2][this.value1].series[0].data;
          enterpriseValuePie3Data.gridBottom = 40;
          enterpriseValuePie3Data.chartTop = '52%';
          industrialpieChart('enterpriseValuePie3',enterpriseValuePie3Data);
        },50)
      },
      init(){
        this.$nextTick(()=>{
          this.OutputTabIndex = 0;
          //工业总产值
          this.tabData.data[0].data.gdp.chart[0][0].gridTop = 117;
          this.tabData.data[0].data.gdp.chart[0][0].legendRight = '15%';

          agricultureLineAndBarChart('industrialCountBar',this.tabData.data[0].data.gdp.chart[0][0]);

          let industrialRatePieData = this.tabData.data[0].data.gdp.chart[1][0].series[0].data;
          industrialRatePieData.gridBottom = 40;
          industrialRatePieData.chartTop = '52%';
          industrialpieChart('industrialRatePie',industrialRatePieData);
          // LineAndBarChart('industrialCountBar',this.tabData.data[0].data.gdp.chart[0][0]);

          //工业企业
          this.EnterprisesTabIndex = 0;
          this.tabData.data[1].data.company.chart[0][0].series[0].data.titlePadding = 70;
          industrialpieChart('enterpriseValuePie1',this.tabData.data[1].data.company.chart[0][0].series[0].data);
          industrialpieChart('enterpriseValuePie2',this.tabData.data[1].data.company.chart[0][1].series[0].data);

          let enterpriseValuePie3Data = this.tabData.data[1].data.company.chart[0][2].series[0].data
          enterpriseValuePie3Data.gridBottom = 40;
          enterpriseValuePie3Data.chartTop = '52%';
          industrialpieChart('enterpriseValuePie3',enterpriseValuePie3Data);
          // //高技术产业
          this.tabData.data[2].data.technology.chart[0].gridTop = 130;
          agricultureLineAndBarChart('highTechCountBar',this.tabData.data[2].data.technology.chart[0]);
          let technoLineData = this.tabData.data[2].data.technology.chart[1];
          technoLineData.xRotate = 30;
          technoLineData.gridBottom = 150;
          technoLineData.gridLeft = 105;
          technoLineData.gridTop = 80;
          technoLineData.type = 'dashed';
          technoLineData.legendShow = true;
          technoLineData.axisLineColor = '#f0993c';
          industrialLineChart('highTechRateBar',technoLineData);
          // //先进制造业
          this.tabData.data[3].data.manufacturing.chart[0].gridTop = 120;
          agricultureLineAndBarChart('highTechIndustryBar1',this.tabData.data[3].data.manufacturing.chart[0]);
          let lineData = this.tabData.data[3].data.manufacturing.chart[1];
          lineData.xRotate = 38;
          lineData.gridBottom = 155;
          lineData.gridLeft = 105;
          lineData.gridTop = 80;
          lineData.type = 'dashed';
          lineData.axisLineColor = '#f0993c';
          ecologicalLineChart('highTechIndustryBar2',lineData)
        })
      }
    },
  }
</script>

<style scoped>

</style>
