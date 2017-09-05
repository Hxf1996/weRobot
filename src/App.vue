<template>
    <div id="app">
        <header-view></header-view>
        <section>
            <ul class="list-group">
                <li class="list-group-item">
                    <h5>AI机器人</h5>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <router-link :to="{ name: 'robotManage' }">机器人管理</router-link>
                        </li>
                        <li class="list-group-item">
                            <router-link :to="{ name: 'groupManage' }">群管理</router-link>
                        </li>
                        <li class="list-group-item">
                            <router-link :to="{ name: 'massTexting' }">消息群发</router-link>
                        </li>
                    </ul>
                </li>
                <li class="list-group-item">
                    <h5>群操作</h5>
                    <ul class="list-group">
                        <li class="list-group-item" v-for="robot in robotList" :key="robot.id">
                            <h6>{{ robot.nickname }}</h6>
                            <ul class="list-group">
                                <li class="list-group-item" v-for="group in groupList[robot.id]" :key="group.id">{{ group.nickname }}</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <main>
                <router-view></router-view>
            </main>
        </section>
        <login-modal></login-modal>
        <back-drop ref="backDrop" :active="backDrop"></back-drop>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

import Util from '@/libs/util';

import BackDrop from '@/components/common/BackDrop';
import Header from '@/components/Header';
import LoginModal from '@/components/LoginModal';

export default {
    name: 'app',
    async created() {
        const userToken = Util.getStorage('USER_TOKEN');
        if (Object.getOwnPropertyNames(userToken).length !== 0) {
            this.setUserToken(userToken);
            await this.getRobotList();
        }
    },
    components: {
        HeaderView: Header,
        BackDrop,
        LoginModal,
    },
    methods: {
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
    },
    computed: {
        ...mapState([
            'backDrop',
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
        width: 300px;
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
</style>

<style>
@import './assets/common';

.list-group-item {
    &:first-child {
        border-radius: 0;
    }

    &:last-child {
        border-radius: 0;
    }
}
</style>
