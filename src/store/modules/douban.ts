import { getAllFilms } from '../../api/douban';
// initial state
const state = () => ({
    list: []
});

// getters
const getters = {
    getTop5Films: (state: any, getters: any) => {
        return state.list.splice(5);
    }
};

// actions
const actions = {
    getAllFilmsAction({ commit, state }: { commit: any; state: any }, parentId: number) {
        getAllFilms(parentId).then((res) => {
            if (res) {
                commit('setFilmsToList', res);
            } else {
                alert('错误信息');
            }
        });
    }
};

// mutations
const mutations = {
    setFilmsToList(state: any, res: any) {
        // console.log('mutations-----', res.subjects);
        state.list = res?.subjects;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
