function printNumbersByInterVal(from, to) {
    const timerId = setInterval(() => {
        console.log(from);
        if(from === to) {
            clearInterval(timerId)
        }
        from++
    }, 1000);
}
function printNumbersByTimeout(from, to) {
    const timerId = setTimeout(function callback() {
        console.log(from);
        if(from !== to) {
            setTimeout(callback, 1000)
        } else {
            clearTimeout(timerId)
        }
        from++
    }, 1000)
}
printNumbersByTimeout(1, 10)
