<template>
    <form id="welcome-greet" @submit.prevent="updateWelcomeGreet">
        <h4>欢迎词</h4>
        <div class="form-group row" v-for="(one, index) in welcomeGreet" :key="index">
            <label class="col-sm-1 col-form-label"></label>
            <div class="form-row align-items-center greet">
                <div class="col-auto">
                    <input type="text" class="form-control" name="welcomeText" maxlength="10"
                        v-model="one.welcomeText">
                </div>
                <span>@被邀请人</span>
                <div class="col-auto">
                    <input type="text" class="form-control" name="welcomeIntroduce" maxlength="10"
                        v-model="one.welcomeIntroduce">
                </div>
            </div>
            <button type="button" class="close" aria-label="Close"
                @click="deleteGreet(index)" v-if="index !== 0">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="form-group row">
            <label class="col-sm-1 col-form-label"></label>
            <button class="add-greet" @click.prevent="addGreet" :disabled="disAdd">
                <span>+ 添加文案</span>
            </button>
            <span v-show="disAdd" style="line-height: 2.8rem;">最多10组文案</span>
        </div>
        <footer>
            <button type="submit" class="save" :disabled="false">保存</button>
        </footer>
    </form>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

import WelcomeGreetAPI from '@/api/WelcomeGreet';

export default {
    name: 'WelcomeGreet',
    data() {
        return {
            welcomeGreet: [],
        };
    },
    async mounted() {
        try {
            this.loading({
                text: '正在加载',
            });
            this.welcomeGreet = await WelcomeGreetAPI.getWelcomeGreet({
                userId: this.userId,
            });

            if (this.welcomeGreet.length === 0) {
                this.welcomeGreet.push({
                    welcomeText: '欢迎',
                    welcomeIntroduce: '加入[微笑][微笑]',
                });
            }
            this.loaded(100);
        } catch (e) {
            this.loading({
                text: e.message,
            });
            this.loaded(1500);
        }
    },
    methods: {
        addGreet() {
            this.welcomeGreet.push({
                welcomeText: '',
                welcomeIntroduce: '',
            });
        },
        deleteGreet(index) {
            this.welcomeGreet.splice(index, 1);
        },
        async updateWelcomeGreet() {
            try {
                this.welcomeGreet.forEach((item) => {
                    if (!item.welcomeText || !item.welcomeIntroduce) {
                        throw new Error('请填写内容');
                    }
                });
                this.loading({
                    text: '正在保存',
                });
                await WelcomeGreetAPI.updateWelcomeGreet(this.robotList[0].id, this.welcomeGreet);
                this.loaded(100);
            } catch (e) {
                this.loading({
                    text: e.message,
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
    computed: {
        disAdd() {
            return this.welcomeGreet.length >= 10;
        },
        ...mapState('User', {
            userId: 'userToken',
        }),
        ...mapState('Robot', {
            robotList: 'list',
        }),
    },
};
</script>

<style scoped>
#welcome-greet {
    color: #585b60;
    overflow-y: scroll;
    height: 100%;

    & footer {
        margin-top: 2rem;
        padding-bottom: 2rem;
        border-top: 1px solid #b9b9b9;

        & .save {
            margin-top: 1.5rem;
            margin-right: auto;
            margin-left: auto;
            display: block;
            padding: .8rem 4rem;
            background-color: rgb(85, 85, 85);
            color: #fff;
            border-radius: 0;
        }
    }
}

button[disabled=disabled] {
    cursor: no-drop;

    & span {
        color: #cacaca;
    }
}

.close {
    margin-left: 1rem;
}

h4 {
    margin-top: 0;
    padding-top: 1.4rem;
    margin-left: 2rem;
    font-weight: 400;
    color: rgb(133, 135, 135);
    flex-grow: 0;
    flex-shrink: 0;
    margin-bottom: 2rem;
}

.greet {
    border: 1px solid #e1e1e1;
    padding: 1rem .5rem;
}

.add-greet {
    background-color: rgb(251, 251, 251);
    border: 1.8px solid rgb(224, 224, 224);
    padding: .5rem;
    margin-right: 1.2rem;
    margin-bottom: 1.2rem;

    & > span {
        margin-right: 2rem;
        color: #585b60;
    }
}
</style>
