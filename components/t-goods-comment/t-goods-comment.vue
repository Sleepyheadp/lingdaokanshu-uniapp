<template>
	<view class="component flex-direction">
		<view class="user-info">
			<view class="flex-center">
				<image :src="params.sysUser.avatar | avatar" mode="" class="avatar-80 round"></image>
				<text class="text-24 text-999 margin-left-xs">{{ params.sysUser.nickName }}</text>
			</view>
			<text class="text-24 text-666">{{ params.createTime | timeFrom }}</text>
		</view>
		<text class="text-24 text-333 margin-tb">{{ params.content }}</text>
		<view class="width-100 grid col-4">
			<view class="" v-for="(img, index) in JSON.parse(params.img)" :key="index">
				<image :src="img | avatar" mode="" class="avatar-140 solid" @click="$Tian.IMGHandler(img)"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"t-goods-comment",
		props:{
			params:{
				type:Object,
				default: ()=>{}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.user-info {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
