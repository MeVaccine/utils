const fs = require('fs')
const path = require('path')

const raw = fs.readFileSync(path.resolve(__dirname, 'raw.txt'), 'utf-8')

const hospitalName = raw.split('<td>')
