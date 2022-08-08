'use strict'

const fs = require('fs')
const dotenv = require('dotenv')

const configFilepath = `${__dirname}/../.env`

if (!fs.existsSync(configFilepath)) {
    console.error(`Not .env file found in ${configFilepath}`)
    process.exit(1)
}

dotenv.config({path: configFilepath})

const logger = require('./components/logger')
const mongodb = require('./components/mongodb')
const server = require('./components/server')

module.exports = Object.assign({}, logger, mongodb, server)