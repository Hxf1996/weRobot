<template>
    <div id="robot-manage">
        <h4>机器人管理</h4>
        <div class="robot-list">
            <div class="card" v-for="one in robotList" :key="one.id">
                <div class="card-body">
                    <button type="button" class="close" aria-label="Close"
                        @click="openDeleteRobotModal(one)">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <img :src="one.headImgUrl" alt="头像">
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
            <li>微信机器人登录后，请尽量避使用PC客户端登录或网页端登录微信，否则会导致机器人服务不稳定</li>
        </ol>
        <login-robot-modal :active="loginRobotModal" :name="focusRobotName"
            @close="closeLoginRobotModal" @successLogin="getRobotList"></login-robot-modal>
        <message-box :active="logoutRobotModal" :title="'手动掉线'"
            @close="closeLogoutRobotModal" @submit="logoutRobot">
            <span>你确定要掉线<br/>机器人"{{ focusRobotName }}"吗？</span>
        </message-box>
        <message-box :active="deleteRobotModal" :title="''"
            @close="closeDeleteRobotModal" @submit="deleteRobot">
            <span>你确定要删除<br/>机器人"{{ focusRobotName }}"吗？</span>
        </message-box>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

import LoginRobotModal from '@/components/LoginRobotModal';
import MessageBox from '@/components/common/MessageBox';

import { baseURL } from '@/api/HTTP';
import RobotAPI from '@/api/Robot';

export default {
    name: 'RobotManage',
    data() {
        return {
            focusRobotName: '',
            focusRobotId: '',
            loginRobotModal: false,
            logoutRobotModal: false,
            deleteRobotModal: false,
            url: baseURL,
            interval: '',
        };
    },
    methods: {
        async openLoginRobotModal(uin = false) {
            // if (uin) {
            //     this.loading({
            //         text: '正在重连',
            //     });
            //     try {
            //         await RobotAPI.pushLogin({
            //             uin,
            //         });
            //         this.loading({
            //             text: '重连成功',
            //         });
            //         await this.getRobotList();
            //         this.loaded(100);
            //     } catch (err) {
            //         this.loading({
            //             text: '请重新登录',
            //         });
            //         await this.loaded(1500);
            //         this.openLoginRobotModal();
            //     }
            // } else {
                this.loginRobotModal = true;
            // }
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
        async logoutRobot() {
            this.loading({
                text: '正在断线',
            });
            try {
                await RobotAPI.logout({ robotId: this.focusRobotId });
                await this.getRobotList();
                this.loaded(100);
                this.closeLogoutRobotModal();
            } catch (err) {
                this.loading({
                    text: err,
                });
                this.loaded(1500);
            }
        },
        openDeleteRobotModal({ nickname, id }) {
            this.focusRobotName = nickname;
            this.focusRobotId = id;
            this.deleteRobotModal = true;
        },
        closeDeleteRobotModal() {
            this.deleteRobotModal = false;
        },
        async deleteRobot() {
            this.loading({
                text: '正在删除',
            });
            try {
                await RobotAPI.delRobot({ robotId: this.focusRobotId });
                await this.getRobotList();
                this.loaded(100);
                this.focusRobotName = '';
                this.focusRobotId = '';
                this.closeDeleteRobotModal();
            } catch (err) {
                this.loading({
                    text: err,
                });
                this.loaded(1500);
            }
        },
        toogleRobotStatu({
            status, nickname, id, uin,
        }) {
            this.focusRobotName = nickname;
            this.focusRobotId = id;
            switch (status) {
            case 0:
                this.openLoginRobotModal(uin);
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
        ...mapActions([
            'loaded',
        ]),
        ...mapMutations([
            'loading',
        ]),
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            vm.interval = setInterval(() => {
                vm.getRobotList();
            }, 60000);
        });
    },
    beforeRouteLeave(to, from, next) {
        clearInterval(this.interval);
        next();
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
        MessageBox,
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
