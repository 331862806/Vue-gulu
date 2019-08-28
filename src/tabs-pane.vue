<template>
    <div class="tabs-pane">
        <slot></slot>
    </div>
    
</template>

<script>
    export default {
        name: "GuLuTabsPane",
        inject:['eventBus'],
        created() {
            console.log("爷爷传给孙子的 eventBus");
            console.log(this.eventBus);
            this.eventBus.$on('update:selected',(name)=>{
                console.log(name);
            });
        }

    }
</script>

<style scoped lang="scss">
    .tabs-pane{

    }
</style>