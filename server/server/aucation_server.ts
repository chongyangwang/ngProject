import * as express from "express";
import { Server } from "ws";
var bodyParser = require("body-parser");
const app = express();

//  商品列表类型校验
export class Product {
  constructor(
    public id: Number,
    public url: String,
    public title: string,
    public description: string,
    public price: number,
    public rating: number,
    public classify: Array<string>
  ) {}
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public times: string,
    public user: string,
    public rating: number,
    public description: string
  ) {}
}

const products: Product[] = [
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
const comments: Comment[] = [
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
app.get("/", (req, res) => {
  res.send("hello express");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.post("/api/products", (req, res) => {
  let result = products;
  if (req.method === "POST") {
    const middleObj = req.body;
    if (middleObj.title) {
      result = result.filter(product => {
        return product.title.indexOf(middleObj.title) !== -1;
      });
    }
    if (middleObj.price && result.length > 0) {
      result = result.filter(product => {
        return product.price <= parseInt(middleObj.price);
      });
    }
    if (middleObj.category !== "-1" && result.length > 0) {
      result = result.filter(product => {
        return product.classify.indexOf(middleObj.category) !== -1;
      });
    }
    res.json(result);
  }
});
app.get("/api/product/:id", (req, res) => {
  res.json(
    products.filter(product => {
      return product.id == req.params.id;
    })
  );
});
app.get("/api/product/:id/comments", (req, res) => {
  res.json(
    comments.filter(
      (comment: Comment) => comment.productId === Number(req.params.id)
    )
  );
});

const server = app.listen(8000, "localhost", () => {
  console.log("地址是8000的服务器server已启动");
});

// websocket通讯

const subscriptions = new Map<any, any>();

const wsServer = new Server({
  port: 8085
});
wsServer.on("connection", websocket => {
  // websocket.send("服务端:初始化时主动向前端那傻小子传递消息");
  websocket.on("message", message => {
    let messageObj = message;
    // 此处是此案例最大的bug 为实现商品关注功能  得到传过来的id  单获取不到value值
    // console.log("服务端:接收到前端那煞小子传过来的消息了");
    let productIds = subscriptions.get(websocket) || [];
    return subscriptions.set(websocket, [
      ...productIds,
      messageObj["productId"]
    ]);
  });
});
const currentBids = new Map<Number, Number>();
setInterval(() => {
  products.forEach(p => {
    let currentBid = currentBids.get(p.id) || p.price;
    let madVal = Math.random() * 5;
    let newBid = Number(currentBid) + madVal;
    currentBids.set(p.id, newBid);
  });
  subscriptions.forEach((productIds: number[], ws) => {
    if (ws.readyState === 1) {
      let newBids = productIds.map(pid => ({
        id: pid,
        bid: currentBids.get(pid)
      }));
      ws.send(JSON.stringify(newBids));
    } else {
      subscriptions.delete(ws);
    }
  });
}, 2000);
