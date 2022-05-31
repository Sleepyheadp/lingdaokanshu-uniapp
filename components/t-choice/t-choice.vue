<template>
	<view class="round hidden avatar-30 flex-shink-0 line-black margin-lr-sm" :class="choice == true ? '' : 'solid'" @click="toggleSelect()">
		<image src="/static/imgs/icon/success-fill.png" v-if="choice" mode="" class="avatar-30"></image>
	</view>
</template>

<script>
	export default {
		name:"t-choice",
		props: {
			choice: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
			};
		},
		methods: {
			toggleSelect: function(){
				this.$emit('change', this.choice)
			}
		}
	}
</script>

<style>

</style>
