'use strict'

const winston = require('winston')

const logger_lever = process.env.LOGGER_LEVEL  || 'info';
const logger_enabled = process.env.LOGGER_ENABLED  || 'true';


const config = {
  logger: {
    level: logger_lever,
      enabled: logger_enabled
  }
}
  
winston.level = config.logger.level

if (!config.logger.enabled) winston.remove(winston.transports.Console)

module.exports = config