// Create .env for Netflify
const fs = require('fs')
fs.writeFileSync('./.env', `PORT=${process.env.PORT}\n`)
fs.writeFileSync('./.env', `LOGGER_LEVEL=${process.env.LOGGER_LEVEL}\n`)
fs.writeFileSync('./.env', `LOGGER_ENABLED=${process.env.LOGGER_ENABLED}\n`)

fs.writeFileSync('./.env', `DATABASE=${process.env.DATABASE}\n`)
fs.writeFileSync('./.env', `DATABASE_PASSWORD=${process.env.DATABASE_PASSWORD}\n`)