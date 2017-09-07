/*
* @Author: 94078
* @Date:   2017-04-15 11:22:00
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-07 17:26:01
*/

export const openBackDrop = (state) => {
    state.backDrop = true;
};

export const closeBackDrop = (state) => {
    state.backDrop = false;
};

export const openLoginModal = (state) => {
    state.loginModal = true;
};

export const closeLoginModal = (state) => {
    state.loginModal = false;
};

export const loading = (state, payload) => {
    state.loading = {
        ...state.loading,
        ...payload,
        active: true,
    };
};

export const loaded = (state) => {
    state.loading = {
        ...state.loading,
        active: false,
    };
};
