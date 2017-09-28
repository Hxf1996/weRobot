<template>
    <modal :active="show" @toogle="close">
        <div class="modal-header">
            <h5>{{ name ? '机器人连接' : '机器人创建' }}</h5>
            <button type="button" class="close" aria-label="Close"
                @click="close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="body">
            <div class="qrcode">
                <img :src="qrCodeUrl" alt="登陆二维码">
            </div>
            <span>{{ name ? `用机器人${name}的微信账号扫码重新登录` : '微信扫码并确认登陆，完成机器人创建' }}</span>
        </div>
    </modal>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

import Modal from '@/components/common/Modal';
import RobotAPI from '@/api/Robot';

export default {
    name: 'LoginRobotModal',
    props: ['name', 'active'],
    data() {
        return {
            qrCodeUrl: '',
            refreshInterval: '',
            time: '',
            show: false,
            timestamp: '',
            stopAllTime: '',
        };
    },
    methods: {
        async open() {
            this.show = this.active;
            try {
                // 记录开始时间
                this.timestamp = new Date().getTime();
                const { uuid, qrcode } = await RobotAPI.getLoginQrcode({
                    userId: this.userToken,
                });
                this.setUUId(uuid);
                this.qrCodeUrl = qrcode;
                await this.isScan();
            } catch (e) {
                this.loading({
                    text: e.message,
                });
                this.loaded(1500);
            }
        },
        // 判断是否扫码
        async isScan() {
            if (new Date().getTime() - this.timestamp > 300000) {
                this.loading({
                    text: '超时，请刷新',
                });
                this.loaded(1500);
                return false;
            }
            const startTime = this.timestamp;
            try {
                await RobotAPI.isScan({
                    userId: this.userToken,
                    uuid: this.uuid,
                });
                await this.isLogin();
            } catch (e) {
                if (e.message === '等待扫码') {
                    if (this.show && (startTime === this.timestamp)) {
                        this.time = setTimeout(async () => {
                            await this.isScan();
                        }, 1000);
                    }
                } else {
                    this.init();
                    this.loading({
                        text: e.message,
                    });
                    this.loaded(1500);
                }
            }
            return true;
        },
        async isLogin() {
            if (new Date().getTime() - this.timestamp > 300000) {
                this.loading({
                    text: '超时，请刷新',
                });
                this.loaded(1500);
                return false;
            }
            const startTime = this.timestamp;
            try {
                const { uin, id } = await RobotAPI.isLogin({
                    userId: this.userToken,
                    uuid: this.uuid,
                });
                clearInterval(this.refreshInterval);
                await this.initRobot({ uin, robotId: id });
            } catch (e) {
                if (e.message === '等待确认') {
                    if (this.show && (startTime === this.timestamp)) {
                        this.time = setTimeout(async () => {
                            await this.isLogin();
                        }, 1000);
                    }
                } else {
                    this.init();
                    this.loading({
                        text: e.message,
                    });
                    this.loaded(1500);
                }
            }
            return true;
        },
        async initRobot(initData) {
            try {
                this.close();
                await RobotAPI.init(initData);
                this.$emit('successLogin');
            } catch (e) {
                this.loading({
                    text: e.message,
                });
                this.loaded(1500);
            }
        },
        close() {
            this.init();
            this.show = false;
            this.closeBackDrop();
            this.$emit('close');
        },
        init() {
            clearTimeout(this.time);
            clearInterval(this.refreshInterval);
            this.time = '';
            this.refreshInterval = '';
        },
        ...mapMutations([
            'closeBackDrop',
            'openBackDrop',
            'loading',
        ]),
        ...mapMutations('User', [
            'setUUId',
        ]),
        ...mapActions([
            'loaded',
        ]),
    },
    components: {
        Modal,
    },
    watch: {
        active(active) {
            if (active) {
                this.openBackDrop();
                this.open();
            }
        },
    },
    computed: {
        ...mapState('User', [
            'userToken',
            'uuid',
        ]),
    },
};
</script>

<style scoped>
.qrcode {
    width: 40%;
    margin: 10px auto;
    border: 1px solid rgb(231, 232, 235);

    & img {
        width: 100%;
        height: auto;
    }
}

.body {
    padding-top: 2rem;
    padding-bottom: 4rem;

    & > span {
        width: 100%;
        text-align: center;
        display: block;
    }
}
</style>
