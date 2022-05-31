<template>
	<div class="all1">
		<div class="Integrated">2021年6月</div>
		<div class="table-div1"
				 style="margin-bottom: 0.24rem;">
			<div>
				<p style="color: #1c1c1c;font-family: PingFang-SC-Medium;">包头市</p>
				<p class="margin-p"
					 style="color: #1c1c1c;font-family: PingFang-SC-Medium;">生产总值(亿元)</p>
				<p class="table-p">{{this.tablelist.allSupplyDemand.data[0][0].value}}</p>
			</div>
			<div class="border">
				<p style="color: #1c1c1c;font-family: PingFang-SC-Medium;">包头市</p>
				<p class="margin-p"
					 style="color: #1c1c1c;font-family: PingFang-SC-Medium;">生产总值增速</p>
				<p class="black"
					 v-if="this.tablelist.allSupplyDemand.data[0][1].value>=0">{{this.tablelist.allSupplyDemand.data[0][1].value}}%</p>
				<p class="red"
					 v-else>{{this.tablelist.allSupplyDemand.data[0][1].value}}%</p>
			</div>
			<div>
				<p style="color: #1c1c1c;font-family: PingFang-SC-Medium;">工业</p>
				<p class="margin-p"
					 style="color: #1c1c1c;font-family: PingFang-SC-Medium;">投资增速</p>
				<p class="black"
					 v-if="this.tablelist.allSupplyDemand.data[0][2].value>=0">{{this.tablelist.allSupplyDemand.data[0][2].value}}%</p>
				<p class="red"
					 v-else>{{this.tablelist.allSupplyDemand.data[0][2].value}}%</p>
			</div>
		</div>
		<div class="table-div"
				 style="height: 4rem;">
			<div>
				<p style="color: #1c1c1c;font-family: PingFang-SC-Medium;">基础设施投资增速</p>
				<p class="margin-p"
					 style="color: #1c1c1c;font-family: PingFang-SC-Medium;">(亿元)</p>
				<p class="table-p1">{{this.tablelist2.allSupplyDemand.data[0][0].value}}</p>
			</div>
			<div>
				<p style="color: #1c1c1c;font-family: PingFang-SC-Medium;">社会消费品</p>
				<p class="margin-p"
					 style="color: #1c1c1c;font-family: PingFang-SC-Medium;">零售总额(亿元)</p>
				<p class="table-p1">{{this.tablelist2.allSupplyDemand.data[0][1].value}}</p>
			</div>
			<div>
				<p style="color: #1c1c1c;font-family: PingFang-SC-Medium;">规上工业</p>
				<p class="margin-p"
					 style="color: #1c1c1c;font-family: PingFang-SC-Medium;">累计产销率</p>
				<p class="table-p1">{{this.tablelist2.allSupplyDemand.data[0][2].value}}</p>
			</div>
			<div>
				<p style="color: #1c1c1c;font-family: PingFang-SC-Medium;">固定资产投资</p>
				<p class="margin-p"
					 style="color: #1c1c1c;font-family: PingFang-SC-Medium;">增速</p>
				<p class="black2"
					 v-if=" this.tablelist2.allSupplyDemand.data[0][3].value>=0">{{this.tablelist2.allSupplyDemand.data[0][3].value}}%</p>
				<p class="red2"
					 v-else>{{this.tablelist2.allSupplyDemand.data[0][3].value}}%</p>
			</div>
			<div>
				<p style="color: #1c1c1c;font-family: PingFang-SC-Medium;">社会消费品</p>
				<p class="margin-p"
					 style="color: #1c1c1c;font-family: PingFang-SC-Medium;">零售额增速</p>
				<p class="black2"
					 v-if=" this.tablelist2.allSupplyDemand.data[0][4].value>=0">{{this.tablelist2.allSupplyDemand.data[0][3].value}}%</p>
				<p class="red2"
					 v-else>{{this.tablelist2.allSupplyDemand.data[0][4].value}}%</p>
			</div>
			<div>
				<p style="color: #1c1c1c;font-family: PingFang-SC-Medium;">规上工业</p>
				<p class="margin-p"
					 style="color: #1c1c1c;font-family: PingFang-SC-Medium;">增加值增速</p>
				<p class="black2"
					 v-if=" this.tablelist2.allSupplyDemand.data[0][5].value>=0">{{this.tablelist2.allSupplyDemand.data[0][3].value}}%</p>
				<p class="red2"
					 v-else>{{this.tablelist2.allSupplyDemand.data[0][5].value}}%</p>
			</div>
			<div v-for="(item,index) in addLabel1"
					 class="addStyle">
				<p class="lable2"
					 v-if="item.lable.length<=5">{{item.lable}}</p>
				<p class="lable2"
					 v-if="item.lable.length<=5">({{item.unit}})</p>
				<p class="lable2"
					 v-if="item.lable.length>5">{{item.lable}}</p>
				<p class="lable2"
					 v-if="item.lable.length>5">{{item.lable.slice(5)}}({{item.unit}})</p>
				<p class="value">{{item.value}}</p>
			</div>
			<!--      <div class="table-list" v-for="Item in this.tablelist2.allSupplyDemand.data[0]">-->
			<!--        <p class="table-word">{{Item.lable}}</p>-->
			<!--        <div class="black" v-if="Item.value>=0" >-->
			<!--          <span class="table-num">{{Item.value}}</span>-->
			<!--          <span class="table-unit">{{Item.unit}}</span>-->
			<!--        </div>-->
			<!--        <div class="red" v-else >-->
			<!--          <span class="table-num">{{Item.value}}</span>-->
			<!--          <span class="table-unit">{{Item.unit}}</span>-->
			<!--        </div>-->
			<!--      </div>-->
		</div>
		<div class="echerts">
			<p class="echerts-p">产业结构</p>
			<div id="echerts1"
					 style="height: 100%;"></div>
		</div>
		<div class="echerts"
				 style="height: 7rem;">
			<p class="echerts-p">投资、消费和生产总值</p>
			<div id="echerts2"
					 style="height: 100%;"></div>
		</div>
		<!-- <div class="echerts"
				 style="height: 7rem;">
			<p class="echerts-p"
				 style="position: relative;height:0.5rem">区域对外经贸环境</p>
			<div id="echerts3"
					 style="height: 100%;"></div>
		</div> -->
		<!-- 主要工业园区工业增加值及固定资产投资 -->
		<div class="echerts">
		  <p class="echerts-p">主要工业园区工业增加值及固定资产投资</p>
		  <div class="situation-tab">
		    <div v-for="(item, index) in citytab1"  class="tab-title-macro" :class="{tabActive: index === showecherts1}"
		         @click="switchcitytab1(index)">
		      {{ item }}
		    </div>
		  </div>
		  <div class="showecherts">
		    <div class="echers1" v-show="showecherts1==0">
		      <table class="slide-item1" cellspacing="0">
		        <tr class="trhight" style="color: #1a79c9;background: #dfe8f1;">
		          <th  class="thzi"  style="width: 4.5rem" >
		            <span class="thziborder">行业类型</span>
		          </th>
		          <th  class="thzi"  style="width: 1.5rem" >
		            <span class="thziborder">生产总值</span>
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
		<!-- 货运量 -->
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
									<img class="img1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAACF0lEQVQ4jZXVX2hPYRgH8M9v/ab5k6yUNmlL7YYS2oUSZhfCBRYyRS7cqEm4ELnwm0ItcoE7ocgupmy5EBf6pbjhgrU0KxlCokwrkgsu3nO2X8c557d96+30vO/zfHvO87zv9ynM7CvJQD12YTOWoQEFfMEgHqAXX7MIalL26nAMI9iAO2jHXMzBGtzCarzCKcxOIy8m7Cb0430UPJISMxqtXjSiB8/RgeGszJvxGNexNYM4iU/Ygyt4hCVpmddhAOdxCW1TIK7EZfyIOFZiHApRQ09jKbZHzn+nSV6IvleFBp8glKUeXTicCOiOgvJWdyLmOPZjIaEsW4Rr9SElo9I0/+Ab+rAPZ2uE5t2dJkke+rGJkHkrjmY4lqoQpZ0/Ex6dGizA54zgNqG5aastI2YMtZhVg9+YUSXDG1gfrSNVfCdQjLJuxOscv3coT5FzHv7gZxFDQo3yyJtMlmF5FfJWQdgUcU/Qhb4Ux7Eo42ZBoGKUo7M0dOB+TD6AC1jk/7v+QqhzFrYl7PnYiRUx+XdBeC5iRw5RJeJ30ZzY78E1fGRSFc+hBQcjuyzIahZeCo0bM3l7DmAtzsROsSr+En6xLAyEdvniVUrYXTgpDJfxeLNSz99iHTqFPrTkkMdowE0cihIaqjxMjrlRrMITPBVG3F4sFh5arXAtO4VJNIg3goYPJ7gm9DwN9diNjdIH9EPcljOg/wHs4HKBV5DQ8gAAAABJRU5ErkJggg==" alt="">
									<img class="img2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAlUlEQVQokeXQPQ5BYRCF4cd1FZYgNmAbEqJQqLR2oVHRqsQCNFQsRqMS0Sn8FTeRoFP4JJ8IG/A2M5k5czIzueKiL6KDCnpxMY3yNibI447Bq5GE2MIsCKCPbuzUwBwHnFDGFsPgOE4wxRlV7HANg0uMUEqQoYZNtF8WhCsUUjSx9skRddzSL4IX+/i6n/yX6OL57Tcem/wdD+BznX8AAAAASUVORK5CYII=" alt="">
									<span>
									{{item.increment}}{{item.incrementUnit}}</span>
								</div>
							</div>
							<div
								:class="{splitLine: (primaryActive===2 && index===0) || (primaryActive===0 && index===1)}"
								class="no-split-line"
							></div>
						</div>
					</div>
					<div class="clear-both"></div>
					<div class="content">
					  <div class="chartsHuo chartsTop" id="goodsNum"></div>
					</div>
				</div>
			</div>
			
			<!-- 服务业主体分布情况 -->
			<!-- <div id="thirdTab" class="content">
				<div class="title">
					<span class="title-icon-bar-left"></span>
					<span class="title-icon-bar-right"></span>
					<span class="title-text">{{ tabDataService.data[2].name }}</span>
				</div>
				<span class="time_subtitle">{{this.tabData.data[2].data.company.detail[0].year}}年</span>
				<div class="serviceDistribution">
					<div class="tab-two-line-title-three" style="position: relative;">
					  <div class="tab-two-line-item-two"
						   v-for="(item,index) in tabData.data[2].data.company.detail"
						   @click="switchServiceDistribution(index)"
						   :class="{tabGreenDouble: index===0, tabBlueDouble: index===1}">
						<div class="tab-two-line-item-top-three">
						  <span class="name">{{item.label}}</span><br/>
						  <span class="number">{{item.value}}</span>
						  <span class="unit">{{item.unit}}</span>
						</div>
						<div v-if="ServiceDistribution === index" class="selectTab" >
						  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAAAXCAYAAABzomECAAABYElEQVR4nO3bMUoDQRjF8f+GXMAzbO89RESxs7X3DKJ4htwgFwjYpk+dehWxDCxskyIQ1mInIijE3f1mv2HzfpBy33wpHllmJllZlufABSLS1+sUqIEz70lERiDLyrL0HkJkNLK6rr1nEBmNifcAImOiQokYmnoPcEqKohh8zTzPB1/zlOkXSsSQCuVjRnNcEfMzG+zbyDcVyscDsIiYvwhryMBUKB974A5YRchehex9hGw5QoXyswWugA/DzM+QuTXMlBZUKF8bmgJUBlkVcBkyxYkK5W8N3AK7Hhm7kLE2mUg6U6HSsATuaXbn2qrDs0vTiaQTFSodc+C5w3Mv4VlJgAqVlifalWMOPEaaRTpQodLS5vWtz2uiRKJCpec/GwwWGxkSgQqVpgq45u8t8A1wg81WuxhTodL1zu9D2sNh8JvLRHKUCpW2n9eIYl5XEiP6P1T6DhddJ8S9UCsGvgAm8lpnf997zgAAAABJRU5ErkJggg==" alt=""/>
						</div>
					  </div>
					</div>
					<table class="bar-table">
						<thead class="title">
						<tr>
						  <th>行业名称</th>
						  <th v-if="ServiceDistribution === 0">单位数(个)</th>
						  <th v-if="ServiceDistribution === 1">人员数(个)</th>
						</tr>
						</thead>
						<tbody>
						<tr v-for="(item,index) in this.tabData.data[2].data.company.chart[0].series[0].data" class="row">
						  <td>{{ item.name }}</td>
						  <td :id="'landing_'+index+'_1'"></td>
						</tr>
						</tbody>
					</table>
				</div>
			</div> -->
		</div>
</template>

<script>
import cityinspection from "./cityinspection";
// 宏观经济接口调用方法
import { getOceanEconomyMapObject, macroEconomy } from '../api.js'
import {getDataByTabName} from "../../../api/h5-chart";
 // 货运量
import {pileBarAndLineChart, ecologicalLineChart,lineBarChart } from "../../../charts/h5-chart";
import { 
	brainPieChart, 
	brainMultiLineChartwo2, 
	brainMultiLineChartwo3, 
	stackedLineChart, 
	brainMultiBarChartRegional, 
	brainLineAndBarChart2 ,
	// 工业增加值进度条
	brainMultiBarChartForMarine2,
	progesscharts2,
	progesscharts3,
} from '../echarts.js'
import {
	brainLineAndBarChartFour2,
	brainPieChartCircle,
	multiBarChartHorizontal,
	multiBarChartHorizontal2,
	multiBarChartHorizontal3, multiBarChartHorizontal4
} from "../../../charts/rural-charts";
export default {
	
	props: {
		Poverty: {
			type: Object,
			default: {},
		}
	},
	data() {
		return {
			addLabel: [
				{ unit: "亿元", lable: "一般公共预算收入", value: 263.98 },
				{ unit: "亿元", lable: "税收收入", value: 168.79 },
				{ unit: "亿元", lable: "一般公共预算支出", value: 443.25 },
				{ unit: "平方公里", lable: "工业用地面积", value: 64.37 },
				{ unit: "平方公里", lable: "工业用地出让面积", value: 3.17 },
				{ unit: "吨标煤", lable: "万元GDP能耗", value: 0.7 }
			],
			addLabel1: {},
			echertsdata: {},
			echertsdata2: {},
			echertsdata3: {},
			tablelist: {},
			tablelist2: {},
			// povertyData:{},
			
			// 主要工业园区工业增加值及固定资产投资
			// addTitle: '',
			// citytab:["区市GDP","区市规上工业增加值","财政收入","财政支出"],
			// tablelist:["规划工业增加值","一般公共预算收入","固定资产投资增速","社销零累计值","出口同比增速",'利用外资同比'],
			citytab1:["工业增加值","固定资产投资"],
			// hottab:["当期增速","累计增速"],
			// hotactive:0,
			// showecherts:0,
			showecherts1:0,
			citydata:{},
			// 货运量
			tabData:{},
			// 服务业主体分布情况
			ServiceDistribution:0,
			tabDataService:{}
		}
	},
	// 货运量
	// watch: {
	//   'tabData.data': function (newValue, oldValue) {
	//     this.initWin()
	//     console.log('tabData',this.tabData)
	//   }
	// },
	mounted() {
		this.getTabData();
		this.getTabData2();
		this.initWin();
	},
	methods: {
		initWin() {
			// this.povertyData = this.Poverty;
			this.$nextTick(()=>{
				let time = setInterval(() => {
					// console.log('aaaa111',this.Poverty)
					if (this.Poverty.integratedMonitoring) {
						this.tablelist = this.Poverty.integratedMonitoring.allSupplyDemand;
						this.tablelist2 = this.Poverty.integratedMonitoring.allSupplyDemand2;
						this.addLabel1 = this.tablelist2.allSupplyDemand.data[0].slice(6, 12);
						// console.log('777', this.addLabel1)
						brainPieChart("echerts1", this.Poverty.integratedMonitoring.industrialStructure.data);
						brainLineAndBarChart2("echerts2", this.Poverty.integratedMonitoring.economicTrend.data);
						// brainMultiLineChartwo3("echerts3", this.Poverty.integratedMonitoring.ForeignEnvironment.data);
						clearTimeout(time)
					}
				}, 1000)
			})
			// start 主要工业园区工业增加值...
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
			// end
			
			
			// 货运量
			this.$nextTick(()=>{
				// echarts图1
				// this.tabData.data[1].data.number.chart.legendRight = 'auto';
				// this.tabData.data[1].data.number.chart.gridLeft = '14%';
				// this.tabData.data[1].data.number.chart.gridLeft = 100;
				// echarts图2
				// this.tabData.data[3].data.peopleflow.chart.legendRight = 'auto';
				// this.tabData.data[3].data.peopleflow.chart.legendShow='true';
				// this.tabData.data[3].data.peopleflow.chart.gridLeft = '110';
				// echarts图3
				this.tabData.data[4].data.goodsflow.chart.legendRight = 'auto';
				this.tabData.data[4].data.goodsflow.chart.gridLeft = '14%';
				// echarts图4
				// this.tabData.data[5].data.goodstps.chart.legendRight = 'auto';
				// this.tabData.data[5].data.goodstps.chart.legendShow='true';
				// this.tabData.data[5].data.goodstps.chart.gridLeft = '110'
				// lineBarChart('employed', this.tabData.data[1].data.number.chart);
				// ecologicalLineChart('quantity',this.tabData.data[3].data.peopleflow.chart);
				pileBarAndLineChart('goodsNum', this.tabData.data[4].data.goodsflow.chart);
				// ecologicalLineChart('lineChart1', this.tabData.data[5].data.goodstps.chart);
			})
		},
		// 点击切换工业增加值和固定资产投资
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
		},
		// 货运量接口获取数据
		getTabData(){
			let params = {
				name:'交通运力'
			}
			getDataByTabName(params, res => {
			  if(res.data) {
			    // console.log('ddd',res.data.data[0].data.company.detail);
			    this.tabData = res.data;
				console.log("tabData交通运力----->",this.tabData)
			    // this.judgeHasSubTab(this.tabData.data);
			    // 切换tab时获取当前tab页的各标签页高度
			    // this.setSubTabOffset(index);
			  } else {
			    Notify({ type: 'danger', message: '获取数据错误' });
			  }
			}, err => {
			  Notify({ type: 'danger', message: '服务器错误'+err });
			});
		},
		getTabData2(){
			let params = {
				name:'服务业'
			}
			getDataByTabName(params, res => {
			  if(res.data) {
			    // console.log('ddd',res.data.data[0].data.company.detail);
			    this.tabDataService = res.data;
				console.log("tabData服务业----->",this.tabDataService)
			    // this.judgeHasSubTab(this.tabData.data);
			    // 切换tab时获取当前tab页的各标签页高度
			    // this.setSubTabOffset(index);
			  } else {
			    Notify({ type: 'danger', message: '获取数据错误' });
			  }
			}, err => {
			  Notify({ type: 'danger', message: '服务器错误'+err });
			});
		},
		// 服务业主体分布情况 tab切换
		switchServiceDistribution(index) {
		  setTimeout(() => {
		    this.ServiceDistribution = index;
		    this.initBarInTable('landing', this.tabData.data[2].data.company.chart[index].series[0].data.slice(0,this.tabData.data[2].data.company.chart[index].series[0].data.length), ['#39c77f']);
		  })
		},
	}
}
</script>

<style lang="less" scoped>
	.margin-p {
		margin-top: 30rpx;
	}
	.black {
		font-size: 44rpx;
		color: #353535;
		/*font-weight:600;*/
		font-family: "DIN-Medium";
	}
	.red {
		font-size: 50rpx;
		font-family: "DIN-Medium";
		color: #ef382b;
		margin-top: -2rpx;
	}
	.black2 {
		font-size: 44rpx;
		color: #353535;
		font-family: "DIN-Medium";
		margin-top: 20rpx;
	}
	.red2 {
		margin-top: -2rpx;
		font-family: "DIN-Medium";
		font-size: 44rpx;
		color: #ef382b;
	}
	.all1 {
		padding: 0.2rem 0.2rem 0.2rem 0.2rem;
		margin-top: 0.2rem;
		background-color: #fff;
	}
	.border {
		height: 150rpx;
		border-right: 1rpx solid #d2d2d2;
	}
	.Integrated {
		display: inline-block;
		height: 36rpx;
		width: 142rpx;
		line-height: 36rpx;
		background-color: #1a79c8;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		font-size: 0.29333rem;
		color: #ffffff;
		text-align: center;
		margin-bottom: 20rpx;
	}
	.table-div {
		.addStyle {
			.lable2 {
				color: #1c1c1c;
				font-family: PingFang-SC-Medium;
				margin-top: 20rpx;
			}
			.value {
				font-size: 44rpx;
				color: #353535;
				font-family: "DIN-Medium";
				margin-top: 20rpx;
			}
			// p{
			// 	font-size:12rpx;
			// 	height:40rpx;
			// }
		}

		height: 7rem !important;
		/*border: 1rpx solid red;*/
		display: flex;
		width: 692rpx;
		flex-wrap: wrap;
		box-shadow: 3rpx 3rpx 12rpx rgba(129, 129, 129, 0.25);
		margin: 0 auto 0.8rem;
		text-align: center;
		padding-top: 0.3rem;
		padding-bottom: 1.5rem;
		div {
			width: 33.3%;
			height: 2rem;
			font-size: 0.24rem;
		}
	}
	.table-div1 {
		height: 200rpx;
		/*margin-bottom: 0.8rem;*/
		margin: 0 auto;
		width: 714rpx;
		display: flex;
		justify-content: space-around;
		/*background: url("../../../static/assets/img/beijing.png") no-repeat 100% 100%;*/
		background: url(data:image/png;base64,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)no-repeat 100% 100%;
		background-size: 100% 100%;
		padding-top: 40rpx;
		div {
			width: 33.3%;
			text-align: center;
			font-size: 24rpx;
			p {
				height: 30rpx;
				margin-top: 12rpx;
				/*color: #1c1c1c;*/
			}
		}
	}
	.table-p {
		font-size: 50rpx;
		color: #353535;
		/*font-weight:600;*/
		margin-top: -5rpx;
		font-family: "DIN-Medium";
	}
	.table-p1 {
		font-size: 44rpx;
		color: #353535;
		/*font-weight:600;*/
		margin-top: 30rpx;
		font-family: "DIN-Medium";
	}
	.table-list {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
	}
	.table-word {
		font-size: 0.24rem;
		color: black;
	}
	.table-num {
		font-size: 0.5rem;
		/*color: #353535;*/
		font-weight: 500;
	}
	.table-unit {
		font-size: 0.2rem;
	}
	.echerts {
		height: 500rpx;
		/*background: red;*/
		margin-bottom: 1.2rem;
		&:last-child {
			padding-bottom: 150rpx;
		}
	}
	.echerts-p {
		font-size: 36rpx;
		color: #1c1c1c;
		font-weight: 600;
		height: 30rpx;
		top: 20rpx;
		font-family: "PingFang-SC-Regular";
		/*line-height: 1.9rem;*/
	}
	p {
		height: 10rpx;
		font-size: 24rpx;
	}
</style>


<!-- // 区市监测style -->
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

  .tab-title-macro {
    float: left;
    height: 60rpx;
    background: #e1e1e1;
    color: rgba(28,28,28,0.6);
    text-align: center;
    line-height: 60rpx;
    padding: 0rem 0.2rem 0rem 0.2rem;
    font-size:28rpx;
	margin-top:0.4rem;
  }
  .tab-title-macro:hover{
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
    // height: 850rpx;
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

<!-- 货运量 -->
<style lang="less" scoped>
  @import url("../../traffic/traffic-class.less");
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
  .chartsHuo {
    width: 100%;
    height: 500rpx;
    float: left;
	border:1px solid red;
  }
  .content {
    width: 100%;
  }
</style>