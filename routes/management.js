var express = require('express');
var productModel = require('../models/productModel');
var router = express.Router();

/* GET home page. */
router.get('/product', async (req, res) => {
  const carts = await productModel.find();
  console.log(carts);
  res.render('productPage', {
    title: 'Black Hole Admin',
    user: {
      name: 'Hoàng Đức Đạt',
      image:
        'https://scontent.fsgn1-1.fna.fbcdn.net/v/t1.0-9/54799897_104992787344972_2706694677771321344_n.jpg?_nc_cat=107&_nc_oc=AQnC1K3OPfHj6wc3kzI_ojtRjG04EFPj1IbHojkuFXc5MG7eKUUv4sM38kEHIMarQX0&_nc_ht=scontent.fsgn1-1.fna&oh=a7fc0a694ea731bfece6af0ecc6d6135&oe=5E19E9CC'
    },
    carts
  });
});

router.get('/product/modify/:id', async (req, res) => {
  const carts = await productModel.findById(req.params.id);
  res.render('productModify', {
    title: 'Black Hole Admin',
    user: {
      name: 'Hoàng Đức Đạt',
      image:
        'https://scontent.fsgn1-1.fna.fbcdn.net/v/t1.0-9/54799897_104992787344972_2706694677771321344_n.jpg?_nc_cat=107&_nc_oc=AQnC1K3OPfHj6wc3kzI_ojtRjG04EFPj1IbHojkuFXc5MG7eKUUv4sM38kEHIMarQX0&_nc_ht=scontent.fsgn1-1.fna&oh=a7fc0a694ea731bfece6af0ecc6d6135&oe=5E19E9CC'
    },
    product: carts
  });
});

router.get('/brand', function(req, res) {
  res.render('brandPage', {
    title: 'Black Hole Admin',
    user: {
      name: 'Hoàng Đức Đạt',
      image:
        'https://scontent.fsgn1-1.fna.fbcdn.net/v/t1.0-9/54799897_104992787344972_2706694677771321344_n.jpg?_nc_cat=107&_nc_oc=AQnC1K3OPfHj6wc3kzI_ojtRjG04EFPj1IbHojkuFXc5MG7eKUUv4sM38kEHIMarQX0&_nc_ht=scontent.fsgn1-1.fna&oh=a7fc0a694ea731bfece6af0ecc6d6135&oe=5E19E9CC'
    },
    brand: [
      {
        image:
          'https://1.bp.blogspot.com/-tA-pZfn4MDk/Wf4Ikj8ZCmI/AAAAAAAAACo/7l363TnqeyUgSU7SL03qn9ZW5OihH9hFQCLcBGAs/s1600/All-Solution-BD-tech.jpg',
        name: 'coca-cola',
        product: 23
      },
      {
        image:
          'https://1.bp.blogspot.com/-tA-pZfn4MDk/Wf4Ikj8ZCmI/AAAAAAAAACo/7l363TnqeyUgSU7SL03qn9ZW5OihH9hFQCLcBGAs/s1600/All-Solution-BD-tech.jpg',
        name: 'coca-cola',
        product: 23
      },
      {
        image:
          'https://1.bp.blogspot.com/-tA-pZfn4MDk/Wf4Ikj8ZCmI/AAAAAAAAACo/7l363TnqeyUgSU7SL03qn9ZW5OihH9hFQCLcBGAs/s1600/All-Solution-BD-tech.jpg',
        name: 'coca-cola',
        product: 23
      }
    ]
  });
});
router.get('/shopping', function(req, res) {
  res.render('shoppingPage', {
    title: 'Black Hole Admin',
    user: {
      name: 'Hoàng Đức Đạt',
      image:
        'https://scontent.fsgn1-1.fna.fbcdn.net/v/t1.0-9/54799897_104992787344972_2706694677771321344_n.jpg?_nc_cat=107&_nc_oc=AQnC1K3OPfHj6wc3kzI_ojtRjG04EFPj1IbHojkuFXc5MG7eKUUv4sM38kEHIMarQX0&_nc_ht=scontent.fsgn1-1.fna&oh=a7fc0a694ea731bfece6af0ecc6d6135&oe=5E19E9CC'
    },
    shopping: [
      {
        image:
          'https://images-na.ssl-images-amazon.com/images/I/A1cd6TMkAML._SL1500_.jpg',
        name: 'Bóng rổ',
        type: 'Thể thao',
        price: '209.000 ₫',
        number: 1,
        cancle: true,
        customer: 'Hoàng Đức Đạt',
        brand: 'Ubisoft',
        id: 1
      },
      {
        image:
          'https://salt.tikicdn.com/cache/w1200/ts/product/15/4f/1d/2ca8dd1db2bb31db0aba8ad4eac20160.jpg',
        name: 'ÁO KHOÁC NHẸ NAM DXPECHER IN HÌNH HỌA TIẾT',
        type: 'Thời trang',
        price: '89.000 ₫',
        number: 12,
        cancle: true,
        customer: 'Hoàng Đức Đạt',
        brand: 'Ubisoft',
        id: 2
      },
      {
        image:
          'https://salt.tikicdn.com/cache/w1200/ts/product/ad/6d/4b/698710c5a8a893767a67c6749bfbc06c.jpg',
        name: 'Smart Tivi LG 43 inch 4K UHD 43UK6340PTF - Hàng chính hãng',
        type: 'Điện tử',
        price: '7.990.000 ₫',
        number: 2,
        cancle: false,
        customer: 'Hoàng Đức Đạt',
        brand: 'Ubisoft',
        id: 3
      },
      {
        image:
          'https://salt.tikicdn.com/cache/w1200/ts/product/24/2c/7d/ed8eb31c8057f97c4391bfeaddcb3e86.jpg',
        name: 'Xe Máy Honda Air Blade 2019 Phiên bản Đen Mờ',
        type: 'Phương tiện',
        price: '44.160.000 ₫',
        number: 5,
        cancle: true,
        customer: 'Hoàng Đức Đạt',
        brand: 'Ubisoft',
        id: 4
      },
      {
        image:
          'https://salt.tikicdn.com/ts/bookpreview/90/5e/14080601/files/OEBPS/Images/Page1.jpg',
        name: 'Sự kết thúc của thời đại giả kim',
        type: 'Sách',
        price: '107.602 ₫',
        number: 9,
        cancle: false,
        customer: 'Hoàng Đức Đạt',
        brand: 'Ubisoft',
        id: 5
      },
      {
        image:
          'https://salt.tikicdn.com/cache/w1200/ts/product/dc/56/c6/01f720494a321bacfd5711f03d8b5b25.jpg',
        name: 'Giày Bóng Rổ Kyrie Ateson-2080',
        type: 'Thể thao',
        price: '450.000 ₫',
        number: 6,
        cancle: true,
        customer: 'Hoàng Đức Đạt',
        brand: 'Ubisoft',
        id: 6
      },
      {
        image:
          'https://salt.tikicdn.com/cache/w1200/ts/product/36/bd/31/38cfa79d6213fb948a13ad20b0b9d617.jpg',
        name: 'Vòng đeo tay thông minh Xiaomi Mi Band 4_Hàng Nhập Khẩu',
        type: 'Phụ kiện - thiết bị số',
        price: '540.000 ₫',
        number: 1,
        cancle: false,
        customer: 'Hoàng Đức Đạt',
        brand: 'Ubisoft',
        id: 7
      },
      {
        image:
          'https://salt.tikicdn.com/cache/w1200/ts/product/cd/9b/3c/749a72eff516d0aaf0cf2f3a7f937682.jpg',
        name: 'Ngũ Cốc Sấy Khô Calbee nội địa Nhật Bản 800g',
        type: 'Thực phẩm',
        price: '179.000 ₫',
        number: 1,
        cancle: true,
        customer: 'Hoàng Đức Đạt',
        brand: 'Ubisoft',
        id: 8
      },
      {
        image:
          'https://salt.tikicdn.com/cache/w1200/ts/product/cb/79/ef/79d22f3ac2913afecbf8636e666ec5ac.jpg',
        name: 'Chổi Lau Nhà Thông Minh, Chổi Lau Nhà Hút Bụi Đa Năng',
        type: 'Nhà cửa - đời sống',
        price: '82.887 ₫',
        number: 1,
        cancle: true,
        customer: 'Hoàng Đức Đạt',
        brand: 'Ubisoft',
        id: 9
      }
    ]
  });
});

module.exports = router;
