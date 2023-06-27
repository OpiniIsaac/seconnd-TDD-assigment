
function factorialize(num) {
    let number = 1;
    for (var i = number; i <= num; i++) {
        number *= i;
        // console.log(number);
    }
    return number;
}
module.exports = factorialize;