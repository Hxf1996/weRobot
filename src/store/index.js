/*
* @Author: 94078
* @Date:   2017-04-15 11:22:00
* @Last Modified by:   hxf
* @Last Modified time: 2017-09-01 16:57:32
*/

import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

import User from './modules/User';
import Robot from './modules/Robot';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        backDrop: false,
        loginModal: false,
    },
    modules: {
        User,
        Robot,
    },
    actions,
    getters,
    mutations,
});
