/*
* @Author: 94078
* @Date:   2017-04-15 11:22:00
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-18 14:01:24
*/

import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

import User from './modules/User';
import Robot from './modules/Robot';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        backDrop: false,
        loading: {
            active: false,
            type: 'loading',
            text: '',
        },
    },
    modules: {
        User,
        Robot,
    },
    actions,
    getters,
    mutations,
});
