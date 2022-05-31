<template>
	<view class="width-100 flex flex-direction ">
		<view class="flex-between">
			<text class="text-32 text-333">订单号：{{ params.id }}</text>
			<text class="text-28 text-999">{{ params.status | orderStatus }}</text>
		</view>
		<view class="width-100 ">
			<view class="goods solid-bottom" v-for="(item, index) in params.goodsOrderInfos">
				<image :src="JSON.parse(item.goodsSku.logo)[0] | avatar" mode="" class="avatar-140 margin-right-xs radius-10"></image>
				<view class="flex flex-direction flex-sub height-140 justify-between">
					<view class="flex-sub flex justify-between">
						<text class="width-70 text-333 text-28 text-600">{{ item.goods.name }}</text>
						<text class="text-24 text-999">￥ {{ item.price | getPrice }}</text>
					</view>
					
					<view class="flex width-100 justify-between">
						<text class="text-24 text-666 cu-tag sm bg-f0 round" style="margin-top: 4rpx;">{{ item.goodsSku.groupName }}</text>
						<text class="text-24 text-999">￥ {{ item.number }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="width-100 flex align-center justify-end padding-top-sm">
			<text class="text-24 text-999">共 {{ goodsSum }} 件商品 合计：</text>
			<text class="text-32 text-333 text-700">{{ params.price | getPrice }}</text>
		</view>
		
		<view class="width-100 flex align-center justify-end padding-top-sm" v-if="user == 'user'">
			<view class="button solid line-red" @click="$Router.push({ name: 'user-order-detail', params: { id: params.id } })">
				查看详情
			</view>
			<view class="button solid line-red"  v-if="params.status == 2 || params.status == 3" @click="$Router.push({ name: 'after-sale', params: { user: 'user' } })">
				申请售后
			</view>
			<view class="button bg-red" v-if="params.status == 2" @click="confirmOrder">
				确认收货
			</view>
			<view class="button bg-red" v-if="params.status == 0" @click="pay(params.id)">
				立即支付
			</view>
			<view class="button bg-red" v-if="params.status == 3" @click="commentOrder()">
				立即评价
			</view>
		</view>
		
		<view class="width-100 flex align-center justify-end padding-top-sm" v-if="user == 'shop'">
			<view class="button solid line-red" @click="$Router.push({ name: 'user-order-detail', params: { id: params.id } })">
				查看详情
			</view>
			<!-- <view class="button solid line-red">
				申请售后
			</view> -->
			<view class="button bg-red" v-if="params.status == 1" @click="sendGoods()">
				立即发货
			</view>
<!-- 			<view class="button bg-red" v-if="params.status == 0" @click="pay(params.id)">
				立即支付
			</view> -->
		</view>
		
	</view>
</template>

<script>
	const Big = require('big.js')
	
	export default {
		name:"t-order-goods",
		props: {
			params: {
				type: Object,
				default: ()=>{}
			},
			user: {
				type: String,
				default: 'user'
			},
		},
		data() {
			return {};
		},
		computed: {
			sum: function(){
				let _sum = Big(this.params.price) * this.params.number
				
				return _sum
			},
			
			goodsSum: function(){
				let sum = 0
				let data = this.params.goodsOrderInfos
				for(let i in data){
					sum += data[i].number
				}
				
				return sum
			},
		},
		methods: {
			pay: function(e){
				this.$emit('pay', e)
			},
			
			sendGoods: function(){
				let obj = {
					id: this.params.id,
					status: 2
				}
				
				this.$emit('sendGoods', obj)
			},
			
			confirmOrder: function(){
				let obj = {
					id: this.params.id,
					status: 3
				}
				
				this.$emit('sendGoods', obj)
			},
			
			commentOrder: function(){
				this.$Router.push({
					name: 'order-goods',
					params: {
						id: this.params.id
					}
				})
			}
		}
	}
</script>

<style>
	.goods {
		width: 100%;
		align-items: center;
		display: flex;
		align-items: center;
		padding: 28rpx 0;
	}
	
	.button {
		width: 160rpx;
		height: 60rpx;
		border-radius: 888rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24rpx;
		margin-left: 18rpx;
	}
</style>
