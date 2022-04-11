const routeLink = require('../../../constants/routeLink.js');

const router = require('express').Router();
const list = require('./list.js')

router.post(routeLink.LIST_PATH, async (req, res) => {
   let users = await list(req.body)
   return res.json(users);
})

module.exports = router