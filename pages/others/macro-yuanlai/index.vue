<style lang="less" scoped>
  .clear-both {
    clear: both;
    content: "";
  }
  .section-sticky {
    height: 1334rpx;
  }
  .section-top {
    height: 380rpx;
  }
  .higherTop {
    height: 488rpx;
  }
  .banner {
    background-image: url("../../static/assets/images/h5/economyBg.png");
    width: 750rpx;
    height: 282rpx;
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
	p {
		width: 750rpx;
		height: 95rpx;
		background: url(../../static/assets/images/h5/bgColor.png);
		background-size: 100%;
		font-size: 54rpx;
		line-height: 95rpx;
		color: #fff;
		font-family: 'PingFang-SC-Heavy';
		position: absolute;
		padding-left:58rpx;
		top: 140rpx;
		left: 0rpx;
	}
  }
  .header {
    width: 740rpx;
    height: 98rpx;
    border-bottom: 1rpx solid #e1e1e1;
    background-color: #fff;
    padding-left: 10rpx;
    .tab-item {
      width: 206rpx;
      float: left;
      margin: 30rpx 14rpx 0 14rpx;
      text-align: center;
      font-size: 0.37333rem;
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
  .tab-content {
    width: 100%;
    height: 1500rpx;
  }
  .sub-tab-scroll {
    width: 710rpx;
    height:75rpx;
    overflow: hidden;
    margin-left: 10rpx;

  }
  .sub-tab {
    overflow-x: scroll;
    overflow-y: hidden;
    height: 100%;
    margin-top: 7px;
    display: flex;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .sub-tab-item {
    height: 66rpx;
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
  .section-sticky /deep/ .van-dropdown-menu__bar {
    box-shadow: none;
  }
  .section-sticky /deep/ .van-dropdown-menu__title::after {
    color: rgba(0,0,0,0);
    width: 11rpx;
    height: 7rpx;
    border: none;
    transform: none;
    background-size: 11rpx 7rpx;
  }
  .section-sticky /deep/ .van-dropdown-menu__title--down::after {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAHCAYAAADebrddAAAAVElEQVQYlYXPsQ1AABBG4S8W0CJKO5jCvubQMgG1muauQPCSlz+5vOZ4MmCL/aTHjiO2fws7rBGma9wvVJhvYbqgzbDE9BKmU3TGnzAdC9R/XwfNCaK2JDPK+IfkAAAAAElFTkSuQmCC);
    transform: none;
  }
  .section-sticky /deep/ .van-dropdown-item--down {
    top: 390rpx;
    padding-left: 10rpx;
    /*border-top: 1px solid #e1e1e1;*/
  }
  .section-sticky /deep/ .van-dropdown-menu__bar {
    height: 99rpx;
    border-bottom: 1px solid #e1e1e1;
  }
  .secondTab /deep/ .van-dropdown-menu__bar{
    border-bottom: none;
  }
  .section-sticky /deep/ .van-cell {
    float: left;
    font-size: 28rpx;
    width: fit-content;
    color: #000;
    margin-bottom: 14rpx;
    padding: 10rpx 14rpx 5rpx 14rpx;
    font-family: 'PingFang-SC-Regular';
  }
  .section-sticky /deep/ .van-dropdown-item__content {
    padding-top: 28rpx;
    padding-bottom: 22rpx;
    padding-left: 10rpx;
  }
  .section-sticky /deep/ .van-cell::after {
    border: none;
  }
  .section-sticky /deep/ .van-ellipsis, .section-sticky /deep/ .van-cell__value {
    display: none;
  }
  .section-sticky /deep/ .van-dropdown-item__option--active {
    color: #1c70c8;
  }
  .section-sticky /deep/ .van-dropdown-menu {
    width: 40rpx;
    float: right;
    margin-right: 21rpx;
  }
</style>
<template>
  <view class="section-sticky">
    <view class="content" id="top" :class="{higherTop: hasSecondTab}">
      <view class="banner">
		  <p>经济运行</p>
      </view>
      <van-sticky>
        <view class="header" :class="{secondTab: hasSecondTab}">
          <view v-for="(item, index) in tabListShow" v-if="tabRowShow===0" class="tab-item" :class="{tabActive: index===tabActiveIndex}" @click="changeShow(index)">
            <span>{{item}}</span>
            <view v-if="index===tabActiveIndex" class="active-line"></view>
          </view>
        </view>
      </van-sticky>
      <view class="clear-both"></view>
      <view class="tab-content">
		<!-- 综合监测 -->
        <Comprehensive v-if="tabActiveIndex===0" :Poverty="Poverty"></Comprehensive>
		<!-- 区市监测 -->
        <cityinspection v-if="tabActiveIndex===1" :Poverty="Poverty"></cityinspection>
		<!-- 投资趋势 -->
        <investment v-if="tabActiveIndex===2" :Poverty="Poverty"></investment>
      </view>
    </view>
  </view>
</template>

<script>
  import Comprehensive from "./components/Comprehensive";
  import cityinspection from "./components/cityinspection";
  import investment from "./components/Investment";
  import {ruralRevitalization} from "../Rural-revitalization/api/api";
  import {macroEconomy} from "./api";
  export default {
    name: "index",
    components: {Comprehensive, cityinspection, investment},
    data() {
      return {
        // 是否有二级tab页
        hasSecondTab: false,
        tabListText: [
          { text: '经济总览', value: 0 },
          { text: '区市监测', value: 1 },
          { text: '投资趋势', value: 2 },
        ],
        // 当前显示的tab页
        tabListShow: [],
        Poverty:[],
        // 当前显示的tab页是第几行
        tabRowShow: '',
        tabActiveIndex: '',
        subTabList: [],
        subTabActiveIndex: '',
        tabData: [],
        // 学前教育
        preschoolData: [],
        // 九年义务教育
        compulsoryData: [],
        // 高中阶段教育
        highschoolData: [],
		// 经济运行
		testData:
			{
				"status": true,
				"message": "查询成功！",
				"data": {
					"investmentTrend": {
						"growthTrendStructure": {
							"data": {
								"legends": ["国有投资", "民间投资", "港澳台及外商投资", "固定资产投资增速"],
								"series": [{
									"name": "国有投资",
									"type": "bar",
									"stack": null,
									"data": [10.3, -5.5, 0.6, -16.4, -16.4, -16.1]
								}, {
									"name": "民间投资",
									"type": "bar",
									"stack": null,
									"data": [86.4, 66.9, 47.9, 45.1, 32.0, 28.4]
								}, {
									"name": "港澳台及外商投资",
									"type": "bar",
									"stack": null,
									"data": [15.1, 20.1, 12.7, 14.3, 18.2, 14.2]
								}, {
									"name": "固定资产投资增速",
									"type": "line",
									"stack": null,
									"data": [40.2, 38.5, 29.4, 22.0, 15.2, 11.7]
								}],
								"year": null,
								"yaxis": ["江门市"],
								"xaxis": ["2021-2", "2021-3", "2021-4", "2021-5", "2021-6", "2021-7"]
							},
							"title": "固定资产投资增速趋势及结构"
						},
						"IndustryInvestment": {
							"data": {
								"legends": ["工业", "制造业", "装备制造业", "基础设施", "城市建设"],
								"series": [{
									"name": "工业",
									"type": "bar",
									"stack": null,
									"data": [112.1, 87.9, 64.0, 35.8, 29.7, 29.4]
								}, {
									"name": "制造业",
									"type": "bar",
									"stack": null,
									"data": [127.9, 86.2, 64.6, 40.8, 33.8, 31.7]
								}, {
									"name": "装备制造业",
									"type": "bar",
									"stack": null,
									"data": [128.7, 70.6, 56.6, 17.4, 14.8, 16.1]
								}, {
									"name": "基础设施",
									"type": "bar",
									"stack": null,
									"data": [18.6, 35.6, 23.2, -2.0, -6.8, -7.9]
								}, {
									"name": "城市建设",
									"type": "bar",
									"stack": null,
									"data": [34.6, 48.5, 45.2, 25.0, 10.5, 8.8]
								}],
								"year": null,
								"yaxis": ["江门市"],
								"xaxis": ["2021-2", "2021-3", "2021-4", "2021-5", "2021-6", "2021-7"]
							},
							"title": "分行业投资趋势"
						},
						"threeProductInvest": {
							"data": {
								"legends": ["第一产业", "第二产业", "第三产业"],
								"series": [{
									"name": "第一产业",
									"type": "bar",
									"stack": null,
									"data": [556.0, 354.7, 372.7, 330.1, 200.4, 124.7]
								}, {
									"name": "第二产业",
									"type": "bar",
									"stack": null,
									"data": [112.1, 87.9, 64.0, 35.8, 29.7, 29.4]
								}, {
									"name": "第三产业",
									"type": "bar",
									"stack": null,
									"data": [17.1, 20.9, 15.4, 14.4, 7.4, 2.4]
								}],
								"year": null,
								"yaxis": ["江门市"],
								"xaxis": ["2021-2", "2021-3", "2021-4", "2021-5", "2021-6", "2021-7"]
							},
							"title": "三次产业投资趋势"
						},
						"title": "投资趋势",
						"investmentProperty": {
							"data": {
								"legends": ["商品住房成交面积环比增速", "商品住房库存套数环比增速", "全市商品房成交均价环比增速"],
								"series": [{
									"name": "商品住房成交面积环比增速",
									"type": "bar",
									"stack": null,
									"data": [-39.6, 60.4, -9.2, 8.8, -29.0, -5.4]
								}, {
									"name": "商品住房库存套数环比增速",
									"type": "bar",
									"stack": null,
									"data": [-1.7, -2.2, 2.8, -3.9, 2.8, 0.5]
								}, {
									"name": "全市商品房成交均价环比增速",
									"type": "bar",
									"stack": null,
									"data": [-3.7, -0.6, 5.6, 0.8, 3.8, -9.0]
								}],
								"year": null,
								"yaxis": ["江门市"],
								"xaxis": ["2021-2", "2021-3", "2021-4", "2021-5", "2021-6", "2021-7"]
							},
							"title": "房地产投资"
						}
					},
					"integratedMonitoring": {
						"allSupplyDemand": {
							"allSupplyDemand": {
								"column": null,
								"data": [
									[{
										"unit": "亿元",
										"lable": "生产总值",
										"value": 1656.57
									}, {
										"unit": "%",
										"lable": "生产总值增速",
										"value": 13.2
									}, {
										"unit": "%",
										"lable": "全省同期生产总值增速",
										"value": 13.0
									}]
								]
							},
							"title": "总体供求"
						},
						"industrialStructure": {
							"data": {
								"legends": ["第一产业", "第二产业", "第三产业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "第一产业",
										"unit": '亿元',
										"value": 114.44
									}, {
										"name": "第二产业",
										"unit": '亿元',
										"value": 1571.17
									}, {
										"name": "第三产业",
										"unit": '亿元',
										"value": 1607.39
									}]
								}]
							},
							"title": "产业结构"
						},
						"economicTrend": {
							"data":  {
								"date": "2021-09-30 00:00:00",
								"hasDialog": false,
								"legends": [
								  "地区生产总值（累计值）",
								  "地区生产总值增速（累计值）"
								],
								"series": [
								  {
									"data": [
									  "1318",
									  "2095.8",
									  "2787.36",
									  "717.29",
									  "1627.01",
									  "2501",
									  "3293.00",
									  "3293.00"
									],
									"hasDialog": false,
									"name": "地区生产总值（累计值）",
									"type": "bar"
								  },
								  {
									"data": [
									  "-1.5",
									  "1",
									  "3",
									  "18.7",
									  "15.7",
									  "10.5",
									  "8.5",
									  "8.5"
									],
									"hasDialog": false,
									"name": "地区生产总值增速（累计值）",
									"type": "line",
									"unit": "%"
								  }
								],
								"single": true,
								"style": "{width:700, seriesSymbol: 'circle' ,singleYAxis:1,legendTop:'4%',legendRight:'6%'}",
								"title": "地区生产总值-曲线图",
								"titleId": "1052",
								"type": "combination",
								"xAxis": [
								  "2020-06",
								  "2020-09",
								  "2020-12",
								  "2021-03",
								  "2021-06",
								  "2021-09",
								  "2021-12",
								  "2021-12"
								]
							  },
								"title": "投资、消费和区域生产总值"
							},
						"allSupplyDemand2": {
							"allSupplyDemand": {
								"column": null,
								"data": [
									[{
										"unit": "亿元",
										"lable": "工业增加值",
										"value": 619.49
									}, {
										"unit": "亿元",
										"lable": "社会消费品零售总值",
										"value": 615.94
									}, {
										"unit": "亿元",
										"lable": "进出口总值",
										"value": 809.8
									}, {
										"unit": "%",
										"lable": "固定资产投资增速",
										"value": 15.2
									}, {
										"unit": "%",
										"lable": "社会消费品零售增速",
										"value": 19.0
									}, {
										"unit": "%",
										"lable": "出口总值同比增速",
										"value": 33.2
									}, {
										"unit": "亿元",
										"lable": "一般公共预算收入",
										"value": 263.98
									}, {
										"unit": "亿元",
										"lable": "税收收入",
										"value": 168.79
									}, {
										"unit": "亿元",
										"lable": "一般公共预算支出",
										"value": 443.25
									}, {
										"unit": "平方公里",
										"lable": "工业用地面积",
										"value": 64.37
									}, {
										"unit": "平方公里",
										"lable": "工业用地出让面积",
										"value": 3.17
									}, {
										"unit": "吨标煤",
										"lable": "万元GDP能耗",
										"value": 0.7
									}]
								]
							},
							"title": "总体供求2"
						},
						"title": "综合监测",
						"ForeignEnvironment": {
							"data": {
								"legends": ["进出口总值", "实际利用外资"],
								"series": [{
									"name": "进出口总值",
									"type": "line",
									"stack": null,
									"data": [-1.8, 0.2, 39.1, 39.1, 26.7, 24.6, 25.7, 27.3, 27.4]
								}, {
									"name": "实际利用外资",
									"type": "line",
									"stack": null,
									"data": [50.32, 56.62, 5.9, 5.9, 7.76, 9.61, 11.29, 14.94, 15.29]
								}],
								"year": null,
								"yaxis": ["%"],
								"xaxis": ["2020-11", "2020-12", "2021-1", "2021-2", "2021-3", "2021-4", "2021-5", "2021-6",
									"2021-7"]
							},
							"title": "区域对外贸易环境"
						}
					},
					"monitoringArea": {
						"gdp": {
							"data": {
								"legends": ["新会区", "蓬江区", "江海区", "台山市", "开平市", "鹤山市", "恩平市"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "新会区",
										"unit": null,
										"value": 416.48
									}, {
										"name": "蓬江区",
										"unit": null,
										"value": 390.85
									}, {
										"name": "江海区",
										"unit": null,
										"value": 136.12
									}, {
										"name": "台山市",
										"unit": null,
										"value": 223.97
									}, {
										"name": "开平市",
										"unit": null,
										"value": 197.83
									}, {
										"name": "鹤山市",
										"unit": null,
										"value": 199.2
									}, {
										"name": "恩平市",
										"unit": null,
										"value": 92.11
									}]
								}]
							},
							"title": "区市GDP"
						},
						"industrialAddValue": {
							"data": {
								"legends": ["新会区", "蓬江区", "江海区", "台山市", "开平市", "鹤山市", "恩平市"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "新会区",
										"unit": null,
										"value": 206.61
									}, {
										"name": "蓬江区",
										"unit": null,
										"value": 145.15
									}, {
										"name": "江海区",
										"unit": null,
										"value": 81.31
									}, {
										"name": "台山市",
										"unit": null,
										"value": 105.78
									}, {
										"name": "开平市",
										"unit": null,
										"value": 68.99
									}, {
										"name": "鹤山市",
										"unit": null,
										"value": 68.99
									}, {
										"name": "恩平市",
										"unit": null,
										"value": 20.63
									}]
								}]
							},
							"title": "区市规上工业增加值"
						},
						"fixedInvestments": {
							"data": {
								"column": ["园区", "园区固定资产投资", "占各地投资总额比例"],
								"data": [
									["工业", 1220.91, 12.1],
									["其他服务业", 595.39, 10.4],
									["批发和零售业", 400.03, 2.1],
									["建筑业", 350.27, 10.4],
									["交通运输、仓储和邮政业",248.69,11.0],
									["房地产业", 174.41, -2.7],
									["金融业",129.26 , 2.7],
									["农林牧渔业",116.22 , 4.0],
									["住宿和餐饮业", 57.82, 12.0],
								]
							},
							"title": "固定资产投资"
						},
						"majorIndustrialInvestment": {
							"data": {
								"column": ["园区", "主要工业园区工业增加值", "园区工业增加值增速"],
								"data": [
									["工业", 1220.91, 12.1],
									["其他服务业", 595.39, 10.4],
									["批发和零售业", 400.03, 2.1],
									["建筑业", 350.27, 10.4],
									["交通运输、仓储和邮政业",248.69,11.0],
									["房地产业", 174.41, -2.7],
									["金融业",129.26 , 2.7],
									["农林牧渔业",116.22 , 4.0],
									["住宿和餐饮业", 57.82, 12.0],
								]
							},
							"title": "主要工业园区工业增加值及固定资产投资"
						},
						"fiscalRevenue": {
							"data": {
								"legends": ["新会区", "蓬江区", "江海区", "台山市", "开平市", "鹤山市", "恩平市"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "新会区",
										"unit": null,
										"value": 34.32
									}, {
										"name": "蓬江区",
										"unit": null,
										"value": 15.59
									}, {
										"name": "江海区",
										"unit": null,
										"value": 9.32
									}, {
										"name": "台山市",
										"unit": null,
										"value": 21.1
									}, {
										"name": "开平市",
										"unit": null,
										"value": 19.43
									}, {
										"name": "鹤山市",
										"unit": null,
										"value": 22.87
									}, {
										"name": "恩平市",
										"unit": null,
										"value": 8.43
									}]
								}]
							},
							"title": "财政收入"
						},
						"gdpIncreaseRatio": {
							"data": {
								"legends": ["GDP累计增速"],
								"series": [{
									"name": null,
									"type": "bar",
									"stack": null,
									"data": [0.4, 1.6, 1.1, -0.7, -2.7, 1.2, 0.3]
								}],
								"year": null,
								"yaxis": ["%"],
								"xaxis": ["新会区", "蓬江区", "江海区", "开平市", "恩平市", "鹤山市", "台山市"]
							},
							"title": "GDP累计增速-热力图"
						},
						"fiscalExpenditure": {
							"data": {
								"legends": ["新会区", "蓬江区", "江海区", "台山市", "开平市", "鹤山市", "恩平市"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "新会区",
										"unit": null,
										"value": 95.07
									}, {
										"name": "蓬江区",
										"unit": null,
										"value": 44.23
									}, {
										"name": "江海区",
										"unit": null,
										"value": 21.49
									}, {
										"name": "台山市",
										"unit": null,
										"value": 72.2
									}, {
										"name": "开平市",
										"unit": null,
										"value": 51.92
									}, {
										"name": "鹤山市",
										"unit": null,
										"value": 44.31
									}, {
										"name": "恩平市",
										"unit": null,
										"value": 40.05
									}]
								}]
							},
							"title": "财政支出"
						},
						"title": "区市监测",
						"gdpIncreaseRatio1": {
							"data": {
								"legends": ["GDP当期增速"],
								"series": [{
									"name": null,
									"type": "bar",
									"stack": null,
									"data": [1.2, 4.8, 6.9, 1.1, -8.3, 5.4, 3.0,-1,7]
								}],
								"year": null,
								"yaxis": ["%"],
								"xaxis": ["新会区", "蓬江区", "江海区", "开平市", "恩平市", "鹤山市", "台山市"]
							},
							"title": "GDP当期增速-热力图"
						},
						"threeRequirements": {
							"data": {
								"legends": ["固定资产投资累计增速", "社会消费品零售额累计增速", "出口额累计增速"],
								"series": [{
									"name": "固定资产投资累计增速",
									"type": "bar",
									"stack": null,
									"data": [23.0, 23.5, 16.6, 7.2, 7.4, 15.5, 12.5]
								}, {
									"name": "社会消费品零售额累计增速",
									"type": "bar",
									"stack": null,
									"data": [20.1, 16.2, 14.5, 16.7, 15.0, 17.6, 15.9]
								}, {
									"name": "出口额累计增速",
									"type": "bar",
									"stack": null,
									"data": [27.2, 32.0, 33.9, 31.1, 26.9, 49.9, 4.4]
								}],
								"year": null,
								"yaxis": ["%"],
								"xaxis": ["新会区", "蓬江区", "江海区", "台山市", "开平市", "鹤山市", "恩平市"]
							},
							"title": "区市社消零、出口、固投累计增速"
						},
						"mainIndexrGrowthRate": {
							"data": {
								"column": ["新会", "蓬江", "江海", "开平", "恩平", "鹤山", "台山"],
								"data": [
									["20", "28", "28", "21", "18", "31", "22"],
									["16.0", "16.7", "16.6", "19.3", "16.5", "18.1", "20.1"],
									["4.0", "2.1", "8.7", "1.5", "9.8", "-1.5", "3.6"],
									["23", "23", "16", "7", "12", "15", "7"],
									["17", "15", "20", "14", "15", "16", "16"],
									["27", "32", "33", "26", "4", "49", "31"],
									["-84", "-36", "-39", "-86", "-67", "-58", "-73"]
								]
							},
							"title": "区(市)主要指标同比增速"
						}
					}
				}
			}


      }
    },
    mounted() {
      this.initDOM();
      this.initWin();
      this.changeShow(0);
      // this.changeSubTab(0);
      this.tabActiveIndex = 0;
      this.subTabActiveIndex = 0;
    },
    methods: {
      initWin() {
        macroEconomy({
          type: ""
		  // id:6
        }).then((res) => {
          if (!res.data.status) return false;
          // let data = res.data.data;
		  let data = this.testData.data
          this.Poverty = data;
          console.log("macroEconomy。。。。",res.data.data)
        });
		// macroEconomy().then((res) => {
		// 	console.log(1111111,res)
		//   if (!res.status) return false;
		//   let data = res.data.data;
		//   this.Poverty = data;
		//   console.log("macroEconomy。。。。")
		// });
      },
      initDOM() {
        document.getElementById("top").scrollIntoView(true);
        this.tabRowShow = 0;
        // 初始显示前4个tab页
        this.sliceObject(this.tabListText, 0, 2);
      },

      // 切换tab页时针对每个tab页不同的处理
      changeTab(index) {
        this.tabActiveIndex = index;
        if (this.tabActiveIndex === 0) {
          this.hasSecondTab = false;
        } else if (this.tabActiveIndex === 1) {
          this.hasSecondTab = false;
        } else if (this.tabActiveIndex === 2) {
          this.hasSecondTab = false;
        } else  {
          this.hasSecondTab = false;
        }
      },
      // 点击Tab页
      changeShow(value) {
        document.getElementById("top").scrollIntoView(true);
        this.tabListShow = [];
        this.subTabActiveIndex = this.subTabActiveIndex >=0 ? 0 : this.subTabActiveIndex;
        // 先进行判断当前点击的是在第一行还是在第二行
        if (value > 3) {
          this.tabRowShow = 1;
          this.sliceObject(this.tabListText, 4, this.tabListText.length-1);
        } else {
          this.tabRowShow = 0;
          this.sliceObject(this.tabListText, 0, 2);
        }
        this.changeTab(value);
      },
      // 通过传递的参数，确定当前显示的tab页是哪一部分
      sliceObject(obj, min, max) {
        obj.forEach((item, index) => {
          if (index >= min && index <= max) {
            this.tabListShow.push(item.text);
          }
        })
      },
    }
  }
</script>

