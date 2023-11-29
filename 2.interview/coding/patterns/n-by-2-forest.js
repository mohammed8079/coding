// position can be lower, upper, transposeLower, transposeUpper
function printable(n, i, j, position) {
    if(position === 'all') {
        return true;
    } else if(position === 'lower' && i > j) {
        return true;
    } else if(position === 'upper' && j > i) {
        return true;
    } else if(position === 'transposeLower' && (i + j) > n - 1) {
        return true
    } else if(position === 'transposeUpper' && (i + j) < n - 1) {
        return true;
    }
    return false;
}

function nBY2Forest(n, position) {
    let pattern = '';
    for(let i = 0; i<n; i++) {
        for(let j = 0; j<n; j++) {
            if(printable(n, i, j, position)) {
                pattern += '* '
            } else {
                pattern += '  '
            }
        }
        pattern += '\n'
    }
    console.log(pattern)
};

nBY2Forest(6, 'all');
nBY2Forest(6, 'lower');
nBY2Forest(6, 'upper');
nBY2Forest(6, 'transposeLower');
nBY2Forest(6, 'transposeUpper');