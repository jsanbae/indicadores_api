const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require('compression')

const router = express.Router()

// gzip responses
router.use(compression())

 // Apply express middlewares
 router.use(cors())
 router.use(bodyParser.json())
 router.use(bodyParser.urlencoded({ extended: true }))

router
  .route('/')
  .get((req, res) => {
      return res.status(200).json({
        message:`Welcome to Indicadores Económicos Chile API`, 
        uf_endpoints: { 
            uf: `/v1/uf`,
            ivp:`/v1/ivp`,
            utm:`/v1/utm`
        },
        docs_url: `https://editor.swagger.io/?url=https://raw.githubusercontent.com/jsanbae/indicadores_api/master/web/openapi.yaml`,
        repo_url: `https://github.com/jsanbae/indicadores_api/`
    })
  })

module.exports = router