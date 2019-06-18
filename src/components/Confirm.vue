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

                <v-btn :disabled="cancelLoading" v-bind="okProps" color="error darken-1" text @click="handleCancel">
                    <v-progress-circular v-if="cancelLoading" indeterminate :width="1" size="16" style="margin-right: 10px;" /> {{ cancelText }}
                </v-btn>

                <v-btn :disabled="okLoading" v-bind="cancelProps" color="primary darken-1" text @click="handleOk">
                    <v-progress-circular v-if="okLoading" indeterminate :width="1" size="16" style="margin-right: 10px;" /> {{ okText }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>


<script> 

const isPromise = (obj) => !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'


export default {
    name: 've-confirm',
    props: {
        title: String,
        message: String,
        okText: {
            type: String,
            default: '确定'
        },
        okProps: {
            type: Object,
            default() {
                return {}
            }
        },

        onOk: {
            type: Function,
            default: () => Promise.resolve()
        },
        onCancel: {
            type: Function,
            default: () => Promise.resolve()
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        cancelProps: {
            type: Object,
            default() {
                return {}
            }
        },
        width: {
            type: [String, Number],
            default: 'auto'
        },
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
        }
    },
    methods: {
        handleOk() {

            const action = this.onOk()

            if (isPromise(action)) {
                this.okLoading = true
                action.then(() => {
                    this.open = false
                    this.okLoading = false
                })
            } else {

                this.open = false
                this.okLoading = false
            }

        },
        handleCancel() {
            this.onCancel().then(() => {
                this.open = false
            })
        }
    }
}
</script>
