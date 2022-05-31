<template>
	<view class="width-100">
		<scroll-view :scroll-x="scroll" :scroll-with-animation="animation" :scroll-left="scrollX" style="width: 100%;">
			<view class="width-100 flex">
				<view class="tab-item" v-for="(item, index) in list" :id="`tab`+ index" :key="index" @click="change(index)"
				:style="`height: ${ height }rpx;${ active == index ? 'border-bottom-color: ' + activeColor + ';color: ' + activeColor : 'border-bottom-color: rgba(0,0,0,0)' + ';color: #333' }`">
						<text class="tab-title">{{ item.label }}</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"t-tab",
		props: {
			list: {
				type: Array,
				default: ()=>{}
			},
			scroll: {
				type: Boolean,
				default: false
			},
			active: {
				type: [ String, Number ],
				default: 0
			},
			height: {
				type: [ String, Number ],
				default: 80
			},
			activeColor: {
				type: String,
				default: '#f7847a'
			},
			
			animation: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				scrollX: 0,
			};
		},
		methods: {
			change: function(e){
				this.$emit('change', e)
				this.$Tian.getRect('#tab' + e)
					.then(res =>{
						// 获取当前下标的宽度
						let width = res.width
						this.getLeftSum(e)
							.then(res =>{
								let sysinfo = uni.getSystemInfoSync()
								this.scrollX = res - sysinfo.screenWidth / 2 + 4 - width / 2
							})
					})
				// if(this.scroll){
				// 	if(e < 3 ) return
				// 	console.log(e)
				// 	this.scrollX = e * 70
				// }
			},
			
			getLeftSum: function(e){
				return new Promise((resolve, reject)=>{
					let data = this.list
					let sum = 0
					for(let i in data){
						this.$Tian.getRect('#tab' + i)
							.then(res =>{
								// 获取当前下标的宽度
								sum += res.width + 10
								if(i == e){
									return resolve(sum)
									// this.$Tian.getRect('#tab' + e)
									// 	.then(a =>{
									// 		console.log(a.width, sum)
									// 		sum = sum
									// 		resolve(sum)
									// 	})
								}
							})
					}
				})
			}
		}
	}
</script>

<style>
	.tab-item {
		min-width: 140rpx;
		flex-shrink: 0;
		margin-right: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom-width: 2rpx;
		border-bottom-style: solid;
	}
	
	.tab-title {
		font-size: 28rpx;
	}
</style>
