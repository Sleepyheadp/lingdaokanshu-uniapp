<style lang="less" scoped>
  .bannerMarginRight {
   width: 140rpx;
    text-align: center;
    /*margin-right: 108px !important;*/
  }
  .clear-both {
    clear: both;
    content: "";
  }
  .section-sticky {
    height: 1334rpx;
    background-color: #fff;
  }
  .higherTop {
    height: 488rpx;
  }
  .banner {
    background-image: url("../../static/assets/images/h5/marketBanner.png");
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
      float: left;
      margin: 30rpx 12rpx 0 12rpx;
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
  .tab-content {
    width: 750rpx;
    background-color: #ffffff;
  }
  .sub-tab-scroll {
    width: 710rpx;
    height:120rpx;
    overflow: hidden;
    margin-left: 10rpx;
    /*position: relative;*/
  }
  .sub-tab {
    /*position:absolute;*/
    top:20%;
    overflow-x: scroll;
    overflow-y: hidden;
    height: 85rpx;
    margin-top: 22rpx;
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
</style>
<template>
  <div class="section-sticky">
    <div class="content" id="top" :class="{higherTop: hasSecondTab}">
      <div class="banner">
        <p>市场主体</p>
      </div>
      <van-sticky v-bind:z-index="99999999">
        <div class="header" :class="{secondTab: hasSecondTab}">
          <div v-for="(item, index) in tabListShow" v-if="tabRowShow===0" class="tab-item bannerMarginRight" :class="{tabActive: index===tabActiveIndex}" @click="changeShow(index)">
            <span>{{item}}</span>
            <div v-if="index===tabActiveIndex" class="active-line"></div>
          </div>
          <div v-for="(item, index) in tabListShow" v-if="tabRowShow===1" class="tab-item" :class="{tabActive: index===tabActiveIndex-4}" @click="changeShow(index+4)">
            <span>{{item}}</span>
            <div v-if="index===tabActiveIndex-4" class="active-line"></div>
          </div>
          <div class="sub-tab-scroll">
            <div v-if="hasSecondTab" class="sub-tab">
              <div
                v-for="(item,index) in subTabList"
                class="sub-tab-item"
                :class="{subActive: index===subTabActiveIndex}"
                @click="changeSubTab(index)">{{item}}</div>
            </div>
          </div>
        </div>
      </van-sticky>
      <div class="clear-both"></div>
      <div class="tab-content">
        <comprehensive-inf v-if="tabActiveIndex === 0" :tab-data="tabData"></comprehensive-inf>
        <agriculture-inf v-if="tabActiveIndex === 1" :tab-data="tabData"></agriculture-inf>
        <industry-inf v-if="tabActiveIndex === 2" :tab-data="tabData"></industry-inf>
        <service-inf v-if="tabActiveIndex === 3" :tab-data="tabData"></service-inf>
      </div>
    </div>
  </div>
</template>

<script>
  import { getDataByTabName } from "../../api/h5-chart";
  import {remToPx, switchNumToDom, windowScroll,windowScrollByOffset} from '../../libs/util';
  import Notify from "vant/es/notify";
  import comprehensiveInf from './comprehensive'
  import industryInf from './industry'
  import serviceInf from './service'
  import agricultureInf from './agriculture'
  export default {
    name: "index",
    components:{
      comprehensiveInf,
      industryInf,
      serviceInf,
      agricultureInf
    },
    data(){
        return{
          // 是否有二级tab页
          hasSecondTab: false,
          tabOffset:[],
          // 当前显示的tab页
          tabListShow: [],
          // 当前显示的tab页是第几行
          tabRowShow: '',
          tabActiveIndex: '',
          subTabList: [],
          subTabActiveIndex: '',
          tabData: {},
		testData:
		{
			"data": [{
				"data": {
					"industry": {
						"select": [{
							"name": "江门市",
							"id": 0
						}, {
							"name": "蓬江区",
							"id": 1
						}, {
							"name": "江海区",
							"id": 2
						}, {
							"name": "新会区",
							"id": 3
						}, {
							"name": "台山市",
							"id": 4
						}, {
							"name": "开平市",
							"id": 5
						}, {
							"name": "鹤山市",
							"id": 6
						}, {
							"name": "恩平市",
							"id": 7
						}],
						"detail": [
							[{
								"label": "第一产业增加值",
								"value": 186.6,
								"unit": "亿元",
								"year": "2021",
								"increment": 5.1,
								"incrementUnit": "%"
							}, {
								"label": "第二产业增加值",
								"value": 961.96,
								"unit": "亿元",
								"year": "2021",
								"increment": -0.1,
								"incrementUnit": "%"
							}, {
								"label": "第三产业增加值",
								"value": 1122.34,
								"unit": "亿元",
								"year": "2021",
								"increment": 0.8,
								"incrementUnit": "%"
							}],
							[{
								"label": "第一产业增加值",
								"value": 5.42,
								"unit": "亿元",
								"year": "2021",
								"increment": 1.9,
								"incrementUnit": "%"
							}, {
								"label": "第二产业增加值",
								"value": 234.62,
								"unit": "亿元",
								"year": "2021",
								"increment": -0.3,
								"incrementUnit": "%"
							}, {
								"label": "第三产业增加值",
								"value": 484.41,
								"unit": "亿元",
								"year": "2021",
								"increment": 2.6,
								"incrementUnit": "%"
							}],
							[{
								"label": "第一产业增加值",
								"value": 5.35,
								"unit": "亿元",
								"year": "2021",
								"increment": 2.8,
								"incrementUnit": "%"
							}, {
								"label": "第二产业增加值",
								"value": 131.7,
								"unit": "亿元",
								"year": "2021",
								"increment": 3.6,
								"incrementUnit": "%"
							}, {
								"label": "第三产业增加值",
								"value": 111.98,
								"unit": "亿元",
								"year": "2021",
								"increment": 3.4,
								"incrementUnit": "%"
							}],
							[{
								"label": "第一产业增加值",
								"value": 50.91,
								"unit": "亿元",
								"year": "2021",
								"increment": 2.9,
								"incrementUnit": "%"
							}, {
								"label": "第二产业增加值",
								"value": 400.89,
								"unit": "亿元",
								"year": "2021",
								"increment": 4.1,
								"incrementUnit": "%"
							}, {
								"label": "第三产业增加值",
								"value": 360.44,
								"unit": "亿元",
								"year": "2021",
								"increment": 1.3,
								"incrementUnit": "%"
							}],
							[{
								"label": "第一产业增加值",
								"value": 102.84,
								"unit": "亿元",
								"year": "2021",
								"increment": 4.6,
								"incrementUnit": "%"
							}, {
								"label": "第二产业增加值",
								"value": 174.26,
								"unit": "亿元",
								"year": "2021",
								"increment": 2.2,
								"incrementUnit": "%"
							}, {
								"label": "第三产业增加值",
								"value": 180.5,
								"unit": "亿元",
								"year": "2021",
								"increment": 2.0,
								"incrementUnit": "%"
							}],
							[{
								"label": "第一产业增加值",
								"value": 47.87,
								"unit": "亿元",
								"year": "2021",
								"increment": 4.4,
								"incrementUnit": "%"
							}, {
								"label": "第二产业增加值",
								"value": 167.05,
								"unit": "亿元",
								"year": "2021",
								"increment": 2.9,
								"incrementUnit": "%"
							}, {
								"label": "第三产业增加值",
								"value": 176.23,
								"unit": "亿元",
								"year": "2021",
								"increment": 0.2,
								"incrementUnit": "%"
							}],
							[{
								"label": "第一产业增加值",
								"value": 31.07,
								"unit": "亿元",
								"year": "2021",
								"increment": 2.9,
								"incrementUnit": "%"
							}, {
								"label": "第二产业增加值",
								"value": 175.39,
								"unit": "亿元",
								"year": "2021",
								"increment": 5.8,
								"incrementUnit": "%"
							}, {
								"label": "第三产业增加值",
								"value": 168.3,
								"unit": "亿元",
								"year": "2021",
								"increment": 1.2,
								"incrementUnit": "%"
							}],
							[{
								"label": "第一产业增加值",
								"value": 31.03,
								"unit": "亿元",
								"year": "2021",
								"increment": 5.4,
								"incrementUnit": "%"
							}, {
								"label": "第二产业增加值",
								"value": 49.31,
								"unit": "亿元",
								"year": "2021",
								"increment": 0.3,
								"incrementUnit": "%"
							}, {
								"label": "第三产业增加值",
								"value": 111.38,
								"unit": "亿元",
								"year": "2021",
								"increment": 0.5,
								"incrementUnit": "%"
							}]
						],
						"chart": [{
							"legends": ["第一产业增加值", "第二产业增加值", "第三产业增加值"],
							"series": [{
								"name": null,
								"type": "pie",
								"stack": null,
								"data": [{
									"name": "第三产业增加值",
									"unit": "亿元",
									"value": 1122.34
								}, {
									"name": "第二产业增加值",
									"unit": "亿元",
									"value": 961.96
								}, {
									"name": "第一产业增加值",
									"unit": "亿元",
									"value": 186.6
								}]
							}]
						}, {
							"legends": ["第一产业增加值", "第二产业增加值", "第三产业增加值"],
							"series": [{
								"name": null,
								"type": "pie",
								"stack": null,
								"data": [{
									"name": "第三产业增加值",
									"unit": "亿元",
									"value": 484.41
								}, {
									"name": "第二产业增加值",
									"unit": "亿元",
									"value": 234.62
								}, {
									"name": "第一产业增加值",
									"unit": "亿元",
									"value": 5.42
								}]
							}]
						}, {
							"legends": ["第一产业增加值", "第二产业增加值", "第三产业增加值"],
							"series": [{
								"name": null,
								"type": "pie",
								"stack": null,
								"data": [{
									"name": "第二产业增加值",
									"unit": "亿元",
									"value": 131.7
								}, {
									"name": "第三产业增加值",
									"unit": "亿元",
									"value": 111.98
								}, {
									"name": "第一产业增加值",
									"unit": "亿元",
									"value": 5.35
								}]
							}]
						}, {
							"legends": ["第一产业增加值", "第二产业增加值", "第三产业增加值"],
							"series": [{
								"name": null,
								"type": "pie",
								"stack": null,
								"data": [{
									"name": "第二产业增加值",
									"unit": "亿元",
									"value": 400.89
								}, {
									"name": "第三产业增加值",
									"unit": "亿元",
									"value": 360.44
								}, {
									"name": "第一产业增加值",
									"unit": "亿元",
									"value": 50.91
								}]
							}]
						}, {
							"legends": ["第一产业增加值", "第二产业增加值", "第三产业增加值"],
							"series": [{
								"name": null,
								"type": "pie",
								"stack": null,
								"data": [{
									"name": "第三产业增加值",
									"unit": "亿元",
									"value": 180.5
								}, {
									"name": "第二产业增加值",
									"unit": "亿元",
									"value": 174.26
								}, {
									"name": "第一产业增加值",
									"unit": "亿元",
									"value": 102.84
								}]
							}]
						}, {
							"legends": ["第一产业增加值", "第二产业增加值", "第三产业增加值"],
							"series": [{
								"name": null,
								"type": "pie",
								"stack": null,
								"data": [{
									"name": "第三产业增加值",
									"unit": "亿元",
									"value": 176.23
								}, {
									"name": "第二产业增加值",
									"unit": "亿元",
									"value": 167.05
								}, {
									"name": "第一产业增加值",
									"unit": "亿元",
									"value": 47.87
								}]
							}]
						}, {
							"legends": ["第一产业增加值", "第二产业增加值", "第三产业增加值"],
							"series": [{
								"name": null,
								"type": "pie",
								"stack": null,
								"data": [{
									"name": "第二产业增加值",
									"unit": "亿元",
									"value": 175.39
								}, {
									"name": "第三产业增加值",
									"unit": "亿元",
									"value": 168.3
								}, {
									"name": "第一产业增加值",
									"unit": "亿元",
									"value": 31.07
								}]
							}]
						}, {
							"legends": ["第一产业增加值", "第二产业增加值", "第三产业增加值"],
							"series": [{
								"name": null,
								"type": "pie",
								"stack": null,
								"data": [{
									"name": "第三产业增加值",
									"unit": "亿元",
									"value": 111.38
								}, {
									"name": "第二产业增加值",
									"unit": "亿元",
									"value": 49.31
								}, {
									"name": "第一产业增加值",
									"unit": "亿元",
									"value": 31.03
								}]
							}]
						}]
					}
				},
				"name": "三次产业"
			}, {
				"data": {
					"business": {
						"detail": "",
						"chart": [{
							"legends": ["2021", "2021", "增速"],
							"series": [{
								"name": "2021",
								"type": "bar",
								"stack": null,
								"data": [1253.5, 535.82, 199.9, 191.99, 163.78, 135.8, 99.5, 71.89,
									38.09
								]
							}, {
								"name": "2021",
								"type": "bar",
								"stack": null,
								"data": [1329.89, 624.93, 209.18, 206.92, 165.79, 146.61, 97.95, 78.69,
									40.44
								]
							}, {
								"name": "增速",
								"type": "line",
								"stack": null,
								"data": [6.1, 16.6, 4.6, 7.8, 1.2, 8.0, -1.6, 9.5, 6.2]
							}],
							"year": null,
							"xaxis": ["工业", "其他服务业", "批发和零售业", "农林牧渔业", "房地产业", "金融业", "交通运输、仓库和邮政业", "建筑业",
								"住宿和餐饮业"
							],
							"yaxis": ["亿元", "亿元", "%"]
						}, {
							"legends": ["农林牧渔业", "工业", "建筑业", "批发和零售业", "交通运输、仓库和邮政业", "住宿和餐饮业", "金融业", "房地产业",
								"其他服务业"
							],
							"series": [{
								"name": null,
								"type": "pie",
								"stack": null,
								"data": [{
									"name": "工业",
									"unit": "亿元",
									"value": 1329.89
								}, {
									"name": "其他服务业",
									"unit": "亿元",
									"value": 624.93
								}, {
									"name": "批发和零售业",
									"unit": "亿元",
									"value": 209.18
								}, {
									"name": "农林牧渔业",
									"unit": "亿元",
									"value": 206.92
								}, {
									"name": "房地产业",
									"unit": "亿元",
									"value": 165.79
								}, {
									"name": "金融业",
									"unit": "亿元",
									"value": 146.61
								}, {
									"name": "交通运输、仓库和邮政业",
									"unit": "亿元",
									"value": 97.95
								}, {
									"name": "建筑业",
									"unit": "亿元",
									"value": 78.69
								}, {
									"name": "住宿和餐饮业",
									"unit": "亿元",
									"value": 40.44
								}]
							}]
						}]
					}
				},
				"name": "分行业"
			}]
		},
		testData2:
		{
			"data": [{
				"data": {
					"gdp": {
						"detail": [
							[{
								"label": "农业总产值",
								"value": 459.25,
								"unit": "亿元",
								"year": "2021",
								"increment": 4.9,
								"incrementUnit": "%"
							}, {
								"label": "种植业产值",
								"value": 143.29,
								"unit": "亿元",
								"year": "2021",
								"increment": 6.8,
								"incrementUnit": "%"
							}, {
								"label": "林业产值",
								"value": 9.39,
								"unit": "亿元",
								"year": "2021",
								"increment": -6.0,
								"incrementUnit": "%"
							}, {
								"label": "牧业产值",
								"value": 89.5,
								"unit": "亿元",
								"year": "2021",
								"increment": 5.8,
								"incrementUnit": "%"
							}, {
								"label": "渔业产值",
								"value": 202.81,
								"unit": "亿元",
								"year": "2021",
								"increment": 3.1,
								"incrementUnit": "%"
							}],
							[{
								"label": "农业总产值",
								"value": 11.12,
								"unit": "亿元",
								"year": "2021",
								"increment": 3.2,
								"incrementUnit": "%"
							}, {
								"label": "种植业产值",
								"value": 3.03,
								"unit": "亿元",
								"year": "2021",
								"increment": -1.0,
								"incrementUnit": "%"
							}, {
								"label": "林业产值",
								"value": 0.22,
								"unit": "亿元",
								"year": "2021",
								"increment": -22.9,
								"incrementUnit": "%"
							}, {
								"label": "牧业产值",
								"value": 1.87,
								"unit": "亿元",
								"year": "2021",
								"increment": -6.1,
								"incrementUnit": "%"
							}, {
								"label": "渔业产值",
								"value": 4.44,
								"unit": "亿元",
								"year": "2021",
								"increment": 6.8,
								"incrementUnit": "%"
							}],
							[{
								"label": "农业总产值",
								"value": 8.89,
								"unit": "亿元",
								"year": "2021",
								"increment": 4.4,
								"incrementUnit": "%"
							}, {
								"label": "种植业产值",
								"value": 2.88,
								"unit": "亿元",
								"year": "2021",
								"increment": 9.6,
								"incrementUnit": "%"
							}, {
								"label": "林业产值",
								"value": 0.02,
								"unit": "亿元",
								"year": "2021",
								"increment": -32.0,
								"incrementUnit": "%"
							}, {
								"label": "牧业产值",
								"value": 0.14,
								"unit": "亿元",
								"year": "2021",
								"increment": -84.8,
								"incrementUnit": "%"
							}, {
								"label": "渔业产值",
								"value": 0.14,
								"unit": "亿元",
								"year": "2021",
								"increment": 18.7,
								"incrementUnit": "%"
							}],
							[{
								"label": "农业总产值",
								"value": 87.75,
								"unit": "亿元",
								"year": "2021",
								"increment": 5.5,
								"incrementUnit": "%"
							}, {
								"label": "种植业产值",
								"value": 24.72,
								"unit": "亿元",
								"year": "2021",
								"increment": 2.4,
								"incrementUnit": "%"
							}, {
								"label": "林业产值",
								"value": 0.97,
								"unit": "亿元",
								"year": "2021",
								"increment": -23.0,
								"incrementUnit": "%"
							}, {
								"label": "牧业产值",
								"value": 16.07,
								"unit": "亿元",
								"year": "2021",
								"increment": -8.3,
								"incrementUnit": "%"
							}, {
								"label": "渔业产值",
								"value": 43.54,
								"unit": "亿元",
								"year": "2021",
								"increment": 12.0,
								"incrementUnit": "%"
							}],
							[{
								"label": "农业总产值",
								"value": 178.04,
								"unit": "亿元",
								"year": "2021",
								"increment": 0.8,
								"incrementUnit": "%"
							}, {
								"label": "种植业产值",
								"value": 42.03,
								"unit": "亿元",
								"year": "2021",
								"increment": 6.8,
								"incrementUnit": "%"
							}, {
								"label": "林业产值",
								"value": 2.35,
								"unit": "亿元",
								"year": "2021",
								"increment": -2.7,
								"incrementUnit": "%"
							}, {
								"label": "牧业产值",
								"value": 12.88,
								"unit": "亿元",
								"year": "2021",
								"increment": 9.2,
								"incrementUnit": "%"
							}, {
								"label": "渔业产值",
								"value": 118.83,
								"unit": "亿元",
								"year": "2021",
								"increment": -3.1,
								"incrementUnit": "%"
							}],
							[{
								"label": "农业总产值",
								"value": 77.97,
								"unit": "亿元",
								"year": "2021",
								"increment": 5.8,
								"incrementUnit": "%"
							}, {
								"label": "种植业产值",
								"value": 29.9,
								"unit": "亿元",
								"year": "2021",
								"increment": -0.8,
								"incrementUnit": "%"
							}, {
								"label": "林业产值",
								"value": 2.69,
								"unit": "亿元",
								"year": "2021",
								"increment": 4.2,
								"incrementUnit": "%"
							}, {
								"label": "牧业产值",
								"value": 29.09,
								"unit": "亿元",
								"year": "2021",
								"increment": 17.6,
								"incrementUnit": "%"
							}, {
								"label": "渔业产值",
								"value": 9.88,
								"unit": "亿元",
								"year": "2021",
								"increment": 0.4,
								"incrementUnit": "%"
							}],
							[{
								"label": "农业总产值",
								"value": 49.84,
								"unit": "亿元",
								"year": "2021",
								"increment": 8.7,
								"incrementUnit": "%"
							}, {
								"label": "种植业产值",
								"value": 18.2,
								"unit": "亿元",
								"year": "2021",
								"increment": 7.3,
								"incrementUnit": "%"
							}, {
								"label": "林业产值",
								"value": 1.79,
								"unit": "亿元",
								"year": "2021",
								"increment": -1.0,
								"incrementUnit": "%"
							}, {
								"label": "牧业产值",
								"value": 17.11,
								"unit": "亿元",
								"year": "2021",
								"increment": 7.1,
								"incrementUnit": "%"
							}, {
								"label": "渔业产值",
								"value": 11.73,
								"unit": "亿元",
								"year": "2021",
								"increment": 16.9,
								"incrementUnit": "%"
							}],
							[{
								"label": "农业总产值",
								"value": 45.64,
								"unit": "亿元",
								"year": "2021",
								"increment": 13.5,
								"incrementUnit": "%"
							}, {
								"label": "种植业产值",
								"value": 22.53,
								"unit": "亿元",
								"year": "2021",
								"increment": 22.8,
								"incrementUnit": "%"
							}, {
								"label": "林业产值",
								"value": 1.34,
								"unit": "亿元",
								"year": "2021",
								"increment": -17.9,
								"incrementUnit": "%"
							}, {
								"label": "牧业产值",
								"value": 12.33,
								"unit": "亿元",
								"year": "2021",
								"increment": 6.1,
								"incrementUnit": "%"
							}, {
								"label": "渔业产值",
								"value": 8.7,
								"unit": "亿元",
								"year": "2021",
								"increment": 4.9,
								"incrementUnit": "%"
							}]
						],
						"chart": [
							[{
								"mapData": [{
									"name": "台山市",
									"unit": "亿元",
									"value": 178.04
								}, {
									"name": "新会区",
									"unit": "亿元",
									"value": 87.75
								}, {
									"name": "开平市",
									"unit": "亿元",
									"value": 77.97
								}, {
									"name": "鹤山市",
									"unit": "亿元",
									"value": 49.84
								}, {
									"name": "恩平市",
									"unit": "亿元",
									"value": 45.64
								}, {
									"name": "蓬江区",
									"unit": "亿元",
									"value": 11.12
								}, {
									"name": "江海区",
									"unit": "亿元",
									"value": 8.89
								}]
							}],
							[{
								"mapData": [{
									"name": "台山市",
									"unit": "亿元",
									"value": 42.03
								}, {
									"name": "开平市",
									"unit": "亿元",
									"value": 29.9
								}, {
									"name": "新会区",
									"unit": "亿元",
									"value": 24.72
								}, {
									"name": "恩平市",
									"unit": "亿元",
									"value": 22.53
								}, {
									"name": "鹤山市",
									"unit": "亿元",
									"value": 18.2
								}, {
									"name": "蓬江区",
									"unit": "亿元",
									"value": 3.03
								}, {
									"name": "江海区",
									"unit": "亿元",
									"value": 2.88
								}]
							}],
							[{
								"mapData": [{
									"name": "开平市",
									"unit": "亿元",
									"value": 2.69
								}, {
									"name": "台山市",
									"unit": "亿元",
									"value": 2.35
								}, {
									"name": "鹤山市",
									"unit": "亿元",
									"value": 1.79
								}, {
									"name": "恩平市",
									"unit": "亿元",
									"value": 1.34
								}, {
									"name": "新会区",
									"unit": "亿元",
									"value": 0.97
								}, {
									"name": "蓬江区",
									"unit": "亿元",
									"value": 0.22
								}, {
									"name": "江海区",
									"unit": "亿元",
									"value": 0.02
								}]
							}],
							[{
								"mapData": [{
									"name": "开平市",
									"unit": "亿元",
									"value": 29.09
								}, {
									"name": "鹤山市",
									"unit": "亿元",
									"value": 17.11
								}, {
									"name": "新会区",
									"unit": "亿元",
									"value": 16.07
								}, {
									"name": "台山市",
									"unit": "亿元",
									"value": 12.88
								}, {
									"name": "恩平市",
									"unit": "亿元",
									"value": 12.33
								}, {
									"name": "蓬江区",
									"unit": "亿元",
									"value": 1.87
								}, {
									"name": "江海区",
									"unit": "亿元",
									"value": 0.14
								}]
							}],
							[{
								"mapData": [{
									"name": "台山市",
									"unit": "亿元",
									"value": 118.83
								}, {
									"name": "新会区",
									"unit": "亿元",
									"value": 43.54
								}, {
									"name": "鹤山市",
									"unit": "亿元",
									"value": 11.73
								}, {
									"name": "开平市",
									"unit": "亿元",
									"value": 9.88
								}, {
									"name": "恩平市",
									"unit": "亿元",
									"value": 8.7
								}, {
									"name": "蓬江区",
									"unit": "亿元",
									"value": 4.44
								}, {
									"name": "江海区",
									"unit": "亿元",
									"value": 0.14
								}]
							}]
						]
					}
				},
				"name": "农业总产值"
			}, {
				"data": {
					"quality": {
						"detail": [{
							"label": "粮食产量",
							"value": 93.22,
							"unit": "万吨",
							"year": "2021"
						}, {
							"label": "蔬菜产量",
							"value": 162.38,
							"unit": "万吨",
							"year": "2021"
						}, {
							"label": "肉类产量",
							"value": 28.89,
							"unit": "万吨",
							"year": "2021"
						}, {
							"label": "水果产量",
							"value": 38.07,
							"unit": "万吨",
							"year": "2021"
						}, {
							"label": "水产品产量",
							"value": 79.2,
							"unit": "万吨",
							"year": "2021"
						}],
						"chart": [
							[{
								"legends": ["粮食产量", "粮食产量增速"],
								"series": [{
									"name": "粮食产量",
									"type": "bar",
									"stack": null,
									"data": [89.32, 90.02, 91.14, 88.81, 93.22]
								}, {
									"name": "粮食产量增速",
									"type": "line",
									"stack": null,
									"data": [-0.8, 0.8, 1.2, -2.6, 5.0]
								}],
								"year": null,
								"xaxis": ["2015", "2016", "2017", "2018", "2021"],
								"yaxis": ["万吨", "%"]
							}, {
								"legends": ["蔬菜产量", "蔬菜产量增速"],
								"series": [{
									"name": "蔬菜产量",
									"type": "bar",
									"stack": null,
									"data": [110.52, 137.6, 142.4, 150.6, 162.38]
								}, {
									"name": "蔬菜产量增速",
									"type": "line",
									"stack": null,
									"data": [-1.9, 24.5, 3.49, 5.758, 7.8]
								}],
								"year": null,
								"xaxis": ["2015", "2016", "2017", "2018", "2021"],
								"yaxis": ["万吨", "%"]
							}, {
								"legends": ["肉类产量", "肉类产量增速"],
								"series": [{
									"name": "肉类产量",
									"type": "bar",
									"stack": null,
									"data": [28.1, 28.43, 28.07, 28.05, 28.89]
								}, {
									"name": "肉类产量增速",
									"type": "line",
									"stack": null,
									"data": [2.5, 1.17, -1.27, -0.07, 3.0]
								}],
								"year": null,
								"xaxis": ["2015", "2016", "2017", "2018", "2021"],
								"yaxis": ["万吨", "%"]
							}, {
								"legends": ["水果产量", "水果产量增速"],
								"series": [{
									"name": "水果产量",
									"type": "bar",
									"stack": null,
									"data": [23.56, 25.75, 27.44, 35.52, 38.07]
								}, {
									"name": "水果产量增速",
									"type": "line",
									"stack": null,
									"data": [2.26, 9.3, 6.56, 29.44, 7.2]
								}],
								"year": null,
								"xaxis": ["2015", "2016", "2017", "2018", "2021"],
								"yaxis": ["万吨", "%"]
							}, {
								"legends": ["水产品产量", "水产品产量增速"],
								"series": [{
									"name": "水产品产量",
									"type": "bar",
									"stack": null,
									"data": [77.1, 74.0, 75.39, 76.57, 79.2]
								}, {
									"name": "水产品产量增速",
									"type": "line",
									"stack": null,
									"data": [3.37, -4.0, 1.88, 1.18, 3.4]
								}],
								"year": null,
								"xaxis": ["2015", "2016", "2017", "2018", "2021"],
								"yaxis": ["万吨", "%"]
							}],
							[{
								"legends": ["稻谷产量", "玉米产量", "薯类产量"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "稻谷产量",
										"unit": "万吨",
										"value": 87.05
									}, {
										"name": "薯类产量",
										"unit": "万吨",
										"value": 17.11
									}, {
										"name": "玉米产量",
										"unit": "万吨",
										"value": 1.8
									}]
								}]
							}, {
								"legends": ["果用瓜类"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "果用瓜类",
										"unit": "万吨",
										"value": 3.94
									}]
								}]
							}, {
								"legends": ["牛肉", "羊肉", "猪肉", "禽肉", "兔肉"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "猪肉",
										"unit": "万吨",
										"value": 14.8904
									}, {
										"name": "禽肉",
										"unit": "万吨",
										"value": 13.7019
									}, {
										"name": "牛肉",
										"unit": "万吨",
										"value": 0.0473
									}, {
										"name": "羊肉",
										"unit": "万吨",
										"value": 0.0301
									}, {
										"name": "兔肉",
										"unit": "万吨",
										"value": 0.0126
									}]
								}]
							}, {
								"legends": ["柑、桔、橙", "香蕉", "菠萝", "荔枝", "龙眼", "番石榴", "芒果"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "柑、桔、橙",
										"unit": "万吨",
										"value": 16.3978
									}, {
										"name": "香蕉",
										"unit": "万吨",
										"value": 10.0218
									}, {
										"name": "龙眼",
										"unit": "万吨",
										"value": 2.4071
									}, {
										"name": "荔枝",
										"unit": "万吨",
										"value": 2.2281
									}, {
										"name": "番石榴",
										"unit": "万吨",
										"value": 1.1983
									}, {
										"name": "芒果",
										"unit": "万吨",
										"value": 0.1788
									}, {
										"name": "菠萝",
										"unit": "万吨",
										"value": 0.0492
									}]
								}]
							}, {
								"legends": ["淡水产品"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "淡水产品",
										"unit": "万吨",
										"value": 48.882
									}]
								}]
							}]
						]
					}
				},
				"name": "农产品产量"
			}, {
				"data": {
					"area": {
						"detail": [{
							"label": "农作物播种总面积",
							"value": 458.7474,
							"unit": "万亩",
							"year": "2021",
							"increment": 6.76,
							"incrementUnit": "%"
						}, {
							"label": "粮食作物播种总面积",
							"value": 271.8,
							"unit": "万亩",
							"year": "2021",
							"increment": 3.1,
							"incrementUnit": "%"
						}, {
							"label": "蔬菜种植面积",
							"value": 110.02,
							"unit": "万亩",
							"year": "2021",
							"increment": 5.1,
							"incrementUnit": "%"
						}, {
							"label": "糖蔗种植面积",
							"value": 2.62,
							"unit": "万亩",
							"year": "2021",
							"increment": -4.3,
							"incrementUnit": "%"
						}, {
							"label": "油料种植面积",
							"value": 18.56,
							"unit": "万亩",
							"year": "2021",
							"increment": 4.5,
							"incrementUnit": "%"
						}],
						"chart": {
							"legends": ["粮食作物播种总面积", "蔬菜种植面积", "糖蔗种植面积", "油料种植面积", "其他农作物播种总面积"],
							"series": [{
								"name": null,
								"type": "pie",
								"stack": null,
								"data": [{
									"name": "粮食作物播种总面积",
									"unit": "万亩",
									"value": 271.8
								}, {
									"name": "蔬菜种植面积",
									"unit": "万亩",
									"value": 110.02
								}, {
									"name": "其他农作物播种总面积",
									"unit": "万亩",
									"value": 26.69
								}, {
									"name": "油料种植面积",
									"unit": "万亩",
									"value": 18.56
								}, {
									"name": "糖蔗种植面积",
									"unit": "万亩",
									"value": 2.62
								}]
							}]
						}
					}
				},
				"name": "农作物播种面积"
			}]
		},
		testData3:
		{
			"data": [{
				"data": {
					"gdp": {
						"select": [{
							"name": "江门市",
							"id": 0
						}, {
							"name": "蓬江区",
							"id": 1
						}, {
							"name": "江海区",
							"id": 2
						}, {
							"name": "新会区",
							"id": 3
						}, {
							"name": "台山市",
							"id": 4
						}, {
							"name": "开平市",
							"id": 5
						}, {
							"name": "鹤山市",
							"id": 6
						}, {
							"name": "恩平市",
							"id": 7
						}],
						"detail": [
							[{
								"label": "工业总产值",
								"value": 4950.3878,
								"unit": "亿元",
								"year": "2021",
								"increment": -2.44,
								"incrementUnit": "%"
							}, {
								"label": "规模以上工业总产值",
								"value": 4246.6364,
								"unit": "亿元",
								"year": "2021",
								"increment": -3.69,
								"incrementUnit": "%"
							}, {
								"label": "规模以下工业总产值",
								"value": 703.7514,
								"unit": "亿元",
								"year": "2021",
								"increment": 5.38,
								"incrementUnit": "%"
							}],
							[{
								"label": "工业总产值",
								"value": 1054.6967,
								"unit": "亿元",
								"year": "2021",
								"increment": -1.18,
								"incrementUnit": "%"
							}, {
								"label": "规模以上工业总产值",
								"value": 962.6456,
								"unit": "亿元",
								"year": "2021",
								"increment": -1.76,
								"incrementUnit": "%"
							}, {
								"label": "规模以下工业总产值",
								"value": 92.0511,
								"unit": "亿元",
								"year": "2021",
								"increment": 5.38,
								"incrementUnit": "%"
							}],
							[{
								"label": "工业总产值",
								"value": 517.511,
								"unit": "亿元",
								"year": "2021",
								"increment": -3.25,
								"incrementUnit": "%"
							}, {
								"label": "规模以上工业总产值",
								"value": 489.0351,
								"unit": "亿元",
								"year": "2021",
								"increment": -3.71,
								"incrementUnit": "%"
							}, {
								"label": "规模以下工业总产值",
								"value": 28.4759,
								"unit": "亿元",
								"year": "2021",
								"increment": 5.38,
								"incrementUnit": "%"
							}],
							[{
								"label": "工业总产值",
								"value": 1241.1724,
								"unit": "亿元",
								"year": "2021",
								"increment": -2.34,
								"incrementUnit": "%"
							}, {
								"label": "规模以上工业总产值",
								"value": 1108.1793,
								"unit": "亿元",
								"year": "2021",
								"increment": -3.2,
								"incrementUnit": "%"
							}, {
								"label": "规模以下工业总产值",
								"value": 132.9931,
								"unit": "亿元",
								"year": "2021",
								"increment": 5.38,
								"incrementUnit": "%"
							}],
							[{
								"label": "工业总产值",
								"value": 689.8896,
								"unit": "亿元",
								"year": "2021",
								"increment": -3.05,
								"incrementUnit": "%"
							}, {
								"label": "规模以上工业总产值",
								"value": 576.6641,
								"unit": "亿元",
								"year": "2021",
								"increment": -4.55,
								"incrementUnit": "%"
							}, {
								"label": "规模以下工业总产值",
								"value": 113.2256,
								"unit": "亿元",
								"year": "2021",
								"increment": 5.38,
								"incrementUnit": "%"
							}],
							[{
								"label": "工业总产值",
								"value": 548.0391,
								"unit": "亿元",
								"year": "2021",
								"increment": -16.22,
								"incrementUnit": "%"
							}, {
								"label": "规模以上工业总产值",
								"value": 420.7538,
								"unit": "亿元",
								"year": "2021",
								"increment": -21.11,
								"incrementUnit": "%"
							}, {
								"label": "规模以下工业总产值",
								"value": 127.2853,
								"unit": "亿元",
								"year": "2021",
								"increment": 5.38,
								"incrementUnit": "%"
							}],
							[{
								"label": "工业总产值",
								"value": 659.668,
								"unit": "亿元",
								"year": "2021",
								"increment": 10.67,
								"incrementUnit": "%"
							}, {
								"label": "规模以上工业总产值",
								"value": 538.1538,
								"unit": "亿元",
								"year": "2021",
								"increment": 11.94,
								"incrementUnit": "%"
							}, {
								"label": "规模以下工业总产值",
								"value": 121.5142,
								"unit": "亿元",
								"year": "2021",
								"increment": 5.38,
								"incrementUnit": "%"
							}],
							[{
								"label": "工业总产值",
								"value": 239.4109,
								"unit": "亿元",
								"year": "2021",
								"increment": -0.06,
								"incrementUnit": "%"
							}, {
								"label": "规模以上工业总产值",
								"value": 151.2047,
								"unit": "亿元",
								"year": "2021",
								"increment": -2.98,
								"incrementUnit": "%"
							}, {
								"label": "规模以下工业总产值",
								"value": 88.2062,
								"unit": "亿元",
								"year": "2021",
								"increment": 5.38,
								"incrementUnit": "%"
							}]
						],
						"chart": [
							[{
								"legends": ["规模以上工业增加值", "规模以上工业增加值增速"],
								"series": [{
									"name": "规模以上工业增加值",
									"type": "bar",
									"stack": null,
									"data": [847.29, 965.74, 1065.8, 991.68, 1085.24, 1101.5186]
								}, {
									"name": "规模以上工业增加值增速",
									"type": "line",
									"stack": null,
									"data": [11.0, 8.0, 7.0, 10.0, 9.4, 1.5]
								}],
								"year": null,
								"xaxis": ["2014", "2015", "2016", "2017", "2018", "2021"],
								"yaxis": ["亿元", "%"]
							}, {
								"legends": ["规模以上工业增加值", "规模以上工业增加值增速"],
								"series": [{
									"name": "规模以上工业增加值",
									"type": "bar",
									"stack": null,
									"data": [196.9604, 234.9858, 282.401, 243.3806, 228.2822, 231.0216]
								}, {
									"name": "规模以上工业增加值增速",
									"type": "line",
									"stack": null,
									"data": [32.68, 19.31, 20.18, -13.8, -6.2, 0.1]
								}],
								"year": null,
								"xaxis": ["2014", "2015", "2016", "2017", "2018", "2021"],
								"yaxis": ["亿元", "%"]
							}, {
								"legends": ["规模以上工业增加值", "规模以上工业增加值增速"],
								"series": [{
									"name": "规模以上工业增加值",
									"type": "bar",
									"stack": null,
									"data": [70.0063, 73.1552, 83.514, 98.9667, 112.3771, 120.9178]
								}, {
									"name": "规模以上工业增加值增速",
									"type": "line",
									"stack": null,
									"data": [15.09, 4.5, 14.16, 18.5, 13.55, 6.6]
								}],
								"year": null,
								"xaxis": ["2014", "2015", "2016", "2017", "2018", "2021"],
								"yaxis": ["亿元", "%"]
							}, {
								"legends": ["规模以上工业增加值", "规模以上工业增加值增速"],
								"series": [{
									"name": "规模以上工业增加值",
									"type": "bar",
									"stack": null,
									"data": [232.7956, 251.9153, 283.2729, 302.2759, 322.7931, 282.13]
								}, {
									"name": "规模以上工业增加值增速",
									"type": "line",
									"stack": null,
									"data": [30.96, 8.21, 12.45, 6.71, 6.79, 9.3]
								}],
								"year": null,
								"xaxis": ["2014", "2015", "2016", "2017", "2018", "2021"],
								"yaxis": ["亿元", "%"]
							}, {
								"legends": ["规模以上工业增加值", "规模以上工业增加值增速"],
								"series": [{
									"name": "规模以上工业增加值",
									"type": "bar",
									"stack": null,
									"data": [116.5356, 158.8218, 154.278, 118.7824, 148.2397, 156.6894]
								}, {
									"name": "规模以上工业增加值增速",
									"type": "line",
									"stack": null,
									"data": [2.36, 36.29, -2.86, -23.0, 24.8, 4.6]
								}],
								"year": null,
								"xaxis": ["2014", "2015", "2016", "2017", "2018", "2021"],
								"yaxis": ["亿元", "%"]
							}, {
								"legends": ["规模以上工业增加值", "规模以上工业增加值增速"],
								"series": [{
									"name": "规模以上工业增加值",
									"type": "bar",
									"stack": null,
									"data": [96.781, 100.1144, 110.2607, 90.5112, 114.4347, 95.8962]
								}, {
									"name": "规模以上工业增加值增速",
									"type": "line",
									"stack": null,
									"data": [25.57, 3.44, 10.13, -17.91, 26.43, -16.2]
								}],
								"year": null,
								"xaxis": ["2014", "2015", "2016", "2017", "2018", "2021"],
								"yaxis": ["亿元", "%"]
							}, {
								"legends": ["规模以上工业增加值", "规模以上工业增加值增速"],
								"series": [{
									"name": "规模以上工业增加值",
									"type": "bar",
									"stack": null,
									"data": [102.2219, 113.5452, 118.4378, 106.7316, 132.8583, 147.86]
								}, {
									"name": "规模以上工业增加值增速",
									"type": "line",
									"stack": null,
									"data": [12.32, 11.08, 4.31, -9.88, 24.48, 6.9]
								}],
								"year": null,
								"xaxis": ["2014", "2015", "2016", "2017", "2018", "2021"],
								"yaxis": ["亿元", "%"]
							}, {
								"legends": ["规模以上工业增加值", "规模以上工业增加值增速"],
								"series": [{
									"name": "规模以上工业增加值",
									"type": "bar",
									"stack": null,
									"data": [31.9846, 33.207, 33.6316, 31.0311, 36.2411, 38.9954]
								}, {
									"name": "规模以上工业增加值增速",
									"type": "line",
									"stack": null,
									"data": [14.44, 3.82, 1.28, -7.73, 16.79, 7.6]
								}],
								"year": null,
								"xaxis": ["2014", "2015", "2016", "2017", "2018", "2021"],
								"yaxis": ["亿元", "%"]
							}],
							[{
								"legends": ["高技术产业", "先进制造业", "其他产业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "其他产业",
										"unit": "%",
										"value": 49.4
									}, {
										"name": "先进制造业",
										"unit": "%",
										"value": 39.6
									}, {
										"name": "高技术产业",
										"unit": "%",
										"value": 11.0
									}]
								}]
							}, {
								"legends": ["高技术产业", "先进制造业", "其他产业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "其他产业",
										"unit": "%",
										"value": 59.27
									}, {
										"name": "先进制造业",
										"unit": "%",
										"value": 31.68
									}, {
										"name": "高技术产业",
										"unit": "%",
										"value": 9.05
									}]
								}]
							}, {
								"legends": ["高技术产业", "先进制造业", "其他产业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "先进制造业",
										"unit": "%",
										"value": 73.3
									}, {
										"name": "高技术产业",
										"unit": "%",
										"value": 38.5
									}, {
										"name": "其他产业",
										"unit": "%",
										"value": 12.4
									}]
								}]
							}, {
								"legends": ["高技术产业", "先进制造业", "其他产业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "其他产业",
										"unit": "%",
										"value": 79.76
									}, {
										"name": "先进制造业",
										"unit": "%",
										"value": 17.7
									}, {
										"name": "高技术产业",
										"unit": "%",
										"value": 2.54
									}]
								}]
							}, {
								"legends": ["高技术产业", "先进制造业", "其他产业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "其他产业",
										"unit": "%",
										"value": 51.1
									}, {
										"name": "先进制造业",
										"unit": "%",
										"value": 26.5
									}, {
										"name": "高技术产业",
										"unit": "%",
										"value": 22.4
									}]
								}]
							}, {
								"legends": ["高技术产业", "先进制造业", "其他产业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "其他产业",
										"unit": "%",
										"value": 60.1
									}, {
										"name": "先进制造业",
										"unit": "%",
										"value": 22.4
									}, {
										"name": "高技术产业",
										"unit": "%",
										"value": 17.5
									}]
								}]
							}, {
								"legends": ["高技术产业", "先进制造业", "其他产业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "其他产业",
										"unit": "%",
										"value": 55.0
									}, {
										"name": "高技术产业",
										"unit": "%",
										"value": 25.4
									}, {
										"name": "先进制造业",
										"unit": "%",
										"value": 19.6
									}]
								}]
							}, {
								"legends": ["高技术产业", "先进制造业", "其他产业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "其他产业",
										"unit": "%",
										"value": 51.1
									}, {
										"name": "先进制造业",
										"unit": "%",
										"value": 36.5
									}, {
										"name": "高技术产业",
										"unit": "%",
										"value": 12.4
									}]
								}]
							}]
						]
					}
				},
				"name": "工业总产值"
			}, {
				"data": {
					"company": {
						"select": [{
							"name": "江门市",
							"id": 0
						}, {
							"name": "蓬江区",
							"id": 1
						}, {
							"name": "江海区",
							"id": 2
						}, {
							"name": "新会区",
							"id": 3
						}, {
							"name": "台山市",
							"id": 4
						}, {
							"name": "开平市",
							"id": 5
						}, {
							"name": "鹤山市",
							"id": 6
						}, {
							"name": "恩平市",
							"id": 7
						}],
						"detail": [
							[{
								"label": "全社会工业企业数",
								"value": 41071.0,
								"unit": "个",
								"year": "2021",
								"increment": -11.22,
								"incrementUnit": "%"
							}, {
								"label": "规模以上工业企业数",
								"value": 2458.0,
								"unit": "个",
								"year": "2021",
								"increment": 6.87,
								"incrementUnit": "%"
							}, {
								"label": "规模以下工业企业数",
								"value": 38613.0,
								"unit": "个",
								"year": "2021",
								"increment": -12.17,
								"incrementUnit": "%"
							}],
							[{
								"label": "全社会工业企业数",
								"value": 9942.0,
								"unit": "个",
								"year": "2021",
								"increment": -8.3,
								"incrementUnit": "%"
							}, {
								"label": "规模以上工业企业数",
								"value": 491.0,
								"unit": "个",
								"year": "2021",
								"increment": 5.59,
								"incrementUnit": "%"
							}, {
								"label": "规模以下工业企业数",
								"value": 9451.0,
								"unit": "个",
								"year": "2021",
								"increment": -10.4,
								"incrementUnit": "%"
							}],
							[{
								"label": "全社会工业企业数",
								"value": 4894.0,
								"unit": "个",
								"year": "2021",
								"increment": -5.6,
								"incrementUnit": "%"
							}, {
								"label": "规模以上工业企业数",
								"value": 306.0,
								"unit": "个",
								"year": "2021",
								"increment": 33.62,
								"incrementUnit": "%"
							}, {
								"label": "规模以下工业企业数",
								"value": 4588.0,
								"unit": "个",
								"year": "2021",
								"increment": -7.8,
								"incrementUnit": "%"
							}],
							[{
								"label": "全社会工业企业数",
								"value": 10094.0,
								"unit": "个",
								"year": "2021",
								"increment": -7.5,
								"incrementUnit": "%"
							}, {
								"label": "规模以上工业企业数",
								"value": 557.0,
								"unit": "个",
								"year": "2021",
								"increment": 18.0,
								"incrementUnit": "%"
							}, {
								"label": "规模以下工业企业数",
								"value": 9537.0,
								"unit": "个",
								"year": "2021",
								"increment": -13.2,
								"incrementUnit": "%"
							}],
							[{
								"label": "全社会工业企业数",
								"value": 4662.0,
								"unit": "个",
								"year": "2021",
								"increment": -5.4,
								"incrementUnit": "%"
							}, {
								"label": "规模以上工业企业数",
								"value": 239.0,
								"unit": "个",
								"year": "2021",
								"increment": 0.46,
								"incrementUnit": "%"
							}, {
								"label": "规模以下工业企业数",
								"value": 4423.0,
								"unit": "个",
								"year": "2021",
								"increment": 0.75,
								"incrementUnit": "%"
							}],
							[{
								"label": "全社会工业企业数",
								"value": 6224.0,
								"unit": "个",
								"year": "2021",
								"increment": -5.24,
								"incrementUnit": "%"
							}, {
								"label": "规模以上工业企业数",
								"value": 323.0,
								"unit": "个",
								"year": "2021",
								"increment": 1.39,
								"incrementUnit": "%"
							}, {
								"label": "规模以下工业企业数",
								"value": 5901.0,
								"unit": "个",
								"year": "2021",
								"increment": -7.2,
								"incrementUnit": "%"
							}],
							[{
								"label": "全社会工业企业数",
								"value": 7742.0,
								"unit": "个",
								"year": "2021",
								"increment": -8.45,
								"incrementUnit": "%"
							}, {
								"label": "规模以上工业企业数",
								"value": 412.0,
								"unit": "个",
								"year": "2021",
								"increment": 2.55,
								"incrementUnit": "%"
							}, {
								"label": "规模以下工业企业数",
								"value": 7330.0,
								"unit": "个",
								"year": "2021",
								"increment": -10.85,
								"incrementUnit": "%"
							}],
							[{
								"label": "全社会工业企业数",
								"value": 2567.0,
								"unit": "个",
								"year": "2021",
								"increment": 1.87,
								"incrementUnit": "%"
							}, {
								"label": "规模以上工业企业数",
								"value": 130.0,
								"unit": "个",
								"year": "2021",
								"increment": 2.56,
								"incrementUnit": "%"
							}, {
								"label": "规模以下工业企业数",
								"value": 2437.0,
								"unit": "个",
								"year": "2021",
								"increment": -0.54,
								"incrementUnit": "%"
							}]
						],
						"chart": [
							[{
								"legends": ["国有企业", "集体企业", "股份制企业", "港澳台商投资企业", "外商投资企业", "私营企业", "其他企业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "私营企业",
										"unit": "个",
										"value": 1192.0
									}, {
										"name": "股份制企业",
										"unit": "个",
										"value": 589.0
									}, {
										"name": "港澳台商投资企业",
										"unit": "个",
										"value": 500.0
									}, {
										"name": "外商投资企业",
										"unit": "个",
										"value": 170.0
									}, {
										"name": "集体企业",
										"unit": "个",
										"value": 3.0
									}, {
										"name": "国有企业",
										"unit": "个",
										"value": 2.0
									}, {
										"name": "其他企业",
										"unit": "个",
										"value": 2.0
									}]
								}]
							}, {
								"legends": ["国有企业", "集体企业", "股份制企业", "港澳台商投资企业", "外商投资企业", "私营企业", "其他企业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "私营企业",
										"unit": "个",
										"value": 253.0
									}, {
										"name": "股份制企业",
										"unit": "个",
										"value": 128.0
									}, {
										"name": "港澳台商投资企业",
										"unit": "个",
										"value": 87.0
									}, {
										"name": "外商投资企业",
										"unit": "个",
										"value": 22.0
									}, {
										"name": "集体企业",
										"unit": "个",
										"value": 1.0
									}, {
										"name": "国有企业",
										"unit": "个",
										"value": 0.0
									}, {
										"name": "其他企业",
										"unit": "个",
										"value": 0.0
									}]
								}]
							}, {
								"legends": ["国有企业", "集体企业", "股份制企业", "港澳台商投资企业", "外商投资企业", "私营企业", "其他企业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "私营企业",
										"unit": "个",
										"value": 164.0
									}, {
										"name": "港澳台商投资企业",
										"unit": "个",
										"value": 66.0
									}, {
										"name": "股份制企业",
										"unit": "个",
										"value": 52.0
									}, {
										"name": "外商投资企业",
										"unit": "个",
										"value": 24.0
									}, {
										"name": "国有企业",
										"unit": "个",
										"value": 0.0
									}, {
										"name": "集体企业",
										"unit": "个",
										"value": 0.0
									}, {
										"name": "其他企业",
										"unit": "个",
										"value": 0.0
									}]
								}]
							}, {
								"legends": ["国有企业", "集体企业", "股份制企业", "港澳台商投资企业", "外商投资企业", "私营企业", "其他企业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "股份制企业",
										"unit": "个",
										"value": 204.0
									}, {
										"name": "私营企业",
										"unit": "个",
										"value": 196.0
									}, {
										"name": "港澳台商投资企业",
										"unit": "个",
										"value": 118.0
									}, {
										"name": "外商投资企业",
										"unit": "个",
										"value": 38.0
									}, {
										"name": "集体企业",
										"unit": "个",
										"value": 1.0
									}, {
										"name": "国有企业",
										"unit": "个",
										"value": 0.0
									}, {
										"name": "其他企业",
										"unit": "个",
										"value": 0.0
									}]
								}]
							}, {
								"legends": ["国有企业", "集体企业", "股份制企业", "港澳台商投资企业", "外商投资企业", "私营企业", "其他企业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "股份制企业",
										"unit": "个",
										"value": 72.0
									}, {
										"name": "私营企业",
										"unit": "个",
										"value": 72.0
									}, {
										"name": "港澳台商投资企业",
										"unit": "个",
										"value": 62.0
									}, {
										"name": "外商投资企业",
										"unit": "个",
										"value": 31.0
									}, {
										"name": "国有企业",
										"unit": "个",
										"value": 1.0
									}, {
										"name": "集体企业",
										"unit": "个",
										"value": 0.0
									}, {
										"name": "其他企业",
										"unit": "个",
										"value": 0.0
									}]
								}]
							}, {
								"legends": ["国有企业", "集体企业", "股份制企业", "港澳台商投资企业", "外商投资企业", "私营企业", "其他企业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "私营企业",
										"unit": "个",
										"value": 172.0
									}, {
										"name": "港澳台商投资企业",
										"unit": "个",
										"value": 73.0
									}, {
										"name": "股份制企业",
										"unit": "个",
										"value": 52.0
									}, {
										"name": "外商投资企业",
										"unit": "个",
										"value": 25.0
									}, {
										"name": "其他企业",
										"unit": "个",
										"value": 10.0
									}, {
										"name": "集体企业",
										"unit": "个",
										"value": 1.0
									}, {
										"name": "国有企业",
										"unit": "个",
										"value": 0.0
									}]
								}]
							}, {
								"legends": ["国有企业", "集体企业", "股份制企业", "港澳台商投资企业", "外商投资企业", "私营企业", "其他企业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "私营企业",
										"unit": "个",
										"value": 261.0
									}, {
										"name": "港澳台商投资企业",
										"unit": "个",
										"value": 72.0
									}, {
										"name": "股份制企业",
										"unit": "个",
										"value": 48.0
									}, {
										"name": "外商投资企业",
										"unit": "个",
										"value": 30.0
									}, {
										"name": "其他企业",
										"unit": "个",
										"value": 1.0
									}, {
										"name": "国有企业",
										"unit": "个",
										"value": 0.0
									}, {
										"name": "集体企业",
										"unit": "个",
										"value": 0.0
									}]
								}]
							}, {
								"legends": ["国有企业", "集体企业", "股份制企业", "港澳台商投资企业", "外商投资企业", "私营企业", "其他企业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "私营企业",
										"unit": "个",
										"value": 74.0
									}, {
										"name": "股份制企业",
										"unit": "个",
										"value": 33.0
									}, {
										"name": "港澳台商投资企业",
										"unit": "个",
										"value": 22.0
									}, {
										"name": "国有企业",
										"unit": "个",
										"value": 1.0
									}, {
										"name": "集体企业",
										"unit": "个",
										"value": 0.0
									}, {
										"name": "外商投资企业",
										"unit": "个",
										"value": 0.0
									}, {
										"name": "其他企业",
										"unit": "个",
										"value": 0.0
									}]
								}]
							}],
							[{
								"legends": ["轻工业", "重工业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "轻工业",
										"unit": "个",
										"value": 1315.0
									}, {
										"name": "重工业",
										"unit": "个",
										"value": 1143.0
									}]
								}]
							}, {
								"legends": ["轻工业", "重工业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "轻工业",
										"unit": "个",
										"value": 253.0
									}, {
										"name": "重工业",
										"unit": "个",
										"value": 238.0
									}]
								}]
							}, {
								"legends": ["轻工业", "重工业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "重工业",
										"unit": "个",
										"value": 159.0
									}, {
										"name": "轻工业",
										"unit": "个",
										"value": 147.0
									}]
								}]
							}, {
								"legends": ["轻工业", "重工业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "轻工业",
										"unit": "个",
										"value": 286.0
									}, {
										"name": "重工业",
										"unit": "个",
										"value": 271.0
									}]
								}]
							}, {
								"legends": ["轻工业", "重工业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "轻工业",
										"unit": "个",
										"value": 126.0
									}, {
										"name": "重工业",
										"unit": "个",
										"value": 113.0
									}]
								}]
							}, {
								"legends": ["轻工业", "重工业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "轻工业",
										"unit": "个",
										"value": 218.0
									}, {
										"name": "重工业",
										"unit": "个",
										"value": 105.0
									}]
								}]
							}, {
								"legends": ["轻工业", "重工业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "轻工业",
										"unit": "个",
										"value": 251.0
									}, {
										"name": "重工业",
										"unit": "个",
										"value": 161.0
									}]
								}]
							}, {
								"legends": ["轻工业", "重工业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "重工业",
										"unit": "个",
										"value": 96.0
									}, {
										"name": "轻工业",
										"unit": "个",
										"value": 34.0
									}]
								}]
							}],
							[{
								"legends": ["大型企业", "中型企业", "小型企业", "微型企业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "小型企业",
										"unit": "个",
										"value": 1960.0
									}, {
										"name": "中型企业",
										"unit": "个",
										"value": 280.0
									}, {
										"name": "微型企业",
										"unit": "个",
										"value": 160.0
									}, {
										"name": "大型企业",
										"unit": "个",
										"value": 58.0
									}]
								}]
							}, {
								"legends": ["", "中型企业", "小型企业", "微型企业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "小型企业",
										"unit": "个",
										"value": 396.0
									}, {
										"name": "中型企业",
										"unit": "个",
										"value": 53.0
									}, {
										"name": "微型企业",
										"unit": "个",
										"value": 29.0
									}]
								}]
							}, {
								"legends": ["", "中型企业", "小型企业", "微型企业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "小型企业",
										"unit": "个",
										"value": 238.0
									}, {
										"name": "中型企业",
										"unit": "个",
										"value": 46.0
									}, {
										"name": "微型企业",
										"unit": "个",
										"value": 15.0
									}]
								}]
							}, {
								"legends": ["", "中型企业", "小型企业", "微型企业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "小型企业",
										"unit": "个",
										"value": 454.0
									}, {
										"name": "中型企业",
										"unit": "个",
										"value": 51.0
									}, {
										"name": "微型企业",
										"unit": "个",
										"value": 41.0
									}]
								}]
							}, {
								"legends": ["", "中型企业", "小型企业", "微型企业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "小型企业",
										"unit": "个",
										"value": 182.0
									}, {
										"name": "中型企业",
										"unit": "个",
										"value": 26.0
									}, {
										"name": "微型企业",
										"unit": "个",
										"value": 23.0
									}]
								}]
							}, {
								"legends": ["", "中型企业", "小型企业", "微型企业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "小型企业",
										"unit": "个",
										"value": 262.0
									}, {
										"name": "中型企业",
										"unit": "个",
										"value": 38.0
									}, {
										"name": "微型企业",
										"unit": "个",
										"value": 17.0
									}]
								}]
							}, {
								"legends": ["", "中型企业", "小型企业", "微型企业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "小型企业",
										"unit": "个",
										"value": 325.0
									}, {
										"name": "中型企业",
										"unit": "个",
										"value": 56.0
									}, {
										"name": "微型企业",
										"unit": "个",
										"value": 21.0
									}]
								}]
							}, {
								"legends": ["", "中型企业", "小型企业", "微型企业"],
								"series": [{
									"name": null,
									"type": "pie",
									"stack": null,
									"data": [{
										"name": "小型企业",
										"unit": "个",
										"value": 103.0
									}, {
										"name": "微型企业",
										"unit": "个",
										"value": 14.0
									}, {
										"name": "中型企业",
										"unit": "个",
										"value": 10.0
									}]
								}]
							}]
						]
					}
				},
				"name": "工业企业"
			}, {
				"data": {
					"technology": {
						"detail": [{
							"label": "高技术产业增加值",
							"value": 117.92,
							"unit": "亿元",
							"year": "2021"
						}, {
							"label": "增速",
							"value": 17.3,
							"unit": "%",
							"year": "2021"
						}],
						"chart": [{
							"legends": ["高技术产业增加值", "高技术产业增加值占比"],
							"series": [{
								"name": "高技术产业增加值",
								"type": "bar",
								"stack": null,
								"data": [47.63, 57.27, 67.7106, 83.512, 80.46, 100.532, 117.92]
							}, {
								"name": "高技术产业增加值占比",
								"type": "line",
								"stack": null,
								"data": [6.8342, 6.7592, 7.0112, 7.8356, 8.1, 9.3, 11.0]
							}],
							"year": null,
							"xaxis": ["2013", "2014", "2015", "2016", "2017", "2018", "2021"],
							"yaxis": ["亿元", "%"]
						}, {
							"legends": ["制造业增加值"],
							"series": [{
								"name": "",
								"type": "line",
								"stack": null,
								"data": [6.5, 19.6, -4.6, 5.2]
							}],
							"year": null,
							"xaxis": ["医药", "电子及通信设备", "计算机及办公设备", "医疗仪器设备及仪器仪表"],
							"yaxis": ["%"]
						}]
					}
				},
				"name": "高技术产业"
			}, {
				"data": {
					"manufacturing": {
						"detail": [{
							"label": "先进制造业增加值",
							"value": 441.2218,
							"unit": "亿元",
							"year": "2021"
						}, {
							"label": "增速",
							"value": 4.0,
							"unit": "%",
							"year": "2021"
						}],
						"chart": [{
							"legends": ["先进制造业增加值", "先进制造业增加值占比"],
							"series": [{
								"name": "先进制造业增加值",
								"type": "bar",
								"stack": null,
								"data": [218.8, 327.11, 404.52, 458.4573, 384.04, 424.2517, 441.2218]
							}, {
								"name": "先进制造业增加值占比",
								"type": "line",
								"stack": null,
								"data": [31.3944, 38.6068, 41.8868, 43.0155, 38.7, 39.1, 39.6]
							}],
							"year": null,
							"xaxis": ["2013", "2014", "2015", "2016", "2017", "2018", "2021"],
							"yaxis": ["亿元", "%"]
						}, {
							"legends": [""],
							"series": [{
								"name": "",
								"type": "line",
								"stack": null,
								"data": [-7.3, -17.7, -5.3, -11.5, 40.5, 7.2, -15.1, -3.8, -8.7, 34.3, -
									15.2
								]
							}],
							"year": null,
							"xaxis": ["先进装备制造业", "智能制造装备业", "船舶与海洋工程装备业", "节能环保装备业", "轨道交通设备业", "新能源装备业",
								"汽车制造业", "卫星及应用业", "重要基础件业", "高端电子信息制造业", "石油化工业"
							],
							"yaxis": ["%"]
						}]
					}
				},
				"name": "先进制造业"
			}]
		},
		testData4:
		{
			"data": [{
				"data": {
					"gdp": {
						"detail": [{
							"label": "在营市场主体数量",
							"value": 1539.87,
							"unit": "亿元",
							"year": "2021"
						}, {
							"label": "本月新增市场主体数量",
							"value": 48.94,
							"unit": "%",
							"year": "2021"
						}, {
							"label": "次月新增主体数量预测",
							"value": 7.2,
							"unit": "%",
							"year": "2021"
						}],
						"chart": [{
							"legends": ["主体数量（年）", "主体数量增速（年）"],
							"series": [{
								"name": "主体数量（年）",
								"type": "bar",
								"stack": null,
								"data": [0, 0, 0, 0, 0,5196,5192,1111,0,0]
							}, {
								"name": "主体数量增速（年）",
								"type": "line",
								"stack": null,
								"data": [0,0,0,0,0,0,0,-79,0,0]
							}],
							"year": null,
							"xaxis": ["2012","2013","2014","2015", "2016", "2017", "2018", "2019","2020","2021"],
							"yaxis": ["亿元", "%"]
						}, {
							"legends": ["企业", "个体工商户", "农专合作社"],
							"series": [{
								"name": null,
								"type": "pie",
								"stack": null,
								"data": [{
									"name": "企业",
									"unit": "家",
									"value": 1000
								}, {
									"name": "个体工商户",
									"unit": "家",
									"value": 2000
								}, {
									"name": "农专合作社",
									"unit": "家",
									"value": 3000
								}]
							}]
						},{
							"legends": ["行业一", "行业二", "行业三","行业四","行业五"],
							"series": [{
								"name": null,
								"type": "pie",
								"stack": null,
								"data": [{
									"name": "行业一",
									"unit": "家",
									"value": 49
								}, {
									"name": "行业二",
									"unit": "家",
									"value": 22
								}, {
									"name": "行业三",
									"unit": "家",
									"value": 34
								},{
									"name": "行业四",
									"unit": "家",
									"value": 21
								},{
									"name": "行业五",
									"unit": "家",
									"value": 9
								}]
							}]
						},{
							"legends": ["第一产业", "第二产业", "第三产业"],
							"series": [{
								"name": null,
								"type": "pie",
								"stack": null,
								"data": [{
									"name": "第一产业",
									"unit": "家",
									"value": 2
								}, {
									"name": "第二产业",
									"unit": "家",
									"value": 3
								}, {
									"name": "第三产业",
									"unit": "家",
									"value": 10
								}]
							}]
						},
						{
							"legends": ["主体数量（yue）", "主体数量增速（yue）"],
							"series": [{
								"name": "主体数量（年）",
								"type": "bar",
								"stack": null,
								"data": [0, 0, 0, 0, 0,5196,5192,1111,0,0]
							}, {
								"name": "主体数量增速（年）",
								"type": "line",
								"stack": null,
								"data": [0,0,0,0,0,0,0,-79,0,0]
							}],
							"year": null,
							"xaxis": ["2012","2013","2014","2015", "2016", "2017", "2018", "2019","2020","2021"],
							"yaxis": ["亿元", "%"]
						}]
					}
				},
				"name": "服务业总产值"
			}, {
				"data": {
					"company": {
						"detail": [{
							"label": "规模以上服务业企业数",
							"value": 376.0,
							"unit": "个",
							"year": "2021",
							"increment": 7.2,
							"incrementUnit": "%"
						}, {
							"label": "规模以上服务业企业营业收入",
							"value": 213.2592,
							"unit": "亿元",
							"year": "2021",
							"increment": 6.4,
							"incrementUnit": "%"
						}, {
							"label": "规模以上服务业企业利润总额",
							"value": 27.0356,
							"unit": "亿元",
							"year": "2021",
							"increment": 8.8,
							"incrementUnit": "%"
						}],
						"chart": [{
							"legends": ["外观专利", "发明专利", "实用新型专利"],
							"series": [{
								"name": null,
								"type": "pie",
								"stack": null,
								"data": [{
									"name": "外观专利",
									"unit": "个",
									"value": 841
								}, {
									"name": "发明专利",
									"unit": "个",
									"value": 664
								}, {
									"name": "实用新型专利",
									"unit": "个",
									"value": 1026
								}]
							}]
						}, {
							"legends": ["交通运输、仓储和邮政业", "信息传输、软件和信息技术服务业", "房地产业", "租赁和商务服务业", "科学研究和技术服务业",
								"水利、环境和公共设施管理业", "居民服务、修理和其他服务业", "教育", "卫生和社会工作", "文化、体育和娱乐业"
							],
							"series": [{
								"name": null,
								"type": "pie",
								"stack": null,
								"data": [{
									"name": "租赁和商务服务业",
									"unit": "个",
									"value": 132.0
								}, {
									"name": "交通运输、仓储和邮政业",
									"unit": "个",
									"value": 61.0
								}, {
									"name": "房地产业",
									"unit": "个",
									"value": 50.0
								}, {
									"name": "科学研究和技术服务业",
									"unit": "个",
									"value": 43.0
								}, {
									"name": "居民服务、修理和其他服务业",
									"unit": "个",
									"value": 22.0
								}, {
									"name": "信息传输、软件和信息技术服务业",
									"unit": "个",
									"value": 21.0
								}, {
									"name": "文化、体育和娱乐业",
									"unit": "个",
									"value": 18.0
								}, {
									"name": "水利、环境和公共设施管理业",
									"unit": "个",
									"value": 13.0
								}, {
									"name": "教育",
									"unit": "个",
									"value": 10.0
								}, {
									"name": "卫生和社会工作",
									"unit": "个",
									"value": 6.0
								}]
							}]
						}]
					}
				},
				"name": "服务业企业"
			}, {
				"data": {
					"company": {
						"detail": [{
							"label": "服务业企业法人单位数",
							"value": 24677.0,
							"unit": "个",
							"year": "2018"
						}, {
							"label": "服务业企业从业人员数",
							"value": 187012.0,
							"unit": "人",
							"year": "2018"
						}],
						"chart": [{
							"legends": ["交通运输、仓储和邮政业", "信息传输、软件和信息技术服务业", "金融业", "房地产业（不包含房地产开发经营）", "租赁和商务服务业",
								"科学研究和技术服务业", "水利、环境和公共设施管理业", "居民服务、修理和其他服务业", "教育", "卫生和社会工作", "文化、体育和娱乐业"
							],
							"series": [{
								"name": null,
								"type": "pie",
								"stack": null,
								"data": [{
									"name": "租赁和商务服务业",
									"unit": "单位数（个）",
									"value": 14138.0
								}, {
									"name": "房地产业（不包含房地产开发经营）",
									"unit": "单位数（个）",
									"value": 2240.0
								}, {
									"name": "科学研究和技术服务业",
									"unit": "单位数（个）",
									"value": 2172.0
								}, {
									"name": "信息传输、软件和信息技术服务业",
									"unit": "单位数（个）",
									"value": 1529.0
								}, {
									"name": "交通运输、仓储和邮政业",
									"unit": "单位数（个）",
									"value": 1344.0
								}, {
									"name": "居民服务、修理和其他服务业",
									"unit": "单位数（个）",
									"value": 1020.0
								}, {
									"name": "文化、体育和娱乐业",
									"unit": "单位数（个）",
									"value": 880.0
								}, {
									"name": "教育",
									"unit": "单位数（个）",
									"value": 654.0
								}, {
									"name": "水利、环境和公共设施管理业",
									"unit": "单位数（个）",
									"value": 263.0
								}, {
									"name": "卫生和社会工作",
									"unit": "单位数（个）",
									"value": 227.0
								}, {
									"name": "金融业",
									"unit": "单位数（个）",
									"value": 210.0
								}]
							}]
						}, {
							"legends": ["交通运输、仓储和邮政业", "信息传输、软件和信息技术服务业", "金融业", "房地产业（不包含房地产开发经营）", "租赁和商务服务业",
								"科学研究和技术服务业", "水利、环境和公共设施管理业", "居民服务、修理和其他服务业", "教育", "卫生和社会工作", "文化、体育和娱乐业"
							],
							"series": [{
								"name": null,
								"type": "pie",
								"stack": null,
								"data": [{
									"name": "租赁和商务服务业",
									"unit": "人员数（人）",
									"value": 49791.0
								}, {
									"name": "金融业",
									"unit": "人员数（人）",
									"value": 44433.0
								}, {
									"name": "交通运输、仓储和邮政业",
									"unit": "人员数（人）",
									"value": 23363.0
								}, {
									"name": "房地产业（不包含房地产开发经营）",
									"unit": "人员数（人）",
									"value": 20001.0
								}, {
									"name": "科学研究和技术服务业",
									"unit": "人员数（人）",
									"value": 12901.0
								}, {
									"name": "教育",
									"unit": "人员数（人）",
									"value": 9921.0
								}, {
									"name": "信息传输、软件和信息技术服务业",
									"unit": "人员数（人）",
									"value": 9086.0
								}, {
									"name": "居民服务、修理和其他服务业",
									"unit": "人员数（人）",
									"value": 6181.0
								}, {
									"name": "文化、体育和娱乐业",
									"unit": "人员数（人）",
									"value": 4743.0
								}, {
									"name": "水利、环境和公共设施管理业",
									"unit": "人员数（人）",
									"value": 4323.0
								}, {
									"name": "卫生和社会工作",
									"unit": "人员数（人）",
									"value": 2269.0
								}]
							}]
						}]
					}
				},
				"name": "服务业主体分布情况"
			}, {
				"data": {
					"area": {
						"detail": [{
							"label": "现代服务业增加值",
							"value": 902.36,
							"unit": "亿元",
							"year": "2021"
						}, {
							"label": "增速",
							"value": 14.4,
							"unit": "%",
							"year": "2021"
						}],
						"chart": [{
							"legends": ["现代服务业增加值", "现代服务业增加值占服务业比重"],
							"series": [{
								"name": "现代服务业增加值",
								"type": "bar",
								"stack": null,
								"data": [543.1, 592.5, 625.2, 684.5, 712.94, 788.8, 902.36]
							}, {
								"name": "现代服务业增加值占服务业比重",
								"type": "line",
								"stack": null,
								"data": [61.17, 62.12, 63.36, 63.25, 59.24, 61.12, 58.6]
							}],
							"year": null,
							"xaxis": ["2013", "2014", "2015", "2016", "2017", "2018", "2021"],
							"yaxis": ["亿元", "%"]
						}, {
							"legends": [""],
							"series": [{
								"name": "",
								"type": "line",
								"stack": null,
								"data": [3.8, 17.5, 8.2, 2.5, 10.2, -2.9, 0.0]
							}],
							"year": null,
							"xaxis": ["现代旅游业", "文化创意业", "健康养生产业", "教育培训业", "社区服务业", "房地产业", "市政服务业"],
							"yaxis": ["%"]
						}]
					}
				},
				"name": "现代服务业"
			}, {
				"data": {
					"area": {
						"detail": [{
							"label": "生产性服务业增加值",
							"value": 609.8,
							"unit": "亿元",
							"year": "2021"
						}, {
							"label": "增速",
							"value": 19.28,
							"unit": "%",
							"year": "2021"
						}],
						"chart": [{
							"legends": ["生产性服务业增加值", "生产性服务业增加值占服务业比重"],
							"series": [{
								"name": "生产性服务业增加值",
								"type": "bar",
								"stack": null,
								"data": [297.3, 312.2, 361.6, 397.7, 483.79, 511.22, 511.22, 609.8,
									609.8
								]
							}, {
								"name": "生产性服务业增加值占服务业比重",
								"type": "line",
								"stack": null,
								"data": [38.83, 38.83, 37.88, 37.88, 36.64, 36.64, 36.75, 36.75, 40.2,
									40.2, 39.61, 39.61, 39.6, 39.6
								]
							}],
							"year": null,
							"xaxis": ["2013", "2013", "2014", "2014", "2015", "2015", "2016", "2016", "2017",
								"2017", "2018", "2018", "2021", "2021"
							],
							"yaxis": ["亿元", "%"]
						}, {
							"legends": [""],
							"series": [{
								"name": "",
								"type": "line",
								"stack": null,
								"data": [6.5, 8.8, 7.2, -0.3, 2.8, 5.8, 1.2, 12.7]
							}],
							"year": null,
							"xaxis": ["金融服务业", "电子商务业", "科技服务业", "建筑工程服务业", "现代物流业", "商贸流通业", "商务会展业", "信息服务业"],
							"yaxis": ["%"]
						}]
					}
				},
				"name": "生产性服务业"
			}]
		},
		
          loadDataFinish: false,
          subIndexOffset: [],
          tabListText: [
            { text: '综合', value: 0 },
            { text: '农业', value: 1 },
            { text: '工业', value: 2 },
            { text: '服务业', value: 3 }
          ],
        }
      },
    mounted(){
      this.initDOM();
      this.changeShow(0);
      // 添加屏幕滚动的监听
      // this.beforeDestroy();
      window.addEventListener("scroll", this.handleScroll);
      },
    beforeDestroy() {
        // 销毁已创建的监听
        window.removeEventListener('scroll', this.handleScroll);
      },
    methods:{
        initDOM() {
          document.getElementById("top").scrollIntoView(true);
          this.tabRowShow = 0;
          // 初始显示前4个tab页
          this.sliceObject(this.tabListText, 0, 3);
          this.tabListText.forEach((item,index)=> {
            this.tabOffset[index] = 0
          })
        },
        // 切换tab页时针对每个tab页不同的处理
        changeTab(index) {
          this.tabActiveIndex = index;
          this.subTabList = [];

          // let name = this.tabListText[index].text;
          // this.tabData = this.testData[name];
          // // 判断当前tab是否有二级菜单
          // this.judgeHasSubTab(this.tabData.data);
          // // 切换tab时获取当前tab页的各标签页高度
          // this.setSubTabOffset(index);
          // 调接口
          let params = {
            name: this.tabListText[index].text,
			// id:6
          };
          getDataByTabName(params, res => {
            if(index==0) {
              // this.tabData = res.data;
			  this.tabData = this.testData;
              console.log('testData:------------------------',res.data)
              // 判断当前tab是否有二级菜单
              this.judgeHasSubTab(this.tabData.data);
              // 切换tab时获取当前tab页的各标签页高度
              this.setSubTabOffset(index);
            } else if(index==1){
				// this.tabData = res.data;
				this.tabData = this.testData2;
				console.log('testData:',res.data)
				// 判断当前tab是否有二级菜单
				this.judgeHasSubTab(this.tabData.data);
				// 切换tab时获取当前tab页的各标签页高度
				this.setSubTabOffset(index);
			}else if(index==2){
				// this.tabData = res.data;
				this.tabData = this.testData3;
				console.log('testData:',res.data)
				// 判断当前tab是否有二级菜单
				this.judgeHasSubTab(this.tabData.data);
				// 切换tab时获取当前tab页的各标签页高度
				this.setSubTabOffset(index);
			}else if(index==3){
				// this.tabData = res.data;
				this.tabData = this.testData4;
				console.log('testData:',res.data)
				// 判断当前tab是否有二级菜单
				this.judgeHasSubTab(this.tabData.data);
				// 切换tab时获取当前tab页的各标签页高度
				this.setSubTabOffset(index);
			}
			else {
              Notify({ type: 'danger', message: '获取数据错误' });
            }
          }, err => {
            Notify({ type: 'danger', message: '服务器错误'+err });
          });
          windowScrollByOffset(this.tabOffset[index])
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
        changeShow(value) {
          this.tabListShow = [];
          this.subTabActiveIndex = 0;
          // document.getElementById("top").scrollIntoView(true);
          // 先进行判断当前点击的是在第一行还是在第二行
          if (value > 3) {
            this.tabRowShow = 1;
            this.sliceObject(this.tabListText, 4, this.tabListText.length-1);
          } else {
            this.tabRowShow = 0;
            this.sliceObject(this.tabListText, 0, 3);
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
        setSubTabOffset(value) {
          // 仅对含有二级tab的页面做处理
          if (this.hasSecondTab === true) {
            // 每次先将当前存放高度的数组清空
            this.subIndexOffset[value] = [];
            // 循环当前二级tab
            this.subTabList.forEach((item, index) => {
              // 通过index获取dom的id，因为页面都是统一的firstTab、secondTab…
              let tabName = switchNumToDom(index);
              this.$nextTick(() => {
                // 按照顺序获取每一个tab的高度并push进数组
                let tabDom = document.getElementById(tabName);
                let offset = tabDom.offsetTop;
                this.subIndexOffset[value].push(offset);
              });
            });
          }
        },
        // 点击二级菜单的动作
      changeSubTab(index) {
        // this.subTabActiveIndex = index;
        if (index === 0) {
          this.subTabActiveIndex = index;
          document.getElementById("top").scrollIntoView(true);
        } else if (index === 1) {
          windowScroll('secondTab');
        } else if (index === 2) {
          windowScroll('thirdTab');
        } else if (index === 3) {
          windowScroll('fourthTab');
        } else if (index === 4) {
          windowScroll('fifthTab');
        }else if(index === 5) {
          // setTimeout(()=>{
          //   this.subTabActiveIndex = 5;
          // },600)
          windowScroll('sixthTab');
        }
      },
      // 监听的页面滚动事件
      handleScroll() {
        if (this.hasSecondTab === true) {
          // 获取当前页面已经滚动的高度
          let scrollTop = window.pageYOffset;
          let tabActive = this.tabActiveIndex;
          // 获取当前激活页面的存放二级tab高度的数组
          let tabActiveOffset = this.subIndexOffset[tabActive];
          let arrayLength = tabActiveOffset.length;
          for (let i = 0; i < arrayLength ; i++) {
            // 将数组中的每一个高度与当前滚动的高度作比较，获取当前激活的是哪个tab
            if (scrollTop > (tabActiveOffset[i] - remToPx(300/75))) {
              // console.log('scrollTop',scrollTop)
              this.subTabActiveIndex = i;
            }
          }
        }
      }
      }

    }
</script>

<style scoped>

</style>
