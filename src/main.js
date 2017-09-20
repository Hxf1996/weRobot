/*
* @Author: hxf
* @Date:   2017-09-01 11:25:04
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-19 17:56:09
*/

import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

// 生产模式时关闭
if (process.env.NODE_ENV === 'development') {
    Vue.config.productionTip = true;
}

Vue.directive('validate', {
    bind(el, binding, vnode) {
        el.addEventListener('blur', () => {
            const data = binding.value;
            console.log(data);
            try {
                if (!data.status) {
                    throw new Error(data.message);
                }
                const result = (data.validate).test(vnode.elm.value);
                if (!result) {
                    throw new Error('数据不合法');
                }
                console.log('校验成功');
            } catch (err) {
                console.log(`错误:${err.message}`);
            }
        });
    },
});

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
});
