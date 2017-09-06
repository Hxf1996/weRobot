<template>
    <div id="mass-texting">
        <h4>消息群发</h4>
        <nav>
            <router-link v-for="(one, index) in navData" :key="index" :to="one.to" class="nav-link" :class="{active: one.to.name === $route.name}">{{ one.title }}</router-link>
        </nav>
        <transition name="transparent" mode="out-in">
            <router-view class="container-fluid mass-content"></router-view>
        </transition>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'MassTexting',
    created() {
        setTimeout(() => {
            if (this.robotList.length === 0) {
                alert('请先添加机器人');
                this.$router.push({
                    name: 'robotManage',
                });
            } else {
                this.$router.push({
                    name: 'addMass',
                });
            }
        });
    },
    data() {
        return {
            navData: [
                {
                    to: {
                        name: 'addMass',
                    },
                    title: '新增群发',
                },
                {
                    to: {
                        name: 'timedMass',
                    },
                    title: '定时群发任务',
                },
                {
                    to: {
                        name: 'massRecord',
                    },
                    title: '群发记录',
                },
            ],
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
#mass-texting {
}

h4 {
    margin-top: 0;
    padding-top: 1.4rem;
    margin-left: 2rem;
    font-weight: 400;
    color: rgb(133, 135, 135);
    flex-grow: 0;
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

.mass-content {
    padding-top: 2rem;
    flex-grow: 1;
    overflow-y: scroll;
    position: relative;
}
</style>