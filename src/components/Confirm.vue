<template>
    <v-dialog v-model="open" :width="width" persistent>
        <v-card>
            <v-card-title class="headline">
                {{ title }}
            </v-card-title>

            <v-card-text>
                {{ message }}
            </v-card-text>

            <v-card-actions>
                <v-spacer/>

                <v-btn :disabled="cancelLoading" v-bind="okProps" color="error darken-1" text @click="dispatchPropsBtnFunction(onCancel)">
                    <v-progress-circular v-if="cancelLoading" indeterminate :width="1" size="16" style="margin-right: 10px;" /> {{ cancelText }}
                </v-btn>

                <v-btn :disabled="okLoading" v-bind="cancelProps" color="primary darken-1" text @click="dispatchPropsBtnFunction(onOk)">
                    <v-progress-circular v-if="okLoading" indeterminate :width="1" size="16" style="margin-right: 10px;" /> {{ okText }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>


<script> 

const isPromise = (obj) => !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'

/**
 * 您好，世界！
 * @displayName Confirm
 * */
export default {
    name: 've-confirm',
    props: {
        /**
         * 标题
         */
        title: String,


        /**
         * 信息文本
         * */
        message: String,

        /**
         * 消息框宽度
         * */
        width: {
            type: [String, Number],
            default: 'auto'
        },

        /**
         * 确定按钮文本
         * */
        okText: {
            type: String,
            default: '确定'
        },

        /**
         * 确定按钮props 请参考 v-btn props
         * */
        okProps: {
            type: Object,
            default() {
                return {}
            }
        },

        /**
         * 确定按钮点击回调，关闭前执行
         * */
        onOk: {
            type: Function,
            default: null
        },




        /**
         * 取消按钮文本
         * */
        cancelText: {
            type: String,
            default: '取消'
        },


        /**
         * 取消按钮props 请参考 v-btn props
         * */
        cancelProps: {
            type: Object,
            default() {
                return {}
            }
        },

        /**
         * 取消按钮点击回调，关闭前执行
         * */
        onCancel: {
            type: Function,
            default: null
        }


    },
    data() {
        return {
            open: false,
            okLoading: false,
            cancelLoading: false
        }
    },
    mounted() {
        this.open = true
    },
    watch: {
        open(nv) {
            if (!nv) {
                this.$destroy()
            }

            /**
             * 弹框显示变化。参数：true/开启 false/关闭
             * @type {Function} 
             */
            this.$emit('change', nv)
        }
    },
    methods: {

        closeAction() {
            this.open = false
            this.cancelLoading = false
            this.okLoading = false
        },

        dispatchPropsBtnFunction(fn) {

            const action = typeof fn === 'function' ? fn() : null

            if (isPromise(action)) {
                this.cancelLoading = true
                action.then(this.closeAction)
            } else {
                this.closeAction()
            }
        }
    }
}
</script>

 