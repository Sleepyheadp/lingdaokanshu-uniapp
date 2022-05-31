import IMG from '@/utils/imageMange.js'

const hidePhone = function(value) {
	var tel = value
	console.log(typeof(tel))
	
	var reg = /^(\d{3})\d{4}(\d{4})$/;
	
	tel = tel.replace(reg, "$1****$2");
	return tel
}

const hideID = function(value) {
	var tel = value
	var reg = /^(\d{3})\d{11}(\w{4})$/;
	
	tel = tel.replace(reg, "$1****$2");
	return tel
}

const getPrice = function(price) {
	price = price || 0;
	return price.toFixed(2)
}

const empty = function(value) {
	let val = ''
	if(value) val = value
	else val = '暂未设置'
	return val
}

const zero = function(value) {
	let val = ''
	if(value) val = value
	else val = '0'
	return val
}

const defAvatar = function(value) {
	let val = ''
	if(value) val = value
	else val = '/yys/avatar.jpeg'
	return val
}

const orderStatus = function(value) {
	let val = ''
	console.log(value)
	switch(value){
		case 0:
			val = '待付款'
			break
		case 1:
			val = '待发货'
			break
		case 2:
			val = '待收货'
			break
		case 3:
			val = '已收货'
			break
		case 4:
		case '06':
		case '07':
			val = '售后'
			break
		case 9:
			val = '全部'
			break
		}
	return val
	
}

// 分类过滤
const markets = function(value){
	let val = ''
	switch(value){
		case '01':
			val = '全国市场'
			break
		case '02':
			val = '同城市场'
			break
		case '03':
			val = '共享仓'
			break
		default:
			val = '请选择市场分类'
	}
	return val
}

// 审核状态过滤
const authStatus = function(value){
	let val = ''
	switch(value){
		case '00':
			val = '审核中'
			break
		case '01':
			val = '未通过'
			break
		case '02':
			val = '已通过'
			break
	}
	return val
}


// 会员等级过滤
const userVip = function(value) {
	let val = ''
	console.log(value)
	switch(value){
		case '00':
			val = '普通会员'
			break
		case '01':
			val = '全国运营合伙人'
			break
		case '02':
			val = '同城运营合伙人'
			break
		case '03':
			val = '共享运营合伙人'
			break
	}
	return val
}

// 头像过滤
const avatar = function(value) {
	let val = ''
	if(!value) return
	if(value.includes('data:image/jpeg;base64,')) return value
	// if(!value.includes('.')){
	// 	val = "data:image/jpeg;base64," + JSON.parse(value)
		
	// 	return val
	// }
	if(value.includes('/static/imgs')) return value
	if(value.includes('http')) {
		val = value
	}else{
		val = IMG.img_url_global + value
	}
	
	if(value.includes('https://thirdwx.qlogo.cn/')){
		val = val
	}
	
	return val
}

const distribution = function(e){
	let a = ''
	switch(e){
		case '1':
			a = '配送'
			break
		case '2':
			a = '快运'
			break
		case '3':
			a = '包邮'
			break
		case '4':
			a = '到店服务'
			break
		case '5':
			a = '免配送费'
			break
	}
	
	return a
}

const video = function(e){
	let a = ''
	
	a = 'http://qn9mmfkvt.hb-bkt.clouddn.com' + e
	
	return a
	
	
}

const emaring = function(e){
	let a = ''
	switch(e){
		case '01':
			a = '配送收益'
			break
		case '02':
			a = '快运收益'
			break
		case '03':
			a = '配送收益'
			break
		case '04':
			a = '直推用户刷新信息收益'
			break
		case '05':
			a = '直推用户竞价排名收益'
			break
		case '06':
			a = '推广收益'
			break
		case '07':
			a = '市场分润'
			break
		case '08':
			a = '交易收入'
			break
	}
	
	return a
}

const timeToDate = function (val){
	if(!val) return
	let a = val.split(' ')[0]
	a = a.split('-')[1] + '—' + a.split('-')[2]
	return a
}

const weatherICON = function (val){
	let icon = 'custom-icon-'
	let n_val = 'weather0'
	if(!val) return n_val
	
	if(val == '晴') n_val = 'weather0'
	if(val == '多云') n_val = 'weather1'
	if(val == '阴') n_val = 'weather2'
	if(val.includes('雨')) n_val = 'weather8'
	if(val.includes('雪')) n_val = 'weather16'
	
	return n_val
}

const profitType = function(e){
	switch(e){
		case 1: 
			return '信息分享红包'
		case 2:
			return '商品分享红包'
		case 3:
			return '店铺分享红包'
		case 4:
			return '商品收入'
		case 5:
			return '配送收入'
		case 6:
			return '快运收入'
		case 7:
			return '代驾收入'
		case 8:
			return '网点收入'
		case 9:
			return '加盟费分润'
		case 10:
			return '交易平台分润'
		case 11:
			return '配送分润'
		case 12:
			return '快运分润'
		case 13:
			return '代驾分润'
		case 14:
			return '网点分润'
		case 15:
			return '信息竞价排名分润'
	}
}

const Mode =  function(e){
	let a = null
	switch(e){
		case 0: 
			a = "到店服务"
			break
		case 1:
			a = "同城配送"
			break
		case 2:
			a = "包邮"
			break
		case 3:
			a = "网店代收（收取1元）"
			break
		case 4:
			a = "￥ 4.00(商家)"
			break
		case 5:
			a = "￥ 4.00(用户)"
			break
	}
	
	return a
}

export default {
	hidePhone,
	hideID,
	getPrice,
	userVip,
	empty,
	markets,
	zero,
	defAvatar,
	orderStatus,
	authStatus,
	avatar,
	distribution,
	video,
	emaring,
	timeToDate,
	weatherICON,
	Mode,
	profitType
}