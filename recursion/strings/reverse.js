const str = 'DoBeforeYouDie';

const reverse = (str) => {
    if(str.length === 1) return str;

    const currentChar = str.charAt(0);
    const newStr = str.slice(1) 
    return reverse(newStr) + currentChar
}

console.log(reverse(str))