import { Injectable } from '@angular/core';
import { ProductService, Product } from './product.service';
import { LoggerService } from './logger.service';
@Injectable()
export class AnotherproductService implements ProductService {
  constructor(public logger: LoggerService) {}
  getProduct(): Product {
    this.logger.log('不挣钱怎么养家！');
    return new Product(2, '红米2A', 699, '当初的红米手机啊');
  }
}
