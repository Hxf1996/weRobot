<template>
    <transition name="transparent">
        <div v-show="show" class="backdrop">
            <div class="toast">
                <span class="loading"></span>
                <span class="text">{{ log.text }}</span>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Loading',
    props: ['active', 'log'],
    data() {
        return {
            show: false,
        };
    },
    watch: {
        active() {
            this.show = this.active;
        },
    },
};
</script>

<style scoped>
.backdrop::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(216, 216, 216, 0.3);
    z-index: 1020;
}

.toast {
    width: 160px;
    height: 160px;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -80px;
    margin-left: -80px;
    background-color: #252525;
    z-index: 1021;
}

.loading {
    display: block;
    text-align: center;
    margin-top: 3rem;
}

.loading::after, .loading::before {
    background-color: #fff;
}

.text {
    color: #fff;
    font-size: 1.3rem;
    font-weight: 200;
    text-align: center;
    display: block;
    margin-top: .7rem;
}
</style>
