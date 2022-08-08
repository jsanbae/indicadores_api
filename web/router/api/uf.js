const express = require('express')
const indicadores = require('../../../src/indicadores')

const router = express.Router()

router
  .route('/')
  .get(async (req, res) => {
      const ufs = await indicadores.uf.getAll()
      return res.status(200).json({
        indicador: 'UF',
        status: 'success',
        results: ufs.length,
        data: ufs,
        message:'OK'
      })
  })

router
  .route('/:date')
  .get(async (req, res) => {
    const date = req.params.date
    const uf = await indicadores.uf.getByDate(date)
    
    if (!uf.length) return res.status(404).json({indicador:'UF', status: 'not found', results: 0, data: [], message:'No hay registros para ' + date})

    return res.status(200).json({
      indicador:'UF',
      status: 'success',
      results: uf.length,
      data: uf,
      message:'OK'
    })
  })

  router
  .route('/:fromDate/:toDate')
  .get(async (req, res) => {
    const {fromDate, toDate} = req.params
    const ufs = await indicadores.uf.getByDateRange(fromDate, toDate)
    
    if (!ufs.length) return res.status(404).json({indicador:'UF', status: 'not found', results: 0, data: [], message:`No hay registros entre fechas ${fromDate} a ${toDate}`})

    return res.status(200).json({
      indicador:'UF',
      status: 'success',
      results: ufs.length,
      data: ufs,
      message:'OK'
    })
  })

module.exports = router