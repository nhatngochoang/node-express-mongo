const router = require('express').Router()
const routeLink = require('../../constants/routeLink.js')
const users = require('./users')

router.use(routeLink.USERS_PATH, users)

module.exports = router