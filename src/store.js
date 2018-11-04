import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        showLoading: false,
        text: '',
    },
    mutations: {
        UPDATE_LOADING (state, status) {
            state.showLoading = status;
        },

        UPDATE_LOADING_TEXT (state, status) {
            state.text = status || '数据加载中';
        }
    },
    actions: {}
});
