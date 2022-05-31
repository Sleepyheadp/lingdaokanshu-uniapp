import API from './api.js'

function getCarType(){
	API.global.getCarType()
		.then(res => {
			let _data = res.data.data
			let _carList = []
			let _obj = new Object()
			for(let i in _data){
				_data[i].id.toString()
				let _id = _data[i].id
				_obj[_id] = _data[i].name
			}
			uni.setStorageSync('carTypeList', _obj)
		})
}

export default {
	getCarType
}