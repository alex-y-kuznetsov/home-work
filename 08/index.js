function sum(a, b){
    let sum = (+a + +b);
    function addNotSafe(a, b) {
        let arrA = Array.from(a);
        let arrB = Array.from(b);
        let result = [];
        for (let i = 0; i < arrA.length; i++) {
            result.push(+arrA[i] + +arrB[i]);
        }
        return result.join('');
    };

    return Number.isSafeInteger(sum) ? sum.toString() : addNotSafe(a, b)
}

module.exports = sum;