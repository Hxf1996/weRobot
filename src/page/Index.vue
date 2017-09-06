<template>
    <div id="index">
        <h1 @click="go">欢迎使用AIFOCUS机器人</h1>
    </div>
</template>

<script>
export default {
    name: 'index',
    created() {
    },
    data() {
        return {
        };
    },
    methods: {
        go() {
            this.$router.push({ name: 'robotManage' });
        },
    },
    components: {
    },
    computed: {
    },
};
</script>

<style scoped>
#index {
    & h1 {
        text-align: center;
        margin-top: 10rem;
    }
}
</style>
