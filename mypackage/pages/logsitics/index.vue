<template>
	<view class="map-wrapper" style="width: 300px;height: 400px;">
		<!-- <view class="tab-bar" style="height: 45px;"></view> -->
		<!-- <image src="/static/imgs/icon/icon_map1.png" mode="" class="icon-map" :style="`top: ${ top / 2 }px; left: ${ winW / 2 }px;`"></image> -->
		<!-- <view class="width-100 height-80 flex align-center navbg" @click="$Tian.back()">
			<t-icon name="arrow-left" size="48" color="#fff"></t-icon>
			<text class="text-28 text-white transY-10">返回</text>
		</view> -->
		<map class="map1" name="map1" id="map1" style="height: 400px;"
		:longitude="lng" :latitude="lat" :scale="16"
		></map>
		<!-- <text class="text-32 text-red light">{{ addr ? addr : '正在获取中···' }}</text> -->
		<view class="">
			{{this.socketData}}
		</view>
	</view>
</template>

<script>
	import { mapActions, mapGetters, mapMutations, mapState	} from 'vuex'
	import config from "@/config";
	const socketUrl =
	  process.env.NODE_ENV === "development"
	    ? config.websocketUrl.dev
	    : config.websocketUrl.pro;
	export default {
		components: {
			
		},
		data() {
			return {
				start: 300,								// 触摸开始的位置
				end: 0,									// 触摸结束的地方
				top: 300,								// 下方区域当前所在的位置
				// winW: null,
				// winH: null,
				// sysBar: null,
				lng: 120.1238,
				lat: 37.6531,
				addr:null,
				socketData:null
			}
		},
		onLoad() {
			// #ifndef H5
			uni.getLocation({
				geocode: true,
				type: 'gcj02',
				success: res =>{
					console.log(JSON.stringify(res))
					this.lat = res.latitude
					this.lng = res.longitude
					this.addr = res.address
				}
			})
			// #endif
		},
		mounted() {
			this.initWebSocket();
		},
		computed: {
			...mapState('global', [ 'winW', 'winH', 'sysBar', ]),
		},
		methods: {
			setSystem: function(){
				let res = uni.getSystemInfoSync()
				console.log(res)
				this.winW = res.windowWidth
				this.winH = res.windowHeight
				this.sysBar = res.statusBarHeight
			},
			
			touchStart: function(e){
				this.start = e.touches[0].screenY
			},
			
			touchEnd: function(e){
				this.end = e.changedTouches[0].screenY
				if(Math.abs(this.start - this.end) < 80) return
				// 默认是收缩，即start < end 才能生效
				if(this.start > this.end) return this.top = 300
				if(this.start < this.end) return this.top = 600
				
				// if(Math.abs(this.start - this.end) > 80) return this.top = 300
				// if(Math.abs(this.start - this.end) < 80) return this.top = 600
			},
			
			touch: function(e){
				this.start = e.touches[0].screenY
			},
			initWebSocket() {
			  if (typeof WebSocket === "undefined") {
				console.error("浏览器不支持WebSocket，取消连接");
				return false;
			  }
			  if (this.socket != null) {
				this.socket.close();
			  }
			  this.socket = new WebSocket(socketUrl);
			  //打开事件
			  this.socket.onopen = () => {
				console.log("Socket 已打开");
			  };
			  //获得消息事件
			  this.socket.onmessage = (msg) => {
				if (msg.isTrusted && socketUrl.indexOf(msg.origin) > -1) {
				  this.getWsMessage(msg.data);
				  this.socketData = msg.data
				  console.log('通过Socket返回的数据：'+msg.data)
				}
			  };
			  //关闭事件
			  this.socket.onclose = () => {
				console.log("Socket 已关闭");
			  };
			  //发生了错误事件
			  this.socket.onerror = (e) => {
				console.log("Socket 错误", e);
				this.wsReconnect();
			  };
			},
			wsReconnect() {
			  console.log("尝试重新连接webSocket------");
			  if (this.lockReconnect) {
				return;
			  }
			  this.lockReconnect = true;
			  //没连接上会一直重连，设置延迟避免请求过多
			  this.wsTimeOut && clearTimeout(this.wsTimeOut);
			  this.wsTimeOut = setTimeout(() => {
				this.initWebSocket();
				this.lockReconnect = false;
			  }, 4000);
			},
			//处理接收到的websocket消息
			getWsMessage(msgData) {
			  // console.log("WebSocket接收到的数据为：", msgData);
			  if (!msgData) {
				return;
			  }
			  const _msgData = JSON.parse(msgData);
			  if (_msgData.length == 0) {
				return;
			  }
			  let lastEventId = localStorage.getItem("lastEventId");
			  if (lastEventId && lastEventId == _msgData[_msgData.length - 1].id) {
				return;
			  }
			  this.lastEvent = _msgData[_msgData.length - 1];
			  localStorage.setItem("lastEventId", _msgData[_msgData.length - 1].id);
			},
		}
	}
</script>

<style >
	.map-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
		background-color: #fff;
	}
	
	.tab-bar {
		width: 750rpx;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #f2463e;
		z-index: 2;
	}
	
	.map1 {
		width: 750rpx;
	}
	
	.icon-map{
		width: 60rpx;
		height: 60rpx;
		position: fixed;
		transform: translateX(-30rpx) translateY(-30rpx);
		z-index: 3;
	}
	
	.logsitics-wrapper {
		position: fixed;
		left: 0;
		width: 750rpx;
		height: 2080px;
		z-index: 9999;
	}
</style>
