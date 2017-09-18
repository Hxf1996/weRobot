/*
* @Author: 94078
* @Date:   2017-07-21 16:44:53
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-18 15:41:56
*/

const getStorage = (key) => {
    const value = JSON.parse(sessionStorage.getItem(key)) || '';
    return value;
};

const removeStorage = (key) => {
    sessionStorage.removeItem(key);
};

const setStorage = (key, data) => {
    sessionStorage.setItem(key, JSON.stringify(data));
};

const formatDate = (timestamp, format) => {
    if (!timestamp) {
        return '';
    }
    const time = new Date(timestamp);
    const addZero = str => str.toString().padStart(2, '0');
    return format.replace(/YYYY|MM|dd|HH|mm|ss/g, (a) => {
        switch (a) {
        case 'YYYY':
            return addZero(time.getFullYear());
        case 'MM':
            return addZero(time.getMonth() + 1);
        case 'dd':
            return addZero(time.getDate());
        case 'HH':
            return addZero(time.getHours());
        case 'mm':
            return addZero(time.getMinutes());
        default:
            return addZero(time.getSeconds());
        }
    });
};

const addClass = (el, cls) => {
    const objClass = el.className;
    const blank = (objClass !== '') ? ' ' : '';
    const added = objClass + blank + cls;
    el.className = added;
};

const removeClass = (el, cls) => {
    let objClass = ` ${el.className} `;
    objClass = objClass.replace(/(\s+)/gi, ' ');
    let removed = objClass.replace(` ${cls} `, ' ');
    removed = removed.replace(/(^\s+)|(\s+$)/g, '');
    el.className = removed;
};

const hasClass = (el, cls) => !!el.className.match(new RegExp(`(\\s|^)${cls}(\\s|$)`));

export default {
    getStorage,
    removeStorage,
    setStorage,
    formatDate,
    addClass,
    removeClass,
    hasClass,
};
