<template>
	<view class="mask" v-if="show" id="mask" @click.stop="close">
		<view class="container" id="container" @click.stop="close">
			<view class="flex-sub flex flex-direction justify-start width-100 scroll-y">
				<view class="padding-lr width-100">
					<t-cell :title="pid == 0 ? '选择省份' : '选择乡镇'" right="" titleClass="text-32 text-333 text-700"></t-cell>
				</view>
				<view class="area-wrapper">
					<view class="area-item" @click="selectArea(item)" :class="item.id == active ? 'text-white bg-theme' : 'bg-f1 text-333'" v-for="(item, index) in list" :key="index">
						<text class="">{{ item.name }}</text>
					</view>
				</view>
				
				<view class="flex-sub flex flex-direction justify-start width-100" v-if="cateList[0]">
					<view class="padding-lr width-100">
						<t-cell title="一级分类" right="" titleClass="text-32 text-333 text-700"></t-cell>
					</view>
					<view class="area-wrapper">
						<view class="area-item" @click="selectFirstId(item)" :class="item.id == firstId ? 'text-white bg-theme' : 'bg-f1 text-333'" v-for="(item, index) in cateList" :key="index">
							<text class="">{{ item.name }}</text>
						</view>
					</view>
				</view>
				
				<view class="flex-sub flex flex-direction justify-start width-100" v-if="subCateList[0]">
					<view class="padding-lr width-100">
						<t-cell title="二级分类" right="" titleClass="text-32 text-333 text-700"></t-cell>
					</view>
					<view class="area-wrapper">
						<view class="area-item" @click="subCateId = item.id" :class="item.id == subCateId ? 'text-white bg-theme' : 'bg-f1 text-333'" v-for="(item, index) in subCateList" :key="index">
							<text class="">{{ item.name }}</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="screen-foot">
				<view class="button bg-f0 text-333" @click="reset">
					重置
				</view>
				<view class="button bg-theme text-white" @click="confirm">
					确定
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import API from '@/utils/api.js'
	import { mapActions, mapGetters, mapMutations, mapState	} from 'vuex'
	
	export default {
		name:"t-screen",
		props: {
			show: {
				type: Boolean,
				default: false
			},
			pid: {
				type: [ String, Number ],
				default: 0
			},
			type: {
				type: Boolean,
				default: false,
			},
			addr: {
				type: String,
				default: ''
			},
			regionId: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				list: [],
				active: null,
				cateList: [],
				firstId: null,
				subCateId: null,
				subCateList: [],
			};
		},
		created() {
		},
		computed: {
			...mapState('user', [ 'userinfo', 'myStore' ]),
		},
		mounted() {
			
		},
		methods: {
			close: function(e){
				console.log(e.currentTarget.id)
				if(e.currentTarget.id == 'mask') return this.$emit('close', 1)
			},
			
			getAreaList: function(){
				this.$Tian.loading()
				if(this.addr){
					let obj = new Object()
					// #ifndef H5
					uni.getLocation({
						geocode: true,
						success: addr =>{
							obj.city = addr.address.city
							obj.district = addr.address.district
							return API.global.getPid(obj)
								.then(res =>{
									this.pid = res.data.id
									return API.global.getAreaList(this.pid)
										.then(res =>{
											this.getCategory()
											this.list = res.rows
											this.$nextTick(function(){
												this.$Tian.hideLoading()
											})
										})
								})
								.catch(rej =>{
									console.log(rej, '我是失败的')
								})
						}
					})
					
					// #endif
					
					// #ifdef H5
					obj.city = '楚雄彝族自治州'
					obj.district = '禄丰县'
					return API.global.getPid(obj)
						.then(res =>{
							this.pid = res.data.id
							return API.global.getAreaList(this.pid)
								.then(res =>{
									this.list = res.rows
									this.$nextTick(function(){
										uni.hideLoading()
									})
								})
						})
						.catch(rej =>{
							console.log(rej, '我是失败的')
						})
					// #endif
					
				} else this.pid = 0
				return API.global.getAreaList(this.pid)
					.then(res =>{
						this.list = res.rows
						this.$nextTick(function(){
							this.$Tian.hideLoading()
						})
					})	
			},
			
			selectArea: function(e){
				if(this.active == e.id) return
				this.cateList = JSON.parse(JSON.stringify([]))
				this.firstId = null
				this.subCateId = null
				this.subCateList = JSON.parse(JSON.stringify([]))
				this.active = e.id
				// this.regionId = e.id
				this.getCategory()
			},
			
			selectFirstId: function(e){
				console.log(e)
				this.firstId = e.id
				this.subCateList = e.children
			},
			
			getCategory: function(){
				if(this.addr && this.subCateId) return
				let obj = new Object()
				obj.type = this.type ? 1 : 0
				obj.regionId = this.addr ? this.pid : this.active
				
				
				return this.API.global.getCategoryList(obj)
					.then(res =>{
						this.cateList = res.rows
						
					})
			},
			
			confirm: function(){
				let obj = new Object()
				obj.cateID = this.subCateId
				obj.areaID = this.active
				
				this.$emit('confirm', obj)
			},
			
			reset: function(){
				this.active = null 
				this.cateList = [] 
				this.firstId = null 
				this.subCateId = null 
				this.subCateList = [] 
			}
		},
		watch: {
			show: function(oldVal, newVal){
				console.log(newVal)
				if(newVal == false){
					this.getAreaList()
				}
			}
		}
	}
</script>

<style>
	.mask {
		width: 750rpx;
		height: 100vh;
		position: fixed;
		top: 0;
		right: 0;
		background-color: rgba(0,0,0,0.6);
		z-index: 9888;
	}
	
	.container {
		width: 580rpx;
		height: 100vh;
		position: absolute;
		right: 0;
		top: 0;
		z-index: 9999;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 66rpx;
	}
	
	.screen-foot {
		width: 580rpx;
		height: 100rpx;
		background-color: #F1F1F1;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	},
	
	.area-wrapper {
		width: 580rpx;
		flex-wrap: wrap;
		align-items: center;
		justify-content: flex-start;
		display: flex;
		flex-direction: row;
		overflow-y: scroll;
		padding: 30rpx;
	}
	
	.area-item {
		padding: 4rpx 28rpx;
		border-radius: 888rpx;
		font-size: 26rpx;
		margin-right: 18rpx;
		margin-bottom: 22rpx;
	}
	
	.button {
		flex: 1;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
	}
</style>
