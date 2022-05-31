var socketStatus = false

// 自己写的全局方法
import Tian from './tian.js'

// 全局的接口地址配置
import config from './config.js'
import store from "../store"
// vuex 的 聊天仓库
import global from '../store/global.js'


// 全局socket连接事件
const socketTask = function(){
	uni.connectSocket({
		url: 'ws://' + config.url + '/websocket', //仅为示例，并非真实接口地址。
		complete: () => {}
	});
}

// 监听打开
const open = function(){
	uni.onSocketOpen(function(res) {
		console.log('WebSocket连接已打开！');
		socketStatus = true
		
		// let _token = uni.getStorageSync('token')
		// if(store.state.user.userinfo.avatar && _token){
		// 	let obj = {
		// 		linkType: 'login',
		// 		data: {
		// 			userId: store.state.user.userinfo.userId
		// 		}
		// 	}
		// 	obj = JSON.stringify(obj)
		// 	send(obj)
		// }
	});
}

const send = function(obj) {
	console.log(obj, '双方互发消息')
	
	if (socketStatus) {
		uni.sendSocketMessage({
			data: obj
		});
	} else {
		Tian.toast('服务器连接中', 'bottom')
		socketTask()
	}
}

// 服务器消息处理事件
const msg = function(){
	uni.onSocketMessage(function (res) {
		let data = JSON.parse(res.data)
		let type = data.linkType
		console.log(type)
		console.log(data)
		switch(type){
			// 心跳
			case 'ping':
				responseHeart()
				break
				
			// 聊天列表页
			case 'chatList':
				setChatList(data.data)
				break
				
			// socket 用户登录
			case 'loginSuccess':
				let obj = { linkType: 'chatList', }
				send(JSON.stringify(obj))
				break
			
			// 不管是我发的消息还别人发给我的消息  都会推送给我一下
			case 'chat':
				console.log('我要发起chat事件')
				uni.$emit('chat', data.data)
				break
			
			// 与每个人的第一次聊天记录查询
			case 'chatHistory':
				console.log('chatHistory')
				uni.$emit('chatHistory', data.data)
				break
		}
	})
}

const responseHeart = function(){
	let obj = {
		linkType: 'pong'
	}
	
	send(JSON.stringify(obj))
}

const close = function(){
	uni.onSocketOpen(function () {
		uni.closeSocket();
	})
}

const error = function(){
	uni.onSocketError(function (res) {
		console.log('WebSocket连接打开失败，请检查！');
		console.log(res)
	});
}

const setChatList = function(msg){
	global.mutations.setChat(global.state, msg)
}

export default {
	socketTask,
	open,
	send,
	msg,
	close,
	error
}
