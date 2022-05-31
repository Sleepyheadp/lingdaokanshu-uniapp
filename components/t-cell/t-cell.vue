<template>
	<view class="t-cell-wrapper" :class="cellClass ? cellClass : border ? 'solid-bottom' : ''" :style="`height: ${ height }rpx;`" >
		<view class="left" v-if="title">
			<t-icon :name="leftIcon" :plus="lPlus" :color="lIconColor" :size="lIconSize" v-if="leftIcon" style="margin-right: 8rpx;"></t-icon>
			<text :class="titleClass">{{ title }}</text>
		</view>
		
		<view class="right" :class="rightPosition" >
			<text :class="rightClass">{{ right }}</text>
			<view class="" v-if="!isSlot">
				<t-icon :name="rightIcon" :plus="rPlus" :color="rIconColor" :size="rIconSize" v-if="rightIcon"></t-icon>
			</view>
			<slot v-else></slot>
		</view>
	</view>
</template>

<script>
	
	export default {
		name:"t-cell",
		props: {
			cellClass: {
				type: String,
				default: ''
			},
			border: {
				type: Boolean,
				default: false
			},
			height: {
				type: [ String, Number ],
				default: 80
			},
			title: {
				type: String,
				default: '用户名'
			},
			titleClass: {
				type: String,
				default: 'text-28 text-333'
			},
			rightClass: {
				type: String,
				default: 'text-28 text-333 no-wrap'
			},
			leftIcon: {
				type: String, 
				default: ''
			},
			lIconColor:{
				type: String,
				default: ''
			},
			lIconSize: {
				type: [ String, Number ],
				default: ''
			},
			lPlus: {
				type: Boolean,
				default: false,
			},
			right: {
				type: [ String, Number ],
				default: '查看'
			},
			rightIcon: {
				type: String, 
				default: ''
			},
			rIconColor:{
				type: String,
				default: ''
			},
			rIconSize: {
				type: [ String, Number ],
				default: ''
			},
			rPlus: {
				type: Boolean,
				default: false,
			},
			isSlot: {
				type: Boolean,
				default: false,
			},
			rightPosition: {
				type: String,
				default: 'justify-end'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.t-cell-wrapper {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.left {
		display: flex;
		align-items: center;
		min-width: 160rpx;
		flex-shrink: 0;
	}
	
	.right {
		display: flex;
		align-items: center;
		flex: 1;
	}
</style>
