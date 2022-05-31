function info(res){
	let obj = new Object()
	let data = res
	let array = []
	for(let i in data){
		console.log(data[i])
		obj.title = data[i].title
		obj.name = data[i].user.nickName
		obj.avatar = data[i].user.avatar
		obj.time = data[i].createTime
		obj.content = data[i].content
		obj.imgs = []
		obj.praise = data[i].praise
		obj.tread = data[i].tread
		obj.id = data[i].id
		obj.marketId = data[i].marketId
		obj.market = data[i].market
		obj.marketName = data[i].marketInfo.name
		
		for(let j in data[i].infoImgs){
			obj.imgs.push(data[i].infoImgs[j].url)
		}
		
		array.push(obj)
		
		obj = {}
	}
	console.log(array)
	return array
}

function goods(res){
	let data = res
	for(let i in data){
		let _data = data[i].specificationInfos
		// 构造分类
		data[i].category = []
		for(let j in _data){
			let a = JSON.parse(_data[j].content)
			let obj = new Object()
			for(let index in a){
				obj.key = index
				obj.value = a[index]
				data[i].category.push(obj)
				obj = {}
			}
		}
		// 构造图片
		let img_data = data[i].imgs
		for(let q in img_data){
			if(img_data[q].type == '01'){
				data[i].thumbs = JSON.parse(img_data[q].url)
			}
		}
	}
	return data
}


export default {
	info,
	goods
}