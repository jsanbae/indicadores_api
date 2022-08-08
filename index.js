'use strict'

const logger = require('winston')

const type = 'web'

logger.info(`Starting '${type}' process`, { pid: process.pid })

require('./web')