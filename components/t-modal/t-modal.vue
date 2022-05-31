<template>
	<view class="wrapper" v-if="show">
		<view class="modal-wrapper">
			<view class="modal-title" v-if="title">
				<text class="text-32 text-333">{{ title }}</text>
			</view>
			<view class="modal-content">
				<text class="text-28 text-333 " v-if="!isSlot">{{ content }}</text>
				<slot v-else></slot>
			</view>
			<view class="modal-footer">
				<view class="flex-sub flex-center" @click="cancel()">
					{{ cancelText }}
				</view>
				
				<view class="flex-sub flex-center" @click="confirm()">
					<text class="text-28 text-red">{{ confirmText }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"t-modal",
		props: {
			show: {
				type: Boolean,
				default: false
			},
			isSlot: {
				type: Boolean,
				default: false
			},
			title: {
				type: String,
				default: '提示'
			},
			content: {
				type: String,
				default: '您确定要删除吗？'
			},
			cancelText: {
				type: String,
				default: '取消'
			},
			confirmText: {
				type: String,
				default: '确认'
			},
		},
		data() {
			return {
				
			};
		},
		methods: {
			cancel: function(){
				this.$emit('cancel', false)
			},
			confirm: function(){
				this.$emit('confirm', true)
			}
		}
	}
</script>

<style>
	.wrapper {
		width: 100vw;
		height: 100vh;
		background-color: rgba(0,0,0,0.6);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		touch-action: none;
	}
	
	.modal-wrapper {
		width: 78%;
		min-height: 320rpx;
		background-color: #fff;
		border-radius: 12rpx;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -70%);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.modal-title {
		width: 100%;
		height: 100rpx;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.modal-content {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.modal-footer {
		width: 100%;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-top: 1rpx solid rgba(0,0,0,0.1);
	}
</style>
