/*
* @Author: 94078
* @Date:   2017-04-15 11:22:00
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-13 00:39:00
*/

const loaded = ({ commit }, payload) => {
    setTimeout(() => {
        commit('loaded');
    }, payload);
};

export default {
    loaded,
};
