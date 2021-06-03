<template>
	<view>
		<h2>{{title}}</h2>
		<u-input 
			type="text" 
			placeholder="请输入用户名"
			v-model="loginForm.username">
		</u-input>
		<u-input
			type="text" 
			placeholder="请输入密码"
			v-model="loginForm.password">
		</u-input>
		<u-button @click="handleLoginButton()">登录</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '登录页',
				loginForm: {
					username: '',
					password: ''
				}
			}
		},
		methods: {
			handleLoginButton: function(){
				if(this.loginForm.username === 'admin'){
					this.routerToGroup()
				}
			},
			routerToGroup: function(){
				this.$u.route({
					type: 'switchTab',
					url: 'pages/group/group'
				})
			}
		}
	}
</script>

<style>

</style>
