//正式接口文件
import http from './http.js'

//H5代理
//#ifdef  H5
//#endif  

//app无需代理
//#ifdef APP-PLUS
//#endif


export default {
	global: {
		addName(data){
			return http({
				url: '/user/add/name',
				data: data
			})
		},
		
	},
	
	login: {
		
	},
	
	user: {
		
		getUserinfo(){
			return http({
				method: 'get',
				url:"/core/sys-user/profile",
			})
		},
		
	}
}
