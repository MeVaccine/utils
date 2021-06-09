const fs = require('fs')
const path = require('path')
const generateDateTime = require('./dateTime')
const nonthaburi = require('./nonthaburi.json')
const bangkok = require('./bangkok.json')

const avaliableVaccines = [
	{
		name: 'Sinovac',
		amount: 5000,
		avaliable: 5000,
	},
	{
		name: 'Sinopharm',
		amount: 5000,
		avaliable: 5000,
	},
	{
		name: 'Oxford–AstraZeneca',
		amount: 10000,
		avaliable: 10000,
	},
	{
		name: 'Pfizer-BioNTech',
		amount: 10000,
		avaliable: 10000,
	},
	{
		name: 'Moderna',
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
