<template>
	<view v-if="loading" :style="`color: ${ color };`" class="load-mask">
		<u-loading mode="circle" color="#f2463e" size="52" show></u-loading>
	</view>
</template>

<script>
	export default {
		name:"t-load",
		props:{
			loading: {
				type: Boolean,
				default: false
			},
			color: {
				type: String,
				default: 'rgba(0,0,0,0)'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.load-mask {
		width: 100vw;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		touch-action: none;
		z-index: 999999;
	}
</style>
