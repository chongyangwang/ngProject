import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
// 评论列表类型校验
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

//  搜索时表单字段的类型校验
export class ProductSearchParams {
  constructor(
    public title: string,
    public price: number,
    public category: string
  ) {}
}

@Injectable()
export class ProductService {
  products: any;
  comments: any;
  searchEvent: EventEmitter<ProductSearchParams> = new EventEmitter();
  constructor(private http: HttpClient) {}
  getAllCategories(): string[] {
    return ['节前大卖', '节后热销', '过期无款'];
  }

  getProductList(): Observable<any> {
    return this.http.get('/api/products').pipe(
      map(res => {
        // tslint:disable-next-line:no-unused-expression
        return res;
      })
    );
  }
  // 得到单个商品
  getProduct(id: number): Observable<any> {
    return this.http.get('/api/product/' + id).pipe(
      map(res => {
        // tslint:disable-next-line:no-unused-expression
        return res;
      })
    );
  }
  // 根据传过来的商品ID返回评论中商品Id一样的数组
  getCommentsForProductId(id: number): Observable<any> {
    return this.http.get('/api/product/' + id + '/comments').pipe(
      map(res => {
        // tslint:disable-next-line:no-unused-expression
        return res;
      })
    );
  }

  searchProducts(form: ProductSearchParams): Observable<any> {
    return this.http
      .post(`/api/products`, form, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(
        map(res => {
          // tslint:disable-next-line:no-unused-expression
          return res;
        })
      );
  }
  // private encodeParams(params: ProductSearchParams) {
  //   return Object.keys(params)
  //     .filter(key => params[key])
  //     .reduce((sum: URLSearchParams, key: string) => {
  //       sum.append(key, params[key]);
  //       return sum;
  //     }, new URLSearchParams());
  // }
}
