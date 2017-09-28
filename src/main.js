/*
* @Author: hxf
* @Date:   2017-09-01 11:25:04
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-25 16:57:10
*/
import Util from '@/libs/util';

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
        const vm = vnode.context;
        const validate = binding.value;
        const dataKey = Object.keys(binding.modifiers)[0];
        el.addEventListener('change', (e) => {
            try {
                const changeElName = e.srcElement.name;
                if (validate[changeElName]) {
                    validate[changeElName](vm[dataKey]);
                    Util.removeClass(e.srcElement, 'is-invalid');
                }
            } catch (err) {
                Util.addClass(e.srcElement, 'is-invalid');
            }
        });
        el.getElementsByTagName('button')[0].addEventListener('click', (e) => {
            try {
                Object.keys(vm[dataKey]).forEach((item) => {
                    if (validate[item]) {
                        validate[item](vm[dataKey]);
                    }
                });
            } catch (err) {
                vm.loading({
                    text: '请检查参数',
                });
                vm.loaded(1000);
                e.preventDefault();
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
