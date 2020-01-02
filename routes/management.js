var express = require("express");
var isAuthenticated = require("../middlewares/isAuthenticated");
var router = express.Router();
var productController = require("../controllers/productController");
var userController = require("../controllers/userController");
var billController = require("../controllers/billController");

/* GET home page. */
router.get("/product", isAuthenticated, productController.seller_product);

router.get(
  "/product/modify/:id",
  isAuthenticated,
  productController.one_product
);

router.get("/brand", isAuthenticated, userController.all_seller);

router.get("/shopping", isAuthenticated, billController.show_bill);
router.post(
  "/shopping/cancleBill",
  isAuthenticated,
  billController.cancle_bill
);
router.post("/shopping/findItem", isAuthenticated, billController.find_item);
router.post(
  "/shopping/shippingItem",
  isAuthenticated,
  billController.shipping_item
);
router.post(
  "/shopping/finishItem",
  isAuthenticated,
  billController.finish_item
);

module.exports = router;
