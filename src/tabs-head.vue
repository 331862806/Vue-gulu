<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line" v-if="x"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>

</template>

<script>
    export default {
        name: "GuLuTabsHead",
        inject: ['eventBus'],
        data() {
            return {
                x: false
            }
        },
        mounted() {
            // 这里接收两个参数 有tabs的mounted 和item 的methods 触发
            this.eventBus.$on('update:selected', (item, vm) => {
                this.x=true
                // 新增一个 更新UI任务 到任务队列里面
                let { width, height, top, left } = vm.$el.getBoundingClientRect();
                this.$nextTick(()=>{
                    // 新增一个函数，放到任务队列里面
                    this.$refs.line.style.width = `${width}px`
                    this.$refs.line.style.transform = `translateX(${left}px)`
                })
            })
        }

    }
</script>

<style scoped lang="scss">
    $tab-height: 40px;
    $blue: blue;
    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start; //jfc:c  /* 从行首起始位置开始排列 */
        align-items: center; //ali:c
        position: relative;

        > .line {
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid $blue;
            transition: all 350ms;
        }

        > .actions-wrapper {
            margin-left: auto;
        }
    }
</style>