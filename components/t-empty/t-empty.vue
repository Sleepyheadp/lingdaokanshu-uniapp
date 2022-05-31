<template>
	<view class="flex-center flex-direction">
		<image :src="src | avatar" mode="" :class="imgClass"></image>
		<text class="margin-top" :class="textClass">{{ text }}</text>
	</view>
</template>

<script>
	export default {
		name:"t-empty",
		props: {
			src: {
				type: String,
				default: '/static/imgs/empty.png'
			},
			imgClass: {
				type: String,
				default: "avatar-260"
			},
			
			text: {
				type: String,
				default: '暂无数据'
			},
			
			textClass: {
				type: String,
				default: 'text32 text-333 text-600'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
