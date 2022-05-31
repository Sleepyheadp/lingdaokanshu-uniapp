<template>
	<view class="width-100 flex flex-direction">
		<view class="" v-if="!type">
			<view class="bg-f0 padding-lr padding-tb-xs round width-100 flex align-center height-80">
				<view class="text-333">
					+86
					<u-icon name="arrow-down-fill" size="24" color="#666" class="margin-left-sm"></u-icon>
				</view>
				<input type="number" :disabled="form.isDisabled" v-model="form.phone" placeholder="请输入手机号" placeholder-class="text-24 text-999" class="padding-left" />
			</view>
			<view class="width-100 flex align-center height-80 margin-top-sm justify-between">
				<view class=" bg-f0 round padding-lr padding-tb-xs height-80 flex align-center" style="width: 418rpx;">
					<input type="number" v-model="form.captcha" placeholder="请输入验证码" placeholder-class="text-24 text-999" class="padding-left" />
				</view>
				<view class="cu-btn round height-80 text-white no-wrap " :class="is_reset ? 'theme-body' : 'bg-f0 text-333'" style="width: 250rpx;" @click="getCode">{{ msg }}</view>
			</view>
		</view>
		
		<view class="" v-else>
			<view class="bg-f0 padding-lr padding-tb-xs round width-100 flex align-center height-80 margin-top-sm" v-if="isShow">
				<input type="password" v-model="form.oldPassword" placeholder="请输入原始密码" placeholder-class="text-24 text-999" class="padding-left" />
			</view>
		</view>
		<view class="bg-f0 padding-lr padding-tb-xs round width-100 flex align-center height-80 margin-top-sm" v-if="isShow">
			<input type="password" v-model="form.password" placeholder="请输入密码" placeholder-class="text-24 text-999" class="padding-left" />
		</view>
		<view class="bg-f0 padding-lr padding-tb-xs round width-100 flex align-center height-80 margin-top-sm" v-if="isShow">
			<input type="password" v-model="form.password1" placeholder="请再次输入密码" placeholder-class="text-24 text-999" class="padding-left" />
		</view>
		
		<view class="cu-btn width-100 round margin-top-xxl theme-body height-80 text-white" @click="handleBtn">
			{{ btnText }}
		</view>
	</view>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
	
export default {
	data() {
		return {
			msg: '获取验证码',
			is_reset: true,
			phone: '',
			captcha: '',
			password: '',
			password1: '',
			uuid: null,
		};
	},
	props: {
		type: {
			type: Boolean,
			default: false
		},
		isShow:{
			type:Boolean,
			default:true
		},
		btnText:{
			type:String,
			default:'注册'
		},
		form:{
			type:[ Object, Array, String ],
			default:()=>{}
		}
	},
	onLoad(options) {
		console.log(this.form)
	},
	computed:{
		...mapState('user', [ 'userInfo' ])
	},
	mounted() {
		// if(!this.isShow){
		// 	this.form = {
		// 		phone: '',
		// 		code: ''
		// 	}
		// }
		// if(this.isShow){
		// 	console.log('显示')
		// 	this.form = {
		// 		phone: '',
		// 		code: '',
		// 		password: '',
		// 		password1: ''
		// 	}
		// }
	},

	methods: {
		getCode() {
			if(!this.is_reset) return
			if(!this.$u.test.mobile(this.form.phone)) {
				return uni.showToast({
					icon:'none',
					title:'手机号格式不正确'
				})
			}
			let obj = new Object()
			obj.phone = this.form.phone
			
			return this.API.global.getCode(obj)
				.then(res=>{
					this.form.uuid = res.uuid
					uni.showToast({
						title: '验证码已发送',
						icon: 'none',
						duration: 1500
					});
					this.is_reset = false
					let second = 60;
					let time = setInterval(() => {
						second = second - 1;
						this.msg = second + 's'
						if (second < 0) {
							clearInterval(time);
							this.is_reset = true
							this.msg = '发送验证码';
						}
					}, 1000);
				})
			
		},
		
		// handle
		handleBtn(){
			if(!this.$u.test.mobile(this.form.phone)){
				return uni.showToast({
					icon:'none',
					title:'手机号格式不正确'
				})
			}
			
			
			if(this.$u.test.isEmpty(this.form.captcha)){
				return uni.showToast({
					icon:'none',
					title:'验证码不能为空'
				})
			}
			// 当密码框显示的时候,进行验证
			if(this.isShow){
				if(this.$u.test.isEmpty(this.form.password)){
					return uni.showToast({
						icon:'none',
						title:'密码不能为空'
					})
				}
				if(!this.$u.test.rangeLength(this.form.password, [8, 16])){
					return uni.showToast({
						icon:'none',
						title:'密码长度在8~16位之间'
					})
				}
				if(this.$u.test.isEmpty(this.form.password1)){
					return uni.showToast({
						icon:'none',
						title:'新密码不能为空'
					})
				}
				
				if(this.form.password !== this.form.password1){
					return uni.showToast({
						icon:'none',
						title:'两次密码不一致'
					})
				}
			}
			
			let obj = new Object()
			obj.phone = this.form.phone
			obj.captcha = this.form.captcha
			if(this.isShow){
				obj.oldPassword = this.form.oldPassword
				obj.password = this.form.password
				// obj.password1 = this.form.password1
			}
			
			for(let i in obj){
				if(!this.type){
					if(i == 'oldPassword') continue
				}
				if(!this.$Tian.rule('empty', obj[i])) return
			}
			this.$emit("inputData", obj)
		}
	}
};
</script>

<style lang="scss" scoped></style>
