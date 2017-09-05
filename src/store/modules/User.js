/*
* @Author: 94078
* @Date:   2017-04-15 11:22:00
* @Last Modified by:   hxf
* @Last Modified time: 2017-09-04 19:43:06
*/

import userAPI from '@/api/User';

import Util from '@/libs/util';

const state = {
    userToken: '',
    uuid: '',
};

const getters = {
};

const actions = {
    async login({ commit }, data) {
        const entry = await userAPI.login(data);
        const userToken = entry.userInfo.userId;
        commit('setUserToken', userToken);
        Util.setStorage('USER_TOKEN', userToken);
    },
};

const mutations = {
    setUserToken(state, userToken) {
        state.userToken = userToken;
    },
    setUUId(state, uuid) {
        state.uuid = uuid;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
