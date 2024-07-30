const BubbleSort = (arr) => {
    let len = arr.length;
    let swapped = false;

    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        len--;
    } while (swapped);

    return arr;
}

console.log(BubbleSort([-5, 2, -2, 1, 4]));