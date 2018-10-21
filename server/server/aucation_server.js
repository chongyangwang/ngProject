"use strict";
exports.__esModule = true;
var express = require("express");
var ws_1 = require("ws");
var bodyParser = require("body-parser");
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
var Comment = /** @class */ (function () {
    function Comment(id, productId, times, user, rating, description) {
        this.id = id;
        this.productId = productId;
        this.times = times;
        this.user = user;
        this.rating = rating;
        this.description = description;
    }
    return Comment;
}());
exports.Comment = Comment;
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
        classify: ["节前热销", "节后大卖", "过期无款"]
    },
    {
        id: 3,
        url: "https://img.alicdn.com/bao/uploaded/TB135MtwRnTBKNjSZPfSuvf1XXa.jpg",
        title: "香菲丽莎旗舰店3",
        description: "这是香菲丽莎旗舰店下的第三号产品,欲购请从速",
        price: 3,
        rating: 3,
        classify: ["节前热销", "节后大卖", "过期无款"]
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
        classify: ["节前热销", "节后大卖", "过期无款"]
    },
    {
        id: 6,
        url: "https://img.alicdn.com/bao/uploaded/TB1BU3fwAomBKNjSZFqSuttqVXa.jpg",
        title: "香菲丽莎旗舰店6",
        description: "这是香菲丽莎旗舰店下的第六号产品,欲购请从速",
        price: 6,
        rating: 6,
        classify: ["节前热销", "节后大卖", "过期无款"]
    }
];
var comments = [
    {
        id: 1,
        productId: 1,
        description: "物美价廉不错哦",
        user: "广东汕头客户",
        times: "2018-9-18",
        rating: 3
    },
    {
        id: 2,
        productId: 1,
        description: "货还可以",
        user: "深圳客户",
        times: "2018-8-21",
        rating: 4
    },
    {
        id: 3,
        productId: 2,
        description: "不咋地啊",
        user: "北京客户",
        times: "2018-2-6",
        rating: 1
    }
];
app.use(bodyParser.json());
// http结合express路由通讯
app.get("/", function (req, res) {
    res.send("hello express");
});
app.get("/api/products", function (req, res) {
    res.json(products);
});
app.post("/api/products", function (req, res) {
    var result = products;
    if (req.method === "POST") {
        var middleObj_1 = req.body;
        if (middleObj_1.title) {
            result = result.filter(function (product) {
                return product.title.indexOf(middleObj_1.title) !== -1;
            });
        }
        if (middleObj_1.price && result.length > 0) {
            result = result.filter(function (product) {
                return product.price <= parseInt(middleObj_1.price);
            });
        }
        if (middleObj_1.category !== "-1" && result.length > 0) {
            result = result.filter(function (product) {
                return product.classify.indexOf(middleObj_1.category) !== -1;
            });
        }
        res.json(result);
    }
});
app.get("/api/product/:id", function (req, res) {
    res.json(products.filter(function (product) {
        return product.id == req.params.id;
    }));
});
app.get("/api/product/:id/comments", function (req, res) {
    res.json(comments.filter(function (comment) { return comment.productId === Number(req.params.id); }));
});
var server = app.listen(8000, "localhost", function () {
    console.log("地址是8000的服务器server已启动");
});
// websocket通讯
var subscriptions = new Map();
var wsServer = new ws_1.Server({
    port: 8085
});
wsServer.on("connection", function (websocket) {
    // websocket.send("服务端:初始化时主动向前端那傻小子传递消息");
    websocket.on("message", function (message) {
        var messageObj = message;
        // console.log("服务端:接收到前端那煞小子传过来的消息了");
        var productIds = subscriptions.get(websocket) || [];
        return subscriptions.set(websocket, productIds.concat([
            messageObj["productId"]
        ]));
    });
});
var currentBids = new Map();
setInterval(function () {
    products.forEach(function (p) {
        var currentBid = currentBids.get(p.id) || p.price;
        var madVal = Math.random() * 5;
        var newBid = Number(currentBid) + madVal;
        currentBids.set(p.id, newBid);
    });
    subscriptions.forEach(function (productIds, ws) {
        if (ws.readyState === 1) {
            var newBids = productIds.map(function (pid) { return ({
                id: pid,
                bid: currentBids.get(pid)
            }); });
            ws.send(JSON.stringify(newBids));
        }
        else {
            subscriptions["delete"](ws);
        }
    });
}, 2000);
