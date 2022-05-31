import IMG from "@/utils/imageMange.js"


const theme = {
	blue: {
		theme_back: '#5e9df6',
		theme_back_plus: '#c3e2fb',
		home_back: IMG.home_back_blue,
		title_back: '#9fcff6',
		// tabbar_home_a: IMG.tabbar_home_blue,
		// tabbar_teach_a: IMG.tabbar_teach_blue,
		// tabbar_store_a: IMG.tabbar_store_blue,
		// tabbar_user_a: IMG.tabbar_user_blue,
	},
	green: {
		theme_back: '#3db963',
		theme_back_plus: '#a1ebb8',
		title_back: '#7cda63',
		home_back: IMG.home_back_green,
		// tabbar_home_a: IMG.tabbar_home_green,
		// tabbar_teach_a: IMG.tabbar_teach_green,
		// tabbar_store_a: IMG.tabbar_store_green,
		// tabbar_user_a: IMG.tabbar_user_green,
	}
}

function themeHandler(e) {
	for(let i in theme){
		console.log(e)
		if(e == i) return theme[i]
	}
}

export default {
	themeHandler
}