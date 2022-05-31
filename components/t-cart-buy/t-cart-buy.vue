<template>
	<view v-if="mode" class="mask">
		<view class="goods-info">
			<view class="width-100 flex align-center">
				<image :src="params.thumb | avatar" mode="" class="avatar-140"></image>
				<view class="flex-sub flex flex-direction align-start justify-between height-140 padding-right-xl padding-left-sm">
					<text class="text-36 text-333 text-el1 text-600">{{ params.name }}</text>
					<view class="align-center flex">
						<text class="text-34 text-red">¥ {{ goods.price ? goods.price : params.price | getPrice }}</text>
						<text class="text-24 text-999 margin-left">库存: {{ goods.stock ? goods.stock : '选择规格后查看' }}</text>
					</view>
				</view>
			</view>
			
			<view class="width-100 flex flex-direction align-start">
				<view class="flex align-start flex-direction margin-tb-sm" v-for="(item, index) in goodsSku" :key="index">
					<text class="text-32 text-333 text-700 margin-bottom-sm">{{ item.name }}</text>
					<view class="flex align-center flex-wrap">
						<text class="category-item" :class="obj[item.name] == cate.id ? 'bg-red line-red' : ''" v-for="(cate, cateI) in item.children" :key="cateI" @click="addCategory(item.name,cate.id)">{{ cate.name }}</text>
					</view>
				</view>
			</view>
			
			<view class="width-100 flex align-center justify-between">
				<text class="text-32 text-333 text-700 margin-bottom-sm">数量</text>
				<u-number-box v-model="sum" @change="valChange" :min="1" :max="10"></u-number-box>
			</view>
			
			<view class="enter" @click="submit()">
				确定
			</view>
			<view class="icon-close" @click="close">
				<u-icon name="close" color="#434" size="32"></u-icon>
			</view>
		</view>
		
		<t-load :loading="loading"></t-load>
	</view>
</template>

<script>
	export default {
		name:"t-cart-buy",
		props:{
			params:{
				type:Object,
				default: ()=>{}
			},
			mode: {
				type: Boolean,
				default: false
			},
			goodsSku: {
				type:Object,
				default: ()=>{}
			}
		},
		data() {
			return {
				obj: {},
				loading: false,
				sum: 1,
				goods: {},
			};
		},
		onBackPress(e) {
			console.log(e)
			console.log('ssss')
		},
		methods:{
			addCategory(name, category){
				this.loading = true
				this.$set(this.obj, name, category)
				
				let count = 0
				for(let i in this.obj){
					count +=1
				}
				console.log(count)
				if(count == this.goodsSku.length) return this.getGoodsSkuPrice()
				else {
					setTimeout(()=>{
						return this.loading = false
					}, 500)
				}
			},
			
			submit(){
				let _data = this.obj
				let _array = []
				for(let i in _data){
					_array.push(_data[i])
				}
				for(let i in this.goodsSku){
					if(!_data[this.goodsSku[i].name]) return this.$Tian.toast('请选择' +this.goodsSku[i].name)
				}
				
				let goods = new Object()
				goods.storeId = this.params.store.id
				goods.goodsId = this.params.id
				goods.goodsSkuId = this.goods.id
				goods.number = this.sum
				this.$emit('goodsSku', goods)
			},
			valChange(e){
				
			},
			
			close(){
				this.$emit('close', 'close')
			},
			
			getGoodsSkuPrice: function(){
				let ids = []
				for(let i in this.obj){
					ids.push(this.obj[i])
				}
				
				let obj = {
					goodsId: this.params.id,
					groupId: ids
				}
				
				return this.API.goods.goodsSkuPrice(obj)
					.then(res =>{
						console.log(res)
						this.goods = res.rows[0]
						setTimeout(()=>{
							this.loading = false
						}, 500)
					})
				
			}
		}
	}
</script>

<style scoped>
	.mask {
		width: 100vw;
		height: 100vh;
		background-color: rgba(0,0,0,0.4);
		touch-action: none;
		z-index: 1;
		position: fixed;
		left: 0;
		top: 0;
	}
	
	.goods-info {
		width: 100%;
		padding: 30rpx;
		position: absolute;
		left: 0;
		bottom: 0;
		background-color: #fff;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
	}
	
	.icon-close {
		position: absolute;
		top: 0rpx;
		right: 0rpx;
		width: 60rpx;
		height: 60rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #fff;
	}
	
	.category-item {
		padding: 12rpx 32rpx;
		margin-right: 12rpx;
		margin-bottom: 28rpx;
		background-color: #f1f2f2;
		border-radius: 888rpx;
	}
	
	.enter {
		width: 690rpx;
		margin: 120rpx auto 50rpx;
		height: 80rpx;
		border-radius: 888rpx;
		background-color: #f2463e;
		font-size: 28rpx;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
