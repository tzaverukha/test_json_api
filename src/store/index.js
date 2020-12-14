import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		entitles: [],
	},
	mutations: {
		setEntitles(state, data) {
			state.entitles = data;
		},
		changeEntitleLike(state, id) {
			const entitle = state.entitles.find(entitle => entitle.id === id);
			entitle.like? Vue.delete(entitle, 'like') : Vue.set(entitle, 'like', true);
		},
	},
	actions: {
		async init({commit}) {
			const response = await Axios.get('https://raw.githubusercontent.com/FrolovArkadiy/task_for_middle/master/entities.json');
			if (response.data) {
				commit('setEntitles', response.data.response);
			} else {
				alert("Ошибка HTTP: " + response.status);
			}
		},
		changeEntitleLike({commit}, id) {
			commit('changeEntitleLike', id);
		}
	},
	getters: {
		entitles: state => state.entitles,
	},
});
