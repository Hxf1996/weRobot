<template>
    <modal :active="show" @toogle="close">
        <div class="modal-header">
            <h6></h6>
            <button type="button" class="close" aria-label="Close"
                @click="close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="body">
            <span>您确定要删除“{{ name }}“群么？<br/>删除后该群将不再提供机器人服务</span>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-submit" @click="submit">确定删除</button>
            <button type="button" class="btn btn-cancel" @click="close">取消</button>
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
            this.$emit('close');
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
