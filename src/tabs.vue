<template>
    <div class="tabs">
        <slot></slot>
    </div>

</template>

<script>
    export default {
        name: "GuLuTabs",
        props: {
            selected: {
                type: String,
                required: true, // 必须输入 selected 这个值，如果没有输入也会在控制台显式报错
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) > -1;
                }
            }
        },
        created() {
            // this.$emit('update:selected','xxx')
        }
    }
</script>

<style scoped lang="scss">
    .tabs {

    }

</style>