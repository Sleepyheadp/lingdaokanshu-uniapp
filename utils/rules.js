export default {
	
	// 身份证号验证
	personID:(id) =>{
		let rules = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)/
		return rules.test(id)
	},
	
	
	// 手机号验证
	phone:(phone) => {
		let rules = /(^(13[0-9]|17[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$)/
		
		return rules.test(phone)
	},
	
	
	// 邮箱
	email:(email) => {
		let rules = /(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/
		return rules.test(email)
	},
	
	
	// 银行卡号
	bank:(bank) => {
		let rules = /^([1-9]{1})(\d{14}|\d{18})$/
		return rules.test(bank)
	},
	
	
	// 状态过滤器
	rulesFilters(value){
		let text = ''
		switch(value){
			case -1:
				text = '未认证'
				break
			case 0:
				text = '审核中'
				break;
			case 1:
				text = '已认证'
				break;
			case 2:
				text = '未通过'
				break;
			case 3:
				text = 'C'
				break;
			default:
				break
		}
		return text
	},
	
	format: (date, format) => {
	    if (!date) {
	        return ''
	    }
	    let d = new Date(date)
	
	    // 年
	    if (/YYYY/.test(format)) {
	        format = format.replace(/YYYY/, d.getFullYear())
	    }
	    // 月份
	    let month = d.getMonth() + 1
	    if (/MM/.test(format)) {
	        let monthStr = month < 10 ? '0' + month : month
	        format = format.replace(/MM/, monthStr)
	    } else if (/M/.test(format)) {
	        format = format.replace(/M/, month)
	    }
	    // 日期
	    let dates = d.getDate()
	    if (/DD/.test(format)) {
	        let dateStr = dates < 10 ? '0' + dates : dates
	        format = format.replace(/DD/, dateStr)
	    } else if (/D/.test(format)) {
	        format = format.replace(/D/, dates)
	    }
	    // 小时
	    let hours = d.getHours()
	    if (/HH/.test(format)) {
	        let hoursStr = hours < 10 ? '0' + hours : hours
	        format = format.replace(/HH/, hoursStr)
	    } else if (/H/.test(format)) {
	        format = format.replace(/H/, hours)
	    } else if (/hh/.test(format)) {
	        let hoursMin = hours > 12 ? hours - 12 : hours
	        let hoursStr = hoursMin < 10 ? '0' + hoursMin : hoursMin
	        format = format.replace(/hh/, hoursStr)
	    } else if (/h/.test(format)) {
	        let hoursMin = hours > 12 ? hours - 12 : hours
	        format = format.replace(/h/, hoursMin)
	    }
	    // 分
	    let minutes = d.getMinutes()
	    if (/mm/.test(format)) {
	        let minutesStr = minutes < 10 ? '0' + minutes : minutes
	        format = format.replace(/mm/, minutesStr)
	    } else if (/m/.test(format)) {
	        format = format.replace(/m/, minutes)
	    }
	    // 秒
	    let seconds = d.getSeconds()
	    if (/ss/.test(format)) {
	        let secondsStr = seconds < 10 ? '0' + seconds : seconds
	        format = format.replace(/ss/, secondsStr)
	    } else if (/s/.test(format)) {
	        format = format.replace(/s/, seconds)
	    }
	    return format
	}
}