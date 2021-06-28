const fs = require('fs')
const path = require('path')

const textData = fs.readFileSync(path.resolve(__dirname, 'data.txt'), 'utf8')

const provinceTextArray = textData.split('\n')

const provinceArray = provinceTextArray.map(el => {
	const regexArray = /.*'([ก-๛]*)'.*/gu.exec(el)
	return regexArray[1]
})

console.log(provinceArray)
