/*
* @Author: hxf
* @Date:   2017-09-01 11:25:04
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-19 10:08:21
*/

import HTTP from './HTTP';

const getGroupList = (data) => {
    const promise = new Promise((resolve, reject) => {
        HTTP.get('/robot/getGroupList', {
            params: data,
        })
            .then((response) => {
                if (response.data.status) {
                    resolve(response.data.entry);
                } else {
                    reject(new Error(response.data.message));
                }
            })
            .catch(() => {
                reject(new Error('网络不稳定请刷新重试！'));
            });
    });
    return promise;
};

const getMonitorGroupList = (data) => {
    const promise = new Promise((resolve, reject) => {
        HTTP.get('/robot/getMonitorGroupList', {
            params: data,
        })
            .then((response) => {
                if (response.data.status) {
                    resolve(response.data.entry);
                } else {
                    reject(new Error(response.data.message));
                }
            })
            .catch(() => {
                reject(new Error('网络不稳定请刷新重试！'));
            });
    });
    return promise;
};

const updateGroup = (data) => {
    const promise = new Promise((resolve, reject) => {
        HTTP.post('/robot/batchUpdateGroup', data)
            .then((response) => {
                if (response.data.status) {
                    resolve(response.data.message);
                } else {
                    reject(new Error(response.data.message));
                }
            })
            .catch(() => {
                reject(new Error('网络不稳定请刷新重试！'));
            });
    });
    return promise;
};

const addMass = (data) => {
    const promise = new Promise((resolve, reject) => {
        HTTP.post('robot/msgSend', data)
            .then((response) => {
                if (response.data.status) {
                    resolve(response.data.message);
                } else {
                    reject(new Error(response.data.message));
                }
            })
            .catch(() => {
                reject(new Error('网络不稳定请刷新重试！'));
            });
    });
    return promise;
};

const getUndoTask = (data) => {
    const promise = new Promise((resolve, reject) => {
        HTTP.get('robot/getUndoTask', {
            params: data,
        })
            .then((response) => {
                if (response.data.status) {
                    resolve(response.data.entry);
                } else {
                    reject(new Error(response.data.message));
                }
            })
            .catch(() => {
                reject(new Error('网络不稳定请刷新重试！'));
            });
    });
    return promise;
};

const updateTaskInfo = (data) => {
    const promise = new Promise((resolve, reject) => {
        HTTP.post('robot/updateTaskInfo', data)
            .then((response) => {
                if (response.data.status) {
                    resolve(response.data.message);
                } else {
                    reject(new Error(response.data.message));
                }
            })
            .catch(() => {
                reject(new Error('网络不稳定请刷新重试！'));
            });
    });
    return promise;
};

const delTaskInfo = (data) => {
    const promise = new Promise((resolve, reject) => {
        HTTP.get('robot/delTaskInfo', {
            params: data,
        })
            .then((response) => {
                if (response.data.status) {
                    resolve(response.data.message);
                } else {
                    reject(new Error(response.data.message));
                }
            })
            .catch(() => {
                reject(new Error('网络不稳定请刷新重试！'));
            });
    });
    return promise;
};

const getMsgRecord = (data) => {
    const promise = new Promise((resolve, reject) => {
        HTTP.get('robot/getMsgRecord', {
            params: data,
        })
            .then((response) => {
                if (response.data.status) {
                    resolve(response.data.entry);
                } else {
                    reject(new Error(response.data.message));
                }
            })
            .catch(() => {
                reject(new Error('网络不稳定请刷新重试！'));
            });
    });
    return promise;
};

export default {
    getGroupList,
    getMonitorGroupList,
    updateGroup,
    addMass,
    getUndoTask,
    updateTaskInfo,
    getMsgRecord,
    delTaskInfo,
};
