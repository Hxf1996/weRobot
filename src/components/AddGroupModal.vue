<template>
    <modal :active="show" @toogle="close">
        <div class="modal-header">
            <h6 class="modal-title">请勾选需要添加的群组</h6>
            <button type="button" class="close" aria-label="Close"
                @click="close">
                <span aria-hidden="true">&times;</span>
            </button>
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
            <div class="refresh" @click="getGroupList">刷新群</div>
            <div class="select">已选{{ addGroupData.length }}/{{ unMonitorGroupList.length }}个</div>
            <button type="button" class="btn btn-submit" @click="submit">确定添加</button>
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
            this.loading({
                text: '正在新增',
            });
            try {
                const message = await GroupAPI.updateGroup(this.addGroupData.map((id) => {
                    const data = {
                        id,
                        isMonitor: true,
                        isAtReply: false,
                    };
                    return data;
                }));
                this.loading({
                    text: message,
                });
                this.addGroupData = [];
                this.selectAll = false;
                this.loaded(1500);
                this.$emit('submit');
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
        async getGroupList() {
            this.loading({
                text: '获取所有分组',
            });
            try {
                this.groupList = await GroupAPI.getGroupList({ robotId: this.$route.params.id });
                this.loaded(100);
            } catch (err) {
                this.loading({
                    text: err,
                });
                this.loaded(1500);
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
            'loading',
            'loaded',
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
h6 {
    color: #585b60;
}

.body {
    max-height: 600px;
    overflow-x: scroll;
    margin-left: 2rem;
    padding-top: .8rem;
    padding-bottom: .8rem;
    color: #585b60;
}

.modal-footer {
    & .form-check {
        width: 60px;
        margin-left: 17px;
        margin-top: 7px;
        color: #585b60;

        & input {
            margin-right: 5px;
        }
    }

    & .refresh {
        width: 80px;
        color: #585b60;
        cursor: pointer;
    }

    & .select {
        flex-grow: 1;
        text-align: right;
        color: #585b60;
        padding-right: 1rem;
    }
}
</style>
