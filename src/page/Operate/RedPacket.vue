<template>
    <form id="red-package" @submit.prevent="">
        <div class="form-group row">
            <label for="status" class="col-sm-2 col-form-label">功能状态&emsp;&emsp;</label>
            <div class="col-sm-8">
                <input type="checkbox" class="toggle-button" id="status">
            </div>
        </div>
        <div class="form-group row">
            <label for="budget" class="col-sm-2 col-form-label">群内红包预算</label>
            <div class="col-sm-2">
                <input type="text" class="form-control" id="budget" placeholder="元">
            </div>
        </div>
        <div class="form-group row">
            <label for="num" class="col-sm-2 col-form-label">红包发放个数</label>
            <div class="col-sm-2">
                <input type="text" class="form-control" id="num" placeholder="个">
            </div>
        </div>
        <div class="form-group row money">
            <label class="col-sm-2 col-form-label">拉新红包金额</label>
            <div class="col-sm-8">
                <div class="form-check">
                    <label class="form-check-label" for="fix">
                        <input class="form-check-input" type="radio" name="type" id="fix">固定红包
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label" for="random">
                        <input class="form-check-input" type="radio" name="type" id="random">随机红包
                        <input type="text">
                        <input type="text">
                    </label>
                </div>
            </div>
        </div>
        <footer>
            <button type="submit" class="save">保存</button>
        </footer>
    </form>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'RedPacket',
    created() {
    },
    data() {
        return {
        };
    },
    methods: {
        ...mapMutations([
            'loading',
        ]),
    },
    computed: {
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

.random {
}

.toggle-button {
    margin-top: 5px;
}
</style>
