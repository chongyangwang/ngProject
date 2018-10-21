import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      url:
        "https://img.alicdn.com/bao/uploaded/TB1uVj2xXkoBKNjSZFESuvrEVXa.jpg",
      title: "香菲丽莎旗舰店1",
      description: "这是香菲丽莎旗舰店下的第一号产品,欲购请从速",
      price: 1,
      rating: 1,
      classify: ["节前热销", "节后大卖"]
    },
    {
      id: 2,
      url:
        "https://img.alicdn.com/bao/uploaded/TB1F4k1xljTBKNjSZFuSuv0HFXa.jpg",
      title: "香菲丽莎旗舰店2",
      description: "这是香菲丽莎旗舰店下的第二号产品,欲购请从速",
      price: 2,
      rating: 2,
      classify: ["节前热销", "节后大卖"]
    },
    {
      id: 3,
      url:
        "https://img.alicdn.com/bao/uploaded/TB135MtwRnTBKNjSZPfSuvf1XXa.jpg",
      title: "香菲丽莎旗舰店3",
      description: "这是香菲丽莎旗舰店下的第三号产品,欲购请从速",
      price: 3,
      rating: 3,
      classify: ["节前热销", "节后大卖"]
    },
    {
      id: 4,
      url:
        "https://img.alicdn.com/bao/uploaded/TB1wFvjuiMnBKNjSZFCSut0KFXa.jpg",
      title: "香菲丽莎旗舰店4",
      description: "这是香菲丽莎旗舰店下的第四号产品,欲购请从速",
      price: 4,
      rating: 4,
      classify: ["节前热销", "节后大卖"]
    },
    {
      id: 5,
      url:
        "https://img.alicdn.com/bao/uploaded/TB1shYRwHsrBKNjSZFpSuwXhFXa.jpg",
      title: "香菲丽莎旗舰店5",
      description: "这是香菲丽莎旗舰店下的第五号产品,欲购请从速",
      price: 5,
      rating: 5,
      classify: ["节前热销", "节后大卖"]
    },
    {
      id: 6,
      url:
        "https://img.alicdn.com/bao/uploaded/TB1BU3fwAomBKNjSZFqSuttqVXa.jpg",
      title: "香菲丽莎旗舰店6",
      description: "这是香菲丽莎旗舰店下的第六号产品,欲购请从速",
      price: 6,
      rating: 6,
      classify: ["节前热销", "节后大卖"]
    }
  ];
  private comments: Comment[] = [
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
  constructor() {}
  getAllCategories(): string[] {
    return ["电子产品", "硬件设备", "图书"];
  }
  getProduct(id: number): Product {
    return this.products.find(product => product.id === Number(id));
  }
  getProductList() {
    return this.products;
  }
  // 根据传过来的商品ID返回评论中商品Id一样的数组
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter(
      (comment: Comment) => comment.productId === Number(id)
    );
  }
}
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
