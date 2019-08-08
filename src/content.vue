<template>
    <div class="content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuLuContent"
    }
</script>

<style scoped lang="scss">
    .content{
        flex-grow: 1;/*占据剩余空间*/
    }
</style>