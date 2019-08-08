<template>
    <div class="header">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuLuHeader"
    }
</script>

<style scoped lang="scss">
    .header{
        border: 1px solid yellow;
        height: 100px;
    }
</style>