/*
* @Author: 94078
* @Date:   2017-04-15 11:22:00
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-18 15:43:39
*/

import userAPI from '@/api/User';

import Util from '@/libs/util';

const state = {
    userToken: '',
    userInfo: {},
    uuid: '',
};

const getters = {
};

const actions = {
    async login({ commit }, data) {
        const { entry, message } = await userAPI.login(data);
        commit('setUserToken', entry.userInfo.userId);
        commit('setUserInfo', entry.userInfo);
        return message;
    },
};

const mutations = {
    setUserToken(state, userToken) {
        state.userToken = userToken;
        Util.setStorage('USER_TOKEN', userToken);
    },
    removeUserToken(state) {
        state.userToken = '';
        Util.removeStorage('USER_TOKEN');
    },
    setUserInfo(state, info) {
        state.userInfo = info;
        Util.setStorage('USER_INFO', info);
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
