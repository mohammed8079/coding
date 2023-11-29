/**
 n = 3
 print:
 * * *
 * * *
 * * *
 
 n = 4
 * * * *
 * * * *
 * * * *
 * * * *
 */

function nForest(n) {
    let pattern = '';
    for(let i = 0; i<n; i++) {
        for(let j = 0; j<n; j++) {
            pattern += '* '
        }
        pattern += '\n'
    }
    console.log(pattern)
}

nForest(3);
nForest(4);