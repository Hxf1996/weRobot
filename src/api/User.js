/*
* @Author: hxf
* @Date:   2017-08-31 12:33:30
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-13 08:48:03
*/

import Axios from 'axios';
import { baseURL } from './HTTP';

const login = (data) => {
    const promise = new Promise((resolve, reject) => {
        Axios.post(`${baseURL}/member/login.do`, {
            ...data,
            role: 'crm',
        }, {
            withCredentials: true,
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

export default {
    login,
};
