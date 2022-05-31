<style lang="less" scoped>
  .clear-both {
    clear: both;
    content: "";
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
    background-image: url("../../static/assets/images/h5/banner-transportation.jpg");
    width: 750rpx;
    height: 282rpx;
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
    p {
      font-size: 54rpx;
      color: #fff;
      font-family: 'PingFang-SC-Heavy';
      position: absolute;
      top: 84rpx;
      left: 56rpx;
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
    height:75rpx;
    overflow: hidden;
    margin-left: 10rpx;
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
  .tab-content {
    width: 100%;
  }
  @import "../common.less";
</style>
<template>
  <div class="section-sticky">
    <div class="content" id="top" :class="{higherTop: hasSecondTab}">
      <div class="banner">
        <!--<p>交通运输 </p>-->
      </div>
      <van-sticky :z-index="9999999999">
        <div class="header" :class="{secondTab: hasSecondTab}">
          <div v-for="(item, index) in tabListShow" class="tab-item" :class="{tabActive: index===tabActiveIndex}" @click="changeTab(index)">
            <span>{{item.text}}</span>
            <div v-if="index===tabActiveIndex" class="active-line"></div>
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
        <transport-capacity v-if="tabActiveIndex===0" :tabData="tabData"></transport-capacity>
        <facility v-if="tabActiveIndex===1" :tabData="tabData"></facility>
        <vehicle-vessel v-if="tabActiveIndex===2" :tabData="tabData"></vehicle-vessel>
        <project-invest v-if="tabActiveIndex===3" :tabData="tabData"></project-invest>
      </div>
    </div>
  </div>
</template>

<script>
  import transportCapacity from "./transport-capacity";
  import facility from "./facility";
  import vehicleVessel from "./vehicle-vessel";
  import projectInvest from "./project-invest";
  import {getDataByTabName} from "../../api/h5-chart";
  // import Notify from "vant/es/notify";
  import {remToPx, switchNumToDom, windowScroll,windowScroll1} from '../../libs/util';

  export default {
    name: "index",
    components: {projectInvest, vehicleVessel, facility, transportCapacity},
    data() {
      return {
        hasSecondTab: false,
        tabActiveIndex: '',
        subTabActiveIndex: 0,
        tabListShow: [
          { text: '交通运力', value: 0 },
          { text: '交通设施', value: 1 },
          { text: '车船保有', value: 2 },
          { text: '交通项目投资', value: 3}
        ],
        subTabList: [],
        tabData: {},
        projectData: {},
        subIndexOffset: [],
        detail: [],
        testData: {
          '交通运力': {
            data: [
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: '运输企业',
                        value: '12230',
                        unit: '家',
                        pro:'10%',
                      },
                      {
                        label: '陆运企业',
                        value: '12070',
                        unit: '家',
                        pro:'11%',
                      },
                      {
                        label: '水运企业',
                        value: '367.69',
                        unit: '家',
                        pro:'12%',
                      }
                    ],
                    chart: []
                  }
                },
                name: '运输企业',
              },
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: '从业人数',
                        value: '12230',
                        unit: '19%',
                      },
                    ],
                    chart: [
                      {
                        "legends": [
                          "从业人数",
                          "增速",
                          // "计划投资"
                        ],
                        "series": [
                          {
                            "data": [
                              56.0,
                              29.0,
                              6.0,
                              13.0,
                              3.0,
                              37.0
                            ],
                            "name": "从业人数",
                            "type": "line"
                          },
                          {
                            "data": [
                              198.2095,
                              161.9465,
                              292.7261,
                              812.3566,
                              63.5401,
                              240.3558
                            ],
                            "name": "增速",
                            "type": "bar"
                          },
                          // {
                          //   "data": [
                          //     39.5516,
                          //     57.4969,
                          //     20.0679,
                          //     109.5455,
                          //     3.444,
                          //     28.2951
                          //   ],
                          //   "name": "计划投资",
                          //   "type": "bar"
                          // }
                        ],
                        "xaxis": [
                          "市政道路",
                          "环境治理",
                          "轨道交通",
                          "高快路网",
                          "港口航道",
                          "等级公路"
                        ],
                        "yaxis": [
                          "个",
                          "亿元"
                        ]
                      },
                    ]
                  }
                },
                name: '从业人数',
              },
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: '营运车辆',
                        value: '12230',
                        unit: '19%',
                      },
                      {
                        label: '营运船白',
                        value: '12070',
                        unit: '10%',
                      },
                    ],
                    chart: []
                  }
                },
                name: '运输工具'
              },
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: '客运量',
                        value: '12230',
                        unit: '19%',
                      },
                      {
                        label: '公路客运量',
                        value: '12070',
                        unit: '10%',
                      },
                      {
                        label: '水路客运量',
                        value: '367.69',
                        unit: '4%',
                      }
                    ],
                    chart: [
                      {
                        "legends": [
                          "幼儿园教职工人数",
                          "幼儿园专任教师数"
                        ],
                        "series": [
                          {
                            "data": [
                              10170.0,
                              11529.0,
                              12350.0,
                              13077.0,
                              13863.0,
                              15764.0,
                              16345.0,
                            ],
                            "name": "幼儿园教职工人数",
                            "type": "line"
                          },
                          {
                            "data": [
                              6058.0,
                              6591.0,
                              7087.0,
                              7454.0,
                              7780.0,
                              8702.0,
                              8952.0,
                            ],
                            "name": "幼儿园专任教师数",
                            "type": "line"
                          }
                        ],
                        "xaxis": [
                          "2010",
                          "2011",
                          "2012",
                          "2013",
                          "2014",
                          "2015",
                          "2016",
                        ],
                        "yaxis": [
                          "人"
                        ]
                      },
                    ]
                  }
                },
                name: '客运量',
              },
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: '货运量',
                        value: '1230',
                        unit: '19%',
                      },
                      {
                        label: '公路货运量',
                        value: '1270',
                        unit: '10%',
                      },
                      {
                        label: '水路货运量',
                        value: '3.69',
                        unit: '4%',
                      }
                    ],
                    chart: [
                      {
                        "legends": [
                          "公路货运量",
                          "水路货运量"
                        ],
                        "series": [
                          {
                            "data": [
                              10170.0,
                              11529.0,
                              12350.0,
                              13077.0,
                              13863.0,
                              15764.0,
                              16345.0,
                            ],
                            "name": "公路货运量",
                            // "type": "bar"
                          },
                          {
                            "data": [
                              6058.0,
                              6591.0,
                              7087.0,
                              7454.0,
                              7780.0,
                              8702.0,
                              8952.0,
                            ],
                            "name": "水路货运量",
                            // "type": "line"
                          }
                        ],
                        "xaxis": [
                          "2010",
                          "2011",
                          "2012",
                          "2013",
                          "2014",
                          "2015",
                          "2016",
                        ],
                        "yaxis": [
                          ""
                        ]
                      },
                    ]
                  }
                },
                name: '货运量',
              },
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: '货物吞吐量',
                        value: '12',
                        unit: '19%',
                      },
                    ],
                    chart: [
                      {
                        // "legends": [
                        //   "幼儿园教职工人数",
                        //   "幼儿园专任教师数"
                        // ],
                        "series": [
                          {
                            "data": [
                              10170.0,
                              11529.0,
                              12350.0,
                              13077.0,
                              13863.0,
                              15764.0,
                              16345.0,
                              16964.0,
                              13620.0
                            ],
                            "name": "幼儿园教职工人数",
                            "type": "line"
                          },
                        ],
                        "xaxis": [
                          "2010",
                          "2011",
                          "2012",
                          "2013",
                          "2014",
                          "2015",
                          "2016",
                          "2017",
                          "2018"
                        ],
                        "yaxis": [
                          "人"
                        ]
                      },
                    ]
                  }
                },
                name: '货物吞吐量',
              },
            ]
          },
          '交通设施': {
            data: [
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: '公路里程',
                        value: '0',
                        unit: '19%',
                      },
                      {
                        label: '高速公路里程',
                        value: '1',
                        unit: '10%',
                      },
                    ],
                    detail1: [
                      {
                        label: '公路密度',
                        value: '0',
                        unit: '19%',
                      },
                      {
                        label: '高速公路密度',
                        value: '1',
                        unit: '10%',
                      },
                    ],
                    detail2: [
                      {
                        label: '公路路线',
                        value: '0',
                        unit: '19%',
                      },
                      {
                        label: '客运战场',
                        value: '1',
                        unit: '10%',
                      },
                      {
                        label: '客运战亭',
                        value: '1',
                        unit: '10%',
                      },
                    ],
                    chart: [
                      {
                        "legends": [
                          "项目数",
                          "总投资",
                        ],
                        // "xaxis"[],
                        "series": [
                          {
                            "data": [
                              56.0,
                              29.0,
                              6.0,
                              13.0,
                            ],
                            "name": "项目数",
                            "type": "line"
                          },
                          {
                            "data": [
                              198.2095,
                              161.9465,
                              292.7261,
                              812.3566,
                            ],
                            "name": "总投资",
                            "type": "bar"
                          },
                        ],
                        "xaxis": [
                          "市政道路",
                          "环境治理",
                          "轨道交通",
                          "高快路网",
                        ],
                        // "yaxis": [
                        //   "个",
                        //   "亿元"
                        // ]
                      },
                      {
                        "seriesData":[
                          {name:'今天',value:'2',unit:'元'},
                          {name:'明天',value:'4',unit:'元'},
                          {name:'后天',value:'4',unit:'元'},
                          {name:'后天1',value:'4',unit:'元'},
                          {name:'后天2',value:'4',unit:'元'},
                          {name:'后天3',value:'4',unit:'元'},
                        ],
                        "nameData":['今天','明天']
                      },
                      {
                        "seriesData":[
                          {name:'今天',value:'2',unit:'元'},
                          {name:'明天',value:'4',unit:'元'},
                          {name:'后天',value:'4',unit:'元'},
                          {name:'后天1',value:'4',unit:'元'},
                          {name:'后天2',value:'4',unit:'元'},
                          {name:'后天3',value:'4',unit:'元'},
                        ],
                        "nameData":['今天','明天']
                      },
                      {
                        "legends": [
                          "幼儿园教职工人数",
                          "幼儿园专任教师数"
                        ],
                        "series": [
                          {
                            "data": [
                              10170.0,
                              11529.0,
                              12350.0,
                              13077.0,
                              13863.0,
                              15764.0,
                              16345.0,
                              16964.0,
                              13620.0
                            ],
                            "name": "幼儿园教职工人数",
                            "type": "line"
                          },
                          {
                            "data": [
                              6058.0,
                              6591.0,
                              7087.0,
                              7454.0,
                              7780.0,
                              8702.0,
                              8952.0,
                              9222.0,
                              7118.0
                            ],
                            "name": "幼儿园专任教师数",
                            "type": "line"
                          }
                        ],
                        "xaxis": [
                          "2010",
                          "2011",
                          "2012",
                          "2013",
                          "2014",
                          "2015",
                          "2016",
                          "2017",
                          "2018"
                        ],
                        "yaxis": [
                          "人"
                        ]
                      },
                    ]
                  }
                },
                name: '公路',
              },
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: '生产经营性泊位',
                        value: '0',
                        unit: '19%',
                      },
                      {
                        label: '万吨级泊位',
                        value: '1',
                        unit: '10%',
                      },
                    ],
                    chart: [

                    ]
                  }
                },
                name: '水运',
              },
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: '顺利康复播放WUFO',
                        value: '0',
                        unit: '19%',
                      },
                    ],
                    chart: [

                    ]
                  }
                },
                name: '轨道',
              },
            ]
          },
          '车船保有': {
            data: [
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: '运营企业',
                        value: '12230',
                        unit: '19%',
                      },
                      {
                        label: '车（船）数',
                        value: '12070',
                        unit: '10%',
                      },

                    ],
                    chart: [
                      {
                        "seriesData":[
                          {name:'今天',value:'2',unit:'元'},
                          {name:'明天',value:'4',unit:'元'},
                          {name:'后天',value:'4',unit:'元'},
                          {name:'后天1',value:'4',unit:'元'},
                          {name:'后天2',value:'4',unit:'元'},
                          {name:'后天3',value:'4',unit:'元'},
                        ],
                        "nameData":['今天','明天']
                      },
                      {
                        "seriesData":[
                          {name:'今天',value:'2',unit:'元'},
                          {name:'明天',value:'4',unit:'元'},
                          {name:'后天',value:'4',unit:'元'},
                          {name:'后天1',value:'4',unit:'元'},
                          {name:'后天2',value:'4',unit:'元'},
                          {name:'后天3',value:'4',unit:'元'},
                        ],
                        "nameData":['今天','明天']
                      },
                    ]
                  }
                },
                name: '公共交通',
              },
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: '机动车保有量',
                        value: '12230',
                        unit: '19%',
                      },
                      {
                        label: '汽车保有量',
                        value: '12070',
                        unit: '10%',
                      },
                      {
                        label: '摩托车保有量',
                        value: '12070',
                        unit: '10%',
                      },
                      {
                        label: '千人汽车保有量',
                        value: '12070',
                        unit: '10%',
                      },

                    ],
                    chart: [
                      {
                        "legends": [
                          "幼儿园教职工人数",
                          "幼儿园专任教师数"
                        ],
                        "series": [
                          {
                            "data": [
                              10170.0,
                              11529.0,
                              12350.0,
                              13077.0,
                              13863.0,
                              15764.0,
                              16345.0,
                              16964.0,
                              13620.0
                            ],
                            "name": "幼儿园教职工人数",
                            "type": "line"
                          },
                          {
                            "data": [
                              6058.0,
                              6591.0,
                              7087.0,
                              7454.0,
                              7780.0,
                              8702.0,
                              8952.0,
                              9222.0,
                              7118.0
                            ],
                            "name": "幼儿园专任教师数",
                            "type": "line"
                          }
                        ],
                        "xaxis": [
                          "2010",
                          "2011",
                          "2012",
                          "2013",
                          "2014",
                          "2015",
                          "2016",
                          "2017",
                          "2018"
                        ],
                        "yaxis": [
                          "人"
                        ]
                      },
                      {
                        "legends": [
                          "幼儿园教职工人数",
                          "幼儿园专任教师数"
                        ],
                        "series": [
                          {
                            "data": [
                              10170.0,
                              11529.0,
                              12350.0,
                              13077.0,
                              13863.0,
                              15764.0,
                              16345.0,
                              16964.0,
                              13620.0
                            ],
                            "name": "幼儿园教职工人数",
                            "type": "line"
                          },
                          {
                            "data": [
                              6058.0,
                              6591.0,
                              7087.0,
                              7454.0,
                              7780.0,
                              8702.0,
                              8952.0,
                              9222.0,
                              7118.0
                            ],
                            "name": "幼儿园专任教师数",
                            "type": "line"
                          }
                        ],
                        "xaxis": [
                          "2010",
                          "2011",
                          "2012",
                          "2013",
                          "2014",
                          "2015",
                          "2016",
                          "2017",
                          "2018"
                        ],
                        "yaxis": [
                          "人"
                        ]
                      },

                    ]
                  }
                },
                name: '个人交通',
              },

            ]
          },
          '交通项目投资': {
            data: [
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: '年度项目数',
                        value: '12230',
                        unit: '个',
                      },
                      {
                        label: '已开工项目数',
                        value: '12070',
                        unit: '个',
                      },
                      {
                        label: '项目开工率',
                        value: '367.69',
                        unit: '%',
                      }
                    ],
                    chart: [
                      {
                        // "legends": [
                        //   "项目数",
                        //   "总投资",
                        // ],
                        // "xaxis"[],
                        "series": [
                          // {
                          //   "data": [
                          //     56.0,
                          //     29.0,
                          //     6.0,
                          //     13.0,
                          //   ],
                          //   "name": "项目数",
                          //   "type": "line"
                          // },
                          {
                            "data": [
                              198.2095,
                              161.9465,
                              292.7261,
                              812.3566,
                              812.3566,
                              812.3566,
                            ],
                            // "name": "总投资",
                            "type": "bar"
                          },
                        ],
                        "xaxis": [
                          "2015",
                          "2016",
                          "2017",
                          "2018",
                          "2019",
                          "2020",
                        ],
                        // "yaxis": [
                        //   "个",
                        //   "亿元"
                        // ]
                      },
                      {
                        "seriesData":[
                          {name:'今天',value:'2',unit:'元'},
                          {name:'明天',value:'4',unit:'元'},
                          {name:'后天',value:'4',unit:'元'},
                          {name:'后天1',value:'4',unit:'元'},
                          {name:'后天2',value:'4',unit:'元'},
                          {name:'后天3',value:'4',unit:'元'},
                        ],
                        "nameData":['今天','明天']
                      },
                    ]
                  }
                },
                name: '交通项目',
              },
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: '年度计划投资',
                        value: '12230',
                        unit: '亿',
                      },
                      {
                        label: '已完成投资',
                        value: '12070',
                        unit: '亿',
                      },
                      {
                        label: '投资完成率',
                        value: '367.69',
                        unit: '%',
                      }
                    ],
                    chart: [
                      {
                        // "legends": [
                        //   "项目数",
                        //   "总投资",
                        // ],
                        // "xaxis"[],
                        "series": [
                          {
                            "data": [
                              198.2095,
                              161.9465,
                              292.7261,
                              812.3566,
                              812.3566,
                              812.3566,
                            ],
                            // "name": "总投资",
                            "type": "bar"
                          },
                        ],
                        "xaxis": [
                          "2015",
                          "2016",
                          "2017",
                          "2018",
                          "2019",
                          "2020",
                        ],
                        // "yaxis": [
                        //   "个",
                        //   "亿元"
                        // ]
                      },
                      {
                        "seriesData":[
                          {name:'今天',value:'2',unit:'元'},
                          {name:'明天',value:'4',unit:'元'},
                          {name:'后天',value:'4',unit:'元'},
                          {name:'后天1',value:'4',unit:'元'},
                          {name:'后天2',value:'4',unit:'元'},
                          {name:'后天3',value:'4',unit:'元'},
                        ],
                        "nameData":['今天','明天']
                      },
                      {
                        "legends": [
                          "项目数",
                          "总投资",
                        ],
                        // "xaxis"[],
                        "series": [
                          {
                            "data": [
                              56.0,
                              29.0,
                              6.0,
                              13.0,
                            ],
                            "name": "项目数",
                            "type": "line"
                          },
                          {
                            "data": [
                              198.2095,
                              161.9465,
                              292.7261,
                              812.3566,
                            ],
                            "name": "总投资",
                            "type": "bar"
                          },
                        ],
                        "xaxis": [
                          "市政道",
                          "环境治",
                          "轨道交",
                          "高快路",
                        ],
                        // "yaxis": [
                        //   "个",
                        //   "亿元"
                        // ]
                      },

                    ]
                  }
                },
                name: '交通投资',
              },
            ]
          },
        },
      }
    },
    mounted() {
      this.initDOM();
      this.changeTab(0);
      // 添加屏幕滚动的监听
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      // 销毁已创建的监听
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      initDOM() {
        document.getElementById("top").scrollIntoView(true);
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
        document.getElementById("top").scrollIntoView(true);
        this.tabActiveIndex = index;
        this.subTabActiveIndex = 0;
        this.subTabList = [];

        // let name = this.tabListShow[index].text;
        // this.tabData = this.testData[name];
        // this.judgeHasSubTab(this.tabData.data);

        // 切换tab时获取当前tab页的各标签页高度
        this.setSubTabOffset(index);
        let params = {
          name: this.tabListShow[index].text,
          // name: '效能监督',
        };
        getDataByTabName(params, res => {
          if(res.data) {
            // console.log('ddd',res.data.data[0].data.company.detail);
            this.tabData = res.data;
            this.judgeHasSubTab(this.tabData.data);
            // 切换tab时获取当前tab页的各标签页高度
            this.setSubTabOffset(index);
          } else {
            Notify({ type: 'danger', message: '获取数据错误' });
          }
        }, err => {
          Notify({ type: 'danger', message: '服务器错误'+err });
        });
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
      setSubTabOffset(value) {
        // 仅对含有二级tab的页面做处理
        if (this.hasSecondTab === true) {
          setTimeout(() => {
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
          })
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
            if (scrollTop > (tabActiveOffset[i] - remToPx(600/75))) {
              console.log('scrollTop',scrollTop)
              this.subTabActiveIndex = i;
            }
          }
        }
      }
    }
  }
</script>
