<template>
    <header id="header" class="sticky-top">
        <nav class="navbar navbar-expand-lg navbar-light">
            <router-link class="navbar-brand" :to="{name: 'robotManage'}">AIFOCUS&emsp;|&emsp;客户运营中心</router-link>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto" v-if="isUnLogin">
                    <li class="nav-item">
                        <a class="nav-link" @click="openLoginModal">登陆</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
    name: 'Header',
    data() {
        return {
            active: false,
        };
    },
    created() {
    },
    methods: {
        openLoginModal() {
            this.openBackDrop();
            this.$store.commit('openLoginModal');
        },
        ...mapMutations([
            'openBackDrop',
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
};
</script>

<style scoped>
header {
    background-color: #fff;
    position: absolute;
    top: 0;
    width: 100%;
}
</style>