/*
* @Author: hxf
* @Date:   2017-09-01 11:25:04
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-13 00:55:04
*/

import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

// 生产模式时关闭
if (process.env.NODE_ENV === 'development') {
    Vue.config.productionTip = true;
}

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
});
