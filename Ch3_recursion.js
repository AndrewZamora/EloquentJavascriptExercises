function isEven(num) {
    let result;
    if (num < 0) {
        result = num * -1;
    } else {
        result = num - 2;
    }
    if (result === 0) { return 'even' };
    if (result === 1) { return 'odd' };
    return isEven(result);
}

console.log(isEven(10));