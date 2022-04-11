const router = require('express').Router()
const routeLink = require('../constants/routeLink.js')
const api = require('./api')

router.use(routeLink.API_PATH, api)
module.exports = router