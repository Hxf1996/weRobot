<template>
    <div id="mass-record">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>群发内容</th>
                    <th>发送时间</th>
                    <th>发送群</th>
                    <th>机器人</th>
                    <th>状态</th>
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
                    <td>{{ one.gmtExecute | formatDate }}</td>
                    <td>{{ one.toNickname }}</td>
                    <td>{{ one.robotName }}</td>
                    <td>{{ one.sendStatusStr }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex';

import Util from '@/libs/util';

import GroupAPI from '@/api/Group';

export default {
    name: 'MassRecord',
    created() {
        this.init();
    },
    data() {
        return {
            massList: [],
        };
    },
    methods: {
        async init() {
            try {
                const { records, sendStatusMap } = await GroupAPI.getMsgRecord({
                    userId: this.userToken,
                    pageNow: 1,
                    pageSize: 30,
                });
                records.forEach((mass, index) => {
                    this.robotList.forEach((item) => {
                        if (item.id === mass.robotId) {
                            records[index].robotName = item.nickname;
                        }
                    });
                    records[index].sendStatusStr = sendStatusMap[mass.sendStatus];
                });
                console.log(records);
                this.massList.push(...records);
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
        ...mapState('User', {
            userToken: 'userToken',
        }),
    },
};
</script>

<style scoped>
#mass-record {
}

img {
    max-width: 20px;
    height: auto;
}
</style>