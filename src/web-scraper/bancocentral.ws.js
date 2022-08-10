'use strict'

const jsdom = require('jsdom')
const { JSDOM } = jsdom
const formatter = require('../utils/formatter')
const { fetchCacheBody } = require('../utils/fetchData')

const url_uf_ivp = 'https://si3.bcentral.cl/Siete/ES/Siete/Cuadro/CAP_PRECIOS/MN_CAP_PRECIOS/UF_IVP_DIARIO/UF_IVP_DIARIO'
const url_utm = 'https://si3.bcentral.cl/Siete/ES/Siete/Cuadro/CAP_PRECIOS/MN_CAP_PRECIOS/UF_IVP_UTM/UF_IVP_UTM'

const getUFData = async () => {
  const dom = await getDOM(url_uf_ivp)
  
  const tableDOM = dataTableDOM(dom)
  const dates = formatter.datesFormatter(datesCeilsDOM(tableDOM))
  const values = formatter.valuesFormatter(valuesUFCeilsDOM(tableDOM))
  
  let ufData = dates.map((date, index) => {
    return {fecha: date, valor: values[index]} 
  })
  
  return ufData
}

const getIVPData = async () => {
  const dom = await getDOM(url_uf_ivp)

  const tableDOM = dataTableDOM(dom)
  const dates = formatter.datesFormatter(datesCeilsDOM(tableDOM))
  const values = formatter.valuesFormatter(valuesIVPCeilsDOM(tableDOM))
  
  let ivpData = dates.map((date, index) => {
    return {fecha: date, valor: values[index]} 
  })

  return ivpData
}

const getUTMData = async () => {
  const dom = await getDOM(url_utm)

  const tableDOM = dataTableDOM(dom)
  const dates = formatter.datesFormatter(datesCeilsDOM(tableDOM))
  const values = formatter.valuesFormatter(valuesUTMCeilsDOM(tableDOM))
  
  let utmData = dates.map((date, index) => {
    return {fecha: `${date}-01`, valor: values[index]} 
  })

  return utmData
}

const dataTableDOM = (dom) => {
  return dom.window.document.querySelector('#grilla')
}

const datesCeilsDOM = (tableDom) => {
  return tableDom.querySelectorAll('thead > tr > th')
}

const valuesUFCeilsDOM = (tableDom) => {
  return tableDom.querySelectorAll('tbody > tr:first-child > td')
}

const valuesIVPCeilsDOM = (tableDom) => {
  return tableDom.querySelectorAll('tbody > tr:nth-child(2n) > td')
}

const valuesUTMCeilsDOM = (tableDom) => {
  return tableDom.querySelectorAll('tbody > tr:nth-child(3n) > td')
}

const getDOM = async (url)  => {
  const body = await fetchCacheBody(url)
  return new JSDOM(body)
}

module.exports = {
  UFIVPEndpoint: url_uf_ivp,
  UTMEndpoint: url_utm,
  getUFData: getUFData,
  getIVPData: getIVPData,
  getUTMData: getUTMData
}