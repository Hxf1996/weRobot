/*
* @Author: 94078
* @Date:   2017-04-30 15:20:09
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-12 16:56:26
*/

import Axios from 'axios';

const baseURL = process.env.API_ROOT;
// 临时修改
// const baseURL = 'http://172.172.7.74:8080/procurement';

const HTTP = Axios.create({
    baseURL,
    transformResponse: [
        data => JSON.parse(data),
    ],
    withCredentials: true,
});

export {
    baseURL,
};

export default HTTP;
