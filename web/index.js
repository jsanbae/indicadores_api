'use strict'

const logger = require('winston')
const config = require('../config')
const app = require('./app')


const listen = (port) => {
  return new Promise((resolve, reject) => {
    app.listen(port)
      .once('listening', resolve)
      .once('error', reject)
  });
}

listen(config.server.port)
  .then(() => {
    logger.info(`App running on port ${config.server.port} in [${process.env.NODE_ENV}] mode...`)
  })
  .catch(err => {
    logger.error('Error happened during server start', err)
    process.exit(1)
  })