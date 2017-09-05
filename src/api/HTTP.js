/*
* @Author: 94078
* @Date:   2017-04-30 15:20:09
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-05 15:53:10
*/

import Axios from 'axios';

const baseURL = 'http://daily.elephtribe.com/procurement';

const HTTP = Axios.create({
    baseURL,
    transformResponse: [
        data => JSON.parse(data),
    ],
});

export {
    baseURL,
};

export default HTTP;
