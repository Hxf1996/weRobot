/*
* @Author: 94078
* @Date:   2017-04-30 15:20:09
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-05 15:30:45
*/

import Axios from 'axios';

const baseURL = 'https://daily.elephtribe.com/procurement';

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
