<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <svg v-if="icon" class="icon" aria-hidden="true">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        // props: ['icon', 'iconPosition']
        props: {
            icon:{},
            iconPosition:{
                type:String,
                default:'left',
                validator(value){
                    return value === 'left' || value === 'right';
                }
            }
        }
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
        display: inline-flex;
        justify-content: center;
        align-items: center;
        /*vertical-align: top;*/
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
            margin-right: .1em;
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
    }


</style>