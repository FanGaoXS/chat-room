import Vue from 'vue'

/* 引入vuex */
import Vuex from 'vuex'
Vue.use(Vuex)

const getDefaultState = () => {
	return {
		id: 1,
		username: '测试人员'
	}
}

/* state */
const state = getDefaultState()

/* mutations同步方法 */

/* actions异步方法 */

/* getters */
const getters = {
	id: state => state.id,
	username: state => state.username
}

const store = new Vuex.Store({
	state,
	getters
})

export default store
