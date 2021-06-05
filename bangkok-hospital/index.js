const fs = require("fs")
const path = require("path")
const generateDateTime = require("./dateTime")
const nonthaburi = require("./nonthaburi.json")

const rawBangkok = fs.readFileSync(
	path.resolve(__dirname, "bangkok.txt"),
	"utf-8"
)

const hospitalName = rawBangkok.split("<td>")
const avaliableVaccines = [
	{
		name: "Sinovac",
		amount: 5000
	},
	{
		name: "Sinopharm",
		amount: 5000
	},
	{
		name: "Oxford–AstraZeneca",
		amount: 10000
	},
	{
		name: "Pfizer-BioNTech",
		amount: 10000
	},
	{
		name: "Moderna",
		amount: 5000
	}
]

const bangkokHospital = hospitalName.map((el) => {
	const generatedDateTime = generateDateTime()
	const vaccineRandom = Math.floor(Math.random() * 3)
	const returnData = {
		name_th: el,
		name_en: "Dummy",
		dateTime: generatedDateTime,
		vaccines: [
			avaliableVaccines[0],
			avaliableVaccines[1],
			avaliableVaccines[2]
		],
		priority: 2
	}
	for (let i = 1; i <= vaccineRandom; i++) {
		returnData.vaccines.push(avaliableVaccines[2 + i])
	}
	return returnData
})

const nonthaburiHospital = nonthaburi.map((el) => {
	const generatedDateTime = generateDateTime()
	const vaccineRandom = Math.floor(Math.random() * 3)
	const data = {
		name_th: el.name_th,
		name_en: el.name_en,
		dateTime: generatedDateTime,
		vaccines: [
			avaliableVaccines[0],
			avaliableVaccines[1],
			avaliableVaccines[2]
		],
		priority: el.priority
	}

	for (let i = 1; i <= vaccineRandom; i++) {
		data.vaccines.push(avaliableVaccines[2 + i])
	}
	return data
})

const allData = [...bangkokHospital, ...nonthaburiHospital]

fs.unlinkSync(path.resolve(__dirname, "hospitals.json"))
fs.writeFileSync(
	path.resolve(__dirname, "hospitals.json"),
	JSON.stringify(allData)
)
