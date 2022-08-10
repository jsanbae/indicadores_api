'use strict'

const express = require('express')
const morgan = require('morgan')


const router = require('./router')

const app = express()

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

app.use(express.json())
//app.use(express.static(`${__dirname}/public`))

app.use('/v1/uf/', router.uf)
app.use('/v1/ivp/', router.ivp)
app.use('/v1/utm/', router.utm)

module.exports = app