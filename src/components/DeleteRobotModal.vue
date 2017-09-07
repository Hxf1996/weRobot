<template>
    <modal :active="active" @toogle="close">
        <div class="modal-header">
            <h6></h6>
            <button type="button" class="close" aria-label="Close" @click="close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="body">
            <span>你确定要删除<br/>机器人"{{ name }}"吗？</span>
            <div class="modal-footer">
                <button type="button" class="btn btn-submit" @click="submit">确定删除</button>
                <button type="button" class="btn btn-cancel" @click="close">取消</button>
            </div>
        </div>
    </modal>
</template>

<script>
import Modal from '@/components/common/Modal';

import { mapMutations, mapActions } from 'vuex';

import RobotAPI from '@/api/Robot';

export default {
    name: 'DeleteRobotModal',
    props: ['name', 'active', 'id'],
    data() {
        return {
            show: false,
        };
    },
    methods: {
        async submit() {
            this.loading({
                text: '正在断线',
            });
            try {
                const message = await RobotAPI.delRobot({ robotId: this.id });
                this.loading({
                    text: message,
                });
                this.loaded(1500);
                this.$emit('activate');
                this.close();
            } catch (err) {
                this.loading({
                    text: err,
                });
                this.loaded(1500);
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
            'loading',
        ]),
        ...mapActions([
            'loaded',
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
.body {
    & span {
        color: rgb(88, 91, 96);
        text-align: center;
        padding-top: 2rem;
        padding-bottom: 3rem;
        display: block;
    }
}
</style>
