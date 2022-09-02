'use strict'

const fs = require('fs')
const dotenv = require('dotenv')

const configFilepath = `${__dirname}/../.env`

if (fs.existsSync(configFilepath)) dotenv.config({path: configFilepath})

if (!fs.existsSync(configFilepath)) console.info(`Not .env file found in ${configFilepath}, using default configuration.`)


const logger = require('./components/logger')
const mongodb = require('./components/mongodb')
const server = require('./components/server')

module.exports = Object.assign({}, logger, mongodb, server)