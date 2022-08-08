'use strict'

const UFIndicador = require('./uf')
const IVPIndicador = require('./ivp')

const api = {
  uf: UFIndicador,
  ivp: IVPIndicador
}

module.exports = api