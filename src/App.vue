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
                        <li class="list-group-item" :class="{ active: /\/welcomeGreet/.test($route.path) }"
                            @click="go({ name: 'welcomeGreet' })">欢迎词&emsp;&emsp;</li>
                    </ul>
                </li>
                <li class="list-group-item" style="flex-direction: column;">
                    <h5>群操作</h5>
                    <ul class="list-group">
                        <li class="list-group-item bottom-nav" v-for="robot in robotList" :key="robot.id">
                            <ul class="list-group">
                                <li class="list-group-item"
                                    v-for="group in groupList[robot.id]" :key="group.id"
                                    :class="{ active: $route.params.id == group.id }"
                                    @click="go({ name: 'operate', params: { id: group.id, nickName: group.nickname } })">{{ group.nickname }}</li>
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
        <back-drop :active="backDrop"></back-drop>
        <loading :active="loadConfig.active" :log="{ type: loadConfig.type, text: loadConfig.text }"></loading>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

import Util from '@/libs/util';

import BackDrop from '@/components/common/BackDrop';
import Loading from '@/components/Loading';
import Header from '@/components/Header';

export default {
    name: 'app',
    data() {
        return {
            time: '',
        };
    },
    created() {
        const userToken = Util.getStorage('USER_TOKEN');
        if (userToken !== '') {
            this.setUserToken(userToken);
        }
        const userInfo = Util.getStorage('USER_INFO');
        if (userInfo !== '') {
            this.setUserInfo(userInfo);
        }
    },
    components: {
        HeaderView: Header,
        BackDrop,
        Loading,
    },
    methods: {
        async init() {
            if (this.userToken === '' && this.$route.name !== 'index') {
                this.loading({
                    text: '请先登录',
                });
                this.loaded(1000);
                this.$router.push({ name: 'index' });
            }
            if (this.robotList.length === 0 || this.$route.name === 'robotManage') {
                await this.getRobotList();
            }
            if (this.$route.name !== 'robotManage' && this.$route.name !== 'index') {
                if (this.robotList.length === 0 || this.robotList[0].status === 0) {
                    this.loading({
                        text: '请先绑定并激活机器人',
                    });
                    this.loaded(1000);
                    this.$router.push({
                        name: 'robotManage',
                    });
                }
            }
        },
        go(to) {
            if (this.time === '' || ((new Date().getTime() - this.time) >= 1000)) {
                this.time = new Date().getTime();
                this.$router.push(to);
            }
        },
        ...mapMutations([
            'loading',
        ]),
        ...mapMutations('User', [
            'setUserToken',
            'setUserInfo',
        ]),
        ...mapActions([
            'loaded',
        ]),
        ...mapActions('Robot', [
            'getRobotList',
        ]),
    },
    watch: {
        $route() {
            this.init();
        },
    },
    computed: {
        ...mapState({
            backDrop: 'backDrop',
            loadConfig: 'loading',
        }),
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

<style lang="postcss" scoped>
#app {
    background-color: rgb(231, 232, 235);
    height: 100%;
}

section, section > main, section > ul {
    height: 100%;
}

section {
    display: grid;
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
        flex-shrink: 0;
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
    & h5 {
        color: rgb(179, 179, 179);
        margin-top: 1.5rem;
        margin-bottom: .8rem;
        margin-left: 1.8rem;
        font-weight: 400;
    }

    & .list-group-item {
        display: flex;
    }

    & .top-nav {
        flex-shrink: 0;
        flex-direction: column;

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
        flex-grow: 1;
        flex-direction: column;

        & h6 {
            color: rgb(179, 179, 179);
            margin-top: 1.5rem;
            margin-bottom: .8rem;
            margin-left: 1.8rem;
            flex-shrink: 0;
        }

        & .list-group {
            flex-grow: 1;
            overflow-y: scroll;

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

<style lang="postcss">
@import './assets/animation.css';
@import './assets/common.css';

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
