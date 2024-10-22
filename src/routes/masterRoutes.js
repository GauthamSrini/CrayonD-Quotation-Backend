const express =  require('express')
const router = express.Router()
const mastercontroller = require('../controllers/master_contollers')

router.get('/vendors',mastercontroller.get_vendors)