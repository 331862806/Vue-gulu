<template>
    <div class="row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuLuRow",
        props: {
            gutter: {
                type: [Number, String]
            }
        },
        created() {
            // 没有儿子，时间差
            // console.log(this.$children);
            console.log("row created")
        },
        mounted() {
            // 有儿子
            // console.log(this.$children);
            console.log("row mounted");
            console.log(this.$children);
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter;
            })
        }
    }

    // var div = document.createElement('div')
    // var childDiv = document.createElement('div')
    // div.appendChild(childDiv)
    // document.body.appendChild(div)
</script>

<style scoped lang="scss">
    .row {
        display: flex;
    }
</style>