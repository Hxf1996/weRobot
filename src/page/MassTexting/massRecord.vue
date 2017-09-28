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
                    <td class="msg" :class="{ list: one.contentOrUrl.length >= 28 }"
                        v-if="one.msgType === 1" @click="fullMsg">
                        {{ one.contentOrUrl.substring(0, 28) }}
                        <div class="group-list" v-if="one.contentOrUrl.length >= 28">{{ one.contentOrUrl }}</div>
                    </td>
                    <td scope="row" v-if="one.msgType === 2">
                        <img :src="one.contentOrUrl" alt="群发图片">
                    </td>
                    <td class="date">{{ one.gmtExecute | formatDate }}</td>
                    <td class="group" :class="{ list: one.toNickname.length > 1 }"
                        @click="openGroupList">
                        {{ one.toNickname[0] }}
                        <ul class="group-list">
                            <li v-for="(name, index) in one.toNickname" :key="index">{{ name }}</li>
                        </ul>
                    </td>
                    <td class="name">{{ one.robotName }}</td>
                    <td class="statu">{{ one.sendStatusStr }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

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
        openGroupList(one) {
            if (Util.hasClass(one.target, 'active')) {
                Util.removeClass(one.target, 'active');
            } else {
                Util.addClass(one.target, 'active');
            }
        },
        fullMsg(one) {
            if (Util.hasClass(one.target, 'active')) {
                Util.removeClass(one.target, 'active');
            } else {
                Util.addClass(one.target, 'active');
            }
        },
        async init() {
            this.loading({
                text: '正在加载',
            });
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
                this.loaded(100);
                records.forEach((item, index) => {
                    records[index].toNickname = item.toNickname.split(/,/);
                });
                this.massList.push(...records);
            } catch (err) {
                this.loading({
                    text: err,
                });
                this.loaded(1500);
            }
        },
        ...mapMutations([
            'loading',
        ]),
        ...mapActions([
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
            userToken: 'userToken',
        }),
    },
};
</script>

<style scoped>
#mass-record {
    color: #585b60;
}

img {
    max-width: 20px;
    height: auto;
}

table th {
    text-align: center;
}

.msg {
    max-width: 400px;
    max-height: 49px;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
}

.group {
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    text-align: center;
}

.list::after {
    content: '\25BC';
    display: block;
    position: absolute;
    right: 0;
    top: 25%;
}

.date {
    text-align: center;
}

.name {
    min-width: 100px;
    text-align: center;
}

.statu {
    width: 170px;
    text-align: center;
}

.group-list {
    display: none;
    position: absolute;
    background-color: #fff;
    z-index: 2;
    border: 1px solid #eeeeee;
    padding: .5rem 1rem;
    margin-top: 12px;
    max-height: 300px;
    overflow-y: scroll;

    & li {
        list-style: none;
    }
}

.active {
    overflow: unset;
    word-break: break-all;

    & .group-list {
        display: block;
    }
}
</style>
