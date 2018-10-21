import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // 手工订阅;
  // dataSource: Observable<any>;
  // products: Array<any> = [];
  // 自动订阅 + 异步管道
  products: Observable<any>;
  constructor(private http: HttpClient) {
    // get只是定义了这个http请求并未真正与服务器交互
    // this.dataSource = this.http.get('/api/products').pipe(map(res => res));
    //  自动订阅+异步管道
    const myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders.set('Authorization', 'Basic 123456');
    this.products = this.http
      .get('/api/products', { headers: myHeaders })
      .pipe(map(res => res));
  }

  ngOnInit() {
    // 订阅时才会发出请求
    // this.dataSource.subscribe(data => {
    //   this.products = data;
    // });
  }
}
