<template>
	<view>
		<view class="user-back">
			<view class="join-order">
				<view class="userinfo">
					<view class="userinfo">
						<image src="../../static/imgs/info_thumb.jpeg" mode="" class="user-avatar"></image>
						<view class="flex-sub flex align-center justify-between padding-left-xs">
							<text class="text-white text-32">皮卡丘</text>
							<u-icon name="set1" custom-prefix="custom-icon" @click="$Router.push({ name: 'setting' })" size="52" color="#fff"></u-icon>
						</view>
					</view>
				</view>
				
				<view class="relative">
					<!-- <view class="join-us">
						<text class="text-32 text-white">招募</text>
						<text class="text-28 text-red">城市合伙人</text>
					</view> -->
					<image src="../../static/imgs/cityBanner1.jpg" mode="widthFix" class="width-100"></image>
				</view>
				
				<view class="width-100" @click="toOrder(0)">
					<t-cell title="我的订单" cellClass="solid-bottom" rightIcon="arrow-right" rPlus right="查看全部订单"></t-cell>
				</view>
				
				<view class="grid col-5 margin-top-sm">
					<view class="order-status" v-for="(item, index) in order_status" :key="index" @click="toOrder(item.status)">
						<image :src="item.icon | avatar" mode="" class="order-icon"></image>
						<text class="text-28 text-333">{{ item.label }}</text>
					</view>
				</view>
			</view>
		</view>
		
		<image src="../../static/imgs/user-banner.jpg" mode="widthFix" class="user-banner"></image>
		
		<view class="menu-wrapper">
			<view class="width-100">
				<t-cell title="功能服务" right="" cellClass="solid-bottom"></t-cell>
			</view>
			
			<view class="menu-container">
				<view class="menu-item" v-for="(item, index) in menu" :key="index" @click="toPages(item)">
					<image :src="item.icon" mode="" class="menu-icon"></image>
					<text class="text-28">{{ item.label }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapActions, mapGetters, mapMutations, mapState	} from 'vuex'
	
	export default {
		data() {
			return {
				order_status:[
					{ label: '待付款', status: 1, icon: '/static/imgs/icon/order1.png', },
					{ label: '待发货', status: 2, icon: '/static/imgs/icon/order2.png', },
					{ label: '待收货', status: 3, icon: '/static/imgs/icon/order3.png', },
					{ label: '已收货', status: 4, icon: '/static/imgs/icon/order4.png', },
					{ label: '售后', status: 5, icon: '/static/imgs/icon/order5.png', },
				],
				menu: [
					{ label:"网站后台", icon: '/static/imgs/icon/icon-admin.png', path: 'user-admin' },
					{ label:"信息管理", icon: '/static/imgs/icon/info-admin.png', path: 'info-manage' },
					{ label:"我的网站", icon: '/static/imgs/icon/my-web.png', path: '' },
					{ label:"我的平台", icon: '/static/imgs/icon/icon-admin.png', path: '' },
					{ label:"我的收益", icon: '/static/imgs/icon/my-collect.png', path: '' },
					{ label:"市场分润", icon: '/static/imgs/icon/market-money.png', path: '' },
					{ label:"推广分享", icon: '/static/imgs/icon/share.png', path: '' },
					{ label:"关于我们", icon: '/static/imgs/icon/about.png', path: '' },
				]
			}
		},
		mounted() {

		},
		computed: {
			...mapState('global', [ 'winW', 'winH', 'sysBar']),
		},
		methods: {
			toPages(item){
				if(!item.path) return this.$Tian.toast('正在开发中···')
				this.$Router.push({
					name: item.path
				})
			},
			
			toOrder: function(type){
				// this.$Router.push({
				// 	name: 'user-order',
				// 	params: {
				// 		type: type
				// 	}
				// })
				uni.navigateTo({
					url: '/pages/user/user-order-plus?type=' + type
				})
			}
		}
	}
</script>

<style scoped>
	.user-back {
		width: 100%;
		height: 380rpx;
		background-image: url(../../static/imgs/home_top_back.png);
		background-repeat: no-repeat;
		background-position: 100% 100%;
		background-size: 100% 100%;
		position: relative;
	}
	
	.join-order {
		width: 690rpx;
		padding: 30rpx;
		background-color: #fff;
		border-radius: 20rpx;
		position: absolute;
		left: 50%;
		top: 160rpx;
		transform: translateX(-50%);
	}
	
	.userinfo {
		width: 630rpx;
		position: absolute;
		left: 30rpx;
		top: 0;
		transform: translateY(-50%);
		display: flex;
		align-items: flex-start;
		z-index: 3;
	}
	
	.user-avatar {
		width: 120rpx;
		height: 120rpx;
		border-radius: 888rpx;
		border: 2px solid #fff;
		flex-shrink: 0;
	}
	
	.join-us {
		position: absolute;
		left: 40rpx;
		top: 40rpx;
		display: flex;
		align-items: center;
		flex-direction: column;
		z-index: 1;
		background-color: rgba(255,66,12,0.4);
		border-radius: 888rpx;
		padding: 0 30rpx;
	}
	
	.order-status {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.order-icon {
		width: 40rpx;
		height: 40rpx;
		margin: 16rpx 0;
	}
	
	.user-banner {
		width: 690rpx;
		margin: 260rpx 30rpx 0;
	}
	
	.menu-wrapper {
		width: 690rpx;
		margin: 30rpx auto;
		padding: 30rpx;
		background-color: #fff;
		border-radius: 30rpx;
	}
	
	.menu-container {
		width: 100%;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}
	
	.menu-item {
		width: 24%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 20rpx 0; 
	}
	
	.menu-icon {
		width: 50rpx;
		height: 50rpx;
		margin-bottom: 20rpx;
	}
</style>
