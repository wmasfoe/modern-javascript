function fib(n) {
    if(n > 1) {
        return fib(n - 1) + fib(n - 2)
    }
    return n
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757