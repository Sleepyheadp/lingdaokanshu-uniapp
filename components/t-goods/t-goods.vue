<template>
	<view class="wrapper">
		<image :src="params.thumb | avatar" mode="" class="goods-thumb"></image>
		<view class="goods-info">
			<text class="goods-title text-el2">
				{{ params.name }}
			</text>
			
			<view :class="type == 'column' ? 'goods-price-column' : 'goods-price-row'">
				<text class="goods-price">¥  {{ params.price | getPrice }}</text>
				<text class="goods-number">{{ `销量 ` + params.saleCount }}</text>
			</view>
		</view>
		
		<text class="round cu-tag sm gods-addr" v-if="type == 'column'">{{ params.type == 0 ? params.province : params.township }}</text>
		
		<view class="bag-wrapper" v-if="type == 'column'">
			<image src="@/static/imgs/red_bag.png" mode="heightFix" class="bag-img" v-if="params.redpacket > 0"></image>
			<text class="bag-text" :class="params.redpacket > 0 ? 'text-20' : 'text-26'">{{ params.redpacket > 0 ? '领取红包' : '分享' }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"t-goods",
		props:{
			params: {
				type: Object,
				default:()=>{}
			},
			type: {
				type:String,
				default: 'column'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		position: relative;
	}
	
	.gods-addr {
		position: absolute;
		left: 10rpx;
		top: 16rpx;
		z-index: 1;
		color: #fff;
		background-color: #89d0f8!important;
	}

	.goods-thumb {
		width: 100%;
		height: 332rpx;
		/* height: auto; */
	}
	
	.goods-info {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		padding: 20rpx;
		width: 100%;
	}
	
	.goods-title {
		font-size: 26rpx;
		color: #333;
		margin-bottom: 16rpx;
		height: 80rpx;
	}
	
	.goods-price-column {
		width: 100%;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
	}
	
	.goods-price-row {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	
	.goods-price {
		font-size: 38rpx;
		color: #f2463e;
		font-weight: 600;
	}
	
	.goods-number {
		font-size: 24rpx;
		color: #aaa;
		font-weight: 400;
	}
	
	.bag-img {
		height: 40rpx;
	}
	
	.bag-wrapper {
		position: absolute;
		right: 10rpx;
		bottom: 8rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>
