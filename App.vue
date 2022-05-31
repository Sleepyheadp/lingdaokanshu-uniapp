<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			// aa()
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

<style lang="less">
	
	/* #ifdef APP-NVUE */
	
		@import '@/colorui/nvue.css';	
	
	/* #endif */
	
	/* #ifndef APP-NVUE */
		// @import "@/static/fonts/iconfont.css";
		// @import "uview-ui/index.scss";
		@import 'colorui/main.css';
		@import 'colorui/icon.css';
	/* #endif */
	
	.navbar-height {
		/* #ifndef H5, APP-NVUE */
		height: var(--status-bar-height);
		/* #endif */
		width: 100vw;
		/* #ifdef H5 */
		height: 40rpx;
		/* #endif */
	}
	
	.bg-theme {
		background-color: #f2463e;
	}
	
	.text-theme {
		color: #f2463e;
	}
	.size{
	    width: 100%;
	    height: 100%;
	  }
	  html,body{
	    .size;
	    /*overflow: hidden;*/
	    margin: 0;
	    padding: 0;
	    position: relative;
	  }
	  #app {
	    font-size: 24px;
	    /*overflow-y: auto;*/
	    position: absolute;
	    width: 100%;
	    height: 100%;
	    color: #000;
	    background-color: #fff;
	  }
	  @font-face {
	    font-family: 'PingFang-SC-Medium';
	    src: url("./static/assets/font/PINGFANG_MEDIUM.TTF");
	  }
	  @font-face {
	    font-family: 'PingFang-SC-Regular';
	    src: url("./static/assets/font/PingFangSCRegular.ttf");
	  }
	  @font-face {
	    font-family: 'PingFang-SC-Heavy';
	    src: url("./static/assets/font/PingFangHeavy.ttf");
	  }
	  @font-face {
	    font-family: 'PingFang-SC-Bold';
	    src: url("./static/assets/font/PingFangBold.ttf");
	  }
	  @font-face {
	    font-family: 'DIN-Medium';
	    src: url("./static/assets/font/DIN-Medium.otf");
	  }
	  /*@font-face {*/
	    /*font-family: 'CloudZongYiGBK';*/
	    /*src: url("./assets/font/CloudZongYiGBK.TTF");*/
	  /*}*/
</style>
