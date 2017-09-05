/*
* @Author: 94078
* @Date:   2017-03-18 22:05:35
* @Last Modified by:   hxf
* @Last Modified time: 2017-09-02 11:35:13
*/

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'robotManage',
            component: () => import('@/page/RobotManage'),
        },
        {
            path: '/groupManage',
            name: 'groupManage',
            component: () => import('@/page/GroupManage'),
            children: [
                {
                    path: ':id',
                    name: 'groupList',
                    component: () => import('@/page/GroupList'),
                },
            ],
        },
        {
            path: '/massTexting',
            name: 'massTexting',
            component: () => import('@/page/MassTexting'),
            redirect: {
                name: 'addMass',
            },
            children: [
                {
                    path: 'addMass',
                    name: 'addMass',
                    component: () => import('@/page/MassTexting/addMass'),
                },
                {
                    path: 'timedMass',
                    name: 'timedMass',
                    component: () => import('@/page/MassTexting/timedMass'),
                },
                {
                    path: 'massRecord',
                    name: 'massRecord',
                    component: () => import('@/page/MassTexting/massRecord'),
                },
            ],
        },
    ],
});
