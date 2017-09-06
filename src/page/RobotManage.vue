<template>
    <div id="robot-manage">
        <h4>机器人管理</h4>
        <div class="robot-list">
            <div class="card" v-for="one in robotList" :key="one.id">
                <div class="card-body">
                    <img :src="`${url}/image/qrcode/${one.headImgUrl}`" alt="头像">
                    <p class="card-text">机器人：{{ one.nickname }}</p>
                    <p class="card-text">状态：{{ one.status ? '在线' : '离线' }}</p>
                    <button type="button" class="btn btn-secondary" @click="toogleRobotStatu(one)">{{ one.status ? '手动掉线' : '重新连接' }}</button>
                </div>
            </div>
            <div class="card login-robot" @click="openLoginRobotModal" v-if="robotList.length === 0">
                <div class="card-body">
                    <span class="card-title">+&ensp;创建机器人</span>
                </div>
            </div>
        </div>
        <ol class="help">使用帮助：
            <li>如果尝试多次登录失败，请登录web微信（http://wx.qq.com），检查是否可以正常登录</li>
            <li>为保证服务稳定，建议您优使用微信小号扫描完成机器人创建</li>
            <li>若无微信小号，可使用常用微信账号扫码完成机器人创建</li>
        </ol>
        <login-robot-modal :active="loginRobotModal" :name="focusRobotName"
            @activate="getRobotList" @close="closeLoginRobotModal"></login-robot-modal>
        <logout-robot-modal :active="logoutRobotModal" :name="focusRobotName" :uin="focusRobotUin"
            @activate="getRobotList" @close="closeLogoutRobotModal"></logout-robot-modal>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import LoginRobotModal from '@/components/LoginRobotModal';
import LogoutRobotModal from '@/components/LogoutRobotModal';

import { baseURL } from '@/api/HTTP';

export default {
    name: 'RobotManage',
    data() {
        return {
            focusRobotName: '',
            focusRobotUin: '',
            loginRobotModal: false,
            logoutRobotModal: false,
            url: baseURL,
        };
    },
    methods: {
        openLoginRobotModal() {
            this.loginRobotModal = true;
        },
        closeLoginRobotModal() {
            this.loginRobotModal = false;
        },
        openLogoutRobotModal() {
            this.logoutRobotModal = true;
        },
        closeLogoutRobotModal() {
            this.logoutRobotModal = false;
        },
        toogleRobotStatu({ status, nickname, uin }) {
            this.focusRobotName = nickname;
            this.focusRobotUin = uin;
            switch (status) {
            case 0:
                this.openLoginRobotModal();
                break;
            case 1:
                this.openLogoutRobotModal();
                break;
            default:
                break;
            }
        },
        ...mapActions('Robot', [
            'getRobotList',
        ]),
    },
    watch: {
        robotList() {
            if (this.robotList.length === 0) {
                this.openLoginRobotModal();
            }
        },
    },
    components: {
        LoginRobotModal,
        LogoutRobotModal,
    },
    computed: {
        ...mapState('User', [
            'userToken',
        ]),
        ...mapState('Robot', {
            robotList: 'list',
        }),
    },
};
</script>

<style scoped>
#robot-manage {
}

h4 {
    margin-top: 0;
    padding-top: 1.4rem;
    margin-left: 2rem;
    font-weight: 400;
    color: rgb(133, 135, 135);
    flex-grow: 0;
}

.robot-list {
    flex-grow: 1;
    overflow-y: scroll;
    padding-top: 2rem;
    color: #585b60;

    & .card {
        height: 175px;
        width: 30%;
        margin: 0 auto;
        float: left;
        margin-left: 2.5%;
        margin-bottom: 1rem;
    }
}

.card-body {
    &  > img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        float: left;
        margin-right: 2rem;
    }

    & > p {
        margin-top: .6rem;
    }

    & > button {
        float: right;
    }
}

.login-robot {
    text-align: center;
    font-size: 1.6rem;
    position: relative;

    & span {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -5rem;
        margin-top: -1.6rem;
        color: #585b60;
    }
}

.help {
    color: #585b60;
    font-size: .8rem;
}
</style>
