const dayjs = require("dayjs")
const utc = require("dayjs/plugin/utc")
const timezone = require("dayjs/plugin/timezone")
dayjs.extend(utc)
dayjs.extend(timezone)

const generateDateTime = () => {
	const datetimes = []
	let startDate = dayjs.utc("2021-07-01", "YYYY-MM-DD").utcOffset(7)
	const endDate = dayjs.utc("2021-07-31", "YYYY-MM-DD").utcOffset(7)
	while (!startDate.isSame(endDate)) {
		datetimes.push({
			startDateTime: startDate.hour(9).format(),
			endDateTime: startDate.hour(10).format(),
			capacity: 100
		})
		datetimes.push({
			startDateTime: startDate.hour(10).format(),
			endDateTime: startDate.hour(11).format(),
			capacity: 100
		})
		datetimes.push({
			startDateTime: startDate.hour(11).format(),
			endDateTime: startDate.hour(12).format(),
			capacity: 100
		})
		datetimes.push({
			startDateTime: startDate.hour(13).format(),
			endDateTime: startDate.hour(14).format(),
			capacity: 100
		})
		datetimes.push({
			startDateTime: startDate.hour(14).format(),
			endDateTime: startDate.hour(15).format(),
			capacity: 100
		})
		datetimes.push({
			startDateTime: startDate.hour(15).format(),
			endDateTime: startDate.hour(16).format(),
			capacity: 100
		})
		datetimes.push({
			startDateTime: startDate.hour(16).format(),
			endDateTime: startDate.hour(17).format(),
			capacity: 100
		})
		startDate = startDate.add(1, "day")
	}
	return datetimes
}

module.exports = generateDateTime
