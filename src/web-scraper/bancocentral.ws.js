'use strict'

const jsdom = require('jsdom')
const { JSDOM } = jsdom
const formatter = require('../utils/formatter')
const fetch = require('../utils/fetchData')

const getDataTable = async ()  => {
  const url='https://si3.bcentral.cl/Siete/ES/Siete/Cuadro/CAP_PRECIOS/MN_CAP_PRECIOS/UF_IVP_DIARIO/UF_IVP_DIARIO'
  const body = await fetch.fetchCacheData(url)
  const dom = new JSDOM(body)
    
  return dataTableDOM(dom)
}
  
const dataTableDOM = (dom) => {
  return dom.window.document.querySelector('#grilla')
}

const datesCeilsDOM = (dom) => {
  return dom.querySelectorAll('thead > tr > th')
}

const valuesUFCeilsDOM = (dom) => {
  return dom.querySelectorAll('tbody > tr:first-child > td')
}

const valuesIVPCeilsDOM = (dom) => {
  return dom.querySelectorAll('tbody > tr:nth-child(2n) > td')
}

const getUFData = async () => {  
  const tableDOM = await getDataTable()
  const dates = formatter.datesFormatter(datesCeilsDOM(tableDOM))
  const values = formatter.valuesFormatter(valuesUFCeilsDOM(tableDOM))
  
  let ufData = dates.map((date, index) => {
    return {fecha: date, valor: values[index]} 
  })
  
  return ufData
}

const getIVPData = () => {    
  const tableDOM = getDataTable()
  const dates = formatter.datesFormatter(datesCeilsDOM(tableDOM))
  const values = formatter.valuesFormatter(valuesIVPCeilsDOM(tableDOM))
  
  let ivpData = dates.map((date, index) => {
    return {fecha: date, valor: values[index]} 
  })

  return ivpData
}

module.exports = {
  getUFData: getUFData,
  getIVPData: getIVPData
}