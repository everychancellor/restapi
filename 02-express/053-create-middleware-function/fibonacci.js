let a=[1, 1];
function fibonachi(n) {
    for (let i = 2; i<=n; i++){
        a[i] = a[i-1]+ a[i-2];
    }
    return a
};

module.exports.getFibonacciNumbers = fibonachi;