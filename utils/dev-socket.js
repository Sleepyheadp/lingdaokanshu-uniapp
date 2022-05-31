var socketStatus = false
import Tian from './tian.js'
import url from './url.js'
import chat from '../store/chat.js'

const socketTask = function(){
	uni.connectSocket({
		url: 'ws://' + url.url + '/sensorWebsocket', //仅为示例，并非真实接口地址。
		complete: () => {}
	});
}

const open = function(){
	uni.onSocketOpen(function(res) {
		console.log('WebSocket连接已打开！');
		socketStatus = true
	});
}

const send = function(obj) {
	if (socketStatus) {
		uni.sendSocketMessage({
			data: obj
		});
	} else {
		Tian.toast('服务器连接中', 'bottom')
		socketTask()
	}
}

const msg = function(){
	uni.onSocketMessage(function (res) {
		let data = JSON.parse(res.data)
		let type = data.linkType
		switch(type){
			case 'ping':
				responseHeart()
				break
			case 'chatList':
				setChatList(data.data)
				break
			case 'loginSuccess':
				let obj = { linkType: 'chatList', }
				send(JSON.stringify(obj))
				break
			case 'chat':
				console.log('我要发起chat事件')
				uni.$emit('chat', data.data)
				break
			case 'chatHistory':
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

const setChatList = function(msg){
	chat.mutations.setChat(chat.state, msg)
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

export default {
	socketTask,
	open,
	send,
	msg,
	close,
	error
}
