const Factorial = (n) => {
    let res = 1;
    while (n) {
        res *= n;
        n--;
    }
    return res;
}

const recursiveFactorial = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * recursiveFactorial(n - 1);
}

console.log(Factorial(5));
console.log(recursiveFactorial(5));