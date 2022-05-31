<template>
	<view class="">
		<view class="chat-wrapper">
			<view class="height-120 flex-center padding-top-xl bg-theme margin-bottom">
				<text class="text-32 text-white">联系客服</text>
			</view>
			<view class="width-100" v-for="(item, index) in chatList" :key="item.id">
				<t-msg :params="item" :type="item.type" :avatarU="tUser.sysUser.avatar" :avatarE="userinfo.avatar" :position="item.position"></t-msg>
			</view>
			
			<view class="input-msg-wrapper">
				<!-- <u-icon name="photo" color="#333" size="40" @click="choseImg()" style="margin-right: 15rpx;"></u-icon>  -->
				<!-- <u-icon name="photo"  custom-prefix="custom-icon" :size="60" color="#333" class="margin-right-sm" @click="choseImg()"></u-icon> -->
				<input type="text" class="input" v-model="chatDesc" @confirm="sendContent" confirm-hold>
				<view class="send-button theme-body" @click="sendContent">
					<text class="send-text">发送</text> 
				</view>
			</view>
		</view>
		
		<view class="bottom-plus">
		</view>
	</view>
</template>

<script>
	import { mapActions, mapGetters, mapMutations, mapState	} from 'vuex'
	
	export default {
		name:"t-chat",
		props: {
			tUser: {
				type: Object,
				default: ()=>{}
			}
		},
		data() {
			return {
				chatList:[],
				chatDesc: null,
			};
		},
		created() {
		},
		mounted() {
			uni.$on('chat', e=>{
				if(e.fid == this.userinfo.userId) e.position = 'right'
				else e.position = 'left'
				
				this.chatList.push(e)
				this.$forceUpdate()
			})
			uni.$on('chatHistory', e=>{
				console.log(e)
				let data = e
				for(let i in data){
					if(data[i].fid == this.userinfo.userId) data[i].position = 'right'
					else data[i].position = 'left'
				}
				this.chatList = data
				this.$forceUpdate()
			})
		},
		onUnload() {
			// socketTask.close()
			uni.$off()
			
			let obj = { linkType: 'chatList', }
			this.$Socket.send(JSON.stringify(obj))
		},
		computed: {
			...mapState('user', [ 'userinfo' ]),
		},
		methods: {
			sendContent: function(){
				// if(!this.chatDesc) return this.$Tian.toast('说点什么吧', 'bottom')
				// let obj = JSON.parse(JSON.stringify(this.chatList[this.chatList.length -1]))
				// obj.content = this.chatDesc
				// obj.type = '00'
				// this.chatDesc = null
				// this.chatList.push(obj)
				
				if(!this.chatDesc) return this.$Tian.toast('说点什么吧...')
				let obj = new Object()
				obj.content = this.chatDesc
				obj.linkType = 'chat'
				obj.data = {
					tid: this.tUser.userId,
					content: this.chatDesc,
					type: '0'
				}
				this.$Socket.send(JSON.stringify(obj))
				this.chatDesc = ''
			}
		}
	}
</script>

<style>
	.chat-wrapper {
		width: 750rpx;
		padding-bottom: 120rpx;
		/* padding-top: 60rpx; */
	}
	
	.chat {
		width: 750rpx;
		height: 180rpx;
		margin: 30rpx 0;
		background-color: #1CBBB4;
		font-size: 28rpx;
		color: #333;
		align-items: center;
		justify-content: center;
	}
	
	.input-msg-wrapper {
		width: 750rpx;
		height: 60px;
		background-color: #fff;
		border-top-color: #e1e1e1;
		border-top-width: 1px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		position: fixed;
		left: 0;
		bottom: 100rpx;
		padding: 0 20rpx;
	}
	
	.input {
		width: 600rpx;
		height: 40px;
		background-color: rgba(244, 247, 250, 1);
		border-radius: 888rpx;
		padding: 0 30rpx;
	}
	
	.send-button {
		width: 120rpx;
		height: 60rpx;
		display: flex;
		color: #fff;
		border-radius: 12rpx;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		margin-left: 20rpx;
	}
	
	.send-text {
		font-size: 28rpx;
		color: #fff;
	}
</style>
