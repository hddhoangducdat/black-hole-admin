var historyModel = require("../models/historyModel");
var productModel = require("../models/productModel");

exports.show_bill = async (req, res) => {
  let response = await historyModel.find();
  const result = response.map(r => {
    let condition1, condition2, condition3, condition4;
    condition4 = false;
    let sum = 0;
    r.bill.forEach(cart => (sum = sum + parseInt(cart.price) * cart.number));
    switch (r.history) {
      case "findItem":
        condition1 = "active";
        break;
      case "shipping":
        condition2 = "active";
        break;
      case "cancle":
        condition4 = true;
        break;
      default:
        condition3 = "active";
        break;
    }
    return {
      _id: r._id,
      bill: r.bill,
      condition1,
      condition2,
      condition3,
      condition4,
      sum
    };
  });
  res.render("shoppingPage", {
    title: "Black Hole Admin",
    user: {
      name: "Hoàng Đức Đạt",
      image:
        "https://scontent.fsgn1-1.fna.fbcdn.net/v/t1.0-9/54799897_104992787344972_2706694677771321344_n.jpg?_nc_cat=107&_nc_oc=AQnC1K3OPfHj6wc3kzI_ojtRjG04EFPj1IbHojkuFXc5MG7eKUUv4sM38kEHIMarQX0&_nc_ht=scontent.fsgn1-1.fna&oh=a7fc0a694ea731bfece6af0ecc6d6135&oe=5E19E9CC",
      type: req.user.type === "admin" ? true : false
    },
    history: result
  });
};

exports.cancle_bill = async (req, res) => {
  let bill = await historyModel.findById(req.body.id);
  bill.history = "cancle";
  await bill.save();
};

exports.find_item = async (req, res) => {
  let bill = await historyModel.findById(req.body.id);
  bill.history = "findItem";
  await bill.save();
};

exports.shipping_item = async (req, res) => {
  let bill = await historyModel.findById(req.body.id);
  bill.history = "shipping";
  await bill.save();
};

const increase_sold_product = async (id, number) => {
  let product = await productModel.findById(id);
  product.sold += number;
  product.quantity -= number;
  await product.save();
};

exports.finish_item = async (req, res) => {
  let bill = await historyModel.findById(req.body.id);
  bill.bill.forEach(cart => increase_sold_product(cart._id, cart.number));
  bill.history = "finish";
  await bill.save();
};
