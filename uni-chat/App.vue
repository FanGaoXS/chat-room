<script>
	import settings from './settings.js'
	export default {
		onLaunch: function() {
			const welcome = 
`${settings.appName} 启动
作者：${settings.appAuthor}
版本：${settings.appVersion}
时间：${new Date().toLocaleString()}`
			console.log(welcome);
		},
		onShow: function() {
			console.log(settings.appName,'进入前台');
		},
		onHide: function() {
			console.log(settings.appName,'进入后台')
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>
