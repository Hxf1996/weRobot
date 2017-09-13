/*
* @Author: hxf
* @Date:   2017-09-04 11:29:50
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-13 08:47:20
*/

import Axios from 'axios';
import { baseURL } from './HTTP';

const uploadImg = (data) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
    };
    return Axios.post(`${baseURL}/message/oss/imgUpload`, data, config);
};

export default {
    uploadImg,
};
