<template>
    <form id="add-mass" @submit.prevent="addMass">
        <div class="form-group row">
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
                <textarea class="form-control" id="texting" rows="3"
                    v-model="addMassData.text"></textarea>
            </div>
        </div>
        <div class="form-group row">
            <label for="picture" class="col-sm-2 col-form-label">群发图片&emsp;</label>
            <div class="col-sm-8">
                <label class="custom-file">
                    <input type="file" class="custom-file-input" @change="uploadImg">
                    <span class="custom-file-control">{{ addMassData.srcUrl ? addMassData.srcUrl : '选择图片' }}</span>
                </label>
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
        <div class="form-group row">
            <label for="texting" class="col-sm-2 col-form-label">定时设置&emsp;</label>
            <div class="col-sm-8">
                <input type="date" name="date" v-model="date" :disabled="!addMassData.isFixedTimeSend" />
                <input type="time" name="time" v-model="time" :disabled="!addMassData.isFixedTimeSend" />
            </div>
        </div>
        <footer>
            <button type="submit" class="save">保存</button>
        </footer>
    </form>
</template>

<script>
import { mapState } from 'vuex';

import UploadAPI from '@/api/Upload';
import GroupAPI from '@/api/Group';

export default {
    name: 'AddMNass',
    created() {
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
            time: '',
            selectAll: false,
        };
    },
    methods: {
        async uploadImg(e) {
            const file = e.target.files[0];
            const param = new FormData();
            param.append('fileUpload', file, file.name);
            UploadAPI.uploadImg(param).then((response) => {
                this.addMassData.srcUrl = `http://cdn.elephtribe.com/${response.data.entry[0]}`;
            }).catch((err) => {
                console.log(err);
            });
        },
        async addMass() {
            try {
                const message = await GroupAPI.addMass(this.addMassData);
                alert('新增成功');
                console.log(message);
            } catch (err) {
                console.log(err);
            }
        },
    },
    components: {
    },
    watch: {
        date() {
            this.addMassData.fixedTime = `${this.date} ${this.time}:00`;
        },
        time() {
            this.addMassData.fixedTime = `${this.date} ${this.time}:00`;
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
            let id = -1;
            this.robotList.forEach((item) => {
                if (item.uin !== this.addMassData.uin) {
                    return false;
                }
                id = item.id;
                return true;
            });
            return id;
        },
    },
};
</script>

<style scoped>
#add-mass {
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
        }
    }
}

.group {
    & .form-check-label:first-child {
        border-bottom: 1px solid rgb(234, 234, 234);
        padding-bottom: .5rem;
        margin-bottom: .5rem;
    }

    & .form-check-label {
        display: block;
    }
}
</style>
