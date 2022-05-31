<template>
	<view class="">
		<view class="icon-wrapper1">
			<image src="../../static/imgs/icon/icon_cupon.png" mode="widthFix" class="icon-img" @click="showCou = true"></image>
			<image src="../../static/imgs/red_bag.png" mode="widthFix" class="icon-img" v-if="store.redpacket > 0" @click="share"></image>
			<image src="../../static/imgs/icon/icon-top.png" mode="widthFix" class="icon-img"  v-if="scrollTop > 100" @click="scrollTop = 0"></image>
		</view>
		<scroll-view style="height: 100vh;" @scroll="scroll" :scroll-top="scrollTop" scroll-y enable-flex scroll-with-animation @scrolltolower="getNextPage">
			<view class="relative">
				<view class="tabbar-wrapper">
					<view class="tab-button" @click="$Tian.back()">
						<u-icon name="arrow-left" color="#fff" size="42"></u-icon>
					</view>
					
					<view class="tab-button" @click="toCart">
						<u-icon name="shopping-cart" color="#fff" size="42"></u-icon>
					</view>
					
					<view class="flex-sub flex align-center h-40 padding-left-xs round" style="background-color: rgba(252,252,252,0.96);">
						<!-- <t-icon name="search" color="#999" size="52"></t-icon> -->
						<u-icon name="search" color="#999" size="32" class="transY-101 margin-right-xs"></u-icon>
						<input type="text" value="" placeholder="请输入关键词搜索" placeholder-class="place-class" class="input-class" />
					</view>
					
					<view class="tab-button">
						<u-icon name="scan" color="#fff" size="42"></u-icon>
					</view>
					
				<!-- 	"text": "\ue760"
					"text": "\ue7c9" -->
				</view>
				
				<view class="width-100">
					<swiper :indicator-dots="true" :autoplay="true" indicator-color="#fff" indicator-active-color="rgba(255,0,0,0.6)" circular :interval="3000" :duration="1000" class="swiper-wrapper">
						<swiper-item v-for="(item, index ) in this.store.banner" :key="index">
							<image :src="item | avatar" mode="" class="banner-img"></image>
							<text>{{ item }}</text>
						</swiper-item>
					</swiper>
				</view>
				
				<!-- #ifdef H5 -->
				<!-- H5  不吸顶  除H5吸顶 -->
					<u-sticky @fixed="fixed" @unfixed="unfixed" :enable="false">
				<!-- #endif -->
				
				<!-- #ifndef H5 -->
					<u-sticky @fixed="fixed" @unfixed="unfixed" >
				<!-- #endif -->
					<view class="screen-wrapper">
						<view class="navbar-height theme-body" v-if="tabbar"></view>
						<view class="screen-wrapper-container">
							<view class="flex align-center" style="width: 60%;">
								<view class="addr-wrapper">
									<u-icon name="map" custom-prefix="custom-icon" size="42" color="#444" class="transX-20"></u-icon>
									<text class="text-28 text-333 text-600">{{ addr }}</text>
								</view>
								<view class="screen">
									<view class="screen-item">
										<text class="screen-test" :style="active_screen == 1 ? 'border-color: #f2463e;color: #f2463e' : 'border-color: rgba(0,0,0,0);color: #434;' " 
											@click="selectScreen(1)">{{ 1 | screen }}</text>
									</view>
									
									<view class="screen-item">
										<text class="screen-test" :style="active_screen == 2 ? 'border-color: #f2463e;color: #f2463e' : 'border-color: rgba(0,0,0,0);color: #434;' " 
											@click="selectScreen(2)">{{ 2 | screen }}</text>
									</view>
									
									<view class="screen-item">
										<text class="screen-test" :style="store.attentioned ? 'border-color: #f2463e;color: #f2463e' : 'border-color: rgba(0,0,0,0);color: #434;' " 
											@click="selectScreen(3)">{{ store.attentioned ? '取关' : '关注' }}</text>
									</view>
									
									<view class="screen-item">
										<text class="screen-test" :style="active_screen == 4 ? 'border-color: #f2463e;color: #f2463e' : 'border-color: rgba(0,0,0,0);color: #434;' " 
											@click="selectScreen(4)">{{ 4 | screen }}</text>
									</view>
								</view>
							</view>
							
							<view class="screen-right">
								<u-icon name="shaixuan" custom-prefix="custom-icon" size="36" color="#444" class="transX-20"></u-icon>
								<text class="text-28 text-333 text-600">筛选</text>
							</view>
						</view>
					</view>
				</u-sticky>
				
				<view class="width-100">
					<u-notice-bar type="info" mode="horizontal" :list="noticeList"></u-notice-bar>
				</view>
				
				<view class="" v-if="active_screen < 2 ">
					<view class="goods-wrapper" v-if="goodsList[0]">
						<view class="goods-item" v-for="(item, index) in goodsList" :key="index" @click="toGoodsDetail(item)">
							<t-goods :params="item" type="row"></t-goods>
						</view>
					</view>
					
					<view class="" v-else>
						<t-empty text="暂未发布商品"></t-empty>
					</view>
				</view>
				
				<view class="" v-if="active_screen == 4">
					<view class="" v-if="zoneList[0]">
						<view class="zone-item" v-for="(item, index) in zoneList" :key="index" @click="zoneDetail(item.id)">
							<view class="img-wrapper">
								<image :src="item.thumb | avatar" mode="" class="thumb"></image>
								<view class="icon-play">
									<t-icon name="play-right-fill" plus color="#333" size="42" class="icon"></t-icon>
								</view>
							</view>
							
							<view class="content-wrapper">
								<view class="content padding-tb-xs">
									<text class="text-32 text-333 text-600">{{ item.title }}</text>
									
									<text class="text-24 text-999">浏览 {{ item.browseCount ? item.browseCount : 0 }}</text>
								</view>
							</view>
						</view>
					</view>
					
					
					<view class="" v-else>
						<t-empty text="暂未发布动态"></t-empty>
					</view>
				</view>
				
				<!-- <view class="load-more">
					<u-loadmore :status="loadMore" />
				</view> -->
			</view>
			
			<u-popup v-model="showCou" mode="bottom">
				<view class="relative" style="padding: 80rpx 30rpx 140rpx;width: 750rpx;">
					<view class="icon-close" @click="showCou = false">
						<t-icon name="close" size="52" color="#333"></t-icon>
					</view>
					
					<view class="width-100 flex-center bg-white flex-direction" v-if="couponList[0]">
						<view class="coupon-item" v-for="(item, index) in couponList" :key="index">
							<view class="left">
								<text class="text-34 text-600 text-red">￥{{ item.money }}</text>
								<text class="text-28 text-red margin-tb-xs">满{{ item.sill }}可用</text>
								<text class="text-24 text-orange">剩余{{ item.number }}张</text>
							</view>
							<view class="right">
								<view class="flex-center flex-direction">
									<text class="text-34 text-600 text-red">{{ item.title }}</text>
									<text class="text-28 text-orange">{{ item.expireTime }}到期</text>
								</view>
								<view class="btn-del">
									<text class="text-24 text-333" @click="receive(item)">点击领取</text>
								</view>
							</view>
						</view>
					</view>
					
					<view class="padding-top-xl padding-bottom-120" v-else>
						<t-empty text="还没有优惠券呢"></t-empty>
					</view>
				</view>
			</u-popup>
		</scroll-view>
	</view>
</template>

<script>
	import IMG from '@/utils/imageMange.js'
	import { mapActions, mapGetters, mapMutations, mapState	} from 'vuex'
	
	export default {
		props: {
			store: {
				type: Object,
				default: ()=>{}
			},
			storeId: {
				type: String,
				default: ''
			},
		},
		data() {
			return {
				self: this.store,
				goodsList:[],
				screen_list: [ 1, 2, 3, 4 ], 
				active_screen: 0,
				addr: '全国',
				tabbar: false,
				noticeList: [ '两只黄鹂鸣翠柳', '一行白鹭上青天', '窗含西岭千秋雪', '门泊东吴万里船' ],
				page: 1,
				pageSum: 3,
				loadMore: 'loadmore',
				zoneList: [],
				couponList: [],
				showCou: false,
				scrollTop: 0
			}
		},
		mounted() {
			this.getGoodsList()
			this.getMyZone()
			this.getCouponList()
		},
		computed: {
			...mapState('global', [ 'winW', 'winH', 'sysBar']),
		},
		methods: {
			selectScreen: function(e){
				if(e == 2) return this.toMapAPP(this.store.lat, this.store.lng, this.store.address)
				if(e == 3) return this.follow()
				this.active_screen = e
			},
			
			
			fixed(e){
				this.tabbar = true
			},
			
			unfixed(){
				this.tabbar = false
			},
			
			toCart(){
				this.$Router.push({
					name: 'cart'
				})
			},
			
			scanIcon(){
				this.$Tian.toast('扫码', 'bottom')
			},
			
			toGoodsDetail(item){
				uni.navigateTo({
					url: '/pages/store/goods-detail?id=' + item.id
				})
			},
			
			getGoodsList: function(){
				let obj = {
					storeId: this.storeId
				}
				
				return this.API.goods.goodsList(obj)
					.then(res =>{
						let data = res.rows
						for(let i in data){
							data[i].img = JSON.parse(data[i].img)
							data[i].thumb = data[i].img[0]
						}
						
						this.goodsList = res.rows
					})
			},
			
			getMyZone: function(){
				let obj = new Object()
				obj.storeId = this.storeId
				
				return this.API.store.getZone(obj)
					.then(res =>{
						let data = res.rows
						for(let i in data){
							data[i].thumb = data[i].cover.split(',')[0]
						}
						
						this.zoneList = res.rows
					})
			},
			
			getNextPage: function(){
				let _loadMore = 'loading'
				
				this.loadMore = _loadMore
				if(this.page < this.pageSum){
					let array = this.goodsList.slice(-10,)
					this.page += 1
					for(let i in array){
						array[i].id += 10
						this.goodsList.push(array[i])
					}
					_loadMore = 'loadmore'
				} else {
					_loadMore = 'nomore'
				}
				
				setTimeout(()=>{
					this.loadMore = _loadMore
				}, 800)
			},
			
			toMapAPP(latitude,longitude,name){
				// #ifndef APP-PLUS
				return this.$Tian.toast('只能在APP中打开')
				// #endif
				
				let url = "";
				if (plus.os.name == "Android") {//判断是安卓端
					plus.nativeUI.actionSheet({//选择菜单
						title: "选择地图应用",
						cancel: "取消",
						buttons: [{title: "腾讯地图"},{title: "百度地图"}, {title: "高德地图"}]
					}, function(e) {
						switch (e.index) {
							//下面是拼接url,不同系统以及不同地图都有不同的拼接字段
							case 1:
								//注意referer=xxx的xxx替换成你在腾讯地图开发平台申请的key
								url = `qqmap://map/geocoder?coord=${latitude},${longitude}&referer=xxx`;
								break;
							case 2:
								url = `baidumap://map/marker?location=${latitude},${longitude}&title=${name}&coord_type=gcj02&src=andr.baidu.openAPIdemo`;
								break;
							case 3:
								url = `androidamap://viewMap?sourceApplication=appname&poiname=${name}&lat=${latitude}&lon=${longitude}&dev=0`;
								break;
							default:
								break;
						}
						if (url != "") {
							url = encodeURI(url);
							//plus.runtime.openURL(url,function(e){})调起手机APP应用
							plus.runtime.openURL(url, function(e) {
								plus.nativeUI.alert("本机未安装指定的地图应用");
							});
						}
					})
				} else {
					// iOS上获取本机是否安装了百度高德地图，需要在manifest里配置
					// 在manifest.json文件app-plus->distribute->apple->urlschemewhitelist节点下添加
					//（如urlschemewhitelist:["iosamap","baidumap"]）  
					plus.nativeUI.actionSheet({
						title: "选择地图应用",
						cancel: "取消",
						buttons: [{title: "腾讯地图"},{title: "百度地图"}, {title: "高德地图"}]
					}, function(e) {
						switch (e.index) {
							case 1:
								url = `qqmap://map/geocoder?coord=${latitude},${longitude}&referer=xxx`;
								break;
							case 2:
								url = `baidumap://map/marker?location=${latitude},${longitude}&title=${name}&content=${name}&src=ios.baidu.openAPIdemo&coord_type=gcj02`;
								break;
							case 3:
								url = `iosamap://viewMap?sourceApplication=applicationName&poiname=${name}&lat=${latitude}&lon=${longitude}&dev=0`;
								break;
							default:
								break;
						}
						if (url != "") {
							url = encodeURI(url);
							plus.runtime.openURL(url, function(e) {
								plus.nativeUI.alert("本机未安装指定的地图应用");
							});
						}
					})
				}
			},
			
			follow: function(){
				this.$emit('follow', this.store.id)
			},
			
			zoneDetail: function(id){
				uni.navigateTo({
					url: '/pages/user/user-admin/user-zone-detail?id=' + id
				})
			},
			
			getCouponList: function(){
				
				return this.API.store.couponList({ storeId: this.storeId })
					.then(res =>{
						console.log(res)
						this.couponList = res.rows
					})
			},
			
			receive: function(e){
				
				return this.API.store.receive({ storeCouponId: e.id, storeId: e.storeId, sill: e.sill })
					.then(res =>{
						console.log(res)
						this.$Tian.toast('领取成功')
						this.getCouponList()
					})
			},
			
			share: function(){
				// #ifdef APP-PLUS
					uni.share({
						provider: 'weixin',
						scene: 'WXSceneSession',
						type: 0,
						href: this.Config.share + '/#/pages/shop/main?id=' + this.storeId,
						title: this.store.storeName,
						summary: this.store.intro,
						imageUrl: IMG.img_url_global + this.store.logo,
						success: res =>{
							return this.API.store.getRedPacket(this.storeId)
								.then(res =>{
									this.$Tian.toast('领取成功', 'bottom')
									console.log(res)
								})
								.catch(rej =>{
									console.log(rej)
								})
						},
						fail: rej =>{
							console.log(rej)
							this.$Tian.toast('分享失败，请稍后再试', 'bottom')
						},
						complete: finish =>{
							this.close()
						}
					})
				// #endif
			},
			
			scroll: function(e){
				this.scrollTop = e.detail.scrollTop
			}
		},
		filters: {
			screen: function(val){
				let value = ''

				switch(val){
					case 1:
						value = '价格'
						break
					case 2:
						value = '导航'
						break
					case 3:
						value = '关注'
						break
					case 4:
						value = '动态'
						break
				}
				
				return value
			}
		}
	}
</script>

<style scoped>
	.swiper-wrapper {
		width: 750rpx;
		height:362rpx;
	}
	
	.banner-img {
		width: 100%;
		height: 100%;
	}
	
	.goods-wrapper {
		width: 100%;
		padding: 0 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 28rpx;
	}
	
	.goods-item {
		width: 48%;
		background-color: #fff;
		border-radius: 20rpx;
		overflow: hidden;
		margin-bottom: 30rpx;
	}
	
	.tabbar-wrapper {
		width: 660rpx;
		height: 80rpx;
		/* background-color: rgba(243, 243, 243, 0.9); */
		position: absolute;
		top: 66rpx;
		left: 50%;
		transform: translateX(-50%);
		z-index: 998;
		border-radius: 888rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.tab-button {
		width: 80rpx;
		height: 80rpx;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.place-class {
		transform: translateY(10%);
	}
	
	.input-class {
		text-align: left;
	}
	
	.addr-wrapper {
		width: 100rpx;
		display: flex;
		align-items: center;
		margin-right: 20rpx;
	}
	
	.screen-wrapper {
		width: 100%;
		min-height: 80rpx;
		background-color: #fff;
		padding: 0 30rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		border-radius: 20rpx;
	}
	
	.screen-wrapper-container {
		min-height: 68rpx;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.screen {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.load-more {
		width: 100%;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 30rpx;
	}
	
	.icon-wrapper1 {
		position: fixed;
		z-index: 999;
		right: 30rpx;
		bottom: 240rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		touch-action: none;
	}
	
	.icon-img {
		width: 88rpx;
		margin-bottom: 28rpx;
	}
	
	
	
	
	.zone-item {
		display: flex;
		align-items: center;
		background-color: #fff;
		margin-bottom: 20rpx;
		border-radius: 8rpx;
	}
	
	.img-wrapper {
		width: 260rpx;
		height: 180rpx;
		position: relative;
	}
	
	.thumb {
		width: 100%;
		height: 100%;
	}
	
	.icon-play {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: rgba(255,255,255,0.9);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 888rpx;
	}
	
	.icon {
		transform: translate(6%);
	}
	
	.content-wrapper {
		flex: 1;
		padding-left: 8rpx;
		position: relative;
	}
	
	.content {
		width: 70%;
		height: 180rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
	}
	
	.coupon-item {
		width: 690rpx;
		height: 160rpx;
		background-image: url(/static/imgs/coupon.png);
		background-position: 100% 100%;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		margin: 16rpx 0;
		display: flex;
		align-items: center;
	}
	
	.left {
		width: 30%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.right {
		width: 70%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.btn-del {
		width: 120rpx;
		height: 60rpx;
		border-radius: 888rpx;
		background-color: #e2e3e3;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 20rpx;
	}
	
	.icon-close {
		position: absolute;
		right: 30rpx;
		top: 0rpx;
	}
</style>
