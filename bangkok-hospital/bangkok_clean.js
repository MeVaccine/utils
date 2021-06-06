const fs = require('fs')
const path = require('path')

const rawBangkok = fs.readFileSync(path.resolve(__dirname, 'bangkok.txt'), 'utf-8')
const hospitalName = rawBangkok.split('<td>')

const data = hospitalName.map(el => {
	return {
		name_th: el,
		name_en: 'Dummy',
		priority: 2,
	}
})

fs.writeFileSync(path.resolve(__dirname, 'bangkok.json'), JSON.stringify(data))
