<style lang="less" scoped>
.clear-both {
	clear: both;
	content: '';
}
.section-sticky {
	height: 1334rpx;
	background-color: #fff;
}
.section-top {
	height: 380rpx;
}
.higherTop {
	height: 488rpx;
}
.banner {
	background-image: url('../../static/assets/images/h5/economyBg.png');
	width: 750rpx;
	height: 282rpx;
	background-size: 750rpx;
	background-repeat: no-repeat;
	position: relative;
	p {
		display: inline-block;
		width: 750rpx;
		font-size: 54rpx;
		color: #fff;
		font-family: 'PingFang-SC-Heavy';
		position: absolute;
		top: 104rpx;
		left: 0rpx;
		padding-left: 56rpx !important ;
		background-image: url('../../static/assets/images/h5/bgColor.png');
	}
}
.header {
	width: 740rpx;
	height: 98rpx;
	border-bottom: 1rpx solid #e1e1e1;
	background-color: #fff;
	padding-left: 10rpx;
	.tab-item {
		float: left;
		margin: 30rpx 23.5rpx 12rpx 23.5rpx;
		font-size: 28rpx;
		font-family: 'PingFang-SC-Bold';
	}
	.tabActive {
		color: #1c70c8;
	}
	.active-line {
		width: 52rpx;
		height: 6rpx;
		margin: 5rpx auto;
		background: linear-gradient(to right, #277ecf, #70afe9);
		background: -ms-linear-gradient(to right, #277ecf, #70afe9);
		background: -webkit-linear-gradient(to right, #277ecf, #70afe9);
		background: -moz-linear-gradient(to right, #277ecf, #70afe9);
	}
}
.secondTab {
	height: 206rpx;
	position: relative;
}
.sub-tab-scroll {
	width: 710rpx;
	height: 75rpx;
	overflow: hidden;
	margin-left: 10rpx;
}
.sub-tab {
	overflow-x: scroll;
	overflow-y: hidden;
	height: 750rpx;
	margin-top: 7rpx;
	display: flex;
	white-space: nowrap;
	&::-webkit-scrollbar {
		display: none;
	}
}
.sub-tab-item {
	height: 64rpx;
	float: left;
	padding-left: 38rpx;
	padding-right: 38rpx;
	border: 1rpx solid #f2f2f2;
	background-color: #f2f2f2;
	border-radius: 33rpx;
	font-size: 24rpx;
	color: #000;
	line-height: 66rpx;
	margin-right: 20rpx;
	font-family: 'PingFang-SC-Bold';
}
.subActive {
	border-color: #1a79c8;
	color: #1c70c8;
	background-color: #e7f2ff;
}
.tab-content {
	width: 750rpx;
}
/*@import "../common.less";*/
</style>
<template>
	<div class="section-sticky">
		<div class="content" id="top" :class="{ higherTop: hasSecondTab }">
			<div class="banner"><p>经济运行</p></div>
			<van-sticky :z-index="9999999999">
				<div class="header" :class="{ secondTab: hasSecondTab }">
					<div v-for="(item, index) in tabListShow" class="tab-item" :class="{ tabActive: index === tabActiveIndex }" @click="changeTab(index)">
						<span>{{ item.text }}</span>
						<div v-if="index === tabActiveIndex" class="active-line"></div>
					</div>
					<div class="sub-tab-scroll">
						<div v-if="hasSecondTab" class="sub-tab">
							<div v-for="(item, index) in subTabList" class="sub-tab-item" :class="{ subActive: index === subTabActiveIndex }" @click="changeSubTab(index)">
								{{ item }}
							</div>
						</div>
					</div>
				</div>
			</van-sticky>
			<div class="clear-both"></div>
			<!--<div>-->
			<!--<van-loading size="24px" v-show="isLoading">加载中...</van-loading>-->
			<!--</div>-->
			<div class="tab-content">
				<!-- 整体概况/申请类型/办件类型 -->
				<efficiency-supervision v-if="tabActiveIndex === 0" :tabData="tabData"></efficiency-supervision>
				<!-- 办件、受理量趋势 -->
				<agriculture-inf :tabDataAgriculture="tabDataAgriculture"></agriculture-inf>
				<!-- 营商环境综合得分 -->
				<!-- <business-score-gover :tabDataBusiness="tabDataBusiness"></business-score-gover> -->
				<!-- 办件预测 -->
				<!-- <industry-gover :tabDataIndustry="tabDataIndustry"></industry-gover> -->

				<!-- <key-area v-if="tabActiveIndex===1" :tabData="tabData"></key-area> -->
				<!--<investment-environment v-if="tabActiveIndex===2" :tabData="tabData"></investment-environment>-->
				<!--<attract-investment v-if="tabActiveIndex===3" :tabData="tabData"></attract-investment>-->
			</div>
		</div>
	</div>
</template>

<script>
import { getDataByTabName } from '../../api/h5-chart';
import Notify from 'vant/es/notify';
import { remToPx, switchNumToDom, windowScroll } from '../../libs/util';
import efficiencySupervision from './components/efficiency-supervision';
import agricultureInf from './components/agricultureG';

// import businessScoreGover from './business-score-gover.vue'
// import industryGover from "./industry-gover.vue"
// import KeyArea from "./good-bad";
// import InvestmentEnvironment from "../investment/investment-environment";
// import AttractInvestment from "../investment/attract-investment";

export default {
	name: 'index',
	components: { efficiencySupervision, agricultureInf },
	data() {
		return {
			isLoading: true,
			hasSecondTab: false,
			tabActiveIndex: '',
			subTabActiveIndex: 0,
			tabListShow: [
				{ text: '综合检测', value: 0 }
				// { text: '好差评', value: 1 },1
				// { text: '业务申办', value: 2 },
				// { text: '四办比例', value: 3},
				// { text: '评价', value: 4}
			],
			subTabList: [],
			tabData: {},
			projectData: {},
			subIndexOffset: [],
			testData2: {
				data: [
					{
						data: {
							onLineService: {
								detail: [
									{
										label: '窗口办理数量',
										value: 90.58,
										unit: '%',
										year: '2021'
									},
									{
										label: '网上办理数量',
										value: 99.48,
										unit: '%',
										year: '2021'
									},
									{
										label: '快递申请数量',
										value: 93.47,
										unit: '%',
										year: '2021'
									}
								],
								chart: [
									[
										{
											mapData: [
												{
													name: '白云鄂博矿区',
													value: 1
												},
												{
													name: '达尔罕茂明安联合旗',
													value: 2
												},
												{
													name: '固阳县',
													value: 3
												},
												{
													name: '石拐区',
													value: 4
												},
												{
													name: '东河区',
													value: 5
												},
												{
													name: '青山区',
													value: 6
												},
												{
													name: '九原区',
													value: 7
												}
											]
										}
									],
									{
										column: ['地区', '办件量', '办结量', '办结率', '超时办理量'],
										data: [
											['包头市', 97.05, 77.05, 95.05, 90],
											['达茂旗', 96.08, 70.54, 94.59, 92],
											['白云矿区', 98.61, 77.14, 94.56, 78],
											['固阳县', 96.18, 81.34, 94.49, 50],
											['九原区', 96.65, 80.63, 94.23, 88],
											['昆都仑区', 91.09, 79.9, 94.09, 90],
											['青山区', 96.01, 81.96, 92.28, 90],
											['石拐区', 20.62, 97.44, 72.23, 96],
											['东河区', 22.87, 97.29, 67.04, 93],
											['土右旗', 26.47, 97.31, 66.9, 91]
										]
									}
								]
							}
						},
						name: '申请类型'
					},
					{
						data: {
							Service: {
								detail: [
									{
										label: '依申请事项指南数(本级)',
										value: 1757.0,
										unit: null,
										year: '2021'
									},
									{
										label: '依申请事项指南数(全盟市)',
										value: 9805.0,
										unit: null,
										year: '2021'
									},
									{
										label: '公共服务事项指南数(本级)',
										value: 509.0,
										unit: null,
										year: '2021'
									},
									{
										label: '公共服务事项指南数(全盟市)',
										value: 4294.0,
										unit: null,
										year: '2021'
									},
									{
										label: '服务事项数(本级)',
										value: 490.0,
										unit: null,
										year: '2020'
									},
									{
										label: '服务事项数(全盟市)',
										value: 4213.0,
										unit: null,
										year: '2021'
									}
								],
								chart: [
									[
										{
											mapData: [
												{
													name: '开平市',
													unit: null,
													value: 1267.0
												},
												{
													name: '台山市',
													unit: null,
													value: 1265.0
												},
												{
													name: '新会区',
													unit: null,
													value: 1247.0
												},
												{
													name: '恩平市',
													unit: null,
													value: 1247.0
												},
												{
													name: '鹤山市',
													unit: null,
													value: 1211.0
												},
												{
													name: '江海区',
													unit: null,
													value: 1059.0
												},
												{
													name: '蓬江区',
													unit: null,
													value: 1026.0
												},
												{
													name: '台山市',
													unit: null,
													value: 1252.0
												},
												{
													name: '开平市',
													unit: null,
													value: 1252.0
												},
												{
													name: '恩平市',
													unit: null,
													value: 1189.0
												},
												{
													name: '新会区',
													unit: null,
													value: 1182.0
												},
												{
													name: '鹤山市',
													unit: null,
													value: 1178.0
												},
												{
													name: '蓬江区',
													unit: null,
													value: 998.0
												},
												{
													name: '江海区',
													unit: null,
													value: 997.0
												}
											]
										},
										{
											mapData: [
												{
													name: '开平市',
													unit: null,
													value: 1267.0
												},
												{
													name: '台山市',
													unit: null,
													value: 1265.0
												},
												{
													name: '新会区',
													unit: null,
													value: 1247.0
												},
												{
													name: '恩平市',
													unit: null,
													value: 1247.0
												},
												{
													name: '鹤山市',
													unit: null,
													value: 1211.0
												},
												{
													name: '江海区',
													unit: null,
													value: 1059.0
												},
												{
													name: '蓬江区',
													unit: null,
													value: 1026.0
												},
												{
													name: '台山市',
													unit: null,
													value: 1252.0
												},
												{
													name: '开平市',
													unit: null,
													value: 1252.0
												},
												{
													name: '恩平市',
													unit: null,
													value: 1189.0
												},
												{
													name: '新会区',
													unit: null,
													value: 1182.0
												},
												{
													name: '鹤山市',
													unit: null,
													value: 1178.0
												},
												{
													name: '蓬江区',
													unit: null,
													value: 998.0
												},
												{
													name: '江海区',
													unit: null,
													value: 997.0
												}
											]
										},
										{
											mapData: [
												{
													name: '新会区',
													unit: null,
													value: 584.0
												},
												{
													name: '台山市',
													unit: null,
													value: 574.0
												},
												{
													name: '恩平市',
													unit: null,
													value: 551.0
												},
												{
													name: '鹤山市',
													unit: null,
													value: 541.0
												},
												{
													name: '开平市',
													unit: null,
													value: 504.0
												},
												{
													name: '江海区',
													unit: null,
													value: 503.0
												},
												{
													name: '蓬江区',
													unit: null,
													value: 466.0
												},
												{
													name: '恩平市',
													unit: null,
													value: 589.0
												},
												{
													name: '新会区',
													unit: null,
													value: 580.0
												},
												{
													name: '台山市',
													unit: null,
													value: 577.0
												},
												{
													name: '鹤山市',
													unit: null,
													value: 548.0
												},
												{
													name: '开平市',
													unit: null,
													value: 513.0
												},
												{
													name: '江海区',
													unit: null,
													value: 510.0
												},
												{
													name: '蓬江区',
													unit: null,
													value: 468.0
												}
											]
										},
										{
											mapData: [
												{
													name: '新会区',
													unit: null,
													value: 584.0
												},
												{
													name: '台山市',
													unit: null,
													value: 574.0
												},
												{
													name: '恩平市',
													unit: null,
													value: 551.0
												},
												{
													name: '鹤山市',
													unit: null,
													value: 541.0
												},
												{
													name: '开平市',
													unit: null,
													value: 504.0
												},
												{
													name: '江海区',
													unit: null,
													value: 503.0
												},
												{
													name: '蓬江区',
													unit: null,
													value: 466.0
												},
												{
													name: '恩平市',
													unit: null,
													value: 589.0
												},
												{
													name: '新会区',
													unit: null,
													value: 580.0
												},
												{
													name: '台山市',
													unit: null,
													value: 577.0
												},
												{
													name: '鹤山市',
													unit: null,
													value: 548.0
												},
												{
													name: '开平市',
													unit: null,
													value: 513.0
												},
												{
													name: '江海区',
													unit: null,
													value: 510.0
												},
												{
													name: '蓬江区',
													unit: null,
													value: 468.0
												}
											]
										}
									],
									{
										column: ['行政区', '依申请事项(本级)', '依申请事项(全旗县)', '公共服务事项(本级)', '公共服务事项(全旗县)'],
										data: [
											['包头市', 1211.0, 1247.0, 541.0, 589.0],
											['达茂旗', 1182.0, 1182.0, 580.0, 584.0],
											['白云矿区', 1267.0, 1026.0, 513.0, 580.0],
											['固阳县', 1059.0, 998.0, 510.0, 577.0],
											['九原区', 997.0, 1178.0, 577.0, 574.0],
											['昆都仑区', 998.0, 997.0, 548.0, 551.0],
											['青山区', 1247.0, 1267.0, 466.0, 548.0],
											['石拐区', 1247.0, 1211.0, 551.0, 541.0],
											['东河区', 1252.0, 1265.0, 503.0, 513.0],
											['土右旗', 1265.0, 1059.0, 468.0, 510.0]
											// ["蓬江区", 1026.0, 1252.0, 574.0, 504.0],
											// ["鹤山市", 1178.0, 1252.0, 584.0, 503.0],
											// ["台山市", 1252.0, 1247.0, 504.0, 468.0],
											// ["恩平市", 1189.0, 1189.0, 589.0, 466.0]
										]
									}
								]
							}
						},
						name: '办件/受理量趋势'
					},
					{
						data: {
							onLineHandle: {
								detail: [
									{
										label: '即办件占比',
										value: '93.47%',
										unit: null,
										year: '2021'
									},
									{
										label: '承诺件占比',
										value: '93.47%',
										unit: null,
										year: '2021'
									}
								],
								chart: [
									[
										{
											mapData: [
												{
													name: '蓬江区',
													unit: null,
													value: 266.0
												},
												{
													name: '江海区',
													unit: null,
													value: 266.0
												},
												{
													name: '新会区',
													unit: null,
													value: 266.0
												},
												{
													name: '台山市',
													unit: null,
													value: 266.0
												},
												{
													name: '开平市',
													unit: null,
													value: 266.0
												},
												{
													name: '鹤山市',
													unit: null,
													value: 266.0
												},
												{
													name: '恩平市',
													unit: null,
													value: 266.0
												},
												{
													name: '恩平市',
													unit: null,
													value: 266.0
												},
												{
													name: '新会区',
													unit: null,
													value: 266.0
												},
												{
													name: '台山市',
													unit: null,
													value: 266.0
												},
												{
													name: '蓬江区',
													unit: null,
													value: 266.0
												},
												{
													name: '开平市',
													unit: null,
													value: 266.0
												},
												{
													name: '江海区',
													unit: null,
													value: 266.0
												},
												{
													name: '鹤山市',
													unit: null,
													value: 266.0
												}
											]
										},
										{
											mapData: [
												{
													name: '蓬江区',
													unit: null,
													value: 1403.0
												},
												{
													name: '江海区',
													unit: null,
													value: 1403.0
												},
												{
													name: '新会区',
													unit: null,
													value: 1403.0
												},
												{
													name: '台山市',
													unit: null,
													value: 1403.0
												},
												{
													name: '开平市',
													unit: null,
													value: 1403.0
												},
												{
													name: '鹤山市',
													unit: null,
													value: 1403.0
												},
												{
													name: '恩平市',
													unit: null,
													value: 1403.0
												},
												{
													name: '恩平市',
													unit: null,
													value: 1403.0
												},
												{
													name: '新会区',
													unit: null,
													value: 1403.0
												},
												{
													name: '台山市',
													unit: null,
													value: 1403.0
												},
												{
													name: '蓬江区',
													unit: null,
													value: 1403.0
												},
												{
													name: '开平市',
													unit: null,
													value: 1403.0
												},
												{
													name: '江海区',
													unit: null,
													value: 1403.0
												},
												{
													name: '鹤山市',
													unit: null,
													value: 1403.0
												}
											]
										},
										{
											mapData: [
												{
													name: '蓬江区',
													unit: null,
													value: 71.0
												},
												{
													name: '江海区',
													unit: null,
													value: 71.0
												},
												{
													name: '新会区',
													unit: null,
													value: 71.0
												},
												{
													name: '台山市',
													unit: null,
													value: 71.0
												},
												{
													name: '开平市',
													unit: null,
													value: 71.0
												},
												{
													name: '鹤山市',
													unit: null,
													value: 71.0
												},
												{
													name: '恩平市',
													unit: null,
													value: 71.0
												},
												{
													name: '恩平市',
													unit: null,
													value: 71.0
												},
												{
													name: '新会区',
													unit: null,
													value: 71.0
												},
												{
													name: '台山市',
													unit: null,
													value: 71.0
												},
												{
													name: '蓬江区',
													unit: null,
													value: 71.0
												},
												{
													name: '开平市',
													unit: null,
													value: 71.0
												},
												{
													name: '江海区',
													unit: null,
													value: 71.0
												},
												{
													name: '鹤山市',
													unit: null,
													value: 71.0
												}
											]
										}
									],
									{
										column: ['行政区', '累计受理数', '累计办结数'],
										data: [
											['包头市', 266.0, 1403.0, 71.0],
											['达茂旗', 266.0, 1403.0, 71.0],
											['白云矿区', 266.0, 1403.0, 71.0],
											['固阳县', 266.0, 1403.0, 71.0],
											['九原区', 266.0, 1403.0, 71.0],
											['昆都仑区', 266.0, 1403.0, 71.0],
											['青山区', 266.0, 1403.0, 71.0],
											['石拐区', 266.0, 1403.0, 71.0],
											['东河区', 266.0, 1403.0, 71.0],
											['土右旗', 266.0, 1403.0, 71.0]
											// ["蓬江区", 266.0, 1403.0, 71.0],
											// ["开平市", 266.0, 1403.0, 71.0],
											// ["江海区", 266.0, 1403.0, 71.0],
											// ["鹤山市", 266.0, 1403.0, 71.0]
										]
									}
								]
							}
						},
						name: '办件类型'
					},
					{
						data: {
							start: {
								detail: [
									{
										label: '盟市部门',
										value: 45.0,
										unit: null,
										year: '2021'
									},
									{
										label: '旗县（市、区）部门',
										value: 277.0,
										unit: null,
										year: '2021'
									}
								],
								chart: [
									[
										{
											mapData: [
												{
													name: '新会区',
													unit: null,
													value: 42.0
												},
												{
													name: '台山市',
													unit: null,
													value: 41.0
												},
												{
													name: '开平市',
													unit: null,
													value: 41.0
												},
												{
													name: '鹤山市',
													unit: null,
													value: 41.0
												},
												{
													name: '恩平市',
													unit: null,
													value: 41.0
												},
												{
													name: '江海区',
													unit: null,
													value: 36.0
												},
												{
													name: '蓬江区',
													unit: null,
													value: 35.0
												},
												{
													name: '新会区',
													unit: null,
													value: 42.0
												},
												{
													name: '恩平市',
													unit: null,
													value: 41.0
												},
												{
													name: '台山市',
													unit: null,
													value: 41.0
												},
												{
													name: '开平市',
													unit: null,
													value: 41.0
												},
												{
													name: '鹤山市',
													unit: null,
													value: 41.0
												},
												{
													name: '江海区',
													unit: null,
													value: 36.0
												},
												{
													name: '蓬江区',
													unit: null,
													value: 35.0
												}
											]
										}
									],
									{
										column: ['盟市部门', '旗县（市、区）部门'],
										data: [
											['包头市', 42.0],
											['达茂旗', 42.0],
											['白云矿区', 41.0],
											['固阳县', 41.0],
											['九原区', 41.0],
											['昆都仑区', 41.0],
											['青山区', 41.0],
											['石拐区', 41.0],
											['东河区', 41.0],
											['土右旗', 41.0]
											// ["江海区", 36.0],
											// ["江海区", 36.0],
											// ["蓬江区", 35.0],
											// ["蓬江区", 35.0]
										]
									}
								]
							}
						},
						name: '服务方式完备度'
					}
				]
			},
			tabDataAgriculture: {
				data: [
					{
						data: {
							gdp: {
								detail: [
									[
										{
											label: '农业总产值',
											value: 459.25,
											unit: '亿元',
											year: '2019',
											increment: 4.9,
											incrementUnit: '%'
										},
										{
											label: '种植业产值',
											value: 143.29,
											unit: '亿元',
											year: '2019',
											increment: 6.8,
											incrementUnit: '%'
										},
										{
											label: '林业产值',
											value: 9.39,
											unit: '亿元',
											year: '2019',
											increment: -6.0,
											incrementUnit: '%'
										},
										{
											label: '牧业产值',
											value: 89.5,
											unit: '亿元',
											year: '2019',
											increment: 5.8,
											incrementUnit: '%'
										},
										{
											label: '渔业产值',
											value: 202.81,
											unit: '亿元',
											year: '2019',
											increment: 3.1,
											incrementUnit: '%'
										}
									],
									[
										{
											label: '农业总产值',
											value: 11.12,
											unit: '亿元',
											year: '2019',
											increment: 3.2,
											incrementUnit: '%'
										},
										{
											label: '种植业产值',
											value: 3.03,
											unit: '亿元',
											year: '2019',
											increment: -1.0,
											incrementUnit: '%'
										},
										{
											label: '林业产值',
											value: 0.22,
											unit: '亿元',
											year: '2019',
											increment: -22.9,
											incrementUnit: '%'
										},
										{
											label: '牧业产值',
											value: 1.87,
											unit: '亿元',
											year: '2019',
											increment: -6.1,
											incrementUnit: '%'
										},
										{
											label: '渔业产值',
											value: 4.44,
											unit: '亿元',
											year: '2019',
											increment: 6.8,
											incrementUnit: '%'
										}
									],
									[
										{
											label: '农业总产值',
											value: 8.89,
											unit: '亿元',
											year: '2019',
											increment: 4.4,
											incrementUnit: '%'
										},
										{
											label: '种植业产值',
											value: 2.88,
											unit: '亿元',
											year: '2019',
											increment: 9.6,
											incrementUnit: '%'
										},
										{
											label: '林业产值',
											value: 0.02,
											unit: '亿元',
											year: '2019',
											increment: -32.0,
											incrementUnit: '%'
										},
										{
											label: '牧业产值',
											value: 0.14,
											unit: '亿元',
											year: '2019',
											increment: -84.8,
											incrementUnit: '%'
										},
										{
											label: '渔业产值',
											value: 0.14,
											unit: '亿元',
											year: '2019',
											increment: 18.7,
											incrementUnit: '%'
										}
									],
									[
										{
											label: '农业总产值',
											value: 87.75,
											unit: '亿元',
											year: '2019',
											increment: 5.5,
											incrementUnit: '%'
										},
										{
											label: '种植业产值',
											value: 24.72,
											unit: '亿元',
											year: '2019',
											increment: 2.4,
											incrementUnit: '%'
										},
										{
											label: '林业产值',
											value: 0.97,
											unit: '亿元',
											year: '2019',
											increment: -23.0,
											incrementUnit: '%'
										},
										{
											label: '牧业产值',
											value: 16.07,
											unit: '亿元',
											year: '2019',
											increment: -8.3,
											incrementUnit: '%'
										},
										{
											label: '渔业产值',
											value: 43.54,
											unit: '亿元',
											year: '2019',
											increment: 12.0,
											incrementUnit: '%'
										}
									],
									[
										{
											label: '农业总产值',
											value: 178.04,
											unit: '亿元',
											year: '2019',
											increment: 0.8,
											incrementUnit: '%'
										},
										{
											label: '种植业产值',
											value: 42.03,
											unit: '亿元',
											year: '2019',
											increment: 6.8,
											incrementUnit: '%'
										},
										{
											label: '林业产值',
											value: 2.35,
											unit: '亿元',
											year: '2019',
											increment: -2.7,
											incrementUnit: '%'
										},
										{
											label: '牧业产值',
											value: 12.88,
											unit: '亿元',
											year: '2019',
											increment: 9.2,
											incrementUnit: '%'
										},
										{
											label: '渔业产值',
											value: 118.83,
											unit: '亿元',
											year: '2019',
											increment: -3.1,
											incrementUnit: '%'
										}
									],
									[
										{
											label: '农业总产值',
											value: 77.97,
											unit: '亿元',
											year: '2019',
											increment: 5.8,
											incrementUnit: '%'
										},
										{
											label: '种植业产值',
											value: 29.9,
											unit: '亿元',
											year: '2019',
											increment: -0.8,
											incrementUnit: '%'
										},
										{
											label: '林业产值',
											value: 2.69,
											unit: '亿元',
											year: '2019',
											increment: 4.2,
											incrementUnit: '%'
										},
										{
											label: '牧业产值',
											value: 29.09,
											unit: '亿元',
											year: '2019',
											increment: 17.6,
											incrementUnit: '%'
										},
										{
											label: '渔业产值',
											value: 9.88,
											unit: '亿元',
											year: '2019',
											increment: 0.4,
											incrementUnit: '%'
										}
									],
									[
										{
											label: '农业总产值',
											value: 49.84,
											unit: '亿元',
											year: '2019',
											increment: 8.7,
											incrementUnit: '%'
										},
										{
											label: '种植业产值',
											value: 18.2,
											unit: '亿元',
											year: '2019',
											increment: 7.3,
											incrementUnit: '%'
										},
										{
											label: '林业产值',
											value: 1.79,
											unit: '亿元',
											year: '2019',
											increment: -1.0,
											incrementUnit: '%'
										},
										{
											label: '牧业产值',
											value: 17.11,
											unit: '亿元',
											year: '2019',
											increment: 7.1,
											incrementUnit: '%'
										},
										{
											label: '渔业产值',
											value: 11.73,
											unit: '亿元',
											year: '2019',
											increment: 16.9,
											incrementUnit: '%'
										}
									],
									[
										{
											label: '农业总产值',
											value: 45.64,
											unit: '亿元',
											year: '2019',
											increment: 13.5,
											incrementUnit: '%'
										},
										{
											label: '种植业产值',
											value: 22.53,
											unit: '亿元',
											year: '2019',
											increment: 22.8,
											incrementUnit: '%'
										},
										{
											label: '林业产值',
											value: 1.34,
											unit: '亿元',
											year: '2019',
											increment: -17.9,
											incrementUnit: '%'
										},
										{
											label: '牧业产值',
											value: 12.33,
											unit: '亿元',
											year: '2019',
											increment: 6.1,
											incrementUnit: '%'
										},
										{
											label: '渔业产值',
											value: 8.7,
											unit: '亿元',
											year: '2019',
											increment: 4.9,
											incrementUnit: '%'
										}
									]
								],
								chart: [
									[
										{
											mapData: [
												{
													name: '台山市',
													unit: '亿元',
													value: 178.04
												},
												{
													name: '新会区',
													unit: '亿元',
													value: 87.75
												},
												{
													name: '开平市',
													unit: '亿元',
													value: 77.97
												},
												{
													name: '鹤山市',
													unit: '亿元',
													value: 49.84
												},
												{
													name: '恩平市',
													unit: '亿元',
													value: 45.64
												},
												{
													name: '蓬江区',
													unit: '亿元',
													value: 11.12
												},
												{
													name: '江海区',
													unit: '亿元',
													value: 8.89
												}
											]
										}
									],
									[
										{
											mapData: [
												{
													name: '台山市',
													unit: '亿元',
													value: 42.03
												},
												{
													name: '开平市',
													unit: '亿元',
													value: 29.9
												},
												{
													name: '新会区',
													unit: '亿元',
													value: 24.72
												},
												{
													name: '恩平市',
													unit: '亿元',
													value: 22.53
												},
												{
													name: '鹤山市',
													unit: '亿元',
													value: 18.2
												},
												{
													name: '蓬江区',
													unit: '亿元',
													value: 3.03
												},
												{
													name: '江海区',
													unit: '亿元',
													value: 2.88
												}
											]
										}
									],
									[
										{
											mapData: [
												{
													name: '开平市',
													unit: '亿元',
													value: 2.69
												},
												{
													name: '台山市',
													unit: '亿元',
													value: 2.35
												},
												{
													name: '鹤山市',
													unit: '亿元',
													value: 1.79
												},
												{
													name: '恩平市',
													unit: '亿元',
													value: 1.34
												},
												{
													name: '新会区',
													unit: '亿元',
													value: 0.97
												},
												{
													name: '蓬江区',
													unit: '亿元',
													value: 0.22
												},
												{
													name: '江海区',
													unit: '亿元',
													value: 0.02
												}
											]
										}
									],
									[
										{
											mapData: [
												{
													name: '开平市',
													unit: '亿元',
													value: 29.09
												},
												{
													name: '鹤山市',
													unit: '亿元',
													value: 17.11
												},
												{
													name: '新会区',
													unit: '亿元',
													value: 16.07
												},
												{
													name: '台山市',
													unit: '亿元',
													value: 12.88
												},
												{
													name: '恩平市',
													unit: '亿元',
													value: 12.33
												},
												{
													name: '蓬江区',
													unit: '亿元',
													value: 1.87
												},
												{
													name: '江海区',
													unit: '亿元',
													value: 0.14
												}
											]
										}
									],
									[
										{
											mapData: [
												{
													name: '台山市',
													unit: '亿元',
													value: 118.83
												},
												{
													name: '新会区',
													unit: '亿元',
													value: 43.54
												},
												{
													name: '鹤山市',
													unit: '亿元',
													value: 11.73
												},
												{
													name: '开平市',
													unit: '亿元',
													value: 9.88
												},
												{
													name: '恩平市',
													unit: '亿元',
													value: 8.7
												},
												{
													name: '蓬江区',
													unit: '亿元',
													value: 4.44
												},
												{
													name: '江海区',
													unit: '亿元',
													value: 0.14
												}
											]
										}
									]
								]
							}
						},
						name: '农业总产值'
					},
					{
						data: {
							quality: {
								detail: [
									{
										label: '粮食产量',
										value: 93.22,
										unit: '万吨',
										year: '2019'
									},
									{
										label: '蔬菜产量',
										value: 162.38,
										unit: '万吨',
										year: '2019'
									},
									{
										label: '肉类产量',
										value: 28.89,
										unit: '万吨',
										year: '2019'
									},
									{
										label: '水果产量',
										value: 38.07,
										unit: '万吨',
										year: '2019'
									},
									{
										label: '水产品产量',
										value: 79.2,
										unit: '万吨',
										year: '2019'
									}
								],
								chart: [
									[
										{
											legends: ['办件办结量', '办件受理量'],
											series: [
												{
													name: '办件量',
													type: 'bar',
													stack: null,
													data: [1089, 1100, 1111, 1122, 1133, 1144, 1155, 1166, 1177, 1188, 1199, 1210]
												},
												{
													name: '受理量',
													type: 'bar',
													stack: null,
													data: [17465, 16552, 18536, 13927, 12357, 14641, 23728, 24109, 9741, 7917, 19793, 10341]
												}
											],
											year: null,
											yaxis: ['件', '件'],
											xaxis: ['2015', '2016', '2017', '2018', '2019']
										},
										{
											legends: ['平均承诺时间', '平均办结时间'],
											series: [
												{
													name: '平均承诺时间',
													type: 'line',
													stack: null,
													data: [5, 6, 8, 7, 5, 4]
												},
												{
													name: '平均办结时间',
													type: 'line',
													stack: null,
													data: [10, 8, 5, 4, 4, 5]
												}
											],
											type: 'line',
											year: null,
											yaxis: ['天', '天'],
											xaxis: ['2021-09', '2021-10', '2021-11', '2021-12', '2021-01', '2021-02']
										}
									],
									[
										{
											legends: ['满意数量占比', '很满意数量占比', '基本满意数量占比', '不满意数量占比', '很不满意数量占比'],
											series: [
												{
													name: null,
													type: 'pie',
													stack: null,
													data: [
														{
															name: '满意数量占比',
															unit: '%',
															value: 4
														},
														{
															name: '很满意数量占比',
															unit: '%',
															value: 94
														},
														{
															name: '基本满意数量占比',
															unit: '%',
															value: 1
														},
														{
															name: '不满意数量占比',
															unit: '%',
															value: 0.9
														},
														{
															name: '很不满意数量占比',
															unit: '%',
															value: 0.1
														}
													]
												}
											]
										}
									]
								]
							}
						},
						name: '办件量/受理量趋势'
					},
					{
						data: {
							area: {
								detail: [
									{
										label: '农作物播种总面积',
										value: 458.7474,
										unit: '万亩',
										year: '2019',
										increment: 6.76,
										incrementUnit: '%'
									},
									{
										label: '粮食作物播种总面积',
										value: 271.8,
										unit: '万亩',
										year: '2019',
										increment: 3.1,
										incrementUnit: '%'
									},
									{
										label: '蔬菜种植面积',
										value: 110.02,
										unit: '万亩',
										year: '2019',
										increment: 5.1,
										incrementUnit: '%'
									},
									{
										label: '糖蔗种植面积',
										value: 2.62,
										unit: '万亩',
										year: '2019',
										increment: -4.3,
										incrementUnit: '%'
									},
									{
										label: '油料种植面积',
										value: 18.56,
										unit: '万亩',
										year: '2019',
										increment: 4.5,
										incrementUnit: '%'
									}
								],
								chart: {
									legends: ['粮食作物播种总面积', '蔬菜种植面积', '糖蔗种植面积', '油料种植面积', '其他农作物播种总面积'],
									series: [
										{
											name: null,
											type: 'pie',
											stack: null,
											data: [
												{
													name: '粮食作物播种总面积',
													unit: '万亩',
													value: 271.8
												},
												{
													name: '蔬菜种植面积',
													unit: '万亩',
													value: 110.02
												},
												{
													name: '其他农作物播种总面积',
													unit: '万亩',
													value: 26.69
												},
												{
													name: '油料种植面积',
													unit: '万亩',
													value: 18.56
												},
												{
													name: '糖蔗种植面积',
													unit: '万亩',
													value: 2.62
												}
											]
										}
									]
								}
							}
						},
						name: '农作物播种面积'
					}
				]
			}
		};
	},
	mounted() {
		this.initDOM();
		this.changeTab(0);
		// 添加屏幕滚动的监听
		window.addEventListener('scroll', this.handleScroll);
	},
	beforeDestroy() {
		// 销毁已创建的监听
		window.removeEventListener('scroll', this.handleScroll);
	},
	methods: {
		initDOM() {
			console.log('333', this.tabData);
			document.getElementById('top').scrollIntoView(true);
		},
		// 判断页面是否含有二级tab页
		judgeHasSubTab(tabData) {
			if (tabData.length > 1) {
				this.hasSecondTab = true;
				tabData.forEach(item => {
					this.subTabList.push(item.name);
				});
			} else {
				this.hasSecondTab = false;
			}
		},
		// 点击Tab页
		changeTab(index) {
			document.getElementById('top').scrollIntoView(true);
			this.tabActiveIndex = index;
			this.subTabActiveIndex = 0;
			this.subTabList = [];

			// console.log(res.data.data);
			// this.tabData = res.data;
			this.tabData = this.testData2;
			this.judgeHasSubTab(this.tabData.data);
			// 切换tab时获取当前tab页的各标签页高度
			// this.setSubTabOffset(index);
			// this.isLoading=false;

			// let name = this.tabListShow[index].text;
			// this.tabData = this.testData[name];
			// this.judgeHasSubTab(this.tabData.data);
			//
			// // 切换tab时获取当前tab页的各标签页高度
			// this.setSubTabOffset(index);

			//      let params = {
			//        name: this.tabListShow[index].text,
			//        // name: '效能监督',
			//      };
			//      getDataByTabName(params, res => {
			//        if(res.data) {
			//          console.log(res.data.data);
			//          // this.tabData = res.data;
			// this.tabData = this.testData2
			//          this.judgeHasSubTab(this.tabData.data);
			//          // 切换tab时获取当前tab页的各标签页高度
			//          this.setSubTabOffset(index);
			//          // this.isLoading=false;
			//        } else {
			//          Notify({ type: 'danger', message: '获取数据错误' });
			//        }
			//      }, err => {
			//        Notify({ type: 'danger', message: '服务器错误'+err });
			//      });
		},
		// 点击二级菜单的动作
		changeSubTab(index) {
			// this.subTabActiveIndex = index;
			if (index === 0) {
				this.subTabActiveIndex = index;
				document.getElementById('top').scrollIntoView(true);
			} else if (index === 1) {
				windowScroll('secondTab');
			} else if (index === 2) {
				windowScroll('thirdTab');
			} else if (index === 3) {
				windowScroll('fourthTab');
			} else if (index === 4) {
				windowScroll('fifthTab');
			}
		}
		// setSubTabOffset(value) {
		//   // 仅对含有二级tab的页面做处理
		//   if (this.hasSecondTab === true) {
		//     // 每次先将当前存放高度的数组清空
		//     this.subIndexOffset[value] = [];
		//     // 循环当前二级tab
		//     this.subTabList.forEach((item, index) => {
		//       // 通过index获取dom的id，因为页面都是统一的firstTab、secondTab…
		//       let tabName = switchNumToDom(index);
		//       this.$nextTick(() => {
		//         // 按照顺序获取每一个tab的高度并push进数组
		//         let tabDom = document.getElementById(tabName);
		//         let offset = tabDom.offsetTop;
		//         this.subIndexOffset[value].push(offset);
		//       });
		//     });
		//   }
		// },
		// 监听的页面滚动事件
		// handleScroll() {
		//   if (this.hasSecondTab === true) {
		//     // 获取当前页面已经滚动的高度
		//     let scrollTop = window.pageYOffset;
		//     let tabActive = this.tabActiveIndex;
		//     // 获取当前激活页面的存放二级tab高度的数组
		//     let tabActiveOffset = this.subIndexOffset[tabActive];
		//     let arrayLength = tabActiveOffset.length;
		//     for (let i = 0; i < arrayLength ; i++) {
		//       // 将数组中的每一个高度与当前滚动的高度作比较，获取当前激活的是哪个tab
		//       if (scrollTop > (tabActiveOffset[i] - remToPx(230/75))) {
		//         this.subTabActiveIndex = i;
		//       }
		//     }
		//   }
		// }
	}
};
</script>
