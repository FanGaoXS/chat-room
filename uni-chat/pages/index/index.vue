<template>
	<view class="content">
		<view class="text-area">
			<h3>{{title}}</h3>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '欢迎'
			}
		},
		onLoad() {
			// app启动后立马跳转到登录页
			this.routerToLogin()
		},
		methods: {
			routerToLogin(){
				this.$u.route({
					type: 'reLaunch',
					url: 'pages/login/login'
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.text-area {
		display: flex;
		justify-content: center;
		margin-top: 350rpx;
	}
	
</style>
