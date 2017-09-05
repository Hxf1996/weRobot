<template>
    <modal :active="show" @toogle="close">
        <div class="modal-header">
            <h5 class="modal-title">请勾选需要添加的群组</h5>
        </div>
        <form class="body">
            <div class="form-check" v-for="one in unMonitorGroupList" :key="one.id">
                <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" :value="one.id" v-model="addGroupData">
                    {{ one.nickname }}
                </label>
            </div>
        </form>
        <div class="modal-footer">
            <div class="form-check">
                <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" :value="true" v-model="selectAll" @click.stop="toogleAll">全选
                </label>
            </div>
            <div @click="getGroupList">刷新群</div>
            <div>已选{{ addGroupData.length }}/{{ unMonitorGroupList.length }}</div>
            <button type="button" class="btn btn-primary" @click="submit">确定添加</button>
        </div>
    </modal>
</template>

<script>
import { mapMutations } from 'vuex';

import Modal from '@/components/common/Modal';

import GroupAPI from '@/api/Group';

export default {
    name: 'AddGroupModal',
    props: ['active'],
    data() {
        return {
            show: false,
            groupList: [],
            addGroupData: [],
            selectAll: false,
        };
    },
    methods: {
        async submit() {
            try {
                const message = await GroupAPI.updateGroup(this.addGroupData.map((id) => {
                    const data = {
                        id,
                        isMonitor: true,
                        isAtReply: false,
                    };
                    return data;
                }));
                console.log(message);
                this.$emit('submit');
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
        async getGroupList() {
            try {
                this.groupList = await GroupAPI.getGroupList({ robotId: this.$route.params.id });
            } catch (err) {
                console.log(err);
            }
        },
        toogleAll() {
            this.addGroupData = [];
            if (this.selectAll) {
                this.unMonitorGroupList.forEach((item) => {
                    this.addGroupData.push(item.id);
                });
            }
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
                this.getGroupList();
            }
        },
    },
    components: {
        Modal,
    },
    computed: {
        unMonitorGroupList() {
            return this.groupList.filter(item => !item.monitor);
        },
    },
};
</script>

<style scoped>
.body {
    max-height: 600px;
    overflow-x: scroll;
    margin-left: 2rem;
}
</style>
