// tslint:disable-next-line:quotemark
import { Component, OnInit } from "@angular/core";
import { ProductService, Product } from '../shared/product.service';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private productservice: ProductService) {}
  ngOnInit() {
    this.products = this.productservice.getProductList();
    this.productservice.searchEvent.subscribe(params => {
      // 订阅时拿到请求的参数
      this.products = this.productservice.searchProducts(params);
    });
  }
}
