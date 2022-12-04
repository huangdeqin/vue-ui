import {createStore} from "vuex";

export const store = createStore({
    state: {
        curIdx: 0
    },
    getters: {},
    mutations: {
        changeCityInfo (state, index) {
            state.curIdx = index;
        }
    },
    actions: {},
    modules: {}

});