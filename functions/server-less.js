/* example using https://github.com/dougmoscrop/serverless-http */
const serverless = require('serverless-http')
const app = require('../web/app')

// Export lambda handler
exports.handler = serverless(app)