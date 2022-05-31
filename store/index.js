// 创建仓库对象并导出
import Vue from 'vue'
import Vuex from 'vuex'

// 导入所有的仓库
import global from './global.js';
import user from './user.js';

Vue.use(Vuex)

const store = new Vuex.Store({
	// 仓库中的数据 什么样的数据放在仓库中, 实际上你是怎么做的呢
	// 理论上: 兄弟组件要共享的数据要放到vuex中, 父子组件且父子组件隔得很远要共享的数据要放到仓库中
	// 实际上: 凡是从数据库拿去的数据都会放在vuex中, 虽然这样有违vuex的初衷, 但这样可以让程序更加清晰
	modules:{
		// modules中包含总仓库中的所有子仓库
		global,
		user
	},
	state:{
	},
	// 类似于vue的计算属性
	getters:{},
	
	// 只有mutations的方法才能修改自身仓库的数据, 不能包含异步耗时的代码, 只能包含同步代码
	mutations:{
		
		// 第一个参数是state, 第二个参数是传的实参
		// setState:function(state, payload){
		// 	state.sex = payload
		// 	console.log('我在修改state的数据')
		// 	console.log(payload)
		// }
	},
	
	// 包含各种方法, actions中的方法没有资格修改仓库中的state的数据, 如果想要修改, 只能调用mutations的方法来修改
	// 一般都是耗时的、异步的代码
	actions:{
		// 第一个参数是当前仓库对象本身, 
		// getData:function(store, payload){
		// 	// store.commit(setState)
		// 	console.log(store)
		// 	console.log('我在actions中获取数据')
		// }
	},
})

export default store;