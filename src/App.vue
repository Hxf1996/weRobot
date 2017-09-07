<template>
    <div id="app">
        <header-view></header-view>
        <section>
            <ul class="list-group left-nav" v-if="$route.name !== 'index'">
                <li class="list-group-item top-nav">
                    <h5>AI机器人</h5>
                    <ul class="list-group">
                        <li class="list-group-item" :class="{ active: $route.name === 'robotManage' }"
                            @click="go({ name: 'robotManage' })">机器人管理</li>
                        <li class="list-group-item" :class="{ active: /\/groupManage/.test($route.path) }"
                            @click="go({ name: 'groupManage' })">群管理&emsp;&emsp;</li>
                        <li class="list-group-item" :class="{ active: /\/massTexting/.test($route.path) }"
                            @click="go({ name: 'massTexting' })">消息群发&emsp;</li>
                    </ul>
                </li>
                <li class="list-group-item">
                    <h5>群操作</h5>
                    <ul class="list-group">
                        <li class="list-group-item bottom-nav" v-for="robot in robotList" :key="robot.id">
                            <ul class="list-group">
                                <li class="list-group-item"
                                    v-for="group in groupList[robot.id]" :key="group.id"
                                    :class="{ active: $route.params.id === group.id }"
                                    @click="go({ name: 'operate', params: { id: group.id } })">{{ group.nickname }}</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <main>
                <transition name="transparent">
                    <router-view></router-view>
                </transition>
            </main>
        </section>
        <login-modal></login-modal>
        <back-drop :active="backDrop"></back-drop>
        <loading :active="loading.active" :log="{ type: loading.type, text: loading.text }"></loading>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

import Util from '@/libs/util';

import BackDrop from '@/components/common/BackDrop';
import Loading from '@/components/Loading';
import Header from '@/components/Header';
import LoginModal from '@/components/LoginModal';

export default {
    name: 'app',
    async created() {
        const userToken = Util.getStorage('USER_TOKEN');
        if (Object.getOwnPropertyNames(userToken).length !== 0) {
            this.setUserToken(userToken);
        }
    },
    components: {
        HeaderView: Header,
        BackDrop,
        Loading,
        LoginModal,
    },
    methods: {
        go(to) {
            this.$router.push(to);
        },
        ...mapActions('Robot', [
            'getRobotList',
        ]),
        ...mapMutations('User', [
            'setUserToken',
        ]),
    },
    watch: {
        async userToken() {
            await this.getRobotList();
        },
        $route() {
            if (this.$route.name === 'robotManage') {
                this.getRobotList();
            }
        },
    },
    computed: {
        ...mapState([
            'backDrop',
            'loading',
        ]),
        ...mapState('User', [
            'userToken',
        ]),
        ...mapState('Robot', {
            robotList: 'list',
            groupList: 'groupList',
        }),
    },
};
</script>

<style scoped>
#app {
    background-color: rgb(231, 232, 235);
    height: 100%;
}

section, section > main, section > ul {
    height: 100%;
}

section {
    display: flex;
    padding-top: 66px;
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 10px;

    & > ul {
        width: 250px;
        margin-right: 20px;
        background-color: #fff;
        border: 1.8px solid rgb(224, 224, 224);
    }

    & > main {
        flex-grow: 1;
        background-color: #fff;
        border: 1.8px solid rgb(224, 224, 224);

        & div {
            height: 100%;
            display: flex;
            flex-direction: column;
        }
    }
}

.left-nav {
    overflow-y: scroll;

    & h5 {
        color: rgb(179, 179, 179);
        margin-top: 1.5rem;
        margin-bottom: .8rem;
        margin-left: 1.8rem;
        font-weight: 400;
    }

    & .top-nav {

        & li {
            border: 0;
            padding-top: .8rem;
            padding-bottom: .8rem;
            color: rgb(88, 91, 96);
            width: 100%;
            display: block;
            text-align: center;
            font-size: 1rem;
            &:hover {
                cursor: pointer;
            }
        }

        & li.active {
            border-top: 1px solid rgb(225, 225, 225);
            border-bottom: 1px solid rgb(225, 225, 225);
            background-color: rgb(249, 249, 249);
        }
    }

    & .bottom-nav {

        & h6 {
            color: rgb(179, 179, 179);
            margin-top: 1.5rem;
            margin-bottom: .8rem;
            margin-left: 1.8rem;
        }

        & .list-group {
            & li {
                border: 0;
                padding-top: .8rem;
                padding-bottom: .8rem;
                color: rgb(88, 91, 96);
                width: 100%;
                display: block;
                text-align: center;
                font-size: 1rem;
                &:hover {
                    cursor: pointer;
                }
            }

            & li.active {
                border-top: 1px solid rgb(225, 225, 225);
                border-bottom: 1px solid rgb(225, 225, 225);
                background-color: rgb(249, 249, 249);
            }
        }
    }
}
</style>

<style>
@import './assets/animation';
@import './assets/common';

.list-group-item {
    padding: 0;
    border: 0;

    &:first-child {
        border-radius: 0;
    }

    &:last-child {
        border-radius: 0;
    }
}

.btn {
    width: 110px;
    border-radius: 0;

    &.btn-submit {
        background-color: rgb(102, 102, 102);
        color: #fff;
    }

    &.btn-cancel {
        background-color: rgb(233, 233, 233);
        box-shadow: 0 0 0 1px rgb(222, 222, 222) inset;
        color: rgb(121, 121, 121);
    }
}
</style>
