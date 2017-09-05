<template>
    <modal :active="show" @toogle="close">
        <div class="body">
            <span>您确定要删除“{{ name }}“群么？</span><br/>
            <span>删除后该群将不再提供机器人服务</span>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="close">取消</button>
            <button type="button" class="btn btn-danger" @click="submit">删除</button>
        </div>
    </modal>
</template>

<script>
import { mapMutations } from 'vuex';

import Modal from '@/components/common/Modal';

export default {
    name: 'DeleteGroupModal',
    props: ['active', 'name'],
    data() {
        return {
            show: false,
        };
    },
    methods: {
        submit() {
            this.close();
            this.$emit('submit');
        },
        close() {
            this.closeBackDrop();
            this.show = false;
        },
        ...mapMutations([
            'closeBackDrop',
            'openBackDrop',
        ]),
    },
    watch: {
        active() {
            this.show = this.active;
            if (this.show) {
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
