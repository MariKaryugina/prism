var express = require('express');
var router = express.Router();
const Users = require('../models/user');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await Users.find({});
  console.log(users);
  res.send(users)
});

module.exports = router;
