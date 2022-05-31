<template>
	<view class="width-100 flex flex-direction align-start">
		<text class="text-32 text-333 text-600">{{ params.title }}</text>
		<text class="text-28 text-999">{{ params.content }}</text>
		<view class="width-100 flex align-center margin-top">
			<view class="width-70">
				<view class="flex align-center">
					<image :src="item | avatar" mode="" class="avatar-180 margin-right" v-for="(item, index) in params.img" v-if="index < 2" :key="index"></image>
				</view>
			</view>
			
			<view class="flex-sub flex flex-direction align-end">
				<view class="flex-sub flex align-end">
					<text class="text-28 text-white bg-red padding-tb-xs padding-lr" @click="toRank()">竞价排名</text>
				</view>
				
				<view class="flex-sub flex align-end margin-tb-sm">
					<text class="text-28 text-white bg-orange padding-tb-xs padding-lr" @click="update()">刷新置顶</text>
				</view>
				
				<view class="flex-sub flex align-end">
					<text class="text-28 text-white bg-grey padding-tb-xs padding-lr" @click="deleteInfo()">删除信息</text>
				</view>
			</view>
		</view>
		<view class="width-100 flex align-center">
			<text class="text-24 text-999">{{ params.createTime }}</text>
			<view class="flex-center">
				<u-icon name="good" custom-prefix="custom-icon" size="36" color="#888888"></u-icon>
				<text class="info-read">{{ params.likeCount ? params.likeCount : 0 }}</text>
			</view>
			
			<view class="flex-center">
				<u-icon name="bad" custom-prefix="custom-icon" size="36" color="#888888"></u-icon>
				<text class="info-read">{{ params.notLikeCount ? params.notLikeCount : 0 }}</text>
			</view>
			
			<view class="flex-center">
				<text class="info-read">评论 {{ params.commentCount ? params.commentCount : 0 }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"t-info-admin",
		props: {
			params: {
				type: Object,
				default: ()=>{}
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			toRank: function(){
				this.$Router.push({
					name: 'info-rank',
					params: {
						type: this.params.type,
						id: this.params.id
					}
				})
			},
			
			update:function(){
				uni.showLoading({
					mask: true,
				})
				
				setTimeout(()=>{
					uni.hideLoading()
					this.$Tian.toast('刷新成功')
				}, 800)
			},
			
			deleteInfo: function(){
				this.$emit('delete', this.params.id)
			}
		}
	}
</script>

<style>
	.info-read {
		font-size: 24rpx;
		color: #999;
		font-weight: 400;
	}
	
	.flex-center {
		margin-left: 12rpx;
	}
</style>
