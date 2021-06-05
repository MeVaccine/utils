const fs = require("fs")
const path = require("path")
const generateDateTime = require("./dateTime")

const raw = fs.readFileSync(path.resolve(__dirname, "raw.txt"), "utf-8")

const hospitalName = raw.split("<td>")
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

const data = hospitalName.map((el) => {
	const generatedDateTime = generateDateTime()
	const vaccineRandom = Math.floor(Math.random() * 3)
	const returnData = {
		name_th: el,
		name_en: "Dummy",
		dateTime: generatedDateTime,
		vaccines: [avaliableVaccines[0], avaliableVaccines[1], avaliableVaccines[2]]
	}
	for (let i = 1; i <= vaccineRandom; i++) {
		returnData.vaccines.push(avaliableVaccines[2 + i])
	}
	return returnData
})
fs.unlinkSync(path.resolve(__dirname, "hospitals.json"))

fs.writeFileSync(
	path.resolve(__dirname, "hospitals.json"),
	JSON.stringify(data)
)
