// tslint:disable-next-line:quotemark
import { Component, OnInit } from "@angular/core";
import { ProductService, Product } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: Array<Product>;
  keyword: any = '';
  titleFilter: FormControl = new FormControl();
  constructor(private productservice: ProductService) {
    this.titleFilter.valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => (this.keyword = value));
  }
  ngOnInit() {
    this.products = this.productservice.getProductList();
  }
}
