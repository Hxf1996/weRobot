<template>
    <modal :active="loginModal" @toogle="close">
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

import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    name: 'UserModal',
    data() {
        return {
            userLoginFrom: {
                mobile: '',
                password: '',
            },
        };
    },
    methods: {
        ...mapActions('User', [
            'login',
        ]),
        submit() {
            this.login(this.userLoginFrom)
                .then(() => {
                    this.close();
                    alert('登陆成功');
                    this.$router.push({ name: 'robotManage' });
                })
                .catch((error) => {
                    alert(error);
                });
        },
        close() {
            this.closeBackDrop();
            this.closeLoginModal();
        },
        ...mapMutations([
            'closeBackDrop',
            'closeLoginModal',
        ]),
    },
    components: {
        Modal,
    },
    computed: {
        ...mapState([
            'loginModal',
        ]),
    },
};
</script>

<style scoped>
</style>
