<template>
	<div>
		<view class="item" v-if="position == 'left'">
			<image :src="avatarU | avatar" mode="" class="avatar-80 round"></image>
			<view class="msg-detail">
				<text class="text-24 text-333" v-if="type == '00'">{{ params.content }}</text>
				<image :src="params.content | avatar" mode="widthFix" class="msg-img" v-else></image>
			</view>
		</view>
		<view class="item" v-if="position == 'right'">
			<view class="msg-detail justify-end">
				<text class="text-24 text-333" v-if="type == '00'">{{ params.content }}</text>
				<image :src="params.content | avatar" mode="widthFix" class="msg-img" v-else></image>
			</view>
			<image :src="avatarE | avatar" mode="" class="avatar-80 round"></image>
		</view>
	</div>
</template>

<script>
	export default {
		props: {
			params: {
				type: Object,
				default: ()=>{}
			},
			type: {
				type: [ String, Number ],
				default: 0
			},
			position: {
				type: [ String, Number ],
				default: 'left'
			},
			avatarE: {
				type: String,
				default: '../static/imgs/avatar-plus.png'
			},
			avatarU: {
				type: String,
				default: '../static/imgs/avatar-plus.png'
			}
		}
	}
</script>

<style scoped>
	.item {
		width: 750rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		padding: 0 30rpx;
		margin-bottom: 60rpx;
	}
	
	.msg-detail {
		display: flex;
		flex: 1;
		flex-direction: row;
		padding: 0 30rpx;
	}
	
	.msg-img {
		width: 400rpx;
	}
</style>
