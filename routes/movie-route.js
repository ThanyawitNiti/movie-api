const express = require("express")
const movieController = require('../controllers/movie-controller')
const router = express.Router()

router.get('/watch/list',movieController.showList)

module.exports = router