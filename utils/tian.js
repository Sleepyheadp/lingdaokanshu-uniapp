import test from './test.js'
import IMG from './imageMange.js'
import config from './config.js'

function uploadImg(src, arrayName,){
	return new Promise((resolve, reject) => {
		uni.uploadFile({
			// url:  'http://' + config.url + '/common/file/upload',
			url:  'http://' + config.url + '/common/file',
			// url:'http://192.168.2.168:8081/upload/upload',
			filePath:src,
			name:arrayName,
			
			success:res => {
				resolve(JSON.parse(res.data).url)
				// resolve(JSON.parse(res.data))
			},
			fail:rej => {
				reject(rej)
			}
		})
	})
}

function chooseVideo(type){
	let count = type ? type : 1
	
	return new Promise((resolve, reject)=>{
		uni.chooseVideo({
			count: count, 
			sourceType: ['camera', 'album'],
			success: res =>{
				// let img_src = res.tempFiles
				resolve(res)
			},
			fail: rej =>{
				reject(rej)
			}
		})
	})
}

function choseImg(type){
	console.log(type)
	let count = type ? type : 1
	
	return new Promise((resolve, reject)=>{
		uni.chooseImage({
			count: count, 
			success: res =>{
				let img_src = res.tempFiles
				resolve(img_src)
			},
			fail: rej =>{
				reject(rej)
			}
		})
	})
}

function rule(type, val, msg, range){
	// 定义一个标识符, 如果验证不通过, 就返回false
	let flag = true
	switch(type){
		// 邮箱
		case 'email':
			if(!test.email(val)){
				toast(msg?msg:'请输入正确的邮箱账号')
				flag = false
			}
			break
		
		case 'mobile':
			if(!test.mobile(val)){
				toast(msg?msg:'请输入正确的手机号')
				flag = false
			}
			break
		
		// 
		case 'date':
			if(!test.date(val)){
				toast(msg?msg:'请选择正确的日期格式')
				flag = false
			}
			break
		
		//
		case 'idCard':
			if(!test.idCard(val)){
				toast(msg?msg:'请输入正确的身份证号码')
				flag = false
			}
			break
			
		//
		case 'carNo':
			if(!test.carNo(val)){
				toast(msg?msg:'请输入正确的车牌号')
				flag = false
			}
			break
			
		// 
		case 'letter':
			if(!test.letter(val)){
				toast(msg?msg:'只能输入字母')
				flag = false
			}
			break
			
		//
		case 'enOrNum':
			if(!test.enOrNum(val)){
				toast(msg?msg:'只能是字母或数字')
				flag = false
			}
			break
			
		// 
		case 'range':
			if(!test.email(val, range)){
				toast(msg?msg:'长度在'+ range[0] + '到' + range[1] + '之间')
				flag = false
			}
			break
			
		//
		case 'landline':
			if(!test.landline(val)){
				toast(msg?msg:'格式不正确,请重新输入')
				flag = false
			}
			break
			
		//
		case 'empty':
			if(test.empty(val)){
				toast(msg?msg:'请将信息填写完整')
				flag = false
			}
			break
	}
	return flag
}


// 对象赋值
function setNewVal(oldObj, newObj, addID){
	let res = new Object
	for(let i in oldObj){
		if(addID){
			res.id = newObj.id
		}
		console.log(i)
		res[i] = newObj[i]
	}
	// var { ...newObj } = oldObj
	return res
}

function auth(value, msg){
	let flag = true
	console.log(value)
	switch(value){
		case '01':
			flag = false
			toast('审核中, 请耐心等待')
			break
		case '02':
			flag = false
			toast('审核未通过, 请联系客服')
			break
		case '03':
			flag = true
		default:
			flag = true
	}
	return flag
}

function toast(title,position, duration = 1500){
	console.log(position)
	if(!position){
		uni.showToast({
			title: title,
			icon: 'none',
			duration: duration
		})
	} else {
		uni.showToast({
			title: title,
			icon: 'none',
			duration: duration,
			position:position
		})
	}
}


function getRect(selector){
	return new Promise((resolve) => {
		let view = uni.createSelectorQuery().select(selector);
		view.fields({
			size: true,
			rect: true,
			scrollOffset:true
		}, (res) => {
			resolve(res);
		}).exec();
	})
}

function back(){
	uni.navigateBack({})
}

let timer, flag;
/**
 * 节流原理：在一定时间内，只能触发一次
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
function throttle(func, wait, params, immediate = true) {
	console.log(func, params)
	if (immediate) {
		if (!flag) {
			flag = true;
			// 如果是立即执行，则在wait毫秒内开始时执行
			typeof func === 'function' && func(params);
			timer = setTimeout(() => {
				flag = false;
			}, wait);
		}
	} else {
		if (!flag) {
			flag = true
			// 如果是非立即执行，则在wait毫秒内的结束处执行
			timer = setTimeout(() => {
				flag = false
				typeof func === 'function' && func(params);
			}, wait);
		}
		
	}
};

let timeout = null;

/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行 
 * @return null
 */
function debounce(func, wait = 500, immediate = false) {
	// 清除定时器
	if (timeout !== null) clearTimeout(timeout);
	// 立即执行，此类情况一般用不到
	if (immediate) {
		var callNow = !timeout;
		timeout = setTimeout(function() {
			timeout = null;
		}, wait);
		if (callNow) typeof func === 'function' && func();
	} else {
		// 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
		timeout = setTimeout(function() {
			typeof func === 'function' && func();
		}, wait);
	}
}

function payHtml(data){
	WeixinJSBridge.invoke('getBrandWCPayRequest', data,
		function(res) {
			if (res.err_msg == "get_brand_wcpay_request:ok") {
				// 使用以上方式判断前端返回,微信团队郑重提示：
				//res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
				uni.showToast({
					icon:'none',
					title:'支付完成--Admin',
					duration:1500
				})
			}
		});
}

function locationHtml(){
	 WeixinJSBridge.invoke("geoLocation", { type:'wgs84' },
	function (e) {
		uni.showModal({
			title:'123'
		})
		alert(JSON.stringify(e))
	})
}

function makeData(type){
	let obj = new Object()
	// 1 是商店
	if(type == 1) {
		obj.item = {
			title: "申请店铺",
			type: "company",
			url: ""
		}
	}
	
	// 2 是网站
	if(type == 2){
		obj.item = {
			title: "申请网站",
			type: "company",
			url: ""
		}
	}
	console.log(obj)
	return obj
}

function isLogin(){
	let login = true
	let _token = uni.getStorageSync('token')
	if(!_token) login = false
	
	return login
}

function formatTime(e){
	let a = ''
	a = e.year + '-' + e.month + '-' + e.day + ' ' + e.hour + ':' + e.minute + ':' + e.second
	return a
}

function IMGHandler(value){
	let val = value
	if(!value) return
	if(value.includes('/static/imgs')) return value
	if(value.includes('http')) {
		val = value
	}else{
		val = IMG.img_url_global + value
	}
	
	if(value.includes('https://thirdwx.qlogo.cn/')){
		val = val
	}
	
	
	uni.previewImage({
		urls: [val],
		longPressActions: {
			itemList: ['保存图片'],
			success: function(data) {
				uni.saveImageToPhotosAlbum({
					filePath: res,
					success: a => {
						Tian.toast('保存成功', 'bottom')
					}
				})
			},
			fail: function(err) {
				console.log(err.errMsg);
			}
		}
	});
}


function loading(title, mask,){
	let _mask = false
	if(mask) _mask = mask
	
	uni.showLoading({
		mask: _mask,
		title: title
	})
}

function hideLoading(){
	uni.hideLoading()
}

export default {
	uploadImg,
	choseImg,
	rule,
	toast,
	setNewVal,
	auth,
	getRect,
	back,
	makeData,
	throttle,
	debounce,
	chooseVideo,
	payHtml,
	locationHtml,
	isLogin,
	formatTime,
	IMGHandler,
	loading,
	hideLoading
}