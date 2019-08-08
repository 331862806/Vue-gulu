<template>
    <div class="sider">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuLuSider",

    }
</script>

<style scoped lang="scss">
    .sider{
        border: 1px solid black;
        height: 100px;
    }
</style>