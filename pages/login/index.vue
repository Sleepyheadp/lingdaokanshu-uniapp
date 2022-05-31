<template>
	<view class="page-wrapper bg-white">
		<view class="top">
			<image src="/static/imgs/loginbg2.png" mode="" class="login-logo"></image>
		</view>
		<view class="bottom">
			<view class="flex-shink-0">
				<view class="flex flex-direction padding-lr width-100">
					<view class="flex align-center padding-lr padding-tb-xs bg-f0 round height-80">
						<u-icon name="account-fill"  size="48"></u-icon>
						<input type="text" value="" v-model="account" placeholder="用户名/手机号" placeholder-class="text-24 text-999" class="padding-left-sm"/>
					</view>
				</view>
				<view class="flex flex-direction padding-lr width-100 margin-top-xl">
					<view class="flex align-center padding-lr padding-tb-xs bg-f0 round height-80">
						<u-icon name="lock-opened-fill"  size="48"></u-icon>
						<input type="password" value="" v-model="pwd" placeholder="请输入密码" placeholder-class="text-24 text-999" class="padding-left-sm flex-sub"/>
					</view>
					<view class="cu-btn round theme-body1 width-100 height-80 text-white margin-top-xl text-28" @click="pwdLogin">登录</view>
					<view class="width-100 flex align-center justify-end margin-top">
						<view class="text-24 text-666" @click="toForget">忘记密码?</view>
					</view>
				</view>
			</view>
			<!-- <view class="flex-shink-0 flex flex-direction width-100 padding-bottom-120"> -->
				<!-- #ifdef APP-PLUS -->
				<!-- <u-divider color="#666" half-width="300">第三方登录</u-divider>
				<view class="flex align-center justify-between" style="width: 400rpx;margin: 20rpx auto;">
					<view class="flex flex-direction align-center" @click="qqLogin">
						<t-icon name="qq-circle-fill" plus color="#2babf5" size="100"></t-icon>
						<text class="margin-top-sm text-666">QQ</text>
					</view>
					<view class="flex flex-direction align-center" @click="wxLogin">
						<t-icon name="weixin-circle-fill" plus color="#21cd05" size="100"></t-icon>
						<text class="margin-top-sm text-666">微信</text>
					</view>
				</view> -->
				<!-- #endif -->
				<!-- <view class="flex width-100 justify-center margin-bottom">还没有账号, <text class="text-red margin-left-xs" @click="toRegist">立即注册</text></view> -->
			<!-- </view> -->
		</view>
	</view>
	
</template>

<script>
	import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
	
	export default {
		data() {
			return {
				background:{
					backgroundImage: 'linear-gradient(90deg,rgba(226,89,39,1),rgba(217,62,53,1))'
				},
				login_logo:this.IMG.login_logo,
				icon_qq:this.IMG.icon_qq,
				icon_wechat:this.IMG.icon_wechat,
				inp_type:'password',
				pwd_icon:'eye-off',
				account:null,
				pwd:null,
				isback:false,
			}
		},
		onLoad(options) {
			console.log(options)
			if(options.next) this.isback = true
		},
		
		methods:{
			...mapActions('user', [ 'getUserInfo' ]),
			...mapMutations('user', [ 'setLoginInfo' ]),
			
			
			// 切换密码框状态
			// showPwd(){
			// 	console.log(this.inp_type, this.pwd_icon)
			// 	if(this.inp_type == 'password'){
			// 		this.inp_type = 'text'
			// 		this.pwd_icon = 'eye-fill'
			// 		return
			// 	}
			// 	if(this.inp_type == 'text'){
			// 		this.inp_type = 'password'
			// 		this.pwd_icon = 'eye-off'
			// 		return
			// 	}
			// },
			
			// 账号密码登录
			pwdLogin(){
				
				// this.$Router.push({
				// 	name: 'home'
				// })
				
				// return
				
				// let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
				// let curRoute = routes[routes.length - 1].route 
				// for(let i in routes){
				// 	console.log(routes[i].route )
				// }
				
				// console.log(this.account,  this.pwd)
				// let obj = new Object()
				// obj.phonenumber = this.account
				// obj.password = this.pwd
				// // #ifdef APP-PLUS
				// obj.cid = plus.push.getClientInfo().clientid
				// // #endif
				
				if(!this.$u.test.mobile(this.account)) {
					return uni.showToast({
						icon:'none',
						title:'手机号格式不正确'
					})
				}
				if(this.$u.test.isEmpty(this.pwd)){
					return uni.showToast({
						icon:'none',
						title:'密码不能为空'
					})
				}
				if(!this.$u.test.rangeLength(this.pwd, [8, 16])){
					return uni.showToast({
						icon:'none',
						title:'密码长度在8~16位之间'
					})
				}
				console.log("pwdlogin。。。点击了")
				console.log(1 != '1')
				console.log(typeof(this.account.substring(0,1)))
				
				
				// if(this.account.length != 11) {
				// 	return uni.showToast({
				// 		icon:'none',
				// 		title:'手机号格式不正确'
				// 	})
				// }
				// console.log(this.account.length)
				// if(this.pwd == null){
				// 	return uni.showToast({
				// 		icon:'none',
				// 		title:'密码不能为空'
				// 	})
				// }
				uni.setStorageSync('token', '12339384320948')
				return uni.navigateTo({
					url: '/pages/index/index'
				})
				
				
				
				// return this.API.login.pwdLogin(obj) 
				// 	.then(res =>{
				// 		uni.setStorageSync('token', res.token)
				// 		this.getUserInfo()
				// 		if(this.isback) {
				// 			console.log('返回')
				// 			uni.navigateBack({})
				// 		}else {
				// 			console.log('重定向')
				// 			uni.reLaunch({
				// 				url:'/pages/city/index'
				// 			})
				// 		}
						
				// 	})
				// 	.catch(rej =>{
				// 		console.log(rej)
				// 	})
			},
			
			// 跳转注册页面
			// toRegist(){
			// 	this.$Router.push({
			// 		name:'regist'
			// 	})
			// },
			
			// toForget(){
			// 	this.$Router.push({
			// 		name:'forget'
			// 	})
			// },
			
			// 微信登录
			// wxLogin(){
			// 	return this.$Tian.toast('暂未开放',)
				
			// 	uni.login({
			// 		provider:'weixin',
			// 		success:res=>{
			// 			console.log(res.authResult)
			// 			let obj = new Object()
			// 			obj.accessToken = res.authResult.access_token
			// 			obj.openId = res.authResult.openid
			// 			obj.type = 'wx'
			// 			// #ifdef APP-PLUS
			// 			obj.cid = plus.push.getClientInfo().clientid
			// 			// #endif
			// 			this.setLoginInfo(obj)
			// 			// let Obj = new Object()
			// 			// Obj.type = 'wx'
			// 			// Obj.unionId = res.authResult.unionid
			// 			this.API.login.userLogin(obj)
			// 				.then(data=>{
			// 					console.log(data)
			// 					if(!data.token){
			// 						this.$Router.replace({
			// 							name:"set-phone"
			// 						})
			// 					}else {
			// 						uni.setStorageSync('token', data.token)
			// 						uni.reLaunch({
			// 							url:'/pages/city/index'
			// 						})
			// 					}
			// 				})
			// 		}
			// 	})
			// },
			
			// QQ登录
			// qqLogin(){
			// 	this.$Tian.toast('暂未开放...')
			// }
			// // 请求用户信息
			// getUserInfo(){ 
			// 	console.log('11111')
			// 	return this.API.login.getUserInfo()
			// 		.then(res=>{
			// 			uni.setStorageSync('user_info', res.user)
			// 		})
			// }
		},
	}
</script>

<style lang="scss" scoped>
	
	.top{
		width: 180%;
		height: 40vh;
		position: fixed;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		flex-shrink: 0;
		// background-image: linear-gradient(90deg, #E25927,#D93E35);
		border-radius: 0 0 1000rpx 1000rpx;
	}
	.theme-body1{
		background-image: linear-gradient(90deg, #007afff5, #1cbbb4)
	}
	.login-logo {
		position: absolute;
		top: 75%;
		left: 50%;
		transform: translate(-50%,-30%);
		// width: 404rpx;
		// height: 298rpx;
		width: 100%;
		height: 667px;
	}
	
	.bottom {
		width: 100%;
		height: 60vh;
		flex-shrink: 0;
		position: fixed;
		bottom: 0;
		left: 0; 
		padding-top: 80rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
