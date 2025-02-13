const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/auth");
const { getProduct, getProductID, postProduct, updateProduct, deleteProduct } = require("../controllers/productController");

router.get("/", authenticateToken, getProduct);//การเรียกค่า "/"
router.get("/:id", authenticateToken, getProductID);
router.post("/", authenticateToken, postProduct);
router.put("/:id", authenticateToken, updateProduct);
router.delete("/:id", authenticateToken, deleteProduct);

module.exports = router;//ถ้ามีการเรียกใช้จากด้านนอกอย่าลืมส่วนนี้