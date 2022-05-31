<template>
	<div class="all">
		<div class="investment">
			<div class="invest"><span class="Integrated">2021年</span><span class="Integrated-word">固定资产投资增速趋势及结构</span></div>
			<div class="echerts"
					 id="echerts11"></div>
		</div>
		<div class="investment">
			<div class="invest"><span class="Integrated">2021年</span><span class="Integrated-word">三次产业固定资产投资</span></div>
			<div class="echerts"
					 id="echerts12"></div>
		</div>
		<div class="investment">
			<div class="invest"><span class="Integrated">2021年</span><span class="Integrated-word">部分行业固定资产投资增速</span></div>
			<div class="echerts"
					 id="echerts13"></div>
		</div>
		<div class="investment">
			<div class="invest"><span class="Integrated">2021年</span><span class="Integrated-word">房地产投资</span></div>
			<div class="echerts"
					 id="echerts14"></div>
		</div>

	</div>
</template>

<script>
import { brainLineAndBarChart3, brainMultiBarChartForMarine3, brainMultiBarChartForMarine } from "../echarts";
import { remToPx } from "@/libs/util";

export default {
	props: {
		Poverty: {
			type: Object,
			default: {},
		}
	},
	data() {
		return {

			citydata: {},
		}
	},
	methods: {
		initWin() {
			let charData = this.Poverty;
			this.citydata = charData.investmentTrend;
			this.citydata.investmentProperty.data.gridTop = remToPx(128 / 75);
			setTimeout(() => {
				brainLineAndBarChart3("echerts11", this.citydata.growthTrendStructure.data);
				brainMultiBarChartForMarine("echerts12", this.citydata.threeProductInvest.data);
				brainMultiBarChartForMarine3("echerts13", this.citydata.IndustryInvestment.data);
				brainMultiBarChartForMarine("echerts14", this.citydata.investmentProperty.data, remToPx(25 / 75));

			}, 500);
		},
	},
	mounted() {
		this.initWin();

	}

}
</script>

<style scoped>
.all {
	padding: 0.2rem 0.2rem 0.2rem 0.2rem;
	margin-top: 0.2rem;
	background-color: #fff;
}
.investment {
	height: 550rpx;
	/*background: green;*/
	margin-bottom: 80rpx;
}
.investment:last-child {
	padding-bottom: 100rpx;
}
.invest {
	height: 0.36rem;
	line-height: 0.36rem;
	position: relative;
}
.Integrated {
	display: inline-block;
	width: 95rpx;
	heigth: 36rpx;
	/*background-color: #1a79c8;*/
	border-radius: 18rpx;
	line-height: 36rpx;
	background-color: #1a79c8;
	/*border-radius: 20rpx 20rpx 20rpx 20rpx;*/
	font-size: 22rpx;
	color: #ffffff;
	text-align: center;
	margin-bottom: 0.4rem;
}
.Integrated-word {
	font-size: 26rpx;
	color: #1c1c1c;
	margin-left: 0.2rem;
	font-family: "PingFang-SC-Medium";
	position: absolute;
	top: 4rpx;
}
.echerts {
	width: 100%;
	height: 100%;
	/*background: red;*/
}
</style>
