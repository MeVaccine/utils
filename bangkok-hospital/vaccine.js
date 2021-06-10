const fs = require('fs')
const path = require('path')

const avaliableVaccines = [
	{
		name: 'Sinovac',
		minAge: 18,
		maxAge: 60,
	},
	{
		name: 'Sinopharm',
		minAge: 18,
		maxAge: 60,
	},
	{
		name: 'Oxford–AstraZeneca',
		minAge: 18,
	},
	{
		name: 'Pfizer-BioNTech',
		minAge: 12,
	},
	{
		name: 'Moderna',
		minAge: 18,
	},
]

fs.writeFileSync(path.resolve(__dirname, 'vaccines.json'), JSON.stringify(avaliableVaccines))
