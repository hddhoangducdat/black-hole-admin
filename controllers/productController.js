var productModel = require("../models/productModel");

exports.one_seller_product = async (req, res) => {
  const carts = await productModel.find({ sellerId: req.params.id });
  res.render("productPage", {
    title: "Black Hole Admin",
    user: {
      name: req.user.username,
      image: req.user.image,
      type: req.user.type === "admin" ? true : false,
      params: true
    },
    carts
  });
};

exports.seller_product = async (req, res) => {
  const carts =
    req.user.type === "admin"
      ? await productModel.find()
      : await productModel.find({ sellerId: req.user._id });

  res.render("productPage", {
    title: "Black Hole Admin",
    user: {
      name: req.user.username,
      image: req.user.image,
      type: req.user.type === "admin" ? true : false
    },
    carts
  });
};

exports.one_product = async (req, res) => {
  const carts = await productModel.findById(req.params.id);
  res.render("productModify", {
    title: "Black Hole Admin",
    user: {
      name: req.user.username,
      image: req.user.image,
      type: req.user.type === "admin" ? true : false
    },
    product: carts
  });
};

exports.change_product = async (req, res) => {
  let product = await productModel.findById(req.params.id);
  product.name = req.body.product_name;
  product.price = req.body.product_price;
  product.description = req.body.product_description;
  product.quantity = req.body.product_quantity;
  product.category = req.body.product_categories;
  product.createdBy = req.body.product_createdBy;
  if (req.file) {
    product.images = "http://localhost:3000/" + "uploads/" + req.file.filename;
  }

  await product.save();
  res.redirect(`/management/product`);
};
