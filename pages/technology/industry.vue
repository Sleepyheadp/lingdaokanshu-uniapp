<style lang="less" scoped>
	@import url("../traffic/traffic-class.less");

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
		<!--1科技企业-->
		<div id="firstTab" class="section-item">
			<div class="title">
				<span class="title-icon-bar-left"></span>
				<span class="title-icon-bar-right"></span>
				<span class="title-text">{{tabData.data[0].name}}</span>
			</div>
			<div class="content-landing">
				<div class="tab-box-one-line3">
					<div @click="switchKindergartenTab(index)"
						v-for="(item, index) in tabData.data[0].data.company.detail" class="first-title-box"
						:class="{first: index===0,second: index===1,third: index===2}">
						<div :class="{label:index===0,labelMiddle:index!==0}">{{item.label}}</div>
						<div class="num">{{item.value}}<span class="unit">{{item.unit}}</span></div>
						<div :class="{compare: index===0,}">{{item.increment}}{{item.incrementUnit}}</div>
						<!--<div v-if="primaryActive === index" class="avtive"></div>-->
					</div>
				</div>
				<div class="clear-both"></div>
				<div class="content">
					<span class="blue-bar">包头市</span>
					<span class="subtitle">{{tabData.data[0].data.company.detail[0].label}}</span>
					<div class="charts echartsTop" id="rateBarMap"></div>
				</div>
			</div>
		</div>
		<!--2科研机构-->
		<div id="secondTab" class="section-item">
			<div class="title">
				<span class="title-icon-bar-left"></span>
				<span class="title-icon-bar-right"></span>
				<span class="title-text">{{tabData.data[1].name}}</span>
			</div>
			<div class="content-landing">
				<!--滚动部分11-->
				<div class="tab-one-line-title-scroll">
					<div v-if="index!==2" v-for="(item, index) in tabData.data[1].data.organization.detail.slice(0,6)"
						class="tab-one-line-scroll-item"
						:class="{first: index===0,second: index===1,third: index===3,four:index==4,five:index==5}">
						<div class="label">{{item.label.toString().replace("-新增","")}}</div>
						<div class="num">{{item.value}}<span class="unit">{{item.unit}}</span></div>
						<div v-if="index==1" class="compare">{{item.increment}}{{item.incrementUnit}}</div>
						<div v-if="index==1" class="ranking"><span class="paiming">排名</span><span
								class="paimingNum">{{tabData.data[1].data.organization.detail[2].value}}</span></div>
					</div>
				</div>

				<div class="tab-box-one-line-two-green ">
					<div v-for="(item, index) in tabData.data[1].data.organization.detail.slice(6,7)"
						class="two-green-left">
						<div class="two-green-left-center">
							<div class="label">{{item.label}}</div>
							<div class="con">
								<span class="num">{{item.value}}</span>
								<span class="unit">{{item.unit}}</span>
							</div>
						</div>
					</div>
					<div class="two-green-right">
						<div class="two-green-right-center">
							<div class="label">覆盖率</div>
							<div class="twoGreen">
								<div class="chartsGreen">
									<div class="charts" id="labourBar1"></div>
								</div>
								<div class="clear-both"></div>
								<div class="chartsGreen">
									<div class="charts" id="labourBar2"></div>
								</div>
							</div>
							<div class="clear-both"></div>
						</div>
					</div>
				</div>
				<div class="clear-both"></div>
				<div class="content">
					<span class="blue-bar">包头市</span>
					<span class="subtitle">{{tabData.data[1].data.organization.detail[6].label}}构成</span>
					<div class="charts chartsTop" id="pieCharts1"></div>
				</div>
			</div>
		</div>
		<!--3科技人才-->
		<div class="clear-both"></div>
		<div id="thirdTab" class="section-item">
			<div class="title">
				<span class="title-icon-bar-left"></span>
				<span class="title-icon-bar-right"></span>
				<span class="title-text">{{ tabData.data[2].name}}</span>
			</div>
			<div class="content-landing">
				<!--<div class="content-landing">-->
				<!--两个彩色效果 有下箭头的切换-->
				<!--<div class="tab-box-one-line-three ">-->
				<!--<div-->
				<!--@click="switchKindergartenTab(index)"-->
				<!--v-for="(item, index) in tabData.data[2].data.people.detail"-->
				<!--class="first-title-box distanceLeftTwo1"-->
				<!--:class="{first: index===0,second: index===1,third: index===2}"-->
				<!--&gt;-->
				<!--<div :class="{label1:item.label.length>10,label:item.label.length<10}">{{item.label}}</div>-->
				<!--<div class="con">-->
				<!--<div class="num">{{item.value}}<span class="unit">{{item.unit}}</span></div>-->
				<!--<div class="compare">{{item.increment}}{{item.incrementUnit}}</div>-->
				<!--&lt;!&ndash;<div v-if="primaryActive === index" class="avtiveTwo"></div>&ndash;&gt;-->
				<!--</div>-->
				<!--</div>-->
				<!--</div>-->

				<div class="tab-title distanceScoll">
					<div class="tab" v-for="(item,index) in tabData.data[2].data.people.detail"
						:class="{tabActive: index === primaryActive}" @click="switchKindergartenTab(index)">
						<span class="label">{{item.label}}</span><br />
						<span class="num">{{item.value}}</span>
						<span class="unit">{{item.unit}}</span>
						<span class="compare">{{item.increment}}{{item.incrementUnit}}</span>
					</div>
				</div>
				<div class="clear-both"></div>
			</div>
			<div class="clear-both"></div>
			<div v-for="(item, index) in tabData.data[2].data.people.detail" v-if="primaryActive === index"
				class="content">
				<span class="blue-bar">包头市</span>
				<span class="subtitle">{{item.label}}构成</span>
				<div class="clear-both"></div>
				<div class="echartsBar" id="employed"></div>
			</div>
		</div>
	</div>
</template>

<script>
	// ui还原前的柱状折线图LineAndBarChart,
	import {
		barChart,
		pieChart,
		horizontalBarImg,
		lineBarChart
	} from "../../charts/h5-chart";
	export default {
		name: "transport-capacity",
		props: ['tabData'],
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
				heatMapColors: ['0%-25%', '25%-50%', '50%-75%', '75%-100%']
			}
		},
		watch: {
			'tabData.data': function(newValue, oldValue) {
				this.initWin()
			}
		},
		mounted() {
			// this.initWin()
		},
		methods: {
			switchKindergartenTab(index) {
				this.primaryActive = index;
				if (this.primaryActive === 0) {
					this.$nextTick(() => {
						// barChart('rateBarMap', this.tabData.data[0].data.data.chart[0]);
						lineBarChart('employed', this.tabData.data[2].data.people.chart[0]);
					})
				} else if (this.primaryActive === 1) {
					this.$nextTick(() => {
						// barChart('rateBarMap', this.tabData.data[0].data.data.chart[0]);
						lineBarChart('employed', this.tabData.data[2].data.people.chart[1]);
					})
				} else if (this.primaryActive === 2) {
					this.$nextTick(() => {

					})
				}
			},
			initWin() {
				this.$nextTick(() => {
					// echarts图1
					this.tabData.data[0].data.company.chart.gridTop = '10%';
					this.tabData.data[0].data.company.chart.gridLeft = '12%';
					// echarts图3
					// this.tabData.data[1].data.organization.detail.slice(8,9)[0].paddingTop = '-87';
					// echarts图5
					// this.tabData.data[2].data.people.chart[0].legendRight='auto';
					this.tabData.data[2].data.people.chart[0].legendRight = '9%';
					barChart('rateBarMap', this.tabData.data[0].data.company.chart);
					horizontalBarImg('labourBar1', this.tabData.data[1].data.organization.detail.slice(7, 8)[0]);
					horizontalBarImg('labourBar2', this.tabData.data[1].data.organization.detail.slice(8, 9)[0]);
					pieChart('pieCharts1', this.tabData.data[1].data.organization.chart.series[0].data);
					lineBarChart('employed', this.tabData.data[2].data.people.chart[0]);
				});
			},
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
			//         drawJmHotMap('heatMap-onLineService', this.tabData.data[0].data.onLineService.chart[0][index])
			//       })
			//       break
			//     // 服务事项覆盖度
			//     case 2:
			//       this.activeTab2 = index;
			//       this.$nextTick(() => {
			//         drawJmHotMap('heatMap-service', this.tabData.data[1].data.Service.chart[0][index])
			//       })
			//       break
			//     // 在线办理成熟度
			//     case 3:
			//       this.activeTab3 = index;
			//       this.$nextTick(() => {
			//         drawJmHotMap('heatMap-onLineHandle', this.tabData.data[2].data.onLineHandle.chart[0][index])
			//       })
			//       break
			//     // 在线服务成效度
			//     case 4:
			//       this.activeTab4 = index;
			//       this.$nextTick(() => {
			//         drawJmHotMap('heatMap-onLineService', this.tabData.data[3].data.start.chart[0][index])
			//       })
			//       break
			//   }
			// },
		}
	}
</script>
