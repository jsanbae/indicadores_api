const express = require('express')
const indicadores = require('../../../src/indicadores')

const router = express.Router()

router
  .route('/')
  .get(async (req, res) => {
      const ivps = await indicadores.ivp.getAll()
      return res.status(200).json({
        indicador: 'IVP',
        status: 'success',
        results: ufs.length,
        data: ivps,
        message:'OK'
      })
  })

router
  .route('/:date')
  .get(async (req, res) => {
    const date = req.params.date
    const ivp = await indicadores.ivp.getByDate(date)
    
    if (!ivp.length) return res.status(404).json({indicador:'IVP', status: 'not found', results: 0, data: [], message:'No hay registros para ' + date})

    return res.status(200).json({
      indicador:'IVP',
      status: 'success',
      results: ivp.length,
      data: ivp,
      message:'OK'
    })
  })

module.exports = router