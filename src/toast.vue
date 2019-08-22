<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast">
            <div class="message">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
        </div>
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
                type: [Boolean, Number],
                default: 5,
                validate(value) {
                    return value === false || typeof value === 'number';
                }

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
                // <strong>你好</strong>
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
            // console.log('mounted');
            // console.log(this.autoCloseDelay);
            this.execAutoClose();
            this.updateStyles();
        },
        methods: {
            updateStyles() {
                //通过获取父亲的高度来设置自身的高度，使得有高度就可以100%
                this.$nextTick(() => {
                    // console.log(this.$refs.toast.getBoundingClientRect().height);
                    this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
                })
            },
            execAutoClose() {
                if (this.autoClose) {
                    // console.log(`setTimeout ${this.autoCloseDelay}`);
                    setTimeout(() => {
                        this.close()
                    }, this.autoClose * 1000)
                }
            },

            close() {
                this.$el.remove(); /*将元素从页面中删掉*/
                this.$emit('close');
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
    $animation-duration: 300ms;
    @keyframes slide-up {
        0% {opacity: 0; transform: translateY(100%);}
        100% {opacity: 1;transform: translateY(0%);}
    }

    @keyframes slide-down {
        0% {opacity: 0; transform: translateY(-100%);}
        100% {opacity: 1;transform: translateY(0%);}
    }

    @keyframes fade-in {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

    .wrapper {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);

        &.position-top {
            top: 0;

            .toast {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: slide-down $animation-duration;
            }
        }

        &.position-bottom {
            bottom: 0;

            .toast {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: slide-up $animation-duration;
            }
        }

        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);

            .toast {
                animation: fade-in $animation-duration;
            }
        }
    }

    .toast {
        font-size: $font-size;
        min-height: $toast-min-height;
        line-height: 1.8;
        color: white;
        display: flex;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
        padding: 0 16px;

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
    }


</style>