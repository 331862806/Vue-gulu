<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <g-icon class="icon" v-if="icon && !loading " :name="icon"></g-icon>
        <g-icon class="loadding icon" v-if="loading" name="loading"></g-icon>
        <div class="content">
            <slot/>
        </div>
    </button>
</template>

<script>
    import Icon from './icon'

    export default {
        components:{
            'g-icon':Icon
        },
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return value === 'left' || value === 'right';
                }
            }
        }
    }
</script>

<style lang="scss">
    .g-button {
        @keyframes spin {
            0% {
                transform: rotate(0deg)
            }
            100% {
                transform: rotate(360deg)
            }
        }

        font-size: inherit;
        height: var(--button-height);
        padding: 0 1em; /*没有写width*/
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        /*vertical-align: top;*/
        /*相邻几个内元素上下不对齐统一加，具体看简书的button*/
        vertical-align: middle;

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg)
        }

        /*获取button的焦点,外面的连线(轮廓)为空,去掉选中的时候就会出现的蓝色框*/
        &:focus {
            outline: none;
        }

        > .icon {
            order: 1;
            margin-right: 0.1em;
        }

        > .content {
            order: 2;
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: 0.1em;
            }

            > .content {
                order: 1;
            }
        }

        .loadding {
            animation: spin 1s infinite linear;
        }
    }


</style>