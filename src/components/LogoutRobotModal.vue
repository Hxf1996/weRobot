<template>
    <modal :active="active" @toogle="close">
        <div class="body">
            你确定要掉线<br/>机器人"{{ name }}"吗？
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" @click="submit">确定掉线</button>
                <button type="button" class="btn" @click="close">取消</button>
            </div>
        </div>
    </modal>
</template>

<script>
import Modal from '@/components/common/Modal';

import { mapMutations } from 'vuex';

import RobotAPI from '@/api/Robot';

export default {
    name: 'LogoutRobotModal',
    props: ['name', 'active', 'uin'],
    data() {
        return {
            show: false,
        };
    },
    methods: {
        async submit() {
            try {
                const message = await RobotAPI.logout({ uin: this.uin });
                console.log(message);
                this.$emit('activate');
                this.close();
            } catch (err) {
                console.log(err);
            }
        },
        close() {
            this.closeBackDrop();
            this.show = false;
            this.$emit('close');
        },
        ...mapMutations([
            'closeBackDrop',
            'openBackDrop',
        ]),
    },
    watch: {
        active(active) {
            if (active) {
                this.show = active;
                this.openBackDrop();
            }
        },
    },
    components: {
        Modal,
    },
};
</script>

<style scoped>
</style>
