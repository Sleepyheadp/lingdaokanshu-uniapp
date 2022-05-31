import config from './config.js'

function http(options) {
	// let defaultOptions = { method: 'post', url:'http://zhao.free.idcfengye.com', };
	let defaultOptions = { method: 'post', loading: true  }; 
	// let defaultOptions = { method: 'post', url:'http://192.168.238.20:8081', };
	// let defaultOptions = { method: 'post', url:'http://152.136.145.188:8080', };
	let token = uni.getStorageSync('token')
	let overdue = uni.getStorageSync('overdue')
	
	defaultOptions.header = {
		"Content-Type": "application/json;charset=UTF-8",
	}
	// #ifdef h5
	if(!options){
		if(process.env.NODE_ENV === 'development'){ 
			console.log('开发环境') 
		}else{ 
			console.log('生产环境') 
			options.url = 'http://' + config.url + options.url
		}
	}
	// #endif
	
	// #ifndef h5
	options.url = 'http://' + config.url + options.url
	// #endif
	
	
	if(!options.yasuo){
		if(!token) {
			// 如果未登录 跳转登录页
			console.log(token, '我是token')
			return uni.navigateTo({
				url:'/pages/login/index?next=back'
			})
		}
		defaultOptions.header.Authorization = token
	}
	options = Object.assign({}, defaultOptions, options);
	console.log('*********-------------//////////////')
	console.log(options)
	
	if(options.loading){
		console.log('123321123321')
		// uni.showLoading({
		// 	mask: true,
		// 	title: '加载中···'
		// })
	}
	
	return new Promise((resolve, reject)=>{
		options.success = res =>{
			console.log('************************')
			console.log(res)
			if(!res.data){
				uni.showToast({
					icon:'none',
					title:'系统异常'
				})
				return 
			}
			if(res.data.code == '200'){
				// console.log('************** 成功 **************** ')
				return resolve(res.data)
			} else {
				// if(!curRoute.includes('login/login')){
					
				// }
				
				if(res.data.code == 'A0210'){
					return reject(res.data)
				}
				let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
				let curRoute = routes[routes.length - 1].route 
				if(curRoute == 'pages/login/login') return reject()
				if(res.data.code == '401'){
					return uni.navigateTo({
						url:'/pages/login/index?next=back'
					})
				}
				if(res.data.code == '401'){
					return uni.navigateTo({
						url:'/pages/login/index?next=back'
					})
				}
				if(!res.msg) res.msg = '系统异常'  
				console.log(res.data.msg)
				uni.showToast({
					icon:'none',
					title: res.data.msg
				})
				return reject(res.data)
			}
		}
		options.fail = rej =>{
			console.log(rej, '失败')
			return reject(rej.data)
		}
		options.complete = close =>{
			// if(options.loading){
			// 	setTimeout(()=>{
			// 		uni.hideLoading()
			// 	}, 500)
			// }
		}
		uni.request(options)
	})
}


export default http;