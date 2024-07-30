const LinearSearch = (arr, n) => {
    for (let i = 0; i <= n; i++) {
        if (arr[i] === n) {
            return i;
        }
    }
    return -1;
}

console.log(LinearSearch([4, 2, 9, 0, 7], 4));