
function factorialize(num) {
    if (num === 0 || num === 1)
        return 1;
    let number = 1;
    for (var i = number; i <= num; i++) {
        number *= i;
        // console.log(number);
    }
    return number;
}
module.exports = factorialize;