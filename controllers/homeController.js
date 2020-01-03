var userModel = require("../models/userModel");
var productModel = require("../models/productModel");
var cartModel = require("../models/cartModel");
var historyModel = require("../models/historyModel");
var sellerModel = require("../models/sellerModel");
var _ = require("lodash");

const delete_product = async id => {
  const product = await productModel.findByIdAndDelete(id);
  await product.save();
};

exports.seller_delete = async (req, res) => {
  const seller = await sellerModel.findOneAndDelete({ _id: req.body.id });
  const product = await productModel.find({ sellerId: req.body.id });
  product.forEach(p => delete_product(p._id));
  await seller.save();
};

exports.delete_user = async (req, res) => {
  //   console.log(req.body)/;
  const user = await userModel.findOneAndDelete({ _id: req.body.id });
  const cart = await cartModel.findOneAndDelete({ userId: req.body.id });
  const history = await historyModel.findOneAndDelete({ userId: req.body.id });

  await user.save();
  if (cart) await cart.save();
  if (history) await history.save();

  res.redirect("/");
};

exports.home_show = async (req, res) => {
  if (req.user.type === "admin") {
    const user = await userModel.find();
    res.render("userPage", {
      title: "Black Hole Admin",
      user: {
        name: req.user.username,
        image: req.user.image,
        type: req.user.type === "admin" ? true : false
      },
      people: user
    });
  } else {
    const product = await productModel.find({ sellerId: req.user._id });
    let earning = 0;
    let quantity = 0;
    let statictis = [];
    product.sort((a, b) => {
      return b.price * b.quantity - a.price * a.quantity;
    });

    product.forEach((p, i) => {
      p.profit = p.quantity * p.price;
      if (i === 10) return;
      statictis = [...statictis, p];
    });
    product.forEach(p => {
      earning += p.quantity * p.price;
      quantity += p.quantity;
    });
    res.render("homePage", {
      title: "Black Hole Admin",
      user: {
        name: req.user.username,
        image: req.user.image,
        type: req.user.type === "admin" ? true : false
      },
      earning,
      quantity,
      statictis
    });
  }
};
