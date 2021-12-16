function rle(source) {
    let arrStr = Array.from(source);
    let newArr = [];
    let repeatCount = 1;
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i] !== arrStr[i + 1]) {
            newArr.push(arrStr[i])
            if (repeatCount !== 1) {
                newArr.push(''+repeatCount);
            }
            repeatCount = 1;
        } else {
            repeatCount++;
        }
    }
    return newArr.join('');
}

module.exports = rle;