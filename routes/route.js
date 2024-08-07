const express = require("express");
const { createUser, getUser } = require("../controller/userController");
const UserModel = require("../model/userModel");
const router = express.Router();
router.post('/add',createUser);
router.get("/get",getUser)
UserModel.sync({force:false})

module.exports = router;