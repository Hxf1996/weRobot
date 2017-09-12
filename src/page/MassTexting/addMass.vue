<template>
    <form id="add-mass" @submit.prevent="addMass">
        <div class="form-group row" v-if="false">
            <label for="texting" class="col-sm-2 col-form-label">选择机器人</label>
            <div class="col-sm-8">
                <div class="form-check form-check-inline"
                    v-for="one in robotList" :key="one.id">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="robot" :value="one.uin"
                            v-model="addMassData.uin">{{ one.nickname }}
                    </label>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <label for="texting" class="col-sm-2 col-form-label">群发文字&emsp;</label>
            <div class="col-sm-8">
                <textarea class="form-control" id="texting" rows="3" maxlength="1000"
                    v-model="addMassData.text"></textarea>
            </div>
        </div>
        <div class="form-group row">
            <label for="picture" class="col-sm-2 col-form-label">群发图片&emsp;</label>
            <div class="col-sm-8">
                <label class="upload">
                    <input type="file" class="upload-input" @change="uploadImg">
                    <span class="upload-control" v-if="!isUpload && !addMassData.srcUrl">+</span>
                    <span class="loading" v-if="isUpload"></span>
                    <img class="upload-img" v-if="addMassData.srcUrl" :src="addMassData.srcUrl" alt="群发图片">
                </label>
                <span class="reUpload" v-if="addMassData.srcUrl">点击重传图片</span>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">发送群&emsp;&emsp;</label>
            <div class="col-sm-4 group">
                <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" :value="true" v-model="selectAll">全选
                </label>
                <label class="form-check-label" v-for="one in groupList[seleteId]">
                    <input class="form-check-input" type="checkbox" :value="one.id"
                        v-model="addMassData.toGroupId">{{ one.nickname }}
                </label>
            </div>
        </div>
        <div class="form-group row">
            <label for="texting" class="col-sm-2 col-form-label">发送时间&emsp;</label>
            <div class="col-sm-8">
                <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="isFixedTimeSend" :value="false"
                            v-model="addMassData.isFixedTimeSend"> 立即发送
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="isFixedTimeSend" :value="true"
                            v-model="addMassData.isFixedTimeSend"> 定时发送
                    </label>
                </div>
            </div>
        </div>
        <transition name="slide">
            <div class="form-group row" v-show="addMassData.isFixedTimeSend">
                <label for="texting" class="col-sm-2 col-form-label">定时设置&emsp;</label>
                <div class="col-sm-8">
                    <datepicker class="date"
                        v-model="date" language="ch" min="2015-01-01"></datepicker>
                    <timepicker class="time"
                        format="HH:mm:ss" v-model="time"></timepicker>
                </div>
            </div>
        </transition>
        <footer>
            <button type="submit" class="save"
                :disabled="isSave">保存</button>
        </footer>
    </form>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

import Util from '@/libs/util';

import Datepicker from '@/components/common/Datepicker';
import Timepicker from '@/components/common/Timepicker';

import UploadAPI from '@/api/Upload';
import GroupAPI from '@/api/Group';

export default {
    name: 'AddMNass',
    created() {
        this.date = Util.formatDate(new Date().getTime(), 'YYYY-MM-dd');
    },
    data() {
        return {
            addMassData: {
                uin: '',
                text: '',
                srcUrl: '',
                toGroupId: [],
                isFixedTimeSend: false,
                fixedTime: '',
            },
            date: '',
            time: {
                HH: '00',
                mm: '00',
                ss: '00',
            },
            selectAll: false,
            isUpload: false,
        };
    },
    methods: {
        async uploadImg(e) {
            const file = e.target.files[0];
            if (!(/(.*)\.(jpg|gif|jpeg|png)$/.test(file.name))) {
                this.loading({
                    text: '请上传图片',
                });
                this.loaded(1500);
                return false;
            }
            if (file.size > 8 * 1000 * 1000) {
                this.loading({
                    text: '图片最大8M',
                });
                this.loaded(1500);
                return false;
            }
            this.isUpload = true;
            const param = new FormData();
            param.append('fileUpload', file, file.name);
            UploadAPI.uploadImg(param).then((response) => {
                this.isUpload = false;
                this.addMassData.srcUrl = `http://cdn.elephtribe.com/${response.data.entry[0]}`;
            }).catch((err) => {
                this.loading({
                    text: err,
                });
                this.loaded(1500);
            });
            return true;
        },
        async addMass() {
            this.loading({
                text: '正在新增',
            });
            try {
                const message = await GroupAPI.addMass({
                    ...this.addMassData,
                    robotId: this.robotList[0].id,
                });
                this.loading({
                    text: message,
                });
                this.loaded(1500);
                this.addMassData = {
                    uin: '',
                    text: '',
                    srcUrl: '',
                    toGroupId: [],
                    isFixedTimeSend: false,
                    fixedTime: '',
                };
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
    components: {
        Datepicker,
        Timepicker,
    },
    watch: {
        date() {
            this.addMassData.fixedTime = `${this.date} ${this.time.HH}:${this.time.mm}:${this.time.ss}`;
        },
        time() {
            this.addMassData.fixedTime = `${this.date} ${this.time.HH}:${this.time.mm}:${this.time.ss}`;
        },
        selectAll() {
            if (this.selectAll) {
                this.addMassData.toGroupId = this.groupList[this.seleteId].map(item => item.id);
            } else {
                this.addMassData.toGroupId = [];
            }
        },
    },
    computed: {
        ...mapState('Robot', {
            robotList: 'list',
            groupList: 'groupList',
        }),
        seleteId() {
            // let id = -1;
            // this.robotList.forEach((item) => {
            //     if (item.uin !== this.addMassData.uin) {
            //         return false;
            //     }
            //     id = item.id;
            //     return true;
            // });
            if (this.robotList[0]) {
                return this.robotList[0].id;
            }
            return false;
        },
        isSave() {
            if ((this.addMassData.toGroupId.length === 0)) {
                return true;
            }
            if ((this.addMassData.text === '') && (this.addMassData.srcUrl === '')) {
                return true;
            }
            return false;
        },
    },
};
</script>

<style scoped>
#add-mass {
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

.group {
    max-height: 200px;
    overflow-y: scroll;

    & input {
        margin-right: 7px;
    }

    & .form-check-label:first-child {
        border-bottom: 1px solid rgb(234, 234, 234);
        padding-bottom: .5rem;
        margin-bottom: .5rem;
    }

    & .form-check-label {
        display: block;
    }
}

.date {
    width: 150px;
    display: inline-block;
    height: 35px;
    float: left;
    margin-right: 1rem;
}

.time {
    float: left;
}

.upload {
    width: 140px;
    height: 140px;
    background-color: #b3b3b3;
    display: block;
    position: relative;
    overflow: scroll;

    & .upload-input {
        width: 140px;
        height: 140px;
        opacity: 0;
    }

    & .upload-control {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 4rem;
        height: 4rem;
        font-size: 2.4rem;
        margin-top: -2rem;
        margin-left: -2rem;
        text-align: center;
    }

    & .upload-img {
        position: absolute;
        width: 100%;
        height: auto;
        top: 0;
    }

    & .loading {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -18px;
        margin-left: -30px;
    }
}

.reUpload {
    width: 140px;
    position: absolute;
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: .8rem;
    bottom: 0;
    text-align: center;
    background-color: #d8d8d8;
}
</style>
