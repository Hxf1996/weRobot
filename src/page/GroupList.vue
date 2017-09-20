<template>
    <div id="group-list">
        <transition-group tag="ul">
            <li class="group" @click="openAddGroupModal" key="0">
                <span>+ 添加群</span>
            </li>
            <li v-for="one in groupList[$route.params.id]" :key="one.id" class="group">
                <span>{{ one.nickname }}</span>
                <button type="button" class="close" aria-label="Close"
                    @click="openDeleteGroup(one.id, one.nickname)">
                    <span aria-hidden="true">&times;</span>
                </button>
            </li>
        </transition-group>
        <add-group-modal :active="addGroupModal"
            @close="closeAddGroupModal" @successAddGroup="getGroupList"></add-group-modal>
        <message-box :active="deteleGroupModal" :title="''"
            @close="closeDeleteGroup" @submit="deleteGroup(deleteData.id)">
            <span>你您确定要删除“{{ deleteData.name }}“群么？<br/>删除后该群将不再提供机器人服务</span>
        </message-box>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';

import AddGroupModal from '@/components/AddGroupModal';
import MessageBox from '@/components/common/MessageBox';

import GroupAPI from '@/api/Group';

export default {
    name: 'GroupList',
    data() {
        return {
            deteleGroupModal: false,
            addGroupModal: false,
            deleteData: {
                name: '',
            },
        };
    },
    methods: {
        openDeleteGroup(id, name) {
            this.deleteData = { id, name };
            this.deteleGroupModal = true;
        },
        closeDeleteGroup() {
            this.deteleGroupModal = false;
        },
        async deleteGroup(id) {
            this.loading({
                text: '正在删除',
            });
            try {
                await GroupAPI.updateGroup([
                    {
                        id,
                        isMonitor: false,
                        isAtReply: false,
                    },
                ]);
                await this.getGroupList();
                this.loaded(100);
                this.closeDeleteGroup();
            } catch (err) {
                this.loading({
                    text: err.message,
                });
                this.loaded(1500);
            }
        },
        openAddGroupModal() {
            this.addGroupModal = true;
        },
        closeAddGroupModal() {
            this.addGroupModal = false;
        },
        ...mapMutations([
            'closeBackDrop',
            'loading',
        ]),
        ...mapActions([
            'loaded',
        ]),
        ...mapActions('Robot', [
            'getGroupList',
        ]),
    },
    components: {
        AddGroupModal,
        MessageBox,
    },
    computed: {
        ...mapState('Robot', {
            robotList: 'list',
            groupList: 'groupList',
        }),
    },
};
</script>

<style scoped>
#group-list {
    padding: 2rem;
}

.group {
    background-color: rgb(251, 251, 251);
    border: 1.8px solid rgb(224, 224, 224);
    padding: .5rem;
    margin-right: 1.2rem;
    margin-bottom: 1.2rem;
    float: left;
    list-style: none;

    & > span {
        margin-right: 2rem;
        color: #585b60;
    }
}
</style>