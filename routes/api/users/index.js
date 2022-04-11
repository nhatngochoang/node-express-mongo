const routeLink = require('../../../constants/routeLink.js');

const router = require('express').Router();
const list = require('./list.js')
const id = require('./id.js')

const Authorization = require('../../../utils/Authorization.js')

router.get(routeLink.LIST_PATH, Authorization.checkUser, async (req, res) => {
   let users = await list(req.body)
   return res.json(users);
})

router.get(routeLink.ID_PATH, async (req, res) => {
   const _id = req.params.id
   let users = await id(_id)
   return res.json(users);
})

module.exports = router