<template>
    <div id="timed-mass">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>群发内容</th>
                    <th>发送时间</th>
                    <th>发送群</th>
                    <th>机器人</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="one in massList">
                    <th scope="row" v-if="one.msgType === 1">
                        {{ one.contentOrUrl }}
                    </th>
                    <th scope="row" v-if="one.msgType === 2">
                        <img :src="one.contentOrUrl" alt="群发图片">
                    </th>
                    <td>{{ one.gmtFixedExecute | formatDate }}</td>
                    <td>{{ one.toNickname }}</td>
                    <td>{{ one.robotName }}</td>
                    <td>
                        <button type="button" class="btn btn-sm btn-link" @click="deleteMass(one.id)">删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex';

import GroupAPI from '@/api/Group';

import Util from '@/libs/util';

export default {
    name: 'timedMass',
    data() {
        return {
            massList: [],
        };
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            this.robotList.forEach(async (item) => {
                try {
                    const entry = await GroupAPI.getUndoTask({ robotId: item.id });
                    entry.forEach((mass, index) => {
                        if (item.id === mass.robotId) {
                            entry[index].robotName = item.nickname;
                        }
                    });
                    this.massList.push(...entry);
                } catch (err) {
                    console.log(err);
                }
            });
        },
        async deleteMass(id) {
            try {
                const message = await GroupAPI.delTaskInfo({
                    taskId: id,
                });
                console.log(message);
                this.massList = [];
                this.init();
            } catch (err) {
                console.log(err);
            }
        },
    },
    watch: {
        $route() {
            this.init();
        },
    },
    filters: {
        formatDate(val) {
            return Util.formatDate(val, 'YYYY-MM-dd HH:mm:ss');
        },
    },
    computed: {
        ...mapState('Robot', {
            robotList: 'list',
        }),
    },
};
</script>

<style scoped>
#timed-mass {
}

img {
    max-width: 20px;
    height: auto;
}
</style>