<template>
    <form id="red-package" @submit.prevent="submit">
        <div class="form-group row">
            <label for="status" class="col-sm-2 col-form-label">功能状态&emsp;&emsp;</label>
            <div class="col-sm-2">
                <input type="checkbox" class="toggle-button" id="status" v-model="status">
            </div>
            <span class="inline-margin" v-if="readOnly && status">红包状态：{{ statusStr }}</span>
        </div>
        <div class="form-group row" v-if="status">
            <label for="budget" class="col-sm-2 col-form-label">群内红包预算</label>
            <div class="col-sm-2">
                <input type="number" class="form-control" id="budget" placeholder="元" v-model.number="budget" min="1" :readonly="readOnly">
            </div>
            <span class="inline-margin" v-if="readOnly">剩余金额：{{ packetData.residueAmount /100 }}元</span>
        </div>
        <div class="form-group row" v-if="status">
            <label for="num" class="col-sm-2 col-form-label">红包发放个数</label>
            <div class="col-sm-2">
                <input type="number" class="form-control" id="num" placeholder="个" min="1" :readonly="readOnly"
                    v-model.number="packetData.redEnvelopesNums">
            </div>
            <span class="inline-margin" v-if="readOnly">剩余数量：{{ packetData.residueNums }}个</span>
        </div>
        <div class="form-group row money" v-if="status">
            <label class="col-sm-2 col-form-label">拉新红包金额</label>
            <div class="col-sm-8">
                <div class="form-check">
                    <label class="form-check-label" for="fix">
                        <input class="form-check-input" type="radio" name="type" id="fix" :value="1" :disabled="readOnly"
                            v-model="packetData.redEnvelopesType">固定红包
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label" for="random">
                        <input class="form-check-input" type="radio" name="type" id="random" :value="2" :disabled="readOnly"
                            v-model="packetData.redEnvelopesType">随机红包
                        <input type="number" style="width: 80px;" min="1" :max="budget" :readonly="readOnly"
                            v-model.number="amountRandomLower" v-if="packetData.redEnvelopesType === 2">
                        <span v-if="packetData.redEnvelopesType === 2">-&ensp;</span>
                        <input type="number" style="width: 80px;" :min="amountRandomLower" :max="budget" :readonly="readOnly"
                            v-model.number="amountRandomUpper" v-if="packetData.redEnvelopesType === 2">
                    </label>
                </div>
            </div>
        </div>
        <div class="form-group row" v-if="status">
            <label for="header-text" class="col-sm-2 col-form-label">红包页文案</label>
            <div class="col-sm-4">
                <input type="text" class="form-control" id="header-text" placeholder="红包说明文案"maxlength="6" :readonly="readOnly"
                    v-model="packetData.pageDoc1">
            </div>
        </div>
        <div class="form-group row" v-if="status">
            <label for="bottom-text" class="col-sm-2 col-form-label"></label>
            <div class="col-sm-4">
                <input type="text" class="form-control" id="bottom-text" placeholder="邀请拉新文案"maxlength="25" :readonly="readOnly"
                    v-model="packetData.pageDoc2">
            </div>
        </div>
        <div class="form-group row money" v-if="status">
            <label class="col-sm-2 col-form-label">单人邀请奖励数</label>
            <div class="col-sm-8">
                <div class="form-check">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="limit" :value="false" :disabled="readOnly"
                            v-model="packetData.timesLimit">不限
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="limit" :value="true" :disabled="readOnly"
                            v-model="packetData.timesLimit">限制次数
                        <input type="number" placeholder="次" min="1" style="width: 80px;" :readonly="readOnly"
                            v-model.number="packetData.timesLimitUpper" v-if="packetData.timesLimit">
                    </label>
                    <small class="form-text text-muted">单人邀请他人入群，奖励到达上限后，不再发放</small>
                </div>
            </div>
        </div>
        <footer>
            <button type="submit" class="save">保存</button>
        </footer>
    </form>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex';

import RedPacketAPI from '@/api/RedPacket';

export default {
    name: 'RedPacket',
    async created() {
        await this.getConfig();
    },
    data() {
        return {
            packetData: {
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
            },
            readOnly: false,
        };
    },
    methods: {
        async getConfig() {
            this.loading({
                text: '正在初始化',
            });
            try {
                const entry = await RedPacketAPI.getEnvelopesConfig({ groupId: this.$route.params.id });
                if (entry === null) {
                    this.packetData.status = 0;
                } else {
                    this.readOnly = true;
                    this.packetData = entry;
                }
                this.loaded(1500);
            } catch (err) {
                this.loading({
                    text: err,
                });
                this.loaded(1500);
            }
        },
        init() {
            this.packetData = {
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
        },
        async submit() {
            this.loading({
                text: '正在保存',
            });
            try {
                const message = await RedPacketAPI.redEnvelopesConfig({
                    ...this.packetData,
                    userId: this.userId,
                    groupId: this.$route.params.id,
                });
                this.loading({
                    text: message,
                });
                await this.getConfig();
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
        async $route() {
            this.readOnly = false;
            this.init();
            await this.getConfig();
        },
    },
    computed: {
        status: {
            get() {
                if (this.packetData.status === 0) {
                    return false;
                }
                return true;
            },
            set(val) {
                if (val === false) {
                    this.packetData.status = 0;
                } else {
                    this.packetData.status = 1;
                }
            },
        },
        statusStr() {
            let str = '';
            switch (this.packetData.status) {
            case 1:
                str = '正在进行';
                break;
            case 2:
                str = '已领完';
                break;
            case 3:
                str = '已关闭';
                break;
            default:
                break;
            }
            return str;
        },
        budget: {
            get() {
                if (this.packetData.budget === '') {
                    return '';
                }
                return this.packetData.budget / 100;
            },
            set(val) {
                this.packetData.budget = val * 100;
            },
        },
        amountRandomUpper: {
            get() {
                if (this.packetData.amountRandomUpper === '') {
                    return '';
                }
                return this.packetData.amountRandomUpper / 100;
            },
            set(val) {
                this.packetData.amountRandomUpper = val * 100;
            },
        },
        amountRandomLower: {
            get() {
                if (this.packetData.amountRandomLower === '') {
                    return '';
                }
                return this.packetData.amountRandomLower / 100;
            },
            set(val) {
                this.packetData.amountRandomLower = val * 100;
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
</style>
