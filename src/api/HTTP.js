/*
* @Author: 94078
* @Date:   2017-04-30 15:20:09
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-06 11:28:19
*/

import Axios from 'axios';

const baseURL = 'http://172.172.7.52:8080/procurement';

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
