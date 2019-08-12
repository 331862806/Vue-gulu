<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuLuLayout",
        data() {
            return {
                layoutClass: {
                    hasSider: false
                },
            }
        },
        mounted() {
            // console.log(this.$children);
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'GuLuSider') {
                    this.layoutClass.hasSider = true;

                }
            })
        }
    }
</script>

<style scoped lang="scss">
    .layout {
        flex-grow: 1;
        display: flex;
        flex-direction: column; /* 将目标变成列*/

        &.hasSider {
            /*sider存在,变成一列*/
            flex-direction: row;
        }
    }
</style>