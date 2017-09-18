<template>
    <modal :active="show" @toogle="close">
        <div class="modal-header">
            <h6>{{ title }}</h6>
            <button type="button" class="close" aria-label="Close" @click="close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="body">
            <div class="slot">
                <slot></slot>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-submit" @click="submit">确定</button>
            <button type="button" class="btn btn-cancel" @click="close">取消</button>
        </div>
    </modal>
</template>

<script>
import Modal from '@/components/common/Modal';

import { mapMutations } from 'vuex';

export default {
    name: 'MessageBox',
    props: ['active', 'title'],
    data() {
        return {
            show: false,
        };
    },
    methods: {
        submit() {
            this.$emit('submit');
            this.close();
        },
        open() {
            this.openBackDrop();
            this.show = true;
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
                this.open();
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
    & .slot {
        color: rgb(88, 91, 96);
        text-align: center;
        padding-top: 2rem;
        padding-bottom: 3rem;
        display: block;
    }
}
</style>
