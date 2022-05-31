<template>
	<view class="width-100 flex align-center relative">
		<image :src="params.thumb ? params.thumb : '/static/imgs/yys-logo.png' | avatar" mode="" class="info-thumb" @click="toInfoDetail()"></image>
		<view class="info-right" @click="toInfoDetail()">
			<text class="info-title text-el2">{{ params.title }}</text>
			
			<view class="info-detail">
				<text class="cu-tag sm line-red round text-el1" style="max-width: 100rpx;">{{ params.type == 0 ? params.province : params.township }}</text>
				<view class="flex-center">
					<u-icon name="good" custom-prefix="custom-icon" size="30" color="#888888"></u-icon>
					<text class="info-read">{{ params.likeCount ? params.likeCount : 0 }}</text>
				</view>
				<view class="flex-center">
					<u-icon name="bad" custom-prefix="custom-icon" size="30" color="#888888"></u-icon>
					<text class="info-read">{{ params.notLikeCount ? params.notLikeCount : 0 }}</text>
				</view>
				<view class="flex-center">
					<text class="info-read">浏览量</text>
					<text class="info-read">{{ params.browseCount ? params.browseCount : 0 }}</text>
				</view>
			</view>
		</view>
		
		<view class="bag-wrapper" @click="share()">
			<image src="@/static/imgs/red_bag.png" mode="heightFix" class="bag-img" v-if="params.redPacketNumber > 0"></image>
			<text class="bag-text" :class="params.redPacketNumber > 0 ? 'text-20' : 'text-26'">{{ params.redPacket && params.redPacketNumber > 0 ? '分享领红包' : '分享' }}</text>
		</view>
	</view>
</template>

<script>
	import IMG from '@/utils/imageMange.js'
		
	export default {
		props:{
			params: {
				type: Object,
				default: ()=>{}
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			toInfoDetail(){
				uni.navigateTo({
					url: '/pages/home/info-detail?id=' + this.params.id
				})
			},
			
			share: function(){
				// #ifdef H5
				return
				// #endif
				
				uni.share({
					provider: 'weixin',
					scene: 'WXSceneSession',
					type: 0,
					href: this.Config.share + '/#/pages/home/info-detail?id=' + this.params.id,
					title: this.params.title,
					summary: this.params.content,
					imageUrl: IMG.img_url_global + this.params.thumb,
					success: res =>{
						if(this.params.redPacket && this.params.redPacketNumber){
							return this.API.info.getReadBag(this.params.id)
								.then(res =>{
									this.$Tian.toast('领取成功')
									this.$emit('getInos', '1')
								})
								.catch(rej =>{
									console.log(rej)
								})
						} else {
							this.$Tian.toast('分享成功')
						}
					},
					fail: rej =>{
						this.$Tian.toast('分享失败，请稍后再试', 'bottom')
					},
					complete: finish =>{
						this.close()
					}
				})
			}
		}
	}
</script>

<style scoped>
	.info-thumb {
		width: 200rpx;
		height: 160rpx;
		flex-shrink: 0;
		border-radius: 20rpx;
	}
	
	.info-right {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		padding-left: 26rpx;
		height: 160rpx;
	}
	
	.info-title {
		font-size: 30rpx;
		color: #333;
		font-weight: 600;
	}
	
	.info-detail {
		width: 70%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.info-read {
		font-size: 24rpx;
		color: #999;
		font-weight: 400;
		white-space: nowrap;
	}
	
	.bag-wrapper {
		position: absolute;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	
	.bag-img {
		height: 40rpx;
	}
	
	.bag-text {
		color: #ef3c3f;
		font-weight: 400;
	}
</style>
