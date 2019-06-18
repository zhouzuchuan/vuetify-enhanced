<template>
    <v-snackbar v-model="open" :right="right" :left="left" :top="top" :bottom="bottom" :color="color">
        {{ message }}
    </v-snackbar>
</template>

<script>  

export default {
    name: 'toast',
    props: {
        title: String,
        message: String,
        type: String,
        color: String,
        right: Boolean,
        top: Boolean,
        bottom: Boolean,
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

function removeElement(el) {
    if (typeof el.remove !== 'undefined') {
        el.remove()
    } else {
        el.parentNode.removeChild(el)
    }
}
</script>