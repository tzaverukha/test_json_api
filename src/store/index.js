import Vue from 'vue';
import Vuex from 'vuex';

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
			const response = await fetch('https://raw.githubusercontent.com/FrolovArkadiy/task_for_middle/master/entities.json');
			if (response.ok) {
				const json = await response.json();
				commit('setEntitles', json.response);
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
