/*
* @Author: 94078
* @Date:   2017-04-30 15:20:09
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-25 17:25:51
*/

import Axios from 'axios';

const baseURL = process.env.API_ROOT;
// 临时修改
// const baseURL = 'http://172.172.7.74:8080';

const HTTP = Axios.create({
    baseURL: `${baseURL}/procurement`,
    transformResponse: [
        data => JSON.parse(data),
    ],
    withCredentials: true,
});

export {
    baseURL,
};

export default HTTP;
