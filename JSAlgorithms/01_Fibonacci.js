const Fibonacci = (n) => {
    let fibo = [0, 1];

    for (let i = 2; i < n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    return fibo;
}

const recursiveFibonacci = (n) => {
    if (n < 2) {
        return n;
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(Fibonacci(10));
console.log(recursiveFibonacci(10));