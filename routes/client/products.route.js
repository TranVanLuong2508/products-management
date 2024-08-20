const express = require('express')
const router = express.Router()
//vì ở file index.route.js đã có /products nên ở file này đường dẫn k cần

const controller = require("../../controllers/client/products.controller.js")
router.get('/', controller.index)

router.get('/create', controller.create)

module.exports = router;