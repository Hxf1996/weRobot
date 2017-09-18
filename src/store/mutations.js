/*
* @Author: 94078
* @Date:   2017-04-15 11:22:00
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-18 14:02:14
*/

const openBackDrop = (state) => {
    state.backDrop = true;
};

const closeBackDrop = (state) => {
    state.backDrop = false;
};

const loading = (state, payload) => {
    state.loading = {
        ...state.loading,
        ...payload,
        active: true,
    };
};

const loaded = (state) => {
    state.loading = {
        ...state.loading,
        active: false,
    };
};

export default {
    openBackDrop,
    closeBackDrop,
    loading,
    loaded,
};
