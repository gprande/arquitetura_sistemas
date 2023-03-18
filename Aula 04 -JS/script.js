// const a = 2 + 7
// const b = 5
// console.log(a+b)

// function takesLong() {
//     const currentPlus2s = new Date().getTime() + 2000 //milisseconds
//     while (new Date().getTime() <= currentPlus2s); //no-op
//     const d = 8 + 4
//     return d
// }

// const a = 2 + 3
// const b = 5 + 9
// const d = takesLong()
// setTimeout(() => {
//     const d = takesLong()
//     console.log(d)
// }, 500)

// const e = 2 + a + b
// console.log(e)

const fs = require('fs')
const openFile = (fileName) => {
    const showContent = (error, content) => {
        if (error)
            console.log("Error: " + error)
        else
            console.log("Content: " + content.toString())
    }
    fs.readFile(fileName, showContent)
}
openFile('file.txt')