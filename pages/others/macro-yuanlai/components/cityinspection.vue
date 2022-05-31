<template>
  <div  class="all">
    <div class="situation-tab">
      <div v-for="(item, index) in citytab"  class="tab-title" :class="{tabActive: index === showecherts}"
           @click="switchcitytab(index)">
        {{ item }}
      </div>
    </div>
    <div class="showecherts" id="echertsgdp"  v-if="showecherts==0" ></div>
    <div class="showecherts" id="echertsgdp2"  v-if="showecherts==1" ></div>
    <div class="showecherts" id="echertsgdp3"  v-if="showecherts==2" ></div>
    <div class="showecherts" id="echertsgdp4"  v-if="showecherts==3" ></div>

    <div class="echerts" style="height: 10rem;margin-bottom: 1rem">
      <!--<p class="echerts-p" style="margin-bottom: 0.1rem">区市社销零、出口和财政收入</p>-->
      <!--<p class="echerts-p" style="margin-bottom: 0.1rem">区市社销零、进出口和固定资产投资</p>-->
      <p class="echerts-p" style="margin-bottom: 0.1rem">{{this.citydata.threeRequirements.title}}</p>
      <div id="revenue" style="height: 100%;"></div>
    </div>
    <div class="investment" style="height:12rem;margin-bottom: 2rem;">
      <div class="invest" style="margin-bottom: 0.3rem">
        <span class="Integrated" >包头市</span>
        <span class="Integrated-word">经济增速热力图</span></div>
      <div class="situation-tab" style="margin-top: 49rpx;margin-bottom: 0;">
        <div v-for="(item, index) in hottab"  class="tab-title" :class="{tabActive: index === hotactive}"
             @click="hotcitytab(index)">
          {{ item }}
        </div>
      </div>
      <div style="width: 100%;height: 100%">
      <div id="heat" style="width: 100%;height: 95%;"></div>
     </div>
    </div>
    <p class="echerts-p">区（市）主要指标同比增速</p>
    <div class="table-div" >
      <div  style="width: 35%;float: left;background: #f7f9fb" >
                  <div class="div1center" style="color: #1a79c9;text-align: center">主要指标</div>
                  <div class="div1">规上工业增加值增速</div>
                  <div class="div1">一般公共预算收入增速</div>
                  <div class="div1">一般公共预算支出增速</div>
                  <div class="div1">固定资产投资增速</div>
                  <div class="div1">社销零累计值增速</div>
                  <div class="div1">出口同比增速</div>
                  <div class="div1">利用外资同比增速</div>
      </div>
      <div class="slide-box" style="width: 64%;float: left;height:6rem;">
        <table class="slide-item" style="width: 100%;" cellspacing="0" >
          <tr class="borderth" >
            <th class="ztth" style="color: #1a79c9;" v-for="Item in this.citydata.mainIndexrGrowthRate.data.column"><span class="spanborder">{{Item}}</span></th>
          </tr>
          <tr  class="thieght" v-for="Item in this.citydata.mainIndexrGrowthRate.data.data">
            <td class="tdpadding" style="text-align: right;" v-for="item in Item">{{item}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="echerts">
      <p class="echerts-p">主要工业园区工业增加值及固定资产投资</p>
      <div class="situation-tab">
        <div v-for="(item, index) in citytab1"  class="tab-title" :class="{tabActive: index === showecherts1}"
             @click="switchcitytab1(index)">
          {{ item }}
        </div>
      </div>
      <div class="showecherts" >
        <div class="echers1" v-show="showecherts1==0">
          <table class="slide-item1" cellspacing="0">
            <tr class="trhight" style="color: #1a79c9;background: #dfe8f1;">
              <th  class="thzi"  style="width: 4.5rem" >
                <span class="thziborder">园区</span>
              </th>
              <th  class="thzi"  style="width: 1.5rem" >
                <span class="thziborder">增加值</span>
              </th>
              <th  class="thzi">增速</th>
            </tr>
            <tr v-for="(Item,index) in this.citydata.majorIndustrialInvestment.data.data">
              <td class="tdzi" style="">{{Item[0]}}</td>
              <td  class='tdright' style="text-align: right;">{{Item[1]}}</td>
              <td  :id="'tableecherts'+index"></td>
            </tr>
          </table>
        </div>
        <div class="echers2" v-show="showecherts1==1" >
          <table class="slide-item1" cellspacing="0">
            <tr class="trhight" style="color: #1a79c9;background: #dfe8f1;">
              <th  class="thzi"  style="width: 4.5rem" >
                <span class="thziborder">园区</span>
              </th>
              <th  class="thzi"  style="width: 1.5rem" >
                <span class="thziborder">增加值</span>
              </th>
              <th  class="thzi">增速</th>
            </tr>
            <tr v-for="(Item,index) in this.citydata.fixedInvestments.data.data" >
              <td class="tdzi" >{{Item[0]}}</td>
              <td  class='tdright' style="text-align: right;">{{Item[1]}}</td>
              <td :id="'fixedcherts'+index" ></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {
    brainMultiBarChartForMarine2,
    brainPieChartCircle,
    progesscharts2,
    progesscharts3,
    heatChart,
    heatChart1,
  } from "../echarts";

  export default {
    props: {
      Poverty: {
        type: Object,
        default: {},
      }
    },
    data() {
      return {
        addTitle: '',
        citytab:["区市GDP","区市规上工业增加值","财政收入","财政支出"],
        tablelist:["规划工业增加值","一般公共预算收入","固定资产投资增速","社销零累计值","出口同比增速",'利用外资同比'],
        citytab1:["工业增加值","固定资产投资"],
        hottab:["当期增速","累计增速"],
        hotactive:0,
        showecherts:0,
        showecherts1:0,
        citydata:{},
      }
    },
	methods:{
		initWin() {
			let charData = this.Poverty;
			this.citydata =charData.monitoringArea;
			setTimeout(() => {

			  brainPieChartCircle("echertsgdp", this.citydata.gdp.data);
			  brainMultiBarChartForMarine2("revenue", this.citydata.threeRequirements.data, 12);

			  heatChart('heat',this.citydata.gdpIncreaseRatio1.data)
			  let data = this.citydata.majorIndustrialInvestment.data;
			  progesscharts2("tableecherts0",data.data[0][2]);
			  progesscharts2("tableecherts1", data.data[1][2]);
			  progesscharts2("tableecherts2", data.data[2][2]);
			  progesscharts2("tableecherts3", data.data[3][2]);
			  progesscharts2("tableecherts4", data.data[4][2]);
			  progesscharts2("tableecherts5", data.data[5][2]);
			  progesscharts2("tableecherts6", data.data[6][2]);
			  progesscharts2("tableecherts7", data.data[7][2]);
			  progesscharts2("tableecherts8", data.data[8][2]);
			  progesscharts2("tableecherts9", data.data[9][2]);
			  progesscharts2("tableecherts10", data.data[10][2]);
			  progesscharts2("tableecherts11", data.data[11][2]);
			  progesscharts2("tableecherts12", data.data[12][2]);
			  progesscharts2("tableecherts13", data.data[13][2]);
			}, 500);

		},
		switchcitytab(index){
			console.log("ddd",index)
			this.showecherts=index
			if (index == 0) {
			  this.$nextTick(() => {
				brainPieChartCircle("echertsgdp", this.citydata.gdp.data);
			  });
			} else if (index == 1){
			  this.$nextTick(() => {
				brainPieChartCircle("echertsgdp2", this.citydata.industrialAddValue.data);
			  });
			}else if(index == 2){
			  this.$nextTick(() => {
				brainPieChartCircle("echertsgdp3", this.citydata.fiscalRevenue.data);
			  });
			}else if(index == 3) {
			  this.$nextTick(() => {
				brainPieChartCircle("echertsgdp4", this.citydata.fiscalExpenditure .data);
			  });
			}
		},
		hotcitytab(index){
			console.log("ddd",index)
			this.hotactive=index
			if (index == 0) {
			  this.$nextTick(() => {
				heatChart('heat',this.citydata.gdpIncreaseRatio1.data)
			  });
			} else {
			  this.$nextTick(() => {
				heatChart1('heat',this.citydata.gdpIncreaseRatio.data)
			  });
			}
		},
		switchcitytab1(index){
			console.log("ddd",index)
			this.showecherts1=index
			if (index == 0) {
				this.$nextTick(() => {
					let aaa = this.citydata.majorIndustrialInvestment.data;
					progesscharts2("tableecherts0",aaa.data[0][2]);
					progesscharts2("tableecherts1", aaa.data[1][2]);
					progesscharts2("tableecherts2", aaa.data[2][2]);
					progesscharts2("tableecherts3", aaa.data[3][2]);
					progesscharts2("tableecherts4", aaa.data[4][2]);
					progesscharts2("tableecherts5", aaa.data[5][2]);
					progesscharts2("tableecherts6", aaa.data[6][2]);
					progesscharts2("tableecherts7", aaa.data[7][2]);
					progesscharts2("tableecherts8", aaa.data[8][2]);
					progesscharts2("tableecherts9", aaa.data[9][2]);
					progesscharts2("tableecherts10", aaa.data[10][2]);
					progesscharts2("tableecherts11", aaa.data[11][2]);
					progesscharts2("tableecherts12", aaa.data[12][2]);
					progesscharts2("tableecherts13", aaa.data[13][2]);
				});
			} else {
				this.$nextTick(() => {
					let fixed = this.citydata.fixedInvestments.data;
					progesscharts3("fixedcherts0", fixed.data[0][2]);
					progesscharts3("fixedcherts1", fixed.data[1][2]);
					progesscharts3("fixedcherts2", fixed.data[2][2]);
					progesscharts3("fixedcherts3", fixed.data[3][2]);
					progesscharts3("fixedcherts4", fixed.data[4][2]);
					progesscharts3("fixedcherts5", fixed.data[5][2]);
					progesscharts3("fixedcherts6", fixed.data[6][2]);
					progesscharts3("fixedcherts7", fixed.data[7][2]);
					progesscharts3("fixedcherts8", fixed.data[8][2]);
					progesscharts3("fixedcherts9", fixed.data[9][2]);
					progesscharts3("fixedcherts10", fixed.data[10][2]);
					progesscharts3("fixedcherts11", fixed.data[11][2]);
					progesscharts3("fixedcherts12", fixed.data[12][2]);
					progesscharts3("fixedcherts13", fixed.data[13][2]);
				});
			}
		}
	},
    mounted() {
      this.initWin();
    }
  }
</script>

<style lang="less" scoped>
  .tdright{
    padding-right: 25rpx;
    font-family: 'PingFang-SC-Medium';
    color: #1c1c1c;
  }
  .tdpadding{
    padding-right:60rpx;
  }
  tr .ztth{
    border: none;
    font-size: 22rpx;
    /*width: 141rpx;*/
    background: #dfe8f1;
  }
  .spanborder{
    display: inline-block;
    width: 141rpx;
    border-right:1rpx solid #c3c3c3;
  }
  .thieght{
    height: 56rpx;
    /*background: red;*/
    padding:0rpx 0rpx 0rpx 0rpx ;
  }
  .borderth{
    border: none;
    height: 57rpx;
    th{
      font-family: PingFang-SC-Bold;
    }
  }

.trhight{
  height: 53rpx;
  /*line-height: 57rpx;*/
  font-family: PingFang-SC-Bold;
  th{
    font-size: 22rpx;
  }
}
  .tdzi{
    height: 53rpx;
    font-size: 22rpx;
    font-family: PingFang-SC-Bold;
    padding-left: 20rpx;
    color: #1c1c1c;
  }
  .thziborder{
    display: inline-block;
    width: 100%;
    /*background: red;*/
    border-right:1rpx solid #c3c3c3;
  }
  .thzi{
    font-size: 22rpx;
    background: #dfe8f1;
    border: none;

  }
  .table-div{
    border: 1rpx solid #e1e1e1;
    height:450rpx;
    margin-bottom: 60rpx;
    padding-left: 0rpx;
  }
.div1center{
  background: #dfe8f1;
  font-family: PingFang-SC-Bold;
  text-align: left;
  /*padding-left:20rpx ;*/
  line-height: 57rpx;
  font-size: 22rpx;
}
 .table-div .div1{
    height:56rpx;
   /*background: red;*/
    font-family: PingFang-SC-Bold;
    text-align: left;
    padding-left:20rpx ;
    line-height: 57rpx;
    font-size: 22rpx;
    /*background: red;*/
  }
  th,td{
    font-weight: normal;
    border-right: 1rpx solid #e1e1e1;
  }
  tr {
    th:last-child, td:last-child{
      border-right: 0;
    }
  }

  .all{
    padding: 24rpx 0rem 0rem 24rpx;
    margin-top: 0.2rem;
    background-color: #fff;
  }
  .situation-tab{
    height:60rpx;
    margin-bottom: 40rpx;
  }

  .tab-title {
    float: left;
    height: 60rpx;
    background: #e1e1e1;
    color: rgba(28,28,28,0.6);
    text-align: center;
    line-height: 60rpx;
    padding: 0rem 0.2rem 0rem 0.2rem;
    font-size:28rpx;
  }
  .tab-title:hover{
   background: #1a79c9;
    color: #ffffff;
  }
  .showecherts{
    height: 400rpx;
    padding-right: 10rpx;
    /*background: red*/
  }
  .tabActive {
    background: #1a79c9;
    color: #ffffff;
  }
  .echerts{
    height:1180rpx;
    /*background: green;*/
    margin-bottom: 0.8rem;
  }
  .echerts-p{
    font-size: 34rpx;
    color: #1c1c1c;
    font-weight: 600;
    font-family: 'PingFang-SC-Regular';
    margin-left: 5rpx;
  }

  .invest{
    height: 0.36rem;
    line-height: 0.36rem;
  }
  .Integrated{
    display: inline-block;
    height: 36rpx;
    width:95rpx;
    line-height: 36rpx;
    background-color: #1a79c8;
    border-radius: 20rpx 20rpx 20rpx 20rpx;
    font-size: 24rpx;
    color: #FFFFFF;
    text-align: center;
    /*margin-bottom: 0.4rem;*/
  }
  .Integrated-word{
    font-size: 26rpx;
    color: #1c1c1c;
    margin-left:10rpx;
    font-family: 'PingFang-SC-Bold';
  }
  .normtable{
    height: 360rpx;
    background: red;
    display: flex;
    justify-content: space-around;
    border: 1rpx solid #e1e1e1
  }
  .slide-box{
    width: 100%;
    /*background: red;*/
    display: -webkit-box;
    overflow-x: scroll;
    -webkit-overflow-scrolling:touch;
  }
  .slide-box::-webkit-scrollbar{//隐藏滚动条
    display: none;
  }
  .slide-item{
    width: 100%;
    height: 100%;
    border:1rpx solid #ccc;
    margin-right: 30rpx;
    border: none;
  }
  .slide-item1 {
    width: 700rpx;
    height: 850rpx;
    border:1rpx solid #ccc;
    tr:nth-child(2n+1){
      background-color: #f7f9fb;
    }
  }
  .norm-div{
    width: 37%;
    background: #f7f9fb;
  }
  .echers1 {
    height: 950rpx;
  }
</style>
