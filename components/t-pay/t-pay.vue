<template>
	<view class="width-100" :class="payClass" :style="`margin-top: ${ top }rpx;`">
		<view class="">
			<t-cell :title="title" isSlot :border="border" right="" ></t-cell>
		</view>
		
		<u-radio-group v-model="pay" @change="selectPay" class="width-100">
			<view class="width-100 " v-for="(item, index) in payList" :key="index">
				<t-cell :leftIcon="item.icon" :lPlus="item.lPlus" :lIconColor="item.color" :lIconSize="item.size" right="" :title="item.label" isSlot border="" >
					<u-radio :name="item.value" active-color="orange">
					</u-radio>
				</t-cell>
			</view>
		</u-radio-group>
	</view>
</template>

<script>
	export default {
		props:{
			title:{
				type: String,
				default: '选择支付方式'
			},
			payClass: {
				type: String,
				default: ''
			},
			top: {
				type: [ String, Number ],
				default: 0
			},
			border: {
				type: Boolean,
				default: true
			}
		},
		data(){
			return {
				pay:'',
				payList:[
					// #ifndef H5
					{
						icon:'weixin-fill',
						color:"rgb(100,185,31)",
						size:'40',
						label:'微信',
						value:'wxpay',
						lPlus: true
					},
					{
						icon:'zhifubao-circle-fill',
						color:"rgb(77,143,231)",
						size:'40',
						label:'支付宝',
						value:'alipay',
						lPlus: true
					},
					// #endif
					// #ifdef H5
					{
						icon:'weixin-fill',
						color:"rgb(100,185,31)",
						size:'40',
						label:'微信',
						value:'h5',
						lPlus: true
					}
					// #endif
				],
			}
		},
		created() {
			// #ifndef H5
			this.pay = 'wxpay'
			// #endif
			
			// #ifdef H5
			this.pay = 'h5'
			// #endif
		},
		mounted(){
			this.payStatus()
		},
		methods:{
			selectPay(e){
				this.pay = e
				this.payStatus()
			},
			
			payStatus(){
				this.$emit('payStatus', this.pay)
			}
		}
		
	}
</script>

<style scoped>
	
</style>
