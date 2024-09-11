// [GET] /admin/products

const express = require("express")
const router = express.Router()

const controller = require("../../controllers/admin/product.controller")

router.get("/", controller.index)
router.patch("/change-status/:status/:id", controller.ChangeStatus)
router.patch("/change-multi",controller.changeMulti)

module.exports = router   