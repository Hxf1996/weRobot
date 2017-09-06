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
import { mapState, mapMutations } from 'vuex';

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
        async init() {
            this.loading({
                text: '正在加载',
            });
            try {
                const entry = await GroupAPI.getUndoTask({ userId: this.userId });
                entry.forEach((mass, index) => {
                    this.robotList.forEach((item) => {
                        if (item.id === mass.robotId) {
                            entry[index].robotName = item.nickname;
                        }
                    });
                });
                this.loaded(100);
                this.massList.push(...entry);
            } catch (err) {
                this.loading({
                    text: err,
                });
                this.loaded(1500);
            }
        },
        async deleteMass(id) {
            this.loading({
                text: '正在删除',
            });
            try {
                const message = await GroupAPI.delTaskInfo({
                    taskId: id,
                });
                this.loading({
                    text: message,
                });
                this.massList = [];
                this.init();
            } catch (err) {
                this.loading({
                    text: err,
                });
                this.loaded(1500);
            }
        },
        ...mapMutations([
            'loading',
            'loaded',
        ]),
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
        ...mapState('User', {
            userId: 'userToken',
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