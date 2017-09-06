<template>
    <div id="group-manage">
        <h4>群管理</h4>
        <nav class="nav">
            <router-link v-for="one in robotList" :key="one.id" :to="{ name: 'groupList', params: { id: one.id } }" class="nav-link" :class="{active: one.id === $route.params.id}">机器人：{{ one.nickname }}</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'GroupManage',
    created() {
        setTimeout(() => {
            if (this.robotList.length === 0) {
                alert('请先添加机器人');
                this.$router.push({
                    name: 'robotManage',
                });
            } else {
                this.$router.push({
                    name: 'groupList',
                    params: {
                        id: this.robotList[0].id,
                    },
                });
            }
        }, 1000);
    },
    data() {
        return {
        };
    },
    methods: {
    },
    components: {
    },
    computed: {
        ...mapState('Robot', {
            robotList: 'list',
        }),
    },
};
</script>

<style scoped>
#group-manage {
}

h4 {
    margin-top: 0;
    padding-top: 1.4rem;
    margin-left: 2rem;
    font-weight: 400;
    color: rgb(133, 135, 135);
    flex-grow: 0;
    margin-bottom: 2rem;
}

nav {
    box-shadow: 0 2px 1px rgb(185, 185, 185);
    margin-top: 1rem;
    padding-left: 4rem;
    flex-grow: 0;

    & .nav-link {
        padding: .8rem 1.5rem;
        color: rgb(133, 135, 135);
        display: inline-block;
    }

    & .active {
        border-bottom: 2px solid rgb(185, 185, 185);
    }
}
</style>
