const str  = 'abc';

// using recursion
let result = {}
const printSubstrings = (str, prefix, index, result) => {
    // p = '', p = a, p = ''
    // p = a => p = ab, p = a
    // p = '' => p = b, p = ''
    // p = ab => p = abc, p = ab
    if(index === str.length) return;

    const currentChar = str[index]
    const afterAdding = prefix + currentChar
    result[afterAdding] = 1

    // at every index, we have 2 choices, to include it or exclude it
    printSubstrings(str, '', index + 1, result); // if exclue a char, substring is broken, i.e it starts as empty string
    printSubstrings(str, afterAdding, index+1, result)
    return result
}
console.log(Object.keys(printSubstrings(str, '', 0, result)))

const printSubstringsIter = (str) => {
    const n = str.length;

    /**
     * abcd => 4 possible sub strings
     *  bcd => 3 possible substrings
     *   cd => 2 possible substrings
     *    d => 1 possible substring
     */
    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            console.log(str.slice(i, j+1))
        }
    }
}

printSubstringsIter('abcd')
