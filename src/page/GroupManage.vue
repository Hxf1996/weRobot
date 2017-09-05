<template>
    <div id="group-manage">
        <h4>群管理</h4>
        <nav class="nav">
            <router-link v-for="one in robotList" :key="one.id" :to="{ name: 'groupList', params: { id: one.id } }" class="nav-link" :class="{active: one.id === $route.params.id}">{{ one.nickname }}</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'GroupManage',
    created() {
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

.nav {
    background-color: #F8F9FA;

    & a.active {
        color: #15B670;
        border-bottom: 2px solid #15B670;
    }

    & a {
        color: #777;
        font-size: .8rem;
        padding-top: 1rem;
        padding-bottom: 1rem;

        &:hover {
            background-color: #eee;
        }
    }
}
</style>
