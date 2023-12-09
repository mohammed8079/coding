function displaySquares(n, squareSize) {
    // let pattern = ''
    // for(let i = 0; i<n; i++){
    //     for(let j=0; j<n; j++){
    //         if(i == 0 || i == n -1 || j == 0 || j == n - 1){
    //             pattern += `${i}${j} `
    //         } else {
    //             pattern += `   `
    //         }
    //     }
    //     pattern += '\n'
    // }
    for(let i = 0; i<n; i++){
        let battern = ''
        for(let j=0; j<n; j++){
            if(i < n-1 && j < n-1){
                battern += `${i}${j}--`
                battern += `${i}${j+1}\n`
                battern += `${i+1}${j}--`
                battern += `${i+1}${j+1}\n`
            }
            console.log(battern)
            battern = ''
        }
        battern = ' \n'
    }
}

displaySquares(5, 2)