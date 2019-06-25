### 方法调用

```vue
<template>
    <v-btn @click="handleClick">Hello Button</v-btn>
</template>
<script>
export default {
    created() {
        console.log(this.$vuetify.theme.dark);
    },
    methods: {
        handleClick() {
            this.$veConfirm('是否确认', {
                left: true,
                color: 'error',
                top: true,
            });
        },
    },
};
</script>
```
