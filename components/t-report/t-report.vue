<template>
	<view>
		<view class="height-120 flex-center padding-top-xl bg-theme">
			<text class="text-32 text-white">{{ title }}</text>
		</view>
		
		<view class="padding-lr">
			<t-cell title="请选择投诉原因" right=""></t-cell>
		</view>
		
		<view class="bg-white">
			<view class="flex radius-20 padding bg-white flex-direction">
				<u-radio-group v-model="form.select" @change="selectRadio">
					<view class="width-100" v-for="(item, index) in reportList" :key="index">
						<t-cell :title="item.label" height="80" cellClass="solid-bottom" right="" isSlot >
							<u-radio :name="item.id" active-color="orange">
							</u-radio>
						</t-cell>
					</view>
				</u-radio-group>
			</view>
		</view>
		
		<view class="padding-lr">
			<t-cell title="补充说明(选填)" right=""></t-cell>
		</view>
		
		<view class="padding bg-white">
			<textarea value="" v-model="form.desc" placeholder="请输入文字或上传图片(150字以内)" placeholder-class="place=class" class="text-area" />
			
			<view class="width-100 flex-direction flex align-end">
				<t-upload @change="upload" title="" maxLength="3"></t-upload>
				<text class="text-24 text-999">{{ form.imgs.length }}/3</text>
			</view>
		</view>
		
		<view class="btn-enter bg-theme" @click="submit">
			投诉
		</view>
	</view>
</template>

<script>
	export default {
		name:"t-report",
		props: {
			title: {
				type: String,
				default: '投诉'
			}
		},
		data() {
			return {
				reportList: [
					{ id: 1, label: '买到假货' },
					{ id: 2, label: '虚假营销' },
					{ id: 3, label: '违法商品' },
					{ id: 4, label: '其他' },
				],
				
				form : {
					select: null,
					reportReasonId: null,
					desc: null,
					imgs: []
				}
			};
		},
		methods: {
			selectRadio(e){
				console.log(e)
				this.form.reportReasonId = e
			},
			
			upload: function(e){
				console.log(e)
				this.form.imgs = e
			},
			
			submit: function(){
				let obj = this.form
				
				for(let i in obj){
					if(i == 'desc') continue
					if(!obj[i]) return this.$Tian.toast('请填写相关信息')
				}
				this.$Tian.toast(this.default + '成功！')
				this.$Tian.back()
			},
			
		}
	}
</script>

<style>

</style>
