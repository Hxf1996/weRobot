/*
* @Author: 94078
* @Date:   2017-04-15 11:22:00
* @Last Modified by:   hxf
* @Last Modified time: 2017-09-01 16:57:40
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
