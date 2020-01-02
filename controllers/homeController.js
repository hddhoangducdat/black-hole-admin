var userModel = require("../models/userModel");
var productModel = require("../models/productModel");
var _ = require("lodash");

exports.delete_user = async (req, res) => {
  //   console.log(req.body)/;
  const user = await userModel.findOneAndDelete({ _id: req.body.id });
  user.save();
  console.log(user);
};

exports.home_show = async (req, res) => {
  if (req.user.type === "admin") {
    const user = await userModel.find();
    res.render("userPage", {
      title: "Black Hole Admin",
      user: {
        name: "Hoàng Đức Đạt",
        image:
          "https://scontent.fsgn1-1.fna.fbcdn.net/v/t1.0-9/54799897_104992787344972_2706694677771321344_n.jpg?_nc_cat=107&_nc_oc=AQnC1K3OPfHj6wc3kzI_ojtRjG04EFPj1IbHojkuFXc5MG7eKUUv4sM38kEHIMarQX0&_nc_ht=scontent.fsgn1-1.fna&oh=a7fc0a694ea731bfece6af0ecc6d6135&oe=5E19E9CC",
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

    console.log(product);
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
        name: req.user.lastName,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/7e/Hammer_and_sickle.svg",
        type: req.user.type === "admin" ? true : false
      },
      earning,
      quantity,
      statictis
    });
  }
};
