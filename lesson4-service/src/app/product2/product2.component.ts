import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
// import { AnotherproductService } from './../shared/anotherproduct.service';
@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
  //  providers: [
  // 当组建内部有providers声明时 优先级最高
  //   {
  //     provide: ProductService, // 看作一个名为ProductService的token 实例化的是AnotherProductService
  //     useClass: AnotherproductService
  //   }
  // ]
})
export class Product2Component implements OnInit {
  product: Product;
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.product = this.productService.getProduct();
  }
}
