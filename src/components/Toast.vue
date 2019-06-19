<template>
    <v-snackbar v-model="open" :right="right" :left="left" :top="top" :bottom="bottom" :color="color">
        {{ message }}
    </v-snackbar>
</template>

<script>  

export default {
    name: 'toast',
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
         * 框体颜色 参考 vuetify  v-snackbar 组件
         * */
        color: String,



        /**
         * 是否右边 参考 vuetify  v-snackbar 组件
         * */
        right: Boolean,

        /**
         * 是否上边 参考 vuetify  v-snackbar 组件
         * */
        top: Boolean,

        /**
         * 是否下边 参考 vuetify  v-snackbar 组件
         * */
        bottom: Boolean,

        /**
         * 是否左边 参考 vuetify  v-snackbar 组件
         * */
        left: Boolean,
    },
    data() {
        return {
            open: false,
        }
    },
    watch: {
        open: function (val) {
            if (!val) {
                this.close()
            }
        },
    },
    // beforeMount() {
    //     document.querySelector('body').appendChild(this.$el)
    // },
    mounted() {
        this.open = true
    },
    methods: {
        close() {
            if (this.open) this.open = false
            setTimeout(() => {
                this.$options.onClose && this.$options.onClose()
                this.$destroy()
                // removeElement(this.$el)
            }, 300)
        },
    },
}

</script>