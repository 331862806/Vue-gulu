<template>
    <div class="tabs-item" @click="onClick" :class="classes" :data-name=name>
        <slot></slot>
    </div>

</template>

<script>
    export default {
        name: "GuLuTabsItem",
        inject: ['eventBus'],
        data() { // 不需要用户传值，自身维护值
            return {
                active: false,
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
        computed: {
            classes() {
                return {
                    active: this.active,
                    disabled: this.disabled
                }
            }
        },
        created() {
            if (this.eventBus) {
                this.eventBus.$on('update:selected', (name) => {
                    this.active = name === this.name ? true : false;
                });
            }
        },
        methods: {
            onClick() {
                if (this.disabled) {return}
                this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
                this.$emit('click')
            }
        }

    }
</script>

<style scoped lang="scss">
    $blue: blue;
    $disabled-text-color: grey;
    .tabs-item {
        flex-shrink: 0; /*指定了 flex 元素的收缩规则*/
        padding: 0 1em; /*用em就是不关心隔了多少像素，就关心字和字之间是否隔得开*/
        cursor: pointer; /*鼠标样式*/
        //c:p
        height: 100%;
        display: flex;
        align-items: center;

        &.active {
            color: $blue;
            font-weight: bold;
        }

        &.disabled {
            color: $disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>