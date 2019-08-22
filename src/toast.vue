<template>
    <div class="toast" ref="wrapper" :class="toastClasses">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>

<script>
    export default {
        name: "GuLuToast",
        data() {
            return {}
        },
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 50
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '关闭', callback: undefined
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    //includes 不支持ie ,换用indexOf 查看value在数组中的位置 当大于-1的时候说明存在这个数
                    return ['top', 'bottom', 'middle'].indexOf(value) > -1
                }
            }
        },
        computed: {
            toastClasses() {
                return {
                    [`position-${this.position}`]: true
                }
            }
        },
        mounted() {
            this.execAutoClose();
            this.updateStyles();
        },
        methods: {
            updateStyles() {
                //通过获取父亲的高度来设置自身的高度，使得有高度就可以100%
                this.$nextTick(() => {
                    // console.log(this.$refs.wrapper.getBoundingClientRect().height);
                    this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
                })
            },
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },

            close() {
                this.$el.remove(); /*将元素从页面中删掉*/

                this.$emit('close')
                this.$destroy(); /*组件销毁*/
            },
            log() {
                console.log('测试一下')
            },
            onClickClose() {
                this.close();
                //防御性编程
                if (this.closeButton && typeof this.closeButton.callback === "function") {
                    this.closeButton.callback(this) /*调用,这里面的this ===toast*/
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    @keyframes fade {
        0% {opacity: 0; transform: translateY(100%);}
        100% {opacity: 1;transform: translateY(0%);}
    }

    .toast {
        animation: fade 1s;
        font-size: $font-size;
        min-height: $toast-min-height;
        line-height: 1.8;
        color: white;
        position: fixed;
        display: flex;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
        padding: 0 16px;
        left: 50%;

        > .message {
            padding: 8px 0;
        }

        > .close {
            padding-left: 16px;
            flex-shrink: 0;
        }

        > .line {
            /*因为上面设置了最小高度，所以这里面的高度也不生效了，解决方法在js里面的 this.$nextTick()*/
            height: 100%;
            border-left: 1px solid #666666;
            margin-left: 16px;
        }

        &.position-top {
            top: 0;
            transform: translateX(-50%);

        }

        &.position-bottom {
            bottom: 0;
            transform: translateX(-50%);
        }

        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }


</style>