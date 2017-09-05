/*
* @Author: hxf
* @Date:   2017-09-01 10:50:31
* @Last Modified by:   hxf
* @Last Modified time: 2017-09-05 12:53:35
*/

import RobotAPI from '@/api/Robot';
import GroupAPI from '@/api/Group';

const state = {
    list: [],
    groupList: {},
};

const getters = {
};

const actions = {
    async getRobotList({ commit, dispatch, rootState }) {
        const robotList = await RobotAPI.getList({ userId: rootState.User.userToken });
        commit('setRobotList', robotList);
        dispatch('getGroupList');
    },
    getGroupList({ commit, state }) {
        const groupList = {};
        state.list.forEach(async (item) => {
            const entry = await GroupAPI.getMonitorGroupList({ robotId: item.id });
            groupList[item.id] = entry;
            commit('addGroupList', groupList);
        });
    },
};

const mutations = {
    setRobotList(state, data) {
        state.list = data;
    },
    addGroupList(state, data) {
        state.groupList = data;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
