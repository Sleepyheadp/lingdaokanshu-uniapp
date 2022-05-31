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
    background-image: url("../../static/assets/images/h5/banner-technology.jpg");
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
    height:80rpx;
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
        <!--<p>科技发展</p>-->
      </div>
      <van-sticky :z-index="9999999999">
        <div class="header" :class="{secondTab: hasSecondTab}" >
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
  import transportCapacity from "./industry";
  import facility from "./investment";
  import vehicleVessel from "./output";
  import projectInvest from "./service";
  import {getDataByTabName} from "../../api/h5-chart";
  // import Notify from "vant/es/notify";
  import {remToPx, switchNumToDom, windowScroll} from '../../libs/util';

  export default {
    name: "index",
    components: {projectInvest, vehicleVessel, facility, transportCapacity},
    data() {
      return {
        hasSecondTab: false,
        tabActiveIndex: '',
        subTabActiveIndex: 0,
        tabListShow: [
          { text: '科技产业', value: 0 },
          { text: '科技投入', value: 1 },
          { text: '科技产出', value: 2 },
          { text: '科技服务', value: 3}
        ],
        subTabList: [],
        tabData: {},
        projectData: {},
        subIndexOffset: [],
        testData: {
          '科技产业': {
            data: [
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: '高新技术企业',
                        value: '12230',
                        unit: '家',
                        pro:'10%',
                      },
                      {
                        label: '科技型中小企业',
                        value: '12070',
                        unit: '家',
                        pro:'',
                      },
                      {
                        label: '科技型小微企业',
                        value: '367.69',
                        unit: '家',
                        pro:'',
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
                              912.3566,
                              512.3566,
                              712.3566,
                            ],
                            // "name": "总投资",
                            "type": "bar"
                          },
                        ],
                        "xaxis": [
                          "2013",
                          "2014",
                          "2015",
                          "2016",
                          "2017",
                          "2018",
                          "2019",
                        ],
                        // "yaxis": [
                        //   "个",
                        //   "亿元"
                        // ]
                      },
                    ]
                  }
                },
                name: '科技企业',
              },
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: '省级以上创新平台',
                        value: '11',
                        unit: '个',
                        // pro:'10%',
                      },
                      {
                        label: '省级工程技术中心',
                        value: '395',
                        unit: '家',
                        pro:'11%',
                        ranking: '排名5'

                      },
                      {
                        label: '硕士工作站',
                        value: '13',
                        unit: '个',
                        // pro:'12%',
                      },
                      {
                        label: '科技特派员工作站',
                        value: '14',
                        unit: '个',
                        // pro:'12%',
                      },
                      {
                        label: '博士后创新实践基地',
                        value: '15',
                        unit: '个',
                        // pro:'12%',
                      }
                    ],
                    detail1: [
                      {
                        label: '研发机构',
                        value: '2159',
                        unit: '个',
                      },
                      {
                        label: '全市规上工业企业',
                        value: '61.9',
                        unit: '%'
                      },
                      {
                        label: '主营业务5亿元以上企业',
                        value: '100',
                        unit: '%'
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
                    ]
                  }
                },
                name: '科研机构',
              },
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: '专业技术人才',
                        value: '20.72',
                        unit: '万人',
                        pro:'10%',
                      },
                      {
                        label: '中级职称以上专业技术人才',
                        value: '8.41',
                        unit: '万人',
                        pro:'12%',
                      }
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
                name: '科技人才',
              },
            ]
          },
          '科技投入': {
            data: [
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: '地方财政科学技术支出',
                        value: '13.5',
                        unit: '亿',
                        pro: '19%',
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
                name: '财务支出',
              },
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: 'R&D费用',
                        value: '71.1',
                        unit: '亿',
                        pro: '19%',
                        ranking: '排名5'
                      },
                      {
                        label: 'R&D投入强度',
                        value: '2.26',
                        unit: '%',
                        pro: '19%',
                      },

                    ],
                    chart: [
                    ]
                  }
                },
                name: 'R&D费用',
              },
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: '科技固定资产投资额',
                        value: '0',
                        unit:'亿',
                        pro: '19%',
                      },
                      {
                        label: '占固定资产总投资额比重',
                        value: 'ee0',
                        unit:'%',
                        pro: '19%',
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
                name: '固定资产投资',
              },
            ]
          },
          '科技产出': {
            data: [
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: '高技术产业增加值',
                        value: '12230',
                        unit:'亿',
                        pro: '19%',
                      },
                      {
                        label: '占规模以上工业增加值比重',
                        value: '12070',
                        unit: '%',
                        pro: '10%',
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
                name: '科技产业增加值',
              },
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: '高新技术产品产值',
                        value: '1950',
                        unit:'亿',
                      },
                      {
                        label: '高新技术产品出口额',
                        value: '138.5',
                        unit:'亿',
                        pro: '10%',
                      },
                      {
                        label: '占规模以上工业总产值比重',
                        value: '49',
                        unit:'%',
                      },
                      {
                        label: '占全市出口总额比重',
                        value: '12.2',
                        unit:'%',
                      },

                    ],
                    chart: [
                    ]
                  }
                },
                name: '科技产品',
              },
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: '专利申请量',
                        value: '12230',
                        unit:'件',
                        pro: '19%',
                      },
                      {
                        label: '专利授权量',
                        value: '12070',
                        unit: '件',
                        pro: '10%',
                      },

                    ],
                    detail1: [
                      {
                        label: '发明专利拥有量',
                        value: '12230',
                        unit:'件',
                        pro: '19%',
                      },
                      {
                        label: '万人发明专利拥有量',
                        value: '12070',
                        unit: '件',
                        pro: '10%',
                      },
                      {
                        label: '发明专利申请量',
                        value: '12070',
                        unit: '件',
                        pro: '10%',
                      },
                      {
                        label: '发明专利授权量',
                        value: '12070',
                        unit: '件',
                        pro: '10%',
                      },

                    ],
                    chart: [
                      {
                        "legends": [
                          "从业人数",
                          "增速",
                          "加速"
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
                          {
                            "data": [
                              39.5516,
                              57.4969,
                              20.0679,
                              109.5455,
                              3.444,
                              28.2951
                            ],
                            "name": "加速",
                            "type": "bar"
                          }
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
                          {
                            "data": [
                              39.5516,
                              57.4969,
                              20.0679,
                              109.5455,
                              3.444,
                              28.2951
                            ],
                            "name": "计划投资",
                            "type": "bar"
                          }
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
                name: '专利',
              },

            ]
          },
          '科技服务': {
            data: [
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: '科技企业孵化器',
                        value: '33',
                        unit: '个',
                        pro: '',
                      },

                    ],
                    chart: [
                      {
                        "type": "Feature",
                        "properties": {
                          "adcode": 440704,
                          "name": "江海区",
                          "center": [113.120601, 22.572211],
                          "centroid": [113.128165, 22.548508],
                          "childrenNum": 0,
                          "level": "district",
                          "subFeatureIndex": 1,
                          "acroutes": [100000, 440000, 440700],
                          "parent": {
                            "adcode": 440700
                          }
                        },

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
                name: '科技孵化器',
              },
              {
                data: {
                  data: {
                    detail: [
                      {
                        label: '在孵企业数',
                        value: '12230',
                        unit: '个',
                        pro: ''
                      },
                      {
                        label: '毕业企业数',
                        value: '12070',
                        unit: '个',
                        pro: ''
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
                name: '孵化企业',
              },
            ]
          },
        }
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
            console.log(res.data.data);
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
      // 点击二级菜单的动作1
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
        }
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
            if (scrollTop > (tabActiveOffset[i] - remToPx(230/75))) {
              this.subTabActiveIndex = i;
            }
          }
        }
      }
    }
  }
</script>
