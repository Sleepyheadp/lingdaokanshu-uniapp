<style lang="less" scoped>
  @import './home.less';
</style>

<template>
    <div class="main">
      <div class="section title"></div>
      <div class="section tab-box" id="tabBox">
        <div
          v-for="(item,index) in pageList"
          class="tab"
          @click="jumpToPage(item[0])">
          <div :class="pageList[index][0]" class="icon"></div>
          <div class="menu-label">{{item[1]}}</div>

        </div>
      </div>
    </div>
</template>


<script>
  import {remToPx} from '../../libs/util'
  export default {
    name: "home",
    data() {
      return {
        pageList: [
          ['macro','经济运行'],
          ['industrial','市场主体'],
          ['investment','扩大投资'],
		  ['governmentService','政务服务'],
          ['technology','科技发展'],
          ['business','营商环境'],
          ['traffic','交通运输'],
          ['revitalization','乡村振兴'],
          ['livelihood','民生服务'],
          ['society','社会保障'],
          ['cultural','文化旅游'],
          ['ecology','生态环保'],
        ]
      }
    },
    methods: {
      jumpToPage(page) {
		  console.log("page:",page)
        // this.$router.push({
        //   path: '/' + page,
        // })
		if(page=='revitalization'){
			page = 'Rural-revitalization'
		}
		uni.navigateTo({
			url:'/pages/'+page+"/index",
		})
      },
      adjustButtonPos() {
        let client = {};
        client.clientHeight = document.body.clientHeight;
        console.log('client',client);
        client.tabBoxHeight = client.clientHeight - remToPx((183 + 15 + 30) / 75);
        let tabBoxClient = document.getElementById('tabBox');
        tabBoxClient.style.height = client.tabBoxHeight + 'px';
        let tabClients = document.getElementsByClassName('tab');
        let marginTopAdj = (client.tabBoxHeight - 6 * remToPx((110 + 28) / 75)) / 6;
        marginTopAdj = marginTopAdj > remToPx(28/75) ? marginTopAdj : remToPx(28/75);
        marginTopAdj = marginTopAdj + 'rpx';
        // console.log('marginTopAdj',marginTopAdj);
        for (let i = 0; i < tabClients.length; i++) {
          tabClients[i].style.marginTop = marginTopAdj;
        }
      }
    },
    mounted() {
      this.adjustButtonPos()
    },
  }
</script>
