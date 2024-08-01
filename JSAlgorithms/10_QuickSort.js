const QuickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    let pvoid = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i ++) {
        if (pvoid > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...QuickSort(left), pvoid, ...QuickSort(right)];
}

console.log(QuickSort([2, -1, 4, 5, 7]));