<template>
    <button class="g-button">按钮</button>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .g-button {
        font-size: inherit;
        height: var(--button-height);
        padding: 0 1em; /*没有写width*/
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {background-color: var(--button-active-bg)}

        /*获取button的焦点,外面的连线(轮廓)为空,去掉选中的时候就会出现的蓝色框*/
        &:focus {outline: none;}
    }



</style>