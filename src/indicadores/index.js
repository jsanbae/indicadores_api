'use strict'

const UFIndicador = require('./uf')
const IVPIndicador = require('./ivp')
const UTMIndicador = require('./utm')

const api = {
  uf: UFIndicador,
  ivp: IVPIndicador,
  utm: UTMIndicador
}

module.exports = api