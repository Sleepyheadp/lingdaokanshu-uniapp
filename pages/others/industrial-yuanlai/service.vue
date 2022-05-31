<style scoped lang="less">
	@import url("industrial.less");

	.bar-table {
		width: 700rpx;
		float: left;
		text-align: center;
		margin-left: 30rpx;
		margin-top: 50rpx;
		border: 1rpx solid #e8e8e8;
		border-spacing: 0;

		.title {
			height: 57rpx;
			width: 100%;
			line-height: 2;
		}

		thead {
			background-color: #dfe8f1;
			font-weight: normal;
			color: #1c70c8;
			font-size: 22rpx;
			width: 100%;
			text-align: center;
			font-family: 'PingFang-SC-Medium';
			display: table;
			table-layout: fixed;
			height: 57rpx;
			line-height: 2;

			tr {
				width: 100%;
				height: 57rpx;
				table-layout: fixed;
				text-align: center;
				display: table;
				line-height: 2;

				th:first-child {
					width: 190rpx;
					border-right: 1rpx solid #e8e8e8;
				}

				th:nth-child(2) {
					width: 170rpx;
					border-right: 1rpx solid #e8e8e8;
				}

				th:nth-child(3) {
					width: 350rpx;
					text-align: center;
				}
			}

			th {
				font-weight: 300;
			}
		}

		tbody {
			font-size: 22rpx;
			color: #000;
			display: block;
			font-family: 'PingFang-SC-Medium';

			tr {
				line-height: 2;
				height: 57rpx;

				&:nth-child(odd) {
					background-color: #f7f9fb;
				}

				&:nth-child(even) {
					background-color: #fff;
				}
			}
		}

		thead,
		tbody tr {
			display: table;
			width: 100%;
			table-layout: fixed;

			td:first-child {
				width: 190rpx;
				font-size: 22rpx;
				line-height: 30rpx;
				vertical-align: center;
				border-right: 1rpx solid #e8e8e8;
			}

			td:nth-child(2) {
				width: 170rpx;
				border-right: 1rpx solid #e8e8e8;
			}
		}
	}

	.data-title {
		/*margin-top: 34rpx;*/
	}

	.tab-box-one-line {
		width: 693rpx;
		height: 150rpx;
		margin-left: 29rpx;
		box-shadow: 0 0 12rpx rgba(129, 129, 129, 0.25);
		margin-bottom: 80rpx;
	}

	.three-tab {
		width: 201rpx;
		height: 150rpx;
		float: left;
		padding-left: 30rpx;
		text-align: left;
		padding-top: 36rpx;

		&:last-child {
			.splitLine {
				background-color: #fff;
			}
		}

		.tab-with-line {
			width: 200rpx;
			height: 150rpx;
			float: left;
		}
	}

	.splitLine {
		float: right;
		width: 1rpx;
		height: 90rpx;
		margin-left: 30rpx;
		background-color: #e1e1e1;
	}

	.no-split-line {
		float: right;
		width: 1rpx;
		height: 80rpx;
		margin-top: 0rpx;
	}

	.tab-title {
		width: 693rpx;
		height: 150rpx;
		margin-left: 29rpx;
		box-shadow: 0 0 12rpx rgba(129, 129, 129, 0.25);
		margin-bottom: 80rpx;

		.tab-item {
			width: 50%;
			height: 150rpx;
			float: left;
			padding-top: 40rpx;
		}
	}

	.tab-two-line-title {
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

	.tab-two-line-item {
		flex: 0 0 210rpx;
		height: 86%;
		padding-top: 20rpx;
		margin-right: 34rpx;

		.tab-two-line-item-top {
			height: 58%;
			padding-bottom: 20rpx;
		}

		.tab-two-line-item-bottom {
			padding-top: 20rpx;

		}
	}

	.line {
		width: 150rpx;
		height: 1rpx;
		margin: 2rpx auto;
		/*background-color: #93E0BA;*/
	}

	.tabActive {
		border-top: solid #1a79c8 4rpx;
		padding-top: 36rpx;
		background-image: linear-gradient(rgba(231, 242, 255, 1), rgba(231, 242, 255, 0));
		color: #1a79c8;
	}

	.totalValueContent {
		width: 750rpx;
	}

	.serviceDistribution {
		width: 750rpx;
	}

	.serviceEnterpriseContent {
		width: 750rpx;
	}

	.modernServiceContent {
		width: 750rpx;
	}

	.productiveServiceContent {
		width: 750rpx;
	}

	/*.selectTab{*/
	/*margin-top:35rpx;*/
	/*}*/

	.tab-two-line-title-three {
		width: 692rpx;
		height: 150rpx;
		/*overflow-x: scroll;*/
		/*overflow-y: hidden;*/
		text-align: center;
		margin: 0 auto 34rpx auto;
		/*box-shadow: 0px 0px 12px rgba(129, 129, 129, 0.25);*/
		display: flex;
		white-space: nowrap;

		.tab-two-line-item-three {
			flex: 0 0 210rpx;
			height: 150rpx;
			margin-right: 34rpx;
			display: table;

			.tab-two-line-item-top-three {
				height: 100%;
				display: table-cell;
				vertical-align: middle;
			}
		}

		.tab-two-line-item-two {
			position: relative;
			flex: 0 0 330rpx;
			margin-right: 34rpx;
			height: 150rpx;
			display: table;

			.tab-two-line-item-top-three {
				height: 100%;
				display: table-cell;
				vertical-align: middle;
			}
		}
	}

	.tab-title {
		width: 692rpx;
		height: 176rpx;
		box-shadow: 0 0 12rpx rgba(129, 129, 129, 0.25);
		border-radius: 8rpx;
		text-align: center;
		margin-left: 29rpx;
		margin-bottom: 34rpx;
		display: flex;
	}

	.tab {
		flex: 1;
		height: 176rpx;
	}

	.tab0 {
		margin-top: 47rpx;
		flex-basis: 407rpx;
	}

	.tab1 {
		margin-top: 47rpx;
		flex-basis: 289rpx;
	}


	.margin-data-title {
		margin-top: 34rpx;
	}

	.img-line {
		width: 130rpx;
	}

	.pie-chart1 {
		height: 412rpx;
	}

	.tab-margin {
		height: 10rpx;
	}

	.bottom {
		height: 98rpx;
	}

	.selectTab {
		/*margin-top: 17rpx;*/
		position: absolute;
		/*right:360rpx;*/
		left: 0;
		top: 154rpx;
		margin-top: 7rpx;

		img {
			width: 330rpx;

		}
	}
</style>
<template>
	<div>
		<!-- 服务业总产值  / 主体活力-->
		<div id="firstTab" class="content">
			<div class="title">
				<span class="title-icon-bar-left"></span>
				<span class="title-icon-bar-right"></span>
				<span class="title-text">主体活力</span>
			</div>
			<span class="time_subtitle">2021年</span>
			<div class="totalValueContent">
				<div class="tab-two-line-title-three">
					<div class="tab-two-line-item-three tabGreenDouble">
						<div class="tab-two-line-item-top-three">
							<span class="name">在营市场主体数</span><br />
							<span class="name">量</span><br />
							<span class="name"></span><br />
							<span class="number">1539.87</span>
							<span class="unit">亿元</span>
						</div>
					</div>
					<div class="tab-two-line-item-three tabBlueDouble">
						<div class="tab-two-line-item-top-three">
							<span class="name">本月新增市场主</span><br />
							<span class="name">体数量</span><br />
							<span class="name"></span><br />
							<span class="number">0</span>
							<span class="unit">个</span>
						</div>
					</div>
					<div class="tab-two-line-item-three tabYellowDouble">
						<div class="tab-two-line-item-top-three">
							<span class="name">次月新增主体数</span><br />
							<span class="name">量预测</span><br />
							<span class="name"></span><br />
							<span class="number">0</span>
							<span class="unit">个</span>
						</div>
					</div>
				</div>
				<div>
					<div class="data-title">
						<span>市场主体增量及增速</span>
						<div class="bar-chart" id="serviceCountBar"></div>
					</div>
				</div>
			</div>
		</div>
		<!-- 主体分布 -->
		<div id="firstTab" class="content">
			<div class="title">
				<span class="title-icon-bar-left"></span>
				<span class="title-icon-bar-right"></span>
				<span class="title-text">主体分布</span>
			</div>
			<span class="time_subtitle">2021年</span>
			<div class="totalValueContent">

				<div>
					<div class="data-title">
						<span>单位类型</span>
					</div>
					<div class="pie-chart1" id="serviceRatePie"></div>
				</div>
				<div>
					<div class="data-title">
						<span>产业类型</span>
					</div>
					<div class="pie-chart1" id="serviceRatePie3"></div>
				</div>
				<div>
					<div class="data-title">
						<span>行业类型</span>
					</div>
					<div class="chartsMulBar" style="height:350rpx;" id="rateBarMap6"></div>
					<!-- <div class="pie-chart1" id="serviceRatePie3"></div> -->
				</div>
			</div>
		</div>
		<!-- 主体资质 -->
		<div id="thirdTab" class="content">
			<div class="title">
				<span class="title-icon-bar-left"></span>
				<span class="title-icon-bar-right"></span>
				<span class="title-text">主体资质</span>
			</div>
			<span class="time_subtitle">2021年</span>
			<div class="serviceDistribution">
				<div class="tab-two-line-title-three" style="position: relative;">
					<div class="tab-two-line-item-two tabGreenDouble">
						<div class="tab-two-line-item-top-three">
							<span class="name">A级纳税人</span><br />
							<span class="number">13727</span>
							<span class="unit">个</span>
						</div>
					</div>
					<div class="tab-two-line-item-two tabGreenDouble">
						<div class="tab-two-line-item-top-three">
							<span class="name">A金融证许可企业</span><br />
							<span class="number">2100</span>
							<span class="unit">个</span>
						</div>
					</div>
				</div>
				<div class="tab-two-line-title-three" style="position: relative;">
					<div class="tab-two-line-item-two tabBlueDouble">
						<div class="tab-two-line-item-top-three">
							<span class="name">排污许可企业</span><br />
							<span class="number">2200</span>
							<span class="unit">个</span>
						</div>
					</div>
					<div class="tab-two-line-item-two tabBlueDouble">
						<div class="tab-two-line-item-top-three">
							<span class="name">行政许可企业</span><br />
							<span class="number">2300</span>
							<span class="unit">个</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 服务业企业 / 企业创新-->
		<div id="secondTab" class="content">
			<div class="title">
				<span class="title-icon-bar-left"></span>
				<span class="title-icon-bar-right"></span>
				<span class="title-text">企业创新</span>
			</div>
			<div class="time_subtitle">{{this.tabData.data[1].data.company.detail[this.ServiceCompanyTabIndex].year}}年
			</div>
			<div class="serviceEnterpriseContent">
				<div class="tab-two-line-title">
					<!-- 1 -->
					<!-- tabGreenDouble  tabBlueDouble  tabYellowDouble-->
					<div class="tab-two-line-item tabGreenDouble">
						<div class="tab-two-line-item-top">
							<span class="name">专利申请量</span>
							<span class="name"></span><br />
							<span class="name"></span><br />
							<span class="number">4356</span><br />
							<span class="unit">(个)</span>
						</div>
						<!-- splitLineGreen  splitLineBlue  splitLineYellow-->
						<div class="line splitLineGreen"></div>
						<div class="tab-two-line-item-bottom">
							<span class="name">增速</span>
							<span class="numberBottom colorBlack">12.8</span>
							<span class="unitBottom colorBlack">%</span>
						</div>
					</div>
					<!-- 2 -->
					<div class="tab-two-line-item tabBlueDouble">
						<div class="tab-two-line-item-top">
							<span class="name">专利授权量</span>
							<span class="name"></span><br />
							<span class="name"></span><br />
							<span class="number">3668</span><br />
							<span class="unit">(个)</span>
						</div>
						<div class="line splitLineBlue"></div>
						<div class="tab-two-line-item-bottom">
							<span class="name">增速</span>
							<span class="numberBottom colorBlack">22.1</span>
							<span class="unitBottom colorBlack">%</span>
						</div>
					</div>
					<!-- 3 -->
					<div class="tab-two-line-item tabYellowDouble">
						<div class="tab-two-line-item-top">
							<span class="name">软件著作权</span>
							<span class="name"></span><br />
							<span class="name"></span><br />
							<span class="number">3320</span><br />
							<span class="unit">(个)</span>
						</div>
						<div class="line splitLineYellow"></div>
						<div class="tab-two-line-item-bottom">
							<span class="name">增速</span>
							<span class="numberBottom colorBlack">1.4</span>
							<span class="unitBottom colorBlack">%</span>
						</div>
					</div>
				</div>
				<div>
					<div class="data-title margin-data-title">
						<span>规模以上服务业企业按经济类型分</span>
					</div>
					<div class="pie-chart" id="enterpriseValuePie1"></div>
				</div>
				<!-- <div>
          <div class="data-title">
            <span>规模以上服务业企业按行业分</span>
          </div>
          <div class="pie-chart" id="enterpriseValuePie2"></div>
        </div> -->
			</div>
		</div>
		<!-- 服务业主体分布情况 -->
		<!-- <div id="thirdTab" class="content">
		<div class="title">
			<span class="title-icon-bar-left"></span>
			<span class="title-icon-bar-right"></span>
			<span class="title-text">{{ tabData.data[2].name }}</span>
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
		<!-- <div style="content:'';clear: both"></div> -->
		<!-- 现代服务业 -->
		<!-- <div id="fourthTab" class="content">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{ tabData.data[3].name }}</span>
      </div>
      <div class="time_subtitle">{{tabData.data[3].data.area.detail[0].year}}年</div>
      <div class="modernServiceContent">
        <div class="tab-title">
          <div  :class="{tab0:index===0,tab1:index===1}"
                v-for="(item,index) in tabData.data[3].data.area.detail">
            <div :class="{splitLine: index===0}"></div>
            <div class="textAlignChange">
              <span  class="name">{{item.label}}</span><br/>
              <div class="tab-margin"></div>
              <span  class="number" :class="{colorChange: index===1}">{{item.value.toFixed(2)}}</span>
              <span  class="unit" :class="{unitcolorChange: index===1}">{{item.unit}}</span>
              <img class="img-line" v-if="index===1" src="../../static/assets/images/h5/line.png" alt="">
            </div>
            <div v-if="index===1" class="simpleLine"></div>
          </div>
        </div>
        <div>
          <div class="data-title">
            <span>现代服务业增加值及服务业增加值比重</span>
          </div>
          <div class="bar-chart" id="modernServiceCountBar"></div>
        </div>
        <div>
          <div class="data-title">
            <span>现代服务业分行业增速</span>
          </div>
          <div class="line-chart" id="modernServiceRateBar"></div>
        </div>
      </div>
    </div> -->
		<!-- 生产性服务业 -->
		<!-- <div id="fifthTab" class="content">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{ tabData.data[4].name }}</span>
      </div>
      <div class="time_subtitle">{{this.tabData.data[4].data.area.detail[0].year}}年</div>
      <div class="productiveServiceContent">
        <div class="tab-title">
          <div  :class="{tab0:index===0,tab1:index===1}"
                v-for="(item,index) in tabData.data[4].data.area.detail">
            <div :class="{splitLine: index===0}"></div>
            <div class="textAlignChange">
              <span  class="name">{{item.label}}</span><br/>
              <div class="tab-margin"></div>
              <span  class="number" :class="{colorChange: index===1}">{{item.value.toFixed(2)}}</span>
              <span  class="unit" :class="{unitcolorChange: index===1}">{{item.unit}}</span>
              <img class="img-line" v-if="index===1" src="../../static/assets/images/h5/line.png" alt="">
              </div>
            <div v-if="index===1" class="simpleLine"></div>
          </div>
        </div>
        <div>
          <div class="data-title">
            <span>生产性服务业增加值及站服务业增加值比重</span>
          </div>
          <div class="bar-chart" id="productiveServiceBar1"></div>
        </div>
        <div>
          <div class="data-title">
            <span>生产性服务业分行业增速</span>
          </div>
          <div class="line-chart" id="productiveServiceBar2"></div>
          <div class="bottom"></div>
        </div>
      </div>
    </div> -->
		<!-- 服务业总产值 / 企业监管 -->
		<div id="sixthTab" class="content">
			<div class="title">
				<span class="title-icon-bar-left"></span>
				<span class="title-icon-bar-right"></span>
				<span class="title-text">企业监管</span>
			</div>
			<span class="time_subtitle">2021年</span>
			<div class="totalValueContent">

				<div>
					<div class="data-title">
						<span>行政处罚企业数量</span>
						<div class="bar-chart" id="serviceCountBar2"></div>
					</div>
				</div>
				<div>
					<div class="data-title">
						<span>惩处行业种类</span>
					</div>
					<div class="pie-chart1" id="serviceRatePie2"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		mulBars,
		agricultureLineAndBarChart,
		industrialpieChart,
		ecologicalLineChart,
		roseChart,
		percentBar
	} from '../../charts/h5-chart';
	export default {
		name: "service",
		components: {},
		props: {
			tabData: {
				type: Object
			}
		},
		data() {
			return {
				ServiceCompanyTabIndex: 0,
				ServiceDistribution: 0,
				touzianchenglv: 
				{
				  "data": [
				    {
				      "data": {
				        "project": {
				          "detail": [
				            {
				              "label": "交通项目数",
				              "value": 116.0,
				              "unit": "个",
				              "year": "2020"
				            },
				            {
				              "label": "已开工项目数",
				              "value": 81.0,
				              "unit": "个",
				              "year": "2020"
				            },
				            {
				              "label": "项目开工率",
				              "value": 65.3,
				              "unit": "%",
				              "year": "2020"
				            }
				          ],
				          "chart": [
				            {
				              "legends": ["交通项目数"],
				              "series": [
				                {
				                  "name": "交通项目数",
				                  "type": "bar",
				                  "stack": null,
				                  "data": [21.0, 33.0, 100.0, 105.0, 94.0, 116.0]
				                }
				              ],
				              "year": null,
				              "yaxis": ["个"],
				              "xaxis": ["2015", "2016", "2017", "2018", "2019", "2020"]
				            },
				            {
				              "legends": [
				                "轨道交通",
				                "高快速路",
				                "等级公路",
				                "港口航道",
				                "市政项目"
				              ],
				              "series": [
				                {
				                  "name": null,
				                  "type": "pie",
				                  "stack": null,
				                  "data": [
				                    { "name": "市政项目", "unit": "%", "value": 48.3 },
				                    { "name": "等级公路", "unit": "%", "value": 31.9 },
				                    { "name": "高快速路", "unit": "%", "value": 11.2 },
				                    { "name": "轨道交通", "unit": "%", "value": 6.0 },
				                    { "name": "港口航道", "unit": "%", "value": 2.6 }
				                  ]
				                }
				              ]
				            }
				          ]
				        }
				      },
				      "name": "交通项目"
				    },
				    {
				      "data": {
				        "investment": {
				          "detail": [
				            {
				              "label": "计划投资",
				              "value": 216.0,
				              "unit": "亿",
				              "year": "2020"
				            },
				            {
				              "label": "已完成投资",
				              "value": 350.0,
				              "unit": "亿元",
				              "year": "2020"
				            },
				            {
				              "label": "投资完成率",
				              "value": 29.2,
				              "unit": "%",
				              "year": "2020"
				            }
				          ],
				          "chart": [
				            {
				              "legends": ["计划投资"],
				              "series": [
				                {
				                  "name": "计划投资",
				                  "type": "bar",
				                  "stack": null,
				                  "data": [103.0, 123.0, 148.0, 166.0, 175.0, 216.0]
				                }
				              ],
				              "year": null,
				              "yaxis": ["亿"],
				              "xaxis": ["2015", "2016", "2017", "2018", "2019", "2020"]
				            },
				            {
				              "legends": [
				                "轨道交通",
				                "高快速路",
				                "等级公路",
				                "港口航道",
				                "市政项目"
				              ],
				              "series": [
				                {
				                  "name": null,
				                  "type": "pie",
				                  "stack": null,
				                  "data": [
				                    { "name": "高快速路", "unit": "%", "value": 58.7 },
				                    { "name": "市政项目", "unit": "%", "value": 20.0 },
				                    { "name": "轨道交通", "unit": "%", "value": 10.5 },
				                    { "name": "等级公路", "unit": "%", "value": 10.4 },
				                    { "name": "港口航道", "unit": "%", "value": 0.4 }
				                  ]
				                }
				              ]
				            },
				            {
				              "legends": [""],
				              "series": [
				                {
				                  "name": "",
				                  "type": "bar",
				                  "stack": null,
				                  "data": [39.2, 50.1, 30.8, 11.0, 49.0]
				                }
				              ],
				              "year": null,
				              "yaxis": ["%"],
				              "xaxis": ["轨道", "高快", "等级", "港口", "市政"]
				            }
				          ]
				        }
				      },
				      "name": "交通投资"
				    }
				  ]
				}

			}
		},
		watch: {
			'tabData.data': function(newValue, oldValue) {
				console.log('tabData.chart', this.tabData)
				this.init();
			}
		},
		methods: {
			// 服务业企业 tab
			switchServiceCompanyTab(index) {
				setTimeout(() => {
					this.ServiceCompanyTabIndex = index;
					industrialpieChart('enterpriseValuePie1', this.tabData.data[1].data.company.chart[0].series[0]
						.data)

					industrialpieChart('enterpriseValuePie2', this.tabData.data[1].data.company.chart[1].series[0]
						.data)
				}, 500)
			},

			//服务业主体分布情况 tab切换
			switchServiceDistribution(index) {
				setTimeout(() => {
					this.ServiceDistribution = index;
					this.initBarInTable('landing', this.tabData.data[2].data.company.chart[index].series[0].data
						.slice(0, this.tabData.data[2].data.company.chart[index].series[0].data.length), [
							'#39c77f'
						]);
				})
			},



			initBarInTable(id, data, color) {
				let maxData = data[0].value;
				data.forEach((item, index) => {
					let tdId = id + '_' + index + '_1';
					const chartData = [item.value];
					setTimeout(() => {
						percentBar(tdId, chartData, maxData, color, 1);
					}, 500)
				})
			},
			init() {
				console.log(this.tabData.data[2].data.company.chart[0].series[0].data, '%%%%%%%%%%%%5')
				this.$nextTick(() => {
					//服务业总产值
					this.tabData.data[0].data.gdp.chart[0].gridTop = 120;
					this.tabData.data[0].data.gdp.chart[0].legendRight = '15%';
					agricultureLineAndBarChart('serviceCountBar', this.tabData.data[0].data.gdp.chart[0]);
					agricultureLineAndBarChart('serviceCountBar2', this.tabData.data[0].data.gdp.chart[0]);
					let serviceRatePieData1 = this.tabData.data[0].data.gdp.chart[1].series[0].data;
					serviceRatePieData1.gridBottom = 40;
					serviceRatePieData1.chartTop = '52%';
					let serviceRatePieData2 = this.tabData.data[0].data.gdp.chart[2].series[0].data;
					serviceRatePieData2.gridBottom = 40;
					serviceRatePieData2.chartTop = '52%';
					let serviceRatePieData3 = this.tabData.data[0].data.gdp.chart[3].series[0].data;
					serviceRatePieData3.gridBottom = 40;
					serviceRatePieData3.chartTop = '52%';
					industrialpieChart('serviceRatePie', serviceRatePieData1);
					industrialpieChart('serviceRatePie2', serviceRatePieData2);
					industrialpieChart('serviceRatePie3', serviceRatePieData3);
					//服务业企业
					// this.ServiceCompanyTabIndex = 0;
					industrialpieChart('enterpriseValuePie1', this.tabData.data[1].data.company.chart[0].series[0]
						.data);
					let enterpriseValuePie2Data = this.tabData.data[1].data.company.chart[1].series[0].data;
					// enterpriseValuePie2Data.legendX = 425;
					enterpriseValuePie2Data.nameBr = true;
					industrialpieChart('enterpriseValuePie2', enterpriseValuePie2Data);
					// roseChart('enterpriseValuePie2',enterpriseValuePie2Data)
					// //现代服务业
					this.tabData.data[3].data.area.chart[0].gridTop = 130;
					this.tabData.data[3].data.area.chart[0].legendRight = '10%'
					agricultureLineAndBarChart('modernServiceCountBar', this.tabData.data[3].data.area.chart[0]);
					let lineData = this.tabData.data[3].data.area.chart[1];
					lineData.xRotate = 35;
					lineData.gridBottom = 100;
					lineData.gridLeft = 110;
					lineData.gridTop = 80;
					lineData.axisLineColor = '#f0993c';
					lineData.type = 'dashed';
					ecologicalLineChart('modernServiceRateBar', lineData);
					// //生产性服务业
					this.tabData.data[4].data.area.chart[0].gridTop = 120;
					this.tabData.data[4].data.area.chart[0].legendRight = '10%'
					agricultureLineAndBarChart('productiveServiceBar1', this.tabData.data[4].data.area.chart[0]);
					let productLineData = this.tabData.data[4].data.area.chart[1];
					productLineData.xRotate = 35;
					productLineData.gridBottom = 110;
					productLineData.gridLeft = 100;
					productLineData.gridTop = 80;
					productLineData.axisLineColor = '#f0993c';
					productLineData.type = 'dashed';
					ecologicalLineChart('productiveServiceBar2', productLineData)


					this.initBarInTable('landing', this.tabData.data[2].data.company.chart[0].series[0].data.slice(
						0, this.tabData.data[2].data.company.chart[0].series[0].data.length), ['#39c77f']);

					// 行业类型横向柱状图
					mulBars('rateBarMap6', this.touzianchenglv.data[1].data.investment.chart[2])

				});
			}
		},
	}
</script>

<style scoped>

</style>
