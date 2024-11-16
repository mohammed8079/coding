const str = 'AABAACAADAABAABA'
const pattern = 'AABA'

const lenOfStr = str.length
const lenOfPattern = pattern.length

for(let i = 0; i <= lenOfStr - lenOfPattern; i++){
    console.log({ i })
    let j = 0;
    while(str[i+j] == pattern[j] && j < lenOfPattern){
        j++
    }
    console.log({ i, j })
    if(j == pattern.length){
        console.log(`Pattern matches with substring starting at index: ${i}`)
    }
}