<style lang="less" scoped>
	@import url("../common-class.less");

	.section-item {
		width: 750rpx;
		float: left;

		&:last-child {
			padding-bottom: 140rpx;
		}
	}

	.content-item {
		width: 750rpx;

		.blue-bar-top0 {
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

		.subtitle-top0 {
			float: left;
			color: #909090;
			font-size: 26rpx;
			margin: -3px 0 0 5rpx;
			text-align: center;
			font-family: 'PingFang-SC-Medium';
		}

		.charts {
			width: 100%;
			height: 450rpx;
			float: left;
		}

		.hot-map {
			width: 100%;
			height: 700rpx;
			float: left;
		}
	}

	.content {
		width: 100%;
		float: left;
	}

	.content-map {
		width: 100%;
		float: left;
		height: 700rpx;
	}

	.table-content {
		width: 100%;
		float: left;
		height: 917rpx;
	}

	.subtitle {
		float: none;
		color: #909090;
		font-size: 26rpx;
		margin: 60rpx 0 0 5rpx;
		text-align: center;
		font-family: 'PingFang-SC-Medium';
	}
</style>

<template>
	<div class="main">
		<!-- 投资增速 -->
		<div class="firstTab">
			<div class="title">
				<span class="title-icon-bar-left"></span>
				<span class="title-icon-bar-right"></span>
				<span class="title-text">投资增速</span>
			</div>
			<div class="content-item">
				<div class="table-content" style="height:340rpx;">
					<div class="section-content margin-top22">
						<div class="color-tab-box">
							<!-- tabGreen tabBlue tabYellow -->
							<div class="tabGreen" style="width:320rpx">
								<div class="color-tab-double-up">
									<span class="name-color">固定资产投资增速</span><br />
									<span class="number-color">26.6</span>
									<span class="unit-color">%</span>
								</div>
							</div>
							<div class="tabBlue" style="width:320rpx">
								<div class="color-tab-double-up">
									<span class="name-color">工业投资增速</span><br />
									<span class="number-color">87.9</span>
									<span class="unit-color">%</span>
								</div>
							</div>
							<div class="tabGreen" style="width:320rpx;margin-top:20rpx;">
								<div class="color-tab-double-up">
									<span class="name-color">民间投资增速</span><br />
									<span class="number-color">25.5</span>
									<span class="unit-color">%</span>
								</div>
							</div>
							<div class="tabBlue" style="width:320rpx;margin-top:20rpx;">
								<div class="color-tab-double-up">
									<span class="name-color">基础设施投资增速</span><br />
									<span class="number-color">24.8</span>
									<span class="unit-color">%</span>
								</div>
							</div>
							<!-- 选中箭头 -->
							<!-- <div class="color-tab-box">
								<div v-for="(item,index) in infrastructure.detail.slice(0,3)" class="select-box">
									<div v-if="infrastructureActive===index" class="select"></div>
								</div>
							</div> -->
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 投资结构 -->
		<div class="firstTab">
			<div class="title">
				<span class="title-icon-bar-left"></span>
				<span class="title-icon-bar-right"></span>
				<span class="title-text">投资结构</span>
			</div>
			<div class="content-item">
				<div class="table-content" style="height:200rpx;">
					<div class="section-content margin-top22">
						<div class="color-tab-box">
							<!-- tabGreen tabBlue tabYellow -->
							<div class="tabGreen" style="height:160rpx">
								<div class="color-tab-double-up">
									<span class="name-color">一产固定资产投资增速</span><br />
									<span class="number-color">-2.9</span>
									<span class="unit-color">%</span>
								</div>
							</div>
							<div class="tabBlue" style="height:160rpx">
								<div class="color-tab-double-up">
									<span class="name-color">二产固定资产投资增速</span><br />
									<span class="number-color">88.2</span>
									<span class="unit-color">%</span>
								</div>
							</div>
							<div class="tabYellow" style="height:160rpx">
								<div class="color-tab-double-up">
									<span class="name-color">三产固定资产投资增速</span><br />
									<span class="number-color">-2.9</span>
									<span class="unit-color">%</span>
								</div>
							</div>
							<!-- 选中箭头 -->
							<!-- <div class="color-tab-box">
								<div v-for="(item,index) in infrastructure.detail.slice(0,3)" class="select-box">
									<div v-if="infrastructureActive===index" class="select"></div>
								</div>
							</div> -->
						</div>
					</div>
				</div>
				<div class="content">
					<span class="blur-bar" style="margin-left:40rpx;">包头市</span>
					<span class="subtitle" style="float:'';margin-left:20rpx;">按隶属关系分固定资产投资增速</span>
					<div class="chart-item" style="height:500rpx" id="insuranceTwoLine"></div>
				</div>
			</div>
		</div>
		<!-- 房地产投资 -->
		<div class="firstTab">
			<div class="title">
				<span class="title-icon-bar-left"></span>
				<span class="title-icon-bar-right"></span>
				<span class="title-text">房地产投资</span>
			</div>
			<div class="content-item">
				<div class="table-content" style="height:200rpx;">
					<div class="section-content margin-top22">
						<div class="color-tab-box">
							<!-- tabGreen tabBlue tabYellow -->
							<div class="tabGreen" style="height:160rpx">
								<div class="color-tab-double-up">
									<span class="name-color">住宅开发投入增速</span><br />
									<span class="number-color">-2.9</span>
									<span class="unit-color">%</span>
								</div>
							</div>
							<div class="tabBlue" style="height:160rpx">
								<div class="color-tab-double-up">
									<span class="name-color">办公楼开发投入增速</span><br />
									<span class="number-color">88.2</span>
									<span class="unit-color">%</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="content">
					<!-- 按隶属关系分固定资产投资增速 -->
					<span class="blur-bar" style="margin-left:40rpx;">包头市</span>
					<span class="subtitle" style="float:'none';margin-left:20rpx;">开发投入增速</span>
					<div class="chart-item" style="height:500rpx" id="insuranceTwoLine2"></div>
					<!-- 房屋施工面积建造 -->
					<span class="blur-bar" style="margin-left:40rpx;">包头市</span>
					<span class="subtitle" style="float:'none';margin-left:20rpx;">房屋施工面积增速</span>
					<div class="chart-item" style="height:500rpx" id="insuranceTwoLine3"></div>
					<!-- 房屋竣工面积增速 -->
					<span class="blur-bar" style="margin-left:40rpx;">包头市</span>
					<span class="subtitle" style="float:'none';margin-left:20rpx;">房屋竣工面积增速</span>
					<div class="chart-item" style="height:500rpx" id="insuranceTwoLine4"></div>
					<!-- 商品房销售增速 -->
					<span class="blur-bar" style="margin-left:40rpx;">包头市</span>
					<span class="subtitle" style="float:'none';margin-left:20rpx;">商品房销售增速</span>
					<div class="chart-item" style="height:500rpx" id="insuranceTwoLine5"></div>
				</div>
			</div>
		</div>
		<!-- 项目进度 -->
		<div class="firstTab">
			<div class="title">
				<span class="title-icon-bar-left"></span>
				<span class="title-icon-bar-right"></span>
				<span class="title-text">项目进度</span>
			</div>
			<div class="content-item">
				<div class="table-content" style="height:340rpx;">
					<div class="section-content margin-top22">
						<div class="color-tab-box">
							<!-- tabGreen tabBlue tabYellow -->
							<div class="tabGreen" style="width:320rpx">
								<div class="color-tab-double-up">
									<span class="name-color">项目总数</span><br />
									<span class="number-color">714</span>
									<span class="unit-color">项</span>
								</div>
							</div>
							<div class="tabBlue" style="width:320rpx">
								<div class="color-tab-double-up">
									<span class="name-color">新建项目</span><br />
									<span class="number-color">414</span>
									<span class="unit-color">项</span>
								</div>
							</div>
							<div class="tabGreen" style="width:320rpx;margin-top:20rpx;">
								<div class="color-tab-double-up">
									<span class="name-color">开工项目</span><br />
									<span class="number-color">714</span>
									<span class="unit-color">项</span>
								</div>
							</div>
							<div class="tabBlue" style="width:320rpx;margin-top:20rpx;">
								<div class="color-tab-double-up">
									<span class="name-color">完成投资率</span><br />
									<span class="number-color">95.8</span>
									<span class="unit-color">%</span>
								</div>
							</div>
							<!-- 选中箭头 -->
							<!-- <div class="color-tab-box">
								<div v-for="(item,index) in infrastructure.detail.slice(0,3)" class="select-box">
									<div v-if="infrastructureActive===index" class="select"></div>
								</div>
							</div> -->
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 投资指标 -->
		<div class="firstTab">
			<div class="title">
				<span class="title-icon-bar-left"></span>
				<span class="title-icon-bar-right"></span>
				<span class="title-text">投资指标</span>
			</div>
			<div class="content-item">
				<div class="table-content" style="height:200rpx;">
					<div class="section-content margin-top22">
						<div class="color-tab-box">
							<!-- tabGreen tabBlue tabYellow -->
							<div class="tabGreen" style="height:160rpx">
								<div class="color-tab-double-up">
									<span class="name-color">项目投资总额</span><br />
									<span class="number-color">4018.2</span>
									<span class="unit-color">亿元</span>
								</div>
							</div>
							<div class="tabBlue" style="height:160rpx">
								<div class="color-tab-double-up">
									<span class="name-color">年计划投资总额</span><br />
									<span class="number-color">1103.2</span>
									<span class="unit-color">亿元</span>
								</div>
							</div>
							<div class="tabYellow" style="height:160rpx">
								<div class="color-tab-double-up">
									<span class="name-color">完成投资总额</span><br />
									<span class="number-color">1056.6</span>
									<span class="unit-color">亿元</span>
								</div>
							</div>
							<!-- 选中箭头 -->
							<!-- <div class="color-tab-box">
								<div v-for="(item,index) in infrastructure.detail.slice(0,3)" class="select-box">
									<div v-if="infrastructureActive===index" class="select"></div>
								</div>
							</div> -->
						</div>
					</div>
				</div>
				<div class="content">
					<span class="blur-bar" style="margin-left:40rpx;">包头市</span>
					<span class="subtitle" style="float:'';margin-left:20rpx;">资金来源占比</span>
					<!-- <div class="chart-item" style="height:500rpx" id="insuranceTwoLine"></div> -->
					<div class="pie-chart1 chart-item" style="height:500rpx" id="serviceRatePie"></div>
				</div>
			</div>
		</div>
		<!-- 重点项目 -->
		<div id="thirdTab" class="section-item">
			<div class="title">
				<span class="title-icon-bar-left"></span>
				<span class="title-icon-bar-right"></span>
				<span class="title-text">重点项目</span>
			</div>
			<div class="clear-both"></div>
			<div class="content">
				<!-- 重点项目总投资额 -->
				<span class="blue-bar" style="margin: 1px 7px 0 20px;">包头市</span>
				<span class="subtitle">重点项目总投资额</span>
				<div class="echartsBar" style="height:600rpx;" id="employed"></div>
				<!-- 重点项目计划投资额 -->
				<span class="blue-bar" style="margin: 1px 7px 0 20px;">包头市</span>
				<span class="subtitle">重点项目计划投资额</span>
				<div class="echartsBar" style="height:600rpx;" id="employed2"></div>
				<!-- 重点项目完成投资额 -->
				<span class="blue-bar" style="margin: 1px 7px 0 20px;">包头市</span>
				<span class="subtitle">重点项目完成投资额</span>
				<div class="echartsBar" style="height:600rpx;" id="employed3"></div>
			</div>
		</div>




		<!-- 基础设施 去掉 -->
		<div id="firstTab" class="section-item" style="display: none;">
			<div class="title">
				<span class="title-icon-bar-left"></span>
				<span class="title-icon-bar-right"></span>
				<span class="title-text">基础设施</span>
			</div>
			<div class="content-item">
				<div class="content">
					<div class="charts" id="infrastructureBarLine"></div>
				</div>
				<div class="table-content">
					<span class="blue-bar-top0">包头市</span>
					<span class="subtitle-top0">各区项目落地情况</span>
					<div class="section-content margin-top22">
						<div class="color-tab-box">
							<div class="tabGreen">
								<div class="color-tab-double-up">
									<span class="name-color">总投资</span><br />
									<span class="number-color">1769</span>
									<span class="unit-color">亿元</span>
								</div>
							</div>
							<div class="tabBlue">
								<div class="color-tab-double-up">
									<span class="name-color">总投资</span><br />
									<span class="number-color">1769</span>
									<span class="unit-color">亿元</span>
								</div>
							</div>
						</div>
						<div class="content">
							<div class="content-map">
								<div class="hot-map" id="infrastructureMap"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 产业发展 去掉 -->
		<div id="secondTab" class="section-item margin-top-60" style="display: none;">
			<div class="title">
				<span class="title-icon-bar-left"></span>
				<span class="title-icon-bar-right"></span>
				<span class="title-text">{{developmentName}}</span>
			</div>
			<div class="content-item">
				<div class="content">
					<div class="charts" id="developmentBarLine"></div>
				</div>
				<div class="table-content">
					<span class="blue-bar-top0">包头市</span>
					<div class="color-tab-box margin-top22">
						<!-- <div v-for="(item,index) in development.detail.slice(0,3)" @click="switchDevelopmentTab(index)"
							:class="{tabGreen: index===0, tabBlue: index===1, tabYellow: index===2}">
							<div class="color-tab-double-up">
								<span class="name-color">{{item.label}}</span><br />
								<span class="number-color">{{Math.floor(item.value)}}</span>
								<span class="unit-color">{{item.unit}}</span>
							</div>
						</div>
						<div class="color-tab-box">
							<div v-for="(item,index) in development.detail.slice(0,3)" class="select-box">
								<div v-if="developmentActive===index" class="select"></div>
							</div>
						</div> -->
					</div>
					<div v-for="(item,index) in development.detail" v-if="developmentActive === index" class="content">
						<div class="content-map">
							<div class="hot-map" id="developmentMap"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 民生保障 去掉 -->
		<div id="thirdTab" class="section-item margin-top-60" style="display: none;">
			<div class="title">
				<span class="title-icon-bar-left"></span>
				<span class="title-icon-bar-right"></span>
				<span class="title-text">{{livelihoodName}}</span>
			</div>
			<div class="content-item">
				<div class="content">
					<div class="charts" id="livelihoodBarLine"></div>
				</div>
				<div class="table-content">
					<span class="blue-bar-top0">包头市</span>
					<div class="color-tab-box margin-top22">
						<!-- <div v-for="(item,index) in livelihood.detail.slice(0,3)" @click="switchLivelihoodTab(index)"
							:class="{tabGreen: index===0, tabBlue: index===1, tabYellow: index===2}">
							<div class="color-tab-double-up">
								<span class="name-color">{{item.label}}</span><br />
								<span class="number-color">{{Math.floor(item.value)}}</span>
								<span class="unit-color">{{item.unit}}</span>
							</div>
						</div>
						<div class="color-tab-box">
							<div v-for="(item,index) in livelihood.detail.slice(0,3)" class="select-box">
								<div v-if="livelihoodActive===index" class="select"></div>
							</div>
						</div> -->
					</div>
					<div v-for="(item,index) in livelihood.detail" v-if="livelihoodActive === index" class="content">
						<div class="content-map">
							<div class="hot-map" id="livelihoodMap"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		drawJmHotMap,
		situationLineAndBarChart,
		ecologicalLineChart,
		industrialpieChart,
		lineBarChart,
	} from "../../charts/h5-chart";

	export default {
		name: "attract-investment",
		props: ['tabData'],
		data() {
			return {
				// 中央投资、地方投资
				twoLine: {
					"legends": ["中央投资", "地方投资"],
					"series": [{
							"name": "中央投资",
							"type": "line",
							"stack": null,
							"data": ["692.8",
								"577.8",
								"632",
								"453.5",
								"431.3",
								"152",
								"248.9",
								"125.4",
								"94.7",
								"-82.4"
							]
						},
						{
							"name": "地方投资",
							"type": "line",
							"stack": null,
							"data": ["57.2",
								"60.3",
								"42.8",
								"47.8",
								"45.4",
								"24.5",
								"23.1",
								"17.3",
								"23.6",
								"97.0"
							]
						}
					],
					"year": null,
					"yaxis": ["%"],
					"xaxis": ["2021-04",
						"2021-05",
						"2021-06",
						"2021-07",
						"2021-08",
						"2021-09",
						"2021-10",
						"2021-11",
						"2021-12",
						"2022-02"
					]
				},
				// 住宅、办公楼折线数据
				bangong: {
					"legends": ["住宅", "办公楼"],
					"series": [{
							"name": "住宅",
							"type": "line",
							"stack": null,
							"data": ["54.4",
								"53.4",
								"18.7",
								"14.6",
								"3.1",
								"-7.9",
								"-13.5",
								"-13.7",
								"-10.6",
								"0.0"
							]
						},
						{
							"name": "办公楼",
							"type": "line",
							"stack": null,
							"data": ["259.3",
								"306.7",
								"243.6",
								"2140.3",
								"1908.5",
								"943.3",
								"29",
								"29.1",
								"28.3",
								"2200.0"
							]
						}
					],
					"year": null,
					"yaxis": ["%"],
					"xaxis": ["2021-04",
						"2021-05",
						"2021-06",
						"2021-07",
						"2021-08",
						"2021-09",
						"2021-10",
						"2021-11",
						"2021-12",
						"2022-02"
					]
				},
				// 施工
				shigong: {
					"legends": ["房屋施工面积增速"],
					"series": [{
						"name": "房屋施工面积增速",
						"type": "line",
						"stack": null,
						"data": [
							"20.8",
							"20.9",
							"9.8",
							"5.4",
							"3.1",
							"3.1",
							"2.2",
							"1.3",
							"2.1",
							"6.7"
						]
					}],
					"year": null,
					"yaxis": ["%"],
					"xaxis": [
						"2021-04",
						"2021-05",
						"2021-06",
						"2021-07",
						"2021-08",
						"2021-09",
						"2021-10",
						"2021-11",
						"2021-12",
						"2022-02"
					]
				},
				// 竣工 
				jungong: {
					"legends": ["房屋竣工面积增速"],
					"series": [{
						"name": "房屋竣工面积增速",
						"type": "line",
						"stack": null,
						"data": [
							"1.3",
							"1.3",
							"1.3",
							"-7.1",
							"11.6",
							"8.6",
							"-100.0"
						]
					}],
					"year": null,
					"yaxis": ["%"],
					"xaxis": [
						"2021-07",
						"2021-08",
						"2021-09",
						"2021-10",
						"2021-11",
						"2021-12",
						"2022-02"
					]
				},
				// 商品房
				shangpinfang: {
					"legends": ["销售额增速", "销售面积增速"],
					"series": [{
							"name": "销售额增速",
							"type": "line",
							"stack": null,
							"data": [
								"39.4",
								"24.5",
								"18.9",
								"10.4",
								"9.4",
								"2.2",
								"-20",
								"-28.2",
								"-27.9",
								"-0.8"
							]
						},
						{
							"name": "销售面积增速",
							"type": "line",
							"stack": null,
							"data": [
								"47.2",
								"33.6",
								"31.3",
								"23.0",
								"20.8",
								"11.1",
								"-19.9",
								"-28.9",
								"-28.2",
								"8.1"
							]
						}
					],
					"year": null,
					"yaxis": ["%"],
					"xaxis": [
						"2021-04",
						"2021-05",
						"2021-06",
						"2021-07",
						"2021-08",
						"2021-09",
						"2021-10",
						"2021-11",
						"2021-12",
						"2022-02"
					]
				},
				//资金
				zijin: {
					"legends": ["政府资金", "企业自有", "银行贷款", "专项债券", "其他"],
					"series": [{
						"name": null,
						"type": "pie",
						"stack": null,
						"data": [{
							"name": "政府资金",
							"unit": "亿元",
							"value": 231.3
						}, {
							"name": "企业自有",
							"unit": "亿元",
							"value": 3104.4
						}, {
							"name": "银行贷款",
							"unit": "亿元",
							"value": 92.8
						}, {
							"name": "专项债券",
							"unit": "亿元",
							"value": 91.3
						}, {
							"name": "其他",
							"unit": "亿元",
							"value": 162.5
						}, ]
					}]
				},
				// 总投资
				zongtouzi: {
					"legends": ["项目数", "投资额"],
					"series": [{
							"name": "项目数",
							"type": "bar",
							"stack": null,
							"data": [
								"250",
								"127",
								"111",
								"87",
								"47",
								"35",
								"29",
								"14",
								"14"
							]
						},
						{
							"name": "投资额",
							"type": "line",
							"stack": null,
							"data": [
								"1272.4",
								"1374.9",
								"209.4",
								"173",
								"233.9",
								"64.4",
								"454.8",
								"178.3",
								"57.3"
							]
						}
					],
					"year": null,
					"yaxis": ["项", "亿元"],
					"xaxis": [
						"产业发展",
						"其他",
						"城镇基础设施",
						"社会事业",
						"农牧林草水",
						"生态环保",
						"能源",
						"交通",
						"物流"
					]
				},
				// 计划投资
				jihuatouzi: {
					"legends": ["项目数", "投资额"],
					"series": [{
							"name": "项目数",
							"type": "bar",
							"stack": null,
							"data": [
								"14",
								"250",
								"127",
								"47",
								"111",
								"14",
								"35",
								"87",
								"29"
							]
						},
						{
							"name": "投资额",
							"type": "line",
							"stack": null,
							"data": [
								"30",
								"480.2",
								"291.7",
								"36",
								"75.8",
								"15.2",
								"27.4",
								"61.5",
								"85.5"
							]
						}
					],
					"year": null,
					"yaxis": ["项", "亿元"],
					"xaxis": [
						"交通",
						"产业发展",
						"其他",
						"农牧林草水",
						"城镇基础设施",
						"物流",
						"生态环保",
						"社会事业",
						"能源"
					]
				},
				// 完成投资
				wanchengtouzi: {
					"legends": ["项目数", "投资额"],
					"series": [{
							"name": "项目数",
							"type": "bar",
							"stack": null,
							"data": [
								"14",
								"250",
								"127",
								"47",
								"111",
								"14",
								"35",
								"87",
								"29"
							]
						},
						{
							"name": "投资额",
							"type": "line",
							"stack": null,
							"data": [
								"20.5",
								"464.4",
								"293.1",
								"34.7",
								"69.2",
								"13.5",
								"28.4",
								"54.4",
								"78.4"
							]
						}
					],
					"year": null,
					"yaxis": ["项", "亿元"],
					"xaxis": [
						"交通",
						"产业发展",
						"其他",
						"农牧林草水",
						"城镇基础设施",
						"物流",
						"生态环保",
						"社会事业",
						"能源"
					]
				},


				infrastructureName: '',
				infrastructure: {},
				infrastructureActive: '',
				developmentName: '',
				development: {},
				developmentActive: '',
				livelihoodName: '',
				livelihood: {},
				livelihoodActive: ''
			}
		},
		watch: {
			'tabData.data': function(newValue, oldValue) {
				this.initWin();
			}
		},
		methods: {
			initWin() {
				this.infrastructureName = this.tabData.data[0].name;
				this.infrastructure = this.tabData.data[0].data.infrastructure;
				this.developmentName = this.tabData.data[1].name;
				this.development = this.tabData.data[1].data.industrialDevelopment;
				this.livelihoodName = this.tabData.data[2].name;
				this.livelihood = this.tabData.data[2].data.peopleLifeProtection;
				this.development.chart[0].forEach((item) => {
					item.colorList = ['rgba(249,155,55,1)', 'rgba(249,155,55,0.8)', 'rgba(249,155,55,0.6)',
						'rgba(249,155,55,0.5)', 'rgba(249,155,55,0.4)', 'rgba(249,155,55,0.2)',
						'rgba(249,155,55,0.1)'
					];
				})
				// this.infrastructureActive = 0;
				// this.developmentActive = 0;
				// this.livelihoodActive = 0;
				this.$nextTick(() => {
					situationLineAndBarChart('infrastructureBarLine', this.infrastructure.chart[1]);
					situationLineAndBarChart('developmentBarLine', this.development.chart[1]);
					situationLineAndBarChart('livelihoodBarLine', this.livelihood.chart[1]);
					// this.switchInfrastructureTab(0);
					this.switchDevelopmentTab(0);
					this.switchLivelihoodTab(0);

					// 双折线图
					this.twoLine.gridTop = 70;
					this.twoLine.legendTop = '7%';
					ecologicalLineChart('insuranceTwoLine', this.twoLine);
					this.bangong.gridTop = 70;
					this.bangong.gridLeft = 120;
					this.bangong.legendTop = '7%';
					ecologicalLineChart('insuranceTwoLine2', this.bangong);
					ecologicalLineChart('insuranceTwoLine3', this.shigong);
					ecologicalLineChart('insuranceTwoLine4', this.jungong);
					ecologicalLineChart('insuranceTwoLine5', this.shangpinfang);
					// 饼图
					let zijin = this.zijin.series[0].data;
					zijin.gridBottom = 40;
					zijin.chartTop = '52%';
					industrialpieChart('serviceRatePie', zijin);
					// 柱状图
					lineBarChart('employed', this.zongtouzi);
					lineBarChart('employed2', this.jihuatouzi);
					lineBarChart('employed3', this.wanchengtouzi);
				})
			},
			// switchInfrastructureTab(index) {
			// 	this.infrastructureActive = index;
			// 	this.$nextTick(() => {
			// 		drawJmHotMap('infrastructureMap', this.infrastructure.chart[0][index])
			// 	});
			// },
			switchDevelopmentTab(index) {
				this.developmentActive = index;
				this.$nextTick(() => {
					drawJmHotMap('developmentMap', this.development.chart[0][index])
				});
			},
			switchLivelihoodTab(index) {
				this.livelihoodActive = index;
				this.$nextTick(() => {
					drawJmHotMap('livelihoodMap', this.livelihood.chart[0][index])
				});
			}
		}
	}
</script>
