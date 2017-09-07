/*
* @Author: huxiaofeng
* @Date:   2017-09-07 16:30:46
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-07 16:31:32
*/

import HTTP from './HTTP';

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
    delRobot,
};
