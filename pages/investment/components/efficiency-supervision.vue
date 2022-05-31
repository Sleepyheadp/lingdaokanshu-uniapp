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
		margin-top: 50rpx;
		width: 100%;
		height:100%
		// height: 0rpx;
		// height: 750rpx;
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
		border: 1px solid red;
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
<template>
	<div>
		<div class="main">
			<!--投资增速-->
			<div id="thirdTab" class="section-item">
				<div class="title">
					<span class="title-icon-bar-left"></span>
					<span class="title-icon-bar-right"></span>
					<span class="title-text">投资增速</span>
				</div>
				<div class="content-landing">
					<div class="tab-box-one-line">
						<div class="first-title-box first" style='width:45%'>
							<div class="firstLine">
								<span class='firstPic'></span>
							</div>
							<div class="label">固定资产投资增速</div>
							<div class="num">26.6<span class="char">%</span></div>
						</div>
						<div class="first-title-box second" style='width:45%'>
							<div class="firstLine">
								<span class='secondPic'></span>
							</div>
							<div class="label">工业投资增速</div>
							<div class="num">87.9<span class="char">%</span></div>
						</div>
						<div class="first-title-box first" style='width:45%;margin-top:40rpx;'>
							<div class="firstLine">
								<span class='thirdPic'></span>
							</div>
							<div class="label">民间投资增速</div>
							<div class="num">25.5<span class="char">%</span></div>
						</div>
						<div class="first-title-box second" style='width:45%;margin-left:0rpx;margin-top:40rpx;'>
							<div class="firstLine">
								<span class='firstPic'></span>
							</div>
							<div class="label">基础设施投资增速</div>
							<div class="num">24.8<span class="char">%</span></div>
						</div>
					</div>
					<div class="clear-both"></div>
					<div class="content">
						<!-- <span class="blue-bar">包头市</span> -->
						<!-- <span class="subtitle">在线服务成效度热力图</span> -->
						<!-- <div class="hotmap" id="heatMap-onLineService"></div> -->
					</div>
				</div>
			</div>
			<!-- 投资结构 -->
			<div id="secondTab" class="section-item">
				<div class="title">
					<span class="title-icon-bar-left"></span>
					<span class="title-icon-bar-right"></span>
					<span class="title-text">投资结构</span>
				</div>
				<div class="content-landing">
					<div class="tab-box-one-line">
						<div class="first-title-box first" style='width:30%'>
							<div class="firstLine">
								<span class='firstPic'></span>
							</div>
							<div class="label">一产固定资产投资增速</div>
							<div class="num">-2.9<span class="char">%</span></div>
						</div>
						<div class="first-title-box second" style='width:28%'>
							<div class="firstLine">
								<span class='secondPic'></span>
							</div>
							<div class="label">二产固定资产投资增速</div>
							<div class="num">88.2<span class="char">%</span></div>
						</div>
						<div class="first-title-box second" style='width:28%'>
							<div class="firstLine">
								<span class='thirdPic'></span>
							</div>
							<div class="label">三产固定资产投资增速</div>
							<div class="num">-2.9<span class="char">%</span></div>
						</div>
					</div>
					<div class="clear-both"></div>
					<div class="content">
						<!-- <span class="blue-bar">包头市</span>
						<span class="subtitle">按隶属关系分固定资产投资增速</span></br> -->
						<!-- <div class="chart-item" style="height:500rpx" id="insuranceTwoLine"></div> -->
						<!-- <div class="hotmap" id="heatMap-onLineService"></div> -->
					</div>
				
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import {
		gaugeChart,
		percentBar,
		drawJmHotMap,
		agricultureLineAndBarChart
	} from "../../../charts/h5-chart";
	import {heatChart} from "../echarts.js"
	export default {
		name: "efficiency-supervision",
		props: ['tabData'],
		data() {
			return {
				isLoading: true,
				activeTab1: 0,
				activeTab2: 0,
				activeTab3: 0,
				activeTab4: 0,
				onLineServiceName: '',
				onLineService: {}, // 在线服务成效度
				serviceName: '',
				service: {}, // 服务事项覆盖度
				onLineHandleName: '',
				onLineHandle: {}, // 在线办理成熟度
				serviceTypeName: '',
				serviceType: {}, // 服务方式完备度
				heatMapColors: ['0%-25%', '25%-50%', '50%-75%', '75%-100%'],
				mapData1: '',
				mapData2: '',
				mapData3: '',
				mapData4: '',

			}
		},
		watch: {
			'tabData.data': function(newValue, oldValue) {
				// if(this.tabData.data[0] !==''){
				//   this.isLoading = false;
				// }
				this.initWin();
				deep: true;
				immediate: true;
			},
			'tabDataAgriculture.data': function(newValue, oldValue) {
				this.initWin();
				deep: true;
				immediate: true;
			}
		},
		methods: {
			initWin() {
				this.onLineServiceName = this.tabData.data[0].name;
				this.serviceName = this.tabData.data[1].name;
				this.onLineHandleName = this.tabData.data[2].name;
				this.serviceTypeName = this.tabData.data[3].name;

				this.onLineService = this.tabData.data[0].data.onLineService;
				this.service = this.tabData.data[1].data.Service;
				this.onLineHandle = this.tabData.data[2].data.onLineHandle;
				this.serviceType = this.tabData.data[3].data.start;
				//热力图数据
				// this.tabData.data[0].data.onLineService.chart[0][0].colorList = ['rgba(9,171,128,1)', 'rgba(9,171,128,0.8)', 'rgba(9,171,128,0.6)', 'rgba(9,171,128,0.5)', 'rgba(9,171,128,0.4)', 'rgba(9,171,128,0.2)', 'rgba(9,171,128,0.1)'];
				// this.tabData.data[0].data.onLineService.chart[0][2].colorList = ['rgba(9,171,128,1)', 'rgba(9,171,128,0.8)', 'rgba(9,171,128,0.6)', 'rgba(9,171,128,0.5)', 'rgba(9,171,128,0.4)', 'rgba(9,171,128,0.2)', 'rgba(9,171,128,0.1)'];
				this.mapData1 = this.tabData.data[0].data.onLineService.chart[0][0]
				// this.mapData1.colorList = ['#78c164','#f9db63','#f99b37','#ef5151']
				this.mapData2 = this.tabData.data[1].data.Service.chart[0][0]
				// this.mapData2.colorList = ['#78c164','#f9db63','#f99b37','#ef5151']
				this.mapData3 = this.tabData.data[2].data.onLineHandle.chart[0][0]
				// this.mapData3.colorList = ['#78c164','#f9db63','#f99b37','#ef5151']
				this.mapData4 = this.tabData.data[3].data.start.chart[0][0]
				// this.mapData4.colorList = ['#78c164','#f9db63','#f99b37','#ef5151']

				this.$nextTick(() => {
					// heatChart('heatMap-onLineService', this.mapData1)
					this.mapData2.colorList = ['rgba(249,155,55,1)', 'rgba(249,155,55,0.8)',
						'rgba(249,155,55,0.6)', 'rgba(249,155,55,0.5)', 'rgba(249,155,55,0.4)',
						'rgba(249,155,55,0.2)', 'rgba(249,155,55,0.1)'
					];
					// drawJmHotMap('heatMap-service', this.mapData2)
					// drawJmHotMap('heatMap-onLineHandle', this.mapData3)
					this.mapData4.colorList = ['rgba(249,155,55,1)', 'rgba(249,155,55,0.8)',
						'rgba(249,155,55,0.6)', 'rgba(249,155,55,0.5)', 'rgba(249,155,55,0.4)',
						'rgba(249,155,55,0.2)', 'rgba(249,155,55,0.1)'
					];
					// drawJmHotMap('heatMap-start', this.mapData4)

					//
					// agricultureLineAndBarChart('cropYieldValueBar', this.tabDataAgriculture.data[1].data.quality.chart[0][0]);
				});
			},
			initBarInTable(id, data, color) {
				let maxData = data[0][2];
				data.forEach((item, index) => {
					let tdId = id + '_' + index + '_2';
					const chartData = [item[2]];
					setTimeout(() => {
						percentBar(tdId, chartData, maxData, color);
					}, 500)
				})
			},
			switchTab(num, index) {
				switch (num) {
					// 在线服务成效度
					case 1:
						this.activeTab1 = index;
						this.$nextTick(() => {
							drawJmHotMap('heatMap-onLineService', this.tabData.data[0].data.onLineService.chart[0][
								index
							])
						})
						break
						// 服务事项覆盖度
					case 2:
						this.activeTab2 = index;
						this.$nextTick(() => {
							this.tabData.data[1].data.Service.chart[0][index].colorList = ['rgba(249,155,55,1)',
								'rgba(249,155,55,0.8)', 'rgba(249,155,55,0.6)', 'rgba(249,155,55,0.5)',
								'rgba(249,155,55,0.4)', 'rgba(249,155,55,0.2)', 'rgba(249,155,55,0.1)'
							];
							drawJmHotMap('heatMap-service', this.tabData.data[1].data.Service.chart[0][index])
						})
						break
						// 在线办理成熟度
					case 3:
						this.activeTab3 = index;
						this.$nextTick(() => {
							drawJmHotMap('heatMap-onLineHandle', this.tabData.data[2].data.onLineHandle.chart[0][
								index
							])
						})
						break
						// 在线服务成效度
					case 4:
						this.activeTab4 = index;
						this.$nextTick(() => {
							drawJmHotMap('heatMap-onLineService', this.tabData.data[3].data.start.chart[0][index])
						})
						break
				}
			},
		}
	}
</script>
