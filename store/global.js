import API from '@/utils/api.js'

export default {
        namespaced: true,
        state: {
			winW:0,
			winH:0,
			sysBar: 0,
			webKeys: '',
			base64: 'data:image/jpeg;base64,',
			chat:[],
			msgList: []
        },
        mutations: {
			_init() { 
				console.log('找到了')
			},
			
			getLocation(state,){
				uni.getLocation({
					geocode: true,
					success: res =>{
						state.lat = res.latitude
						state.lng = res.longitude
					}
				})
			},
			
			getSysInfo(state,){
				let res = uni.getSystemInfoSync()
				state.winW = res.windowWidth
				state.winH = res.windowHeight
				state.sysBar = res.statusBarHeight
			},
			
			setChat(state, payload){
				state.msgList = payload
			}
        },
        actions: {
			init({ commit, dispatch }) {
				console.log('找到没')
			},
			
			getWeather({ commit, dispatch, state }, payload){
				// return
				return API.global.getWeather(state.addr)
					.then(res=>{
						let data = JSON.parse(res.data)
						commit('setWeather', data.result)
					})
			},
        }
		
};