<style lang="less" scoped>
@import url("../traffic/traffic-class.less");
@import url("../governmentService/government.less");
// @import url("./government.less");
.chartsBlue {
	/*width: 100%;*/
	width: 740rpx;
	height: 330rpx;
	margin-bottom: -30rpx;
}
.chartsGreen {
	/*width: 100%;*/
	width: 740rpx;
	height: 500rpx;
	/*float: left;*/
	margin-top: -15rpx;
}
/*没有数据时的样式*/
.no-data {
	height: 120rpx;
	width: 692rpx;
	margin: 28px auto 0;
	line-height: 120rpx;
	background: #f7f9fb;
	font-size: 22rpx;
	color: #1c1c1c;
	text-align: center;
	.timeTop {
		margin-top: 0 !important;
	}
}
.no-data-bottom {
	margin-bottom: 28px !important;
}
.content-bottom-line {
	height: 1rpx;
}
.img {
	width: 210rpx;
	margin-top: 11rpx;
}
/*市平均分中小黄星星的位置*/
.tab-box-one-good {
	/*.van-rate {*/
	/*!*position: absolute;*!*/
	/*top: 45rpx;*/
	/*left: 360rpx;*/
	/*}*/
}
/*上下三角形排序（1）*/
.table-content .bar-table thead tr th[data-v-7b45d5ec]:nth-child(4) {
	width: 32%;
	position: relative;
	border-right: 0.01333rem solid #e8e8e8;
}
/*上下三角形排序（2）*/
.triangle {
	.con {
		position: absolute;
		float: left;
		margin-top: 12rpx;
		margin-left: 170rpx;
		.triangleDown {
			width: 0;
			height: 0;
			border-top: 0px solid #909090;
			border-left: 8px solid transparent;
			border-right: 8px solid transparent;
			border-bottom: 8px solid #909090;
			margin-bottom: 4rpx;
		}
		.triangleUp {
			width: 0;
			height: 0;
			border-top: 8px solid black;
			border-left: 8px solid transparent;
			border-right: 8px solid transparent;
			border-bottom: 0px solid black;
		}
	}
	.clickColorUp {
		border-top: 8px solid #909090 !important;
		border-bottom: 0px solid #909090 !important;
	}
	.clickColorDown {
		border-top: 0px solid black !important;
		border-bottom: 8px solid black !important;
	}
}
// 地图
.hotmap {
	width: 100%;
	height: 600rpx;
	float: left;
}
.chartsTop {
	margin-top: -20rpx;
}
.charts {
	width: 100%;
	height: 500rpx;
	float: left;
}
.content {
	margin-top: 50rpx;
	width: 100%;
	/*height: 550rpx;*/
}
.sub-tab {
	overflow-x: scroll;
	overflow-y: hidden;
	height: 100%;
	margin-top: 7rpx;
	display: flex;
	white-space: nowrap;
	&::-webkit-scrollbar {
		display: none;
	}
}
//红蓝黄三个色（综合评价）
// .sub-tab-item {
//   margin-top: 25rpx;
//   height: 148rpx;
//   float:left;
//   //border: 1px solid red;
//   margin-left: 28rpx;
//   width: 710rpx;
//   overflow: hidden;

//   .first-title-box{
//     position: relative;
//     width: 210rpx;
//     float:left;
//     height: 148rpx;
//     //border: 2px solid green;
//     float:left;
//     &:first-child{
//       float:left;
//       margin-right: 31rpx;
//     }gin-right: 31rpx;
//     //}
//     &.first{
//       background-color: #edf9f5;
//       border-top: 4px solid #09ab80;
//       background-size: 100% 100%;
//       background-repeat: no-repeat;
//       float:left;
//       margin-right: 31rpx;
//     }
//     &.second{
//       border-top: 4px solid #1a79cb;
//       background-color: #f1f6fb;
//       background-size: 100% 100%;
//       background-repeat: no-repeat;
//       float:left;
//     }
//     &.third{
//       border-top: 4px solid #f0993c;
//       background-color: #fcf7f2;
//       background-size: 100% 100%;
//       background-repeat: no-repeat;
//       float:left;
//       margin-left: 31rpx;
//     }
//     &.fourth{
//       background-color: #edf9f5;
//       border-top: 4px solid #09ab80;
//       background-size: 100% 100%;
//       background-repeat: no-repeat;
//       float:left;
//       margin-right: 31rpx;
//     }
//     .label{
//       margin-top: 30rpx;
//       font-size: 24rpx;
//       color: #1c1c1c;
//       text-align: center;
//     }
//     .num{
//       text-align: center;
//       font-size: 50rpx;
//       font-family: 'DIN-Medium';
//       color: #353535;
//     }
//     .unit {
//       font-size: 0.32rem;
//       color: #353535;
//     }
//     .con {
//       //border: 1px solid green;
//       height: 50rpx;
//       padding-bottom: 34rpx;
//     }
//   }
// }

.sub-tab-scroll {
	width: 98%;
	overflow: hidden;
	margin-left: 10rpx;
	padding-top: 12rpx;
}
.sub-tab {
	// overflow-x: scroll;
	// overflow-y: hidden;
	// width: 100%;
	// margin-top: 7rpx;
	// display: flex;
	// white-space: nowrap;
	// &::-webkit-scrollbar {
	//   display: none;
	// }
}
.first-title-box {
	position: relative;
	float: left;
	height: 148rpx;
	width: 25%;
	//border: 2px solid green;
	float: left;
	&:first-child {
		float: left;
	}
	//&:nth-child(2){
	//  margin-right: 31rpx;
	//}
	&.first {
		background-color: #edf9f5;
		border-top: 4px solid #09ab80;
		background-repeat: no-repeat;
		float: left;
	}
	&.second {
		border-top: 4px solid #1a79cb;
		background-color: #f1f6fb;
		background-repeat: no-repeat;
		float: left;
		margin-left: 10rpx;
	}
	&.third {
		border-top: 4px solid #f0993c;
		background-color: #fcf7f2;
		background-repeat: no-repeat;
		float: left;
		margin-left: 10rpx;
	}
	&.fourth {
		background-color: #edf9f5;
		border-top: 4px solid #09ab80;
		background-repeat: no-repeat;
		float: left;
		margin-left: 10rpx;
	}
	.label {
		//padding-left: 40rpx;
		margin-top: 30rpx;
		font-size: 24rpx;
		color: #1c1c1c;
		text-align: center;
		//float: left;
	}
	.num {
		//padding-left: 40rpx;
		//float: left;
		//border: 1px solid red;
		text-align: center;
		font-size: 50rpx;
		font-family: "DIN-Medium";
		color: #353535;
		//margin-right: 40rpx;
	}
	.unit {
		font-size: 0.32rem;
		color: #353535;
	}
	.con {
		//border: 1px solid green;
		height: 50rpx;
		padding-bottom: 34rpx;
	}
}
</style>
<template>
	<div>
		<div class="onLoading"
				 v-if="isLoading">
			<van-loading>加载中...</van-loading>
		</div>
		<div v-if="!isLoading"
				 class="main">
			<!--1综合评价-->
			<div id="firstTab"
					 class="section-item">
				<div class="title">
					<span class="title-icon-bar-left"></span>
					<span class="title-icon-bar-right"></span>
					<span class="title-text">{{ tabData.data[0].name}}</span>
				</div>
				<div class="timeMoth">
					<van-dropdown-menu :overlay="false">
						<van-dropdown-item v-model="comprehensive"
															 :options="comprehensiveOption"
															 @change="updateChart" />
					</van-dropdown-menu>
				</div>
				<div class="clear-both"></div>
				<div class="content-landing"
						 v-if="comprehensive !== 11">
					<div class="tab-box-one-good">
						<div class="tab-box-one-good-box"
								 v-for="(item, index) in tabData.data[0].data.summary.detail[this.comprehensive].slice(4,5)">
							<div class="label">{{item.label}}</div>
							<div class="starShine">
								<van-rate v-model="item.value/2"
													allow-half
													void-icon="star"
													void-color="#eee"
													color="#ffd21e" />
							</div>
							<div class="con">
								<span class="num">{{item.value}}</span>
								<span class="unit">{{item.unit}}</span>
							</div>
						</div>
					</div>
					<!--<div class="clear-both"></div>-->
					<div class="sub-tab-scroll">
						<div class="sub-tab">
							<div v-for="(item, index) in tabData.data[0].data.summary.detail[this.comprehensive]"
									 v-if="index!==4"
									 class="first-title-box"
									 @click="switchBarAndMap(index)"
									 :class="{first: index===0,second: index===1,third: index===2,fourth:index===3}">
								<div class="label">{{item.label}}</div>
								<div class="con">
									<div class="num">{{item.value}}<span class="unit">{{item.unit}}</span></div>
								</div>
								<!--<div class="avtive" v-if="primaryActive1 === index"></div>-->
								<div v-if="primaryActive1 === index">
									<img class="img"
											 src="../../static/assets/images/h5/tab-selected.png"
											 alt="" />
								</div>
							</div>
						</div>
					</div>
					<!--第一个图-->
					<div class="clear-both"></div>
					<div v-for="(item, index) in tabData.data[0].data.summary.detail[this.comprehensive]"
							 v-if="primaryActive1 === index"
							 class="content">
						<span class="blue-bar">包头市</span>
						<span class="subtitle"
									v-if="primaryActive1 === index">{{item.label}}历史趋势</span>
						<div class="charts"
								 id="rateBarMap"></div>
					</div>
					<!--第二个图-->
					<!--<div class="clear-both"></div>-->
					<div v-for="(item, index) in tabData.data[0].data.summary.detail[this.comprehensive]"
							 v-if="primaryActive1 === index"
							 class="content">
						<span class="blue-bar">包头市1111111111</span>
						<span class="subtitle"
									v-if="primaryActive1 === index">{{item.label}}历史趋势</span>
						<div class="hotmap"
								 id="kindergarten"></div>
					</div>
				</div>
				<div v-else
						 class="no-data">暂无数据</div>
			</div>
			<!--2多渠道收集评价-->
			<div id="secondTab"
					 class="section-item">
				<div class="title">
					<span class="title-icon-bar-left"></span>
					<span class="title-icon-bar-right"></span>
					<span class="title-text">{{tabData.data[1].name}}</span>
				</div>
				<div class="clear-both"></div>
				<div class="timeMoth"
						 :class="{timeTop: comprehensive!==11}">
					<van-dropdown-menu :overlay="false">
						<van-dropdown-item v-model="channelMoth"
															 :options="channelOptionMoth" />
					</van-dropdown-menu>
				</div>
				<div class="LocationArea">
					<van-dropdown-menu :overlay="false">
						<van-dropdown-item v-model="channelLocation"
															 :options="channelOptionLocation" />
					</van-dropdown-menu>
				</div>
				<div class="clear-both"></div>
				<div class="content-landing"
						 v-if="channelMoth !== 11">
					<div class="clear-both"></div>
					<div class="tab-box-one-line-card ">
						<div v-for="(item, index) in (tabData.data[1].data.collector.detail[this.channelLocation][this.channelMoth])"
								 class="first-title-box">
							<div class="label">{{item.label}}</div>
							<div class="num">{{item.value}}<span class="unit">个</span></div>
						</div>
					</div>
				</div>
				<div v-else
						 class="no-data">暂无数据</div>
			</div>
			<!--3多维度分析评价-->
			<div id="thirdTab"
					 class="section-item">
				<div class="title">
					<span class="title-icon-bar-left"></span>
					<span class="title-icon-bar-right"></span>
					<span class="title-text">{{tabData.data[2].name}}</span>
				</div>
				<div class="clear-both"></div>
				<div class="timeMoth timeMothSecond">
					<van-dropdown-menu :overlay="false">
						<van-dropdown-item v-model="dimension"
															 :options="dimensionOption"
															 @change="switchMothTab" />
					</van-dropdown-menu>
				</div>
				<div class="clear-both"></div>
				<div class="content-landing">
					<div class="tab-box-one-line-blue timeTop">
						<div v-for="(item, index) in tabData.data[2].data.analysis.tab"
								 class="first-title-box"
								 :class="{clickColor:index === primaryActive3}"
								 @click="switchKindergartenTab(index)">
							<div class="label">{{item}}</div>
						</div>
					</div>
					<div class="clear-both"></div>
					<div class="content">
						<span class="blue-bar">包头市</span>
						<span class="subtitle">下属区域排行</span>
					</div>
					<div class="clear-both"></div>
					<!--1第一个表-->
					<div class="table-content">
						<table class="bar-table">
							<thead class="title">
								<tr>
									<th v-for="(item,index) in tabData.data[2].data.analysis.chart[0][this.primaryActive3][this.dimension].column">
										<div class="triangle"
												 v-if="index===3">
											<!--以下注释部分为上下三角形排序，此功能Ui让去掉-->
											<!--<div class="con">-->
											<!--<div class="triangleDown"-->
											<!--:class="{clickColorDown:colorDown === 0}"-->
											<!--@click="clickScoreDown()"></div>-->
											<!--<div class="triangleUp" :class="{clickColorUp:colorUp === 1}"-->
											<!--@click="clickScoreUp()"></div>-->
											<!--</div>-->
										</div>{{ item }}
									</th>
									<!--<span v-if="index===3" @click="clickScoreUp()">↑</span><span  v-if="index===3" @click="clickScoreDown()">↓</span>{{ item }}</th>-->
								</tr>
							</thead>
							<tbody>
								<tr v-for="(tItem,tIndex) in tableData1"
										class="row">
									<td v-for="(rItem,rIndex) in tItem"
											:id="'problem_'+tIndex+'_'+rIndex">
										<van-rate v-if="rIndex===3"
															v-model="0.5*(tableData1[tIndex][3])"
															allow-half
															void-icon="star"
															void-color="#eee"
															color="#ffd21e" />
										{{ rItem }}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="clear-both"></div>
					<div class="content">
						<span class="blue-bar">包头市</span>
						<span class="subtitle">本级部门排行</span>
					</div>
					<!--2 第二个表-->
					<div class="table-content">
						<table class="bar-table">
							<thead class="title">
								<tr>
									<th v-for="(item,index) in tabData.data[2].data.analysis.chart[1][this.primaryActive3][this.dimension].column">
										<div class="triangle"
												 v-if="index===3">
											<!--以下注释部分为上下三角形排序，此功能Ui让去掉-->
											<!--<div class="con">-->
											<!--<div class="triangleDown"-->
											<!--:class="{clickColorDown:colorDown == 0}"-->
											<!--@click="clickScoreDown2()"></div>-->
											<!--<div class="triangleUp" :class="{clickColorUp:colorUp == 1}"-->
											<!--@click="clickScoreUp2()"></div>-->
											<!--</div>-->
										</div>{{ item }}
									</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(tItem,tIndex) in tableData2"
										class="row">
									<td v-for="(rItem,rIndex) in tItem"
											:id="'problem_'+tIndex+'_'+rIndex">
										<van-rate v-if="rIndex===3"
															v-model="0.5*(tableData2[tIndex][3])"
															allow-half
															void-icon="star"
															void-color="#eee"
															color="#ffd21e" />
										{{ rItem }}
									</td>

								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<!--4群众热评-->
			<div class="clear-both"></div>
			<div id="fourthTab"
					 class="section-item">
				<div class="title">
					<span class="title-icon-bar-left"></span>
					<span class="title-icon-bar-right"></span>
					<span class="title-text">{{tabData.data[3].name}}</span>
				</div>
				<div class="timeMoth">
					<van-dropdown-menu :overlay="false">
						<van-dropdown-item v-model="people"
															 :options="peopleOption"
															 @change="switchPeople" />
					</van-dropdown-menu>
				</div>
				<div class="clear-both"></div>
				<div>

				</div>
				<div class="content-landing"
						 v-if="people!==11">
					<div class="content">
						<span class="blue-bar">包头市</span>
						<span class="subtitle">好评最多TOP5</span>
						<div class="clear-both"></div>
						<div class="chartsBlue"
								 id="barMapBlue"></div>
					</div>
					<div class="content">
						<span class="blue-bar">包头市</span>
						<span class="subtitle">吐槽最多TOP5</span>
						<div class="chartsGreen"
								 id="barMapYellow"></div>
					</div>
				</div>
				<div v-else
						 class="no-data no-data-bottom">暂无数据</div>
				<div class="content-bottom-line"></div>
			</div>
			<div class="clear-both"></div>
			<div class="bottomDistance"></div>
		</div>
	</div>
</template>

<script>
import { drawJmHotMap, horizontalBarsTop, barChartNoData } from "../../charts/h5-chart";
import remToPx from "../../libs/util.js";

export default {
	name: "facility",
	props: ['tabData'],

	data() {
		return {
			isLoading: true,
			// 1 综合评价所有变量
			primaryActive1: 0,
			value1: 2.5,
			comprehensive: 0,
			// comprehensiveOption:this.tabData.data[0].data.summary.month,
			comprehensiveOption: [
				{ text: '2020年1月', value: 0 },
				{ text: '2020年2月', value: 1 },
				{ text: '2020年3月', value: 2 },
				{ text: '2020年4月', value: 3 },
				{ text: '2020年5月', value: 4 },
				{ text: '2020年6月', value: 5 },
				{ text: '2020年7月', value: 6 },
				{ text: '2020年8月', value: 7 },
				{ text: '2020年9月', value: 8 },
				{ text: '2020年10月', value: 9 },
				{ text: '2020年11月', value: 10 },
				{ text: '2020年12月', value: 11 },
			],
			// 2 多渠道收集评价变量
			mothLocation: 0,
			// 2.1 月份
			channelMoth: 0,
			channelOptionMoth: [
				{ text: '2020年1月', value: 0 },
				{ text: '2020年2月', value: 1 },
				{ text: '2020年3月', value: 2 },
				{ text: '2020年4月', value: 3 },
				{ text: '2020年5月', value: 4 },
				{ text: '2020年6月', value: 5 },
				{ text: '2020年7月', value: 6 },
				{ text: '2020年8月', value: 7 },
				{ text: '2020年9月', value: 8 },
				{ text: '2020年10月', value: 9 },
				{ text: '2020年11月', value: 10 },
				{ text: '2020年12月', value: 11 },
			],
			// 2.2 地点
			channelLocation: 0,
			// channelOptionLocation: this.tabData.data[1].data.collector.area,
			channelOptionLocation: [
				{ text: '包头市', value: 0 },
				{ text: '达茂旗', value: 1 },
				{ text: '白云矿区', value: 2 },
				{ text: '固阳县', value: 3 },
				{ text: '九原区', value: 4 },
				{ text: '昆都仑区', value: 5 },
				{ text: '青山区', value: 6 },
				{ text: '石拐区', value: 7 },
				{ text: '蓬江区', value: 8 },
				{ text: '土右旗', value: 9 },
			],
			// 3 多维度分析评价
			primaryActive3: 0,
			dimension: 0,
			dimensionOption: [
				{ text: '2021年7月', value: 0 },
				{ text: '2021年8月', value: 1 },
				// { text: '2020年1月', value: 0 },
				// { text: '2020年2月', value: 1 },
				// { text: '2020年3月', value: 2 },
				// { text: '2020年4月', value: 3 },
				// { text: '2020年5月', value: 4 },
				// { text: '2020年6月', value: 5 },
				// { text: '2020年7月', value: 6 },
				// { text: '2020年8月', value: 7 },
				// { text: '2020年9月', value: 8 },
				// { text: '2020年10月', value: 9 },
				// { text: '2020年11月', value: 10 },
				// { text: '2020年12月', value: 11 },
			],
			tableData1: '',
			tableData2: '',
			colorUp: 0,
			colorDown: 1,
			// 4 群众热评
			people: 0,
			peopleOption: [
				{ text: '2020年1月', value: 0 },
				{ text: '2020年2月', value: 1 },
				{ text: '2020年3月', value: 2 },
				{ text: '2020年4月', value: 3 },
				{ text: '2020年5月', value: 4 },
				{ text: '2020年6月', value: 5 },
				{ text: '2020年7月', value: 6 },
				{ text: '2020年8月', value: 7 },
				{ text: '2020年9月', value: 8 },
				{ text: '2020年10月', value: 9 },
				{ text: '2020年11月', value: 10 },
				{ text: '2020年12月', value: 11 },
			],
			primaryActive4: 0,
			tableDown: 0,
			tableUp: 0,
			tableDown2: 0,
			tableUp2: 0,

		}
	},
	watch: {
		'tabData.data': function (newValue, oldValue) {
			if (this.tabData.data[0] !== '') {
				this.isLoading = false;
			}
			this.initWin();
		}
	},
	mounted() {
		this.initWin();
	},
	methods: {
		// 整个页面初始化时出现的所有图
		initWin() {
			// console.log('555',this.tabData.data[0].data.summary.detail[10].slice(3,4)[0].value!==0)
			this.$nextTick(() => {
				this.switchKindergartenTab(0)
				this.tabData.data[0].data.summary.chart[0][0].gridLeft = '15%';
				this.tabData.data[0].data.summary.chart[0][0].gridTop = '15%';
				this.tabData.data[3].data.people.detail[0][1].colorList = ['#f99b37', '#ffbc51'];
				this.tabData.data[3].data.people.detail[1][1].colorList = ['#f99b37', '#ffbc51'];
				this.tabData.data[3].data.people.detail[2][1].colorList = ['#f99b37', '#ffbc51'];
				this.tabData.data[3].data.people.detail[3][1].colorList = ['#f99b37', '#ffbc51'];
				this.tabData.data[3].data.people.detail[4][1].colorList = ['#f99b37', '#ffbc51'];
				this.tabData.data[3].data.people.detail[5][1].colorList = ['#f99b37', '#ffbc51'];
				this.tabData.data[3].data.people.detail[6][1].colorList = ['#f99b37', '#ffbc51'];
				this.tabData.data[3].data.people.detail[7][1].colorList = ['#f99b37', '#ffbc51'];
				this.tabData.data[3].data.people.detail[8][1].colorList = ['#f99b37', '#ffbc51'];
				this.tabData.data[3].data.people.detail[9][1].colorList = ['#f99b37', '#ffbc51'];
				this.tabData.data[3].data.people.detail[10][1].colorList = ['#f99b37', '#ffbc51'];
				// this.tabData.data[3].data.people.detail[11][1].colorList = ['#f99b37', '#ffbc51'];
				barChartNoData('rateBarMap', this.tabData.data[0].data.summary.chart[0][0]);
				drawJmHotMap('kindergarten', this.tabData.data[0].data.summary.chart[1][0][0]);
				horizontalBarsTop('barMapBlue', this.tabData.data[3].data.people.detail[this.people][0])
				horizontalBarsTop('barMapYellow', this.tabData.data[3].data.people.detail[this.people][1])
			});
		},
		// 1 综合评价
		updateChart() {
			this.primaryActive1 = 0;
			this.$nextTick(() => {
				barChartNoData('rateBarMap', this.tabData.data[0].data.summary.chart[0][0]);
				drawJmHotMap('kindergarten', this.tabData.data[0].data.summary.chart[1][0][0]);
			})
		},
		switchBarAndMap(index) {
			this.primaryActive1 = index;
			if (this.primaryActive1 === 0) {
				this.$nextTick(() => {
					barChartNoData('rateBarMap', this.tabData.data[0].data.summary.chart[0][0]);
					drawJmHotMap('kindergarten', this.tabData.data[0].data.summary.chart[1][0][0]);
				})
			} else if (this.primaryActive1 === 1) {
				this.$nextTick(() => {
					barChartNoData('rateBarMap', this.tabData.data[0].data.summary.chart[0][1]);
					drawJmHotMap('kindergarten', this.tabData.data[0].data.summary.chart[1][1][0]);
				})
			} else if (this.primaryActive1 === 2) {
				this.$nextTick(() => {
					barChartNoData('rateBarMap', this.tabData.data[0].data.summary.chart[0][2]);
					drawJmHotMap('kindergarten', this.tabData.data[0].data.summary.chart[1][2][0]);
				})
			} else if (this.primaryActive1 === 3) {
				this.$nextTick(() => {
					barChartNoData('rateBarMap', this.tabData.data[0].data.summary.chart[0][3]);
					drawJmHotMap('kindergarten', this.tabData.data[0].data.summary.chart[1][3][0]);
				})
			}
		},
		//2 多渠道收集评价
		// switchMothLocation() {
		//   this.mothLocation = 1
		// },
		// 3 多维度分析评价
		switchKindergartenTab(index) {
			this.primaryActive3 = index;
			this.$nextTick(() => {
				this.tableData1 = this.tabData.data[2].data.analysis.chart[0][this.primaryActive3][this.dimension].data.slice(0, 7)
				this.tableData2 = this.tabData.data[2].data.analysis.chart[1][this.primaryActive3][this.dimension].data.slice(0, 7)
			})
		},
		switchMothTab() {
			this.tableData1 = this.tabData.data[2].data.analysis.chart[0][this.primaryActive3][this.dimension].data.slice(0, 7)
			this.tableData2 = this.tabData.data[2].data.analysis.chart[1][this.primaryActive3][this.dimension].data.slice(0, 7)
		},
		//第一个表格的评分排序（降序）
		clickScoreDown() {
			this.tableUp = 0;
			this.colorDown = 0;
			this.colorUp = 1;
			let temp = [];
			if (this.tableDown === 0) {
				for (let i = this.tableData1.length - 1; i >= 0; i--) {
					temp.push(this.tableData1[i])
				}
				this.tableData1 = temp;
			}
			this.tableDown = 1

		},

		//第一个表格的评分排序（升序）
		clickScoreUp() {
			this.tableDown = 0;
			this.colorDown = 1;
			this.colorUp = 0;
			let temp = [];
			if (this.tableUp === 0) {
				for (let i = this.tableData1.length - 1; i >= 0; i--) {
					temp.push(this.tableData1[i])
				}
				this.tableData1 = temp;
			}
			this.tableUp = 1
		},
		//第二个表格的评分排序（降序）
		clickScoreDown2() {
			this.tableUp2 = 0;
			this.colorDown = 0;
			this.colorUp = 1;
			let temp = [];
			if (this.tableDown2 === 0) {
				for (let i = this.tableData2.length - 1; i >= 0; i--) {
					temp.push(this.tableData2[i])
				}
				this.tableData2 = temp;
			}
			this.tableDown2 = 1
		},
		//第二个表格的评分排序（升序）
		clickScoreUp2() {
			this.tableDown2 = 0;
			this.colorDown = 1;
			this.colorUp = 0;
			let temp = [];
			if (this.tableUp2 === 0) {
				for (let i = this.tableData2.length - 1; i >= 0; i--) {
					temp.push(this.tableData2[i])
				}
				this.tableData2 = temp;
			}
			this.tableUp2 = 1
		},
		// 4 群众热议
		switchPeople(index) {
			this.$nextTick(() => {
				horizontalBarsTop('barMapBlue', this.tabData.data[3].data.people.detail[this.people][0])
				horizontalBarsTop('barMapYellow', this.tabData.data[3].data.people.detail[this.people][1])
			})
		},
	},
}
</script>
