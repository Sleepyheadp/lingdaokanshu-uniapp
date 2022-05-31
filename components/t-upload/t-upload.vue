<template>
	<view class="width-100 flex-shink-0">
		<text class="text-28 text-333">{{ title }}</text>
		<view class="grid col-3 " :class="title ? 'margin-top-xl margin-bottom' : ''">
			<view class="avatar-160 margin-right-sm relative" @click="showDel(index, 'goodsImgs')" v-for="(item, index) in imgs" :key="index">
				<view class="del-icon">
					<image src="@/static/imgs/icon-del-red.png" mode="" class="avatar-60"></image>
				</view>
				<image :src="item | avatar" class="avatar-160"></image>
			</view>
			<view class="" v-if="!text">
				<image src="@/static/imgs/user_addimg.png" v-if="imgs.length < maxLength" mode="" class="avatar-160 flex-shink-0" @click="uploadImg"></image>
			</view>
			<view class="avatar-160 flex-shink-0 dashed radius-20 line-red relative flex align-center flex-direction justify-center" @click="uploadImg" v-if="text && imgs.length < maxLength">
				<t-icon name="add-select" size="66" color="red"></t-icon>
				<text class="text-32 text-red">{{ text }}</text>
			</view>
		</view>
		<u-modal v-model="showDelFlag" @confirm="del" show-cancel-button content="确定要删除该图片吗" ></u-modal>
	</view>
</template>

<script>
	import { mapActions, mapGetters, mapMutations, mapState	} from 'vuex'
	
	export default {
		props:{
			title: {
				type: String,
				default: '图片'
			},
			maxLength:{
				type: [ String, Number ],
				default: 4
			},
			text: {
				type: String,
				default: ''
			},
			imgs: {
				type: [ Array, String ],
				default: ()=>[]
			}
		},
		data() {
			return {
				showDelFlag: false,
				index: null,
			}
		},
		mounted() {
			
		},
		destroyed() {
			this.imgs = JSON.parse(JSON.stringify([]))
			console.log(this.imgs)
		},
		computed: {
			...mapState('global', [ 'winW', 'winH', 'sysBar', 'sysBarStyle' ]),
		},
		methods: {
			uploadImg(){
				this.$Tian.choseImg()
					.then(res =>{
						uni.showLoading({
							title:'上传中······',
							mask: true,
						})
						let src = res[0].path
						this.$Tian.uploadImg(src, 'file')
							.then(a=>{
								this.imgs.push(a)
								this.$emit('upload', this.imgs)
								this.$forceUpdate()
								uni.hideLoading()
							})
							.catch(b=>{
								console.log(b)
							})
					})
					.catch(rej =>{
						console.log(rej,'失败')
					})
			},
			
			showDel(index, type){
				this.index = index
				this.showDelFlag = true
			},
			
			del(e){
				this.imgs.splice(this.index, 1)
				this.$emit('upload', this.imgs)
				this.showDelFlag = false
			},
			
			hide(){
				this.showDelFlag = false
			}
		}
	}
</script>

<style >
	.text-area {
		width: 100%;
		height: 160rpx;
		background-color: #F1F1F1;
		border-radius: 20rpx;
		padding: 20rpx;
		margin-top: 30rpx;
		font-size: 28rpx;
	}	
	
	.upload-img {
		width: 160rpx;
		height: 160rpx;
		border-radius: 888rpx;
		padding: 40rpx;
		border-radius: 12rpx;
	}
	
	.del-icon {
		width: 160rpx;
		height: 160rpx;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 99;
		background-color: rgba(255, 255, 255, 0.6);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.avatar-160 {
		width: 160rpx!important;
		height: 160rpx!important;
		flex-shrink: 0;
	}
</style>
