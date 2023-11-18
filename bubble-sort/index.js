function bubleSort(arr) {
    let replaced = true
    while (replaced) {
        replaced = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const element = arr[i];
                replaced = true
                arr[i] = arr[i + 1]
                arr[i + 1] = element
            }

        }
    }
    return arr
}