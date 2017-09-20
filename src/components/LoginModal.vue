<template>
    <modal :active="show" @toogle="close">
        <div class="modal-header">
            <h5>登陆</h5>
        </div>
        <div class="body">
            <form @submit.prevent="submit">
                <br/>
                <div class="form-group row justify-content-center">
                    <div class="col-10">
                        <input v-model="userLoginFrom.mobile" type="phone" class="form-control rounded-0" aria-describedby="mobile" placeholder="输入手机号">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="form-group row justify-content-center">
                    <div class="col-10">
                        <input v-model="userLoginFrom.password" type="password" class="form-control rounded-0" aria-describedby="password" placeholder="输入密码">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">登陆</button>
                </div>
            </form>
        </div>
    </modal>
</template>

<script>
import Modal from '@/components/common/Modal';

import { mapMutations, mapActions } from 'vuex';

export default {
    name: 'UserModal',
    props: ['active'],
    data() {
        return {
            show: false,
            userLoginFrom: {
                mobile: '',
                password: '',
            },
        };
    },
    methods: {
        init() {
            this.userLoginFrom = {
                mobile: '',
                password: '',
            };
        },
        async submit() {
            try {
                this.loading({
                    text: '正在登录',
                });
                const message = await this.login(this.userLoginFrom);
                this.loading({
                    text: message,
                });
                this.loaded(1000);
                this.close();
                this.$emit('submit');
            } catch (err) {
                this.loading({
                    text: err.message,
                });
                this.loaded(1500);
            }
        },
        open() {
            this.show = this.active;
            this.openBackDrop();
        },
        close() {
            this.init();
            this.show = false;
            this.closeBackDrop();
            this.$emit('close');
        },
        ...mapMutations([
            'closeBackDrop',
            'openBackDrop',
            'loading',
        ]),
        ...mapActions([
            'loaded',
        ]),
        ...mapActions('User', [
            'login',
        ]),
    },
    components: {
        Modal,
    },
    watch: {
        active(active) {
            if (active) {
                this.open();
            }
        },
    },
};
</script>

<style scoped>
</style>
