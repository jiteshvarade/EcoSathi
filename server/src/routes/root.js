const express = require("express")
const root = require('../controllers/root')

const router = express.Router()

router.post("/",root);

module.exports = router