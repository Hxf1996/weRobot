<template>
    <form id="red-package" @submit.prevent="submit" v-validate.formData="validate">
        <div class="form-group row">
            <label for="status" class="col-sm-2 col-form-label">功能状态&emsp;&emsp;&emsp;</label>
            <div class="col-sm-2">
                <input type="checkbox" class="toggle-button" name="status" id="status" v-model="status">
            </div>
            <span class="inline-margin" v-show="readOnly && status">红包状态：{{ statusStr }}</span>
        </div>
        <div class="form-group row" v-show="status">
            <label for="budget" class="col-sm-2 col-form-label">群内红包预算&emsp;</label>
            <div class="col-sm-2">
                <input type="number" class="form-control" name="budget" id="budget" placeholder="元" :readonly="readOnly"
                    v-model.number="budget">
            </div>
            <span class="inline-margin" v-show="readOnly">剩余金额：{{ formData.residueAmount /100 }}元</span>
        </div>
        <div class="form-group row" v-show="status">
            <label for="num" class="col-sm-2 col-form-label">红包发放个数&emsp;</label>
            <div class="col-sm-2">
                <input type="number" class="form-control" name="redEnvelopesNums" id="num" placeholder="个" :readonly="readOnly"
                    v-model.number="formData.redEnvelopesNums">
            </div>
            <span class="inline-margin" v-show="readOnly">剩余数量：{{ formData.residueNums }}个</span>
        </div>
        <div class="form-group row money" v-show="status">
            <label class="col-sm-2 col-form-label">拉新红包金额&emsp;</label>
            <div class="col-sm-8">
                <div class="form-check">
                    <label class="form-check-label" for="fix">
                        <input class="form-check-input" type="radio" name="type" id="fix" :value="1" :disabled="readOnly"
                            v-model="formData.redEnvelopesType">固定红包
                    </label>
                </div>
                <div class="form-row align-items-center">
                    <div class="col-auto">
                        <label class="form-check-label" for="random">
                            <input class="form-check-input" type="radio" name="type" id="random" :value="2" :disabled="readOnly"
                                v-model="formData.redEnvelopesType">随机红包
                        </label>
                    </div>
                    <div class="col-auto">
                        <input type="number" class="form-control redRandom" name="amountRandomLower" :readonly="readOnly"
                            v-model.number="amountRandomLower" v-show="formData.redEnvelopesType === 2">
                    </div>
                    <span v-show="formData.redEnvelopesType === 2">-</span>
                    <div class="col-auto">
                        <input type="number" class="form-control redRandom" name="amountRandomUpper" :readonly="readOnly"
                            v-model.number="amountRandomUpper" v-show="formData.redEnvelopesType === 2">
                    </div>
                </div>
            </div>
        </div>
        <div class="form-group row money" v-show="status">
            <label class="col-sm-2 col-form-label">单人邀请奖励数</label>
            <div class="col-sm-8">
                <div class="form-check">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="limit" :value="false" :disabled="readOnly"
                            v-model="formData.timesLimit">不限
                    </label>
                </div>
                <div class="form-row align-items-center">
                    <div class="col-auto">
                        <label class="form-check-label">
                            <input class="form-check-input" type="radio" name="limit" :value="true" :disabled="readOnly"
                                v-model="formData.timesLimit">限制次数
                        </label>
                    </div>
                    <div class="col-auto">
                        <input type="number" placeholder="次" name="timesLimitUpper" style="width: 80px;" :readonly="readOnly" class="form-control"
                            v-model.number="formData.timesLimitUpper" v-show="formData.timesLimit">
                    </div>
                    <small class="form-text text-muted">单人邀请他人入群，奖励到达上限后，不再发放</small>
                </div>
            </div>
        </div>
        <div class="form-group row" v-show="status">
            <label for="header-text" class="col-sm-2 col-form-label">红包页文案&emsp;&emsp;</label>
            <div class="col-sm-4">
                <input type="text" class="form-control" name="pageDoc1" id="header-text" placeholder="文案1" :readonly="readOnly" maxlength="14"
                    v-model="formData.pageDoc1">
            </div>
        </div>
        <div class="form-group row" v-show="status">
            <label for="bottom-text" class="col-sm-2 col-form-label"></label>
            <div class="col-sm-4">
                <input type="text" class="form-control" name="pageDoc2" id="bottom-text" placeholder="文案2" :readonly="readOnly" maxlength="18"
                    v-model="formData.pageDoc2">
            </div>
        </div>
        <div class="form-group row" v-show="status">
            <label for="bottom-text" class="col-sm-2 col-form-label"></label>
            <div class="col-sm-4">
                <input type="text" class="form-control" name="pageDoc2" id="bottom-text" placeholder="文案3" :readonly="readOnly" maxlength="22"
                    v-model="formData.pageDoc3">
            </div>
        </div>
        <footer>
            <button type="submit" class="save" :disabled="!isSave">保存</button>
        </footer>
    </form>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex';

import RedPacketAPI from '@/api/RedPacket';

export default {
    name: 'RedPacket',
    created() {
        this.getConfig();
    },
    data() {
        return {
            validate: {
                budget({ budget }) {
                    if (budget < 1) {
                        throw new Error('预算不得小于一块');
                    }
                },
                redEnvelopesNums({ budget, redEnvelopesNums }) {
                    if (redEnvelopesNums < 1) {
                        throw new Error('数量不得小于一个');
                    }
                    if (budget / 100 < redEnvelopesNums) {
                        throw new Error('单个红包不得小于一块');
                    }
                },
                amountRandomLower({ amountRandomLower, budget, redEnvelopesType }) {
                    if (redEnvelopesType === 1) {
                        return false;
                    }
                    if (amountRandomLower < 1) {
                        throw new Error('过小');
                    }
                    if (amountRandomLower > budget) {
                        throw new Error('过大');
                    }
                    return true;
                },
                amountRandomUpper({
                    budget,
                    amountRandomUpper,
                    amountRandomLower,
                    redEnvelopesType,
                }) {
                    if (redEnvelopesType === 1) {
                        return false;
                    }
                    if (amountRandomUpper < 1) {
                        throw new Error('过小');
                    }
                    if (amountRandomUpper < amountRandomLower) {
                        throw new Error('过小');
                    }
                    if (amountRandomUpper > budget) {
                        throw new Error('过小');
                    }
                    return true;
                },
                timesLimitUpper({ timesLimitUpper, timesLimit }) {
                    if (!timesLimit) {
                        return false;
                    }
                    if (timesLimitUpper < 1) {
                        throw new Error('限制不得小于一次');
                    }
                    return true;
                },
            },
            formData: {
                status: 0,
                budget: '',
                redEnvelopesNums: '',
                redEnvelopesType: 1,
                amountRandomUpper: '',
                amountRandomLower: '',
                pageDoc1: '',
                pageDoc2: '',
                pageDoc3: '',
                timesLimit: false,
                timesLimitUpper: '',
            },
            readOnly: false,
        };
    },
    methods: {
        async getConfig() {
            this.loading({
                text: '正在加载',
            });
            try {
                const entry = await RedPacketAPI.getEnvelopesConfig({
                    groupId: this.$route.params.id,
                });
                if (entry) {
                    this.readOnly = true;
                    this.formData = entry;
                }
                this.loaded(100);
            } catch (err) {
                this.loading({
                    text: err.message,
                });
                this.loaded(1500);
            }
        },
        init() {
            this.formData = {
                status: 0,
                budget: '',
                redEnvelopesNums: '',
                redEnvelopesType: 1,
                amountRandomUpper: '',
                amountRandomLower: '',
                pageDoc1: '',
                pageDoc2: '',
                timesLimit: false,
                timesLimitUpper: '',
            };
            this.readOnly = false;
        },
        submit() {
            if (this.readOnly) {
                this.closePacket();
            } else {
                this.openPacket();
            }
        },
        async openPacket() {
            this.loading({
                text: '正在保存',
            });
            try {
                const message = await RedPacketAPI.redEnvelopesConfig({
                    ...this.formData,
                    userId: this.userId,
                    groupId: this.$route.params.id,
                });
                this.loading({
                    text: message,
                });
                await this.getConfig();
            } catch (err) {
                this.loading({
                    text: err.message,
                });
                this.loaded(1500);
            }
        },
        async closePacket() {
            this.loading({
                text: '正在关闭',
            });
            try {
                const message = await RedPacketAPI.redEnvelopesClose({
                    groupId: this.$route.params.id,
                });
                this.loading({
                    text: message,
                });
                this.init();
                await this.getConfig();
            } catch (err) {
                this.loading({
                    text: err.message,
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
        async $route() {
            this.init();
            await this.getConfig();
        },
    },
    computed: {
        status: {
            get() {
                return !!this.formData.status;
            },
            set(val) {
                this.formData.status = val ? 1 : 0;
            },
        },
        isSave() {
            if (this.formData.status && this.readOnly) {
                return false;
            }
            if (this.formData.budget === '' || this.formData.redEnvelopesNums === '') {
                return false;
            }
            if (this.formData.pageDoc1 === '' || this.formData.pageDoc2 === '' || this.formData.pageDoc3 === '') {
                return false;
            }
            if (this.formData.redEnvelopesType === 2) {
                if (this.formData.amountRandomLower === '' || this.formData.amountRandomUpper === '') {
                    return false;
                }
            }
            if (this.formData.timesLimit) {
                if (this.formData.timesLimitUpper === '') {
                    return false;
                }
            }
            return true;
        },
        statusStr() {
            const statusData = {
                1: '正在进行',
                2: '已领完',
                3: '已关闭',
            };
            return statusData[this.formData.status];
        },
        budget: {
            get() {
                return this.formData.budget ? this.formData.budget / 100 : '';
            },
            set(val) {
                this.formData.budget = val * 100;
            },
        },
        amountRandomUpper: {
            get() {
                return !this.formData.amountRandomUpper ? '' : this.formData.amountRandomUpper / 100;
            },
            set(val) {
                this.formData.amountRandomUpper = val * 100;
            },
        },
        amountRandomLower: {
            get() {
                return !this.formData.amountRandomLower ? '' : this.formData.amountRandomLower / 100;
            },
            set(val) {
                this.formData.amountRandomLower = val * 100;
            },
        },
        ...mapState('User', {
            userId: 'userToken',
        }),
    },
};
</script>

<style scoped>
#red-package {
    color: #585b60;

    & .col-form-label {
        text-align: center;
    }

    & footer {
        margin-top: 2rem;
        padding-bottom: 2rem;
        margin-right: -15px;
        margin-left: -15px;
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

            &[disabled=disabled] {
                background-color: #cacaca;
            }
        }
    }
}

.money {
    & input {
        margin-right: 7px;
    }
}

.inline-margin {
    line-height: 2.2rem;
}

.toggle-button {
    margin-top: 5px;
}

.redRandom {
    display: inline-block;
}
</style>
