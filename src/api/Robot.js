/*
* @Author: hxf
* @Date:   2017-08-31 15:08:11
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-07 16:29:24
*/

import HTTP from './HTTP';

const getLoginQrcode = (data) => {
    const promise = new Promise((resolve, reject) => {
        HTTP.get('/robot/getLoginQrcode', {
            params: data,
        })
            .then((response) => {
                if (response.data.status) {
                    resolve(response.data.entry);
                } else {
                    reject(response.data.message);
                }
            })
            .catch(() => {
                reject('网络不稳定请刷新重试！');
            });
    });
    return promise;
};

const isScan = (data) => {
    const promise = new Promise((resolve, reject) => {
        HTTP.get('/robot/isScan', {
            params: data,
        })
            .then((response) => {
                if (response.data.status) {
                    resolve(response.data.message);
                } else {
                    reject(response.data.status);
                }
            })
            .catch((err) => {
                if (err.response.status) {
                    reject('timeout');
                }
                reject('网络不稳定请刷新重试！');
            });
    });
    return promise;
};

const isLogin = (data) => {
    const promise = new Promise((resolve, reject) => {
        HTTP.get('/robot/isLogin', {
            params: data,
        })
            .then((response) => {
                if (response.data.status) {
                    resolve(response.data.entry);
                } else {
                    reject(response.data.status);
                }
            })
            .catch((err) => {
                if (err.response.status) {
                    reject('timeout');
                }
                reject('网络不稳定请刷新重试！');
            });
    });
    return promise;
};

const init = (data) => {
    const promise = new Promise((resolve, reject) => {
        HTTP.get('/robot/robotInit', {
            params: data,
        })
            .then((response) => {
                if (response.data.status) {
                    resolve(response.data.message);
                } else {
                    reject(response.data.message);
                }
            })
            .catch(() => {
                reject('网络不稳定请刷新重试！');
            });
    });
    return promise;
};

const getList = (data) => {
    const promise = new Promise((resolve, reject) => {
        HTTP.get('/robot/getRobotList', {
            params: data,
        })
            .then((response) => {
                if (response.data.status) {
                    resolve(response.data.entry);
                } else {
                    reject(response.data.message);
                }
            })
            .catch(() => {
                reject('网络不稳定请刷新重试！');
            });
    });
    return promise;
};

const logout = (data) => {
    const promise = new Promise((resolve, reject) => {
        HTTP.get('/robot/logout', {
            params: data,
        })
            .then((response) => {
                if (response.data.status) {
                    resolve(response.data.message);
                } else {
                    reject(response.data.message);
                }
            })
            .catch(() => {
                reject('网络不稳定请刷新重试！');
            });
    });
    return promise;
};

const delRobot = (data) => {
    const promise = new Promise((resolve, reject) => {
        HTTP.get('/robot/delRobot', {
            params: data,
        })
            .then((response) => {
                if (response.data.status) {
                    resolve(response.data.message);
                } else {
                    reject(response.data.message);
                }
            })
            .catch(() => {
                reject('网络不稳定请刷新重试！');
            });
    });
    return promise;
};

export default {
    getLoginQrcode,
    isScan,
    isLogin,
    init,
    getList,
    logout,
    delRobot,
};
