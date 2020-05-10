const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");

//User Model
const User = require('../../models/User');


module.exports = router;