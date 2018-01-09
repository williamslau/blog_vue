import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);



const types = {
	PARENT_SHOW_FN : 'PARENT_SHOW_FN',

	PARENT2_SHOW_FN : 'PARENT2_SHOW_FN',

	PARENT3_SHOW_FN : 'PARENT3_SHOW_FN',
	//loading 显示隐藏
	LOADING_SHOW_FN : 'LOADING_SHOW_FN',
	LOADING_HIDDEN_FN : 'LOADING_HIDDEN_FN',
};

const state = {
	parentShow:true,
	parent2Show:true,
	parent3Show:true,
	loadingShow:false,
};

const actions = {
	parentShowFn: ({
		commit
	}) => {
		commit(types.PARENT_SHOW_FN);
	},

	parent2ShowFn: ({
		commit
	}) => {
		commit(types.PARENT2_SHOW_FN);
	},

	parent3ShowFn: ({
		commit
	}) => {
		commit(types.PARENT3_SHOW_FN);
	},

	loadingShowFn: ({
		commit
	}) => {
		commit(types.LOADING_SHOW_FN);
	},

	loadingHiddenFn: ({
		commit
	}) => {
		commit(types.LOADING_HIDDEN_FN);
	},
}

const mutations = {
	[types.PARENT_SHOW_FN](state) {
		state.parentShow=true;
	},

	[types.PARENT2_SHOW_FN](state) {
		state.parentShow=false;
		state.parent2Show=true;
	},

	[types.PARENT3_SHOW_FN](state) {
		state.parentShow=false;
		state.parent2Show=false;
		state.parent3Show=true;
	},

	[types.LOADING_SHOW_FN](state) {
		state.loadingShow=true;
	},
	[types.LOADING_HIDDEN_FN](state) {
		state.loadingShow=false;
	},
};


const getters = {
	parentShowFn: (state) => {
		return state.parentShow;
	},

	parent2ShowFn: (state) => {
		return state.parent2Show;
	},

	parent3ShowFn: (state) => {
		return state.parent3Show;
	},

	loadingShowFn: (state) => {
		return state.loadingShow;
	},
	loadingHiddenFn: (state) => {
		return state.loadingShow;
	},
}


export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
});
