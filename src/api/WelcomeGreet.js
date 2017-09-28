/*
* @Author: hxf
* @Date:   2017-08-31 12:33:30
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-19 10:12:00
*/

import HTTP from './HTTP';

const getWelcomeGreet = (data) => {
    const promise = new Promise((resolve, reject) => {
        HTTP.get('/robot/getWelcomeGreet', {
            params: data,
        })
            .then((response) => {
                if (response.data.status) {
                    resolve(response.data.entry);
                } else {
                    reject(new Error(response.data.message));
                }
            })
            .catch(() => {
                reject(new Error('网络不稳定请刷新重试！'));
            });
    });
    return promise;
};

const updateWelcomeGreet = (robotId, data) => {
    const promise = new Promise((resolve, reject) => {
        HTTP.post(`/robot/updateWelcomeGreet?robotId=${robotId}`, data)
            .then((response) => {
                if (response.data.status) {
                    resolve(response.data.entry);
                } else {
                    reject(new Error(response.data.message));
                }
            })
            .catch(() => {
                reject(new Error('网络不稳定请刷新重试！'));
            });
    });
    return promise;
};

export default {
    getWelcomeGreet,
    updateWelcomeGreet,
};
