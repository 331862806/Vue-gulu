<template>
    <div class="tabs">
        <slot></slot>
    </div>

</template>

<script>
    import Vue from 'vue'

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
        data() {
            return{
                eventBus: new Vue
            }
        },
        provide() {
            // 事件中心，订阅发布
            return {
                eventBus: this.eventBus
            }
        }
        ,
        created() {
            // this.$emit('update:selected','这是一个 this.$emit 出来的数据');
            // this.eventBus.$emit('update:selected','这是一个 this.eventBus.$emit 出来的数据');
            // this.$emit('update:selected','xxx')
        }
    }
</script>

<style scoped lang="scss">
    .tabs {

    }

</style>