import API from '@/utils/api.js'
import Tian from '@/utils/tian.js'

export default {
        namespaced: true,
        state: {
			userinfo: {},
        },
        mutations: {
			_init() { 
				console.log('找到了')
			},
			
			// 修改当前使用的收货地址
			setWinW(state, payload){ state.winW = payload },
			
			setUserinfo(state, payload){ state.userinfo = payload },
			
        },
        actions: {
			fun1({ commit, dispatch }, payload){
				return API.addressManage.getAddress(payload)
					.then(res=>{
						commit('setAddrList', res.deliveryAddresses)
					})
			},
			
			getUserinfo({ commit, dispatch }, payload){
				return API.user.getUserinfo(payload)
					.then(res=>{
						// res.data.sysUserInfo
						commit('setUserinfo', res.data)
					})
			},
			
        }
		
};
