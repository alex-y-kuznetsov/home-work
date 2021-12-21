function rleDecode(source) {
    let sourceArr = Array.from(source);
    let newArr = [];
    let number = 1;
    for (let i = 0; i < sourceArr.length; i++) {
        if(!isNaN(+sourceArr[i])) {
            number = +sourceArr[i];
            continue;
        }
        for (let j = 0; j < number; j++) {
            newArr.push(sourceArr[i])
        }
    }
    return newArr.join('');
}

module.exports = rleDecode;