"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
//  商品列表类型校验
var Product = /** @class */ (function () {
    function Product(id, url, title, description, price, rating, classify) {
        this.id = id;
        this.url = url;
        this.title = title;
        this.description = description;
        this.price = price;
        this.rating = rating;
        this.classify = classify;
    }
    return Product;
}());
exports.Product = Product;
var products = [
    {
        id: 1,
        url: "https://img.alicdn.com/bao/uploaded/TB1uVj2xXkoBKNjSZFESuvrEVXa.jpg",
        title: "香菲丽莎旗舰店1",
        description: "这是香菲丽莎旗舰店下的第一号产品,欲购请从速",
        price: 1,
        rating: 1,
        classify: ["节前热销", "节后大卖"]
    },
    {
        id: 2,
        url: "https://img.alicdn.com/bao/uploaded/TB1F4k1xljTBKNjSZFuSuv0HFXa.jpg",
        title: "香菲丽莎旗舰店2",
        description: "这是香菲丽莎旗舰店下的第二号产品,欲购请从速",
        price: 2,
        rating: 2,
        classify: ["节前热销", "节后大卖"]
    },
    {
        id: 3,
        url: "https://img.alicdn.com/bao/uploaded/TB135MtwRnTBKNjSZPfSuvf1XXa.jpg",
        title: "香菲丽莎旗舰店3",
        description: "这是香菲丽莎旗舰店下的第三号产品,欲购请从速",
        price: 3,
        rating: 3,
        classify: ["节前热销", "节后大卖"]
    },
    {
        id: 4,
        url: "https://img.alicdn.com/bao/uploaded/TB1wFvjuiMnBKNjSZFCSut0KFXa.jpg",
        title: "香菲丽莎旗舰店4",
        description: "这是香菲丽莎旗舰店下的第四号产品,欲购请从速",
        price: 4,
        rating: 4,
        classify: ["节前热销", "节后大卖"]
    },
    {
        id: 5,
        url: "https://img.alicdn.com/bao/uploaded/TB1shYRwHsrBKNjSZFpSuwXhFXa.jpg",
        title: "香菲丽莎旗舰店5",
        description: "这是香菲丽莎旗舰店下的第五号产品,欲购请从速",
        price: 5,
        rating: 5,
        classify: ["节前热销", "节后大卖"]
    },
    {
        id: 6,
        url: "https://img.alicdn.com/bao/uploaded/TB1BU3fwAomBKNjSZFqSuttqVXa.jpg",
        title: "香菲丽莎旗舰店6",
        description: "这是香菲丽莎旗舰店下的第六号产品,欲购请从速",
        price: 6,
        rating: 6,
        classify: ["节前热销", "节后大卖"]
    }
];
app.get("/", function (req, res) {
    res.send("hello expre11111111ss");
});
app.get("/products", function (req, res) {
    res.json(products);
});
var server = app.listen(8000, "localhost", function () {
    console.log("地址是8000的服务器server已启动");
});
//# sourceMappingURL=aucation_server.js.map