<template>
    <header id="header">
        <nav class="navbar navbar-expand-lg navbar-light">
            <router-link class="navbar-brand" :to="{name: 'robotManage'}">AIFOCUS&emsp;|&emsp;客户运营中心</router-link>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" @click="openLoginModal" v-if="isUnLogin">登陆</a>
                        <a class="nav-link" @click="openLogoutModal" v-else>退出</a>
                    </li>
                </ul>
            </div>
        </nav>
        <login-modal :active="loginModal" @close="closeLoginModal"
            @submit="successLogin"></login-modal>
        <message-box :active="logoutModal" :title="''"
            @close="closeLogoutModal" @submit="logout">
            <span>你确定要退出登录吗？</span>
        </message-box>
    </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import LoginModal from '@/components/LoginModal';
import MessageBox from '@/components/common/MessageBox';

export default {
    name: 'Header',
    data() {
        return {
            loginModal: false,
            logoutModal: false,
        };
    },
    created() {
    },
    methods: {
        openLoginModal() {
            this.loginModal = true;
        },
        closeLoginModal() {
            this.loginModal = false;
        },
        successLogin() {
            this.closeLoginModal();
            this.$router.push({
                name: 'robotManage',
            });
        },
        openLogoutModal() {
            this.logoutModal = true;
        },
        closeLogoutModal() {
            this.logoutModal = false;
        },
        logout() {
            this.removeUserToken();
            this.$router.push({
                name: 'index',
            });
            this.closeLogoutModal();
        },
        ...mapMutations('User', [
            'removeUserToken',
        ]),
    },
    computed: {
        ...mapState('User', [
            'userToken',
        ]),
        isUnLogin() {
            return this.userToken === '';
        },
    },
    components: {
        LoginModal,
        MessageBox,
    },
};
</script>

<style scoped>
#header {
    background-color: #fff;
    position: absolute;
    top: 0;
    width: 100%;
}
</style>