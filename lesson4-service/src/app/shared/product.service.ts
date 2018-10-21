import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class ProductService {
  constructor(public logger: LoggerService) {}
  // 方法名后面冒号代表返回值
  getProduct(): Product {
    this.logger.log('不学习怎么挣工资');
    return new Product(1, '华为荣耀', 1050, '我的华为手机');
  }
}
//  声明typescript类
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public description: string
  ) {}
}
