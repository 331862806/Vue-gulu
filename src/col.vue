<template>
    <div class="col" :class="colClass" :style="colStyle" :class="phoneClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuLuCol",
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
            phone: {
                type: Object,
                validator(value) {
                    let keys = Object.keys(value);
                    let valid = true;
                    keys.forEach(key => {
                        if (!['span', 'offset'].includes(key)) {
                            valid = false;
                        }
                    });
                    return valid
                }
            }
            // gutter: {
            //     type: [Number, String]
            // }
        },
        data() {
            return {
                gutter: 0
            }
        },
        computed: {
            colClass() {
                let {span, offset} = this;
                return [
                    span && `col-${span}`,
                    offset && `offset-${offset}`

                ]
            },
            colStyle() {
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                }
            },
            phoneClass() {

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

        @media (max-width: 576px) {
            $class: col-phone-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n/24)*100%;
                }
            }

            $class: offset-phone-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
    }


</style>