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
import { mapState, mapMutations } from 'vuex';

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
        };
    },
    methods: {
        async open() {
            try {
                this.timestamp = new Date().getTime();
                const { uuid, qrcode } = await RobotAPI.getLoginQrcode({
                    userId: this.userToken,
                });
                this.setUUId(uuid);
                this.qrCodeUrl = qrcode;
                if (this.refreshInterval === '' || ((this.timestamp - new Date().getTime()) >= 60000)) {
                    this.refreshInterval = setInterval(async () => {
                        await this.open();
                    }, 120000);
                }
                await this.isScan();
            } catch (err) {
                console.log(err);
            }
        },
        // 判断是否扫码
        async isScan() {
            const startTime = this.timestamp;
            try {
                await RobotAPI.isScan({
                    userId: this.userToken,
                    uuid: this.uuid,
                });
                await this.isLogin();
            } catch (err) {
                let time = 1000;
                if (err === 'timeout') {
                    time = 60000;
                }
                if (this.show && (startTime === this.timestamp)) {
                    this.time = setTimeout(async () => {
                        await this.isScan();
                    }, time);
                }
            }
        },
        async isLogin() {
            const startTime = this.timestamp;
            try {
                const { uin, id } = await RobotAPI.isLogin({
                    userId: this.userToken,
                    uuid: this.uuid,
                });
                clearInterval(this.refreshInterval);
                await this.initRobot({ uin, robotId: id });
            } catch (err) {
                let time = 1000;
                if (err === 'timeout') {
                    time = 60000;
                }
                if (this.show && (startTime === this.timestamp)) {
                    this.time = setTimeout(async () => {
                        await this.isLogin();
                    }, time);
                }
            }
        },
        async initRobot(initData) {
            try {
                this.close();
                await RobotAPI.init(initData);
                this.$emit('activate');
            } catch (err) {
                console.log(err);
            }
        },
        close() {
            clearTimeout(this.time);
            clearInterval(this.refreshInterval);
            this.closeBackDrop();
            this.time = '';
            this.refreshInterval = '';
            this.show = false;
            this.$emit('close');
        },
        ...mapMutations([
            'closeBackDrop',
            'openBackDrop',
        ]),
        ...mapMutations('User', [
            'setUUId',
        ]),
    },
    components: {
        Modal,
    },
    watch: {
        active(active) {
            if (active) {
                this.show = active;
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
