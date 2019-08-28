<template>
    <div class="tabs-head">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
    
</template>

<script>
    export default {
        name: "GuLuTabsHead",
        inject:['eventBus'],
        created() {
            this.$emit('update:selected','tabs-head 抛出的数据');

        }

    }
</script>

<style scoped lang="scss">
    .tabs-head{

    }
</style>