### 方法调用

```vue
<template>
    <div>
        <v-btn @click="handleError" color="error">error</v-btn>
        <v-btn @click="handleDefault" color="primary">default</v-btn>
    </div>
</template>
<script>
export default {
    methods: {
        handleDefault() {
            this.$veToast('我是个提示', {
                left: true,
                top: true,
            });
        },
        handleError() {
            this.$veToast.error('我是个错误提示!', {
                left: true,
                top: true,
            });
        },
    },
};
</script>
```
