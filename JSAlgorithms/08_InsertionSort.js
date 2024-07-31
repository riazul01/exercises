const InsertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let numToInsert = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > numToInsert) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = numToInsert;
    }

    return arr;
}

console.log(InsertionSort([-2, 4, 1, 5, 2]));