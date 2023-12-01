const express = require("express")
const movieController = require('../controllers/movie-controller')
const router = express.Router()

// GET /watch/list: ดึงข้อมูลหนังทั้งหมด
// GET /watch/list/{id}: ดึงรายละเอียดของหนังที่ดูตามรหัส
// GET /search/?q=xxxx: ค้นหารายการหนังจากชื่อ

router.get('/watch/list',movieController.showList)

module.exports = router