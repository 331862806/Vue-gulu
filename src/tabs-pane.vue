<template>
    <div class="tabs-pane" :class="classes" :data-name="name" v-if="active">
        <slot></slot>
    </div>

</template>

<script>
    export default {
        name: "GuLuTabsPane",
        inject: ['eventBus'],
        props: {
            name: {
                type: String | Number,
                required: true
            }
        },
        computed: {
            classes() {
                return {
                    active: this.active
                }
            }
        },
        data() {
            return {
                active: false
            }
        },
        created() {
            if (this.eventBus) {
                this.eventBus.$on('update:selected', (name) => {
                    // console.log(`pane ${this.name}被选中了`);
                    this.active = name === this.name ? true : false;
                });
            }
        }

    }
</script>

<style scoped lang="scss">
    .tabs-pane {
        padding: 1em;
        &.active{
        }
    }
</style>