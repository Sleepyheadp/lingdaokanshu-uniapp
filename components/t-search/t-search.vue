<template>
	<view class="width-100 flex-center">
		<view class="flex-sub flex-center round padding-lr" :style="`background-color: ${ back };height: ${ height }rpx;`">
			<t-icon :name="icon" v-if="icon" :size="iconSize" :color="iconColor"></t-icon>
			<input type="text" value="" @confirm="search" v-model="keys" :placeholder="placeholder" :placeholder-class="placeClass" :class="inputClass" />
		</view>
		<text :class="searchClass" v-if="searchText" style="transform: translateY(-10%);" @click="search">{{ searchText }}</text>
	</view>
</template>

<script>
	export default {
		name:"t-search",
		props: {
			mode: {
				type: String,
				default: ''
			},
			icon: {
				type: String,
				default: 'search'
			},
			iconSize: {
				type: [ String, Number ],
				default: 42
			},
			iconColor: {
				type: String,
				default: '#999'
			},
			back: {
				type: String,
				default: '#f1f1f1'
			},
			height: {
				type: [ String, Number ],
				default: 60,
			},
			
			placeholder: {
				type: String,
				default: '请输入关键字'
			},
			
			placeClass: {
				type: String,
				default: 'place-class'
			},
			inputClass: {
				type: String,
				default: 'input-class'
			},
			
			searchText: {
				type: String,
				default: '搜索'
			},
			searchClass:{
				type: String,
				default: 'text-32 text-333 padding-left-sm'
			}
		},
		data() {
			return {
				keys: null,
			};
		},
		methods: {
			search: function(){
				if(!this.keys) return this.$Tian.toast('写点什么吧')
				
				this.$emit('search', this.keys)
			}
		}
	}
</script>

<style>
	.input-class {
		flex: 1;
		text-align: left;
		padding-left: 12rpx;
	}
	
	.place-class {
		transform: translateY(10%);
	}
</style>
