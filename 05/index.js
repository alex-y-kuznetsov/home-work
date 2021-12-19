function rleDecode(source) {
    let sourceArr = Array.from(source);
    let newArr = [];
    sourceArr.forEach((item, index, arr) => {
        let number = parseInt(item);
        let nextItem = arr[index + 1];
        if (!isNaN(number) && isNaN(parseInt(nextItem)) && number !== 0) {
            for (let i = 0; i < number; i++) {
                newArr.push(nextItem);
            }
        };
    });
    if (!sourceArr.find(item => !isNaN(parseInt(item)))) {
        newArr = sourceArr;
    };
    console.log(newArr.join(''));
    return newArr.join('');
}

module.exports = rleDecode;