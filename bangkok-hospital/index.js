const fs = require('fs')
const path = require('path')
const generateDateTime = require('./dateTime')
const nonthaburi = require('./nonthaburi.json')
const bangkok = require('./bangkok.json')

const avaliableVaccines = [
	{
		vaccine: {
			$oid: '60c1872339fa5e71b0ca2fad',
		},
		amount: 5000,
		avaliable: 5000,
	},
	{
		vaccine: {
			$oid: '60c1872339fa5e71b0ca2fae',
		},
		amount: 5000,
		avaliable: 5000,
	},
	{
		vaccine: {
			$oid: '60c1872339fa5e71b0ca2faf',
		},
		amount: 10000,
		avaliable: 10000,
	},
	{
		vaccine: {
			$oid: '60c1872339fa5e71b0ca2fb0',
		},
		amount: 10000,
		avaliable: 10000,
	},
	{
		vaccine: {
			$oid: '60c1872339fa5e71b0ca2fb1',
		},
		amount: 5000,
		avaliable: 5000,
	},
]

const generateData = (locations, province_th, province_en) => {
	return locations.map(el => {
		const generatedDateTime = generateDateTime()
		const vaccineRandom = Math.floor(Math.random() * 3)
		const data = {
			name_th: el.name_th,
			name_en: el.name_en,
			dateTime: generatedDateTime,
			vaccines: [avaliableVaccines[0], avaliableVaccines[1], avaliableVaccines[2]],
			priority: el.priority,
			province_th,
			province_en,
		}

		for (let i = 1; i <= vaccineRandom; i++) {
			data.vaccines.push(avaliableVaccines[2 + i])
		}
		return data
	})
}

const allData = [
	...generateData(bangkok, 'กรุงเทพมหานคร', 'Bangkok'),
	...generateData(nonthaburi, 'นนทบุรี', 'Nonthaburi'),
]

fs.unlinkSync(path.resolve(__dirname, 'locations.json'))
fs.writeFileSync(path.resolve(__dirname, 'locations.json'), JSON.stringify(allData))
