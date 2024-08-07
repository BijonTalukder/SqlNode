const express = require("express");
const UserModel = require("../model/userModel");
const router = express.Router();
router.post('/add')
UserModel.sync({force:false})