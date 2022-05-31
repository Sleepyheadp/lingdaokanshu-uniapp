<template>
	<view class="wrapper">
		<view class="navbar-height">
			
		</view>
		<view class="content-wrapper">
			<view class="width-100">
				<text class="text-333 text-28 text-600">{{ pageRouter == 'city' ? '选择乡镇' : '选择地区' }}</text>
			</view>
			<view class="width-100">
				<view class="grid col-3">
					<view class="" v-for="(item, index) in areaList" :key="index" @click="setAreaId(item.id)">
						<text class="cu-tag round  margin-top-sm" :class="areaId == item.id ? 'text-white bg-orange' : 'bg-gray text-333'">{{ item.name }}</text>
					</view>
				</view>
			</view>
			
			<view class="width-100 margin-top-xl">
				<view class="width-100">
					<text class="text-333 text-28 text-600">一级分类</text>
				</view>
				<view class="width-100" >
					<view class="grid col-3">
						<view class="" v-for="(item, index) in list" :key="index" @click="setFirstId(item.value, item.children)">
							<text class="cu-tag round  margin-top-sm" :class="firstId == item.value ? 'text-white bg-orange' : 'bg-gray text-333'">{{ item.label }}</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="width-100 margin-top-xl" v-if="secList.length > 0">
				<view class="width-100">
					<text class="text-333 text-28 text-600">二级分类</text>
				</view>
				<view class="width-100">
					<view class="grid col-3">
						<view class="" v-for="(item, index) in secList" :key="index" @click="setSecId(item.value, item.children)">
							<text class="cu-tag round  margin-top-sm" :class="secId == item.value ? 'text-white bg-orange' : 'bg-gray text-333'">{{ item.label }}</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="width-100 margin-top-xl" v-if="thrList.length > 0">
				<view class="width-100">
					<text class="text-333 text-28 text-600">三级分类</text>
				</view>
				<view class="width-100">
					<view class="grid col-3">
						<view class="" v-for="(item, index) in thrList" :key="index" @click="setThrId(item.value)">
							<text class="cu-tag round  margin-top-sm" :class="thrId == item.value ? 'text-white bg-orange' : 'bg-gray text-333'">{{ item.label }}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 底部按钮包裹 -->
		<view class="btn-wrapper">
			<view class="button bg-gray" style="color: #333;" @click="resetParame">
				重置
			</view>
			<view class="button theme-body" @click="sendMarketIds">
				确定
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			pageRouter:{
				type:String,
				default:'city'
			},
			areaList:{
				type:Array,
				default:()=>{}
			},
			list:{
				type:Array,
				default:()=>{}
			}
		},
		
		data() {
			return {
				areaId:null,
				firstId:null,
				firstList:[],
				secId:null,
				secList:[],
				thrId:null,
				thrList:[],
			}
		},
		mounted() {
			this.firstList = this.list
		},
		
		methods:{
			
			// 关闭
			resetScreen(){
				// this.$emit('close', false)
			},
			
			// 选择地区
			setAreaId(index){
				this.areaId = index
				
				this.$emit('getAreaCategory', this.areaId)
			},
			
			// 数据重置
			resetParame(id){
				this.areaId = null
				this.firstId = JSON.parse(JSON.stringify(null))
				this.firstList = JSON.parse(JSON.stringify([]))
				this.secId = JSON.parse(JSON.stringify(null))
				this.secList = JSON.parse(JSON.stringify([]))
				this.thrId = JSON.parse(JSON.stringify(null))
				this.thrList = JSON.parse(JSON.stringify([]))
				if(id) return
				this.$emit('getAreaCategory', 'resetList')
			},
			
			// 选中一二三级分类
			setFirstId(id, subList){
				this.firstId = id
				if(subList) this.secList = subList
			},
			
			setSecId(id, subList){
				this.secId = id
				if(subList) this.thrList = subList
			},
			
			setThrId(id){
				this.thrId = id
			},
			
			// 将选择的ID列表传递给父组件
			sendMarketIds(){
				let obj = new Object()
				let array = []
				if(this.firstId) array.push(this.firstId)
				if(this.secId) array.push(this.secId)
				if(this.thrId) array.push(this.thrId)
				if(this.areaId) obj.areaId = this.areaId
				obj.array = array
				
				this.$emit('getNewData', obj)
			}
		},
		
		destroyed() {
			this.resetParame(1)
		},
		
		watch:{
			
		}
	}
</script>

<style scoped>
	.wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
	
	.content-wrapper {
		width: 100%;
		flex-grow: 1;
		display: flex;
		align-items: center;
		/* justify-content: center; */
		flex-direction: column;
		padding:0 30rpx 30rpx 30rpx;
	}
	
	.btn-wrapper {
		width: 100%;
		height: 100rpx;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}
	
	.btn-wrapper::before {
		content: '';
		border-top: 1px solid rgba(0,0,0,0.1);
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.button {
		height: 100%;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
		color: #fff;
	}
</style>
