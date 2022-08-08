const ufRouter = require('./api/uf')
const ivpRouter = require('./api/ivp')
const utmRouter = require('./api/utm')

const router = {
    uf : ufRouter,
    ivp: ivpRouter,
    utm: utmRouter,
}

module.exports = router