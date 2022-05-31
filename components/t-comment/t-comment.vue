<template>
	<view class="comment-item-wrapper">
		<image :src="comment.sysUser.avatar | avatar" mode="" class="avatar-80 round margin-right-sm"></image>
		<view class="comment-container">
			<text class="text-24 text-999">{{ comment.sysUser.nickName }}</text>
			<text class="comment-content">{{ comment.content }}</text>
			<view class="flex-center margin-top-xs">
				<text class="text-22 text-999">{{ comment.createTime | timeFrom }}</text>
				<text class="text-26 text-333 margin-left" @click="reply">回复</text>
			</view>
			<view class="comment-comment" v-if="comment.children[0]">
				<text class="comment-user" v-for="(comment, i) in comment.children" :key="i">{{ comment.sysUser.nickName + '：' }}
					<text class="text-333">{{ comment.content }}</text>
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"t-comment",
		props:{
			comment:{
				type: Object,
				default: ()=>{}
			},
		},
		data() {
			return {
				
			};
		},
		methods: {
			reply: function(){
				this.$emit('reply', this.comment.id)
			}
		}
	}
</script>

<style scoped>
	.comment-item-wrapper {
		flex: 1;
		display: flex;
		align-items: flex-start;
		justify-content: center;
	}
	
	.comment-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		flex: 1;
	}
	
	.comment-content {
		font-size: 24rpx;
		color: #333;
		margin-top: 16rpx;
	}
	
	.comment-comment {
		width: 100%;
		padding: 16rpx;
		background-color: #f1f2f2;
		border-radius: 14rpx;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-top: 16rpx;
	}
	
	.comment-user {
		font-size: 24rpx;
		color: #6987f4;
		margin: 8rpx 0;
	}
	
	.comment-user-content {
		color: #333;
	}
</style>
