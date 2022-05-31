<style lang="less" scoped>
  @import url("../common-class.less");
  .section-item {
    width: 750rpx;
    &:last-child {
      padding-bottom: 140rpx;
    }
  }
  .tabel-detail {
    text-align: left;
    margin: 5rpx 15rpx;
  }
</style>
<template>
  <div class="main">
    <div v-for="(item,index) in tab.data" :id="tabIdList(index)" class="section-item">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{item.name}}</span>
      </div>
        <table class="bar-table" >
        <thead class="title">
        <tr>
          <th v-for="(eItem) in thead">{{ eItem }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(tItem) in item.data" class="row">
          <td>{{tItem.district}}</td>
          <td>
            <p v-for=" rItem in tItem.projectName" class="tabel-detail">{{rItem}}</p>
          </td>
        </tr>
        </tbody>
      </table>
      
    </div>
  </div>

</template>

<script>
  export default {
    name: "attract-investment",
    props: ['tabData'],
    data() {
      return {
        thead: ['行政区', '项目名称'],
        tab: {
          data: [
            {
              data: [
                {
                  district: '蓬江区',
                  projectName: [
                    '蓬江产业转移工业园',
                    '滨江新城',
                    '江门人才岛',
                    '亿滋土地物业招租',
                    '车行世界汽车城项目',
                    '健威广场',
                    '纬丰广场',
                    '丽轩广场',
                    '永信大厦'
                  ]
                }, {
                  district: '江海区',
                  projectName: [
                    '江门高新创智城',
                    '粤湾云谷智慧产业园区',
                    '江门演艺中心'
                  ]
                }, {
                  district: '新会区',
                  projectName: [
                    '酒店',
                    '新沙商业配套区'
                  ]
                }, {
                  district: '台山市',
                  projectName: [
                    '台山电商、物流项目',
                    '台山体育场馆'
                  ]
                }, {
                  district: '鹤山市',
                  projectName: [
                    '鹤山创新中心',
                    '民办学校',
                    '汽车产业特色小镇',
                    '谷埠新区',
                    '珠西物流中心'
                  ]
                }, {
                  district: '恩平市',
                  projectName: [
                    '文化旅游综合商业项目',
                    '三旧改造商住项目',
                    '恩平横陂水泥厂"三旧"改造项目'
                  ]
                }, {
                  district: '其他',
                  projectName: [
                    '江门港物业招租',
                    '医药类高校招商合作建设'
                  ]
                },],
              name: '招商引资项目',
            },
            {
              data: [
                {
                  district: '包头市国资委',
                  projectName: [
                    '江门港转型优化发展'
                  ]
                }, {
                  district: '台山市',
                  projectName: [
                    '江门港广海湾港区广海湾作业区防波堤工程',
                    '江门港广海湾港区广海湾作业区进港航道工程',
                    '江门港广海湾港区广海湾作业区5万吨级码头工程'
                  ]
                }],
              name: '交通基础设施项目',
            },
            {
              data: [
                {
                  district: '江海区',
                  projectName: [
                    '礼乐雨林春秋',
                    '礼乐万亩农田',
                  ]
                },
                {
                  district: '新会区',
                  projectName: [
                    '圭峰山北坑体育运动公园升级改造项目',
                    '古井洲郎村“黄氏宗祠，文化传承与农耕体验”项目',
                  ]
                },
                {
                  district: '台山市',
                  projectName: [
                    '金沙滩国际辽阳旅游度假区项目',
                    '沙堤渔港滨海小镇项目',
                    '飞沙滩五星级酒店集群项目',
                    '台山市海上神灶温泉旅游度假区项目',
                    '台山市蓬岛滨海旅游度假区',
                    '台山浮石南宋皇族村',
                    '台山市横山渔港渔船观光项目',
                    '海宴华侨农场东南亚风情小镇旅游度假区',
                    '寻皇胡蜂特色颐养乡村',
                    '美国芦荟庄园',
                    '台山云顶农耕文化园'
                  ]
                },
                {
                  district: '开平市',
                  projectName: [
                    '“福和里”田园文化综合体项目',
                    '蚬冈综合生态度假区项目',
                    '“荻海埠”骑楼街旅游项目',
                    '开平市簕冲“无人村”乡村旅游项目',
                    '三围疍家文化街旅游项目',
                  ]
                },
                {
                  district: '鹤山市',
                  projectName: [
                    '云乡生态园',
                    '共和生态茶博园',
                    '裕丰龙船花谷基地项目',
                    '霄南古村落精品民宿项目'
                  ]
                },
                {
                  district: '恩平市',
                  projectName: [
                    '恩平市红树林休闲滨海生态旅游及养老地产项目',
                    '恩平市热水朗旅游综合体项目',
                    '良西镇绿野仙踪项目',
                    '良西镇幸福田园项目'
                  ]
                },
                {
                  district: '其他',
                  projectName: [
                    '包头市体育赛事承办'
                  ]
                },],
              name: '旅游文化项目',
            },
            {
              data: [
                {
                  district: '蓬江区',
                  projectName: [
                    '南方教育装备创新产业城',
                    '江门人才岛科技园项目',
                    '大湾区智慧教育小镇项目',
                    '迪浪大数据产业园项目',
                    '粤港澳大湾区国际教育培训中心项目（原丽柏教育中心项目）',
                    '南方教育装备创新产业处二期项目（珠西智谷人才天地项目）'
                  ]
                },
                {
                  district: '江海区',
                  projectName: [
                    '中美（江门）创业园',
                    '江门高新产业新城招商项目'
                  ]
                },
                {
                  district: '新会区',
                  projectName: [
                    '广东轨道交通产业园',
                    '新会经济开发区',
                    '深江产业园',
                    '粤澳（江门）产业合作示范区',
                    '珠西新材料集聚区三区',
                    '广东银洲湖纸业基地'
                  ]
                },
                {
                  district: '台山市',
                  projectName: [
                    '台山工业新城',
                    '广东省农产品加工示范区',
                    '端芬镇友银龙山工业园',
                    '四九镇凤山四路招商地块'
                  ]
                },
                {
                  district: '开平市',
                  projectName: [
                    '翠山湖科技产业园招商项目',
                    '开平市月山镇工业地块招商项目'
                  ]
                },
                {
                  district: '鹤山市',
                  projectName: [
                    '鹤山工业城（中欧（江门）中小企业国际合作区核心区）',
                    '鹤山华南专用车产业基地'
                  ]
                },
                {
                  district: '恩平市',
                  projectName: [
                    '恩平产业转移园',
                    '恩平工业园大槐片区'
                  ]
                },],
              name: '先进制造业招商项目',
            }
          ],
        }
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        // console.log('招商引资', this.tabData)
      },
      tabIdList(index) {
        let list = ['firstTab', 'secondTab', 'thirdTab', 'fourthTab','fifthTab'];
        return list[index]
      }
    },
    watch: {
      'tabData.data': function (newValue, oldValue) {
        this.initWin();
      }
    },
  }
</script>


