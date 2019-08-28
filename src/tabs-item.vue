<template>
    <div class="tabs-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>

</template>

<script>
    export default {
        name: "GuLuTabsItem",
        inject: ['eventBus'],
        data() { // 不需要用户传值，自身维护值
            return {
                active: false
            }
        },
        props: { // 需要用户(前端开发者)传值
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: String | Number,
                required: true
            }
        },
        computed:{
            classes(){
                return{
                    active:this.active
                }
            }
        },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name ? true : false;
            });
        },
        methods: {
            xxx() {
                this.eventBus.$emit('update:selected', this.name)
            }
        }

    }
</script>

<style scoped lang="scss">
    .tabs-item {
        flex-shrink: 0; /*指定了 flex 元素的收缩规则*/
        padding: 0 1em; /*用em就是不关心隔了多少像素，就关心字和字之间是否隔得开*/
        &.active{
            background: red;
        }
    }
</style>