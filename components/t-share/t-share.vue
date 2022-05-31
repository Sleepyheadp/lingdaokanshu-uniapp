<template>
	<view class="share-mask" v-if="mode" @click="close()">
		<view class="share-wrapper">
			<view class="share-title solid-bottom">
				<text class="text-32 text-333 text-600">分享到</text>
				<view class="icon-close" @click="close()">
					<u-icon name="close" custom-prefix="custom-icon" size="50" color="#888888" ></u-icon>
				</view>
			</view>
			<view class="grid col-4 width-100 padding-tb">
				<view class="flex-center flex-direction" v-for="(item, index) in share" :key="index" @click.stop="shareInfo(item)">
					<u-icon :name="item.icon" size="88" :color="item.color" ></u-icon>
					<text class="text-24 text-999 margin-top-sm">{{ item.label }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import IMG from '@/utils/imageMange.js'
	
	export default {
		name:"t-share",
		props:{
			mode: {
				type: Boolean,
				default: false
			},
			params: {
				type: Object,
				default: ()=>{}
			}
		},
		data() {
			return {
				share: [
					{ label: '微信', icon: 'weixin-circle-fill', color: '#28b11b', value: 'weixin', scene: 'WXSceneSession' },
					{ label: '朋友圈', icon: 'moments-circel-fill', color: '#abe851', value: 'weixin', scene: 'WXSenceTimeline' },
					{ label: '微博', icon: 'weibo-circle-fill', color: '#fd9905', value: 'sinaweibo', scene: '' },
					{ label: 'QQ', icon: 'qq-circle-fill', color: '#46ccff', value: 'qq', scene: '' },
				]
			};
		},
		methods: {
			close: function(e){
				this.$emit('close')
			},
			shareInfo(item){
				console.log(this.params)
				if(!item.scene) return this.$Tian.toast('暂未接入分享到' + item.label , 'bottom')
				uni.share({
					provider: item.value,
					scene: item.scene,
					type: 0,
					href: this.Config.share + '/#/pages/home/info-detail?id=' + this.params.id,
					title: this.params.title,
					summary: this.params.content,
					imageUrl: IMG.img_url_global + this.params.img[0],
					success: res =>{
						this.$Tian.toast('分享成功', 'bottom')
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

<style class="">
	
	.share-mask {
		width: 750rpx;
		height: 100vh;
		touch-action: none;
		position: fixed;
		left: 0;
		top: 0;
		background-color: rgba(0,0,0,0.6);
	}
	.share-wrapper {
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		z-index: 998;
		width: 100%;
		background-color: #fff;
	}
	
	.share-title {
		position: relative;
		width: 100%;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.icon-close {
		width: 60rpx;
		height: 60rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 50%;
		right: 30rpx;
		transform: translateY(-50%);
	}
</style>
