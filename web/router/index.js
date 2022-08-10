const indexRouter = require('./api')
const ufRouter = require('./api/uf')
const ivpRouter = require('./api/ivp')
const utmRouter = require('./api/utm')

const router = {
    index: indexRouter,
    uf : ufRouter,
    ivp: ivpRouter,
    utm: utmRouter,
}

module.exports = router