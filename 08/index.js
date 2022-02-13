function sum(a, b){
    let sum = (+a + +b);

    function addNotSafe(bigA, bigB) {
        const aLength = bigA.length;
        const bLength = bigB.length;
        const maxLength = Math.max(aLength, bLength);

        let carry = 0; 
        let temp = 0;
        let sum = '';

        // складываем посимвольно, если получаем больше 10, записываем первый символ в carry, последний в temp
        for (let i = 1; i <= maxLength; i++) {
            let aChar = +bigA.charAt(aLength - i);
            let bChar = +bigB.charAt(bLength - i);

            temp = carry + aChar + bChar;
            carry = Math.floor(temp / 10);
            temp = temp % 10;

            // в последней итерации прибавляем остаток, если он есть, иначе записывем temp, затем конкатенируем с sum
            sum = (i === maxLength && carry) ? ('' + (carry * 10 + temp)) + sum : ('' + temp) + sum;
        }

        return sum;
    };

    return Number.isSafeInteger(sum) ? sum.toString() : addNotSafe(a, b);
}

module.exports = sum;