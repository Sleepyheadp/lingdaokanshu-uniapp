<style lang="less" scoped>
@import url('../traffic/traffic-class.less');

.echartsBar {
	height: 600rpx;
}

.echartsTop {
	margin-bottom: -40rpx;
}

.chartsTop {
	margin-top: 10rpx;
	margin-bottom: -35rpx;
}

.charts {
	width: 100%;
	height: 400rpx;
	float: left;
}

.content {
	margin-top: 70rpx;
	width: 100%;
	background-color: #fff;
	/*height: 500rpx; */
}
</style>
<template>
	<div class="main">
		<!--办件预测-->
		<div id="thirdTab" class="section-item">
			<div class="title">
				<span class="title-icon-bar-left"></span>
				<span class="title-icon-bar-right"></span>
				<span class="title-text">办件预测</span>
			</div>
			<div class="content-landing">
				<div class="tab-title distanceScoll">
					<div class="tab">
						<span class="label">未来一周内整体办件受理趋势</span>
						<br />
						<span class="num">20</span>
						<span class="unit">万人</span>
						<span class="compare">3%</span>
					</div>
					<div class="tab">
						<span class="label">未来一周内办件受理高峰日</span>
						<br />
						<span class="num">20</span>
						<span class="unit">万人</span>
						<span class="compare">3%</span>
					</div>
				</div>
				<div class="clear-both"></div>
			</div>
			<div class="clear-both"></div>
			<div class="content">
				<span class="blue-bar">包头市</span>
				<span class="subtitle">未来一周内整体办件受理趋势</span>
				<div class="clear-both"></div>
				<div class="echartsBar" id="employed"></div>
			</div>
		</div>
		<!-- 办件分析 -->
		<div id="firstTab" class="section-item">
			<div class="title">
				<span class="title-icon-bar-left"></span>
				<span class="title-icon-bar-right"></span>
				<span class="title-text">办件分析</span>
			</div>
			<div class="content-item">
				<div class="content">
					<span class="blue-bar">包头市</span>
					<span class="subtitle">未来一周内整体办件受理趋势</span>
					<div class="chart-item" style="height:500rpx" id="insuranceTwoLine3"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// ui还原前的柱状折线图LineAndBarChart,
import { barChart, pieChart, horizontalBarImg, lineBarChart, industrialpieChart, ecologicalLineChart } from '../../charts/h5-chart';
export default {
	name: 'transport-capacity',
	props: ['tabDataIndustry', 'tabDataAgriculture'],
	data() {
		return {
			primaryActive: 0,
			activeTab1: 0,
			activeTab2: 0,
			activeTab3: 0,
			activeTab4: 0,
			onLineServiceName: '',
			onLineService: {}, // 在线服务成效度
			serviceName: '',
			service: {}, // 服务事项覆盖度
			onLineHandleName: '',
			onLineHandle: {}, // 在线办理成熟度
			serviceTypeName: '',
			serviceType: {}, // 服务方式完备度
			heatMapColors: ['0%-25%', '25%-50%', '50%-75%', '75%-100%'],
			// 办件分析
			banjianfenxi: {},
			// 施工
			shigong: {
				legends: ['房屋施工面积增速'],
				series: [
					{
						name: '房屋施工面积增速',
						type: 'line',
						stack: null,
						data: ['20.8', '20.9', '9.8', '5.4', '3.1', '3.1', '2.2', '1.3', '2.1', '6.7']
					}
				],
				year: null,
				yaxis: ['%'],
				xaxis: ['2021-04', '2021-05', '2021-06', '2021-07', '2021-08', '2021-09', '2021-10', '2021-11', '2021-12', '2022-02']
			}
		};
	},
	watch: {
		tabDataIndustry: function(newValue, oldValue) {
			this.initWin();
		}
	},
	mounted() {
		this.initWin();
		this.switchKindergartenTab(0);
	},
	methods: {
		switchKindergartenTab(index) {
			this.primaryActive = index;
			if (this.primaryActive === 0) {
				this.$nextTick(() => {
					// barChart('rateBarMap', this.tabDataIndustry.data[0].data.data.chart[0]);
					lineBarChart('employed', this.tabDataIndustry.data[2].data.people.chart[0]);
				});
			} else if (this.primaryActive === 1) {
				this.$nextTick(() => {
					// barChart('rateBarMap', this.tabDataIndustry.data[0].data.data.chart[0]);
					lineBarChart('employed', this.tabDataIndustry.data[2].data.people.chart[1]);
				});
			} else if (this.primaryActive === 2) {
				this.$nextTick(() => {});
			}
		},
		initWin() {
			this.$nextTick(() => {
				// echarts图1
				this.tabDataIndustry.data[0].data.company.chart.gridTop = '10%';
				this.tabDataIndustry.data[0].data.company.chart.gridLeft = '12%';
				// echarts图3
				// this.tabDataIndustry.data[1].data.organization.detail.slice(8,9)[0].paddingTop = '-87';
				// echarts图5
				// this.tabDataIndustry.data[2].data.people.chart[0].legendRight='auto';
				this.tabDataIndustry.data[2].data.people.chart[0].legendRight = '9%';
				barChart('rateBarMap', this.tabDataIndustry.data[0].data.company.chart);
				horizontalBarImg('labourBar1', this.tabDataIndustry.data[1].data.organization.detail.slice(7, 8)[0]);
				horizontalBarImg('labourBar2', this.tabDataIndustry.data[1].data.organization.detail.slice(8, 9)[0]);
				pieChart('pieCharts1', this.tabDataIndustry.data[1].data.organization.chart.series[0].data);
				lineBarChart('employed', this.tabDataIndustry.data[2].data.people.chart[0]);

				//饼图
				let cropYieldValuePieData = this.tabDataAgriculture.data[1].data.quality.chart[1][0].series[0].data;
				industrialpieChart('cropYieldValuePie', cropYieldValuePieData);
				// 办件分析
				ecologicalLineChart('insuranceTwoLine3', this.shigong);
			});
		}
		// initBarInTable(id, data, color) {
		//   let maxData = data[0][2];
		//   data.forEach((item, index) => {
		//     let tdId = id + '_' + index + '_2';
		//     const chartData = [item[2]];
		//     setTimeout(() => {
		//       percentBar(tdId, chartData, maxData, color);
		//     }, 500)
		//   })
		// },
		// switchTab(num, index) {
		//   switch (num) {
		//     // 在线服务成效度
		//     case 1:
		//       this.activeTab1 = index;
		//       this.$nextTick(() => {
		//         drawJmHotMap('heatMap-onLineService', this.tabDataIndustry.data[0].data.onLineService.chart[0][index])
		//       })
		//       break
		//     // 服务事项覆盖度
		//     case 2:
		//       this.activeTab2 = index;
		//       this.$nextTick(() => {
		//         drawJmHotMap('heatMap-service', this.tabDataIndustry.data[1].data.Service.chart[0][index])
		//       })
		//       break
		//     // 在线办理成熟度
		//     case 3:
		//       this.activeTab3 = index;
		//       this.$nextTick(() => {
		//         drawJmHotMap('heatMap-onLineHandle', this.tabDataIndustry.data[2].data.onLineHandle.chart[0][index])
		//       })
		//       break
		//     // 在线服务成效度
		//     case 4:
		//       this.activeTab4 = index;
		//       this.$nextTick(() => {
		//         drawJmHotMap('heatMap-onLineService', this.tabDataIndustry.data[3].data.start.chart[0][index])
		//       })
		//       break
		//   }
		// },
	}
};
</script>
