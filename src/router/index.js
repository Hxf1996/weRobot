/*
* @Author: 94078
* @Date:   2017-03-18 22:05:35
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-18 12:07:36
*/

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('@/page/index'),
        },
        {
            path: '/robotManage',
            name: 'robotManage',
            component: () => import('@/page/RobotManage'),
        },
        {
            path: '/groupManage',
            name: 'groupManage',
            component: () => import('@/page/GroupManage'),
            props: route => ({
                groupId: Number(route.params.id),
            }),
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
        {
            path: '/operate/:id',
            name: 'operate',
            component: () => import('@/page/Operate'),
            children: [
                {
                    path: 'redPacket',
                    name: 'redPacket',
                    component: () => import('@/page/Operate/RedPacket'),
                },
            ],
        },
        {
            path: '/welcomeGreet',
            name: 'welcomeGreet',
            component: () => import('@/page/WelcomeGreet'),
        },
    ],
});

export default router;
