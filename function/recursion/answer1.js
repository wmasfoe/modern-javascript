// 递归
function sumTo(n) {
    if(n === 1) {
        return n
    } else {
        return n + sumTo(n-1)
    }
}
console.log( sumTo(100) ); // 5050

// 循环
function sumTo2(n) {
    let res = 0;
    while(n > 0) {
        res += n;
        n--;
    }
    return res;
}
console.log( sumTo2(100) ); // 5050

// 等差数列
function sumTo3(n) {
    const step = n + 1;
    let count = n / 2;
    if(n % 2 >= 1 && n > 2) {
        count++
    }
    return step * count
}
console.log( sumTo3(100) ); // 5050