<template>
	<!-- #ifdef APP-PLUS-NVUE -->
	<view class="wrapper" :style="`height: ` + windowH + `px;`" v-if="show">
		<view :style="`height: ` + windowH * 0.76 + `px;`" class="area-wrapper">
	<!-- #endif -->
	
	
	<!-- #ifndef APP-PLUS-NVUE -->
	<view class="wrapper" v-if="show">
		<view class="area-wrapper">
	<!-- #endif -->
			<view class="title">
				
				<!-- #ifndef APP-PLUS-NVUE -->
				<view class="flex align-center">
				<!-- #endif -->
				
				<!-- #ifdef APP-PLUS-NVUE -->
				<view class="flex align-center flex-row">
				<!-- #endif -->
					<view class="flex-shink-0 visb">
						<text class="text-36 text-333">X</text>
					</view>
					<view class="flex-sub flex justify-center padding-top-sm">
						<text class="text-32 text-333 text-600">所在地区</text>
					</view>
					<!-- #ifndef APP-PLUS-NVUE -->
					<view class="flex-shink-0 padding-top padding-right" @click="hide">
						<u-icon name="close" color="#ccc" size="32"></u-icon>
					</view>
					<!-- #endif -->
					
					<!-- #ifdef APP-PLUS-NVUE -->
					<view class="flex-shink-0 padding-top padding-right" @click="hide">
						<text class="text-36 text-333">X</text>
					</view>
					<!-- #endif -->
					
				</view>
			</view>
			
			<!-- #ifndef APP-PLUS-NVUE -->
			<view class="width-100 flex align-center padding-tb solid-bottom region padding-left">
				<view class="" @click="changeActive(0)" v-if="level > -1">
					<text class="padding-bottom" :class="active == 0 ? 'text-red line-red solid-bottom' : ''">{{ province ? province : '请选择省' }}</text>
				</view>
				<view class="" @click="changeActive(1)" v-if="level > 0">
					<text class="padding-bottom" :class="active == 1 ? 'text-red line-red solid-bottom' : ''">{{ city ? city : '请选择市' }}</text>
				</view>
				<view class="" @click="changeActive(2)" v-if="level > 1">
					<text class="padding-bottom" :class="active == 2 ? 'text-red line-red solid-bottom' : ''">{{ area ? area : '请选择区/县' }}</text>
				</view>
				<view class="" @click="changeActive(3)" v-if="level > 2">
					<text class="padding-bottom" :class="active == 3 ? 'text-red line-red solid-bottom' : ''">{{ township ? township : '请选择乡镇' }}</text>
				</view>
				<view class="" @click="changeActive(4)" v-if="level > 3">
					<text class="padding-bottom" :class="active == 4 ? 'text-red line-red solid-bottom' : ''">{{ village ? village : '请选择街道' }}</text>
				</view>
			</view>
			<view class="flex-sub width-100 scroll-y flex flex-direction">
				<view class="width-100 padding-tb-xs padding-left" v-for="(item, index) in regionList" :key="index" @click="choice(item)">
					<text class="text-28 text-333">{{ item.name }}</text>
				</view>
			</view>
			<!-- #endif -->
			
			
			<!-- #ifdef APP-PLUS-NVUE -->
				<scroll-view scroll-y="true" :style="`height: ` + windowH * 0.76 + `px;padding-bottom: 120rpx`">
					<view class="width-100 padding-tb-xs padding-left" v-for="(item, index) in regionList" :key="index" @click="choice(item)">
						<text class="text-28 text-333">{{ item.name }}</text>
					</view>
				</scroll-view>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
	
	export default {
		name: 't-region-area',
		props:{
			windowH: {
				type:[ String, Number ],
				default:0
			},
			show:{
				type:Boolean,
				default:false
			},
			level:{
				type:[ String, Number ],
				default: 4
			}
			// province:{
			// 	type:String,
			// 	default:''
			// },
			// city:{
			// 	type:String,
			// 	default:''
			// },
			// area:{
			// 	type:String,
			// 	default:''
			// },
			// township:{
			// 	type:String,
			// 	default:''
			// },
			// list:{
			// 	type:Array,
			// 	default:()=>{}
			// },
		},
		data(){
			return {
				active:0,
				province:'',
				city:'',
				area:'',
				township:'',
				village:'',
				id:'',
				provinceId:'',
				cityId:'',
				areaId:'',
				townshipId:'',
				villageId:'',
			}
		},
		created() {
			this.getRegion()
		},
		computed:{
			...mapState('info', [ 'regionList' ])
		},
		methods:{
			...mapMutations('info', [ 'resetRegionList' ]),
			...mapActions('info', [ 'getRegionCList' ]),
			hide(){
				this.$emit('close')
				Object.assign(this.$data, this.$options.data())
				this.resetRegionList()
				this.getRegion()
			},
			
			choice(item){
				console.log(item.name)
				// this.id = item.id
				switch(this.active){
					case 0:
						this.provinceId = item.id
						this.province = item.name
						break
					case 1:
						this.cityId = item.id
						this.city = item.name
						break
					case 2:
						this.areaId = item.id
						this.area = item.name
						break
					case 3:
						this.townshipId = item.id
						this.township = item.name
						break
					case 4:
						this.villageId = item.id
						this.village = item.name
						break
				}
				if(this.active == this.level) return
				this.getRegion()
				if(this.active < this.level) this.active += 1
			},
			
			// getRegion
			getRegion(){
				let obj = new Object()
				let id = null
				switch(this.active){
					case 0:
						id = this.provinceId
						break
					case 1:
						id = this.cityId
						break
					case 2:
						id = this.areaId
						break
					case 3:
						id = this.townshipId
						break
					default:
						id = ''
						break
				}
				if(!id) id = 0
				obj.pid = id
				this.getRegionCList(obj)
			},
			
			changeActive(val){
				this.active = val 
				if(val == this.level) return
				if(val == 0) this.provinceId = ''
				if(val == 1) this.cityId = this.provinceId
				if(val == 2) this.areaId = this.cityId
				if(val == 3) this.townshipId = this.cityId
				this.getRegion()
			},
			
			
		},
		watch:{
			active:function(newVal, oldVal){
				console.log(newVal)
			},
			province:function(newVal, oldVal){
				if(newVal){
					this.city = ''
					this.cityId = ''
					this.area = ''
					this.areaId = ''
					this.township = ''
					this.townshipId = ''
					this.village = ''
					this.villageId = ''
					
					if(this.level == 0){
						let obj = new Object()
						obj.province = this.province
						obj.provinceId = this.provinceId
						obj.regionId = this.provinceId
						obj.regionName = this.province
						this.$emit('confirm', obj)
						this.$nextTick(function(){
							Object.assign(this.$data, this.$options.data())
							this.resetRegionList()
							this.getRegion()
						})
					}
				}
			},
			city:function(newVal, oldVal){
				if(newVal){
					this.area = ''
					this.areaId = ''
					this.township = ''
					this.townshipId = ''
					this.village = ''
					this.villageId = ''
					if(this.level == 1){
						let obj = new Object()
						obj.province = this.province
						obj.provinceId = this.provinceId
						obj.city = this.city
						obj.cityId = this.cityId
						obj.regionId = this.cityId
						obj.regionName = this.province + this.city
						this.$emit('confirm', obj)
						this.$nextTick(function(){
							Object.assign(this.$data, this.$options.data())
							this.resetRegionList()
							this.getRegion()
						})
					}
				}
			},
			area:function(newVal, oldVal){
				if(newVal){
					this.township = ''
					this.townshipId = ''
					this.village = ''
					this.villageId = ''
					
					if(this.level == 2){
						let obj = new Object()
						obj.province = this.province
						obj.provinceId = this.provinceId
						obj.city = this.city
						obj.cityId = this.cityId
						obj.district = this.area
						obj.districtId = this.areaId
						obj.regionId = this.areaId
						obj.regionName = this.province + this.city + this.area
						this.$emit('confirm', obj)
						this.$nextTick(function(){
							Object.assign(this.$data, this.$options.data())
							this.resetRegionList()
							this.getRegion()
						})
					}
				}
			},
			township:function(newVal, oldVal){
				if(newVal){
					this.village = ''
					this.villageId = ''
					if(this.level == 3){
						let obj = new Object()
						obj.province = this.province
						obj.provinceId = this.provinceId
						obj.city = this.city
						obj.cityId = this.cityId
						obj.district = this.area
						obj.districtId = this.areaId
						obj.township = this.township
						obj.townshipId = this.townshipId
						obj.regionId = this.townshipId
						obj.regionName = this.province + this.city + this.area + this.township
						this.$emit('confirm', obj)
						this.$nextTick(function(){
							Object.assign(this.$data, this.$options.data())
							this.resetRegionList()
							this.getRegion()
						})
					}
				}
			},
			village:function(newVal, oldVal){
				if(newVal){
					let obj = new Object()
					obj.province = this.province
					obj.provinceId = this.provinceId
					obj.city = this.city
					obj.cityId = this.cityId
					obj.district = this.area
					obj.districtId = this.areaId
					obj.township = this.township
					obj.townshipId = this.townshipId
					obj.village = this.village
					obj.villageId = this.villageId
					obj.regionId = this.villageId
					obj.regionName = this.province + this.city + this.area + this.township + this.village
					this.$emit('confirm', obj)
					this.$nextTick(function(){
						Object.assign(this.$data, this.$options.data())
						this.resetRegionList()
						this.getRegion()
					})
				}
			},
		}
	}
</script>

<style scoped>
	/* #ifndef APP-PLUS-NVUE */
	.wrapper {
		width: 100vw;
		height: 100vh;
		background-color: rgba(0,0,0,0.6);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999999;
	}
	.area-wrapper {
		width: 100%;
		height: 76%;
		position: absolute;
		left: 0;
		bottom: 0;
		background-color: #FFFFFF;
		border-radius: 30rpx 30rpx 0 0;
		display: flex;
		flex-direction: column;
	}
	
	.title {
		margin-bottom: 40rpx;
	}
	
	.region > view {
		white-space: nowrap;
		overflow: hidden;
		padding: 0 12rpx 0 0;
	}
	/* #endif */
	
	/* #ifdef APP-PLUS-NVUE */
	
	.wrapper {
		width: 750rpx;
		background-color: rgba(0,0,0,0.6);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999999;
	}
	.area-wrapper {
		width: 750rpx;
		position: absolute;
		left: 0;
		bottom: 0;
		background-color: #FFFFFF;
		border-radius: 30rpx 30rpx 0 0;
		display: flex;
		flex-direction: column;
	}
	
	text {
		font-size: 28rpx!important;
	}
	
	.title {
		margin-bottom: 40rpx;
	}
	
	.region > view {
		white-space: nowrap;
		overflow: hidden;
		padding: 0 12rpx 0 0;
	}
	/* #endif */
</style>
