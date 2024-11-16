const arr = [1, 2, 3]

const printPermuations = (arr = arr, index = 0, permutations = []) => {
    if(index === 3){
        console.log(permutations)
        return
    }

    printPermuations(arr, index + 1, permutations)

    const result = [...permutations, arr[index]]
    printPermuations(arr, index + 1, result)
}

printPermuations(arr, 0, [])