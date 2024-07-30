const IsPowerOfTwo = (n) => {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}

const IsPowerOfTwoBitwise = (n) => {
    if (n < 1) {
        return false;
    }
    return (n & (n - 1)) === 0;
}

console.log(IsPowerOfTwo(15));
console.log(IsPowerOfTwoBitwise(16));