function toHex(value) {
    const notation = 16;
    const skip = 10;
    const codes = ['a', 'b', 'c', 'd', 'e', 'f'];
    let base = value; 
    let remainder = 0;
    let remainders = [];
    while (base > notation) {
        remainder = base % notation;
        base = Math.trunc(base / notation);
        remainder >= skip ? remainders.unshift(codes[remainder - skip]) : remainders.unshift(remainder);
    };
    remainders.unshift(base);
    return remainders.join('');
}

module.exports = toHex;