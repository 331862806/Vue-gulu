let length = 10

function fn() {
    console.log(this.length)
}

let obj = {
    length: 5,
    method(fn) {
        fn.call(arguments)
    }
}

obj.method(fn, 1)
