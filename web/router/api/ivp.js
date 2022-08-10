const express = require('express')
const {ivp:indicador} = require('../../../src/indicadores')

const router = express.Router()

router
  .route('/')
  .get(async (req, res) => {
      const data = await indicador.getAll()
      return res.status(200).json({
        indicador: indicador.name,
        status: 'success',
        results: data.length,
        data: data,
        message:'OK'
      })
  })

router
  .route('/:date')
  .get(async (req, res) => {
    const date = req.params.date
    const data = await indicador.getByDate(date)
    
    if (!data.length) return res.status(404).json({indicador: indicador.name, status: 'not found', results: 0, data: [], message:'No hay registros para ' + date})

    return res.status(200).json({
      indicador: indicador.name,
      status: 'success',
      results: data.length,
      data: data,
      message:'OK'
    })
  })

  router
  .route('/range/:fromDate/:toDate')
  .get(async (req, res) => {
    const {fromDate, toDate} = req.params
    const data = await indicador.getByDateRange(fromDate, toDate)
    
    if (!data.length) return res.status(404).json({indicador: indicador.name, status: 'not found', results: 0, data: [], message:`No hay registros entre fechas ${fromDate} a ${toDate}`})

    return res.status(200).json({
      indicador: indicador.name,
      status: 'success',
      results: data.length,
      data: data,
      message:'OK'
    })
  })

module.exports = router