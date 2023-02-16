const fib = n => ({
    from: 1,
    till: n,

    [Symbol.iterator]() {
        let prev = 0, curr = 0;
        return {
            current: this.from,
            last: this.till,

            next() {

                if (this.current++ <= this.last) {

                    [prev, curr] = [curr, ((prev + curr) || 1)]
                    return {
                        value: prev,
                        done: false
                    }
                } else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
})

for (let num of fib(5)) {
    console.log(num) // 1, then 2, 3, 4, 5
}