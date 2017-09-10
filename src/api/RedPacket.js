/*
* @Author: huxiaofeng
* @Date:   2017-09-07 16:30:46
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-10 10:50:28
*/

import HTTP from './HTTP';

const redEnvelopesConfig = (data) => {
    const promise = new Promise((resolve, reject) => {
        HTTP.post('/red/redEnvelopesConfig', data)
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

const getEnvelopesConfig = (data) => {
    const promise = new Promise((resolve, reject) => {
        HTTP.get('/red/getEnvelopesConfig', {
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

const envelopesConfigInit = () => {
    const promise = new Promise((resolve, reject) => {
        HTTP.get('/red/envelopesConfigInit')
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

export default {
    redEnvelopesConfig,
    getEnvelopesConfig,
    envelopesConfigInit,
};
