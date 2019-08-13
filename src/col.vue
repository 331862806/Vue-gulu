<template>
    <div class="col" :class="colClass" :style="colStyle" :class="phoneClass">
        <slot></slot>
    </div>
</template>

<script>
    let validator = (value) => {
        let keys = Object.keys(value);
        let valid = true;
        keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
                valid = false;
            }
        });
        return valid
    };
    export default {
        name: "GuLuCol",
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
            // phone: {type: Object, validator:validator(),},
            // phone: {type: Object, validator,},
            ipad: {type: Object, validator,},
            narrowPc: {type: Object, validator,},
            pc: {type: Object, validator,},
            widePc: {type: Object, validator,},
            // gutter: {
            //     type: [Number, String]
            // }
        },
        data() {
            return {
                gutter: 0
            }
        },
        methods: {
            createClasses(obj, str = '') {
                if (!obj) {
                    return []
                }
                let array = [];
                if (obj.span) {
                    array.push(`col-${str}${obj.span}`)
                }
                if (obj.offset) {
                    array.push(`offset-${str}${obj.offset}`)
                }
                return array;
            }
        },
        computed: {
            colClass() {
                let {span, offset, ipad, narrowPc, pc, widePc} = this;
                let createClasses = this.createClasses;
                return [
                    // 对象中的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
                    ...createClasses({span, offset}),
                    ...createClasses(ipad, 'ipad-'),
                    ...createClasses(narrowPc, 'narrow-pc-'),
                    ...createClasses(pc, 'pc-'),
                    ...createClasses(widePc, 'wide-pc-')
                ]
            }
            ,
            colStyle() {
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    .col {
        $class: col-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n/24)*100%;
            }
        }

        $class: offset-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }
        @media(min-width: 577px) {
            $class: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n/24)*100%;
                }
            }

            $class: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
        @media(min-width: 769px) {
            $class: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n/24)*100%;
                }
            }

            $class: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
        @media(min-width: 993px) {
            $class: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n/24)*100%;
                }
            }

            $class: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
        @media(min-width: 1201px) {
            $class: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n/24)*100%;
                }
            }

            $class: offset-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
    }
</style>