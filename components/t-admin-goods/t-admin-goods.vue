<template>
	<view class="width-100 flex-direction">
		<view class="flex-between width-100 align-center padding-left-sm">
			<image :src="params.img[0] | avatar" mode="" class="avatar-120 radius-10"></image>
			<view class="flex-sub flex-between flex-direction align-start padding-left-sm">
				<text class="text-32 text-333 text-700 text-el1">{{ params.name }}</text>
				<text class="text-24 text-666 text-400 text-el1">{{ params.intro }}</text>
				
				<view class="flex-sub flex-center width-100 margin-top-xs">
					<text class="goods-info text-999">库存：{{ params.stock ? params.stock : 0 }}</text>
					<text class="goods-info text-999">销量：{{ params. saleCount? params.saleCount : 0 }}</text>
					<text class="goods-info text-theme text-32"> ￥ {{ params.price | getPrice }}</text>
				</view>
			</view>
		</view>
		<view class="width-100 flex align-center justify-end margin-top">
			<view class="btn-menu bg-theme" @click="showModal(1)">删除</view>
			<view class="btn-menu bg-orange" @click="showModal(2)">编辑</view>
			<view class="btn-menu bg-theme" @click="showModal(3)">{{ params.status ? '下架' : '上架' }}</view>
		</view>
		
		<t-modal :show="show" :content="content" @cancel="close" @confirm="confirm"></t-modal>
	</view>
</template>

<script>
	export default {
		name:"t-admin-goods",
		props: {
			params: {
				type: Object,
				default: ()=>{}
			}
		},
		data() {
			return {
				show: false,
				type: null,
				content: null,
			};
		},
		methods: {
			close: function(){
				this.show = false
				this.content = null
			},
			
			showModal: function(e){
				if(e == 1) this.content = '确定要删除该商品吗？'
				if(e == 2) this.content = '确定要编辑该商品吗？'
				if(e == 3) this.content = this.params.status ? '确定要下架该商品吗？' : '确定要上架该商品吗？'
				this.show = true
				this.type = e
			},
			
			confirm: function(){
				this.handler()
			},
			
			handler: function(){
				let type = null
				if(this.type == 1) type = 'del'
				if(this.type == 2) type = 'edit'
				if(this.type == 3) type = 'unsell'
				this.$emit(type, this.params)
				this.show = false
			}
		}
	}
</script>

<style>
	.btn-menu {
		min-width: 120rpx;
		height: 42rpx;
		border-radius: 888rpx;
		font-size: 28rpx;
		color: #fff;
		margin-left: 28rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.goods-info {
		min-width: 120rpx;
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		font-size: 24rpx;
	}
</style>
