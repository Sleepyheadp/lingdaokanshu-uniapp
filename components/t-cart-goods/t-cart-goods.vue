<template>
	<view class="width-100 flex-center">
		<image :src="params.thumb | avatar" mode="" class="goods-thumb"></image>
		<view class="goods-info">
			<view class="goods-name">
				<text class="goods-text text-el2">{{ params.goods.name }}</text>
				<text class="text-24 text-666 cu-tag sm bg-f0 round" style="margin-top: 4rpx;">{{ params.goodsSku.groupName }}</text>
			</view>
			
			<view class="goods-sum">
				<text class="text-28 text-600 text-red">￥ {{ params.price | getPrice }}</text>
				
				<u-number-box v-model="params.number" :min="1" :max="10" @change="valChange" input-width="60" input-height="40" v-if="type == 'cart'"></u-number-box>
				<text class="text-24 text-999" v-if="type == 'order'">X {{ params.number }} </text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"t-cart-goods",
		props:{
			params:{
				type: Object,
				default: ()=>{}
			},
			father: {
				type: Object,
				default: ()=>{}
			},
			type: {
				type : String,
				default: 'cart'
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			valChange: function(e){
				this.params.check = false
				this.$emit('changeNumber', this.params, this.father)
			}
		}
	}
</script>

<style>
	.goods-thumb {
		width: 160rpx;
		height: 160rpx;
		border-radius: 8rpx;
	}
	
	.goods-info {
		flex: 1;
		height: 160rpx;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		justify-content: space-between;
		padding-left: 16rpx;
	}
	
	.goods-name {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	
	.goods-sum {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.goods-text {
		width: 100%;
		font-size: 30rpx;
		color: #333;
		font-weight: 600;
		line-height: 40rpx;
	}
</style>
