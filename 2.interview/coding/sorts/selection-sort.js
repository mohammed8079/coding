arr = [ 64, 25, 12, 22, 11 ]

const selectionSort = (arr) => {
    console.log(arr)
    const n = arr.length;
    for(let i = n - 1; i >= 0; i--){
        let minIndex = 0
        let maxIndex = i;
        for(let j = 0; j <= i; j++){
            console.log(`${i}${j}`)
            // find minimum
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }

            // swap minValue to the end
            const minValue = arr[minIndex]
            arr[minIndex] = arr[maxIndex]
            arr[maxIndex] = minValue
        }
    }
    console.log(arr)
}

selectionSort(arr)