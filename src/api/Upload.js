/*
* @Author: hxf
* @Date:   2017-09-04 11:29:50
* @Last Modified by:   hxf
* @Last Modified time: 2017-09-04 19:33:18
*/

import Axios from 'axios';

const uploadImg = (data) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
    };
    return Axios.post('http://daily.elephtribe.com/message/oss/imgUpload', data, config);
};

export default {
    uploadImg,
};
