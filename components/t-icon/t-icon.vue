<template>
	<view class="icon-wrapper">
		<view class="" v-if="plus">
			<u-icon :name="name" :size="size" :color="color"></u-icon>
		</view>
		<view class="" v-else>
			<u-icon :name="name" custom-prefix="custom-icon" :size="size" :color="color"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		name:"t-icon",
		props:{
			plus: {
				type: Boolean,
				default: false
			},
			name: {
				type: String,
				default: 'arrow-right'
			},
			size: {
				type: [ Number, String ],
				default: 30
			},
			color: {
				type: String,
				default: '#999999'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
</style>
