const router = require("express").Router();

const Users = require("./users-model");
const restricted = require('../auth/restricted-middleware')
const checkRole = require('../auth/check-role-middleware')

router.get("/",restricted,checkRole(1), (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => res.send(err));
});

module.exports = router;