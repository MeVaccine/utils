const fs = require('fs')
const path = require('path')

const textData = fs.readFileSync(path.resolve(__dirname, 'data.txt'), 'utf8')

const provinceTextArray = textData.split('\n')

const provinceArray = provinceTextArray.map(el => {
	const regexArray = /.*'([ก-๛]*)', '(.*)'.*/gu.exec(el)
	return { TH: regexArray[1], EN: regexArray[2] }
})

// console.log(JSON.stringify(provinceArray))

fs.writeFileSync(path.resolve(__dirname, 'province.json'), JSON.stringify(provinceArray))
