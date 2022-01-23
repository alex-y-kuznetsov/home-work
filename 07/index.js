function rgb(r, g, b){
    function getHex(input) {
        if (input <= 0) { return '00' };
        if (input > 0 && input <= 16) { return '0' + input.toString(16) };
        if (input > 255) { return 'FF' };
        return input.toString(16);
    }
    return getHex(r).toUpperCase() + getHex(g).toUpperCase() + getHex(b).toUpperCase();
}


module.exports = rgb;