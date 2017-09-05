<template>
    <div id="group-list">
        <ul>
            <li class="group" @click="openAddGroupModal">
                <span>添加群</span>
            </li>
            <li v-for="one in groupList[$route.params.id]" :key="one.id" class="group">
                <span>{{ one.nickname }}</span>
                <button type="button" class="close" aria-label="Close" @click="openDeleteGroup(one.id, one.nickname)">
                    <span aria-hidden="true">&times;</span>
                </button>
            </li>
        </ul>
        <delete-group-modal :active="deteleGroupModal" :name="deleteData.name" @submit="deleteGroup(deleteData.id)"></delete-group-modal>
        <add-group-modal :active="addGroupModal" @close="closeAddGroupModal" @submit="getGroupList"></add-group-modal>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import DeleteGroupModal from '@/components/DeleteGroupModal';
import AddGroupModal from '@/components/AddGroupModal';

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
        async deleteGroup(id) {
            try {
                const message = await GroupAPI.updateGroup([
                    {
                        id,
                        isMonitor: false,
                        isAtReply: false,
                    },
                ]);
                console.log(message);
                this.deteleGroupModal = false;
                this.getGroupList();
            } catch (err) {
                console.log(err);
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
        ]),
        ...mapActions('Robot', [
            'getGroupList',
        ]),
    },
    components: {
        DeleteGroupModal,
        AddGroupModal,
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
    display: inline-block;
    margin-right: 1.2rem;
    margin-bottom: 1.2rem;

    & > span {
        margin-right: 2rem;
    }
}
</style>