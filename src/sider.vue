<template>
    <div class="sider">
        <slot></slot>
        <button>close</button>
    </div>
</template>

<script>
    export default {
        name: "GuLuSider",

    }
</script>

<style scoped lang="scss">
    .sider {
        > button {
            position: absolute;
            top: 0;
            right: 0;
        }

    }
</style>