<style lang="less" scoped>
	.margin-p {
		margin-top: 30rpx;
	}

	.black {
		font-size: 44rpx;
		color: #353535;
		/*font-weight:600;*/
		font-family: "DIN-Medium";
	}

	.red {
		font-size: 50rpx;
		font-family: "DIN-Medium";
		color: #ef382b;
		margin-top: -2rpx;
	}

	.black2 {
		font-size: 44rpx;
		color: #353535;
		font-family: "DIN-Medium";
		// margin-top: 20rpx;
		margin-top: 70rpx;
	}

	.red2 {
		margin-top: 70rpx;
		font-family: "DIN-Medium";
		font-size: 44rpx;
		color: #ef382b;
	}

	.all1 {
		padding: 0.2rem 0.2rem 0.2rem 0.2rem;
		margin-top: 0.2rem;
		background-color: #fff;
		// height: 4410rpx;
	}

	.border {
		height: 150rpx;
		border-right: 1rpx solid #d2d2d2;
	}

	.Integrated {
		display: inline-block;
		height: 36rpx;
		width: 142rpx !important;
		line-height: 36rpx;
		background-color: #1a79c8;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		font-size: 0.29333rem;
		color: #ffffff;
		text-align: center;
		margin-bottom: 20rpx;
	}

	.table-div {
		.addStyle {
			.lable2 {
				color: #1c1c1c;
				font-family: PingFang-SC-Medium;
				margin-top: 20rpx;
			}

			.value {
				font-size: 44rpx;
				color: #353535;
				font-family: "DIN-Medium";
				margin-top: 20rpx;
			}

			// p{
			// 	font-size:12rpx;
			// 	height:40rpx;
			// }
		}

		height: 7rem !important;
		/*border: 1rpx solid red;*/
		display: flex;
		width: 692rpx;
		flex-wrap: wrap;
		box-shadow: 3rpx 3rpx 12rpx rgba(129, 129, 129, 0.25);
		margin: 0 auto 0.8rem;
		text-align: center;
		padding-top: 0.3rem;
		padding-bottom: 1.5rem;

		div {
			width: 33.3%;
			height: 2rem;
			font-size: 0.24rem;
		}
	}

	.table-div1 {
		height: 200rpx;
		/*margin-bottom: 0.8rem;*/
		margin: 0 auto;
		width: 714rpx;
		display: flex;
		justify-content: space-around;
		/*background: url("../../../../static/assets/img/beijing.png") no-repeat 100% 100%;*/
		background: url(data:image/png;base64,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)no-repeat 100% 100%;
		background-size: 100% 100%;
		padding-top: 40rpx;

		div {
			width: 33.3%;
			text-align: center;
			font-size: 24rpx;

			p {
				height: 30rpx;
				margin-top: 12rpx;
				/*color: #1c1c1c;*/
			}
		}
	}

	.table-p {
		font-size: 50rpx;
		color: #353535;
		/*font-weight:600;*/
		margin-top: -5rpx;
		font-family: "DIN-Medium";
	}

	.table-p1 {
		font-size: 44rpx;
		color: #353535;
		/*font-weight:600;*/
		margin-top: 30rpx;
		font-family: "DIN-Medium";
	}

	.table-list {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
	}

	.table-word {
		font-size: 0.24rem;
		color: black;
	}

	.table-num {
		font-size: 0.5rem;
		/*color: #353535;*/
		font-weight: 500;
	}

	.table-unit {
		font-size: 0.2rem;
	}

	.echerts {
		// height: 500rpx;

		/*background: red;*/
		// margin-bottom: 1.2rem;
		&:last-child {
			padding-bottom: 150rpx;
		}
	}

	.echerts-p {
		font-size: 36rpx;
		color: #1c1c1c;
		font-weight: 600;
		height: 30rpx;
		top: 20rpx;
		font-family: "PingFang-SC-Regular";
		/*line-height: 1.9rem;*/
	}

	p {
		height: 10rpx;
		font-size: 24rpx;
	}
</style>
<!-- // 区市监测style -->
<style lang="less" scoped>
	.tdright {
		padding-right: 25rpx;
		font-family: 'PingFang-SC-Medium';
		color: #1c1c1c;
	}

	.tdpadding {
		padding-right: 60rpx;
	}

	tr .ztth {
		border: none;
		font-size: 22rpx;
		/*width: 141rpx;*/
		background: #dfe8f1;
	}

	.spanborder {
		display: inline-block;
		width: 141rpx;
		border-right: 1rpx solid #c3c3c3;
	}

	.thieght {
		height: 56rpx;
		/*background: red;*/
		padding: 0rpx 0rpx 0rpx 0rpx;
	}

	.borderth {
		border: none;
		height: 57rpx;

		th {
			font-family: PingFang-SC-Bold;
		}
	}

	.trhight {
		height: 53rpx;
		/*line-height: 57rpx;*/
		font-family: PingFang-SC-Bold;

		th {
			font-size: 22rpx;
		}
	}

	.tdzi {
		height: 53rpx;
		font-size: 22rpx;
		font-family: PingFang-SC-Bold;
		padding-left: 20rpx;
		color: #1c1c1c;
	}

	.thziborder {
		display: inline-block;
		width: 100%;
		/*background: red;*/
		border-right: 1rpx solid #c3c3c3;
	}

	.thzi {
		font-size: 22rpx;
		background: #dfe8f1;
		border: none;

	}

	.table-div {
		border: 1rpx solid #e1e1e1;
		height: 450rpx;
		margin-bottom: 60rpx;
		padding-left: 0rpx;
	}

	.div1center {
		background: #dfe8f1;
		font-family: PingFang-SC-Bold;
		text-align: left;
		/*padding-left:20rpx ;*/
		line-height: 57rpx;
		font-size: 22rpx;
	}

	.table-div .div1 {
		height: 56rpx;
		/*background: red;*/
		font-family: PingFang-SC-Bold;
		text-align: left;
		padding-left: 20rpx;
		line-height: 57rpx;
		font-size: 22rpx;
		/*background: red;*/
	}

	th,
	td {
		font-weight: normal;
		border-right: 1rpx solid #e1e1e1;
	}

	tr {

		th:last-child,
		td:last-child {
			border-right: 0;
		}
	}

	.all {
		padding: 24rpx 0rem 0rem 24rpx;
		margin-top: 0.2rem;
		background-color: #fff;
	}

	.situation-tab {
		height: 60rpx;
		margin-bottom: 40rpx;
	}

	.tab-title-macro {
		float: left;
		height: 60rpx;
		background: #e1e1e1;
		color: rgba(28, 28, 28, 0.6);
		text-align: center;
		line-height: 60rpx;
		padding: 0rem 0.2rem 0rem 0.2rem;
		font-size: 28rpx;
		margin-top: 0.4rem;
	}

	.tab-title-macro:hover {
		background: #1a79c9;
		color: #ffffff;
	}

	.showecherts {
		// height: 400rpx;
		margin-top:50rpx;
		padding: 0 10rpx;
		/*background: red*/
	}

	.tabActive {
		background: #1a79c9;
		color: #ffffff;
	}

	.echerts {
		// height: 1000rpx;
		/*background: green;*/
		// margin-bottom: 0.8rem;
	}

	.echerts-p {
		font-size: 34rpx;
		color: #1c1c1c;
		font-weight: 600;
		font-family: 'PingFang-SC-Regular';
		margin-left: 5rpx;
		margin-top: 40rpx;
	}

	.invest {
		height: 0.36rem;
		line-height: 0.36rem;
	}

	.Integrated {
		display: inline-block;
		height: 36rpx;
		width: 95rpx;
		line-height: 36rpx;
		background-color: #1a79c8;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		font-size: 24rpx;
		color: #FFFFFF;
		text-align: center;
		/*margin-bottom: 0.4rem;*/
	}

	.Integrated-word {
		font-size: 26rpx;
		color: #1c1c1c;
		margin-left: 10rpx;
		font-family: 'PingFang-SC-Bold';
	}

	.normtable {
		height: 360rpx;
		background: red;
		display: flex;
		justify-content: space-around;
		border: 1rpx solid #e1e1e1
	}

	.slide-box {
		width: 100%;
		/*background: red;*/
		display: -webkit-box;
		overflow-x: scroll;
		-webkit-overflow-scrolling: touch;
	}

	.slide-box::-webkit-scrollbar {
		//隐藏滚动条
		display: none;
	}

	.slide-item {
		width: 100%;
		height: 100%;
		border: 1rpx solid #ccc;
		margin-right: 30rpx;
		border: none;
	}

	.slide-item1 {
		width: 700rpx;
		// height: 850rpx;
		border: 1rpx solid #ccc;

		tr:nth-child(2n+1) {
			background-color: #f7f9fb;
		}
	}

	.norm-div {
		width: 37%;
		background: #f7f9fb;
	}

	.echers1 {
		// height: 850rpx;
	}
</style>
<!-- 货运量 -->
<style lang="less" scoped>
	@import url("../style/traffic-class.less");

	.chartsLine {
		margin-top: -20rpx;
		margin-bottom: -50rpx;
	}

	.chartsLine2 {
		margin-top: -20rpx;
	}

	.echartBar {
		height: 550rpx;
		margin-bottom: -50rpx;
	}

	.chartsTop {
		padding-top: 20rpx;
	}

	.chartsHuo {
		width: 100%;
		height: 500rpx;
		float: left;
	}

	.content {
		width: 100%;
	}
</style>
<style lang="less" scoped>
	.img {
		width: 210rpx;
		margin-top: 18rpx;
	}

	.img2 {
		width: 210rpx;
		margin-top: 34rpx;
	}

	.img2Top {
		margin-top: 65rpx;
	}

	.clear-both {
		clear: both;
		content: "";
	}

	.main {
		width: 750rpx;
		height: 100%;
		background-color: #fff;
	}

	.section-item {
		width: 750rpx;

		&:last-child {
			// padding-bottom: 70rpx;
		}

		.title {
			width: 100%;
			height: 115rpx;

			.title-icon-bar-left {
				margin: 49rpx 0 0 25rpx;
				float: left;
				width: 6rpx;
				height: 34rpx;
				background: #277ecf;
				border-radius: 3rpx;
			}

			.title-icon-bar-right {
				margin: 56rpx 0 0 4rpx;
				float: left;
				width: 6rpx;
				height: 21rpx;
				background: #7db2e2;
				border-radius: 3rpx;
			}

			.title-text {
				float: left;
				margin: 39rpx 0rpx 0 13rpx;
				font-family: 'PingFang-SC-Bold';
				font-size: 36rpx;
			}
		}

	}

	.content-landing {
		width: 750rpx;
		/*height: 1170rpx;*/

		.charts {
			width: 100%;
			height: 450rpx;
			float: left;
		}
	}

	.content {
		// margin-top: 50rpx;
		width: 100%;
		// height: 0rpx;
		// height: 750rpx;
		height:100%;
	}

	.table-content {
		width: 100%;
		height: 500rpx;
		/*margin-top: 50rpx;*/
		/*margin-bottom: 50rpx;*/
	}

	.third-title-box {
		position: relative;
		width: 40%;
		height: 298rpx;
		float: left;
		border: 2rpx solid #ccc;

		&.first {
			border-top: 4rpx solid #1a79cb;
			background-color: #f1f6fb;
			/*background-image: url("../../../static/assets/images/h5/related-bg.png");*/
			/*background-size: 100% 100%;*/
			/*background-repeat: no-repeat;*/
		}

		&.second {
			border-top: 4rpx solid #09ab80;
			background-color: #edf9f5;
			/*background-image: url("../../../static/assets/images/h5/provided-bg.png");*/
			/*background-size: 100% 100%;*/
			/*background-repeat: no-repeat;*/
		}

		&.third {
			border-top: 4rpx solid #f0993c;
			background-color: #fcf7f2;
			/*background-image: url("../../../static/assets/images/h5/pay-bg.png");*/
			/*background-size: 100% 100%;*/
			/*background-repeat: no-repeat;*/
		}

		&:first-child {
			/*border-top: 5px solid #46C09F;*/
			margin-right: 34rpx;
		}

		&:nth-child(2) {
			/*border-top: 5px solid #1A79C8;*/
		}

		&:last-child {
			/*border-top: 5px solid #F0993C;*/
			margin-left: 34rpx;
			padding-top: 14rpx;
		}

		.firstLine {
			margin-top: 16rpx;
			text-align: center;
		}

		span {
			display: inline-block;
			width: 70rpx;
			height: 70rpx;
		}

		.firstPic {
			/*background-image: url("../../../static/assets/images/h5/related.png");*/
			background-image: url(data:image/png;base64,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);
			background-size: 70rpx 70rpx;
			background-repeat: no-repeat;
		}

		.secondPic {
			/*background-image: url("../../../static/assets/images/h5/provided.png");*/
			background-image: url(data:image/png;base64,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);
			background-size: 70rpx 70rpx;
			background-repeat: no-repeat;
		}

		.thirdPic {
			/*background-image: url("../../../static/assets/images/h5/pay.png");*/
			background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAABBlJREFUeJzt2lusXFMcx/GPqp62Gj1HHJoKCdEmlXggBHGpchoSD0pciogEoQ+IBIlE8YQHPIiQCGnjmhRxicT98uBWUfdoFK3QRisNjpTSc1Q9rF3nYu+ZPbNn7TON9U0mWbP2+v/nv3+zbvu/NolEIpFIJBKJROJ/zG5lGg3efzxciKWYi0kRY4rB31iDW/FY7xVvNzWYXNLxRXi4/bgmnEmYh0ez8iNlDMpwY4Wguo2lZRqVFWZOhUC6jUPKNCo7lGLNKb/jdXyOzZiC2TgYp2DPCL9Z6l7KCtNp3sJdeBl/FrSZioW4DifWFNe/1L26/ILFwo0+p1gU2bXnMR/n4qfo0Y2iTmHW4SisaMP2ycx2TUcjakBdwmzGqVhbwce3GMCGjkTUhDqE2YHz8U2LdnmxbRCG1faqQbXz451mhbDyjGcBfsXtOdfuwVb5k+57eKBj0RUQW5jtijeHs7EXbsClo+qvwpXowawC29vwV4dizCW2MG8Ik24ej+OprHwfjhN6yJ1Z3XI8UWC7Hq91KMZcYgvzUoNrO3AxPhU2ds8IQk3BO1hSwXdlYgvzSZPrW3GGsGr1Z5/vcSaGmth+XDm6BsTe+W4sqO/H++jNvk8fdW1fI/uVjcIQG8zxsbkTARYRW5jhgvpBLMOM7Pt8HJOV12FnwmRLAx9RJ9/YwvQV1A/jQSM9ZaYRYVYKKxVsE4ZbK747QmxhDsUHOfWzhZUlb467JPsQBJyD73LazetEgEXEFmYBHsqp/wGnGZljLsCirPyK0JsIE/D6At8ndyjGXGILswjT8EfOtVdHlY8YVV4rPDQ2YpoRIaMQe7meqfl+BL4eVf6sRPslwq45GnUkqm4Sdrk/NmizTNjzTMKqJv72y3xGpY6HyD4hO9/sT/hIc1EmCxn+qCsS9eVjBoQbqtJD98h8LOxIRE2oM4O3GC8qfmJuxCy8kPmohbpzvgNYjauFlaUZ07O2qzPb2piIU4I+3I1b8DTexBfGHp8chJNwFvaegBgn7PiEcMOXZZ+uY1c7nK+NdnrMz/LTAN1MrxaHZDvCLBdOB3cl7tBizO0MpXOMTSx1O1NxXqtG7QhzoJCk7m/Dtm72wbM4oFXDskNpSFhKd3K6kDr4UMiydSM9ONJ/90vNcskoL8y7wr5ivO3RJe27iZVlGpUdStfr3p7RCltwbZmGZXvMKhwunBLOFR7oqjDDSI63GSvxW8XfG8aXuFfJFwtaWa7X4po2gsrjMOUSUnC58MZVraSdbwFJmAKSMAUkYQpIwhQQOx8zFydg93H1+7fg42wcO65uu/BK7Ffth9aYmML0GPtGQ7vcXFA/KOSCt1X0n0vModSnuiiN6BXxGCWmMJuEg7ZSD20tMpT53hTBdyKRSCQSiUQikUj8A/AwpZZRCNOaAAAAAElFTkSuQmCC);
			background-size: 70rpx 70rpx;
			background-repeat: no-repeat;
		}

		.label {
			margin-top: 9rpx;
			text-align: center;
			font-size: 24rpx;
			color: #1c1c1c;
		}

		.label-second {
			margin-top: -3rpx;
		}

		.label-add {
			text-align: center;
			font-size: 20rpx;
			color: #909090;
		}

		.num {
			margin-top: 22rpx;
			/*margin-bottom: 32rpx;*/
			text-align: center;
			font-size: 50rpx;
			font-family: 'DIN-Medium';
			color: #353535;
			font-weight: bold;
		}
	}

	.fourth-title-box {
		width: 48%;
		float: left;

		.picDiv {
			padding-left: 37rpx;
			/*width: 50%;*/
			display: inline-block;
		}

		.textDiv {
			margin-left: 28rpx;
			width: 52%;
			display: inline-block;
		}

		&.active {}

		&:first-child {
			width: 47%;
			/*background-image: url("../../../static/assets/images/h5/related-bg.png");*/
			background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAEYCAYAAAApnagkAAADOklEQVR4nO3VsQ2DQAAEQb/LoEcKcIcOqIWIiAQX4ZVeoJkKLlnd2I9zfQF/Gcvne80eAXf3nj0AnkBIEBASBMZ+nNvsEXB3HgkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCwA/wHAt5W7cCrQAAAABJRU5ErkJggg==);
			background-size: 100% 100%;
			background-repeat: no-repeat;
			/*border-top: 5px solid #46C09F;*/
			margin-right: 32rpx;
		}

		&:last-child {
			width: 47%;
			/*background-image: url("../../../static/assets/images/h5/related-bg.png");*/
			background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAEYCAYAAAApnagkAAADOklEQVR4nO3VsQ2DQAAEQb/LoEcKcIcOqIWIiAQX4ZVeoJkKLlnd2I9zfQF/Gcvne80eAXf3nj0AnkBIEBASBMZ+nNvsEXB3HgkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCwA/wHAt5W7cCrQAAAABJRU5ErkJggg==);
			background-size: 100% 100%;
			background-repeat: no-repeat;
			/*border-top: 5px solid #F0993C;*/
		}

		span {
			display: inline-block;
			width: 70rpx;
			height: 70rpx;
		}

		.firstPic {
			/*background-image: url("../../../static/assets/images/h5/city.png");*/
			background-image: url(data:image/png;base64,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);
			background-size: 70rpx 70rpx;
			background-repeat: no-repeat;
		}

		.secondPic {
			/*background-image: url("../../../static/assets/images/h5/country.png");*/
			background-image: url(data:image/png;base64,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);
			background-size: 70rpx 70rpx;
			background-repeat: no-repeat;
		}

		.label {
			margin-top: 42rpx;
			text-align: center;
			font-size: 24rpx;
			color: #1c1c1c;
		}

		.num {
			margin-top: 16rpx;
			margin-bottom: 42rpx;
			text-align: left;
			font-size: 54rpx;
			font-family: 'DIN-Medium';
			color: #353535;
			font-weight: bold;
		}
	}

	.first-title-box {
		position: relative;
		width: 210rpx;
		height: 200rpx;
		float: left;

		&:first-child {
			margin-right: 31rpx;
		}

		&:last-child {
			margin-left: 31rpx;
		}

		&.first {
			/*background-image: url("../../../static/assets/images/h5/provided-bg.png");*/
			background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAEYCAYAAAApnagkAAADOklEQVR4nO3VsQ2DQAAEQb8ziqUH9+NWaISYgBAX4ZVeoJkKLlnd2M9jfQF/Gcv3c80eAXf3nj0AnkBIEBASBMZ+HtvsEXB3HgkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCwA8pwAtABEHpMAAAAABJRU5ErkJggg==);
			background-size: 100% 100%;
			background-repeat: no-repeat;
			/*border-top: 5px solid #46C09F;*/
			margin-right: 31rpx;
		}

		&.second {
			/*background-image: url("../../../static/assets/images/h5/related-bg.png");*/
			background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAEYCAYAAAApnagkAAADOklEQVR4nO3VsQ2DQAAEQb/LoEcKcIcOqIWIiAQX4ZVeoJkKLlnd2I9zfQF/Gcvne80eAXf3nj0AnkBIEBASBMZ+nNvsEXB3HgkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCwA/wHAt5W7cCrQAAAABJRU5ErkJggg==);
			background-size: 100% 100%;
			background-repeat: no-repeat;
			/*border-top: 5px solid #1A79C8;*/
		}

		&.third {
			/*background-image: url("../../../static/assets/images/h5/pay-bg.png");*/
			background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAEYCAYAAAApnagkAAADPUlEQVR4nO3YsQ3CQBBFwTtEWTRKSD/uBSeOCKAIP+lkNFPBT55W2vk53tsATpn78/FdPQKu7rZ6APwDIUFASBCYng1wnosEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBIH7GOO1egRc3Q9qFwzr/LlcMwAAAABJRU5ErkJggg==);
			background-size: 100% 100%;
			background-repeat: no-repeat;
			/*border-top: 5px solid #F0993C;*/
			margin-left: 31rpx;
		}

		.firstLine {
			margin-top: 17rpx;
			text-align: center;

			span {
				display: inline-block;
				width: 60rpx;
				height: 60rpx;
			}
		}

		.firstPic {
			background-image: url("../../../static/assets/images/h5/immediateFile.png");
			background-size: 60rpx 60rpx;
			background-repeat: no-repeat;
		}

		.secondPic {
			background-image: url("../../../static/assets/images/h5/run.png");
			background-size: 60rpx 60rpx;
			background-repeat: no-repeat;
		}

		.thirdPic {
			background-image: url("../../../static/assets/images/h5/promisedTime.png");
			background-size: 60rpx 60rpx;
			background-repeat: no-repeat;
		}

		.label {
			margin-top: -5rpx;
			margin-bottom: 10rpx;
			text-align: center;
			font-size: 24rpx;
			color: #1c1c1c;
		}

		.label-add {
			text-align: center;
			font-size: 20rpx;
			color: #909090;
		}

		.num {
			/*margin-top: 22rpx;*/
			margin-bottom: 10rpx;
			text-align: center;
			font-size: 50rpx;
			font-family: 'DIN-Medium';
			color: #353535;
			font-weight: bold;

			.char {
				font-size: 30rpx;
			}
		}
	}

	.second-title-box {
		width: 100%;
		height: 162rpx;
		box-shadow: 0rpx 0rpx 10rpx rgba(129, 129, 129, 0.25);

		/*float:left;*/
		&.first {
			/*background-color: #F1F6FB;*/
			margin-right: 31rpx;
		}

		&.second {

			/*background-color: #EDF9F5;*/
		}

		.firstBg {
			background-color: #F1F6FB;
			/*border: 1px solid red;*/
			width: 297rpx;
		}

		.conColumn {
			width: 195rpx !important;
			height: 122rpx !important;
			padding-top: 40rpx;

			/*border: 1px solid red;*/
			&>div {
				border-right: 1rpx solid #e2e2e2;
			}
		}

		.conColumn2 {
			height: 122rpx !important;
			width: 195rpx !important;
			padding-top: 40rpx;
		}

		.secondBg {
			background-color: #EDF9F5;
			width: 297rpx;
		}

		.column {
			/*width: 227px !important;*/
			/*border: 1px solid red;*/
			float: left;
			height: 162rpx;

			/*height: 100%;*/
			&:first-child {
				/*width: 297rpx;*/
			}

			&:nth-child(2) {
				width: 150rpx;

				&>div {
					text-align: center;

					/*&:first-child{*/
					/*margin-top: 40rpx;*/
					/*margin-bottom: 18rpx;*/
					/*}*/
					&:last-child {
						font-family: 'DIN-Medium';
						font-size: 50rpx;
						/*margin-bottom: 40rpx;*/
					}
				}
			}

			&:last-child {

				/*width: 230rpx;*/
				&>div {
					text-align: center;

					&:first-child {
						/*margin-top: 40rpx;*/
						/*margin-bottom: 20rpx;*/
					}

					&:last-child {
						font-family: 'DIN-Medium';
						font-size: 50rpx;
						/*margin-bottom: 40rpx;*/
					}
				}
			}

			.label {
				/*border: 1px solid red;*/
				font-size: 24rpx;
				color: #1c1c1c;
				line-height: 40rpx;
				width: 140rpx;
				text-align: left;
				margin-left: 18rpx;
				margin-top: 40rpx;
				float: left;
				display: inline-block;
			}

			/*.large{*/
			/*width: 170rpx;*/
			/*}*/
		}

		&:first-child {
			border-left: 4rpx solid #1A79C8;
			margin-bottom: 24rpx;
		}

		&:nth-child(2) {
			border-left: 4rpx solid #46C09F;
			margin-bottom: 24rpx;
		}

		&:nth-child(3) {
			border-left: 4rpx solid #46C09F;

		}

		span {
			margin-top: 46rpx;
			margin-left: 35rpx;
			display: inline-block;
			width: 70rpx;
			height: 70rpx;
			float: left;
		}

		.firstPic {
			background-image: url("../../../static/assets/images/h5/apply.png");
			background-size: 70rpx 70rpx;
			background-repeat: no-repeat;
		}

		.secondPic {
			background-image: url("../../../static/assets/images/h5/public-service.png");
			background-size: 70rpx 70rpx;
			background-repeat: no-repeat;
		}

		.thirdPic {
			background-image: url("../../../static/assets/images/h5/promisedTime.png");
			background-size: 70rpx 70rpx;
			background-repeat: no-repeat;
		}

		.label {
			margin-top: 10rpx;
			margin-bottom: 30rpx;
			text-align: center;
			font-size: 24rpx;
			color: #1c1c1c;
		}

		.label-add {
			text-align: center;
			font-size: 20rpx;
			color: #909090;
		}

		.num {
			margin-top: 22rpx;
			margin-bottom: 32rpx;
			text-align: center;
			font-size: 50rpx;
			font-family: 'DIN-Medium';
			color: #353535;
			font-weight: bold;

			.char {
				font-size: 30rpx;
			}
		}
	}

	.tab-box-one-line {
		width: 693rpx;
		/*height: 150rpx;*/
		margin-left: 24rpx;
		margin-top: 24rpx;
		/*box-shadow: 0 0 12px rgba(129, 129, 129, 0.25);*/
		/*display: flex;*/
		float: left;

		.avtive {
			bottom: -20rpx;
			position: absolute;
			width: 210rpx;
			height: 23rpx;
			background: url("../../../static/assets/images/h5/chosen.png") no-repeat;
			background-size: 100% 100%;
		}
	}

	.splitLine {
		float: right;
		width: 1rpx;
		height: 80rpx;
		margin-top: -145rpx;
		background-color: #e1e1e1;
	}

	.includeArray {
		float: right;
		height: 121rpx;
		width: 12rpx;
		margin-top: -145rpx;
		background: url("../../../static/assets/images/h5/include-array.png") no-repeat;
		background-size: 100% 100%;
	}

	.name {
		font-size: 24rpx;
		font-family: "PingFang-SC-Medium";
		text-align: left;
	}

	.number {
		font-size: 44rpx;
		font-family: 'DIN-Medium';
		text-align: left;
		line-height: 44rpx;
	}

	.unit {
		font-size: 24rpx;
		font-family: "PingFang-SC-Medium";
		text-align: left;
		line-height: 44rpx;
	}

	.three-tab {
		width: 231rpx;
		/*flex: 1;*/
		height: 150rpx;
		float: left;

		&:last-child {
			.splitLine {
				background-color: #fff;
			}
		}

		.tab-with-line {
			width: 230rpx;
			/*flex: 1;*/
			height: 150rpx;
			float: left;
			padding-left: 20rpx;
			padding-top: 36rpx;
		}

		.tabWithLine {
			width: 230rpx;
			/*flex: 1;*/
			height: 125rpx;
			float: left;
			padding-left: 30rpx;
			padding-top: 36rpx;
		}

		.tabWithArray {
			width: 219rpx;
			height: 150rpx;
			padding-left: 30rpx;
			padding-top: 36rpx;
		}

		.tab {
			padding-left: 30rpx;
			padding-top: 36rpx;

			.number {
				color: #39c77f;
			}

			.unit {
				color: #39c77f;
				font-size: 44rpx;
				font-family: 'DIN-Medium';
			}
		}
	}

	.blue-bar {
		width: 95rpx;
		heigth: 36rpx;
		background-color: #1a79c8;
		border-radius: 18rpx;
		float: left;
		font-size: 22rpx;
		margin: 0 0 0 23rpx;
		color: white;
		text-align: center;
		font-family: 'PingFang-SC-Medium';
	}

	.subtitle {
		float: left;
		color: #909090;
		font-size: 26rpx;
		margin: -3rpx 0 0 5rpx;
		text-align: center;
		font-family: 'PingFang-SC-Medium';
	}

	.bar-table {
		width: 700rpx;
		height: 452rpx;
		float: left;
		text-align: center;
		margin-left: 30rpx;
		/*margin-top: 35rpx;*/
		border: 1rpx solid #e8e8e8;
		border-spacing: 0;

		.title {
			height: 57rpx;
			width: 100%;
			line-height: 2;
		}

		thead {
			background-color: #dfe8f1;
			font-weight: normal;
			color: #1c70c8;
			font-size: 22rpx;
			width: 100%;
			font-family: 'PingFang-SC-Medium';
			display: table;
			table-layout: fixed;
			height: 57rpx;
			line-height: 2;

			tr {
				width: 100%;
				height: 57rpx;
				table-layout: fixed;
				display: table;
				line-height: 2;

				th {
					text-align: center;
					/*height: 50rpx;*/
					/*line-height: 30rpx;*/
					/*white-space: pre;*/
				}

				th:first-child {
					/*width: 25%;*/
					border-right: 1rpx solid #e8e8e8;
				}

				th:nth-child(2) {
					/*width: 25%;*/
					border-right: 1rpx solid #e8e8e8;
					/*border: 1px solid red;*/

				}

				th:nth-child(3) {
					/*width: 25%;*/
					border-right: 1rpx solid #e8e8e8;
				}

				th:nth-child(4) {
					/*width: 25%;*/
					border-right: 1rpx solid #e8e8e8;
				}
			}

			.tr2 {
				width: 100%;
				height: 75rpx;
				table-layout: fixed;
				display: table;
				line-height: 2;

				th {
					text-align: center;
					/*height: 50rpx;*/
					line-height: 30rpx;
					/*white-space: pre;*/
				}

				th:first-child {
					/*width: 25%;*/
					border-right: 1rpx solid #e8e8e8;
				}

				th:nth-child(2) {
					/*width: 25%;*/
					border-right: 1rpx solid #e8e8e8;
					/*border: 1px solid red;*/

				}

				th:nth-child(3) {
					/*width: 25%;*/
					border-right: 1rpx solid #e8e8e8;
				}

				th:nth-child(4) {
					/*width: 25%;*/
					border-right: 1rpx solid #e8e8e8;
				}
			}

			th {
				font-weight: 300;
			}

			/*.little{*/
			/*width: 12%!important;*/
			/*}*/
		}

		tbody {
			font-size: 22rpx;
			color: #000;
			/*border: 1px solid red;*/
			height: 395rpx;
			/*display: block;*/
			font-family: 'PingFang-SC-Medium';

			tr {
				line-height: 2;
				height: 57rpx;

				&:nth-child(odd) {
					background-color: #f7f9fb;
				}

				&:nth-child(even) {
					background-color: #fff;
				}
			}
		}

		thead,
		tbody tr {
			display: table;
			width: 100%;
			table-layout: fixed;

			td:first-child {
				/*width: 25%;*/
				border-right: 1rpx solid #e8e8e8;
			}

			td:nth-child(2) {
				/*width: 25%;*/
				border-right: 1rpx solid #e8e8e8;
			}

			td:nth-child(3) {
				/*width: 25%;*/
				border-right: 1rpx solid #e8e8e8;
			}

			td:nth-child(4) {
				/*width: 25%;*/
				border-right: 1rpx solid #e8e8e8;
			}
		}
	}

	.bar-chart {
		width: 100%;
		height: 700rpx;
		float: left;
	}

	.hotmap {
		width: 100%;
		height: 700rpx;
		float: left;
	}

	.colorBox {
		vertical-align: text-top;
		display: inline-block;
		width: 30rpx;
		height: 30rpx;
		margin-right: 10rpx;
	}

	.color0 {
		background-color: #78c164;
	}

	.color1 {
		background-color: #f9db63;
	}

	.color2 {
		background-color: #f99b37;
	}

	.color3 {
		background-color: #ef5151;
	}

	.colorText {
		margin-right: 10rpx;
		font-size: 22rpx;
	}
</style>
<style scoped lang="less">
  @import url("../style/industrial.less");
  .tab-title{
    width: 692rpx;
    height: 294rpx;
    text-align: center;
    margin-left: 29rpx;
    box-shadow: 0 0 12rpx rgba(129, 129, 129, 0.25);
    display: flex;
    float: left;
  }
  .img{
    width: 200rpx;
    margin-top: 28rpx;
  }
  .img-margin{
    margin-top: 7rpx;
    position:absolute;
    top:292rpx;
    img{
      width: 200rpx;
    }
  }
  .tab {
    flex: 1;
    height:150rpx;
    padding-top: 40rpx;
  }
  .tab-one-line-title-scroll{
    width: 692rpx;
    height: 181rpx;
    overflow-x: scroll;
    overflow-y: hidden;
    text-align: center;
    margin: 0 auto;
    /*padding-bottom: 29rpx;*/

    /*box-shadow: 0px 0px 12px rgba(129, 129, 129, 0.25);*/
    display: flex;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .tab-one-line-scroll-item{
    flex: 0 0 200rpx;
    /*height:86%;*/
    height: 150rpx;
    vertical-align: middle;
    /*padding-top: 40rpx;*/
    margin-right: 22rpx;
    display: table;
    .words{
      position: relative;
      display: table-cell;
      vertical-align: middle;
      .arrow-bottom{
        position: absolute;
        height: 29rpx;
        width: 200rpx;
        margin-top: 7rpx;
        /*border:1px solid red;*/
        top:148rpx;
        /*left:20rpx;*/
        img{
          width: 200rpx;
        }
      }
    }


  }
  .tab-two-line-title-scroll-padding{
    padding-bottom: 33rpx;
  }

  .tab-two-line-title-scroll{
    /*padding-bottom: 33rpx;*/
    width: 692rpx;
    height: 294rpx;
    overflow-x: scroll;
    overflow-y: hidden;
    text-align: center;
    margin: 0 auto;
    /*box-shadow: 0px 0px 12px rgba(129, 129, 129, 0.25);*/
    display: flex;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .tab-two-line-scroll-item{
    flex: 0 0 200rpx;
    height:100%;
    /*padding-top: 40rpx;*/
    margin-right: 22rpx;
    position: relative;
    .tab-two-line-scrolll-item-top{
      height: 65%;
      width: 100%;
      display: table;
    }
    .tab-two-line-scrolll-item-bottom{
      /*padding-top: 28rpx;*/
      height: 35%;
      width: 100%;
      display: table;
    }
  }
  .line{
    width: 150rpx;
    height: 1rpx;
    margin: 2rpx auto;
    /*background-color: #93E0BA;*/
  }
  /*.tabActive {*/
    /*border-top:solid #1a79c8 4rpx;*/
    /*padding-top: 36rpx;*/
    /*background-image: linear-gradient(rgba(231, 242, 255, 1), rgba(231, 242, 255, 0));*/
    /*color: #1a79c8;*/
  /*}*/
  .totalValueContent{
    width: 750rpx;
    text-align: center;
    height: 1030rpx;
    .map {
      width: 100%;
      height: 700rpx;
      /*float: left;*/
    }
  }
  .cropYieldContent{
    width: 750rpx;
    /*text-align: center;*/
    height: 100%;
    /*margin-top:34rpx;*/
  }
  .cropAreaContent{
    width: 750rpx;

  }
 .drop-down-list{
   width: 200rpx;
   margin-left: 30rpx;
   margin-bottom: 20rpx
 }
  .drop-down-list /deep/ .van-dropdown-menu__bar {
    /*box-shadow: none;*/
  }
  .sub-title{
    margin-top: 34rpx;
    height: 100%;
  }

  .pie-chart1{
    height: 412rpx;
  }

</style>
<template>
  <div>
	<!-- 产业结构 -->
    <div id="firstTab" class=" section-item content">
      <div class="title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">产业结构</span>
      </div>
      <div class="cropYieldContent">
          <div class="sub-title">
          <!-- <view class="">
				<span class="subtitle-pre">包头市</span>
				<span class="subtitle-next">办件办结量、办件受理量趋势</span>
				<div class="bar-chart" id="cropYieldValueBar"></div>
           </view>
			<view class="">
				<span class="subtitle-pre">包头市</span>
				<span class="subtitle-next">平均承诺/办结时间趋势</span>
				<div class="bar-chart2" id="cropYieldValueBar2"></div>
			</view> -->
           <view class="">
				<span class="subtitle-pre">包头市</span>
				<span class="subtitle-next">产业增加值</span>
				<div class="pie-chart1" id="cropYieldValuePie"></div>
           </view>
          </div>
      </div>
    </div>
	<!-- 人口概况 -->
	<div id="thirdTab" class="section-item content">
		<div class="title">
			<span class="title-icon-bar-left"></span>
			<span class="title-icon-bar-right"></span>
			<span class="title-text">人口概况</span>
		</div>
		<div class="content-landing">
			<div class="tab-box-one-line">
				<div class="first-title-box first" style='width:30%'>
					<div class="firstLine">
						<span class='firstPic'></span>
					</div>
					<div class="label" style="margin-top:0rpx;">总人口数</div>
					<div class="num" style="font-size: 40rpx;margin-top:20rpx;">11500<span class="char">人</span></div>
				</div>
				<div class="first-title-box second" style='width:30%'>
					<div class="firstLine">
						<span class='secondPic'></span>
					</div>
					<div class="label" style="margin-top:0rpx;">劳动人口数</div>
					<div class="num" style="font-size: 40rpx;margin-top:20rpx;">6658<span class="char">人</span></div>
				</div>
				<div class="first-title-box third" style='width:30%'>
					<div class="firstLine">
						<span class='thirdPic'></span>
					</div>
					<div class="label" style="margin-top:0rpx;">人口负担系数</div>
					<div class="num" style="font-size: 40rpx;margin-top:20rpx;">0.5354<span class="char"></span></div>
				</div>
			</div>
			<div class="clear-both"></div>
			<div class="content">
				<span class="blue-bar">包头市</span>
				<span class="subtitle">近30天办件量</span>
				<div class="bar-chart" id="cropYieldValueBar3"></div>
				<!-- <div class="bar-chart" id="cropYieldValueBar3"></div> -->
				<!-- <div class="hotmap" id="heatMap-onLineService"></div> -->
			</div>
		</div>
	</div>
	<!-- 劳动工资 -->
	<div id="thirdTab" class="section-item content">
		<div class="title">
			<span class="title-icon-bar-left"></span>
			<span class="title-icon-bar-right"></span>
			<span class="title-text">劳动工资</span>
		</div>
		<div class="content-landing">
			<div class="tab-box-one-line">
				<div class="first-title-box first" style='width:45%'>
					<div class="firstLine">
						<span class='firstPic'></span>
					</div>
					<div class="label" style="margin-top:0rpx;">单位从业人员总人数</div>
					<div class="num" style="font-size: 40rpx;margin-top:20rpx;">245460<span class="char">人</span></div>
				</div>
				<div class="first-title-box second" style='width:45%'>
					<div class="firstLine">
						<span class='secondPic'></span>
					</div>
					<div class="label" style="margin-top:0rpx;">从业人员工资总额</div>
					<div class="num" style="font-size: 40rpx;margin-top:20rpx;">14043931<span class="char">千元</span></div>
				</div>
			</div>
			<div class="clear-both"></div>
			<div class="content">
				<span class="blue-bar">包头市</span>
				<span class="subtitle">近30天办件量</span>
				<!-- <div class="bar-chart" id="cropYieldValueBar3"></div> -->
				
				<!-- 表格 -->
				<div class="showecherts">
					<div class="echers1">
						<table class="slide-item1" cellspacing="0">
							<tr class="trhight" style="color: #1a79c9;background: #dfe8f1;">
								<th class="thzi" style="width: 4.5rem">
									<span class="thziborder">行业名称</span>
								</th>
								<th class="thzi" style="width: 1.5rem">
									<span class="thziborder">从业人员平均工资</span>
								</th>
								<!-- <th class="thzi">增速</th> -->
							</tr>
							<tr>
								<td class="tdzi" style="text-align: center;">采矿业</td>
								<td class='tdright' style="text-align: center;">1088166</td>
							</tr>
							<tr>
								<td class="tdzi" style="text-align: center;">制造业</td>
								<td class='tdright' style="text-align: center;">7163011</td>
							</tr>
							<tr>
								<td class="tdzi" style="text-align: center;">电力、热力、燃气及水生产和供应业</td>
								<td class='tdright' style="text-align: center;">862217</td>
							</tr>
							<tr>
								<td class="tdzi" style="text-align: center;">建筑业</td>
								<td class='tdright' style="text-align: center;">31583</td>
							</tr>
							<tr>
								<td class="tdzi" style="text-align: center;">批发和零售业</td>
								<td class='tdright' style="text-align: center;">807101</td>
							</tr>
							<tr>
								<td class="tdzi" style="text-align: center;">交通运输、仓储和邮政业</td>
								<td class='tdright' style="text-align: center;">805204</td>
							</tr>
							<tr>
								<td class="tdzi" style="text-align: center;">住宿和餐饮业</td>
								<td class='tdright' style="text-align: center;">248519</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
  import { drawJmHotMap, agricultureLineAndBarChart,industrialpieChart } from '../../../charts/h5-chart';
  export default {
    name: "agriculture",
    components:{},
    props:{
      tabDataAgriculture:{
        type:Object
      }
    },
    data(){
      return {
        value1: 0,
        option1: [
          { text: '江门市', value: 0 },
          { text: '蓬江区', value: 1 },
          { text: '江海区', value: 2 },
          { text: '新会区', value: 3 },
          { text: '台山市', value: 4 },
          { text: '开平市', value: 5 },
          { text: '鹤山市', value: 6 },
          { text: '恩平市', value: 7 },
        ],
        totalValueTabIndex:0,
        cropYieldTabIndex:0,
        areaOFCropTabIndex:0,
		banjianliang:{
			"legends": ["办件办结量", "办件受理量"],
			"series": [{
				"name": "办件办结量",
				"type": "line",
				"stack": null,
				"data": ["1089", "1100", "1111", "1122", "1133", "1144", "1155", "1166", "1177", "1188", "1199", "1210"]
			}, {
				"name": "办件受理量",
				"type": "line",
				"stack": null,
				"data": ["17465", "16552", "18536", "13927", "12357", "14641", "23728", "24109", "9741", "7917", "19793","10341"]
			}],
			"type":'line',
			"year": null,
			"yaxis": ["天", "天"],
			"xaxis": ["2021-09", "2021-10", "2021-11", "2021-12", "2021-01","2021-02"]
		},
		pingjunchengnuo:{
			"legends": ["平均承诺时间", "平均办结时间"],
			"series": [{
				"name": "平均承诺时间",
				"type": "line",
				"stack": null,
				"data": [5,6,8,7,5,4]
			}, {
				"name": "平均办结时间",
				"type": "line",
				"stack": null,
				"data": [10,8,5,4,4,5]
			}],
			"type":'line',
			"year": null,
			"yaxis": ["天", "天"],
			"xaxis": ["2021-09", "2021-10", "2021-11", "2021-12", "2021-01","2021-02"]
		},
		chanyejiegou:[{
					"name": "第一产业",
					"unit": "亿元",
					"value": 114.44
				}, {
					"name": "第二产业",
					"unit": "亿元",
					"value": 1571.17
				}, {
					"name": "第三产业",
					"unit": "亿元",
					"value": 1607.39
				}],
		manyidu:[{
					"name": "满意数量占比",
					"unit": "%",
					"value": 4
				}, {
					"name": "很满意数量占比",
					"unit": "%",
					"value": 94
				}, {
					"name": "基本满意数量占比",
					"unit": "%",
					"value": 1
				}, {
					"name": "不满意数量占比",
					"unit": "%",
					"value": 0.9
				}, {
					"name": "很不满意数量占比",
					"unit": "%",
					"value": 0.1
				}],
		sanshitian:{
			"legends": ['男','女'],
			"series": [{
				"name": "男",
				"type": "line",
				"stack": null,
				"data": ["946", "132", "774", "822", "767", "801", "820", "827",
							"802"
						],
			}, {
				"name": "女",
				"type": "line",
				"stack": null,
				"data": ["896", "137", "818", "756", "810", "841", "825", "766",
							"802"
						],
			}],
			"type":'line',
			"year": null,
			"yaxis": ["件"],
			"xaxis": ["0-9岁", "10-19岁", "20-29岁", "30-39岁", "40-49岁", "50-59岁",
						"60-69岁", "70-79岁", "80岁以上"
					]
		}
      }
    },
	mounted() {
		this.initWin()
		this.switchCropYieldInfTab(0)
	},
    watch:{
      'tabDataAgriculture.data':function (newValue, oldValue) {
        this.initWin()
      }
    },
    methods:{
      initWin(){
        this.$nextTick(()=>{
          // drawJmHotMap('totalValueMap', this.tabDataAgriculture.data[0].data.gdp.chart[0][0]);
          // this.banjianliang.gridTop = 115;
          // this.banjianliang.legendRight = '15%';
          // agricultureLineAndBarChart('cropYieldValueBar', this.banjianliang);
          // agricultureLineAndBarChart('cropYieldValueBar2', this.pingjunchengnuo);
		  //办件类型 近30天办件量
		  agricultureLineAndBarChart('cropYieldValueBar3', this.sanshitian);

          this.tabDataAgriculture.data[1].data.quality.chart[1][0].series[0].data.titlePadding = 30;

          let cropYieldValuePieData = this.chanyejiegou;
          cropYieldValuePieData.gridBottom = 40;
          cropYieldValuePieData.chartTop = '52%';
          industrialpieChart('cropYieldValuePie',cropYieldValuePieData);
          let cropAreaValuePieData = this.tabDataAgriculture.data[2].data.area.chart.series[0].data;
          // cropAreaValuePieData.chartLeft = '30%';
          // cropAreaValuePieData.legendX = 435;
          // cropAreaValuePieData.titleLeft = 220;
          // industrialpieChart('cropAreaValuePie',cropAreaValuePieData);
        })

      },
      // 切换农业总产值 tab
      switchTotalValueInfTab(index) {
        this.totalValueTabIndex = index;
        setTimeout(() => {
          let mapData = this.tabDataAgriculture.data[0].data.gdp.chart[index][0];
          // if((index+1)%2 === 0){
          //   //黄色色系
          //   let yellowColorList = ['rgba(249,155,55,1)', 'rgba(249,155,55,0.8)', 'rgba(249,155,55,0.6)', 'rgba(249,155,55,0.5)', 'rgba(249,155,55,0.4)', 'rgba(249,155,55,0.2)', 'rgba(249,155,55,0.1)'];
          //   mapData.colorList = yellowColorList;
          // }
          drawJmHotMap('totalValueMap',mapData)
          // drawJmHotMap('totalValueMap', this.tabDataAgriculture.data[0].data.totalValue.chart[index])
        },200)
      },
      // 切换农产品产量 tab
      switchCropYieldInfTab(index) {
        this.cropYieldTabIndex = index;
        setTimeout(() => {
          // this.banjianliang.legendRight = '15%';
          // this.banjianliang.gridTop = 115;
		  // 办件量-柱状折线图
          // agricultureLineAndBarChart('cropYieldValueBar', this.banjianliang);
		  // 平均承诺办结事件-柱状折线图
          // agricultureLineAndBarChart('cropYieldValueBar2', this.pingjunchengnuo);
          // this.tabDataAgriculture.data[1].data.quality.chart[1][index].series[0].data.titleLeft = 280;
		  // 满意度-饼图
          let cropYieldValuePieData = this.manyidu;
          cropYieldValuePieData.gridBottom = 40;
          cropYieldValuePieData.chartTop = '52%';
          industrialpieChart('cropYieldValuePie',cropYieldValuePieData);
          // agricultureLineAndBarChart('cropYieldValueBar', this.tabDataAgriculture.data[1].data.cropYiedValue.chart[index])
          // industrialpieChart('cropYieldValuePie',this.tabDataAgriculture.data[1].data.cropYielRate.chart[index].data);
        },200)
      },
      //切换农作物播种面积
      // switchAreaOfCropTab(index){
      //   this.areaOFCropTabIndex = index;
      //   setTimeout(()=>{
      //     industrialpieChart('cropAreaValuePie',this.tabDataAgriculture.data[2].data.area.chart.series[0].data);
      //     // industrialpieChart('cropAreaValuePie',this.tabDataAgriculture.data[2].data.area_of_crops.chart[index].data);
      //   },200)
      // }
    }
  }
</script>

<style scoped>

</style>
