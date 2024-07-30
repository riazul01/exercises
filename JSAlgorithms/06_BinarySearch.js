const BinarySearch = (arr, n) => {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let mid = Math.floor((i + j) / 2);

        if (arr[mid] === n) return mid;

        if (arr[mid] < n) {
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }
    return -1;
}

// recursive approach
const search = (arr, n, left, right) => {
    if (left > right) {
        return -1;
    }

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === n) {
        return mid;
    }

    if (arr[mid] < n) {
        return search(arr, n, mid + 1, right);
    } else {
        return search(arr, n, left, mid - 1);
    }
}

const recursiveBinarySearch = (arr, n) => {
    return search(arr, n, 0, arr.length - 1);
}

console.log(BinarySearch([-5, 2, 8, 15, 20], 15));
console.log(recursiveBinarySearch([-5, 2, 8, 15, 20], 20));