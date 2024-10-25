let arr = [5, 6, 8, 7, 4, 6, 3, 9, 2, 1]

for (let x = 0; x <= arr.length - 2; x++) {

    for (let y = 0; y < arr.length; y++) {
        if (arr[y] > arr[y + 1]) {
            let temp = arr[y];
            arr[y] = arr[y + 1];
            arr[y + 1] = temp;
        }
    }
}

console.log(arr);
