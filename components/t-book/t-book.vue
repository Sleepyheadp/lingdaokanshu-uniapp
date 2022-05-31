<template>
	<view class="padding bg-white">
		<u-parse :html="html"></u-parse>
		
		<view class="bg-red padding-lr padding-tb-xs round" style="width: 160rpx;" @click="getBook()">
			下一章
		</view>
	</view>
</template>

<script>
	export default {
		name:"t-book",
		data() {
			return {
				url: 'https://www.sobiquge.com/book/56077/',
				pages: 29593,
				html: ''
			};
		},
		mounted() {
			this.getBook()
		},
		methods: {
			getBook(){
				uni.showLoading({
					mask: true
				})
				return this.API.global.getContent({ pages: this.pages })
					.then(res =>{
						let a = 'adasdsadada'
						this.html = JSON.parse(res.data).content
						uni.setNavigationBarTitle({
							title: JSON.parse(res.data).title.split('title>')[1].split('_')[0]
						})
						this.pages += 1
						uni.pageScrollTo({
							scrollTop: 0,
							duration: 0
						})
						uni.hideLoading()
					})
			}
		}
	}
</script>

<style>

</style>
